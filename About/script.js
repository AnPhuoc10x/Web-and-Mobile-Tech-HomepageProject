const Product_Button = document.querySelector(".Product-Button");
const Menu = document.querySelector(".menu");
const overlay = document.querySelector('.overlay');
const MenuButton = document.querySelector(".menu");
MenuButton.addEventListener('click', MenuButtonClick);
function MenuButtonClick() {
  const ButtonName = event.target;
  console.log(ButtonName);
  open("ButtonName+.com"); //Replace link file HTML of Products
}
let MenuStatus = 'close';

function OverlayOn() {
 overlay.style.display = "block";
}
function OverlayOff() {
 overlay.style.display = "none";
}

function ProductButtonClick() {
  console.log('Product button was clicked')
  if (MenuStatus == 'close') {
    Menu.style.display = "flex";
    OverlayOn();
    MenuStatus = 'open';
    console.log("Menu " + MenuStatus);
    return MenuStatus;
  }
  else {
    Menu.style.display = "none";
    OverlayOff();
    MenuStatus = 'close';
    console.log("Menu " + MenuStatus);
    return MenuStatus;
  }
}
function OverlayClick() {
  Menu.style.display = "none";
    OverlayOff();
    MenuStatus = 'close';
    console.log("Menu " + MenuStatus);
    return MenuStatus;
}

overlay.addEventListener('click', OverlayClick);
Product_Button.addEventListener('click',ProductButtonClick);

const submit=document.getElementById('Submit');
submit.addEventListener('click', function whenClicked(event){ 
event.preventDefault();
 const submit_buttons=document.querySelectorAll('#fname, #address, #email, #subject');
  submit_buttons.forEach(submit_button=> {submit_button.value=''})
});