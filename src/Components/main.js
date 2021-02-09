import { Component } from 'react'
import axios from 'axios'
import Chars from './Chars.js'
import Shelf from './Shelf.js'


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


    toggleChars = (props) => {

        if (this.state.shelfChars.includes(props)) {
            // Toggle off
            console.log(`Deleted Chars`, props)
            axios.delete(`/api/chars/:${props}`)
                .then(res => {
                    this.setState({
                        shelfChars: res.data
                    })
                }).catch(err => console.log(err))
        }
        else {
            // Toggle on
            console.log(`Added Chars`, props)
            axios.post(`/api/chars/:${props}`)
                .then(res => {
                    this.setState({
                        shelfChars: res.data
                    })
                }).catch(err => console.log(err))

        }
    }

    render() {
        const mappedChars = this.state.mainChars.map(chars => {
            return <Chars key={chars.id} chars={chars.name} img={chars.img} toggleChar={this.toggleChars} />
        })

    
        let mappedShelfChars = this.state.shelfChars.map(chars => {
            return <Shelf key={chars.id} chars={chars.name} img={chars.img} toggleChar={this.toggleChars}/>
        })

        return <section className="main-content">
            <div id="char-background">
                <h2 className="title">Select Character to Calculate DPS</h2>
                <div id="char-frame">
                    {mappedChars}
                </div>
            </div>
            <div id="shelf-background">
                <h2 className="title">Selected Characters</h2>
                {mappedShelfChars}
            </div>
        </section>
    }
}

export default Main
