//Create an array of descriptor words
const descriptors = ["word1", "word2", "word3", "word4", "word5"];

//Grab button element
const btn = document.querySelector(".btn"); 
// console.log(btn); 

//Add event listener for clicking the button
//This one uses a random number to display a different word each click but in any random order 
// btn.addEventListener("click", function() {
//     const randomNumber = getRandomNumber(); 
//     // console.log(randomNumber); 
//     btn.innerText=descriptors[randomNumber]; //changes to a descriptor word when button is clicked
//     btn.style.color= "#8b7b6e"; //changes text color when button is clicked
//     btn.style.fontWeight = "bold"; //changes text to bold when button is clicked
// })

// //Run function to generate whole random number within the length of the descriptor array
// function getRandomNumber(){
//     return Math.floor(Math.random() * descriptors.length); 
// }

//What if the words are not displayed randomly, but in order, (the set order can be random).
//That way, the user can click through and familiarize themselves, and then click through again?
//Whichever cards don't get moved to a different placeholder will circulate again and the order will be familiar - less chaotic, I think.
btn.addEventListener("click", function(){
    for (let i = 0; i < descriptors.length; i++) {
     btn.innerText=descriptors[i]; //This just returns word5.
    };
})

//I'll need to loop over the array to display each descriptor
//I'd prefer to display each word 1 time before the array repeats itself - does it have to be random? I don't think so. 
//I'll need to implement a drag and drop feature so users can move the descriptor to 1 of 7 piles
//If they don't move the card, maybe they are uncertain, it remains in the array/deck and will appear again for them to decide on
//Once they move the descriptor to a certain pile, it needs to remain moveable in case they change their mind
//Eventually, the original deck should be empty, so some sort of change to style so this looks like an empty deck or placeholder
//The maybe and discard pile - should these also be clickable to maybe look through for a word that was skipped but now wanted?