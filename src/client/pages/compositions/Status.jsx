import React from 'react';

import useAppState from "../../hooks/useAppState";

const Status = () => {
  const [{ message, error, loading }] = useAppState();

  return (
    <div>
      {error && (
        <p className="center" aria-label="Error">{message}</p>
      )}
      {loading && (
        <p className="center" aria-label="Info">{message}</p>
      )}
    </div>
  )
}

export default Status;
