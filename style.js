function mondayWork(activity = "go to the office") {
    return function() {
      return `This Monday, I will ${activity}.`;
    }
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }

  console.log(wrapAdjective());