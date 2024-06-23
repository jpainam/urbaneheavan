(function ($) {
  "use strict";

  //Header Search Form
  if ($(".search-trigger").length) {
    $(".search-trigger").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search, .search-back-drop").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Mobile Menu

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav li a").on("click", function () {
    $(".sub-nav-toggler").removeClass("active");
  });

  var subMenu = $(".navbar-nav .sub-menu");

  if (subMenu.length) {
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <i class="las la-angle-down"></i> </button>';
      });

    var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

    subMenuToggler.on("click", function () {
      $(this).parent().parent().children(".sub-menu").slideToggle();
      return false;
    });
  }

  // data-backround
  // const dataBackground = document.querySelectorAll("[data-background");
  // dataBackground.forEach((dbg) => {
  //   dbg.style.backgroundImage = `url(${dbg.dataset.background})`;
  // });

  //jQuery Animation
  new WOW().init();

  $(".homepage-slides").on("translate.owl.carousel", function () {
    $(".single-slide-item h3")
      .removeClass("animated fadeInUp")
      .css("opacity", "1");
    $(".single-slide-item h1")
      .removeClass("animated fadeInDown")
      .css("opacity", "1");
    $(".single-slide-item p")
      .removeClass("animated fadeInUp")
      .css("opacity", "1");
    $(".single-slide-item .main-btn")
      .removeClass("animated fadeInDown")
      .css("opacity", "1");
  });

  $(".homepage-slides").on("translated.owl.carousel", function () {
    $(".single-slide-item h3")
      .addClass("animated fadeInUp")
      .css("opacity", "1");
    $(".single-slide-item h1")
      .addClass("animated fadeInDown")
      .css("opacity", "1");
    $(".single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
    $(".single-slide-item .main-btn")
      .addClass("animated fadeInDown")
      .css("opacity", "1");
  });

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    var $action = $(this).prop("action");
    var $data = $(this).serialize();
    var $this = $(this);

    $this.prevAll(".alert").remove();

    $.post(
      $action,
      $data,
      function (data) {
        if (data.response == "error") {
          $this.before(
            '<div class="alert alert-danger">' + data.message + "</div>"
          );
        }

        if (data.response == "success") {
          $this.before(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
          $this.find("input, textarea").val("");
        }
      },
      "json"
    );
  });

  // Active & Remove Class

  $(".sub-menu ul li").on("click", function () {
    $(".sub-menu").removeAttribute("style");
    $(this).addClass("active");
  });

  $("a.nav-link").on("mouseover", function () {
    $("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  $(window).on("load", function () {
    handlePreloader();
  });
})(window.jQuery);
