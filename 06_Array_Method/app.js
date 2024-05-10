// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.



// let array = [5,10,20,25,30,40];
// // Find the squre of each element
// let sequre = ((arr)=>{
//     arr.forEach(element => {
//         console.log(`Sequre of ${element} is ${element*element}`) 
//     }); 
// })
// let sum = array.reduce((a,b)=> a+b, 0);

// console.log(sequre(array));
// console.log(`Sum of total array is: ${sum}`);
// console.log(`The averge of array is: ${sum/array.length}`)



// --------------------------------------------------------------------------------------------
// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

// let array = [10, 20, 30, 40, 50];
// let map_array = array.map(element => element +5);
// console.log(map_array);

// ------------------------------------------------------------------------------------------------

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

let arr = ['monsaf','ali','laiba','jahangir','mustafa','kamal','faisal','alnafi'];
let upper_case_arr = [];
let i= 0;
while(i< arr.length){
    upper_case_arr.push(arr[i].toUpperCase());
    i++;
};
// console.log(upper_case_arr);
// console.log(arr.map((value) => value.toUpperCase()));
// ___________________________________________________________________________________________________

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.


function doubleAndReturnArgs(arr, ...args){
    let doubleArgs = args.map(org => org *2);
    return [...arr, ...doubleArgs];
}

let my_arr = [5,10,15]
let result = doubleAndReturnArgs(my_arr, 4,5,6);
console.log(result)

// ___________________________________________________________________________________________________________
// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object


function mergeObject(obj1,obj2){
    return {...obj1, ...obj2}
}

let students = {
    name: "monsaf",
    age :25,
    class: "14"
}
let mySkill = {
    P_language : ['python','javascript'],
    O_system : "linux",
    filed : "Devops"
}

console.log(mergeObject(students, mySkill));