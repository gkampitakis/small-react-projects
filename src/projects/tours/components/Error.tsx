import React, { useEffect } from 'react';

export default function Error ({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error])

  return (
    <>
      <h3>An unexpected Error occurred</h3>
      <p>You can check console for more details</p>
    </>
  )
}
