const express = require('express');
const app = express();

app.use(express.static("./transformers"));
app.use(express.json());
app.use("/", comp)

const port = process.env.PORT || 8080; 

app.listen(port, _ => console.log("Server is running on port 8080"));