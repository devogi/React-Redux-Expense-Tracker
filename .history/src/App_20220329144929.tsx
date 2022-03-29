import React from "react";
import { Route } from "react-router-dom";


import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  return <Route path="/register" component={SignUp} />;
}

export default App;
