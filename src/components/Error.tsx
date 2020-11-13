import React, { useEffect, ReactElement } from 'react';


interface ErrorProps {
  error?: Error;
  message?: string;
}


function Error ({ error, message }: ErrorProps): ReactElement {
  useEffect(() => {
    if (error)
      console.log(error);
  }, [error]);

  const msg = message ? message : error?.message;

  return (
    <main className="error_component">
      <img src="./images/error.svg" alt="Error page image" />
      <footer>
        {
          msg && <h2>{msg}</h2>
        }
        {
          error && <p>You can check console for more information</p>
        }
      </footer>
    </main >
  );
}

export default Error;
