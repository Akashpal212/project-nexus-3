const mongoose = require("mongoose");

const fconnect = mongoose.connect("mongodb+srv://akashpal2122003:w07dIskMvuHC07kK@project-nexus3.gpbci4v.mongodb.net/?retryWrites=true&w=majority&appName=project-nexus3");

fconnect.then(() => {
    console.log("Database connected successfully");
})
.catch(() => {
    console.log("Database can't be connected");
});

const FeedSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});

const fcollection = new mongoose.model("feedbackusers", FeedSchema);
module.exports = fcollection;