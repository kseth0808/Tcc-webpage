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

  //  window.onload = function () {
  //   // Array of Images
  //    var backgroundImgs=["./imgs2/img5.jpg",
  //                      "./imgs2/img6.jpg",
  //                      "./imgs2/img7.jpg",
  //                      "./imgs2/img8.jpg"
  //                      ]

  //      setInterval(changeImages, 2000);
  //     function changeImages() {   
  //      var a = Math.floor((Math.random() * 3));

  //      document.getElementById("image").style.backgroundImage="url('"+backgroundImgs[a]+"')";
  //    }
  //  }
   
   var navlinks = document.getElementById("navlinks");
    function showMenu() {
      navlinks.style.right = "0"
    }
    function hideMenu() {
      navlinks.style.right = "-200px"
    }


    // var swiper = new Swiper(".mySwiper", {
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   loop:true,
    //   autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    //   },
    // });

    // local reviews data
const reviews = [
  {
    id: 1,
    img: "https://media-exp1.licdn.com/dms/image/C4D22AQEjUqSwbGhbcA/feedshare-shrink_2048_1536/0/1652436911198?e=1671667200&v=beta&t=HaIKInEVzpULQmaQ0dn3yjGEnvd_j-03OBsyxkn84dA"
  },
  {
    id: 2,
    img:
      "https://media-exp1.licdn.com/dms/image/C5622AQF61F786v8NJA/feedshare-shrink_800/0/1664017881288?e=1671667200&v=beta&t=F8Bd2QJGxiv0DpRhQIzaB4QSAFb7Dog2ynLDq2xlxjg"
  },
  {
    id: 3,
    img:
      "https://media-exp1.licdn.com/dms/image/C4D22AQHx5XJRfuzUgw/feedshare-shrink_1280/0/1663513861535?e=1671667200&v=beta&t=9EXrqstldhWIWQ6VirmEVAu62OjYogIydZk4Q2KPBTg"
  },
  {
    id: 4,
    img:
      "https://media-exp1.licdn.com/dms/image/C4D22AQHOW0Qwdsr7Vw/feedshare-shrink_1280/0/1663235085710?e=1671667200&v=beta&t=sr-eVL-oDTiSCPo2HYR9o43OIJnZ_8f7EJCMBOxLpO0"
  },
  {
    id: 5,
    img:
      "https://media-exp1.licdn.com/dms/image/C4D22AQHGTtQRkJShOw/feedshare-shrink_1280/0/1657091363258?e=1671667200&v=beta&t=NrdyqWQ_19Ypc9USeiD3FUVP9dnCECd8pBSMU4mBhg0"
  },
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