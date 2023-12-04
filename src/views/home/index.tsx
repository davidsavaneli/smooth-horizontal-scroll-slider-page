import React from 'react'
import { SliderContainer, SliderWrapper, SliderItem } from 'smooth-horizontal-scroll-slider'

const View = () => {
  return (
    <SliderContainer speed={2} progressBar={{ show: true, position: 'bottom' }}>
      <SliderWrapper direction='ltr' items={{ fullWidth: true, fullHeight: true }}>
        <SliderItem>1</SliderItem>
        <SliderItem>2</SliderItem>
        <SliderItem>3</SliderItem>
      </SliderWrapper>
    </SliderContainer>
  )
}

export default View
