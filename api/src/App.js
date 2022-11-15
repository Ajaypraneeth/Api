import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BsSearch } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { AiFillDelete} from "react-icons/ai";

function App() {
  const [datas, setDatas] = useState([]);

  const getQuote = async () => {
    try {
      const response = await axios.get("https://636ddafeb567eed48acb07be.mockapi.io/api/v1/users");
      setDatas(response.data);
      console.log(response.data);
    } 
    catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getQuote();
  }, []);
   const deleteData = (id) => {
     console.log(id, "asdutasyudf");
     axios
       .delete(`https://636ddafeb567eed48acb07be.mockapi.io/api/v1/users/${id}`)
       .then(function (handleDelete) {
           getQuote();

         console.log(handleDelete);
       })
       .catch(function (err) {
         console.log(err);
       });
   };


  return (
    <div>
      <div className="page">
        <h1 className="pt-4 pe-3 mb-5">Product Management</h1>
        <nav class="navbar navbar-light bg-light justify-content-between">
         <nav className="navbar">Services</nav>
         <input className="parent"
          type="text"
          placeholder="Search..."/>     
      <i className="child">
        <BsSearch/>
      </i>
</nav>
        <table className="container pe- mt-5 mb-3 wrap text-center">
            <tr className="wrap">
              <th>SI no</th>
              <th>Name</th>
              <th>age</th>
              <th>Mobile Number</th>
              <th>Date Of Birth</th>
              <th>Email ID</th>
              <th>Description</th>
              <th>Qualification</th>
              <th>Actions</th>
            </tr>
            <tbody>
          {datas.map(
            ({
              id,
              name,
              mobileNumber,
              age,
              dob,
              emailId,
              description,
              qualification,
              actions
            }) => {
              return (
                <>
                    <tr className="line">
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{mobileNumber}</td>
                      <td>{age}</td>
                      <td>{dob}</td>
                      <td>{emailId}</td>
                      <td>{description}</td>
                      <td>{qualification}</td>
                      <td>{actions}
                      <i className="view px-3">
                        <GrView/></i>
                      <i className="edit px-3">
                       <BiEdit/> </i>
                       <button
                        onClick={() => deleteData(id)}
                        className="delete">
                        <AiFillDelete/>
                      </button>
                      </td>
                  </tr>
                </>
              );
            }
          )}
           </tbody>
        </table>
        <div className="container">
          <div className="d-flex p-6 py-4 justify-content-end">
            <button className="down">Previous</button>
            <button className="one">1</button>
            <button className="two">2</button>
            <button className="three">3</button>
            <button className="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;