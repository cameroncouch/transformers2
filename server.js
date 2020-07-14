const express = require('express');
const app = express();
const routes = require('./route');
const axios = require('axios').default;

app.use(express.static("./public"));
app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 8080; 

app.listen(port, _ => console.log("Server is running on port 8080"));

const bearer = process.env.BEARER
var cardName;
var cardSku;

app.get('/cardName/:name', (req,res) => {
    cardName = req.params.name;
    return axios.get(`https://api.tcgplayer.com/v1.32.0/catalog/products?categoryId=57&productName=${cardName}`, {
        headers: {'Authorization': `Bearer ${bearer}`},
        }).then((response) => {
            res.send(response.data);
        }).catch((err) => {
            console.error('Error:', err); return Promise.reject(err);
        });
});


app.get('/cardPrice/:sku', async (req,res) => {
    cardSku = req.params.sku;
     return await axios.get(`https://api.tcgplayer.com/v1.32.0/pricing/product/${cardSku}`, {
        headers: {'Authorization': `Bearer ${bearer}`},
    }).then((response) => {
        res.send(response.data);
    }).catch((err) => {
        console.error('Error:', err); return Promise.reject(err);
    });
});