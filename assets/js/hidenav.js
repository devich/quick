var navHeight = document.querySelector("header").offsetHeight;
// window.onresize = { navHeight = document.querySelector("header").offsetHeight };
window.onresize = function (event) {
  navHeight = document.querySelector("header").offsetHeight;
};
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else if (currentScrollPos > document.querySelector("header").offsetHeight) {
    document.querySelector("header").style.top = (0 - navHeight) + "px";
  }
  prevScrollpos = currentScrollPos;
}