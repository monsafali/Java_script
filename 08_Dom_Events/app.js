let btns = document.querySelectorAll('button');
for(btn of btns){
    // btn.onclick = (()=>{
    //     alert('submit successfully')
    // })

// onmouseenter
    // btn.onmouseenter = (()=>{
    //     alert('someone hacked you accounts')
    // })



    // addEventListener
    btn.addEventListener("click",sayRight);
    btn.addEventListener("click",sayWrong);
    btn.addEventListener("dblclick",(()=>{
        console.log('you clicked doubled')
    }));
}

function sayRight (){
    alert('All things going right')
}

function sayWrong(){
    alert("Something went wrong")
}







