import React, { useState } from 'react';
import NextImage, { ImageProps, ImageLoaderProps } from 'next/image';
import styles from './styles.module.css';

export type ComponentProps = ImageProps & {
  format?: 'webp' | 'png' | 'jpeg' | 'avif' | 'svg' | 'gif' | 'auto';
};

const OptimizedImage = ({ format = 'auto', ...props }: ComponentProps) => {
  const [error, setError] = useState(false);

  return !error ? (
    <div className={styles.test}>
      <NextImage
      className='next-image'
        loader={({ src, quality, width }: ImageLoaderProps) => {
          const pattern = /[^\/]+\/[^\/]+$/;
          const match = src.match(pattern);
          const source = match?.[0];

          const params = [
            `width=${props.sizes !== 'auto' ? width : 'auto'}`,
            `quality=${quality || 75}`,
            `format=${format}`,
          ];

          return `${'https://cdnecommerce.meama.ge/cdn-cgi/image/'}${params.join(',')}/${source}`;
        }}
        {...props}
        onLoadingComplete={(img) => img.classList.add('loaded')}
        onError={() => setError(true)}
        onLoad={() => setError(false)}
      />
    </div>
  ) : (
    <div>Image Not Found</div>
  );
};

export default OptimizedImage;
