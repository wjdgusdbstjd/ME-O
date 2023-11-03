//토글 누르면 섹션 이동
for (var i = 1; i <= 2; i++) {
    //console.log(i);
    document.getElementById("menu" + i).onmouseup = function () {
        menuInit();
        document.getElementById("service" + this.id.slice(4, 5)).style.display =
            "block";
    };
}

var menuInit = function () {
    console.log("메뉴 초기화");
    document.getElementById("service1").style.display = "none";
    document.getElementById("service2").style.display = "none";
};

const menuItems = document.querySelectorAll("#flow_menu li"); //id값이 flow_menu인 콘텐츠에서 li(리스트)선택

menuItems.forEach((item) => {
    //각 리스트 아이템에 대한 이벤트 리스너 등록하기
    item.addEventListener("click", function () {
        menuItems.forEach((item) => {
            item.classList.remove("selected"); // 모든 메뉴 아이템의 배경색을 초기화한다.
        });
        this.classList.add("selected"); // 클릭한 메뉴 아이템의 배경색상을 변경한다.
    });
});

//////////////////////


// const menuItems2 = document.querySelectorAll("#flow_menu li");
//         const sections = document.querySelectorAll(".section");
//         const section2 = document.getElementById("section2");

//         window.addEventListener("scroll", function () {
//             const scrollPosition = window.scrollY;
//             if (scrollPosition >= 0.59 * section1.offsetHeight) {
//                 section2.classList.add("fixed");
//             } else {
//                 section2.classList.remove("fixed");
//             }
//         });

//         menuItems2.forEach((item, index) => {
//             item.addEventListener("click", function (e) {
//                 e.preventDefault();
//                 menuItems2.forEach((item) => {
//                     item.classList.remove("selected");
//                 });
//                 this.classList.add("selected");
//                 sections.forEach((section) => {
//                     section.style.display = "none";
//                 });
//                 sections[index].style.display = "block";
//             });
//         });
$.fn.Scrolling = function(obj, tar) {
    var _this = this;
    var targetElement = $(tar);
    var isFixed = false;

    $(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    var targetTop = targetElement.offset().top;
    var targetBottom = targetTop + targetElement.height(); // 섹션의 마지막 부분

    if (windowTop >= targetTop && !isFixed) {
        _this.addClass("fixed");

        // 처음에 숨겨진 요소를 표시하고 스르륵 나타나는 애니메이션 추가
        _this.show().css({ opacity: 0, transform: "scale(1)" }).animate({ opacity: 1, transform: "scale(3)" }, 300);

        isFixed = true;
    } else if (windowTop < targetTop && isFixed) {
        _this.removeClass("fixed");
        _this.css("display", "none");
        isFixed = false;
    }

    // 추가: 스크롤 이벤트가 끝날 때 섹션이 끝나면 픽스 클래스를 제거
    var windowBottom = windowTop + $(window).height();
    if (windowBottom >= targetBottom && isFixed) {
        _this.removeClass("fixed");
        _this.css("display", "none");
        isFixed = false;
    }

    // 스크롤 위치가 섹션 밖으로 나가면 숨기기
    if (windowTop > targetBottom || windowBottom < targetTop) {
        _this.hide();
        _this.css("display", "none");
    }
    });
};

// Scroll 함수를 호출할 때 #toggle-wrap을 기준으로 하도록 변경
$("#toggle-wrap").Scrolling($("#toggle-wrap").offset().top, "#service");