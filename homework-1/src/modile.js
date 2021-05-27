const headerX = document.querySelector('#headerX');
const headerMenu = document.querySelector('#headerMenu');
const headerNav= document.querySelector('#headerNav');
const headerBtn = document.querySelector('#headerBtn');
const headerBtnOne = document.querySelector('#headerBtrOne');
const headerBtnTwo = document.querySelector('#headerBtnTwo');
headerX.style.display = "none";
function mobileMenu() {
    headerMenu.onclick = () => {
        headerNav.style.display = "block";
        headerBtn.style.display = "block";
        headerX.style.display = "block";
        headerMenu.style.display = "none";


    }
    headerX.onclick = () => {
        headerNav.style.display = "none";
        headerBtn.style.display = "none";
        headerX.style.display = "none";
        headerMenu.style.display = "block";
        headerBtnOne.style.display = "none";
        headerBtnTwo.style.display = "none";
    }
}
mobileMenu();