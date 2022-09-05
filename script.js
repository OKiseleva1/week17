let fullName = document.querySelector(".fullname");
let secondName = document.querySelector(".secondname");
let firstName = document.querySelector(".firstname");
let thirdName = document.querySelector(".thirdname");

let form=document.querySelector("form");
let button = document.querySelector("button");

form.addEventListener('submit', function(event) {
    event.preventDefault();   
    }
)    
button.onclick=function(){
    
    fullName.value=fullName.value.toLowerCase();
    console.log (fullName.value);
    let fullNameArr= fullName.value.split(" ");
    console.log(fullNameArr);
    for (let i = 0; i < fullNameArr.length; i++) {
        fullNameArr[i] = fullNameArr[i][0].toUpperCase() + fullNameArr[i].substr(1);
    };
    console.log(fullNameArr);
    fullNameArr.join(" ");

    secondName.value=fullNameArr[0];

    
    firstName.value=fullNameArr[1];
    thirdName.value=fullNameArr[2];

    }