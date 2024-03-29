import React from "react";

function Container({className, children}) {
  return <div className= {`max-w-container px-3 mx-auto lg:px-[50px] ${className}`} >{children}</div>;
}

export default Container;
