import React from 'react';


export default class Tile extends React.Component {
    constructor(props){
        super(props)

        this.state = {revealed: this.props.tile.revealed}
        this.handleClick = this.handleClick.bind(this)
    }


    componentDidMount(){
    }

    handleClick(event){
        event.preventDefault()
        this.setState({revealed: !this.state.revealed})
    }

    render(){
        const char = this.state.revealed ? this.props.tile.bombed ? "☹" : this.props.tile.flagged ? "⚐" : `${this.props.tile.adjacentBombCount()}` : ""

        return(
            <div onClick={this.handleClick} className= {this.props.tile.bombed ? "tile bombed" : this.props.tile.flagged ? "tile flagged" : this.state.revealed ? `tile revealed` : "tile"}>
                {char}
            </div>
        )
    }
}