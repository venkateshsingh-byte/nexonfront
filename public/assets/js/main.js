// Preserve your smooth scrolling and scroll animations
  $(document).ready(function(){
    // Smooth scroll for internal links
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
        });
      }
    });

    // Slide animation on scroll (same as old)
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
      });
    });
  });

  

  var homesSwiper = new Swiper(".swiper-homes", {
  loop: true,
  navigation: {
    nextEl: ".homes-next",
    prevEl: ".homes-prev",
  },
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
});

  // Product swiper 3
  const prodSwiper = new Swiper('.mySwiper3', {
    loop: true,
    speed: 800,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true
    }
  });

  // FAQ accordion (preserve original behavior)
  $(document).ready(function() {
    var accordionParentClass = '.eachFaq';
    var accordionQuestionClass = '.eachFaq .title';
    var accordionContentClass = '.accordion-content';

    $(accordionParentClass).each(function() {
      $(this).addClass('close');
      $(this).find(accordionContentClass).hide();
    });

    $(accordionQuestionClass).click(function(){
      var faqClass = $(this).closest(accordionParentClass).attr('class');
      if(faqClass.indexOf('close') != -1){
        $(accordionParentClass).find(accordionContentClass).slideUp('slow');
        $(accordionParentClass).addClass('close').removeClass('open');

        $(this).closest(accordionParentClass).removeClass('close').addClass('open');
        $(this).closest(accordionParentClass).find(accordionContentClass).slideDown('slow');
      } else {
        $(this).closest(accordionParentClass).addClass('close').removeClass('open');
        $(this).closest(accordionParentClass).find(accordionContentClass).slideUp('slow');
      }
    });
  });

  // Top-up button show/hide
  var myID = document.querySelector("#cirId");
  var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
      myID.classList.add("show");
    } else {
      myID.classList.remove("show");
    }
  };
  window.addEventListener("scroll", myScrollFunc);

  // Header show/hide on scroll (preserve previous behavior)
  var headerTop = document.querySelector(".header-top");
  var headerNav = document.querySelector(".navbardefault");
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      headerTop?.classList.add("hidee");
      headerTop?.classList.remove("blocke");
      headerNav?.classList.add("navbar-fixed-top1");
    } else {
      headerTop?.classList.add("blocke");
      headerTop?.classList.remove("hidee");
      headerNav?.classList.remove("navbar-fixed-top1");
    }
  });

  // Adjust hero padding to account for header height (runs after DOM)
  window.addEventListener('load', function() {
    try {
      var headerTopEl = document.querySelector(".header-top");
      var headerNavEl = document.querySelector(".navbardefault");
      var heroBanner = document.querySelector("section.hm-section11.section1");
      if (headerTopEl && headerNavEl && heroBanner) {
        var headerHeight = headerTopEl.offsetHeight + headerNavEl.offsetHeight;
        heroBanner.style.paddingTop = headerHeight + "px";
      }
    } catch(e) {
      // fail silently
    }
  });

  //tab js
document.querySelectorAll('.bucket-container, .bucket-container-left').forEach(container => {
  let buckets = container.querySelectorAll('.paint-bucket');
  let tabContainer = container.parentElement.querySelector('.tab-content');

  // ✅ Default state: first bucket + first tab active
  if (buckets.length > 0) {
    buckets[0].classList.add('active');
    if (tabContainer) {
      let firstTarget = buckets[0].getAttribute('data-target');
      if (firstTarget) {
        tabContainer.querySelector(firstTarget).classList.add('show', 'active');
      }
    }
  }

  // ✅ Click events
  buckets.forEach(bucket => {
    bucket.addEventListener('click', function () {
      let target = this.getAttribute('data-target');

      // Hide only tabs inside this section
      tabContainer.querySelectorAll('.tab-pane').forEach(tab => {
        tab.classList.remove('show', 'active');
      });

      // Show the selected tab
      tabContainer.querySelector(target).classList.add('show', 'active');

      // Remove active from only buckets in this container
      buckets.forEach(b => b.classList.remove('active'));

      // Add active class to clicked bucket
      this.classList.add('active');
    });
  });
});



document.querySelectorAll('.page-navigator').forEach(container => {
  let buckets = container.querySelectorAll('.tabler-icon-search-parent'); // select parent div
  let tabContainer = container.parentElement.querySelector('.tab-content');

  // ✅ Default state: first bucket + first tab active
  if (buckets.length > 0) {
    buckets[0].classList.add('active-button');
    if (tabContainer) {
      let firstTarget = buckets[0].getAttribute('data-bs-target');
      if (firstTarget) {
        tabContainer.querySelector(firstTarget).classList.add('show', 'active');
      }
    }
  }

  // ✅ Click events Inspirations
  buckets.forEach(bucket => {
    bucket.addEventListener('click', function () {
      let target = this.getAttribute('data-bs-target'); // use correct attribute

      // Hide only tabs inside this section
      tabContainer.querySelectorAll('.tab-pane').forEach(tab => {
        tab.classList.remove('show', 'active');
      });

      // Show the selected tab
      tabContainer.querySelector(target).classList.add('show', 'active');

      // Remove active from only buckets in this container
      buckets.forEach(b => b.classList.remove('active-button'));

      // Add active class to clicked bucket
      this.classList.add('active-button');
    });
  });
});

///Product Single Page
  var mySwiper = new Swiper ('.swiper-container', 
	{
    speed:5000,
		direction: 'horizontal',
		navigation: 
		{
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		pagination: 
		{
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		zoom: true,
		keyboard: 
		{
			enabled: true,
			onlyInViewport: false,
		},
		mousewheel: 
		{
			invert: true,
		},
    autoplay: 
    {
      delay: 2000,
    },
    loop: true,
	}); 