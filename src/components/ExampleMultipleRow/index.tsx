import React, { memo } from 'react'
import clsx from 'clsx'
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'
import { ExampleDescriptionLayout, HighligherLayout } from 'components'
import styles from './styles.module.css'

const ExampleMultipleRow = () => {
  return (
    <div>
      <div className='row no-gutters'>
        <div className='col-6'>
          <ExampleDescriptionLayout title='Multiple Row' />
        </div>
        <div className='col-6'>
          <HighligherLayout>
            {`
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'

const MyComponent = () => {
  return (
    <Shss progressBar={{ show: false }} speed={2}>
      <ShssWrapper direction='ltr' slides={{ fullWidth: false, fullHeight: false, gap: 20 }}>
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
      <ShssWrapper direction='rtl' slides={{ fullWidth: false, fullHeight: false, gap: 20 }}>
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
`}
          </HighligherLayout>
        </div>
      </div>
      <Shss progressBar={{ show: false }} speed={2}>
        <ShssWrapper direction='ltr' slides={{ fullWidth: false, fullHeight: false, gap: 20 }}>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
              }}
            >
              Slide One
            </div>
          </ShssSlide>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
              }}
            >
              Slide Two
            </div>
          </ShssSlide>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%)',
              }}
            >
              Slide Three
            </div>
          </ShssSlide>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)',
              }}
            >
              Slide Four
            </div>
          </ShssSlide>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%)',
              }}
            >
              Slide Five
            </div>
          </ShssSlide>
        </ShssWrapper>
        <ShssWrapper direction='rtl' slides={{ fullWidth: false, fullHeight: false, gap: 20 }}>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)',
              }}
            >
              Slide Ten
            </div>
          </ShssSlide>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(284, 100%, 53%, 1) 0%, hsla(77, 100%, 64%, 1) 100%)',
              }}
            >
              Slide Nine
            </div>
          </ShssSlide>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%)',
              }}
            >
              Slide Eight
            </div>
          </ShssSlide>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(94, 100%, 70%, 1) 0%, hsla(0, 100%, 77%, 1) 100%)',
              }}
            >
              Slide Seven
            </div>
          </ShssSlide>
          <ShssSlide>
            <div
              className={clsx(styles.slide)}
              style={{
                backgroundColor: '#0A97EB',
                background: 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
              }}
            >
              Slide Six
            </div>
          </ShssSlide>
        </ShssWrapper>
      </Shss>
    </div>
  )
}

export default memo(ExampleMultipleRow)
