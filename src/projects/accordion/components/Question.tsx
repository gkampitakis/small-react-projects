import React, { ReactElement, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'


interface QuestionProps {
  info: string;
  title: string;
}


export default function Question ({ data }: { data: QuestionProps }): ReactElement {
  const [show, setShow] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{data.title}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      { show && <p>{data.info}</p>}
    </article>
  );
}
