$(function () {
  "use strict";

  var lastScrollTop = 0;
  var header = $("header");
  var headerHeight = header.outerHeight();

  $(window).on("scroll", function () {
    var st = $(this).scrollTop();

    if (st > lastScrollTop) {
      // 스크롤을 아래로 내릴 때
      header.css("top", -headerHeight + "px");
    } else {
      // 스크롤을 위로 올릴 때
      header.css("top", "0");
    }
    lastScrollTop = st;
  });
});

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from("#main header", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
  y: "-80vh", // 오른쪽으로 이동 (값은 원하는 만큼 조절)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#main",
  triggerHook: 0,
})
  .setTween(ani04_1)
  .addTo(controller);





//----------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function () {
  // 모든 a 태그에 대해서
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // 부드러운 스크롤 적용
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});