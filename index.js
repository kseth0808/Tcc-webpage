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
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
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