import React from "react";

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
      viewBox="0 0 11 11"
      {...props}
    >
      <path
        fill="#fff"
        d="M5.5 0C2.46 0 0 2.46 0 5.5S2.46 11 5.5 11 11 8.54 11 5.5 8.54 0 5.5 0zm0 10.233A4.738 4.738 0 01.767 5.5 4.738 4.738 0 015.5.767 4.738 4.738 0 0110.233 5.5 4.738 4.738 0 015.5 10.233z"
      ></path>
      <path
        fill="#fff"
        d="M5.5 4.585c-.326 0-.557.137-.557.34v2.758c0 .174.231.348.557.348.311 0 .565-.174.565-.348V4.925c0-.203-.254-.34-.565-.34zM5.5 2.883c-.333 0-.594.24-.594.514 0 .276.261.522.594.522.326 0 .587-.246.587-.522 0-.275-.261-.514-.587-.514z"
      ></path>
    </svg>
  );
}

export default InfoIcon;
