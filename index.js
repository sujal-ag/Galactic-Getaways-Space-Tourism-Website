$("a").hover(
  function () {
    $(this).addClass("underline");
  },
  function () {
    $(this).removeClass("underline");
  }
);

window.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

$("#home").on("click", function () {
  window.open("index.html", "_self");
});
$("#destination").on("click", function () {
  window.open("destination-moon.html", "_self");
});
$("#crew").on("click", function () {
  window.open("crew-commander.html", "_self");
});
$("#tech").on("click", function () {
  window.open("technology-vehicle.html", "_self");
});
