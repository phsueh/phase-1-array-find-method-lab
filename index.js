// function isWin(arr){
//     return arr.result === "W";
//   }
  
function superbowlWin(arr){
    return arr.find((arr) => {arr.result === "w"}).year
  }
