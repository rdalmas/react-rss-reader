import React, { useState } from 'react';

const Input = (props) => {
  const { value, placeholder, ...custom } = props;
  const [text, updateText] = useState(value);

  const handleOnChange = (event) => {
    updateText(event.target.value);
  }
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={text}
      onChange={handleOnChange}
      {...custom}
    />
  )
};

export default Input;
