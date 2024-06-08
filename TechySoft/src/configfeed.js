const mongoose = require("mongoose");
const fconnect = mongoose.connect("mongodb://localhost:27017/loginreg");

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