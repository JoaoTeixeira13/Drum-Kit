// Detecting Button Press using addEventListener. When clicked, the buttons
// will call two functions: makeSound() and buttonAnimation() (defined bellow)


// numberOfDrumButtons equals the selection of  all items from the class ".drum" across the document (.length)

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


// the following for loop adds an event listener to each ".drum" item, when the function is called.
// the functions makeSound() and buttonAnimation are called inside this higher order function


for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    }); // the anonymous function waits for the event to happen to be called.
}

//Detecting Keyboard press


// The whole document is "listening", waiting for the key to be pressed.

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

// makeSound Function according to key
// the switch statement assigns a sound file to each case, and the plays it.

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);

    }
}

// Button animation upon play function. gives a css class of "pressed" to the buttons
// and then removes it with a setTimeout().

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

