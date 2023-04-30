$(document).ready(function(){
  $('.slider').slick({
    centerMode: true, // Enable center mode
    centerPadding: '100px', // Set the padding around center slide
    slidesToShow: 3, // Show three slides at once
    responsive: [
      {
        breakpoint: 768, // Change settings for smaller screens
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});