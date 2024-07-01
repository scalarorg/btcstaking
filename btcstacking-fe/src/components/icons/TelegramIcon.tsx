import React from "react";

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      fill="none"
      viewBox="0 0 41 40"
      {...props}
    >
      <path
        fill="#fff"
        d="M20.136 40c11.048 0 20-8.952 20-20s-8.952-20-20-20-20 8.952-20 20 8.952 20 20 20zM9.288 19.567l19.283-7.435c.895-.324 1.676.218 1.386 1.571l.002-.001-3.283 15.468c-.243 1.097-.895 1.363-1.807.847l-5-3.685-2.412 2.323c-.266.267-.491.492-1.008.492l.355-5.089 9.267-8.371c.403-.355-.09-.555-.622-.202l-11.452 7.21-4.936-1.54c-1.072-.34-1.095-1.072.227-1.588z"
      ></path>
    </svg>
  );
}

export default TelegramIcon;
