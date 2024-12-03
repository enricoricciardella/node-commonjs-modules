const hobby = require("./hobbies");
const names = require("./names");

function appFinals(){
    return {fullName:names("Federico", "Rossi") , hobbies:hobby("Calcio", "Golf", "Nuoto")};
};
console.log(appFinals());