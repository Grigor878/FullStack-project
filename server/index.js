const server = require('./src/app');
const { connectToMongo } = require('./src/config/db');

const port = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectToMongo();
        server.listen(port, () => {
            console.log(`Server started on http://localhost:${port} port.`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

startServer();