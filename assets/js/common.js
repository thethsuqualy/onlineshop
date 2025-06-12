// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.querySelector(".top-btn");

  // Show or hide the button when scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      topBtn.classList.remove("nottop");
    } else {
      topBtn.classList.add("nottop");
    }
  });

  // Scroll to top when the button is clicked
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
    centerPadding: "100px",
    focusOnSelect: true,
    // prevArrow: ".prev-btn",
    // nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  });

  $(".companies").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
