// code your solution here

function superbowlWin(array) {
    for (const win of array) {
    if (win.result === "W") {
        return win.year;
       }
   }
}