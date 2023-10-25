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
  