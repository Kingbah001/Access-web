

// Get all gallery image elements
const galleryImages = document.querySelectorAll('.gallery-container > div');

// Set the initial image index and interval duration
let currentImageIndex = 0;
const intervalDuration = 4000; // 4 seconds

// Function to show the next image
function showNextImage() {
  // Hide the current image
  galleryImages[currentImageIndex].style.display = 'none';

  // Increment the index
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

  // Show the next image
  galleryImages[currentImageIndex].style.display = 'flex';
}

// Start the slideshow
setInterval(showNextImage, intervalDuration);

window.addEventListener("scroll", function(){
  var scrollToTop = this.document.getElementById("scrollToTop");
  if (this.window.scrollY > 300) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

document.getElementById("scrollToTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


let hamburgerdiv = document.querySelector('.hamburger');
let mobileLinks = document.querySelector('.mobile-link-holder');

function dosomething(){
    hamburgerdiv.classList.toggle('showburger');
    mobileLinks.classList.toggle('show-mobile-link-holder')
}