const express = require('express');
const app = express();
const axios = require('axios');

//Altere para a porta que preferir. A url vai fica de acordo com a porta ex: localhost:8080
const port = 8080;

//
app.get('/global', (req, res) => {

    axios.get('https://covid19.mathdro.id/api')
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });
});

app.get('/confirmed', (req, res) => {
    axios.get('https://covid19.mathdro.id/api/confirmed')
        .then(function (response) {

            res.send(response.data.sort(function (obj1, obj2) {
                return obj2.confirmed - obj1.confirmed;
            }));
        })
        .catch(function (error) {
            console.log(error)
        });
});

app.get('/daily', (req, res) => {
    axios.get('https://covid19.mathdro.id/api/daily')
        .then(function (response) {

            res.send(response.data.sort(function (obj1, obj2) {
                return obj2.confirmed - obj1.confirmed;
            }));
        })
        .catch(function (error) {
            console.log(error)
        });
});


app.get('/daily/:date', (req, res) => {
    const { date } = req.params;

    axios.get('https://covid19.mathdro.id/api/daily/' + date)
        .then(function (response) {

            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });
});


app.get('/countries', (req, res) => {
    const { country } = req.params;

    axios.get('https://covid19.mathdro.id/api/countries/' + country)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });
});

app.get('/countries/:country', (req, res) => {
    const { country } = req.params;

    axios.get('https://covid19.mathdro.id/api/countries/' + country)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });
});


app.listen(port, () => {
    console.log('Servidor rodando na porta: ' + port);
});
