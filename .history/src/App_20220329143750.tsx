import React from "react";
import { Route } from "react-router-dom";
import SignUp

import "./App.css";

function App() {
  return (
    <Route path="/register" component={SignUp} />;
  )
}

export default App;
