import { Component } from 'react'
import axios from 'axios'
import Chars from './Chars.js'


class Main extends Component {
    constructor() {
        super()
        this.state = {
            mainChars: [],
            shelfChars: []
        }
    }

    componentDidMount() {
        this.getChars()
        this.getShelfChars()
    }

    getChars = () => {
        axios.get('/api/chars')
            .then(res => {
                this.setState({
                    mainChars: res.data
                })
            }).catch(err => console.log(err))
    }

    getShelfChars = () => {
        axios.get('/api/chars/shelf')
            .then(res => {
                this.setState({
                    shelfChars: res.data
                })
            }).catch(err => console.log(err))
    }


    toggleChars = (clickChar) => {

        if (this.state.shelfChars.includes(clickChar)) {
            // Toggle off
            axios.delete(`/api/chars/:${clickChar}`)
                .then(res => {
                    this.setState({
                        shelfChars: res.data
                    })
                }).catch(err => console.log(err))
        }
        else {
            // Toggle on
            axios.post(`/api/chars/:${clickChar}`)
                .then(res => {
                    this.setState({
                        shelfChars: res.data
                    })
                }).catch(err => console.log(err))

        }
        console.log(`Added Chars`, clickChar)
    }

    render() {
        const mappedChars = this.state.mainChars.map(chars => {
            return <Chars key={chars.name} chars={chars.name} img={chars.img} toggleChar={this.toggleChars} />
        })
        return <div id="char-frame">
            {mappedChars}
        </div>
    }
}

export default Main
