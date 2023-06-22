// code your solution here
function saturdWork(activity = "go to office"){
    return function(){
        return `i will ${activity}`;
    }

}
function wrapAdjevtice(flair = "*"){
    return function(adjective = "special"){
        return `you are ${flair}, ${adjective} ,${flair}`;
    }
}
console.log(wrapAdjevtice());
