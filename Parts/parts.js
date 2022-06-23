let n;


let slideIndex_e2 = 0;
let slideImg_e2 = 0;
const imgs_e2 = ["https://github.com/AnPhuoc10x/Web-and-Mobile-Tech-Project/blob/main/Parts/images/E2.gif?raw=true",
                  "https://github.com/AnPhuoc10x/Web-and-Mobile-Tech-Project/blob/main/Parts/images/E2%20(1).jpg?raw=true",
                  "https://github.com/AnPhuoc10x/Web-and-Mobile-Tech-Project/blob/main/Parts/images/E2(2).jpg?raw=true",
                  "https://github.com/AnPhuoc10x/Web-and-Mobile-Tech-Project/blob/main/Parts/images/E2(3).jpg?raw=true",
                  "https://github.com/AnPhuoc10x/Web-and-Mobile-Tech-Project/blob/main/Parts/images/E2(4).jpg?raw=true",
                  "https://github.com/AnPhuoc10x/Web-and-Mobile-Tech-Project/blob/main/Parts/images/E2(5).jpg?raw=true"];

showSlides_e2(slideIndex_e2);

function plusSlides_e2(n) {
  showSlides_e2(slideIndex_e2 += n);
}

function showSlides_e2(n) {
  if (n > imgs_e2.length - 1) {slideIndex_e2 = 0}
  if (n < 0) {slideIndex_e2 = imgs_e2.length - 1}
  document.getElementById("current-img-e2").src = imgs_e2[slideIndex_e2];
  slideImg_e2 = slideIndex_e2;
}

function on_e2() {
  document.getElementById("enlarge-e2").src = imgs_e2[slideImg_e2];
  document.getElementById("overlay-e2").style.display = "block";
  
}

function off_e2() {
  document.getElementById("overlay-e2").style.display = "none";
}

function showBigImgs_e2(n) {
  on_e2();              
  if (n > imgs_e2.length - 1) {slideImg_e2 = 0}
  if (n < 0) {slideImg_e2 = imgs_e2.length - 1}
  document.getElementById("enlarge-e2").src = imgs_e2[slideImg_e2];
}

function plusImgs_e2(n) {
  showBigImgs_e2(slideImg_e2 += n);
}



let slideIndex_e3 = 0;
let slideImg_e3 = 0;
const imgs_e3 = ["https://github.com/AnPhuoc10x/Web-and-Mobile-Tech-Project/blob/main/Parts/images/E3.jpg?raw=true"];

showSlides_e3(slideIndex_e3);

function plusSlides_e3(n) {
  showSlides_e3(slideIndex_e3 += n);
}

function showSlides_e3(n) {
  if (n > imgs_e3.length - 1) {slideIndex_e3 = 0}
  if (n < 0) {slideIndex_e3 = imgs_e3.length - 1}
  document.getElementById("current-img-e3").src = imgs_e3[slideIndex_e3];
  slideImg_e3 = slideIndex_e3;
}

function on_e3() {
  document.getElementById("enlarge-e3").src = imgs_e3[slideImg_e3];
  document.getElementById("overlay-e3").style.display = "block";
  
}

function off_e3() {
  document.getElementById("overlay-e3").style.display = "none";
}

function showBigImgs_e3(n) {
  on_e3();              
  if (n > imgs_e3.length - 1) {slideImg_e3 = 0}
  if (n < 0) {slideImg_e3 = imgs_e3.length - 1}
  document.getElementById("enlarge-e3").src = imgs_e3[slideImg_e3];
}

function plusImgs_e3(n) {
  showBigImgs_e3(slideImg_e3 += n);
}



function expand1() {
  var x = document.getElementById("myDIV");
  var s = document.getElementById("showmore1");
  if (x.style.display === "block") {
    x.style.display = "none";
    s.innerHTML = "Show more";
  } else {
    x.style.display = "block";
    s.innerHTML = "Show less";
  }
}



function expand2() {
  var x = document.getElementById("myDIV_2");
  var s = document.getElementById("showmore2");
  if (x.style.display === "block") {
    x.style.display = "none";
    s.innerHTML = "Show more";
  } else {
    x.style.display = "block";
    s.innerHTML = "Show less";
  }
}

function expand3() {
  var x = document.getElementById("myDIV_3");
  var s = document.getElementById("showmore3");
  if (x.style.display === "block") {
    x.style.display = "none";
    s.innerHTML = "Show more";
  } else {
    x.style.display = "block";
    s.innerHTML = "Show less";
  }
}


//đừng bấm format JS
const Header = document.querySelector("#Header");
function HeaderClick() {
  console.log('Header was clicked');
  open(
    "https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/HomePage/","_self");
  
}
Header.addEventListener('click', HeaderClick);

const Product_Button = document.querySelector(".Product-Button");
const HomePage_Button = document.querySelector(".HomePage-Button");
const About_Button = document.querySelector(".About-Button");
const Menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const MenuButton = document.querySelector(".menu");
MenuButton.addEventListener("click", MenuButtonClick);
function MenuButtonClick() {
  const ButtonName = event.target.innerHTML;
  console.log(ButtonName);
  open(
    "https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/" + ButtonName + "/","_self");
}
let MenuStatus = "close";

function OverlayOn() {
  overlay.style.display = "block";
}
function OverlayOff() {
  overlay.style.display = "none";
}

function ProductButtonClick() {
  console.log("Product button was clicked");
  if (MenuStatus == "close") {
    Menu.style.display = "flex";
    OverlayOn();
    MenuStatus = "open";
    console.log("Menu " + MenuStatus);
    return MenuStatus;
  } else {
    Menu.style.display = "none";
    OverlayOff();
    MenuStatus = "close";
    console.log("Menu " + MenuStatus);
    return MenuStatus;
  }
}
function OverlayClick() {
  Menu.style.display = "none";
  OverlayOff();
  MenuStatus = "close";
  console.log("Menu " + MenuStatus);
  return MenuStatus;
}

overlay.addEventListener("click", OverlayClick);
Product_Button.addEventListener("click", ProductButtonClick);
function HomePage_ButtonClick() {
  open(
    "https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/HomePage/","_self");
}
function About_ButtonClick() {
  open(
    "https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/About/","_self");
}
HomePage_Button.addEventListener("click", HomePage_ButtonClick);
About_Button.addEventListener("click", About_ButtonClick);
