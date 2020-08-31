import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./utils/API";
import Header from "./components/Header";
import userContext from "./utils/userContext";
import Main from "./components/Main";
import Results from "./components/Results";
import { Container } from "reactstrap";

function App() {
  const [userState, setUsers] = useState({ users: [], search: "", sorted: [] });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const apiCall = async () => {
      let { data } = await API.callUsers();
console.log(data.results);
      setUsers({ ...userState, users: Object.entries(data.results) });
    };
    apiCall();
  }, []); //dep array needs to stay empty or it makes millions of api calls >:(

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, " ", value);
    setUsers({
      ...userState,
      [name]: value,
    });
  };

  return (
    <Container className="App">
      <Header />
      <userContext.Provider value={userState}>
        <Main handleInputChange={handleInputChange} />
        <Results />
      </userContext.Provider>
    </Container>
  );
}

export default App;
