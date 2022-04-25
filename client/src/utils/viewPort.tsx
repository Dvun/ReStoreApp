import {useState, useEffect} from 'react'

export default function useViewPort() {
  const [viewPort, setViewPort] = useState<number>(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setViewPort(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (viewPort <= 767) return 'mobile'
  if (viewPort >= 768 && viewPort <= 919) return 'tablet'
  if (viewPort >= 920 && viewPort <= 1024) return 'untilDesktop'
  if (viewPort > 1024 && viewPort <= 1216) return 'desktop'
  if (viewPort > 1216 && viewPort < 1408) return 'widescreen'
  if (viewPort > 1408) return 'fullhd'
}