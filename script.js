var drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', function () {
        var buttonInnerHTML = drumButtons[i].innerHTML;
        playSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}

document.addEventListener('keydown', function (event) {
    playSound(event.key);
    animation(event.key);
})

function playSound(event) {
    switch (event) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "s":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "j":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "k":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            console.error("Wrong key pressed");
            break;
    }
}

function animation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100)
}