import React from 'react';
import * as Minesweeper from "./minesweeper";
import Game from './components/game.jsx';




document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    ReactDOM.render( <Game />, root)
})

