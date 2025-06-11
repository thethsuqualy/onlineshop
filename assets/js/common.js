// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.querySelector('.top-btn');

        // Show or hide the button when scrolling
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                topBtn.classList.remove('nottop');
            } else {
                topBtn.classList.add('nottop');
            }
        });

        // Scroll to top when the button is clicked
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
});

// Your jQuery code goes here
$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("show");

    if ($(".hamburger").hasClass("active")) {
      $("body").addClass("overflow-hidden");
    } else {
      $("body").removeClass("overflow-hidden");
    }
  });

  $(".test-wrapper").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

   $('.companies').slick({
            slidesToShow: 4,
            infinite: true,
            slidesToScroll: 1,
            centerMode: false,
            autoplay:true,
            autoplaySpeed:2000,
            // dots: true,
            draggable: true,
            // initialSlide: 2,
            
        });
  
});
