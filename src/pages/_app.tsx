import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import 'assets/css/styles.css'

const App = ({ Component, router, pageProps }: AppProps) => {
  useEffect(() => {
    const setWindowHeight = () =>
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01 - 0.01}px`)
    setWindowHeight()
    window.addEventListener('resize', setWindowHeight)

    return () => window.removeEventListener('resize', setWindowHeight)
  })

  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />
  return (
    <div>
      <AnimatePresence mode='wait'>
        <main key={router.route}>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </div>
  )
}

export default App
