import React from "react";

interface ArrowUpRightProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const ArrowUpRight: React.FC<ArrowUpRightProps> = ({
  width = 24,
  height = 24,
  color = "currentColor",
  strokeWidth = 1.25,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`lucide lucide-arrow-up-right ${className}`}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
};

export default ArrowUpRight;
