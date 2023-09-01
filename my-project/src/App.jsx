import { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import "./styles.css";
import Nav from "./Nav";
import {  Routes,Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Favorite } from "./Pages/Favourite";

function App() {
  
  return(

    <>
        <Nav/>
        
          <Routes>
          <Route path="/"  Component={Home} />
          <Route path="/favourite" Component={Favorite} />
          </Routes>
    </>

        
  );

}


export default App;
