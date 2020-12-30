import React, { ReactElement, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useBodyStyles, useDocTitle } from '../../hooks';
import 'github-markdown-css';
import './index.scss';


export default function App (): ReactElement {
  useDocTitle('Markdown Preview');
  useBodyStyles({
    background: 'hsl(210, 36%, 96%)'
  });
  const [preview, setPreview] = useState('# markdown preview');

  return (
    <main className="markdown_preview">
      <section>
        <textarea
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
        />
        <article>
          <ReactMarkdown className="markdown-body">{preview}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
