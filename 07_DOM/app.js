let p = document.createElement('p');
p.innerText = "Hey I'm Red"
p.style.color = 'red';
document.querySelector('body').append(p)

let h3 = document.createElement('h3')
h3.innerText = "Hey I'm blue h3"
h3.style.color = 'blue'
document.querySelector('body').append(h3)



let div = document.createElement('div');

let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "Hey I'm Inner h1"
para2.innerText = "me Also";


div.append(h1);
div.append(para2)
div.classList.add('bg')

document.querySelector("body").append(div)
