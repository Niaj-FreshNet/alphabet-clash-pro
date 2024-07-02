function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getARandomAlphabet() {
    const alphabeString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabeString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}