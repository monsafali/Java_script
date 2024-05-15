// createw addeventliser to generate a random color



// let btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;


//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;


//     console.log('Color Updated')
// })

// function  getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
 
//     let color = `rgb(${red},${green},${blue})`
//     return color;
// }




// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
// [Use MDN for help]


// document.addEventListener('DOMContentLoaded', function(){
     // Mouseout event

    //  document.getElementById('clickMeBtn').addEventListener('mouseout', function(event) {
    //     alert('Mouseout event occurred!');
    // });

     // Keypress event

//      document.getElementById('textInput').addEventListener('keypress', function(event) {
//         console.log('Keypress event occurred. Key pressed:', event.key);
//     });
    
// });


 // Scroll event
// const scrollableDiv = document.getElementById('scrollableDiv');
// scrollableDiv.addEventListener('scroll', () => {
//   console.log('Scrolled!');
// });

// load
// window.addEventListener('load', () => {
//     console.log('Page fully loaded');
//   });




//   Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.


const button = document.createElement('button');
button.textContent = 'Click me!';
button.id = 'myButton';

// Add event listener to the button
button.addEventListener('click', () => {
  // Change the button's background color to green
  button.style.backgroundColor = 'green';
});

// Append the button to the container in the HTML body
const buttonContainer = document.getElementById('buttonContainer');
buttonContainer.appendChild(button);




// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]







