import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainTitle}>Smooth Horizontal Scroll Slider</h1>
      <div className={styles.description}>
        &quot;Smooth Horizontal Scroll Slider&quot; is a lightweight npm package designed for React projects with
        TypeScript. It seamlessly integrates smooth horizontal scrolling in vertical containers, simplifying dynamic
        layouts and enhancing UI animations.
      </div>
      <div className={styles.buttons}>
        <Link
          href={'https://github.com/davidsavaneli/smooth-horizontal-scroll-slider'}
          target='_blank'
          className={styles.button}
        >
          View on GitHub
          <div className={styles.buttonImg}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
              <path d='m16 .396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183.803.151 1.093-.344 1.093-.772 0-.38-.009-1.385-.015-2.719-4.453.964-5.391-2.151-5.391-2.151-.729-1.844-1.781-2.339-1.781-2.339-1.448-.989.115-.968.115-.968 1.604.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328.14-1.031.557-1.74 1.011-2.135-3.552-.401-7.287-1.776-7.287-7.907 0-1.751.62-3.177 1.645-4.297-.177-.401-.719-2.031.141-4.235 0 0 1.339-.427 4.4 1.641 1.281-.355 2.641-.532 4-.541 1.36.009 2.719.187 4 .541 3.043-2.068 4.381-1.641 4.381-1.641.859 2.204.317 3.833.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891.556.479 1.077 1.464 1.077 2.959 0 2.14-.02 3.864-.02 4.385 0 .416.28.916 1.104.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z' />
            </svg>
          </div>
        </Link>
        <Link
          href={'https://www.npmjs.com/package/smooth-horizontal-scroll-slider'}
          target='_blank'
          className={styles.button}
        >
          View on NPM
          <div className={styles.buttonImg}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <g fill='none' fillRule='evenodd'>
                <path d='m0 0h24v24h-24z' fill='#d40001' />
                <path
                  d='m16.7179487 7.92840493h-4.5128205v12.32101227h-8.2051282v-17.2494172h8.2051282 7.7948718v4.92840493 12.32101227h-3.2820513z'
                  fill='#fff'
                />
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default View
