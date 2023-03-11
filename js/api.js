const fetch = require('node-fetch');

const url = 'https://currency-exchange.p.rapidapi.com/listquotes';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '28d18ac25cmshb525760a487f197p1352fcjsnbbe4d266441f',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));