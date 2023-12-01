import React from "react";

import "./style.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white font-bold py-2 px-4 rounded primary-btn"
    >
      {text}
    </button>
  );
};

export default CustomButton;
