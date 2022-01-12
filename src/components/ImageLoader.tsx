/* eslint-disable @typescript-eslint/no-var-requires */
import React, { ReactElement } from 'react';

interface ImageLoaderProps {
  imgPath: string;
  projectName: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function ImageLoader({
  imgPath,
  projectName,
  onClick
}: ImageLoaderProps): ReactElement {
  return (
    <picture onClick={onClick}>
      <source srcSet={require(`${imgPath}.webp`).default} />
      <img
        src={require(`${imgPath}.png`).default}
        alt={`${projectName} Project`}
      />
    </picture>
  );
}
