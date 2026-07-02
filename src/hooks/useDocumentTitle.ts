import { useEffect } from 'react'

const DEFAULT_TITLE = 'Pouya Azarandaz — Materials & AM Researcher'

/** Sets document.title for the current route, restoring the default on unmount. */
export default function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ?? DEFAULT_TITLE
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title])
}
