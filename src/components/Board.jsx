import React from 'react';
import Square from './Square';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state=
        squares=Array(9).fill(null);
    }
renderSquare(i)
{
    return <Square 
    value={this.state.squares[i]} 
    onClick={()=>this.handleClick(i)}/>;
}
handleClick(e)
{
    e.preventDefault();
    const squares=this.state.squares.slice()
    squares[i]='X';
    this.setState({squares:squares})
}
render(){
    const status='Next Player: X';
    return(
        <div>
            <div className="player">{status}</div>
                <div className="board-row">
                    {this.player.squares(0)}
                    {this.player.squares(1)}
                    {this.player.squares(2)}
                </div>
                <div className="board-row">
                    {this.player.squares(3)}
                    {this.player.squares(4)}
                    {this.player.squares(5)}            
                </div>
                <div className="board-row">
                    {this.player.squares(6)}
                    {this.player.squares(7)}
                    {this.player.squares(8)}
                </div>
        </div>
    )
}
}

export default Board;