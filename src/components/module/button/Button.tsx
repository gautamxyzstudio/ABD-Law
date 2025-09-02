import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-[50px] py-[14px] bg-primary text-white text-base font-bold rounded-sm ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
