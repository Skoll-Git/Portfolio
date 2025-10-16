import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollTop}
      aria-label="Retour en haut"
      style={{ backgroundColor: '#1C4E80' }}
      className={
        `fixed right-5 top-1/2 -translate-y-1/2 text-white rounded-lg w-12 h-12 flex items-center justify-center shadow-lg z-50
         transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2` +
        (visible
          ? ' opacity-80 scale-100 pointer-events-auto'
          : ' opacity-0 scale-90 pointer-events-none')
      }
    >
      <span className="text-xl leading-none">↑</span>
    </button>
  )
}