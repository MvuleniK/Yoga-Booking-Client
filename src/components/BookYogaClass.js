import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function BookYogaClass(props) {
  const [yoga_class, setClass] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    className: "",
    classId: "",
    classTeacher: "",
    description: "",
    class_date: "",
  });

  const [yoga_bookings, setYogaBooking] = useState({
    name: "",
    email: "",
    classTeacher: "",
    phoneNumber: "",
    class_date: "",
    class_booked: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/classes/${id}`)
      .then((res) => {
        setClass({
          name: "",
          email: "",
          phoneNumber: "",
          className: res.data.className,
          classId: res.data.classId,
          classTeacher: res.data.classTeacher,
          description: res.data.description,
          class_date: res.data.class_date,
        });
      })
      .catch((err) => {
        console.log("Unable to retrieve class data.");
      });
  }, [id]);

  const onChange = (e) => {
    setClass({ ...yoga_class, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // const data = {
    //   name: yoga_class.name,
    //   email: yoga_class.email,
    //   classTeacher: yoga_class.classTeacher,
    //   phoneNumber: yoga_class.phoneNumber,
    //   class_date: yoga_class.class_date,
    //   class_booked: yoga_class.className, 
    // };

    setYogaBooking({
      name: yoga_class.name,
      email: yoga_class.email,
      classTeacher: yoga_class.classTeacher,
      phoneNumber: yoga_class.phoneNumber,
      class_date: yoga_class.class_date,
      class_booked: yoga_class.className, 
    });


    // axios
    //   .put(`http://localhost:8082/api/classes/${id}`, data)
    //   .then((res) => {
    //     navigate(`/show-yoga_class/${id}`);
    //   })
    //   .catch((err) => {
    //     console.log("Error in UpdateClassInfo!");
    //   });

    console.log(yoga_bookings);
    console.log(yoga_class.name);
      axios
      .post("http://localhost:8082/api/book", yoga_bookings)
      .then((res) => {
        console.log(res.data);
        setYogaBooking({
          name: "",
          email: "",
          classTeacher: "",
          phoneNumber: "",
          class_date: "",
          class_booked: "",
        });
        let bookingId = res.data.bookingID;
        
        navigate("/confirm/" + bookingId);
      })
      .catch((err) => {
        console.log("Error in CreateClass!");
      });
  };

  return (
    <div>
      <Header />
<div className="HomeScreen">
      <div className="UpdateClassInfo">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 className="display-4 text-center">Book this yoga class</h1>
              <p className="lead text-center">Please enter your details in the form below.</p>
            </div>
          </div>
          <form noValidate onSubmit={onSubmit}>

          <p className="lead text-center">Personal Details.</p>

          <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                    value={yoga_class.name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={yoga_class.email}
                    onChange={onChange}
                  />
                </div>

                {/* <div className="form-group">
                  <label>Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone number"
                    name="phoneNumber"
                    value={yoga_class.phoneNumber}
                    onChange={onChange}
                  />
                </div> */}

                <div className="form-group">
                <label htmlFor="className">Phone number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  className="form-control"
                  value={yoga_class.phoneNumber}
                  onChange={onChange}
                />
              </div>

          <p className="lead text-center">Yoga Class Details.</p>

          {/* <div className="col-md-8 m-auto"> */}
              <div className="form-group">
                <label htmlFor="className">Class Name</label>
                <input
                  type="text"
                  placeholder="Class Name of the Class"
                  name="className"
                  className="form-control"
                  value={yoga_class.className}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="classId">Class ID</label>
                <input
                  type="text"
                  placeholder="Class ID"
                  name="classId"
                  className="form-control"
                  value={yoga_class.classId}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="classTeacher">Class Teacher</label>
                <input
                  type="text"
                  placeholder="Class Teacher"
                  name="classTeacher"
                  className="form-control"
                  value={yoga_class.classTeacher}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="class_date">Class Date</label>
                <input
                  type="text"
                  placeholder="Class Date"
                  name="class_date"
                  className="form-control"
                  value={yoga_class.class_date}
                  onChange={onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Book Class
              </button>
            </form>
          {/* </div> */}
        </div>
      </div>
      
    </div>
    <Footer />
    </div>

    
  );
}

export default BookYogaClass;