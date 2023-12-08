import React from 'react'
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'

const View = () => {
  return (
    <Shss speed={2} progressBar={{ show: true }}>
      <ShssWrapper direction='ltr'>
        <ShssSlide>1</ShssSlide>
        <ShssSlide>2</ShssSlide>
        <ShssSlide>3</ShssSlide>
      </ShssWrapper>
    </Shss>
  )
}

export default View
