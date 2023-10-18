import React from "react";

interface ArrowDown {
  className?: string;
  size?: number;
}

const ScrollIcon: React.FC<ArrowDown> = ({ size, className }) => {
  return (
    <svg
      data-v-b5406062=""
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8l8-8z"
      ></path>
    </svg>
  );
};

export default ScrollIcon;
