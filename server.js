const express = require('express');
const app = express();
const routes = require('./route');
const { response } = require('express');
const https = require('https');

app.use(express.static("./public"));
app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 8080; 

app.listen(port, _ => console.log("Server is running on port 8080"));

const bearer = process.env.BEARER
const cardUrl = `api.tcgplayer.com`
var cardName;
var cardSku;

const options1 = {
    host: cardUrl,
    path: `/v1.32.0/catalog/products?categoryId=57&productName=${cardName}`,
    headers: {
        Authorization: `Bearer ${bearer}`
    }
}
const options2 = {
    host: cardUrl,
    path: `/v1.32.0/pricing/product/${cardSku}`,
    headers: {
        Authorization: `Bearer ${bearer}`
    }
}

app.get('/cardName/:name', async (req,res) => {
    cardName = req.params.name;
    https.get(options1, (response) => {
        response.on('data', () => {
            console.log(response);
        });
        response.on('end', () => {
            console.log(response);
            return response;
        });
    }).on('error', (error) => {
        console.log(error);
    });
});

app.get('/cardPrice/:sku', async (req,res) => {
    cardSku = req.params.sku;
    https.get(options2, (response) => {
        response.on('data', () => {
            console.log(response);
        });
        response.on('end', () => {
            console.log(response);
            return response;
        });
    }).on('error', (error) => {
        console.log(error);
    });
});

module.exports = bearer;