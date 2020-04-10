const express = require('express');
const app = express();
const routes = require('./route');

app.use(express.static("./public"));
app.use(express.json());
app.use("/", routes);




const port = process.env.PORT || 8080; 

app.listen(port, _ => console.log("Server is running on port 8080"));