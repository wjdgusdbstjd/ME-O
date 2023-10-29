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

const SEC2 = 0.5;
let executing = false;

function clip_text(dom) {
  const childs = dom.children;
  for (let i = 0; i < childs.length; i++) {
    childs[i].style.animationDelay = `${SEC2 * i}s`;
    childs[i].classList.add("on2");
  }
}

function unclip_text(dom) {
  const childs = dom.children;
  for (let i = 0; i < childs.length; i++) {
    childs[i].classList.remove("on2");
  }
}

const test2 = document.getElementById("overview-txt-ani");

function handleScroll() {
  const scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  if (scrollPercentage >= 3.31 && scrollPercentage <= 8.73) {
    if (!executing) {
      executing = true;
      clip_text(test2);

      // "overview-circle-2" 관련 코드를 제거

      // 이 부분에서 동작을 빠르게 시작합니다.
      // 예를 들어, setTimeout을 사용하여 딜레이를 줄일 수 있습니다.
      // 아래는 100밀리초(0.1초) 딜레이를 줄어서 동작을 빠르게 시작하는 예시입니다.
      setTimeout(() => {
        executing = false;
      }, 100);
    }
  } else {
    unclip_text(test2);
    executing = false;

    // "overview-circle-2" 관련 코드를 제거
  }
}

// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", handleScroll);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".overview .overview-left", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
  y: "30vh", // 오른쪽으로 이동 (값은 원하는 만큼 조절)
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
  x: "-30vh", // 오른쪽으로 이동 (값은 원하는 만큼 조절)
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
ani04_1.from("#identity .identity-pumi", 0.5, {
  opacity: 0, // 시작값 0
  delay: 0,
  marginTop: 150, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
  y: "10vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
  y: "10vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
ani04_1.from(".color-top .purple", 1, {
  opacity: 0, // 시작값 0
  delay: 0,
  x: "-20vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
  x: "-20vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
  x: "-20vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
    x: "-20vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
  ani04_4.from(".color-all .color-bottom", 1, {
    opacity: 0, // 시작값 0
    delay: 0,
    y: "20vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
  });
  
  var scene5 = new ScrollMagic.Scene({
    triggerElement: ".color-top",
    triggerHook: 0.5,
  })
    .setTween(ani04_5)
    .addTo(controller);

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .app-comp-1", 1, {
  opacity: 0, // 시작값 0
  delay: 0.4, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
ani04_1.from(".logo-left-img .app-comp-2", 1, {
  opacity: 0, // 시작값 0
  delay: 0.6, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-left-img",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------

//-----------------------------------------------------------------

var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from(".logo-left-img .line-1", 1, {
  opacity: 0, // 시작값 0
  delay: 0.9, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
ani04_1.from(".logo-left-img .app-comp-3", 1, {
  opacity: 0, // 시작값 0
  delay: 2.7, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
ani04_1.from(".logo-left-img .line-2", 1, {
  opacity: 0, // 시작값 0
  delay: 2.9, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
ani04_1.from(".logo-left-img .habit-icon", 1, {
  opacity: 0, // 시작값 0
  delay: 3, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
  y: "15vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
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
  y: "-15vh", // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".logo-right-top",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);

//-----------------------------------------------------------------


//-----------------------------------------------------------------


//-----------------------------------------------------------------


//-----------------------------------------------------------------


//-----------------------------------------------------------------


//-----------------------------------------------------------------


//-----------------------------------------------------------------


//-----------------------------------------------------------------