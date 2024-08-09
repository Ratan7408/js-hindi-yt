const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["shaktiman", "ratan","shriraj"]
marvel_heros.push(dc_heros)
// console.log(marvel_heros);  // [ 'thor', 'ironman', 'spiderman', [ 'shaktiman', 'ratan', 'shriraj' ] ]
// console.log(marvel_heros[3] [1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);  // [ 'thor', 'ironman', 'spiderman', [ 'shaktiman', 'ratan', 'shriraj' ] ]



const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);
