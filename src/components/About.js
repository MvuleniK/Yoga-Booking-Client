import React from "react";
import "../styles/About.css";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          neque velit. Etiam consectetur, lacus quis faucibus commodo, justo
          ligula pretium elit, eu vehicula justo eros eget dolor. Duis consequat
          gravida bibendum. Aliquam ac semper arcu. Nulla facilisi.
        </p>
        <p>
          Suspendisse potenti. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Fusce eget nibh vel turpis
          pretium laoreet sit amet at mauris. Ut non pharetra ex. Nulla vitae
          facilisis massa, id efficitur neque. Nam non tellus non leo efficitur
          euismod ut in eros. Aenean quis bibendum purus. Sed quis tellus ac
          nulla bibendum venenatis. Vivamus at efficitur ipsum. Proin tincidunt
          ante eu est facilisis venenatis. Nam efficitur iaculis ipsum, ac
          scelerisque sapien faucibus ac. Donec lobortis ullamcorper velit, nec
          congue augue interdum at.
        </p>
        <p>
          Praesent auctor felis in sem fringilla fringilla. Pellentesque euismod
          nulla ac erat iaculis, eget tincidunt tellus hendrerit. Fusce aliquet
          felis vitae arcu rhoncus, sit amet luctus est sagittis. Sed eu nulla
          sem. Donec imperdiet elit at elit pretium, eu maximus nisl gravida.
          Praesent ultricies, augue eget rutrum pharetra, dui purus faucibus
          nunc, non dapibus lacus massa vitae enim. Integer venenatis orci vel
          risus aliquet, non dignissim nisi sagittis. Aenean eget velit eros.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
