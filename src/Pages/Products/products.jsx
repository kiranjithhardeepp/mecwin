import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./product.css";
import Footer from "../../Components/Footer/Footer";

const Products = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

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

  console.log(data);
  return (
    <div className="product">
      <Navbar />
      <div className="cont1">
        <div className="container">
          <ul>
            {data &&
              data.map((item, index) => (
                <li key={index}>
                  {item.name} {item.id} {item.description}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="footer1">
        <Footer />
      </div>
    </div>
  );
};

export default Products;
