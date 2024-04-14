const marvel_heroes = ["Spiderman","Ironman","Hulk"]
const dc_heroes = ["Superman","Batman","Flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // actually we are pass the object into the array

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

const newHeroes = [...marvel_heroes , ...dc_heroes] // using spread opertor

const another_array = [1,3,5,[1,5,8],[5,6,4,[6,9,4]]]

const usable_array=another_array.flat(Infinity) 
console.log(usable_array);