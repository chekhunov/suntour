$(function () {
  $(".star").rateYo({
    starWidth: "27px",
    normalFill: "#DDDDDD",
    ratedFill: "#FF9900",
    readOnly: "true",
  });

  $('h1').hyphenate();

  $("table").footable()({
    breakpoints: {
      mamaBear: 1024,
      babyBear: 600,
    },
  });

});