
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('active')
            console.log('popoop')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.menu-btn');   
function linkAction(){
  
  

  const navMenu = document.getElementById('nav-menu')
   if(navMenu){
        navMenu.addEventListener('click', ()=>{
            navMenu.classList.remove('active')
        })
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction));

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector(".navbar").classList.add("sticky");
  } else {
    document.querySelector(".navbar").classList.remove("sticky");
  }
}


var crtmodal = document.getElementById("crtModal");

function reply_click_for_crt(clicked_id)
  {
  var img = document.getElementById(clicked_id);
  var modalImg = document.getElementById("crtImg");
  var captionText = document.getElementById("crtCaption");

  crtmodal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;



}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  crtmodal.style.display = "none";
    
} 

dragElement(document.getElementById("prof"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "pic")) {

    document.getElementById(elmnt.id + "pic").onmousedown = dragMouseDown;
  } else {

    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
  
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
abp = document.getElementsByClassName('aboutp');
let size = abp.length
for(let j=0; j<size; j++) {
    let el = abp[j]
    el.classList.remove('zap');
  }

window.onload = function(){

  let i = 0

  let interval = setInterval(() => {
    for(let j=0; j<size; j++) {
      let el = abp[j]
      el.classList.add('zap');
    }

    abp[i].classList.remove('zap');
    i++

    if(i == size) clearInterval(interval)


  }, 11000)

}

txt = document.getElementsByClassName('text-3');

let len = txt.length;
console.log(len)
for(let j=0; j<len; j++) {
    let el = txt[j]
    el.style.display = 'none';

  let i = 0

  let interval = setInterval(() => {
    for(let j=0; j<len; j++) {
      let el = txt[j]
      el.style.display = 'block'
      
    }


    txt[i].style.display = 'none';
    console.log('blob')

    i++

    if(i == len) clearInterval(interval)


  }, 5000)

}

let scrollerID;
let paused = true;
let speed = 1; 
let interval = speed * 5;

function stopScroll() {
    clearInterval(scrollerID);
}

document.body.addEventListener('keypress', function (event)
{
    if (event.which == 13 || event.keyCode == 13) {
        if(paused == true) {
            scrollerID = scrollpage();
            paused = false;
            document.querySelector('.starter').style.display = 'none';
        }
        else {
            stopScroll();
            paused = true;
        }
    }
}, true);


function scrollpage() {   
  function f() 
  {
    window.scrollTo(0,i);
    if(status==0) {
        i=i+5;
      if(i>=Height){  status=1; } 
    } else {
      i=i-5;
      if(i<=1){ status=0; }
        stopScroll();
        console.log('else');
    }
  setTimeout( f, 100 );
  }f();
}
var Height=document.documentElement.scrollHeight;
var i=1,j=Height,status=0;
// scrollpage();


const input = document.querySelector(".theme-switcher input");

input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
});


var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  setTimeout(function(){
   loader.classList.add("disppear"); 
}, 4000);
 
}
