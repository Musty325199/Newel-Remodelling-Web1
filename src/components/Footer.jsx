import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col md:flex-row w-full bg-black">
      <div className="flex flex-col px-10 gap-7 text-[#feae97]">
        <h1 id="contact" className="text-4xl font-semibold text-center">Contact Us</h1>
        <div className="flex items-center gap-3 text-xl w-full md:w-3/4 text-center ">
          <img width={30} src={assets.address} alt="" />
          <p>500 Terry Francine Street San Francisco, CA 94158</p>
        </div>
        <div className="flex items-center gap-3 text-xl w-full md:w-3/4 text-center">
          <img width={30} src={assets.email} alt="" />
          <p>info@mysite.com</p>
        </div>
        <div className="flex items-center gap-3 text-xl w-full md:w-3/4">
          <img width={30} src={assets.phone} alt="" />
          <p>123-456-7890</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-10 gap-7 text-[#feae97]"
      >
        <div className="mt-10">
          <label className="flex flex-col gap-5">
            First name
            <input
              type="text"
              className="border-b border-[#feae97] outline-0 bg-transparent"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-5">
            Last name
            <input
              type="text"
              className="border-b border-[#feae97] outline-0 bg-transparent"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-5">
            Email
            <input
              type="email"
              className="border-b border-[#feae97] outline-0 bg-transparent"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-5">
            Phone
            <input
              type="number"
              maxLength={10}
              className="border-b border-[#feae97] outline-0 bg-transparent"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-5">
            Address
            <input
              type="text"
              className="border-b border-[#feae97] outline-0 bg-transparent"
              required
            />
          </label>
        </div>
        <button className="w-full p-2 mb-5 border border-[#feae97] hover:bg-[#feae97] hover:text-black duration-500 ease-in">Submit</button>
      </form>
      <div className="flex flex-col items-center md:w-1/4 mt-5 gap-3 text-[#feae97]">
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
        <button type='submit' className='md:ml-4 bg-[#feae97] font-semibold md:w-2/4 text-white px-5 py-2 hover:bg-transparent duration-500 hover:text-[#feae97]'
                style={{border:"1px solid #feae97"}}>CALL NOW</button>
      </div>
    </div>
  );
};

export default Footer;
