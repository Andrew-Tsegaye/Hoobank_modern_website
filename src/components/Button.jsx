import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

export default Button;
