//스크롤 위치 알기위한 코드 - 마지막에 지우기

// function updateScrollPosition() {
//   const scrollPercentage =
//     (window.scrollY /
//       (document.documentElement.scrollHeight - window.innerHeight)) *
//     100;
//   const scrollValueElement = document.getElementById("scroll-value");
//   scrollValueElement.textContent = scrollPercentage.toFixed(2) + "%";
// }

// // 스크롤 이벤트 리스너 등록
// window.addEventListener("scroll", updateScrollPosition);

// // 초기 페이지 로드 시 한 번 실행
// updateScrollPosition();

//-----------------------------------------------------------------

$(document).ready(function () {
  $("#main .main-right .main-pumi").addClass("show");
});

$(document).ready(function () {
  $("#main .main-right .main-toto").addClass("show");
});

$(document).ready(function () {
  $("#main .main-right .main-ohmong").addClass("show");
});

$(document).ready(function () {
  $("#main .effects .effect-1").addClass("show");
});

$(document).ready(function () {
  $("#main .effects .effect-2").addClass("show");
});

$(document).ready(function () {
  $("#main .effects .effect-3").addClass("show");
});

$(document).ready(function () {
  $("#main .effects .effect-4").addClass("show");
});

$(document).ready(function () {
  $("#main .effects .effect-5").addClass("show");
});

$(document).ready(function () {
  $("#main .effects .effect-6").addClass("show");
});

$(document).ready(function () {
  $("#main .effects .effect-7").addClass("show");
});

$(document).ready(function () {
  $("#main .effects .effect-8").addClass("show");
});

$(document).ready(function () {
  $("#main .effects .effect-9").addClass("show");
});


// $(document).ready(function () {
//   // 요소를 변수에 저장합니다.
//   var $pumi = $("#identity .identity-left .identity-pumi");
//   var $toto = $("#identity .identity-left .identity-toto");
//   var $ohmong = $("#identity .identity-left .identity-ohmong");
//   var $character = $("#branding .intro .introduce-character")

//   // 스크롤 이벤트 리스너를 추가합니다.
//   $(window).scroll(function () {
//     // 윈도우의 스크롤 위치와 문서 높이를 가져옵니다.
//     var scrollPosition = $(window).scrollTop();
//     var documentHeight = $(document).height();

//     // 스크롤 위치가 문서 높이의 20%에 도달하면 클래스 "show"를 추가합니다.
//     if (scrollPosition / documentHeight >= 0.21) {
//       $pumi.addClass("show");
//     }
//     if (scrollPosition / documentHeight >= 0.21) {
//       $toto.addClass("show");
//     }
//     if (scrollPosition / documentHeight >= 0.21) {
//       $ohmong.addClass("show");
//     }
//     if (scrollPosition / documentHeight >= 0.42) {
//       $character.addClass("show");
//     }
//   });
// });


//-----------------------------------------------------------------

// $(document).ready(function () {
//     var scrollThreshold = $(document).height() * 0.20; // 스크롤 위치 22%
//     var identityPumi = $("#identity .identity-left .identity-pumi");
  
//     $(window).on("scroll", function () {
//       if ($(window).scrollTop() > scrollThreshold) { // 22% 이상일 때 실행
//         identityPumi.addClass("show");
//       }
//     });
//   });
  


//-----------------------------------------------------------------

// "use strict";

// const typingtxt1 = "미오와 함께";
// const text1 = document.querySelector(".typo-typing-1");
// let index1 = 0;

// function typingNext1() {
//     text1.textContent += typingtxt1[index1++];
//     if (index1 < typingtxt1.length) setTimeout(typingNext1, 50);
// }

// const observer1 = new IntersectionObserver(([entry], observer1) => {
//     if (entry.isIntersecting) {
//         observer1.unobserve(entry.target);
//         setTimeout(() => {
//             typingNext1();

//             // 두 번째 타이핑 작업 시작
//             const typingtxt2 = "건강한 식습관으로";
//             const text2 = document.querySelector(".typo-typing-2");
//             let index2 = 0;

//             function typingNext2() {
//                 text2.textContent += typingtxt2[index2++];
//                 if (index2 < typingtxt2.length) setTimeout(typingNext2, 50);
//             }

//             setTimeout(() => {
//                 typingNext2();

//                 // 세 번째 타이핑 작업 시작
//                 const typingtxt3 = "소아비만을 예방해요!";
//                 const text3 = document.querySelector(".typo-typing-3");
//                 let index3 = 0;

//                 function typingNext3() {
//                     text3.textContent += typingtxt3[index3++];
//                     if (index3 < typingtxt3.length) setTimeout(typingNext3, 50);
//                 }

//                 setTimeout(typingNext3, 900);
//             }, 700);
//         }, 500);
//     }
// });

// observer1.observe(document.querySelector(".typing-trigger"));


