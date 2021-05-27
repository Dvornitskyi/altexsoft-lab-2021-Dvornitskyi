const faqsOne = document.querySelector('#faqsOne');
const faqsOneDown = document.querySelector('#faqsOneDown');
const faqsOneUp = document.querySelector('#faqsOneUp');
const answerOne = document.querySelector('#answerOne');

const faqsTwo = document.querySelector('#faqsTwo');
const faqsTwoDown = document.querySelector('#faqsTwoDown');
const faqsTwoUp = document.querySelector('#faqsTwoUp');
const answerTwo = document.querySelector('#answerTwo');

const faqsThree = document.querySelector('#faqsThree');
const faqsThreeDown = document.querySelector('#faqsThreeDown');
const faqsThreeUp = document.querySelector('#faqsThreeUp');
const answerThree = document.querySelector('#answerThree');

const faqsFour = document.querySelector('#faqsFour');
const faqsFourDown = document.querySelector('#faqsFourDown');
const faqsFourUp = document.querySelector('#faqsFourUp');
const answerFour = document.querySelector('#answerFour');

const faqsFive = document.querySelector('#faqsFive');
const faqsFiveDown = document.querySelector('#faqsFiveDown');
const faqsFiveUp = document.querySelector('#faqsFiveUp');
const answerFive = document.querySelector('#answerFive');

const faqsSix = document.querySelector('#faqsSix');
const faqsSixDown = document.querySelector('#faqsSixDown');
const faqsSixUp = document.querySelector('#faqsSixUp');
const answerSix = document.querySelector('#answerSix');

const faqsSeven = document.querySelector('#faqsSeven');
const faqsSevenDown = document.querySelector('#faqsSevenDown');
const faqsSevenUp = document.querySelector('#faqsSevenUp');
const answerSeven = document.querySelector('#answerSeven');

const faqsEight = document.querySelector('#faqsEight');
const faqsEightDown = document.querySelector('#faqsEightDown');
const faqsEightUp = document.querySelector('#faqsEightUp');
const answerEight = document.querySelector('#answerEight');


function faqsNav() {
    faqsOneDown.onclick = () => {
        answerOne.style.display = "flex";
        faqsOneDown.style.display = "none";
        faqsOneUp.style.display = "flex";
        faqsOne.style.height = "348px";
 }
    faqsOneUp.onclick = () => {
        answerOne.style.display = "none";
        faqsOneDown.style.display = "flex";
        faqsOneUp.style.display = "none";
        faqsOne.style.height = "196px";
    }
    //Two
    faqsTwoDown.onclick = () => {
        answerTwo.style.display = "flex";
        faqsTwoDown.style.display = "none";
        faqsTwoUp.style.display = "flex";
        faqsTwo.style.height = "348px";
        }
        faqsTwoUp.onclick = () => {
        answerTwo.style.display = "none";
        faqsTwoDown.style.display = "flex";
        faqsTwoUp.style.display = "none";
        faqsTwo.style.height = "196px";
        }
            //Three
        faqsThreeDown.onclick = () => {
        answerThree.style.display = "flex";
        faqsThreeDown.style.display = "none";
        faqsThreeUp.style.display = "flex";
        faqsThree.style.height = "348px";
        }
        faqsThreeUp.onclick = () => {
        answerThree.style.display = "none";
        faqsThreeDown.style.display = "flex";
        faqsThreeUp.style.display = "none";
        faqsThree.style.height = "196px";
        }
            //Four
        faqsFourDown.onclick = () => {
        answerFour.style.display = "flex";
        faqsFourDown.style.display = "none";
        faqsFourUp.style.display = "flex";
        faqsFour.style.height = "348px";
        }
        faqsFourUp.onclick = () => {
        answerFour.style.display = "none";
        faqsFourDown.style.display = "flex";
        faqsFourUp.style.display = "none";
        faqsFour.style.height = "196px";
        }
            //Five
        faqsFiveDown.onclick = () => {
        answerFive.style.display = "flex";
        faqsFiveDown.style.display = "none";
        faqsFiveUp.style.display = "flex";
        faqsFive.style.height = "348px";
        }
        faqsFiveUp.onclick = () => { 
        answerFive.style.display = "none";
        faqsFiveDown.style.display = "flex";
        faqsFiveUp.style.display = "none";
        faqsFive.style.height = "196px";
        }
            //Six
        faqsSixDown.onclick = () => {
        answerSix.style.display = "flex";
        faqsSixDown.style.display = "none";
        faqsSixUp.style.display = "flex";
        faqsSix.style.height = "348px";
        }
        faqsSixUp.onclick = () => {
        answerSix.style.display = "none";
        faqsSixDown.style.display = "flex";
        faqsSixUp.style.display = "none";
        faqsSix.style.height = "196px";
        }
            //Seven
        faqsSevenDown.onclick = () => {
        answerSeven.style.display = "flex";
        faqsSevenDown.style.display = "none";
        faqsSevenUp.style.display = "flex";
        faqsSeven.style.height = "348px";
        }
        faqsSevenUp.onclick = () => {
        answerSeven.style.display = "none";
        faqsSevenDown.style.display = "flex";
        faqsSevenUp.style.display = "none";
        faqsSeven.style.height = "196px";
        }
            //Eight
        faqsEightDown.onclick = () => {
        answerEight.style.display = "flex";
        faqsEightDown.style.display = "none";
        faqsEightUp.style.display = "flex";
        faqsEight.style.height = "348px";
        }
        faqsEightUp.onclick = () => {
        answerEight.style.display = "none";
        faqsEightDown.style.display = "flex";
        faqsEightUp.style.display = "none";
        faqsEight.style.height = "196px";
        }
}


faqsNav();

//-----------shoveFaqsMoreQuestion
const shove = document.querySelectorAll('.shove');
const faqsMoreQuestion = document.querySelector('#faqsMoreQuestion');
let kolClick = 0;
function shoveFaqsMoreQuestion() {
    faqsMoreQuestion.onclick = () => {
        if(kolClick<1)
        {
        kolClick++;
        shove[0].style.display = "block";
        shove[1].style.display = "block";
        }else{
            kolClick = 0;
        shove[0].style.display = "none";
        shove[1].style.display = "none";
        }
    }
}
shoveFaqsMoreQuestion();