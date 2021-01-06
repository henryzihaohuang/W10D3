import Tile from "./Tile"
import React from 'react';


export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.board.grid)
        const tiles = this.props.board.grid.map((row, rowIdx) => {
            return (<div className="row" key={rowIdx}>
            {row.map((obj, idx) => {
                return <Tile tile={obj} updateGame={this.updateGame} key={idx}/>
            } 
            )}
            </div>)
        })
        return (
            <div className="board">
                {tiles}
            </div>
        )
    }
}