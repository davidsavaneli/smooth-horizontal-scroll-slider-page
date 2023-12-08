import React, { memo } from 'react'
import Link from 'next/link'
import Modal from '@mui/material/Modal'
import styles from './styles.module.css'

export type MenuModalProps = {
  open: boolean
  handleClose: () => void
}

const MenuModal = ({ open, handleClose }: MenuModalProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles.menuModal}>
        <div className={styles.top}>
          <div className={styles.title}>Examples</div>
          <div onClick={handleClose} className={styles.closeButton}>
            <svg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g id='Menu / Close_MD'>
                <path
                  id='Vector'
                  d='M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18'
                  stroke='#000000'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.menuItems}>
          <Link href={'https://github.com/'} className={styles.menuItem}>
            General
          </Link>
          <Link href={'https://github.com/'} className={styles.menuItem}>
            Speed
          </Link>
          <Link href={'https://github.com/'} className={styles.menuItem}>
            Progress Bar
          </Link>
          <Link href={'https://github.com/'} className={styles.menuItem}>
            Direction
          </Link>
          <Link href={'https://github.com/'} className={styles.menuItem}>
            Slides
          </Link>
        </div>
      </div>
    </Modal>
  )
}

export default memo<MenuModalProps>(MenuModal)
