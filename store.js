const funcs = require("./middlwares")
const applyMiddleware = require("./applyFunc")


class Store {
    constructor(startCount) { this.count = startCount }

    add() { this.count++ }

    echo() { console.log(`Count: ${this.count}`) }
    test() { console.log("test") }
}

module.exports = applyMiddleware(Store, funcs)