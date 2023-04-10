import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function ShowBookingDetails(props) {
  const [yoga_class, setClass] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/classes/${id}`)
      .then((res) => {
        setClass(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookingDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/classes/${id}`)
      .then((res) => {
        navigate("/showClassList");
      })
      .catch((err) => {
        console.log("Error form ShowBookingDetails_deleteClick");
      });
  };

  const ClassItem = (
    <div>
      <table className="table table-hover table-light">
        <tbody>
          <tr>
            {/* <th scope="row">1</th> */}
            <td>Class Name</td>
            <td>{yoga_class.className}</td>
          </tr>
          <tr>
            {/* <th scope="row">2</th> */}
            <td>Class Teacher</td>
            <td>{yoga_class.classTeacher}</td>
          </tr>
          <tr>
            {/* <th scope="row">3</th> */}
            <td>Class ID</td>
            <td>{yoga_class.classId}</td>
          </tr>
          <tr>
            {/* <th scope="row">5</th> */}
            <td>Class Date</td>
            <td>{yoga_class.class_date}</td>
          </tr>
          <tr>
            {/* <th scope="row">6</th> */}
            <td>Description</td>
            <td>{yoga_class.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <Header />
      <div className="HomeScreen">
        <div className="ShowBookingDetails">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Class Details</h1>
                <p className="lead text-center">View Class's Info</p>
                <hr /> <br />
              </div>
              <div className="col-md-10 m-auto">{ClassItem}</div>
              <div className="col-md-6 m-auto">
                <Link
                  to={`/book-yoga_class/${yoga_class._id}`}
                  className="btn btn-outline-primary btn-lg btn-block"
                >
                  Book as a Member
                </Link>
              </div>
              <div className="col-md-6 m-auto">
                <Link
                  to={`/book-yoga_class/${yoga_class._id}`}
                  className="btn btn-outline-primary btn-lg btn-block"
                >
                  Book as a Guest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShowBookingDetails;
