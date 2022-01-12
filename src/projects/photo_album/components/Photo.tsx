import React, { ReactElement } from 'react';
import ImageLoad from './ImageLoad';

export interface PhotoProps {
  urls: {
    raw: string;
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

export default function Photo(props: PhotoProps): ReactElement {
  const {
    user: {
      name,
      portfolio_url,
      profile_image: { medium }
    },
    likes
  } = props;

  return (
    <article className="photo">
      <ImageLoad
        alt={props.alt_description}
        placeholder={props.blur_hash}
        regular={props.urls.raw + '&w=370&h=320'}
      />
      <div className="info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url} target="_blank" rel="noreferrer">
          <img src={medium} alt="User Avatar" className="user-img" />
        </a>
      </div>
    </article>
  );
}
