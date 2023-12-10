/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import styles from './styles.module.css'

type HighligherLayoutProps = {
  children?: string
}

const HighligherLayout = ({ children }: HighligherLayoutProps) => {
  return (
    <div className={styles.highlighterWrapper}>
      <SyntaxHighlighter language='typescript' style={stackoverflowDark}>{`${children}`}</SyntaxHighlighter>
    </div>
  )
}

export default memo<HighligherLayoutProps>(HighligherLayout)
