import React from 'react';
import logo from './logo.png';
import './App.css';
import GoalList from "./components/GoalList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GoalsCrud from "./components/GoalsCrud";
import GoalEdit from "./components/GoalEdit";

function App() {
  return (
      <div className="nav-wrapper">

          <nav>
              <div className="nav-wrapper bg-light">
                  <img src={logo} className="App-logo" alt="logo"/>
              </div>
          </nav>


          <BrowserRouter>
          <Routes>
                  <Route path="/" element={<GoalList/>}></Route>
                  <Route path="addGoal" element={<GoalsCrud/>}></Route>
                  <Route path="editGoal/:id" element={<GoalEdit/>}></Route>
              </Routes>
          </BrowserRouter>

      </div>
  );
}

export default App;
