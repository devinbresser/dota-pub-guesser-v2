const regionList = require('../constants/regionList')
const getCleanHeroName = require('../utils/getCleanHeroName')

// fillHeroArray: fills the hero array with the id's of heroes from the json
// converted to clean names for image retrieval
// also fills the ranks array with rank information
function fillHeroArray(data){
    for(let i=0; i<10; i++){
        heroArray.push(getCleanHeroName(data.players[i].hero_id));
        ranksArray.push(data.players[i].rank_tier);
    }
}

module.exports = fillHeroArray;