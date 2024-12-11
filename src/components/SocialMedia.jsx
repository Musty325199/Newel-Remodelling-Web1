import React from 'react'
import { assets } from '../assets/assets'

const SocialMedia = () => {
  return (
    <div
    style={{ borderRadius: "25px" }}
    className="z-[100] w-[40px] h-[170px] hover:bg-gray-800 duration-300 left-0 top-[30%] p-2 justify-center gap-5  items-center flex fixed flex-col"
  >
    <img
      className="cursor-pointer"
      width={30}
      src={assets.facebook}
      alt=""
    />
    <img
      className="cursor-pointer"
      width={30}
      src={assets.whatsapp}
      alt=""
    />
    <img
      className="cursor-pointer"
      width={30}
      src={assets.twitter}
      alt=""
    />
  </div>
  )
}

export default SocialMedia