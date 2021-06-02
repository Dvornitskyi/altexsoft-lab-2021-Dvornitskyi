//////---------tips
const tipsPlus = document.querySelectorAll('#tipsPlus');
const tipsMinus = document.querySelectorAll('#tipsMinus');
const tipsFirst = document.querySelectorAll('#tipsFirst');
const tipsSecond = document.querySelectorAll('#tipsSecond');
function tipsAkardionClose() {
    for(let i = 0; i < tipsFirst.length; i++){
        tipsFirst[i].style.display = 'flex';
        tipsSecond[i].style.display = 'none'; 
    }
}
function tipsAkardion() {
    for(let i = 0; i < tipsFirst.length; i++){
        tipsPlus[i].onclick = () => {   
            tipsAkardionClose();
            tipsFirst[i].style.display = 'none';
            tipsSecond[i].style.display = 'flex';    
        }
        tipsMinus[i].onclick = () => {
            tipsAkardionClose();
            tipsSecond[i].style.display = 'none';
            tipsFirst[i].style.display = 'flex';
        }
    }
}
tipsAkardion();
//----------slider left----------
const sliderLeftOne = document.querySelector('#sliderLeftOne');
const sliderLeftTw0 = document.querySelector('#sliderLeftTwo');
const navRight = document.querySelector('#navRight');
const navLeft = document.querySelector('#navLeft');
function nav() {
    let zIndexSliderLeft = 4;
    navRight.onclick = () => {
        zIndexSliderLeft++;
        sliderLeftTwo.style.zIndex = zIndexSliderLeft;
        navRight.style.color = 'rgba(34,191,149,0.40)';
        navRight.style.borderColor  = 'rgba(34,191,149,0.40)';
        navLeft.style.color = '#22BF95';
        navLeft.style.borderColor  = '#22BF95';
 }
 navLeft.onclick = () => {
    zIndexSliderLeft++;
    sliderLeftOne.style.zIndex = zIndexSliderLeft;
    navRight.style.color = '#22BF95';
    navRight.style.borderColor  = '#22BF95';
    navLeft.style.color = 'rgba(34,191,149,0.40)';
    navLeft.style.borderColor  = 'rgba(34,191,149,0.40)';
}
}
nav();
//----------slider right-------------
const dotsClick = document.querySelectorAll('#dotsClick');
let rightTitle = document.querySelector('#rightTitle');
let rightText = document.querySelector('#rightText');
function textRight(){
    for(let i = 0; i < dotsClick.length; i++){
        dotsClick[i].onclick = () => {
            rightTitle.textContent = 'Hello ' + i;
            rightText.textContent = 'I love you ' + i;  
        }    
    }
}
textRight();
//------------faqsQuetion
const faqsQuetion = document.querySelectorAll('#faqsQuetions');
const faqsQuetionDown = document.querySelectorAll('#faqsQuetionDown');
const faqsQuetionUp = document.querySelectorAll('#faqsQuetionUp');
const faqsAnswer = document.querySelectorAll('#faqsAnswer');
function faqsNavClose() {
    for(let i = 0; i < faqsQuetion.length; i++){
        faqsAnswer[i].style.display = 'none';
        faqsQuetionDown[i].style.display = 'flex';
        faqsQuetionUp[i].style.display = 'none';
    }
}
function faqsNav() {
    for(let i = 0; i < faqsQuetion.length; i++){
        faqsQuetionDown[i].onclick = () => {
            faqsNavClose();
            faqsAnswer[i].style.display = 'flex';
            faqsQuetionDown[i].style.display = 'none';
            faqsQuetionUp[i].style.display = 'flex';
        }
        faqsQuetionUp[i].onclick = () => {
            faqsNavClose();
            faqsAnswer[i].style.display = 'none';
            faqsQuetionDown[i].style.display = 'flex';
            faqsQuetionUp[i].style.display = 'none';
        }
    }
}
faqsNav();
//-----------showFaqsMoreQuestion
const show = document.querySelectorAll('.show');
const faqsMoreQuestion = document.querySelector('#faqsMoreQuestion');
let quantity = 0;
function showFaqsMoreQuestion() {
    faqsMoreQuestion.onclick = () => {
        if(quantity < 1)
        {
        quantity++;
        for(let i = 0; i < show.length; i++)
            {
            show[i].style.display = 'flex';
            console.log(i);
            } 
        }
        else{
            quantity = 0;
            for(let j = 0; j < show.length; j++)
            {
            show[j].style.display = 'none';
            console.log((j+10));
            }
        }
    }
}
showFaqsMoreQuestion();
//-----------mobile
const aroundBody = document.body;
const headerX = document.querySelector('#headerX');
const headerMenu = document.querySelector('#headerMenu');
const headerNav= document.querySelector('#headerNav');
const headerBtn = document.querySelector('#headerBtn');
const headerBtnOne = document.querySelector('#headerBtrOne');
const headerBtnTwo = document.querySelector('#headerBtnTwo');
headerX.style.display = 'none';
function mobileMenu() {
    headerMenu.onclick = () => {
        headerNav.style.display = 'block';
        headerBtn.style.display = 'flex';
        headerX.style.display = 'block';
        headerMenu.style.display = 'none';
        aroundBody.style.overflow = 'hidden';
    }
    headerX.onclick = () => {
        headerNav.style.display = 'none';
        headerBtn.style.display = 'none';
        headerX.style.display = 'none';
        headerMenu.style.display = 'block';
        aroundBody.style.overflow = 'visible';
    }
}
mobileMenu();