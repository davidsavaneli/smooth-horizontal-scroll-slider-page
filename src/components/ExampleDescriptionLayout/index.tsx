/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from 'react'

import styles from './styles.module.css'

export type ExampleDescriptionLayoutProps = {
  title?: string
  children?: string
}

const ExampleDescriptionLayout = ({ title = '', children }: ExampleDescriptionLayoutProps) => {
  return (
    <div className={styles.exampleDescription}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children && <div className={styles.description}>{children}</div>}
    </div>
  )
}

export default memo<ExampleDescriptionLayoutProps>(ExampleDescriptionLayout)
