module.exports.Middleware = {
    // Any express middleware will go here
    test: (req, res, next) => {
        console.log("Hello from middleware")
        next()
    }
}