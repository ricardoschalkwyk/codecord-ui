import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

// This component is for a dynamic Button component.

function Button({ className, children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      className={clsx(
        "flex w-full items-center gap-2 rounded py-1.5 px-2 opacity-60 hover:bg-discord-light-gray hover:bg-opacity-60",
        className
      )}
      onClick={(e) => {
        onClick?.(e);
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
