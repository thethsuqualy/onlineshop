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
});
