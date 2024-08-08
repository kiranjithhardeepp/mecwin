import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./home.css";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h2>Welcome Home</h2>
      <div className="homecontainer">
        <div className="cont1">
          <div className="details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et 1 dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. 2 
            </p>
          </div>
        </div>
      </div>
      <div className="footer1">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
