import React, { memo } from 'react'
import { motion } from 'framer-motion'
import animations from './animations'

export type AnimationLayoutProps = {
  children: React.ReactNode
}

const AnimationLayout = ({ children }: AnimationLayoutProps) => {
  return (
    <motion.div variants={animations.layout} initial='hidden' animate='enter' exit='exit'>
      {children}
    </motion.div>
  )
}

export default memo<AnimationLayoutProps>(AnimationLayout)
