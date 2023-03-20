


var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  //scrollbar: {
    //el: '.swiper-scrollbar',
  //},
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.el-animation');
for (let elm of elements) {
  observer.observe(elm);
}


// var c = document.getElementById("MyCanvas");
// var ctx = c.getContext ("2d");
// ctx.font = "30px Arial";
// ctx.fillText ("65", 100, 100);

window.onscroll = function showHeader () {
  var header = document.querySelector ('.navbar');
  if(window.pageYOffset > 200){
    header.classList.add('navbar_fixed')
  }
  else {header.classList.remove('navbar_fixed')
}}