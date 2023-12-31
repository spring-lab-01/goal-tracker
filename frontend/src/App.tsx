import React from 'react';
import logo from './logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import GoalList from "./components/GoalList/GoalList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <GoalList />
    </div>
  );
}

export default App;
