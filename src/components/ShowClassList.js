import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ClassCard from "./ClassCard";
import Header from "./Header";
import Footer from "./Footer";

function ShowClassList() {
  const [yoga_classs, setClasss] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/classes")
      .then((res) => {
        setClasss(res.data);
        // console.log(res.data);
        // console.log(yoga_classs);
      })
      .catch((err) => {
        console.log("Error from ShowClassList");
      });
    console.log(yoga_classs);
    console.log(yoga_classs.length);
  }, []);

  const yoga_classList =
    yoga_classs.length === 0
      ? 'There are no yoga classes to display.'
      : yoga_classs.map((yoga_class, k) => (
          <ClassCard yoga_class={yoga_class} key={k} />
        ));

  return (
    <div>
      <Header />
      <div className="HomeScreen">
      <div className="ShowClassList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Classs List</h2>
            </div>

            <div className="col-md-11">
              {/* <Link
                to="/createClass"
                className="btn btn-outline-warning float-right"
              >
                + Add New Class
              </Link> */}
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">{yoga_classList}</div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default ShowClassList;
