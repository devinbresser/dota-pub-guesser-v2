const goodLobbyTypes = [1,2,3,4,5,16,22];

// filterBadMatches: filters matches under 21 minutes in duration and in unusual modes
function filterBadMatches(matchArray){
    // scan all matches for bad ones and toss them
    for(let i=0;i<matchArray.length;i++){
        if(matchArray[i].duration<1200 || !goodLobbyTypes.includes(matchArray[i].game_mode)){
            console.log("Removed bad match: https://opendota.com/matches/"+matchArray[i].match_id);
            matchArray.splice(i,1);
        }
    }
}

module.exports = filterBadMatches;