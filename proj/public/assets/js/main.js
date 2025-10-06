// public/assets/js/main.js

$(document).ready(function () {
  // Smooth scrolling
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({ scrollTop: $(hash).offset().top }, 900, function () {
        window.location.hash = hash;
      });
    }
  });

  // Slide animation
  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  // Slick slider
  $(".slider1").slick({
    autoplaySpeed: 3000,
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slide: "div",
    cssEase: "linear",
  });

  // Accordion
  var accordionParentClass = ".eachFaq";
  var accordionQuestionClass = ".eachFaq .title";
  var accordionContentClass = ".accordion-content";

  $(accordionParentClass).each(function () {
    $(this).addClass("close");
    $(this).find(accordionContentClass).hide();
  });

  $(accordionQuestionClass).click(function () {
    var faqClass = $(this).closest(accordionParentClass).attr("class");
    if (faqClass.indexOf("close") != -1) {
      $(accordionParentClass).find(accordionContentClass).slideUp("slow");
      $(accordionParentClass).addClass("close").removeClass("open");

      $(this).closest(accordionParentClass).removeClass("close").addClass("open");
      $(this).closest(accordionParentClass).find(accordionContentClass).slideDown("slow");
    } else {
      $(this).closest(accordionParentClass).addClass("close").removeClass("open");
      $(this).closest(accordionParentClass).find(accordionContentClass).slideUp("slow");
    }
  });

  // Scroll detection for button visibility
  var myID = document.querySelector("#cirId");
  var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
      myID.className = "topup1 show";
    } else {
      myID.className = "topup1 hide";
    }
  };
  window.addEventListener("scroll", myScrollFunc);
});
