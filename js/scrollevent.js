const SEC = 0.5;

function clip_text1(dom) {
  const childs = dom.children;
  for (let i = 0; i < childs.length; i++) {
    childs[i].style.animationDelay = `${SEC * i}s`;
    childs[i].classList.add("on");
  }
}

/* ✨ 실행 */
const test = document.getElementById("main-app-text");

setTimeout(function () {
  clip_text1(test);
}, 600); // 2초(2000밀리초) 후에 코드 실행

//-----------------------------------------------------------------

const SEC2 = 0.1;
let executing2 = false;

function clip_text2(dom) {
  const childs = dom.children;
  for (let i = 0; i < childs.length; i++) {
    childs[i].style.animationDelay = `${SEC2 * i}s`;
    childs[i].classList.add("on2");
  }
}

function unclip_text2(dom) {
  const childs = dom.children;
  for (let i = 0; i < childs.length; i++) {
    childs[i].classList.remove("on2");
  }
}

const test2 = document.getElementById("overview-txt-ani");

function handleScroll2() {
  const scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  if (scrollPercentage >= 2.7 && scrollPercentage <= 8.73) {
    if (!executing2) {
      executing2 = true;
      clip_text2(test2);

      // setTimeout(() => {
      //   executing2 = false;
      // }, 30);
    }
  } else {
    unclip_text2(test2);
    executing2 = false;
  }
}

// "on2"에 대한 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", handleScroll2);

const SEC3 = 0.5;
let executing3 = false;

function clip_text3(dom) {
  dom.classList.add("on3");
}

function unclip_text3(dom) {
  dom.classList.remove("on3");
}

const test3 = document.getElementById("identity-p");

function handleScroll3() {
  const scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  if (scrollPercentage >= 14 && scrollPercentage <= 19) {
    if (!executing3) {
      executing3 = true;
      setTimeout(() => {
        clip_text3(test3);
        executing3 = false;
      }, 500); // 1초(1000ms) 후에 clip_text 실행
    }
  } else {
    unclip_text3(test3);
    executing3 = false;
  }
}

// "on3"에 대한 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", handleScroll3);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".overview .overview-left", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
  y: "15vw", // 오른쪽으로 이동 (값은 원하는 만큼 조절)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".overview",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------
var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".overview .overview-circle-2", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
  x: "-15vw", // 오른쪽으로 이동 (값은 원하는 만큼 조절)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".overview",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".background .chart-1", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
  marginTop: -20,
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".background",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

var ani04_2 = gsap.timeline();
ani04_2.from(".background .chart-2", 1, {
  opacity: 0, // 시작값 0
  delay: 0.4,
  marginTop: -20,
});

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".background",
  triggerHook: 0.5,
})
  .setTween(ani04_2)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".care .care-top-stage li:nth-child(2)", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".care",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

var ani04_2 = gsap.timeline();
ani04_2.from(".care .care-top-stage li:nth-child(3)", 1, {
  opacity: 0, // 시작값 0
  delay: 0.4,
});

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".care",
  triggerHook: 0.5,
})
  .setTween(ani04_2)
  .addTo(controller);

var ani04_3 = gsap.timeline();
ani04_3.from(".care .care-top-stage li:nth-child(4)", 1, {
  opacity: 0, // 시작값 0
  delay: 0.8,
});

var scene3 = new ScrollMagic.Scene({
  triggerElement: ".care",
  triggerHook: 0.5,
})
  .setTween(ani04_3)
  .addTo(controller);
//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".care .care-bottom-stage li:nth-child(1)", 1, {
  opacity: 0, // 시작값 0
  delay: 1,
  marginTop: -20,
  scale: 0.5, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".care",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

