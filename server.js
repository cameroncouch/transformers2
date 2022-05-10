const express = require('express');
const app = express();
const routes = require('./route');
const axios = require('axios').default;

app.use(express.static("./public"));
app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, _ => console.log("Server is running on port 3000"));

const bearer = process.env.BEARER;
var cardName;
var cardSku;

app.get('/cardName/:name', async (req, res) => {
    cardName = req.params.name;
    return await axios.get(`https://api.tcgplayer.com/v1.37.0/catalog/products?categoryId=57&productName=${cardName}`, {
        headers: { 'Authorization': `Bearer ${bearer}` },
    }).then((response) => {
        res.send(response.data);
        console.log(`Endpoint:${decodeURIComponent(req.url)} | Status:${response.status}`);
    }).catch((err) => {
        res.send({ "error": err.response.data.errors[0] });
        console.error(`Endpoint:${decodeURIComponent(req.url)} | Error:${err.response.data.errors[0]}`);
    });
});


app.get('/cardPrice/:sku', async (req, res) => {
    cardSku = req.params.sku;
    return await axios.get(`https://api.tcgplayer.com/v1.37.0/pricing/product/${cardSku}`, {
        headers: { 'Authorization': `Bearer ${bearer}` },
    }).then((response) => {
        res.send(response.data);
        console.log(`Endpoint:${decodeURIComponent(req.url)} | Status:${response.status}`);
    }).catch((err) => {
        res.send({ "error": err.response.data.errors[0] });
        console.error(`Endpoint:${decodeURIComponent(req.url)} | Error:${err.response.data.errors[0]}`);
    });
});