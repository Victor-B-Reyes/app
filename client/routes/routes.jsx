import React from "react";
import { Routes, Route} from "react-router-dom";

import Login from "../pages/Login";

function Rutas (){
  return(
    <Routes>
      <Route  path="/" element={<Login />}></Route>
    </Routes>
  )
}

export default Rutas;