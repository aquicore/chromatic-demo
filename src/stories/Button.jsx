import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, onClick, clickedText, ...props }) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";

  const [clicked, setClicked] = useState(false);

  const internalOnClick = useCallback(() => {
    setClicked(true);
    onClick();
  }, [onClick]);

  const style = {
    border: "thin solid red",
    backgroundColor,
  };

  return (
    <>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
        style={style}
        {...props}
        onClick={internalOnClick}
      >
        {label}
      </button>
      {clicked && <p>{clickedText}</p>}
    </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
