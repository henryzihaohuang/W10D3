import Board from "./Board";
import * as Minesweeper from "../minesweeper";
import React from 'react';

export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={board: new Minesweeper.Board(8, 8)}
        this.updateGame = this.updateGame.bind(this)
    }

    updateGame(){}


    

    render(){
        return(
            <div className="board-border">
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }
}
