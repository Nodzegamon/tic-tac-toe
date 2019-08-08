import React from 'react';// подключаем реакт, который будет превращать js в свои нативныые объекты 

//создаем конструкцию экспорт

export default class Game extends React.Component{ // сохдаем класс Game, который наследуюется от React.Component
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    board
                </div>
                <div className="game-info">
                    
                    <div>{/*status*/}</div>
                    <ul>{/*history*/}</ul>
                </div>
            </div>
        )
    }

}