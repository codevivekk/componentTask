import React from 'react'

const Button = ({btnStyle}) => {
  return (
    <button type='button' className={`px-[20px] rounded font-montserrat text-sm font-normal leading-[18.2px]   py-[10px] h-[40px] w-[340px] ${btnStyle}`}> Done </button>
  )
}

export default Button
