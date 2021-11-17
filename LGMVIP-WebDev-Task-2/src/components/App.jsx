import "./App.css";
import React, { useState } from "react";
import Detail from "./Detail";


function App() {
  const [users, setUsers] = useState([]);


  const getUsers = async () => {

    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div>
      <header className="Nav">
        <Detail />

        <button className="btn" onClick={getUsers}>
          Get Users
        </button>
      </header>

      <div className="row">
        {users?.map((current, index) => {

          return (
            <div className="container" key={index}>
              <div className="card">
                <img src={current.avatar} className="card-img-top" alt="..." />
                <h3 className="card-title">
                  Name: {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">Contact: {current.email}</h4>
              </div>
            </div>
          );

        })}
      </div>
    </div>
  );
}


export default App;
