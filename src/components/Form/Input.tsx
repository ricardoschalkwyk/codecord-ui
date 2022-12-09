import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ onChange, placeholder, type = "text", value = "" }) => {
  const [input, setInput] = useState(value);

  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={input}
        className="w-full bg-discord-input text-sm text-discord-white placeholder:text-discord-placeholder focus:outline-none"
        onChange={(e) => {
          setInput(e.target.value);
          onChange?.();
        }}
      />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
