import React from "react";
import Login from "./Component/Login";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import { AbilityContext } from "./CASL/Can";
import { Ability } from '@casl/ability';
import './Style.css'

const ability = new Ability()

export default function App () {
  return(
    <AbilityContext.Provider value={ability}>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="home" element={<Home />} />
</Routes>
    </AbilityContext.Provider>
  )
}
