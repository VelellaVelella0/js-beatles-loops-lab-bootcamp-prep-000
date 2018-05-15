function theBeatlesPlay(arraym, arrayi){
  var arrays=[]
    for (let i = 0; i <arraym.length; i++ ) {
  arrays.push(`${arraym[i]} plays ${arrayi[i]}`)
}
return arrays

}

function johnLennonFacts(array){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.unshift `!!!`
  } while (array.length > 0 && maybeTrue())

}