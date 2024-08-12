import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./product.css"; // Ensure this file contains the required CSS styles

const Products = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setError(new Error("No token found, please log in again."));
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "https://www.mecwinnethra.com/api/user/react-test/data",
          requestOptions
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="product">
      <Navbar />
      <div className="cont">
        <div className="container">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="card">
                <div className="cardItem">
                  <p>ID: {item.id}</p>
                  <p>Name: {item.name}</p>
                  <p>Description: {item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
