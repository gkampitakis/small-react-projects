import React, { useEffect, ReactElement } from 'react';

interface ErrorProps {
  error?: Error;
  message?: string;
}

function Error ({ error, message }: ErrorProps): ReactElement {
  useEffect(() => {
    console.log(error);
  }, [error]);

  const msg = message ? message : error?.message;

  return (
    <section className="errorContainer">
      <img src="./images/error.svg" />
      <footer>
        {
          msg && <h2>{msg}</h2>
        }
        {
          error && <p>You can check console for more information</p>
        }
      </footer>
    </section >
  );
}

export default Error;