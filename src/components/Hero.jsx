import React from "react";
import { assets } from "../assets/assets";
import Projects from "../pages/Projects";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <img className="hero" src={assets.hero_bg} alt="" />
      <div className="hero-overlay"></div>
      <div className="absolute bottom-[40%] left-2 md:left-[25%]">
        <h1 className="text-center text-5xl font-semibold text-white mb-3">
          Newel Residential Remodeling
        </h1>
        <p className="text-center text-2xl md:text-3xl text-white">
          Recreating Dream Homes That Last
        </p>
      </div>
      <div className="bg-black p-10">
        <div
          className="flex w-full flex-col md:flex-row items-center "
          style={{ border: "1px solid #feae97" }}
        >
          <div
            className="w-full md:w-2/4"
            style={{ borderRight: "1px solid #feae97" }}
          >
            <img src={assets.hero_services_bg} alt="" />
          </div>
          <div className="w-full md:w-2/4 py-5 px-[50px] text-white">
            <h1 className="text-4xl font-semibold mb-3">Our Services</h1>
            <ul className="pl-2 text-xl mb-5">
              <li>* Complete Remodeling</li>
              <li>* Kitchen Remodeling</li>
              <li>* Bathroom Remodeling</li>
              <li>* Home Interior</li>
              <li>* Flooring</li>
            </ul>
            <Link to='/services' className="bg-[#feae97] text-black px-10 py-3">
              MORE INFO
            </Link>
          </div>
        </div>
        <div
          className="flex items-center "
          style={{ border: "1px solid #feae97", borderTop: "none" }}
        >
          <div
            className="w-1/4 py-5 flex flex-col items-center gap-5 text-white"
            style={{ borderRight: "1px solid #feae97" }}
          >
            <img width={60} src={assets.house_icon} alt="" />
            <p className="text-sm text-center md:text-xl font-semibold">
              Vast Experience
            </p>
          </div>
          <div
            className="w-1/4 py-5 flex flex-col items-center gap-5 text-white"
            style={{ borderRight: "1px solid #feae97" }}
          >
            <img width={60} src={assets.team_icon} alt="" />
            <p className="text-sm text-center md:text-xl font-semibold">
              Professional Team
            </p>
          </div>
          <div
            className="w-1/4 py-5 flex flex-col items-center gap-5 text-white"
            style={{ borderRight: "1px solid #feae97" }}
          >
            <img width={60} src={assets.blocks_icon} alt="" />
            <p className="text-sm text-center md:text-xl font-semibold">
              High Finish
            </p>
          </div>
          <div className="w-1/4 py-5 flex flex-col items-center gap-5 text-white">
            <img
              width={60}
              className="pt-[-2]"
              src={assets.sustain_icon}
              alt=""
            />
            <p className="text-sm text-center md:text-xl font-semibold">
              Sustainable & Accountable
            </p>
          </div>
        </div>
        <div
          className="flex w-full flex-col md:flex-row items-center "
          style={{ border: "1px solid #feae97", borderTop: "none" }}
        >
          <div className="w-full md:w-2/4 py-5 px-3 md:px-[50px] text-white">
            <h1 className="text-5xl font-semibold ml-2 mb-3">About Us</h1>
            <p className="pl-2 text-3xl mb-5 text-[#feae97] md:w-2/4">
              Newel Residential Remodeling
            </p>
            <p className="pl-2 text-md md:text-lg mb-5 text-white">
              At <b>Newel Residential Remodeling</b>, we are passionate about
              transforming homes and commercial spaces into beautiful,
              functional, and personalized environments. With over{" "}
              <b>Ten (10) years</b> of experience in the remodeling industry, we
              have built a reputation for delivering high-quality craftsmanship,
              exceptional customer service, and innovative design solutions. Our
              team of skilled professionals is dedicated to bringing your vision
              to life, whether you're looking to renovate your kitchen, update
              your bathroom, or create a brand-new living space.
            </p>
          </div>
          <div
            className="w-full md:w-2/4"
            style={{ borderRight: "1px solid #feae97" }}
          >
            <img
              className="md:h-[500px]"
              src={assets.engineer_picture}
              alt=""
            />
          </div>
        </div>
        <div className="text-center px-5 mt-10">
          <h1 className="text-4xl font-semibold text-white mb-8">
            Recent Projects
          </h1>
          <div className="flex flex-col md:flex-row w-full items-center">
            <div className="md:w-2/4 w-full flex flex-wrap gap-5">
              <div className="relative group">
                <img
                  className="w-[400px] md:w-[250px] h-[200px] object-cover"
                  src={assets.remodelled_2}
                  alt=""
                />
                <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-200 bg-opacity-50 text-black text-2xl cursor-pointer font-semibold">
                  20130 Grove Street
                </p>
              </div>
              <div className="relative group">
                <img
                  className="w-[400px] md:w-[250px] h-[200px] object-cover"
                  src={assets.remodelled_3}
                  alt=""
                />
                <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-200 bg-opacity-50 text-black text-2xl cursor-pointer font-semibold">
                  20130 Grove Street
                </p>
              </div>
              <div className="relative group">
                <img
                  className="w-[400px] md:w-[250px] h-[200px] object-cover"
                  src={assets.remodelled_4}
                  alt=""
                />
                <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-200 bg-opacity-50 text-black text-2xl cursor-pointer font-semibold">
                  The Nelson's Project
                </p>
              </div>
              <div className="relative group">
                <img
                  className="w-[400px] md:w-[250px] h-[200px] object-cover"
                  src={assets.remodelled_5}
                  alt=""
                />
                <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-200 bg-opacity-50 text-black text-2xl font-semibold cursor-pointer">
                  The William's Project
                </p>
              </div>
            </div>
            <div className="md:w-2/4 w-full relative group mt-5 mb-10">
              <img className="object-cover" src={assets.remodelled_1} alt="" />
              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-200 bg-opacity-50 text-black text-4xl font-semibold cursor-pointer">
                34th West Rd.
              </p>
            </div>
          </div>
          <Link to='/projects'
            style={{ border: "1px solid #feae97" }}
            className="bg-[#feae97] text-black px-10 hover:bg-transparent hover:text-white duration-300 py-3"
          >
            VIEW ALL
          </Link>
        </div>
        <div
          className="flex flex-col md:flex-row mt-5"
          style={{ border: "1px solid #feae97" }}
        >
          <div
            style={{ borderRight: "1px solid #feae97" }}
            className="py-5 bg-[#feae97] w-full md:w-[25%] flex justify-center items-center"
          >
            <h1 className="text-white text-3xl">Testimonials</h1>
          </div>

          <div
            style={{ borderRight: "1px solid #feae97" }}
            className=" w-full md:w-[25%] flex flex-col py-[70px] px-[30px] justify-center text-white gap-10 items-center"
          >
            <p className="text-xl md:text-sm">
              "We hired this team to remodel our outdated kitchen, and we
              couldn't be happier with the results! From the initial
              consultation to the final touches, they were professional,
              attentive, and incredibly skilled. They listened to our needs and
              designed a space that is both beautiful and functional. The
              quality of the materials they recommended was top-notch, and the
              work was completed on time. Our kitchen is now the heart of our
              home!"
            </p>
            <p className="text-4xl text-[#feae97]">The Mathews</p>
          </div>
          <hr className="w-full md:hidden  bg-[#feae97] h-[1px] border-0 " />
          <div
            style={{ borderRight: "1px solid #feae97" }}
            className="w-full md:w-[25%] flex flex-col py-[70px] px-[30px] justify-center text-white gap-10 items-center"
          >
            <p className="text-xl md:text-sm" >
              "We wanted to turn our old, cramped bathroom into a spa-like
              retreat, and this team exceeded our expectations. The design
              process was smooth, and they offered creative ideas that fit our
              style and budget. The team was punctual, cleaned up every day, and
              communicated with us throughout the project. We love our new
              bathroom, and it has truly transformed our home!"
            </p>
            <p className="text-4xl text-[#feae97]">Lars & Mary Williams</p>
          </div>
          <hr className="w-full md:hidden  bg-[#feae97] h-[1px] border-0 " />
          <div className="w-full md:w-[25%] flex flex-col py-[70px] px-[30px] justify-center text-white gap-10 items-center">
            <p className="text-xl md:text-sm">
              "After living in our home for over 20 years, we decided it was
              time for a major remodel. From the first consultation, the team
              was thoughtful and considerate of our vision. They revamped our
              entire living space, including the kitchen, living room, and
              bedrooms. Their attention to detail was impressive, and they were
              always ready to address any concerns. We now have a home that
              feels modern and fresh while keeping the warmth and comfort we’ve
              loved for years."
            </p>
            <p className="text-4xl text-[#feae97]">Chris Parks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
