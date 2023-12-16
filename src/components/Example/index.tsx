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
      <ShssWrapper>
        <ShssSlide>
          <div className='your-custom-class'>Slide content here ...</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide content here ...</div>
        </ShssSlide>
        ...

      </ShssWrapper>
      <ShssWrapper direction='rtl'>
        <ShssSlide>
          <div className='your-custom-class'>Slide content here ...</div>
        </ShssSlide>
        <ShssSlide>
          <div className='your-custom-class'>Slide content here ...</div>
        </ShssSlide>
        ...

      </ShssWrapper>
    </Shss>
  );
};

export default MyComponent;
`}
          </HighligherLayout>
        </div>
      </div>
      <Shss speed={2}>
        <ShssWrapper>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(94, 100%, 70%, 1) 0%, hsla(0, 100%, 77%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
        </ShssWrapper>
        <ShssWrapper direction='rtl'>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(239, 100%, 67%, 1) 0%, hsla(187, 100%, 89%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(16, 100%, 76%, 1) 0%, hsla(49, 100%, 81%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(57, 100%, 48%, 1) 0%, hsla(204, 84%, 66%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(302, 82%, 76%, 1) 0%, hsla(258, 40%, 68%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(40, 94%, 74%, 1) 0%, hsla(60, 89%, 72%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
          <ShssSlide>
            <div className={clsx(styles.slide)}>
              <div
                className={styles.slideInner}
                style={{
                  background: 'linear-gradient(90deg, hsla(265, 53%, 29%, 1) 0%, hsla(24, 93%, 73%, 1) 100%)',
                }}
              ></div>
            </div>
          </ShssSlide>
        </ShssWrapper>
      </Shss>
    </div>
  )
}

export default memo(Example)
