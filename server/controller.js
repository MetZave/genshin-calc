const chars = require("./chars.json")

let id

module.exports = {
    getChars: (req, res) => {
        res.status(200).send(chars)
    },
    addChars: (req, res) => {
        console.log(`test`)
    }
}