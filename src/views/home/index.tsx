import React from 'react'
import { Welcome, Example } from 'components'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.app}>
      <Welcome />
      <Example />
    </div>
  )
}

export default View
