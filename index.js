// code your solution here
// function superball (){
    
//         const record = [
//             { year: "2015", result: "W"},
//             { year: "2014", result: "N/A"},
//             { year: "2013", result: "L"},
//             //...
//         ]
//         it('returns a year the Denver Broncos won the superbowl', function () {
//             expect(superbowlWin(record)).to.equal('2015');
//               });
//               it('returns undefined if the record has no win objects', function() {
//                 const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
//                 expect(superbowlWin(sadReality)).to.equal(undefined)
//               });


//}
    

function superbowlWin(record) {
    let winningGame = record.find(game => game.result === "W");
  
    // If a winning game is found, return the year
    // Otherwise, return undefined
    return winningGame ? winningGame.year : undefined;
  }
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // More game records...
  ];
  
  console.log(superbowlWin(record)); // Output: "2015"
  