import Game from "./components/Game"
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {

  return (
    <div className="app container mt-5">
      <h1 className="text-center mb-4">Memory Card Game</h1>
      <Game />
    </div>
  )
}

export default App
