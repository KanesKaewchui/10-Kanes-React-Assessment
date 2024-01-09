import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex justify-end bg-sky-500 py-3">
        <button className="mr-[5rem] text-[26px] text-white font-semibold"><Link to={'/'}>Home</Link></button>
        <button className="mr-[5rem] text-[26px] text-white font-semibold"><Link to={'/owner'}>Owner</Link></button>
    </div>
  )
}

export default Navbar