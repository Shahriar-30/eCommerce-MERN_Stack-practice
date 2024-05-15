import React from 'react'

function Title({txt, className}) {
  return (
    <h3 className={`text-[20px] lg:text-[39px] font-bold my-5 ${className}`} >{txt}</h3>
  )
}

export default Title