import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "link";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
}) => {
  const baseStyles = "font-medium py-2 px-4 rounded focus:outline-none";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-neutral-50 text-neutral-900 hover:bg-neutral-200",
    link: "text-orange-500 hover:underline",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
