import React, { memo } from 'react'
import clsx from 'clsx'
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'
import styles from './styles.module.css'

const ExampleGeneral = () => {
  return (
    <Shss>
      <ShssWrapper>
        <ShssSlide>
          <div className={clsx(styles.slide, styles.one)}>Slide One</div>
        </ShssSlide>
        <ShssSlide>
          <div className={clsx(styles.slide, styles.two)}>Slide Two</div>
        </ShssSlide>
        <ShssSlide>
          <div className={clsx(styles.slide, styles.three)}>Slide Three</div>
        </ShssSlide>
      </ShssWrapper>
    </Shss>
  )
}

export default memo(ExampleGeneral)
