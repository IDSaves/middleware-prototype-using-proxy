function applyMiddleware(classObject, middlewares) {
    return new Proxy(classObject, {
        construct(target, args) {
    
            return new Proxy(new target(...args), {
    
                get(target, prop) {
                    if (typeof target[prop] === "function") {
                        for (func of middlewares) func(prop)
                    }
                    return target[prop]
                }
    
            })
    
        }
    })
}

module.exports = applyMiddleware