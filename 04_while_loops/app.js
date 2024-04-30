// Q No 1

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let target = 2;
// for(let i= 0; i<arr.length; i++){
//     if(arr[i] == target){
//         arr.splice(i,1)
//     }
// }
// console.log(arr)

// Remove Duplicated from array

// function removeDuplicates(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (!newArr.includes(arr[i])) {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
//   }

//   console.log(removeDuplicates(arr))






// Q2

// let number = prompt('enter number')
// let count = 0;
// for(x of number){
//     count++
// }
// console.log(count)




// Q3

// let number2 = prompt('enter number string number');
// let sum = 0;
// for (let i = 0; i < number2.length; i++){
//     sum +=  parseInt(number2[i])
// }
// console.log(sum)




// Q4

let number = parseInt(prompt('Enter Factorial Number'));









// Q5

let array = [1,4,2,5,4,8,7,13,2,4,5,8,7,8,]; //spouse this is our array
let large = 0;
for(let i=0; i<array.length; i++){
    if(array[i] >= large){
        large = array[i]
    }
}
console.log(large)