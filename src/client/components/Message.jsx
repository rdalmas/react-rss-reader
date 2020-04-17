import React, { useContext } from "react";

import { AppContext } from "../providers/app.provider";

const Message = () => {
  const { message, error, loading } = useContext(AppContext);
  return (
    <div>
      {error && (
        <p className="center" aria-label="Error">{message}</p>
      )}
      {loading && (
        <p className="center" aria-label="Info">{message}</p>
      )}
    </div>
  );
}

export default Message;