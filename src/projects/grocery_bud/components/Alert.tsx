import React, { useState, useEffect, ReactElement } from 'react';

export interface AlertI {
  msg: string;
  type: 'success' | 'danger' | '';
}

type AlertProps = AlertI & {
  data: { title: string; id: string }[];
};

export default function Alert({ msg, type, data }: AlertProps): ReactElement {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!msg) return;

    setShow(true);
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [data, msg]);

  return <>{show && <p className={`alert alert-${type}`}>{msg}</p>}</>;
}
