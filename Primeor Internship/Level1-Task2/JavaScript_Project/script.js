// =====================
// Task 1
// Change Button Color
// =====================

function changeColor(){

    const button = document.getElementById("colorButton");

    if(button.style.backgroundColor==="red"){

        button.style.backgroundColor="#0d6efd";

    }

    else{

        button.style.backgroundColor="red";

    }

}


// =====================
// Task 2
// Greeting Message
// =====================

function showGreeting(){

    const hour = new Date().getHours();

    let message="";

    if(hour>=5 && hour<12){

        message="Good Morning ☀️";

    }

    else if(hour>=12 && hour<17){

        message="Good Afternoon 🌤️";

    }

    else{

        message="Good Evening 🌙";

    }

    alert(message);

}


// =====================
// Task 3
// Calculator
// =====================

function calculateSum(){

    const num1=document.getElementById("num1").value;

    const num2=document.getElementById("num2").value;

    if(num1==="" || num2===""){

        alert("Please enter both numbers.");

        return;

    }

    const sum=Number(num1)+Number(num2);

    document.getElementById("result").innerHTML="Result: "+sum;

}