const person = {
    name: 'Alex',
    tel: '+998999999999',
    parent: {
        mom: 'Anna',
        dad: 'Andrey'
    }
};

// const clone = {
//     ...person
// }
// clone.name = 'Sulton'
// console.log(person)
// console.log(clone)

const cloneTwo = JSON.stringify(person);
const cloneThree = JSON.parse(JSON.stringify(person));
console.log(cloneTwo)
console.log(cloneThree)