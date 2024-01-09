import Navbar from "./Navber";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function HomeAdmin() {

  const Api = "https://jsd5-mock-backend.onrender.com/";
  const [employees, setEmployees] = useState([]);
  
  const [reload, setReload] = useState(false);

  // Get Data
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${Api}members`);
      setEmployees(response.data);
    };
    getData();
  }, [reload]);


  // Create Data
  const createData = async (name, lastname, position) => {
    const requestData = {
      name: name,
      lastname: lastname,
      position: position,
    };

    const response = await axios.post(`${Api}members`, requestData);

    if (response.status === 200) {
      setReload(!reload);

      console.log("created successfully!", response);
    }
  };

// Delete Data
  const deleteData = async(id) => {
    const response = await axios.delete(`${Api}member/${id}`)

    if (response.status === 200) {
      setReload(!reload);
      console.log(response);
    }
  }

  return (
    <div>
      <Navbar />
      {/* Head Text */}
      <div className="flex flex-col items-center mt-14">
        <h1 className="text-[4rem] font-bold">Generation Thailand</h1>
        <h1 className="text-[4rem] font-bold">Home - Admin Sector</h1>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="w-[16rem] rounded-md shadow-2xl bg-white mt-[3rem] px-3 py-3 mr-[10rem] text-[1.5rem]  leading-6 text-black hover:bg-sky-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
          <Link to={"/homeuser"}>User Home Sector</Link>
        </button>
        <button className="w-[16rem] rounded-md shadow-2xl bg-white mt-[3rem] px-3 py-3 text-[1.5rem]  leading-6 text-black hover:bg-sky-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
          <Link to={"/homeadmin"}>Admin Home Sector</Link>
        </button>
      </div>

      <InputData createData={createData}/>

      {/* Table */}
      <div className="flex justify-center">
        <table className="text-center text-[1.5rem] text-white bg-sky-500 mt-[2rem]">
          <tr>
            <th className="border-2 border-black w-[15rem]">Name</th>
            <th className="border-2 border-black w-[15rem]">Last Name</th>
            <th className="border-2 border-black w-[15rem]">Position</th>
            <th className="border-2 border-black w-[15rem]">Action</th>
          </tr>

          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border-2 border-black">{employee.name}</td>
              <td className="border-2 border-black">{employee.lastname}</td>
              <td className="border-2 border-black">{employee.position}</td>
              <td className="border-2 border-black">
                <p className="text-red-600 hover:text-red-300 hover:cursor-pointer"
                  onClick={() => deleteData(employee.id)}
                >
                  Delete
                </p>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

const InputData = ({createData}) => {

  const [name , setName] = useState("");
  const [lastname , setLastname] = useState("");
  const [position , setPosition] = useState("");



  const submitHandle = () => {
    createData(name, lastname, position);



    setName("");
    setLastname("");
    setPosition("");
  };


  return (
    <div>
      {/* Input data */}
      <h1 className="text-center mt-10 text-3xl font-bold">Create User Here</h1>
      <form className="text-center flex justify-center items-center gap-6 mt-5">
        <div className="border">
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
        </div>
        <div className="border">
          <input type="text" value={lastname} onChange={(event) => setLastname(event.target.value)} placeholder="Last Name" />
        </div>
        <div className="border">
          <input type="text" value={position} onChange={(event) => setPosition(event.target.value)} placeholder="Position" />
        </div>
        <div>
          <button
            className="text-white text-[1.5rem] rounded-md bg-sky-500 p-1 hover:bg-black"
            onClick={submitHandle}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeAdmin;
