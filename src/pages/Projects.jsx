import React from 'react'

const Projects = () => {
  return (
    <div className='pt-[150px] px-10 bg-black pb-10'>
  <div
          className="flex flex-col md:flex-row mt-5 mb-5"
          style={{ border: "1px solid #feae97" }}
        >
          <div
            style={{ borderRight: "1px solid #feae97" }}
            className="py-5 bg-[#feae97] w-full md:w-[25%] h-[400px] flex justify-center items-center"
          >
            <h1 className="text-white text-5xl">Our Projects</h1>
          </div>

          <div
            style={{ borderRight: "1px solid #feae97" }}
            className=" w-full md:w-[25%] flex flex-col h-[400px] px-[30px] justify-center text-white gap-10 items-center"
          >
            <p className="text-4xl text-[#feae97]">The Mathews</p>
          </div>
          <hr className="w-full md:hidden  bg-[#feae97] h-[1px] border-0 " />
          <div
            style={{ borderRight: "1px solid #feae97" }}
            className="w-full md:w-[25%] flex flex-col h-[400px] px-[30px] justify-center text-white gap-10 items-center"
          >
            <p className="text-4xl text-[#feae97]">Lars & Mary Williams</p>
          </div>
          <hr className="w-full md:hidden  bg-[#feae97] h-[1px] border-0 " />
          <div className="w-full md:w-[25%] flex flex-col h-[400px] px-[30px] justify-center text-white gap-10 items-center">
            <p className="text-4xl text-[#feae97]">Chris Parks</p>
          </div>
        </div>
  <div>
    <h1>The Matthew's Project</h1>
    <p></p>
  </div>
    </div>
  )
}

export default Projects