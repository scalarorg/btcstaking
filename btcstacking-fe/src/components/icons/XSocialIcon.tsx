import React from "react";

function XSocialIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill="#fff"
        d="M23.29 16.937L37.86 0h-3.453L21.756 14.706 11.65 0H-.004l15.28 22.239L-.003 40h3.453l13.36-15.53L27.482 40h11.655L23.289 16.937zm-4.73 5.498l-1.548-2.215L4.693 2.6h5.304l9.941 14.22 1.548 2.214L34.41 37.52h-5.303L18.56 22.435z"
      ></path>
    </svg>
  );
}

export default XSocialIcon;
