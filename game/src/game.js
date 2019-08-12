import React from 'react';// подключаем реакт, который будет превращать js в свои нативныые объекты 
import Board from './board';

//создаем конструкцию экспорт

export default class Game extends React.Component{ // сохдаем класс Game, который наследуюется от React.Component

    constructor(){
        super();

        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [{
                squares:Array(9).fill(null)
            }]
        };
    }

    handleClick(i){
        const {xIsNext,history} = this.state;
    }


    render(){
        const {xIsNext,stepNumber, history} = this.state;
        const current =history[stepNumber];

        const status = 'Следующий ход' + (xIsNext ? 'X' : 'O');


        return(
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={  (i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    
                    <div>{status}</div>
                    <ul>{/*history*/}</ul>
                </div>
            </div>
        )
    }

}
