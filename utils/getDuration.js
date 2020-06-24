// getDuration: retrieves the match's duration in minutes:seconds format
function getDuration(duration){
    if(duration % 60 <10) return String(Math.floor(duration/60))+":0"+String(duration % 60);
    return String(Math.floor(duration/60))+":"+String(duration % 60);
}
module.exports = getDuration;