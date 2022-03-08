//Create an array of descriptor words
const descriptor = ["content", "joyful", "anxious", "discouraged", "expectant", "tired", "strong", "capable", "confident", "scared", "worried", "displaced", "secure"];

//Grab button element
const btn = document.querySelector(".btn"); 
// console.log(btn); 

//Add event listener for clicking the button
btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber(); 
    // console.log(randomNumber); 
    btn.innerText=descriptor[randomNumber];
})

//Run function to generate whole random number within the length of the descriptor array
function getRandomNumber(){
    return Math.floor(Math.random() * descriptor.length); 
}