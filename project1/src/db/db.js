const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://sagun:sagun@backend.tmupgom.mongodb.net/project-1");
    console.log("db connected successfully");
}

module.exports = connectDB;