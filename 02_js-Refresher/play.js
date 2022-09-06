const name = 'Max';
let age = 35;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return(
        'Name is ' + userName +
        ', age is '  + userAge + 
        ' and user has hobbies: ' + userHasHobby
    );
};

// const add = (a,b) => a + b;
const addOne = a => a + 1;

console.log(summarizeUser(name, age, hasHobbies));
// console.log(add(1,5));
console.log(addOne(7));