//-----------------------------------------------------------------

// "use strict";

// function setupTyping(typingText, targetElement, delay) {
//     let index = 0;

//     function typingNext() {
//         targetElement.textContent += typingText[index++];
//         if (index < typingText.length) setTimeout(typingNext, 100);
//     }

//     const observer = new IntersectionObserver(([entry], observer) => {
//         if (entry.isIntersecting) {
//             observer.unobserve(entry.target);
//             setTimeout(typingNext, delay);
//         }
//     });

//     observer.observe(targetElement);
// }

// // "logo-left-img" 요소가 나타날 때 "logo-kid-text-1"에 대한 타이핑 작업을 2초 뒤에 실행
// const logoLeftImg = document.querySelector(".logo-left-img");
// const logoKidText1 = document.querySelector(".logo-kid-text-1");

// setupTyping("아이, 소아를 의미합니다", logoKidText1, 1300);


//-----------------------------------------------------------------

// "use strict";

// function setupTyping(typingText, targetElement, delay) {
//     let index = 0;

//     function typingNext() {
//         targetElement.textContent += typingText[index++];
//         if (index < typingText.length) setTimeout(typingNext, 100);
//     }

//     const observer = new IntersectionObserver(([entry], observer) => {
//         if (entry.isIntersecting) {
//             observer.unobserve(entry.target);
//             setTimeout(typingNext, delay);
//         }
//     });

//     observer.observe(targetElement);
// }

// // "logo-left-img" 요소가 나타날 때 "logo-kid-text-1"에 대한 타이핑 작업을 2초 뒤에 실행
// const logoLeftImg2 = document.querySelector(".logo-left-img");
// const logoKidText2 = document.querySelector(".logo-kid-text-2");

// setupTyping("습관을 의미하는", logoKidText2, 3200);

//-----------------------------------------------------------------

// "use strict";

// function setupTyping(typingText, targetElement, delay) {
//     let index = 0;

//     function typingNext() {
//         targetElement.textContent += typingText[index++];
//         if (index < typingText.length) setTimeout(typingNext, 100);
//     }

//     const observer = new IntersectionObserver(([entry], observer) => {
//         if (entry.isIntersecting) {
//             observer.unobserve(entry.target);
//             setTimeout(typingNext, delay);
//         }
//     });

//     observer.observe(targetElement);
// }

// // "logo-left-img" 요소가 나타날 때 "logo-kid-text-1"에 대한 타이핑 작업을 2초 뒤에 실행
// const logoLeftImg3 = document.querySelector(".logo-left-img");
// const logoKidText3 = document.querySelector(".logo-kid-text-3");

// setupTyping("아이콘에서 따왔습니다", logoKidText3, 4200);

//-----------------------------------------------------------------

// Add a click event listener to the button
document.getElementById("scrollToTopButton").addEventListener("click", function() {
  // Scroll to the top of the page smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show the button when scrolling down, hide it when at the top
window.addEventListener("scroll", function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  if (window.scrollY > 200) { // Adjust the threshold as needed
      scrollToTopButton.style.display = "block";
  } else {
      scrollToTopButton.style.display = "none";
  }
});


//-----------------------------------------------------------------

const textcolor = document.querySelectorAll(".span-color-change");

const colorKeyframes = [{ color: "white" }, { color: "#83F0B5" }];

const colorAnimationOptions = {
  duration: 500,
  fill: "forwards",
  easing: "cubic-bezier(0.4, 0.0, 0.2, 0.9)",
};

const intersectionCallback = (entries, observer) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    setTimeout(() => {
      textcolor.forEach((element) => {
        element.animate(colorKeyframes, colorAnimationOptions);
      });
    }, 100);
    observer.unobserve(entry.target);
  }
};

const observer = new IntersectionObserver(intersectionCallback, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

textcolor.forEach((element) => {
  observer.observe(element);
});

observer.observe(document.querySelector("#branding")); //텍스트 컨테이너 요소의 감시를 시작한다.


//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

// 스크롤 이벤트 핸들러 함수
// function handleScroll() {
//     const elements = document.getElementsByClassName("element");
//     const elementTop = element.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     const threshold = windowHeight * 0.3; // 화면의 30% 위치를 계산

//     if (elementTop < windowHeight - threshold) {
//         // 요소가 화면의 30% 위치에 도달하면 opacity를 1로 변경하여 나타나는 효과 생성
//         element.style.opacity = 1;

//         // 필요한 동작 실행
//         // 예를 들어, 다른 클래스 추가 또는 다른 액션을 수행할 수 있음

//         // 스크롤 이벤트 리스너에서 한 번만 실행되도록 제거
//         window.removeEventListener("scroll", handleScroll);
//     }
// }

// // 스크롤 이벤트 리스너 등록
// window.addEventListener("scroll", handleScroll);
