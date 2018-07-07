
function iLoveTheBeatles(n) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return emptyArray
}

function theBeatlesPlay(musicians, instruments) {
  var blankArray = []
  for (var i = 0; i < musicians.length; i++) {
    blankArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return blankArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    console.log(facts.push(`${facts[i]}!!!`));
    i++;
  }
  return facts
}