import React from 'react'
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'

import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.examplePage}>
      <div style={{ height: '500px', backgroundColor: 'red' }}></div>
      <Shss>
        <ShssWrapper>
          <ShssSlide>Slide One</ShssSlide>
          <ShssSlide>Slide Two</ShssSlide>
          <ShssSlide>Slide Three</ShssSlide>
        </ShssWrapper>
      </Shss>
      <div style={{ height: '500px', backgroundColor: 'blue' }}></div>
    </div>
  )
}

export default View
