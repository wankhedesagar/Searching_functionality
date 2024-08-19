import React from "react";
import { useEffect, useState } from "react";

function SearchingApiData() {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterval, setFilterVal] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        res.json().then((result) => {
          console.log(result);
          setLoading(true);
          setData(result); 
          setSearchApiData(result); 
          setLoading(false);
        });
      });
    };
    fetchData();
  }, []);

  const handlefilter = (e) => {
    if (e.target.value === "") {
      setData(searchApiData);
    }
    else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setData(filterResult);
      } else {
        setData([{ name: "No records found" }]);
      }
    }
    setFilterVal(e.target.value);
  };
  return (
    <div>
      <div>
        <input placeholder="Search" value={filterval} onInput={handlefilter} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>address</th>
            <th>city</th>
            <th>zipcode</th>
          </tr>
        </thead>

        {loading === true ? (
          <p>loading...</p>
        ) : (
          data.map((item) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.street}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.zipcode}</td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
}

export default SearchingApiData;
