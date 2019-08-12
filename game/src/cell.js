import React from 'react';

export default function Cell(props){
    return{
        <button className="sqare" onClick={() => props.onClick()}>{props.value}</button>
    };
}