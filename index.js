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


    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
    });