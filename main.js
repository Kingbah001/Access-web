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


/*//Circular slider
//Get the handle element and number display element
var handle = document.querySelector('.handle');
var numberDisplay = document.querySelector('.number');

//Calculate the center coordinate of the slider
var sliderCenterX = handle.parentElement.offsetWidth / 2;
var sliderCenterY = handle.parentElement.offsetHeight / 2;

//define the range of values for the slider
var minValue = 0;
var maxValue = 100;

//calculate the value range based on the minimum and maximum values
var valueRange = maxValue - minValue;

//add event listenerfor mouse drag
handle.addEventListener('mousedown', function (event) {
  //calculate the initial angle of the handle base on mouse position
  var initialAngle = Math.atan2(event.clientY - sliderCenterY, event.clientX - sliderCenterX);

  //Add event listener for mouse move and release
  document.addEventListener('mousemove', moveHandle);
  document.addEventListener('mouseup', releaseHandle);

  //Function to handle mouse move
  function moveHandle(event) {
    //calculate the current angle of the handle based on mouse position
    var currentAngle = Math.atan2(event.clientY - sliderCenterY, event.clientX - sliderCenterX);

    //calculate the rotation angle in degrees
    var rotationAngle = currentAngle - initialAngle;


    //apply the rotation to the handle
    handle.style.transform = 'translate(-50%, -50%) rotate(' + rotationAngle + 'deg)';

    //calculate the value based on the rotation angle
    var value = Math.round((rotationAngle / 360) * valueRange + minValue);

    //update the number display
    numberDisplay.textContent = value
  }

  //function to handle mouse release
  function releaseHandle() {
    //remove the event listener for mouse move and release
    document.removeEventListener('mousemove', moveHandle);
    document.removeEventListener('mouseup', releaseHandle);
  }
})*/

/*// Get the handle element and number display element
var handle = document.querySelector('.handle');
var numberDisplay = document.querySelector('.number');

// Calculate the center coordinate of the slider
var sliderCenterX = handle.parentElement.offsetWidth / 2;
var sliderCenterY = handle.parentElement.offsetHeight / 2;

// Define the range of values for the slider
var minValue = 0;
var maxValue = 100;

// Calculate the value range based on the minimum and maximum values
var valueRange = maxValue - minValue;

// Initialize variables for tracking mouse movement
var isDragging = false;
var initialAngle;

// Add event listeners for mouse down, move, and up
handle.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

// Function to handle mouse down
function handleMouseDown(event) {
  isDragging = true;
  initialAngle = Math.atan2(event.clientY - sliderCenterY, event.clientX - sliderCenterX);
}

// Function to handle mouse move
function handleMouseMove(event) {
  if (!isDragging) return;
  
  var currentAngle = Math.atan2(event.clientY - sliderCenterY, event.clientX - sliderCenterX);
  var rotationAngle = currentAngle - initialAngle;
  
  handle.style.transform = 'translate(-50%, -50%) rotate(' + rotationAngle + 'rad)';
  
  var value = Math.round((rotationAngle / (2 * Math.PI)) * valueRange + minValue);
  numberDisplay.textContent = value;
}

// Function to handle mouse up
function handleMouseUp() {
  isDragging = false;
}*/

/*var handle = document.querySelector('.handle');
var border = document.querySelector('.border');
var numberDisplay = document.querySelector('.number');

var minValue = 0;
var maxValue = 100;
var valueRange = maxValue - minValue;

handle.addEventListener('mousedown', handleMouseDown);

function handleMouseDown(event) {
  event.preventDefault();
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(event) {
  var rect = border.getBoundingClientRect();
  var centerX = rect.left + rect.width / 2;
  var centerY = rect.top + rect.height / 2;
  var angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
  var rotationAngle = angle * (180 / Math.PI);
  var value = Math.round(((rotationAngle + 360) % 360) * (valueRange / 360) + minValue);
  numberDisplay.textContent = value;
  handle.style.transform = 'translate(-50%, -50%) rotate(' + rotationAngle + 'deg)';
}

function handleMouseUp() {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}*/

