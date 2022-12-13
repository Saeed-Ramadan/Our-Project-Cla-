//to make the navbar dynamic in responsive
const navToggle =document.querySelector(".nav-toggle");
const links =document.querySelector(".links");

navToggle.addEventListener('click' ,function(){
    links.classList.toggle("show-links");
})

//slider

//Select landing page Element
let landingPage = document.querySelector(".sec1");
 console.log(landingPage);

//Get Array of Images
let imgsArray =["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg"];
let im = "../images/"
 console.log(imgsArray);
//function to randomize imgs
  function randomizeImgs() {

        backgroundInterval = setInterval(() => {

             //Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);

             //change Background image url
            landingPage.innerHTML = `<img src="${im}${imgsArray[randomNumber]}"/>`
       },5000)
    }

  randomizeImgs()


//up to top btn
const arrow =document.getElementById("arrow1")
window.onscroll=function(){
    if(scrollY >= 300){
        arrow.style.display='block'
    }else{
        arrow.style.display ='none'
    }
}
arrow1.onclick=function(){
    scroll({
    left:0,
    top:0,
    behavior:"smooth"
    })
}


AOS.init();
