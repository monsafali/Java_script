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

let array = ["IT","is","Amazing","course"]

function concatination(array){
    let result;
    for(let i=0; i< array.length;i++){
      result += array[i]
    }
    return result;
}

console.log(concatination(array));