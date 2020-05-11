const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  // {year: 1234, result: "W" || "L"}

  const win = array.find(function(element) {
    element.result === "W"
  })
  return win.year  
}