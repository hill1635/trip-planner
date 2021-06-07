import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
<Router>
  <div>
    <Navbar />
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Footer />
  </div>
</Router>
  );
}

export default App;
