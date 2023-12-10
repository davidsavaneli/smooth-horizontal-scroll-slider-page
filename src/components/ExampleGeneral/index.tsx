import React, { memo } from 'react'
import clsx from 'clsx'
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'
import { ExampleDescriptionLayout, HighligherLayout } from 'components'
import styles from './styles.module.css'

const ExampleGeneral = () => {
  return (
    <div>
      <div className='row no-gutters'>
        <div className='col-6'>
          <ExampleDescriptionLayout title='General Example' />
        </div>
        <div className='col-6'>
          <HighligherLayout>
            {`
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'

const MyComponent = () => {
  return (
    <Shss>
      <ShssWrapper>
        <ShssSlide>
          <div className='your-custom-class'>Slide One</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Two</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Three</div>
        </ShssSlide>
      </ShssWrapper>
    </Shss>
  );
};

export default MyComponent;
`}
          </HighligherLayout>
        </div>
      </div>
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
    </div>
  )
}

export default memo(ExampleGeneral)
