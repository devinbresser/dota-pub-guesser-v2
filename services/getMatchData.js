
const fetch = require('node-fetch');
const filterBadMatches = require('../utils/filterBadMatches');
const { json } = require('express');

/*
// createMatchArray: retrieves a cleaned-up public match array from the opendota API
const createMatchArray = async() => {
    fetch('https://api.opendota.com/api/publicMatches/?less_than_match_id='+(endingMatchId-Math.floor(Math.random()*50000)))
        .then(res => res.json())
        .then(matchList =>{
            return matchList[0];
        })
};
*/

const createMatchArray = async () => {
    const endingMatchId = 5447321333;
    const response = await fetch(`https://api.opendota.com/api/publicMatches/?less_than_match_id=${endingMatchId}`);
    const json = await response.json();
    return json;
};


module.exports = createMatchArray;

