let userInput = parseInt(document.getElementById("userInput").value);

function myFunction(){
    if(isNaN(userInput)){
        document.getElementById("answer").innerHTML = "Please enter a numerical value";
    }else if(userInput == 2 % 0){
        document.getElementById("answer").innerHTML = "Your number is even";
    }else{
        document.getElementById("answer").innerHTML = "Your number is odd";
    };
};