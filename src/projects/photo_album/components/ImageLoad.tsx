import React, { ReactElement, useState, useEffect, memo } from 'react';
import { Blurhash } from 'react-blurhash';


interface ImageLoadProps {
  placeholder: string;
  regular: string;
  alt: string;
}

function ImageLoad ({ alt, regular, placeholder }: ImageLoadProps): ReactElement {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const regularImage = new Image();
    regularImage.src = regular;
    regularImage.onload = () => {
      setLoading(false);
    }
  }, [regular]);

  return (
    <>
      <Blurhash
        hash={placeholder}
        width={'100%'}
        height={'100%'}
        resolutionX={600}
        resolutionY={600}
        punch={1}
        style={{
          display: loading ? '' : 'none',
          transition: 'opacity 0.5s'
        }}
      />
      <img
        src={regular}
        alt={alt}
        style={{
          display: loading ? 'none' : '',
          transition: 'opacity 0.5s'
        }}
      />
    </>
  );
}

export default memo(ImageLoad);
