import Tile from "./tile"


export default class Board extends React.Component {
    constructor() {
        super(props)
    }


    render() {
        return (
            <div>
                {this.props.board.map((row, rowIdx) => {
                    <div className="row" key={rowIdx}>

                    {row.map((obj, idx) => {
                        <Tile tile={obj} updateGame={this.updateGame} key={idx}/>
                    })}
                    </div>
                })
                }
            </div>
        )
    }
}