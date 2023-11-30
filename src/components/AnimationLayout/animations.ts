import { Variants } from 'framer-motion'

type animationTypes = {
  layout: Variants
}

const animations: animationTypes = {
  layout: {
    hidden: { opacity: 0, transition: { duration: 0.3 } },
    enter: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  },
}

export default animations
