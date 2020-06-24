// import packages
const express = require("express");
const cors = require("cors");
require('dotenv').config();

// import constants
const heroList = require('./constants/heroList')
const regionList = require('./constants/regionList')
const ranks = ['HERALD','GUARDIAN','CRUSADER','ARCHON','LEGEND','ANCIENT','DIVINE','IMMORTAL']

// import utility functions
const getCleanHeroName = require('./utils/getCleanHeroName');
const getRegion = require('./utils/getRegion');
const getDuration = require('./utils/getDuration');

// import services
const exampleSVC = require('./services/exampleService');
const getMatchData = require('./services/getMatchData');


//* express function
const app = express();

//* middleware for cors, middleware fires everytime the endpoint is hit.
app.use(cors());

//* our first route, GET
app.get('/', (req, res) => {
  res.send(getDuration(5434));
});

app.get('/getMatchData/:index', async(req,res) => {
   console.log("Just got a request for some match data");
   const response = await getMatchData();
   res.send(response[0]);
})

//* second route for getting Data, with params
app.get('/getData/:numberGen', async (req, res) => {
    console.log("NUMBER WAS: ", req.params.numberGen)
    const response =  await exampleSVC(req.params.numberGen);
    res.json({response}); // {'data': 'Data I want.'}
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
});

