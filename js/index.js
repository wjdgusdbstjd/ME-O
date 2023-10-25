
//스크롤 위치 알기위한 코드 - 마지막에 지우기

function updateScrollPosition() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const scrollValueElement = document.getElementById("scroll-value");
    scrollValueElement.textContent = scrollPercentage.toFixed(2) + "%";
}

// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", updateScrollPosition);

// 초기 페이지 로드 시 한 번 실행
updateScrollPosition();

//-----------------------------------------------------------------

$(document).ready(function() {
    $("#main .main-right .main-pumi").addClass("show");
});

$(document).ready(function() {
    $("#main .main-right .main-toto").addClass("show");
});

$(document).ready(function() {
    $("#main .main-right .main-ohmong").addClass("show");
});

$(document).ready(function() {
    $("#main .effects .effect-1").addClass("show");
});

$(document).ready(function() {
    $("#main .effects .effect-2").addClass("show");
});

$(document).ready(function() {
    $("#main .effects .effect-3").addClass("show");
});

$(document).ready(function() {
    $("#main .effects .effect-4").addClass("show");
});

$(document).ready(function() {
    $("#main .effects .effect-5").addClass("show");
});

$(document).ready(function() {
    $("#main .effects .effect-6").addClass("show");
});

$(document).ready(function() {
    $("#main .effects .effect-7").addClass("show");
});

$(document).ready(function() {
    $("#main .effects .effect-8").addClass("show");
});

$(document).ready(function() {
    $("#main .effects .effect-9").addClass("show");
});

//-----------------------------------------------------------------

const SEC = 0.5;

function clip_text(dom) {
    const childs = dom.children;
    for (let i = 0; i < childs.length; i++) {
        childs[i].style.animationDelay = `${SEC * i}s`;
        childs[i].classList.add('on');
    }
}

/* ✨ 실행 */
const test = document.getElementById('main-app-text');

setTimeout(function() {
    clip_text(test);
}, 600); // 2초(2000밀리초) 후에 코드 실행


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


//-----------------------------------------------------------------


const SEC2 = 0.5;
let executed = false;

function clip_text(dom) {
    const childs = dom.children;
    for (let i = 0; i < childs.length; i++) {
        childs[i].style.animationDelay = `${SEC2 * i}s`;
        childs[i].classList.add('on2');
    }
}

const test2 = document.getElementById('overview-txt-ani');

function handleScroll() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 3.86 && !executed) {
        clip_text(test2);
        executed = true;
    }
}

// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", handleScroll);

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------