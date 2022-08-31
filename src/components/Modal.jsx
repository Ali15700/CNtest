import React from 'react'

const Modal = (props) => {
  return (
    <div>
      <div className="mx-auto h-44 w-60 bg-gray-800 text-center py-1 rounded-lg">
        <h1 className="text-4xl font-family[Poppins] font-bold letter-spacing[-5%] text-white my-7">Sorry</h1>
        <p className="font-family[Poppins] font-normal letter-spacing[-5%] text-white">{props.msg}</p>
      </div>
    </div>
  )
}

export default Modal
