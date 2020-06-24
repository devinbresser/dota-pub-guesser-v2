const regionList = require('../constants/regionList')

// getRegion: retrieves the region name from the dictionary, or "UNKNOWN" if not found
function getRegion(regionId){
    for(let i=0; i<regionList.regions.length;i++){
        if(regionId == regionList.regions[i].id){
            return regionList.regions[i].region;
        }
    }
return "UNKNOWN";
}

module.exports = getRegion;