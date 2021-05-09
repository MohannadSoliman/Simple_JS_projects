//function for generating numbers
function generateRandomValue(max){
    return Math.floor(Math.random() * Math.floor(max));
}

// function for generating colors
function generateRgb(){
    const rgb = [];
    for(let i=0; i<3; i++) rgb.push(generateRandomValue(256));
    return rgb;
}

// assigning generated color to a const
const rgbCorrect = [];
for(let i = 0; i<3; i++) rgbCorrect.push(generateRandomValue(256));

// storing the correct answer color
let [r, g, b] = rgbCorrect;

// placing the rgb generated into h2
let rgb = document.getElementById('rgb');
rgb.textContent = `RGB(${r}, ${g}, ${b})`;

// choosing and coloring the correct button
let correctButtonId = generateRandomValue(8);
console.log("the number chosen: " + correctButtonId);
let correctButton = document.getElementById(correctButtonId);
correctButton.style.background = `rgb(${r},${g},${b})`;

// coloring the rest of the buttons

for(let i=0; i<8; i++){
    if(i == correctButtonId) continue;
    let wrongButton = document.getElementById(i);
    let rgbGenerated = generateRgb();
    wrongButton.style.background = `rgb(${rgbGenerated[0]},${rgbGenerated[1]},${rgbGenerated[2]})`
}

// checking if the chosen color is correct
function reply_click(clicked_id)
{
    if(clicked_id == correctButtonId) document.getElementById('answer').textContent = 'Correct!'
    else document.getElementById('answer').textContent = 'Wrong!'
}