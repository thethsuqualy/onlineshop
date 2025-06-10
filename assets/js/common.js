// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {});

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

  // $(".companies").slick({
  //   slidesToShow: 3,
  //   infinite: true,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  // });

   $('.companies').slick({
            slidesToShow: 3,
            infinite: true,
            slidesToScroll: 1,
            centerMode: true,
            autoplay:false,
            autoplaySpeed:2000,
            dots: true,
            // draggable: true,
            // initialSlide: 2,
            variableWidth: true,
        });
});
