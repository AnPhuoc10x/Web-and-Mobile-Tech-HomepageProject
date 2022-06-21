let n;
let slideIndex_e2 = 0;
let slideImg_e2 = 0;
const imgs_e2 = ["http://www.pnwx.com/Equipment/DarkEquip/ChemMixers/1923_1.gif",
                  "http://www.pnwx.com/Equipment/DarkEquip/ChemMixers/1924_1.gif"];

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
const imgs_e3 = ["http://www.pnwx.com/Accessories/Transport/RC-02_1.jpg",
                  "http://www.pnwx.com/Accessories/Transport/RC-02_2.jpg",
                  "http://www.pnwx.com/Accessories/Transport/RC-02_3.jpg"];

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
