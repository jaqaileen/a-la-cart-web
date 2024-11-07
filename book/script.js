   //book
  var tl = new TimelineMax();
  
  tl.set($(".book-wrapper"), {
    perspective: 8000,
    xPercent: -50,
    yPercent: -5,
    left: "55%",
  })
    .set($(".book-container"), { transformStyle: "preserve-3d" })
    .set($(".book-front"), {
      transformOrigin: "0% 50% -15px",
      transformPerspective: 8000,
    })
    .set(".book-left", {
      rotationX: 0,
      rotationY: 270,
      rotationZ: 0,
      transformPerspective: 8000,
    });
  
  tl.to(".side", 0, { rotationY: "+=35" });
  
  $(".book-container:not(.no-hover)").hover(
    function () {
      tl.to(".side", 0.75, { rotationY: "-=35" });
    },
    function () {
      tl.to(".side", 0.75, { rotationY: "+=35" });
    }
  );
  
  function toggleBookMovement() {
    var bookContainer = document.querySelector(".book-container");
    var currentTransform = window.getComputedStyle(bookContainer).transform;
  
    if (currentTransform === "none") {
      tl.pause(); 
      
      document.getElementById("book").style.visibility = "visible";
      document.getElementById("book").style.display = "block";
  
      setTimeout(() => {
        document.getElementById("cover").style.display = "none";
  
        var firstPage = document.getElementsByClassName("page")[0];
        firstPage.classList.add("flipped");
        document.getElementsByClassName("page")[0].click();
      }, 10);
    } else {
      bookContainer.style.transform = "none";
      tl.play(); 
    }
  
    console.log("tekan");
  }
  
  $(".book-container").on("click", toggleBookMovement);
  
  // ----
  
  var pages = document.getElementsByClassName("page");
  
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (i % 2 === 0) {
      page.style.zIndex = pages.length - i;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    for (var i = 0; i < pages.length; i++) {
      pages[i].pageNum = i + 1;
      console.log(pages[i].pageNum)
      pages[i].onclick = function () {
        console.log(this.pageNum);
        if (this.pageNum + 1 >= pages.length || this.pageNum === 2) {
          if (this.pageNum === 2) {
            setTimeout(() => {
              document.getElementById("book").style.visibility = "hidden";
              document.getElementById("book").style.display = "none";
              document.getElementById("cover").style.display = "block";
            }, 1900);
  
            setTimeout(() => {
              tl.play();
            }, 1950);
          } else {
            setTimeout(() => {
              document.getElementById("book").style.visibility = "hidden";
              document.getElementById("book").style.display = "none";
              document.getElementById("cover").style.display = "block";
            }, 940);
  
            setTimeout(() => {
            
              tl.play();
            }, 1500);
          }
  
          // remove flipped class from all pages
          for (var i = 0; i < pages.length; i++) {
            pages[i].classList.remove("flipped");
          }
  
          return;
        }
  
        if (this.pageNum % 2 === 0) {
          this.classList.remove("flipped");
          this.previousElementSibling.classList.remove("flipped");
          setTimeout(() => {           
            document.getElementById('myAnimatedGIF1').src = document.getElementById('myAnimatedGIF1').src
          }, 300);
          document.getElementById('myAnimatedGIF2').src = document.getElementById('myAnimatedGIF2').src
  
        } else {
          this.classList.add("flipped");
          this.nextElementSibling.classList.add("flipped");
  
          document.getElementById('myAnimatedGIF1').src = document.getElementById('myAnimatedGIF1').src
          setTimeout(() => {
            document.getElementById('myAnimatedGIF2').src = document.getElementById('myAnimatedGIF2').src
          }, 300);
        }
      };
    }
  });

  let counter = 0;

  // Hide the counter initially
  const counterElement = document.getElementById('click-counter');
  counterElement.style.display = 'none';
  
  document.querySelector('.rectangle').addEventListener('click', function() {
    counter++;
    counterElement.textContent = counter;
  
    // Show the counter after the first click
    if (counter === 1) {
      counterElement.style.display = 'block';
    }
  });
  
  // Dropdown toggle function
  function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  