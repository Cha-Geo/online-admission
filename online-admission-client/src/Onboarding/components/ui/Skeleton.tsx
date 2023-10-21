import React from "react";

interface ISkeleton {
    width: string;
    height: string;
    animationDuration: string;
}

const Template = ({ width, height, animationDuration }: ISkeleton) => {
  const style = {
    width: width || "100%",
    height: height || "16px",
    animationDuration: animationDuration || "1.5s",
  };

  return <div className="loading-skeleton" style={style}></div>;
};

const LoadingSkeleton = () => {
  return (
    <div>
      <h2>
        <Template width="100%" height="8rem" animationDuration="4s" />
      </h2>
      <p>
        <Template width="80%" height="16px" animationDuration="5s" />
      </p>
      <ul>
        <li>
          <Template width="40%" height="16px" animationDuration="6s" />
        </li>
        <li>
          <Template width="60%" height="16px" animationDuration="5s" />
        </li>
      </ul>
    </div>
  );
};

export default LoadingSkeleton;
