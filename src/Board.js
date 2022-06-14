import './Board.css';
import React from 'react'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Board;
