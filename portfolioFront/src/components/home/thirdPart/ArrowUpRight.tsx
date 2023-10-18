import React from "react";

interface ArrowUpRightIconProps {
  size: string;
}

const ArrowUpRightIcon: React.FC<ArrowUpRightIconProps> = ({ size }) => {
  const iconStyle: React.CSSProperties = {
    width: size,
    height: "auto",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="auto"
      viewBox="0 4 20 24"
      fill="none"
      stroke="#001829"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-up-right"
      style={iconStyle}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
};

export default ArrowUpRightIcon;
