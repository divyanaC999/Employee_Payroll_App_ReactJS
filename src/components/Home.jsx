import React from "react";
import "./Home.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter,Route,Router,Switch,Link } from 'react-router-dom';
import EmployeePyrollForm from "../forms/EmployeePyrollForm";
import delete1 from "../assets/icons/delete.svg"
import edit1 from "../assets/icons/edit.svg"
import { useState } from "react";
import {FaRupeeSign} from 'react-icons/fa';


export default function Home() {

  const [jsonArray,setJsonArray] = useState(null)
  const [jsonArrayStr,setJsonArrayStr] = useState("");

  let test = () =>{
    console.log("Window is loaded")
      
      if(localStorage.getItem('jsonEmployee')!=null){
        let jsonArrayStr1 = localStorage.getItem('jsonEmployee');
        setJsonArrayStr(jsonArrayStr1);
        console.log(jsonArrayStr)
        let jsonArray = JSON.parse(jsonArrayStr);
        setJsonArray(jsonArray)
        console.log(jsonArray)
      }else{
        // dont so anything
      }
     
     
       
    }

  



  return (
    <div onClick={test}>
      {/* UC1 */}
      <header className="header-content header">
        <div className="logo-content">
          <img src="/formImages/logo.PNG" alt="myLogo" />
          <div>
            <span className="emp-text">EMPLOYEE</span>
            <br />
            <span className="emp-text emp-payroll">PAYROLL</span>
          </div>
        </div>
      </header>
      <div className="main-content">
        {/* UC 2 */}
        <div className="header-content">
          <div className="emp-detail-text">
            Employee Details
            <div className="emp-count">1</div>
          </div>
          
            <Link to="/payroll-form" className="add-button">
              {/* <img
                src="/assets/icons/download-icon-add+24px-131985189453306350_0.svg"
                alt=""
              /> */}
              Add User
            </Link>
            
           
          
        </div>{" "}
        {/* header content */}
        <div className="table-main">
        <table id="table-display" className="table">
          <tbody>
            <tr>
              <th />
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
            
            <tr>
              <td>
                <img
                  className="profile"
                  src = "/formImages/Eclipse-1.PNG"
                  alt="profile_img-2"
                />
              </td>
              <td>Divya</td>
              <td>Chourasiya</td>
              <td>
                <div className="dept-label">Engineer</div>
                <div className="dept-label">Finance</div>
              </td>
              <td><FaRupeeSign/>5000000</td>
              <td>3 april 2020</td>
              <td>
                <img
                  src={delete1}
                  alt="delete"
                  id={1}
                  onclick="remove(this)"
                />
                <img
                  src={edit1}
                  alt="edit"
                  id={1}
                  onclick="update(this)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        {/*Table main*/}
      </div>{" "}
      {/*main content*/}
    </div>
  );
}
