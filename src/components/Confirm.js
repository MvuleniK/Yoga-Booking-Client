import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Confirm(props) {
  const [yoga_class, setClass] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/book/${id}`)
      .then((res) => {
        setClass(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookingDetails");
      });
  }, [id]);

  const ClassItem = (
    <div>
      <table className="table table-hover table-light">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{yoga_class.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{yoga_class.email}</td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>{yoga_class.phoneNumber}</td>
          </tr>
          <tr>
            <td>Class Date</td>
            <td>{yoga_class.class_date}</td>
          </tr>
          <tr>
            <td>Class Booked</td>
            <td>{yoga_class.class_booked}</td>
          </tr>
          <tr>
            <td>Class Teacher</td>
            <td>{yoga_class.classTeacher}</td>
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
                <h1 className="display-4 text-center">Congratulations</h1>
                <p className="lead text-center">You have successfully made a booking. Your details are as follows:</p>
                <hr /> <br />
              </div>
              <div className="col-md-10 m-auto">{ClassItem}</div>
              <div className="col-md-6 m-auto">
                <Link
                  to={`/`}
                  className="btn btn-outline-primary btn-lg btn-block"
                >
                  Return to home page
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

export default Confirm;
