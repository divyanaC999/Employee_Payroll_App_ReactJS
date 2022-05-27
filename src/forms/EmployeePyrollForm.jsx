import React from "react";
import "./Employee.css";
import { useState } from "react";
import BasicDatePicker from "./BasicDatePicker";
// import {} from "../../public/formImages/"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../components/Home";

export default function EmployeePyrollForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  let [departmentArray,setDepartmentArray] = useState([])
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");
  const [dateValue, setDateValue] = useState(null);
  //for regex
  const [nameRegexError, setNameRegexError] = useState("");


  let jsonArray = [];
  let jsonArrayStr = "";

  let updateData = (event) => {
    // console.log(name,city,condition)
    alert(
      "updating " +
        name +
        " " +
        image +
        " " +
        gender +
        " " +
        departmentArray +
        " " +
        salary +
        "  " +
        dateValue +
        " " +
        notes
    );
    if (localStorage.getItem("jsonEmployee") == null) {
      jsonArray = [];
      jsonArray.push([
        name,
        image,
        gender,
        departmentArray,
        salary,
        dateValue,
        notes,
      ]);
      localStorage.setItem("jsonEmployee", JSON.stringify(jsonArray));
    } else {
      jsonArrayStr = localStorage.getItem("jsonEmployee");
      jsonArray = JSON.parse(jsonArrayStr);
      jsonArray.push( [
        name,
        image,
        gender,
        departmentArray,
        salary,
        dateValue,
        notes,
      ] );
      localStorage.setItem("jsonEmployee", JSON.stringify(jsonArray));
    }
    // setDepartmentArray([]);
    departmentArray = [];

    console.log(dateValue);

    event.preventDefault();
  };

  function getDateValue(value) {
    console.log(JSON.stringify(value))
    setDateValue(JSON.stringify(value).substring(1, 11));
  }

  let departmentHandler=(event)=>{
      console.log(event.target.value)
      departmentArray.push(event.target.value);
  }

  //name validation handler
  function nameValidationHandler(event) {
    console.log("name is ", event.target.value);
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(event.target.value)) {
      setNameRegexError("");
    } else {
      setNameRegexError("Name is incorrect");
    }
  }

  return (
    <div>
      <header className="header-content header">
        <div className="logo-content">
          <img className="logo-content-img" src="/formImages/logo.PNG" alt="" onClick={()=>{window.open("https://www.youtube.com/", "_blank");}}/>
          <div>
            <span className="emp-text">EMPLOYEE</span>
            <br />
            <span className="emp-text emp-payroll">PAYROLL</span>
          </div>
        </div>
      </header>

      <div id="formId" className="form-content">
        {/* <form className="form" action="#" onsubmit="save()" onreset="resetForm()"> */}
        <form className="form" action="#" onSubmit={updateData}>
          {/* uc2 */}
          <div className="form-head">Employee Payroll Form</div>
          {/* ************************************************************************** */}
          <div className="row-content">
            <label className="label text" htmlFor="name">
              Name{" "}
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required
              onChange={(event) => {
                nameValidationHandler(event);
                setName(event.target.value);
              }}
            />
            {nameRegexError}
            <error-output className="text-error" htmlFor="text" />
          </div>
          {/* ******************************************************************************** */}
          {/* uc3 */}
          <div className="row-content">
            <label className="label text" htmlFor="profile">
              Profile image
            </label>
            <div className="profile-radio-content">
              <label>
                <input
                  type="radio"
                  id="profile1"
                  name="profile"
                  defaultValue="formImages\Eclipse-1.PNG"
                  required
                  onChange={(event) => {
                    setImage(event.target.value);
                  }}
                />
                <img
                  className="profile"
                  id="image1"
                  src="/formImages/Eclipse-1.PNG"
                  alt="#"
                />
              </label>
              <label>
                <input
                  type="radio"
                  id="profile2"
                  name="profile"
                  defaultValue="formImages\Eclipse-2.PNG"
                  required
                  onChange={(event) => {
                    setImage(event.target.value);
                  }}
                />
                <img
                  className="profile"
                  id="image2"
                  src="/formImages/Eclipse-2.PNG"
                  alt="#"
                />
              </label>
              <label>
                <input
                  type="radio"
                  id="profile3"
                  name="profile"
                  defaultValue="formImages\Eclipse-3.PNG"
                  required
                  onChange={(event) => {
                    setImage(event.target.value);
                  }}
                />
                <img
                  className="profile"
                  id="image3"
                  src="/formImages/Eclipse-3.PNG"
                  alt="#"
                />
              </label>
              <label>
                <input
                  type="radio"
                  id="profile4"
                  name="profile"
                  defaultValue="formImages\Eclipse-4.PNG"
                  required
                  onChange={(event) => {
                    setImage(event.target.value);
                  }}
                />
                <img
                  className="profile"
                  id="image4"
                  src="/formImages/Eclipse-4.PNG"
                  alt="#"
                />
              </label>
            </div>
          </div>
          {/* ****************************************************************************** */}
          {/* uc4 */}
          <div className="row-content">
            <label className="label text" htmlFor="gender">
              Gender
            </label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                defaultValue="male"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              <label className="text" htmlFor="male">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                defaultValue="female"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              <label className="text" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          {/* ********************************************************************************* */}
          <div className="row-content">
            <label className="label text" htmlFor="department">
              Department
            </label>
            <div>
              <input
                className="checkbox"
                type="checkbox"
                id="hr"
                name="department"
                defaultValue="HR"
                onChange={(event) => 
                  {
                    setDepartment(event.target.value)
                    departmentHandler(event);
                  }
                }/>
              <label className="text" htmlFor="hr">
                HR
              </label>
              <input
                className="checkbox"
                type="checkbox"
                id="sales"
                name="department"
                defaultValue="Sales"
                onChange={(event) => {
                  setDepartment(event.target.value)
                  departmentHandler(event);
                }}
              />
              <label className="text" htmlFor="sales">
                Sales
              </label>
              <input
                className="checkbox"
                type="checkbox"
                id="finance"
                name="department"
                defaultValue="Finance"
                onChange={(event) => {
                  setDepartment(event.target.value)
                  departmentHandler(event);
                }}
              />
              <label className="text" htmlFor="finance">
                Finance
              </label>
              <input
                className="checkbox"
                type="checkbox"
                id="engineer"
                name="department"
                defaultValue="Engineer"
                onChange={(event) => {setDepartment(event.target.value)
                  departmentHandler(event);
                }}
              />
              <label className="text" htmlFor="Engineer">
                Engineer
              </label>
              <input
                className="checkbox"
                type="checkbox"
                id="others"
                name="department"
                defaultValue="Others"
                onChange={(event) => {
                  setDepartment(event.target.value)
                  departmentHandler(event);
                }}
              />
              <label className="text" htmlFor="others">
                Others
              </label>
            </div>
          </div>
          {/* ********************************************************************************* */}
          <div className="row-content">
            <label className="label text" htmlFor="salary">
              Choose your salary:{" "}
            </label>
            <input
              className="input"
              id="salary"
              type="range"
              name="salary"
              min={300000}
              max={500000}
              step={100}
              defaultValue={400000}
              onChange={(event) => setSalary(event.target.value)}
            />
            <output className="salary-output text" htmlFor="salary">
              {salary}
            </output>
          </div>
          {/* ************************************Date***************************** */}
          <div className="row-content">
            <label className="text label" htmlFor="startDate">
              Start Date
            </label>
            
            <BasicDatePicker   getDateValue={getDateValue} />
            
              
            
          </div>
          {/* ***************************************************************************** */}
          {/* UC-6 */}
          <div className="row-content">
            <label className="label text" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              className="input"
              name="Notes"
              placeholder="add notes...."
              style={{ height: "100px" }}
              defaultValue={""}
              onChange={(event) => {
                setNotes(event.target.value);
              }}
            />
          </div>
          {/* ******************************************************************************** */}
          <div className="buttonParent">
           
            <Link to="/home" className="resetButton button cancelButton">
              Cancel
            </Link>
           
            
            <div className="submit-reset">
              <button
                type="submit"
                className="button submitButton"
                id="submitButton"
              >
                submit
              </button>
              <button
                type="reset"
                className="button resetButton"
                id="resetButton"
              >
                Reset
              </button>
            </div>
          </div>
          {/*  *********************************************************************************** */}
        </form>
      </div>
    </div>
  );
}
