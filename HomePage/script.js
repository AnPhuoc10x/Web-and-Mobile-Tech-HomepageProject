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