const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=e43f38be4130dd871206970219363112&query=New%20York&units=s';
const localtestData = './weather-localtestdata.json';
request({url: url, json:true}, (error, response) => {
    //const data = JSON.parse(response.body)
    console.log('It is currently ' + response.body.current.temperature + ' degree out. There is a ' + response.body.current.precip + '% chances of rain.');
})