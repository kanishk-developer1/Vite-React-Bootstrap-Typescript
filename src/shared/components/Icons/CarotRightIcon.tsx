import { FC } from "react";
import { SVGIconsInterface } from "./SVGIconsInterface";

const CarotRightIcon: FC<SVGIconsInterface> = ({ width, height, fill, viewBox, fillRule }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "16"}
      height={height || "16"}
      fill={fill || "currentColor"}
      className="bi bi-chevron-right"
      viewBox={viewBox || "0 0 16 16"}
    >
      {" "}
      <path
        fillRule={fillRule || "evenodd"}
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />{" "}
    </svg>
  );
};

export default CarotRightIcon;
