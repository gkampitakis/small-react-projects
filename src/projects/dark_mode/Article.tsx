import React, { ReactElement } from 'react';

interface ArticleProps {
  title: string;
  date: Date;
  length: number;
  snippet: string;
}

export default function Article (
  { title, length, snippet, date }: ArticleProps
): ReactElement {

  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="info">
        <span>{date.toDateString()}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
}
