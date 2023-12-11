import React from 'react'
import { Welcome, ExampleGeneral, ExampleAutoSize, ExampleDirection, ExampleMultipleRow } from 'components'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.app}>
      <Welcome />
      <ExampleGeneral />
      <ExampleAutoSize />
      <ExampleDirection />
      <ExampleMultipleRow />
    </div>
  )
}

export default View
