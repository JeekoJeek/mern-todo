const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static)
}

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/mern_todo", { useNewUrlParser: true }
);

app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`);
});