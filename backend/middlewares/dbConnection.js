require("dotenv").config()
const mongoose = require("mongoose");
const { getPDF } = require("../services/indexCreationServices/termComputeEngine");
const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jsenic9.mongodb.net/?retryWrites=true&w=majority`;
const connectToDb = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        getPDF()
        console.log("DB connected successfully")
    } catch(connectionError) {
        console.error(connectionError)
    }
}

module.exports = connectToDb;