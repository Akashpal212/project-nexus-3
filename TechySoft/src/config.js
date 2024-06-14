const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://akashpal2122003:w07dIskMvuHC07kK@project-nexus3.gpbci4v.mongodb.net/?retryWrites=true&w=majority&appName=project-nexus3");

connect.then(() => {
    console.log("Database connected successfully");
})
.catch(() => {
    console.log("Database can't be connected");
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", LoginSchema);
module.exports = collection;