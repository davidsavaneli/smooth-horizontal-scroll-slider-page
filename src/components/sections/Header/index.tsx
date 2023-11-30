// import React, { memo } from "react";
// import Link from "next/link";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useWindowInnerHeight } from "hooks";

// import styles from "./styles.module.css";

// const Header = () => {
//   const { scrollY } = useScroll();
//   const windowInnerHeight = useWindowInnerHeight();

//   const opacity = useTransform(scrollY, [0, windowInnerHeight], [0.4, 1]);

//   return (
//     <motion.header className={styles.header} style={{ opacity }}>
//       <motion.div>
//         <Link scroll={false} href="/">Home</Link>
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <Link scroll={false} href="/about">About</Link>
//       </motion.div>
//     </motion.header>
//   );
// };

// export default memo(Header);



import Image from "next/image";
import React, { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {OptimizedImage} from "components";

import logoSrc from 'assets/images/logo.png'

import styles from "./styles.module.css";

const Header = () => {

  return (
    <motion.header className={styles.header}>
      <div className={styles.img}>
      <OptimizedImage
        src={'width=256,quality=75,format=auto/ecommerce/e3b2b831-8fa1-4eed-9107-1ea92f373939.png'}
        fill
        alt=""
        // unoptimized
      />
      </div>
      <motion.div>
        <Link scroll={false} href="/">Home</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link scroll={false} href="/about">About</Link>
      </motion.div>
    </motion.header>
  );
};

export default memo(Header);