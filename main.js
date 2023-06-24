// window.addEventListener('DOMContentLoaded', function () {
//     var container = document.querySelectorAll('.gallery-container');
//     var images = document.querySelector('.gallery-images');
//     var imageWidth = document.querySelector('.gallery-image').offsetWidth;

//     var currentImage = 0;
//     var totalImages = document.querySelectorAll('.gallery-image').length;

//     function scrollImages() {
//         currentImage++;
//         if (currentImage === totalImages) {
//             currentImage = 0;
//         }
//         images.style.transform = 'translateX(-' + (currentImage * imageWidth) + 'px)';
//     }

//     setInterval(scrollImages, 3000);
// });

// window.addEventListener('DOMContentLoaded', function () {
//     var container = document.querySelector('.gallery-container');
//     var images = container.querySelectorAll('.gallery-images');
//     var imageWidth = document.querySelector('.gallery-image').offsetWidth;

//     var currentImage = 0;
//     var totalImages = document.querySelectorAll('.gallery-image').length;

//     function scrollImages() {
//         currentImage++;
//         if (currentImage === totalImages) {
//             currentImage = 0;
//         }
//         images.forEach(function(image) {
//             image.style.transform = 'translateX(-' + (currentImage * imageWidth) + 'px)';
//         });
//     }

//     setInterval(scrollImages, 3000);
// });

// window.addEventListener('DOMContentLoaded', function () {
//     var container = document.querySelector('.gallery-container');
//     var images = container.querySelectorAll('.gallery-images');
//     var imageWidth = container.querySelector('.gallery-image').offsetWidth;

//     var currentImage = 0;
//     var totalImages = container.querySelectorAll('.gallery-image').length;

//     function scrollImages() {
//       currentImage++;
//       if (currentImage === totalImages) {
//         currentImage = 0;
//       }
//       images.forEach(function (image) {
//         image.style.transform = 'translateX(-' + (currentImage * imageWidth) + 'px)';
//       });
//     }

//     setInterval(scrollImages, 3000);
//   });


// window.addEventListener('DOMContentLoaded', function () {
//   var container = document.querySelector('.gallery-container');
//   var images = container.querySelectorAll('.gallery-images');
//   var imageWidth = container.querySelector('.gallery-image').offsetWidth;

//   var currentImage = 0;
//   var totalImages = container.querySelectorAll('.gallery-image').length;

//   function scrollImages() {
//     currentImage++;
//     if (currentImage === totalImages) {
//       currentImage = 0;
//     }
//     images.forEach(function (image, index) {
//       var translateValue = (index - currentImage) * imageWidth;
//       image.style.transform = 'translateX(' + translateValue + 'px)';
//     });
//   }

//   setInterval(scrollImages, 3000);
// });


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


