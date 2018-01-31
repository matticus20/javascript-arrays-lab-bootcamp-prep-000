const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten() {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

var otherKitten = "Broom"
function appendKitten(kittens, otherKitten) {
  var moreKittens = [...kittens, "Broom"]
  return moreKittens
}