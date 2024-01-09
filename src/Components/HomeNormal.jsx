import Navbar from "./Navber";
import { Link } from "react-router-dom"

function HomeNormal() {
  return (
    <div>
      <Navbar/>

      {/* Head Text */}
      <div className='flex flex-col items-center mt-14'> 
        <h2 className='text-[4rem] font-bold text-gray-800'>Generation Thailand</h2>
        <h2 className='text-[4rem] font-bold text-gray-800'>React - Assessment</h2>
      </div>
 
      {/* Button */}
      <div className='flex justify-center'>
        <button className='w-[16rem] rounded-md shadow-lg bg-white mt-[4rem] px-3 py-3 mr-[8rem] text-[1.5rem]  leading-6 text-black hover:bg-sky-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '><Link to = {'/homeuser'}>User Home Sector</Link></button>
        <button className='w-[16rem] rounded-md shadow-lg bg-white mt-[4rem] px-3 py-3 text-[1.5rem]  leading-6 text-black hover:bg-sky-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '><Link to = {'/homeadmin'}>Admin Home Sector</Link></button>
      </div>
    </div>
  )
}

export default HomeNormal