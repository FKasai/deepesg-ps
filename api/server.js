const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();



app.use(bodyParser.json());
app.use(cors());


app.get('/api/:city',(req,res) => {
    let city = encodeURI(req.params.city)
    let key = process.env.HG_KEY
    

    axios.get(`https://api.hgbrasil.com/weather?fields=only_results,temp,humidity,wind_speedy,city&key=${key}&city_name=${city}`)
        .then(response => {
            console.log(response.data)

            res.send(response.data);

        })
        .catch(err => {
            if (err.response) {
                res.status(500).send("HG API has an internal error")
                console.log(err)
                
                // client received an error response (5xx, 4xx)
            } else if (err.request) {
                res.status(503).send("HG API didn't connect, try again later.")
                console.log(err)
                // client never received a response, or request never left
            } else {
                res.status(500).send(`Unknown Error: ${err}`)
                console.log(err)
                // anything else
            }
        })

    
    
})

app.listen(3000)
