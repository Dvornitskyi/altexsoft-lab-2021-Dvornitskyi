//----------slider left----------
const sliderLeftOne = document.querySelector('#sliderLeftOne');
const sliderLeftTw0 = document.querySelector('#sliderLeftTwo');
const navRight = document.querySelector('#navRight');
const navLeft = document.querySelector('#navLeft');
// let zIndexSliderLeft = 2;
function nav() {
    let zIndexSliderLeft = 4;
    navRight.onclick = () => {
        zIndexSliderLeft++;
        sliderLeftTwo.style.zIndex = zIndexSliderLeft;
        navRight.style.color = "rgba(34,191,149,0.40)";
        navRight.style.borderColor  = "rgba(34,191,149,0.40)";
        navLeft.style.color = "#22BF95";
        navLeft.style.borderColor  = "#22BF95";


 }
 navLeft.onclick = () => {
    zIndexSliderLeft++;
    sliderLeftOne.style.zIndex = zIndexSliderLeft;
    navRight.style.color = "#22BF95";
    navRight.style.borderColor  = "#22BF95";
    navLeft.style.color = "rgba(34,191,149,0.40)";
    navLeft.style.borderColor  = "rgba(34,191,149,0.40)";
}
}
nav();
//----------slider right-------------
const dotOne = document.querySelector('#dotOne');
const dotTwo = document.querySelector('#dotTwo');
const dotThree = document.querySelector('#dotThree');
const dotFour = document.querySelector('#dotFour');
const dotFive = document.querySelector('#dotFive');
const dotSix = document.querySelector('#dotSix');
const dotSeven = document.querySelector('#dotSeven');
const dotEight = document.querySelector('#dotEight');
const dotNine = document.querySelector('#dotNine');
const dotTen = document.querySelector('#dotTen');
const dotEleven = document.querySelector('#dotEleven');
const dotTwelve = document.querySelector('#dotTwelve');
const dotThirteen = document.querySelector('#dotThirteen');
const dotFourteen = document.querySelector('#dotFourteen');
const dotFifteen = document.querySelector('#dotFifteen');
const dotSixteen = document.querySelector('#dotSixteen');
const dotSeventeen = document.querySelector('#dotSeventeen');
const dotEighteen = document.querySelector('#dotEighteen');
const dotNineteen = document.querySelector('#dotNineteen');
const dotTwenty = document.querySelector('#dotTwenty');
const dotTwentyOne = document.querySelector('#dotTwentyOne');
const dotTwentyTwo = document.querySelector('#dotTwentyTwo');

let rightTitle = document.querySelector('#rightTitle');
let rightText = document.querySelector('#rightText');
function textRight(){
    dotOne.onclick = () => {
        rightTitle.textContent = "Hello 1";
        rightText.textContent = "I love you 1";  
    }    
    dotTwo.onclick = () => {
        rightTitle.textContent = "Hello 2";
        rightText.textContent = "I love you 2";  
    }    
    dotThree.onclick = () => {
        rightTitle.textContent = "Hello 3";
        rightText.textContent = "I love you 3";  
    }
    dotFour.onclick = () => {
        rightTitle.textContent = "Hello 4";
        rightText.textContent = "I love you 4";  
    }  
    dotFive.onclick = () => {
        rightTitle.textContent = "Hello 5";
        rightText.textContent = "I love you 5";  
    }  
    dotSix.onclick = () => {
        rightTitle.textContent = "Hello 6";
        rightText.textContent = "I love you 6";  
    }  
    dotSeven.onclick = () => {
        rightTitle.textContent = "Hello 7";
        rightText.textContent = "I love you 7";  
    }  
    dotEight.onclick = () => {
        rightTitle.textContent = "Hello 8";
        rightText.textContent = "I love you 8";  
    }  
    dotNine.onclick = () => {
        rightTitle.textContent = "Hello 9";
        rightText.textContent = "I love you 9";  
    }  
    dotTen.onclick = () => {
        rightTitle.textContent = "Hello 10";
        rightText.textContent = "I love you 10";  
    }  
    dotEleven.onclick = () => {
        rightTitle.textContent = "Hello 11";
        rightText.textContent = "I love you 11";  
    }  
    dotTwelve.onclick = () => {
        rightTitle.textContent = "Hello 12";
        rightText.textContent = "I love you 12";  
    }  
    dotThirteen.onclick = () => {
        rightTitle.textContent = "Hello 13";
        rightText.textContent = "I love you 13";  
    }  
    dotFourteen.onclick = () => {
        rightTitle.textContent = "Hello 14";
        rightText.textContent = "I love you 14";  
    }  
    dotFifteen.onclick = () => {
        rightTitle.textContent = "Hello 15";
        rightText.textContent = "I love you 15";  
    }  
    dotSixteen.onclick = () => {
        rightTitle.textContent = "Hello 16";
        rightText.textContent = "I love you 16";  
    }  
    dotSeventeen.onclick = () => {
        rightTitle.textContent = "Hello 17";
        rightText.textContent = "I love you 17";  
    }  
    dotEighteen.onclick = () => {
        rightTitle.textContent = "Hello 18";
        rightText.textContent = "I love you 18";  
    }  
    dotNineteen.onclick = () => {
        rightTitle.textContent = "Hello 19";
        rightText.textContent = "I love you 19";  
    }  
    dotTwenty.onclick = () => {
        rightTitle.textContent = "Hello 20";
        rightText.textContent = "I love you 20";  
    }  
    dotTwentyOne.onclick = () => {
        rightTitle.textContent = "Hello 21";
        rightText.textContent = "I love you 21";  
    }  
    dotTwentyTwo.onclick = () => {
        rightTitle.textContent = "Hello 22";
        rightText.textContent = "I love you 22";  
    }  
}
textRight();