/* eslint-disable @typescript-eslint/no-var-requires */
import React, { ReactElement } from 'react';

interface ImageLoaderProps {
  imgPath: string;
  projectName: string;
}

export default function ImageLoader ({ imgPath, projectName }: ImageLoaderProps): ReactElement {
  return (
    <picture>
      <source srcSet={require(`${imgPath}.webp`).default} />
      <img src={require(`${imgPath}.png`).default} alt={`${projectName} Project`} />
    </picture>
  );
}

