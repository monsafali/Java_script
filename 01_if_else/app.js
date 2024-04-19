// let input = prompt('type here your string');

// if (input.length >= 3){
//     if (input[0] === 'a' ){
//        console.log(input);
//     } else{
//         console.log('not to start with letter a please type another')
//     }
// }else {
//     console.log('length is too low')
// }

// Quistion No 02

// let day = parseInt(prompt('enter a day name'));
//   switch (day) {

//     case 0:
//       console.log(`${day} = Sunday`)
//       break;
//     case 1:
//     console.log(`${day} = Monday`)
//       break;
//     case 2:
//         console.log(`${day} = Tuesday`)
//       break;
//     case 3:
//         console.log(`${day} = Wednesday`)
//       break;
//     case 4:
//         console.log(`${day} = Thursday`)
//       break;
//     case 5:
//         console.log(`${day} = Friday`)
//       break;
//     case 6:
//         console.log(`${day} = Saturday`)
//       break;

//   }





// Question NO 03


// let number = parseInt(prompt('Enter any number'));

// if (number%2 === 0){
//     console.log('goood')
// } else {
//     console.log('bad')
// }



// Question NO 04

// let Name = prompt('Enter your name');
// let AGe = parseInt(prompt('Entewr your age'));
// console.log(`${Name} is ${AGe} year old`);


// function check(Name, age){
//     return (`${Name} is ${age} year old`);
// }
// console.log(check('monsaf',25));



// Question NO 05

// let quearter = parseInt(prompt('Enter a quarter number 1,2,3,4'));

// switch(quearter) {
//     case 1:
//         console.log('January, Feburary, March')
//         break
//     case 2:
//         console.log('April','may','jun')
//         break
//     case 3:
//         console.log('July','Aguest','Semtember')
//         break
//     case 4:
//             console.log('October','November','December')
//         break;
//     default:
//         console.log('Something happening wrong')
// }



// Question No 06

// let input = prompt('type here your string');

// if (input.length >= 5){
//     if (input[0] === 'a' || input[0] === 'A' ){
//        console.log('Goldern String');
//     } else{
//         console.log('Not a Golden String')
//     }
// }else {
//     console.log('length is too low')
// }



// Question No 07:
// let number1 = parseInt(prompt('Enter first number'))
// let number2 = parseInt(prompt('Enter second number'))
// let number3 = parseInt(prompt('Enter third number'))


// if (number1 > number2 && number1 > number3){
//     console.log(`Number 1 is greater: ${number1}`)
// } else if (number2 > number1 && number2 > number3){
//     console.log(`Number 2 is greater: ${number2}`);
// } else  {
//     console.log(`Number 3 is greater: ${number3}`)
// }

// Question No 08:

let first_number = prompt('enter a number').toString();
let second_number = prompt('enter a second number').toString(); ;


if (first_number.slice(-1) === second_number.slice(-1)){
    console.log(`same last digit ${first_number.slice(-1)}`)
} else{
    console.log('not a same number')
}



// if ((first_number%2)== (second_number%2)){
//     console.log('this is same number')
// } else {
//     console.log('not a same number')
// }