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
});
