// Option 1
// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!');
//     },1500);
// };

// Option 2
// const fetchData = callback => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             callback('Done!');
//         },1500);
//     });
//     return promise;
// };

// Option 3
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        },1500);
    });
    return promise;
};

// Option 1 and 2
// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
// }, 1000);

// Option 3
setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

const test = 'there';
console.log (`Hello ${test}`);
console.log('Hi');
