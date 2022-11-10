const mongoose = require('mongoose')

async function connectDB(connection_string = '') {
    try {
        await mongoose.connect(connection_string)
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "MongoDB connection error:"));
        return db
    } catch (error) {
        console.log({
            "Error": error
        })
        process.exit(1)
    }
}

module.exports = connectDB