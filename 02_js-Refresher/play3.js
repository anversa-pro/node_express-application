const person = {
    name: 'Max',
    age: 35,
    greet() {

        console.log('Hi, I am '+ this.name);
    }
};

const printName = ({name}) => {
    console.log(name);
}
printName(person);

const {name, age} = person;
console.log(name, age);

// person.greet();

// const copiedPerson = {...person};
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// // Print option
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// // hobbies.push('Programming');
// // console.log(hobbies);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// // Option 1
// // const toArray = (...args) => {
// //    return args;
// // };

// //Option 2
// const toArray = (...args) => args;

// console.log(toArray(4,3,2,1));