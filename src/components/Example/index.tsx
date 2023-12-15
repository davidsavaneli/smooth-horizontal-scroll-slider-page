import React, { memo } from 'react'
import clsx from 'clsx'
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'
import { ExampleDescriptionLayout, HighligherLayout } from 'components'
import styles from './styles.module.css'

const Example = () => {
  return (
    <div>
      <div className='row no-gutters'>
        <div className='col-6'>
          <ExampleDescriptionLayout title='Example' />
        </div>
        <div className='col-6'>
          <HighligherLayout>
            {`
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'

const MyComponent = () => {
  return (
    <Shss speed={2}>
      <ShssWrapper direction='ltr'>
        <ShssSlide>
          <div className='your-custom-class'>Slide One</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Two</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Three</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Four</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Five</div>
        </ShssSlide>
      </ShssWrapper>
      <ShssWrapper direction='rtl'>
        <ShssSlide>
          <div className='your-custom-class'>Slide Ten</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Nine</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Eight</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Seven</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide Six</div>
        </ShssSlide>
      </ShssWrapper>
    </Shss>
  );
};

export default MyComponent;


// CSS

.your-custom-class {
  width: 1200px;
  height: 50vh;
}
`}
          </HighligherLayout>
        </div>
      </div>
      <Shss speed={2}>
        <ShssWrapper direction='ltr'>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.one)}>Slide One</div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.two)}>Slide Two</div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.three)}>Slide Three</div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.four)}>Slide Four</div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.five)}>Slide Five</div>
          </ShssSlide>
        </ShssWrapper>
        <ShssWrapper direction='rtl'>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.ten)}>Slide Ten</div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.nine)}>Slide Nine</div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.eight)}>Slide Eight</div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.seven)}>Slide Seven</div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide, styles.six)}>Slide Six</div>
          </ShssSlide>
        </ShssWrapper>
      </Shss>
    </div>
  )
}

export default memo(Example)
