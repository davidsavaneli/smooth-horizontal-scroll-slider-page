import React from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import 'assets/css/styles.css'

const App = ({ Component, router, pageProps }: AppProps) => {
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
