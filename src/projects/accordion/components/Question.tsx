import React, { ReactElement, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


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
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      { show && <p>{data.info}</p>}
    </article>
  );
}
