import React, { useEffect, ReactElement } from 'react';

function Error ({ error }: { error: Error }): ReactElement {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <h2>An unexpected Error ocurred</h2>
      <p>You can check console for more information</p>
    </>
  );
}

export default Error;