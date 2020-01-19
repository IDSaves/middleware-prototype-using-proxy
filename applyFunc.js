function applyMiddleware(classObject, middlewares) {
    return new Proxy(classObject, {
        construct(target, args) {
    
            return new Proxy(new target(...args), {
    
                get(target, prop) {
                    if (typeof target[prop] === "function") {
                        for (func in middlewares) {
                            middlewares[func](prop)
                        }
                    }
                    return target[prop]
                }
    
            })
    
        }
    })
}

module.exports = applyMiddleware