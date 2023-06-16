// eslint-disable-next-line no-unused-vars
import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(({ id, label, type, value, onChange }, ref) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
});

Input.displayName = "Input";

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
