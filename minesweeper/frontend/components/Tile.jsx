import React from 'react';


export default class Tile extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        
        return(
            <div>
                {this.props.tile.bombed ? "☹" : this.props.tile.flagged ? "⚐" : this.props.tile.revealed ? `${this.props.tile.adjacentBombCount()}` : "T"}


            </div>
        )
    }
}