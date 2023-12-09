import React from 'react'
import { Welcome, ExampleGeneral } from 'components'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.app}>
      <Welcome />
      <ExampleGeneral />
    </div>
  )
}

export default View
