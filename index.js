// code your solution here
function superbowlWin(record) {
    const winningYearObj = record.find(game => game.result === "W");
    return winningYearObj ? winningYearObj.year : undefined;
  }
  