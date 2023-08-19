const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   cats.push(name)
}

console.log(cats)

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
console.log(cats)

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    const allCats = [...cats, name]
return allCats
}
function prependCat(name) {
    const allCats = [name, ...cats]
return allCats
}

function removeLastCat(name) {
    const allCats = [...cats]
    allCats.pop(name)
  return allCats  
}

function removeFirstCat(name) {
    const allCats = [...cats]
    allCats.shift(name)
    return allCats
}