const person = {
    name: 'Max',
    age: 35,
    greet() {
        console.log('Hi, I am '+ this.name);
    }
};
person.greet();

const hobbies = ['Sports', 'Cooking'];
// Print option 1
//for (let hobby of hobbies){
//    console.log(hobby);
//}

// Print option 2
//console.log(hobbies.map(hobby =>{
//    return 'Hobby: ' + hobby;
//}));

// Print option 4
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// Print option 3
// console.log(hobbies);