const coutvalue = document.querySelector("#counter")


const increment = () =>{
    // get the value from Ui
    let value = parseInt(coutvalue.innerText);
    // Update the value
    value = value +1;
    // set the value onto Ui
    coutvalue.innerText = value;
};

const decrement = () => {
 // get the value from Ui
 let value = parseInt(coutvalue.innerText);
 // Update the value
 value = value -1;
 // set the value onto Ui
 coutvalue.innerText = value;
};