//Create an array of descriptor words
const descriptors = ["content", "joyful", "anxious", "discouraged", "expectant", "tired", "strong", "capable", "confident", "scared", "worried", "displaced", "secure"];

//Grab button element
const btn = document.querySelector(".btn"); 
// console.log(btn); 

//Add event listener for clicking the button
btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber(); 
    // console.log(randomNumber); 
    btn.innerText=descriptors[randomNumber]; //changes to a descriptor word when button is clicked
    btn.style.color= "#8b7b6e"; //changes text color when button is clicked
    btn.style.fontWeight = "bold"; //changes text to bold when button is clicked
})

//Run function to generate whole random number within the length of the descriptor array
function getRandomNumber(){
    return Math.floor(Math.random() * descriptors.length); 
}