// 스크롤 이벤트 중에 확대 애니메이션 추가
var ani04_2 = gsap.timeline();
ani04_2.to(".care .care-bottom-stage li:nth-child(1)", 1, {
  scale: 1, // 크게 확대 (1은 원래 크기)
});

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".care",
  triggerHook: 0.7, // 원하는 타이밍에 확대 애니메이션 시작
})
  .setTween(ani04_2)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".goal-top-txt .goal-txt-ani", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".goal-top-txt",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from("#identity .identity-pumi", 0.5, {
  opacity: 0, // 시작값 0
  delay: 0.3,
  y: "7vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#identity",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from("#identity .identity-toto", 0.5, {
  opacity: 0, // 시작값 0
  delay: 0.4,
  y: "7vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#identity",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from("#identity .identity-ohmong", 0.5, {
  opacity: 0, // 시작값 0
  delay: 0.5,
  y: "7vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#identity",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);
//-----------------------------------------------------------------
var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".intro .introduce-character", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
  y: "11vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".intro",
  triggerHook: 0,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from("#value .kid", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
  marginTop: 190, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#value",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

var controller = new ScrollMagic.Controller();

var ani04_2 = gsap.timeline();
ani04_2.from("#value .parent", 1, {
  opacity: 0, // 시작값 0
  delay: 0.3,
  marginTop: 190, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#value",
  triggerHook: 0.5,
})
  .setTween(ani04_2)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from("#value .kid-tag", 1, {
  opacity: 0, // 시작값 0
  delay: 0.6,
  y: "7vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#value",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

var controller = new ScrollMagic.Controller();

var ani04_2 = gsap.timeline();
ani04_2.from("#value .parent-tag", 1, {
  opacity: 0, // 시작값 0
  delay: 0.9,
  y: "7vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#value",
  triggerHook: 0.5,
})
  .setTween(ani04_2)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".kid .value-kid-tablet-2", 1, {
  opacity: -1, // 시작값 0
  delay: 0.4,
  y: "-17vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".kid",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".parent .value-parent-phone-2", 1, {
  opacity: -1, // 시작값 0
  delay: 0.4,
  x: "-17vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".parent",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);


//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".color-top .purple", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
  x: "-17vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".color-top",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//다음

var controller = new ScrollMagic.Controller();

var ani04_2 = gsap.timeline();
ani04_2.from(".color-top .green", 1, {
  opacity: 0, // 시작값 0
  delay: 0.2,
  x: "-17vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".color-top",
  triggerHook: 0.5,
})
  .setTween(ani04_2)
  .addTo(controller);

//다음

var controller = new ScrollMagic.Controller();

var ani04_3 = gsap.timeline();
ani04_3.from(".color-top .yellow", 1, {
  opacity: 0, // 시작값 0
  delay: 0.4,
  x: "-17vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene3 = new ScrollMagic.Scene({
  triggerElement: ".color-top",
  triggerHook: 0.5,
})
  .setTween(ani04_3)
  .addTo(controller);

//다음
var controller = new ScrollMagic.Controller();

var ani04_4 = gsap.timeline();
ani04_4.from(".color-top .red", 1, {
  opacity: 0, // 시작값 0
  delay: 0.6,
  x: "-17vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene4 = new ScrollMagic.Scene({
  triggerElement: ".color-top",
  triggerHook: 0.5,
})
  .setTween(ani04_4)
  .addTo(controller);

//다음
var controller = new ScrollMagic.Controller();

var ani04_5 = gsap.timeline();
ani04_4.from(".bottom-trigger .color-bottom", 0.7, {
  // 기존 duration 값 사용
  opacity: 0,
  delay: 0,
  y: "4vw",
});

var scene5 = new ScrollMagic.Scene({
  triggerElement: ".bottom-trigger",
  triggerHook: 0, // 더 작은 값으로 설정 (더 위에 있을 때 시작)
})
  .setTween(ani04_5)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .app-comp-1", 0.9, {
  opacity: 0, // 시작값 0
  delay: 0, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-left-img",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .app-comp-2", 0.9, {
  opacity: 0, // 시작값 0
  delay: 0.3, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-left-img",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .line-1", 0.9, {
  opacity: 0, // 시작값 0
  delay: 0.5, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-left-img",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);



//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .logo-kid-text-1", 0.9, {
  opacity: -1, // 시작값 0
  delay: 0.7,
   // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-right-top",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .app-comp-3", 0.9, {
  opacity: 0, // 시작값 0
  delay: 2, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-left-img",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .line-2", 0.9, {
  opacity: 0, // 시작값 0
  delay: 2.2, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-left-img",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);


//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .habit-icon", 0.9, {
  opacity: 0, // 시작값 0
  delay: 2.3, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-left-img",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------


var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .logo-kid-text-2", 0.9, {
  opacity: 0, // 시작값 0
  delay: 2, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
  // x: "-10vh",
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-left-img",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);


//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-right-top .logo-phone-1", 1, {
  opacity: -1, // 시작값 0
  delay: 0,
  y: "9vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-right-top",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-right-top .logo-phone-2", 1, {
  opacity: -1, // 시작값 0
  delay: 0,
  y: "-9vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-right-top",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from("#component img", 1, {
  opacity: -1, // 시작값 0
  delay: 0,
  y: "11vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#component",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".mockup-1 img", 1, {
  opacity: -1, // 시작값 0
  delay: 0,
  y: "17vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".mockup-1",
  triggerHook: 1,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".mockup-2 img", 1, {
  opacity: -1, // 시작값 0
  delay: 0,
  x: "-17vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".mockup-2",
  triggerHook: 1,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".mockup-3 img", 1, {
  opacity: -1, // 시작값 0
  delay: 0,
  y: "17vw", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".mockup-3",
  triggerHook: 1,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

// var controller = new ScrollMagic.Controller();

// var ani04_1 = gsap.timeline();
// ani04_1.from(".system-bg h1", 1, {
//   opacity: -1, // 시작값 0
//   delay: 0,
//   y: "10vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
// });

// var scene1 = new ScrollMagic.Scene({
//   triggerElement: ".system-bg",
//   triggerHook: 0,
// })
//   .setTween(ani04_1)
//   .addTo(controller);

//-----------------------------------------------------------------



//-----------------------------------------------------------------



//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------
