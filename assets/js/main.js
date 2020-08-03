$(document).ready(function () {
  $(".service_items_slider").slick({
    adaptiveHeight: true,
    dots: true,
    centerMode: true,
    centerPadding: "0px",
    infinite: false,
    arrows: false,
    slidesToShow: 1.15,
    mobileFirst: true,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 767.98,
        settings: "unslick",
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".header_burger").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("disabled");
    $("header").toggleClass("mobile_menu_open");
    $("header nav").toggleClass("d-none");
    $("header nav").toggleClass("d-flex");
    $(".header_burger_open, .header_burger_close").toggleClass("d-none");
  });

  $(".news-page__tabs li").click(function () {
    $(".news-page__tabs li").removeClass("active");
    $(this).addClass("active");
    $(".news-block").addClass("d-none");
    var tabAttr = $(this).attr("data-news");

    $(".news-block").each(function (i, el) {
      $(el).addClass("d-none");
      if (tabAttr === $(el).attr("data-news")) {
        $(el).removeClass("d-none");
      }
    });
  });
});
