// let p = document.createElement('p');
// p.innerText = "Hey I'm Red"
// p.style.color = 'red';
// document.querySelector('body').append(p)

// let h3 = document.createElement('h3')
// h3.innerText = "Hey I'm blue h3"
// h3.style.color = 'blue'
// document.querySelector('body').append(h3)



// let div = document.createElement('div');

// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');

// h1.innerText = "Hey I'm Inner h1"
// para2.innerText = "me Also";


// div.append(h1);
// div.append(para2)
// div.classList.add('bg')

// document.querySelector("body").append(div)



// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'


let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click Me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);



// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'


input.classList.add('input')
input.id = 'plceholder'
let inp = document.getElementById("plceholder").placeholder = "username";
let f = document.querySelector("input");
f.append(inp)


button.id = 'btn'



// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.

let btn_bg = document.getElementById('btn');;
btn_bg.style.backgroundColor = "blue"
btn_bg.style.color = "white"


// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.


let h1  = document.createElement("h1")
h1.innerText = "Dom Practise"
h1.style.color = "purple"
h1.style.textDecoration = 'underline';
document.querySelector("body").append(h1)


// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.


let p_tag = document.createElement('p');
p_tag.innerHTML = "Apna College <strong>Delta</strong> Pratise";

document.querySelector("body").append(p_tag)