import React, { ReactElement } from 'react';
import ImageLoad from './ImageLoad';


export interface PhotoProps {
  urls: {
    regular: string;
  };
  blur_hash: string;
  alt_description: string;
  likes: number;
  user: {
    name: string;
    portfolio_url: string;
    profile_image: {
      medium: string;
    };
  };
}

export default function Photo (props: PhotoProps): ReactElement { //TODO: add decorations
  return (
    <article className="photo">
      <ImageLoad
        alt={props.alt_description}
        placeholder={props.blur_hash}
        regular={props.urls.regular}
      />
    </article>
  );
}
