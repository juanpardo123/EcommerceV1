// Listening to the video element
let clip = document.querySelector(".vid")
let clip1 = document.querySelector(".vid1")
let backdrop = document.querySelector('.backing');
let blueButton = document.querySelector('.blue');
let redButton = document.querySelector('.red');
let blackButton = document.querySelector('.black');
let greenButton = document.querySelector('.green');
let blurCover = document.querySelector('.blur-cover');

blueButton.addEventListener('click',function (e) {
   backdrop.className = "backing";
   backdrop.classList.add("bluedrop");
   blurCover.className = "blur-cover";
   blurCover.classList.add("cover-blue");
});

redButton.addEventListener('click',function (e) {
   backdrop.className = "backing"
   backdrop.classList.add("reddrop")
   blurCover.className = "blur-cover";
   blurCover.classList.add("cover-red");
});

blackButton.addEventListener('click',function (e) {
   backdrop.className = "backing"
   backdrop.classList.add("blackdrop")
   blurCover.className = "blur-cover";
   blurCover.classList.add("cover-black");
});
greenButton.addEventListener('click',function (e) {
   backdrop.className = "backing"
   backdrop.classList.add("greendrop")
   blurCover.className = "blur-cover";
   blurCover.classList.add("cover-green");
});
// Video --------------------------------------------------------------------------------------------------
/* Adding the event list_2eners on the video to play/pause the video. */
clip.addEventListener("mouseover", function (e) {
   clip.play();
});

clip1.addEventListener("mouseover", function (e) {
   clip1.play();
})
/* Applying the mouse out event to pause the video */
clip.addEventListener("mouseout", function (e) {
   clip.currentTime = 0;
   clip.pause();
   // clip.currentTime = 0;
   
})
clip1.addEventListener("mouseout", function (e) {
   clip1.currentTime = 0;
   clip1.pause();
   
})
// animations on scroll
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




// function carousel() {
//   let carouselSlider = document.querySelector(".carousel__slider");
//   let list = document.querySelector(".carousel__list");
//   let item = document.querySelectorAll(".carousel__item");
//   let list2;

//   const speed = 0.5;

//   const width = list.offsetWidth;
//   let x = 0;
//   let x2 = width;

//   function clone() {
//     list2 = list.cloneNode(true);
//     carouselSlider.appendChild(list2);
//     list2.style.left = `${width}px`;
//   }

//   function moveFirst() {
//     x -= speed;

//     if (width >= Math.abs(x)) {
//       list.style.left = `${x}px`;
//     } else {
//       x = width;
//     }
//   }

//   function moveSecond() {
//     x2 -= speed;

//     if (list2.offsetWidth >= Math.abs(x2)) {
//       list2.style.left = `${x2}px`;
//     } else {
//       x2 = width;
//     }
//   }

//   function hover() {
//     clearInterval(a);
//     clearInterval(b);
//   }

//   function unhover() {
//     a = setInterval(moveFirst, 10);
//     b = setInterval(moveSecond, 10);
//   }

//   clone();

//   let a = setInterval(moveFirst, 10);
//   let b = setInterval(moveSecond, 10);

//   carouselSlider.addEventListener("mouseenter", hover);
//   carouselSlider.addEventListener("mouseleave", unhover);
// }

// carousel();

// function carousel2() {
//    let carouselSlider2 = document.querySelector(".carousel__slider2");
//    let list2 = document.querySelector(".carousel__list2");
//    let item2 = document.querySelectorAll(".carousel__item2");
//    let list22;
 
//    const speed2 = 0.5;
 
//    const width2 = list2.offsetWidth;
//    let x2 = 0;
//    let x22 = -width2;
 
//    function clone2() {
//      list22 = list2.cloneNode(true);
//      carouselSlider2.appendChild(list22);
//      list22.style.left = `${width2}px`;
//    }
 
//    function moveFirst2() {
//      x2 += speed2;
 
//      if (width2 >= Math.abs(x2)) {
//        list2.style.left = `${x2}px`;
//      } else {
//        x2 = 0 - x2;
//      }
//    }
 
//    function moveSecond2() {
//      x22 += speed2;
 
//      if (list22.offsetWidth >= Math.abs(x22)) {
//        list22.style.left = `${x22}px`;
//      } else {
//        x22 = 0- x22;
//      }
//    }
 
//    function hover2() {
//      clearInterval(a2);
//      clearInterval(b2);
//    }
 
//    function unhover2() {
//      a2 = setInterval(moveFirst2, 10);
//      b2 = setInterval(moveSecond2, 10);
//    }
 
//    clone2();
 
//    let a2 = setInterval(moveFirst2, 10);
//    let b2 = setInterval(moveSecond2, 10);
 
//    carouselSlider2.addEventListener("mouseenter", hover2);
//    carouselSlider2.addEventListener("mouseleave", unhover2);
//  }
 
//  carousel2();

