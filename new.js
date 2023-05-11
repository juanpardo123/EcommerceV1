

let hamburger = document.querySelector('.hamburger');
let dropmenu = document.querySelector('.button-show');

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
 });
 let firstPlay = true;
 
 //Video Observer
 const videoObserver = new IntersectionObserver((entries) =>{
   if (firstPlay){
    entries.forEach((entry) => {
        console.log(entry.target)
        if(entry.isIntersecting && firstPlay){
            entry.target.play();
            firstPlay = false;
        }
    })
 } }
 );
 
 let expanded = true;
 
 const hiddenElements = document.querySelectorAll('.hidden , .hidden-left, .hidden-right, .hidden-center, .hidden-center-1 , .hidden-center-2 , .hidden-center-3 , .hidden-center-4, .hidden-grow, .hidden-background, .hidden-up');
 const videoPlay = document.querySelectorAll('video');
 
 videoPlay.forEach((el) => videoObserver.observe(el));
 hiddenElements.forEach((el) => observer.observe(el));
 
 const slider = document.getElementById("slider");
 
 fetch("data.json").then((data) => {
    //console.log(data.json());
    return data.json();
 })
     .then((jsondata) => {
         //console.log(jsondata[0].url);
         //now using map method we will get all url
         jsondata.map((val) => {
             console.log(val.url);
             key = val.id;
             url = val.url;
             let img = document.createElement("img");
             //now we will call 2nd api for images
             img.src = `${url}`;
             slider.appendChild(img);
         })
     });
 
 
 function carousel() {
   let carouselSlider = document.querySelector(".carousel__slider");
   let list = document.querySelector(".carousel__list");
   let item = document.querySelectorAll(".carousel__item");
   let list2;
 
   const speed = 0.5;
 
   const width = list.offsetWidth;
   let x = 0;
   let x2 = width;
 
   function clone() {
     list2 = list.cloneNode(true);
     carouselSlider.appendChild(list2);
     list2.style.left = `${width}px`;
   }
 
   function moveFirst() {
     x -= speed;
 
     if (width >= Math.abs(x)) {
       list.style.left = `${x}px`;
     } else {
       x = width;
     }
   }
 
   function moveSecond() {
     x2 -= speed;
 
     if (list2.offsetWidth >= Math.abs(x2)) {
       list2.style.left = `${x2}px`;
     } else {
       x2 = width;
     }
   }
 
   function hover() {
     clearInterval(a);
     clearInterval(b);
   }
 
   function unhover() {
     a = setInterval(moveFirst, 10);
     b = setInterval(moveSecond, 10);
   }
 
   clone();
 
   let a = setInterval(moveFirst, 10);
   let b = setInterval(moveSecond, 10);
 
   carouselSlider.addEventListener("mouseenter", hover);
   carouselSlider.addEventListener("mouseleave", unhover);
 }
 
 carousel();
 
 function carousel2() {
    let carouselSlider2 = document.querySelector(".carousel__slider2");
    let list2 = document.querySelector(".carousel__list2");
    let item2 = document.querySelectorAll(".carousel__item2");
    let list22;
  
    const speed2 = 0.5;
  
    const width2 = list2.offsetWidth;
    let x2 = 0;
    let x22 = -width2;
  
    function clone2() {
      list22 = list2.cloneNode(true);
      carouselSlider2.appendChild(list22);
      list22.style.left = `${width2}px`;
    }
  
    function moveFirst2() {
      x2 += speed2;
  
      if (width2 >= Math.abs(x2)) {
        list2.style.left = `${x2}px`;
      } else {
        x2 = 0 - x2;
      }
    }
  
    function moveSecond2() {
      x22 += speed2;
  
      if (list22.offsetWidth >= Math.abs(x22)) {
        list22.style.left = `${x22}px`;
      } else {
        x22 = 0- x22;
      }
    }
  
    function hover2() {
      clearInterval(a2);
      clearInterval(b2);
    }
  
    function unhover2() {
      a2 = setInterval(moveFirst2, 10);
      b2 = setInterval(moveSecond2, 10);
    }
  
    clone2();
  
    let a2 = setInterval(moveFirst2, 10);
    let b2 = setInterval(moveSecond2, 10);
  
    carouselSlider2.addEventListener("mouseenter", hover2);
    carouselSlider2.addEventListener("mouseleave", unhover2);
  }
  
  carousel2();
 
  hamburger.addEventListener('click',function (e) {
    dropmenu.className = "top-bar-show"
 });