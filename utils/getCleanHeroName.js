const heroList = require('../constants/heroList')

// getCleanHeroName: get clean hero name from ID
function getCleanHeroName(heroId){
    for(let i=0; i<120;i++){
        if(heroId == heroList.result.heroes[i].id){
            return heroList.result.heroes[i].name.replace('npc_dota_hero_','');;
        }
    }
}

module.exports = getCleanHeroName;