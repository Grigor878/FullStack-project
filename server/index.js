const server = require('./src/app')

const port = process.env.PORT || 8000

const startServer = () => {
    server.listen(port, () => {
        console.log(`Server started on http://localhost:${port} port.`)
    })
}

startServer()