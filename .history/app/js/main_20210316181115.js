$(function () {
  $(".star").rateYo({
    starWidth: "27px",
    normalFill: "#DDDDDD",
    ratedFill: "#FF9900",
    readOnly: "true",
  });

  $('h1').hyphenate();

  $(".footable").footable()({
    breakpoints: {
      table: 1024,
      phone: 480,
    },
  });

});