import React from 'react';


export default class Tile extends React.Component {
    constructor(props){
        super(props)

        this.state = {explored: this.props.tile.explored}
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(event){
        event.preventDefault()
        this.setState({explored: !this.state.explored})
    }

    // componentDidMount (){
    //     if (.explored && obj.adjacentBombCount() === 0) {
                    
    //             const coords = obj.neighbors();
    //                 coords.map((coord) => {
                        
    //                     console.log(this.props.board.grid[coord[0]][coord[1]]);

    //                     if (this.props.board.grid[coord[0]][coord[1]].adjacentBombCount()===0) {
    //                         return <Tile tile={obj} updateGame={this.updateGame} board = {this.props.board} key={idx} className="tile explored"/>
    //                     }
    //              })
    // }

    render(){
        const char = this.state.explored ? this.props.tile.bombed ? "☹" : this.props.tile.flagged ? "⚐" : `${this.props.tile.adjacentBombCount()}` : ""
        
        return(
            <div onClick={this.handleClick} className= {this.props.tile.bombed ? "tile bombed" : this.props.tile.flagged ? "tile flagged" : this.state.explored ? `tile explored` : "tile"}>
                {char}
            </div>
        )
    }
}