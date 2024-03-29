import React from "react";


function TextImg({Img, txt}) {
  return (
    <>
      <div className="flex items-center justify-center gap-3 w-fit">
        {Img} 
        <p className="text-base font-normal">{txt}</p>
      </div>
    </>
  );
}

export default TextImg;
