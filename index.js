window.onload = function () {
    // Array of Images
     var backgroundImg=["./imgs/img1.jpg",
                       "./imgs/img2.jpg",
                       "./imgs/img3.jpg",
                       "./imgs/img4.jpg"
                       ]

       setInterval(changeImage, 2000);
      function changeImage() {   
       var i = Math.floor((Math.random() * 3));

       document.getElementById("header").style.backgroundImage="url('"+backgroundImg[i]+"')";
     }
   }
   var navlinks = document.getElementById("navlinks");
    function showMenu() {
      navlinks.style.right = "0"
    }
    function hideMenu() {
      navlinks.style.right = "-200px"
    }
const reviews = [
  {
    id: 1,
    img: "./imgs/img6.jpg"
  },
  {
    id: 2,
    img:
      "./imgs/img7.jpg"
  },
  {
    id: 3,
    img:
      "./imgs/img8.jpg"
  },
  {
    id: 4,
    img:
      "./imgs/img8.jpg"
  },
  {
    id: 5,
    img:
      "./imgs/img9.jpg"
  },
  {
    id: 5,
    img:
      "./imgs/img12.jpg"
  },
  {
    id: 5,
    img:
      "./imgs/img13.jpg"
  },
  {
    id: 5,
    img:
      "./imgs/img14.jpg"
  },
  {
    id: 5,
    img:
      "./imgs/img15.jpg"
  },
  {
    id: 5,
    img:
      "./imgs/img17.jpg"
  }
];

const img= document.getElementById('person-img');
const author= document.getElementById('author');
const job= document.getElementById('job');
const info= document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0

window.addEventListener('DOMContentLoaded', () =>{
   showperson(currentItem);
})
showperson= (person) => {
  const item = reviews[person];
  img.src= item.img;
  author.textContent = item.name;
  job.textContentc = item.job;
  info.textContent = item.text; 
}
nextBtn.addEventListener('click', () =>{
  currentItem++;
  if(currentItem> reviews.length-1){
    currentItem = 0;
  }
  showperson(currentItem);
})
prevBtn.addEventListener('click', () =>{
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showperson(currentItem);
})