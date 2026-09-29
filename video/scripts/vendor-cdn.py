#!/usr/bin/env python3
"""Replace cdn.jsdelivr.net / unpkg.com script URLs in a HyperFrames project with local copies from npm.

Cloud sessions may block those CDNs (renders then fail with sub_timeline_script_failure),
while registry.npmjs.org stays reachable. Run it after `hyperframes init` or after adding a library.

Usage: python3 vendor-cdn.py <project_dir>
"""
import re
import shutil
import subprocess
import sys
import tarfile
import tempfile
from pathlib import Path

CDN = re.compile(
    r"https://(?:cdn\.jsdelivr\.net/npm|unpkg\.com)/((?:@[\w.-]+/)?[\w.-]+)@([\w.-]+)/([^\"'\s)]+)"
)


def fetch(pkg, ver, path, dest):
    if dest.exists():
        return
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(["npm", "pack", f"{pkg}@{ver}", "--silent"], cwd=tmp, check=True,
                       stdout=subprocess.DEVNULL)
        tgz = next(Path(tmp).glob("*.tgz"))
        with tarfile.open(tgz) as t:
            t.extractall(tmp, filter="data")
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy(Path(tmp) / "package" / path, dest)


def main():
    root = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
    for html in root.rglob("*.html"):
        if "node_modules" in html.parts:
            continue
        text = html.read_text()

        def local(m):
            pkg, ver, path = m.groups()
            dest = root / "vendor" / f"{pkg}@{ver}" / path
            fetch(pkg, ver, path, dest)
            print(f"{html.relative_to(root)}: {m.group(0)} -> vendor/{pkg}@{ver}/{path}")
            return Path(*[".."] * (len(html.relative_to(root).parts) - 1), "vendor", f"{pkg}@{ver}", path).as_posix()

        new = CDN.sub(local, text)
        if new != text:
            html.write_text(new)


if __name__ == "__main__":
    main()
