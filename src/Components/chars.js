import {Component} from 'react'

const Chars = props => {
    return <div className="chars">
        <div onClick={ () => props.toggleChar(props.chars)}>
            <img src={props.img} className="char-image"></img>
            <h3 className="charcter-name">{props.chars}</h3>
        </div>
    </div>
}

export default Chars