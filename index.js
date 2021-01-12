//detecting button press
var numberOfDrumButtons = document.querySelectorAll("button.drum").length;
for (var i = 0; i < numberOfDrumButtons ; i++){
  document.querySelectorAll("button.drum")[i].addEventListener("click", function(){ //go through all buttons and add listener
    //this, the identity of the button that triggered the event
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    //check which button was pressed then call makeSound function to
    //assign the sound accordingly
    //buttonInnerHTML will have the key of the button
    //that triggered the event
    buttonAnimation(buttonInnerHTML);
  });
}
//assigning different sounds, play method one by one
//creating diff objects for diff sounds
//Audio is also class, constructor of objects

//detecting keyboard press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  //check which key was pressed then call makeSound function to
  //assign the sound accordingly
  //event.key will return which key was pressed that triggered the event
  //key property of the event
  buttonAnimation(event.key);
})

//assigning diff sounds to event listeners according to their key
function makeSound(key){
  //this switch statement takes in a single key character as input
  //then assigns the specific listener function to the diff event keys
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'a':
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case 's':
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case 'd':
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case 'j':
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case 'k':
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case 'l':
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default: console.log(buttonInnerHTML); //just showing which button triggered default case

  }
}

function buttonAnimation(currentKey){
 var activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");
//to add an animation
 setTimeout(function(){
   activeButton.classList.remove("pressed");
 },100);
}
