

var wins =0;
var losses =0;
var guessesLeft =9;
var computerguess;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userinput = [];
var userclicked;

// alert (message, "Lets Play"); 

// computerguess= letter[Math.floor(Math.random()*letters.length)];

document.onkeyup= function() {click()};

    click = function() {
        var userclicked = event.key
        userinput.push(userclicked);
         console.log(userinput);
         console.log(computerguess);
    }

        if (computerguess === userclicked)  {
        alert("You have the same letter! Reload to restart.");
        alert("GAME OVER");
        wins ++;
        document.getElementById("wins").innerHTML = wins ;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("yourguesses").innerHTML = userinput;
        document.getElementById("guessesleft").innerHTML = guessesLeft;

    }else {
        alert("Guess Again!");
        guessesLeft--;
        losses++
        document.getElementById("wins").innerHTML = wins ;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("yourguesses").innerHTML = userinput;
        document.getElementById("guessesleft").innerHTML = guessesLeft;
        
    }

    if ( guessesLeft === 0) {
        alert("GAME OVER");
    }
