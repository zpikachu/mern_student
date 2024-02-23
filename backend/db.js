const mongoose = require('mongoose');
// const ConnectURI = "mongodb://localhost:27017/crud";
const ConnectURI = "mongodb://127.0.0.1:27017/crud";



const ConnectToMongo = async() => {
    try {
        await mongoose.connect(ConnectURI);
        console.log("connect To Mongo Succesfull");
    } catch (err) {
        console.log("Connect To Mongo Unsuccesfull", err);
    }
};
module.exports = ConnectToMongo;