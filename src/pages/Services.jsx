import React from "react";
import { assets } from "../assets/assets";

const Services = () => {
  return (
    <div className="pt-[150px] px-10 bg-black pb-10">
      <div className="border border-[#feae97]">
        <div
          className="flex flex-col md:flex-row"
          style={{ border: "1px solid #feae97" }}
        >
          <div
            style={{ borderRight: "1px solid #feae97" }}
            className="py-5 bg-[#feae97] w-full md:w-[25%] flex justify-center items-center"
          >
            <h1 className="text-white text-5xl font-semibold">Our Services</h1>
          </div>

          <div
            style={{ borderRight: "1px solid #feae97" }}
            className=" w-full md:w-[25%] flex flex-col py-[50px] px-[30px] justify-center text-white gap-10 items-center"
          >
            <p className="text-4xl text-[#feae97]">Complete Remodeling</p>
            <p className="text-xl md:text-sm">
              it is the process of making significant, often extensive, changes
              to a home to update its appearance, improve its functionality, or
              both. This can involve renovating nearly every room, reconfiguring
              layouts, upgrading systems, or even altering the exterior of the
              house. It’s different from smaller-scale remodeling projects (like
              a kitchen or bathroom update) in that it usually affects the
              entire house, from the foundation to the roof.
            </p>
          </div>
          <hr className="w-full md:hidden  bg-[#feae97] h-[1px] border-0 " />
          <div
            style={{ borderRight: "1px solid #feae97" }}
            className="w-full md:w-[25%] flex flex-col py-[50px] px-[30px] justify-center text-white gap-10 items-center"
          >
            <p className="text-4xl text-[#feae97]">Kitchen Remodeling</p>
            <p className="text-xl md:text-sm">
              It involves updating or redesigning the layout, functionality, and
              aesthetics of your kitchen to improve its usability, style, and
              efficiency. Whether you're upgrading old appliances or completely
              overhauling the space, kitchen remodeling can increase your home's
              value, make cooking and entertaining more enjoyable, and create a
              more modern, efficient space.
            </p>
          </div>
          <hr className="w-full md:hidden  bg-[#feae97] h-[1px] border-0 " />
          <div className="w-full md:w-[25%] flex flex-col justify-center text-white gap-10 items-center">
            <img
              className="w-full h-full"
              src={assets.engineer_picture}
              alt=""
            />
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row"
          style={{ border: "1px solid #feae97", borderTop: "none" }}
        >
          <div
            style={{ borderRight: "1px solid #feae97" }}
            className="w-full md:w-[25%] flex justify-center items-center"
          >
            <img className="w-full h-full" src={assets.remodelled_2} alt="" />
          </div>

          <div
            style={{ borderRight: "1px solid #feae97" }}
            className=" w-full md:w-[25%] flex flex-col py-[70px] px-[30px] justify-center text-white gap-10 items-center"
          >
            <p className="text-4xl text-[#feae97]">Home Interior</p>
            <p className="text-2xl md:text-lg">
              home interior remodeling or design, the goal is to create a space
              that reflects your personal style while enhancing comfort and
              functionality.
            </p>
          </div>
          <hr className="w-full md:hidden  bg-[#feae97] h-[1px] border-0 " />
          <div
            style={{ borderRight: "1px solid #feae97" }}
            className="w-full md:w-[25%] flex flex-col py-[70px] px-[30px] justify-center text-white gap-10 items-center"
          >
            <p className="text-4xl text-[#feae97]">Flooring</p>
            <p className="text-2xl md:text-lg">
              Flooring is a great way to refresh the space, increase home value,
              and improve functionality.
            </p>
          </div>
          <hr className="w-full md:hidden  bg-[#feae97] h-[1px] border-0 " />
          <div className="w-full md:w-[25%] flex flex-col py-[70px] px-[30px] justify-center text-white gap-10 items-center">
            <p className="text-4xl text-[#feae97]">Bathroom Remodeling</p>
            <p className="text-2xl md:text-lg">
              Bathroom remodeling is a great way to refresh the space, increase
              home value, and improve functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
