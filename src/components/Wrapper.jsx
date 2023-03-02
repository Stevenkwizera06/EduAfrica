import React from "react";

const Wrapper = ({ children, styles }) => {
  return (
    <div className={`max-w-[1080px] px-20 lg:px-28 xl:px-0 mx-auto ${styles}`}>
      {children}
    </div>
  );
};

export default Wrapper;
