const tipsPlusOne = document.querySelector('#tipsPlusOne');
const tipsMinusOne = document.querySelector('#tipsMinusOne');
const tipsFirstOne = document.querySelector('#tipsFirstOne');
const tipsSecondOne = document.querySelector('#tipsSecondOne');

const tipsPlusTwo = document.querySelector('#tipsPlusTwo');
const tipsMinusTwo = document.querySelector('#tipsMinusTwo');
const tipsFirstTwo = document.querySelector('#tipsFirstTwo');
const tipsSecondTwo = document.querySelector('#tipsSecondTwo');

const tipsPlusThree = document.querySelector('#tipsPlusThree');
const tipsMinusThree = document.querySelector('#tipsMinusThree');
const tipsFirstThree = document.querySelector('#tipsFirstThree');
const tipsSecondThree = document.querySelector('#tipsSecondThree');

const tipsPlusFour = document.querySelector('#tipsPlusFour');
const tipsMinusFour = document.querySelector('#tipsMinusFour');
const tipsFirstFour = document.querySelector('#tipsFirstFour');
const tipsSecondFour = document.querySelector('#tipsSecondFour');

function tipsAkardion() {
    tipsPlusOne.onclick = () => {   
        tipsFirstOne.style.display = "none";
        tipsSecondOne.style.display = "flex";
        
 }
    tipsMinusOne.onclick = () => {
        tipsSecondOne.style.display = "none";
        tipsFirstOne.style.display = "flex";
    }

    tipsPlusTwo.onclick = () => {   
        tipsFirstTwo.style.display = "none";
        tipsSecondTwo.style.display = "flex";
        
 }
    tipsMinusTwo.onclick = () => {
        tipsSecondTwo.style.display = "none";
        tipsFirstTwo.style.display = "flex";
    }

    tipsPlusThree.onclick = () => {   
        tipsFirstThree.style.display = "none";
        tipsSecondThree.style.display = "flex";
        
 }
    tipsMinusThree.onclick = () => {
        tipsSecondThree.style.display = "none";
        tipsFirstThree.style.display = "flex";
    }

    tipsPlusFour.onclick = () => {   
        tipsFirstFour.style.display = "none";
        tipsSecondFour.style.display = "flex";
        
 }
    tipsMinusFour.onclick = () => {
        tipsSecondFour.style.display = "none";
        tipsFirstFour.style.display = "flex";
    }
}


tipsAkardion();