$(function () {
  $(".star").rateYo({
    starWidth: "27px",
    normalFill: "#DDDDDD",
    ratedFill: "#FF9900",
    readOnly: "true",
  });

  $('h1').hyphenate();

  // $("table").footable()({
  //   breakpoints: {
  //     table: 1024,
  //     phone: 480,
  //   },
  // });

  jQuery(".table").footable({
    calculateWidthOverride: function () {
      return { width: jQuery(window).width() };
    },
    breakpoints: {
      mobile: 0,
      tablet: 720,
      desktop: 1024,
    },
  });

});