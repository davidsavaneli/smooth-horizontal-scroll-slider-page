import React, { memo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type AnimatedButtonProps = React.ComponentProps<'button'> & {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
};

const AnimatedButton = ({
  label,
  size = 'medium',
  loading = false,
  ...props
}: AnimatedButtonProps) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={clsx(styles.button, {
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium',
          [styles.large]: size === 'large',
        })}
        {...props}
      >
        {label && <span className={styles.label}>{label}</span>}
        {loading && <div className={styles.loaderBox}></div>}
        <div className={styles.lines}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.dots}></div>
      </button>
    </div>
  );
};

export default memo<AnimatedButtonProps>(AnimatedButton);