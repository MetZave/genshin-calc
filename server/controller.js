const chars = require("./chars.json")

const shelfChars = []

let id

module.exports = {
    getChars: (req, res) => {
        res.status(200).send(chars)
    },
    getShelfChars: (req, res) => {
        res.status(200).send(shelfChars)
    },
    addChars: (req, res) => {
        const {name} = req.body
        const newCompare = {name}
        shelfChars.push(newCompare)
        res.status(200).send(chars)
    },
    removeChars: (req, res) => {
        if(shelfChars.includes(req.params.name)){
            shelfChars.splice(shelfChars.indexOf(req.params.name))
        } else {
            console.log(`Error: ${req.params.name} not found`)
        }
    }
}