import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadGalleryPage from './pages/CadGalleryPage'
import CadDetailPage from './pages/CadDetailPage'

/** Reset scroll on route change (hash anchors on the home page still work). */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cad" element={<CadGalleryPage />} />
        <Route path="/cad/:slug" element={<CadDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}
