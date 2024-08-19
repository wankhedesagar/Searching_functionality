import React from "react";
import { useEffect, useState } from "react";

function SearchingApiData() {



  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        res.json().then((result) => {
          console.log(result);
          
        });
      });
    };
    fetchData();
  }, []);


  return (
    <div>
      <div>
        <input placeholder="Search"  />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>


      </table>
    </div>
  );
}

export default SearchingApiData;
