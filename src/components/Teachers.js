import React from "react";
import "../styles/Teachers.css";
import Header from "./Header";
import Footer from "./Footer";

function Teachers() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Our Teachers</h1>
        <div className="teacher">
          <img src="/teacher1.jpg" alt="Teacher 1" />
          <div>
            <h2>John Doe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              commodo risus vitae eleifend placerat. Mauris commodo mauris in
              diam sollicitudin, sit amet imperdiet lacus dictum.
            </p>
          </div>
        </div>
        <div className="teacher">
          <img src="/teacher2.jpg" alt="Teacher 2" />
          <div>
            <h2>Jane Smith</h2>
            <p>
              Sed eu ipsum eget mauris efficitur tincidunt. Nullam vitae tellus
              tristique, volutpat nulla vitae, mattis velit. Ut tempor lectus
              sed ultrices bibendum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Teachers;
