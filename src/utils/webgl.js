// Returns true if the browser can create a WebGL context.
// Used to decide whether to render the 3D hero or a static fallback.
export function webglAvailable() {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch (e) {
    return false
  }
}
