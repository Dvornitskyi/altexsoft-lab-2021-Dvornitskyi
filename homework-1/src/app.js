//////---------tips
const tipsFirst = document.querySelectorAll('.tips-first');
const tipsSecond = document.querySelectorAll('.tips-second');
function tipsAkardionClose() {
    for(let i = 0; i < tipsFirst.length; i++){
        tipsFirst[i].style.display = 'flex';
        tipsSecond[i].style.display = 'none'; 
    }
}
function tipsAkardion() {
    for(let i = 0; i < tipsFirst.length; i++){
        tipsFirst[i].onclick = () => {   
            tipsAkardionClose();
            tipsFirst[i].style.display = 'none';
            tipsSecond[i].style.display = 'flex';    
        }
        tipsSecond[i].onclick = () => {
            tipsAkardionClose();
            tipsSecond[i].style.display = 'none';
            tipsFirst[i].style.display = 'flex';
        }
    }
}
tipsAkardion();
//----------slider left----------
const dots = document.querySelectorAll('.slider-dots');
const navRight = document.getElementById('navRight');
const navLeft = document.getElementById('navLeft');
let quantityDotsOnPageMobile = 5;
const mediaQuery = window.matchMedia('(min-width: 1280px)')
let dotsPage = 0;
navLeft.style.color = "rgba(34,191,149,0.40)";
navLeft.style.borderColor = "rgba(34,191,149,0.40)";
function quantityDotsOnPage() {
    if(mediaQuery.matches){
        quantityDotsOnPageMobile = 17;
    }
    for(let i = 0; i < dots.length; i++){
        dots[i].style.display = 'none';  
        if((i >= quantityDotsOnPageMobile*dotsPage) && i < (quantityDotsOnPageMobile * (dotsPage + 1))){
            dots[i].style.display = 'flex';
        }
    }
}
quantityDotsOnPage();
navRight.onclick = () => {
    navLeft.style.color = "#22BF95";
    navRight.style.color = "#22BF95";
    navLeft.style.borderColor = "#22BF95";
    navRight.style.borderColor = "#22BF95";
    dotsPage++;
    if((dots.length % quantityDotsOnPageMobile) !== 0){
        if(dotsPage == ((Math.ceil((dots.length / quantityDotsOnPageMobile))))-1){
            navRight.style.color = "rgba(34,191,149,0.40)";
            navRight.style.borderColor = "rgba(34,191,149,0.40)";
        }
        if(dotsPage == (Math.ceil((dots.length / quantityDotsOnPageMobile)))){        
            dotsPage = (Math.ceil(dots.length / quantityDotsOnPageMobile)-1);
            navRight.style.color = "rgba(34,191,149,0.40)";
            navRight.style.borderColor = "rgba(34,191,149,0.40)";
        }
        quantityDotsOnPage();
    }
    if((dots.length % quantityDotsOnPageMobile) == 0){
        if(dotsPage == ((Math.floor((dots.length / quantityDotsOnPageMobile))))-1){
            navRight.style.color = "rgba(34,191,149,0.40)";
            navRight.style.borderColor = "rgba(34,191,149,0.40)"; 
        }
        if(dotsPage == (Math.floor((dots.length / quantityDotsOnPageMobile)))){
            dotsPage = (Math.floor(dots.length / quantityDotsOnPageMobile)-1);
            navRight.style.color = "rgba(34,191,149,0.40)";
            navRight.style.borderColor = "rgba(34,191,149,0.40)"; 
        }
        quantityDotsOnPage();
    }
}
navLeft.onclick = () => {
    navLeft.style.color = "#22BF95";
    navRight.style.color = "#22BF95";
    navLeft.style.borderColor = "#22BF95"; 
    navRight.style.borderColor = "#22BF95"; 
    dotsPage--;
    if(dotsPage == 0){
        navLeft.style.color = "rgba(34,191,149,0.40)";
        navLeft.style.borderColor = "rgba(34,191,149,0.40)"; 
    }
    if(dotsPage == (-1)){
        dotsPage = 0;
        navLeft.style.color = "rgba(34,191,149,0.40)";
        navLeft.style.borderColor = "rgba(34,191,149,0.40)"; 
    }
    quantityDotsOnPage();
}
//----------slider right-------------
const dotsClick = document.querySelectorAll('.slider-dots');
let rightTitle = document.getElementById('rightTitle');
let rightText = document.getElementById('rightText');
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
const accordionElement = document.querySelectorAll('.accordion-element');
const faqsQuetionDown = document.querySelectorAll('.faqs-down');
const faqsQuetionUp = document.querySelectorAll('.faqs-up');
const faqsAnswer = document.querySelectorAll('.faqs-answer');
let accordionQuantityClick = 0;
function faqsNavClose() {
    for(let i = 0; i < accordionElement.length; i++){
        faqsAnswer[i].style.display = 'none';
        faqsQuetionDown[i].style.display = 'flex';
        faqsQuetionUp[i].style.display = 'none';
    }
}
function faqsNav() {
    for(let i = 0; i < accordionElement.length; i++){
        if(accordionQuantityClick == 0){
            accordionElement[i].onclick = () => {
                faqsNavClose();
                faqsAnswer[i].style.display = 'flex';
                faqsQuetionDown[i].style.display = 'none';
                faqsQuetionUp[i].style.display = 'flex';
                accordionQuantityClick++;
                }
            }else if(accordionQuantityClick != 0){
                accordionQuantityClick = 1;
                accordionElement[i].onclick = () => {
                    faqsNavClose();
                    faqsAnswer[i].style.display = 'none';
                    faqsQuetionDown[i].style.display = 'flex';
                    faqsQuetionUp[i].style.display = 'none';
                }
            }
        }
    }
faqsNav();
//-----------showFaqsMoreQuestion
const show = document.querySelectorAll('.not-show');
const faqsMoreQuestion = document.getElementById('faqsMoreQuestion');
let quantity = 0;
function showFaqsMoreQuestion() {
    faqsMoreQuestion.onclick = () => {
        if(quantity == 0)        {
        quantity++;
        for(let i = 0; i < show.length; i++)
            {
            show[i].style.display = 'block';
            } 
        }else if(quantity != 0){
            quantity = 0;
            for(let j = 0; j < show.length; j++)
            {
            show[j].style.display = 'none';
            }
        }
    }
}
showFaqsMoreQuestion();
//-----------mobile
const aroundBody = document.body;
const headerX = document.getElementById('headerX');
const headerMenu = document.getElementById('headerMenu');
const headerNav= document.getElementById('headerNav');
const headerBtn = document.getElementById('headerBtn');
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