function first() {
    console.log("First...")
}

function second() {
    setTimeout(() => console.log("Second..."), 0)
}

function log(name) {
    console.log(`Firing function ${name}`)
}

module.exports = {
    first, second, log
}