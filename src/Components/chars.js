import {Component} from 'react'

const Chars = props => {
    return <div className="chars" onClick={ () => props.toggleChar(props)}>
            <img src={props.img} className="char-image" alt={props.name}></img>
            <h3 className="charcter-name">{props.chars}</h3>
    </div>
}

export default Chars