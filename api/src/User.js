import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./User.css";

function User() {
  
  const [details, setDetails] = useState({
    name: "", age: "", email: "", qualification: "", dob: "", mobileNumber: "", description: "",
  });
  const [errors, setErrors] = useState({});
  const [post, setPost] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    if (post === false) {
      setErrors(Validation(details));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (post === true) {
      console.log(details);
      axios
        .post(
          "https://636ddafeb567eed48acb07be.mockapi.io/api/v1/users",
          details
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setDetails({
        name: "", age: "", email: "", qualification: "", dob: "", mobileNumber: "", description: "",
      });
      navigate("/");
    }

    setErrors(Validation(details));
  };
  const Validation = (details) => {
    let errors = {};
    if (details.name === "") {
      errors.name = "*Please Enter your User name";
      setPost(false);
    } else {
      setPost(true);
    }
    if (details.age === "") {
      errors.age = "*Please Enter your age";
      setPost(false);
    } else {
      setPost(true);
    }
    if (details.email === "") {
      errors.email = "*Please Enter your email";
      setPost(false);
    } else {
      setPost(true);
    }
    if (details.qualification === "") {
      errors.qualification = "*Please choose your qualification";
      setPost(false);
    } else {
      setPost(true);
    }
    if (details.dob === "") {
      errors.dob = "*Please Enter your DOB";
      setPost(false);
    } else {
      setPost(true);
    }
    if (details.mobileNumber === "") {
      errors.mobileNumber = "*Please Enter your Mobile number";
      setPost(false);
    } else {
      setPost(true);
    }
    if (details.description === "") {
      errors.description = "*Please fill the description below";
      setPost(false);
    } else {
      setPost(true);
    }
  return(errors);
  }
  const reset = () => {
    setDetails({
      name: "", age: "", email: "", qualification: "", dob: "", mobileNumber: "", description: "",
    });
  };
  return (
    <div>
      <div className="background">
        <div className="container p-5 ">
          <div className="header d-flex pe-5 ps-3">
            <a className="arrow text-black pe-5" href="/">
             Users
            </a>
            <a className="arrow text-black " href="/new">
              Add User
            </a>
          </div>
          <div className="container bg-white user">
            <div className="row">
              <div className="col-md-4 form">
                <label>User Name</label>
                <br>
                </br>
                <input
                  type={"text"}
                  name="name"
                  placeholder="Enter your name"
                  value={details.name}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.name}</p>
                <label>Age</label> <br></br>
                <input
                  type={"number"}
                  name="age"
                  placeholder="Enter Here"
                  value={details.age}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.age}</p>
                <label>Email Id</label>
                <br></br>
                <input
                  type={"text"}
                  name="email"
                  placeholder="Enter your email"
                  value={details.email}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.email}</p>
                <label>Qualification</label>
                <br></br>
                <select
                  name="qualification"
                  value={details.qualification}
                  placeholder="choose your qualification"
                  onChange={handleChange}
                  >
                    <option></option>
                  <option>SSLC</option>
                  <option>Diploma</option>
                  <option>Degree</option>
                  <option>Masters</option>
                </select>
                <p className="text">{errors.qualification}</p>
                <label>Date of birth</label>
                <br></br>
                <input
                  type={"date"}
                  name="dob"
                  value={details.dob}
                  onChange={handleChange}
                />
                <p className="text">{errors.dob}</p>
              </div>
              <div className="col-md-4 term">
                <label>Mobile Number</label> <br></br>
                <input
                  type={"number"}
                  placeholder="Enter Here"
                  name="mobileNumber"
                  value={details.mobileNumber}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.mobileNumber}</p>
                <label>Description</label> <br></br>
                <textarea
                  name="description"
                  placeholder="Enter Here"
                  rows={11}
                  cols={20}
                  value={details.description}
                  onChange={handleChange}
                ></textarea>
                <p className="text-danger">{errors.description}</p>
              </div>
              <hr></hr>
            </div>
            <div className="down text-center">
            <button onClick={reset} className="cancel-btn">
              Cancel
               </button>
               <button onClick={handleSubmit} className="add-btn">
                 Add
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;