//function for generating numbers
function generateRandomValue(max){
    return Math.floor(Math.random() * Math.floor(max));
}

// choose a word
const words = ['absolute', 'abstract', 'excuse', 'thirsty', 'cave', 'loutish', 'late', 'guitar', 'giant']
const word = words[generateRandomValue(words.length)];

// change the hangman status
var rights = 0;
var wrongs = 0;
var result = document.getElementById("result");
document.getElementById('hangman').src = `images/${wrongs%8}.PNG`;

// set up the spaces
let spaces = document.getElementsByClassName("letters")[0];
for(let i=0; i<word.length; i++){
    let h3 = document.createElement("h3");
    let text = document.createTextNode("__");
    h3.setAttribute("id", i);
    h3.appendChild(text);
    spaces.appendChild(h3);
}

// get indices of char in string
function getIndices(word, character){
    let indices = [];
    for(let i=0; i<word.length; i++) if(word[i] === character) indices.push(i);
    return indices;
}

// disable all buttons
function disableAll(){
    let inputs = document.getElementsByClassName("clickable");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }
}
// check if letter exists in word
function checkLetter(letter){
    if(word.includes(letter)){
        let indices = getIndices(word, letter);
        indices.forEach(index => document.getElementById(index).textContent = letter.toUpperCase());

        rights += indices.length;
        if(rights == word.length){
            disableAll();
            result.textContent = `You've Won! The Answer: ${word.toUpperCase()}`;
            result.style.color = "green";
        }
    }else{
        // change the hangman image status to the next stage
        wrongs += 1
        document.getElementById('hangman').src = `images/${wrongs%7}.PNG`;

        if(wrongs == 6){
            disableAll();
            result.textContent = `You've Lost! The Answer: ${word.toUpperCase()}`;
            result.style.color = "red";
        }
    }
    // make the button unclickable
    document.getElementById(letter).disabled = true;
}
