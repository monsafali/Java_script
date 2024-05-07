// DiceNumber

function roldice(){
    let random = Math.floor(Math.random()*6)+1;
    return random
}

// console.log(roldice());



// REturn Avergage Number
function averag(num1, num2,num3){
    return (num1 + num2 + num3 )/ 3;
}

// console.log(averag(8,4,12));



function table(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i)
    }
}
// console.log(table(2))


function multiplication_table(number){
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
}
// console.log(multiplication_table(4))


// Sum of the n number
function sumNumber(n){
let Sum = 0;
    for(let i=1; i<=n; i++){
    Sum = Sum +i;
}
console.log(Sum)
}

// console.log(sumNumber(4));

// let array = ["IT","is","Amazing","course"]

// function concatination(array){
//     let result;
//     for(let i=0; i< array.length;i++){
//       result += array[i]
//     }
//     return result;
// }

// console.log(concatination(array));

// Qs1. Write a JavaScript function that returns array elements larger than a number.

let name = function(array, number){
    let larger_number = [];
    for(x in array){
        if(array[x] > number){
            larger_number.push(array[x]);
        }

    } return larger_number;

}

let data = [1,2,8,4,7,3,5,4,6,8,11];

// console.log(name(data,5));


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let unique = function(str){
    let List = [];
    for(let x in str){
        List.push(str[x])
    }
   let uniqueset = new Set(List);
   let uniquearr = Array.from(uniqueset);
   let uniqueitem = uniquearr.join("");
   let unique_string = uniqueitem.toString();
   return unique_string
}

// let string = "abcdabcdefgggh";
// console.log(unique(string))




// Qs3. Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America"

function longestCountryName(country) {
    let longest = "";
    for (let i = 0; i < country.length; i++) {
        if (country[i].length > longest.length) {
            longest = country[i];
        }
    }
    return longest;
}

// Example usage:
// const countryNames = ["Australia", "Germany", "United States of America","Pakistan","Dubai","Indian"];
// console.log(longestCountryName(countryNames)); // Output: "United States of America"



function shortestCountryName(country) {
    let shortest = country[0]; // Initialize shortest with the first country name
    for (let i = 1; i < country.length; i++) { // Start the loop from the second country name
        if (country[i].length < shortest.length) { // Compare lengths to find the shortest name
            shortest = country[i];
        }
    }
    return shortest;
}

// Example usage:
const countryNames = ["Australia", "Germany", "United States of America","Pakistan","Dubai","Indian"];
console.log(shortestCountryName(countryNames)); // Output: "Germany"




// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.

let vowel_count = function(str){
    let vowel = ["a","e","i","o","u"]
    count = 0;
    for(let i=0; i <str.length; i++){
        for(x in vowel){
            if(str[i] == vowel[x]){
                count++
            }
        }   
    }return count
}

// console.log(vowel_count('The quick brown fox jumpes over the lazy dog.'))




// Qs5. Write a JavaScript function to generate a random number within a range
// (start, end).


let my_choise_random = function (strt_num,end_num){
    let random = Math.floor(Math.random()* (end_num-strt_num +1)) + strt_num;
    return random;
}

// console.log(my_choise_random(10,20))

// Write an arrow funciton that returns the squre of a number "n".

let squre = (n)=>{
    return n*n
}

// create a arrow function with setineteval who print the stetement  in every 2s back to back
// let Name = setInterval(()=>{
//     console.log('Hello Word');
// },2000)



// Qs1: write an arrow function named arrayAverage that accepts and array of numbers and returns the average of those numbers. 

let arrayAverage = (array)=>{
    let total = 0;
    for(let i=0; i<array.length; i++){
        total += array[i];
    }
    return total/array.length;
}

let marks = [50,80,33];




// Q2: write an arrow function named isEven() that takes a single number as a arguments and returns if it is even or not. 

let IsEven = (n)=>{
    if(n%2== 0){
        return true
    }else{
        return false
    }
}



// const object = {
//     Message: "Hellow how are you",
//     logMessage(){
//         console.log(this.Message)
//     }
// };

// setTimeout(object.logMessage,1000)


let lenght = 4;
function callback(){
    console.log(this.lenght);
}
const Object = {
    lenght: 5,
    method(callback){
        callback();
    },
};

Object.method(callback, 1,2);