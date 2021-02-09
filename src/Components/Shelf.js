import { Component } from 'react'


const selectedChars = []

const Shelf = props => {
    return <div className="shelf" onClick={ () => props.toggleChar(props.chars)}>
            <img src={props.img} className="char-image" alt={props.name}></img>
            <h3 className="charcter-name">{props.chars}</h3>
    </div>
}

export default Shelf