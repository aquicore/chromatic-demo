import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import "./button.css";

// Utility Function
export const randomUtilityFunction = (a, b) => {
  return a + b;
}

// Custom Hook
const useOnClick = (handler) => {
  const [clicked, setClicked] = useState(false);

  const onClick = useCallback(() => {
    setClicked(true);
    handler();
  }, [handler]);

  return { clicked, onClick };
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, clickedText, ...props }) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";

  const { clicked, onClick } = useOnClick(props.onClick);

  const style = {
    border: "thin solid orange",
    backgroundColor,
  };

  return (
    <>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
        style={style}
        {...props}
        onClick={onClick}
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
