import React from "react";

function DelegationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="none"
      viewBox="0 0 13 13"
      {...props}
    >
      <path
        fill="url(#paint0_linear_5_1442)"
        d="M6.5 7.643c-.63 0-1.143.512-1.143 1.142v.932c.36.128.74.21 1.143.21s.783-.082 1.143-.21v-.932c0-.63-.513-1.142-1.143-1.142z"
      ></path>
      <path
        fill="url(#paint1_linear_5_1442)"
        d="M6.5 6.12a.38.38 0 100-.763.38.38 0 000 .762z"
      ></path>
      <path
        fill="url(#paint2_linear_5_1442)"
        d="M11.096 9.191c-.388 0-.748.118-1.049.318l-.875-.875c.47-.587.756-1.326.756-2.134 0-.808-.293-1.541-.762-2.128l.881-.88c.301.199.661.317 1.049.317 1.05 0 1.904-.855 1.904-1.905S12.146 0 11.096 0C10.046 0 9.19.854 9.19 1.904c0 .388.118.748.318 1.049l-.881.88a3.393 3.393 0 00-2.128-.76c-.808 0-1.541.292-2.128.76l-.88-.88c.199-.301.317-.661.317-1.049C3.809.854 2.954 0 1.904 0S0 .854 0 1.904C0 2.954.854 3.81 1.904 3.81c.388 0 .748-.118 1.049-.318l.88.881a3.393 3.393 0 00-.76 2.128c0 .808.285 1.547.755 2.134l-.875.875a1.891 1.891 0 00-1.049-.318C.854 9.191 0 10.046 0 11.096S.854 13 1.904 13c1.05 0 1.905-.854 1.905-1.904 0-.388-.118-.748-.318-1.049l.875-.874c.075.06.15.12.23.174v-.562c0-1.05.854-1.904 1.904-1.904a1.144 1.144 0 010-2.285c.63 0 1.143.512 1.143 1.142 0 .63-.513 1.143-1.143 1.143 1.05 0 1.904.854 1.904 1.904v.562c.08-.053.155-.114.23-.174l.875.874c-.2.301-.318.661-.318 1.049 0 1.05.855 1.904 1.905 1.904S13 12.146 13 11.096c0-1.05-.854-1.905-1.904-1.905z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_5_1442"
          x1="5.462"
          x2="7.495"
          y1="7.712"
          y2="9.85"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3760F2"></stop>
          <stop offset="1" stopColor="#0EF1F1"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_5_1442"
          x1="6.154"
          x2="6.832"
          y1="5.38"
          y2="6.093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3760F2"></stop>
          <stop offset="1" stopColor="#0EF1F1"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_5_1442"
          x1="0.597"
          x2="12.162"
          y1="0.394"
          y2="12.556"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3760F2"></stop>
          <stop offset="1" stopColor="#0EF1F1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default DelegationIcon;
