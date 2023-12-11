import React from 'react'
import { Welcome, ExampleGeneral, ExampleAutoSize, ExampleDirection } from 'components'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.app}>
      <Welcome />
      <ExampleGeneral />
      <ExampleAutoSize />
      <ExampleDirection />
    </div>
  )
}

export default View
