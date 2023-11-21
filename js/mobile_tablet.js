//토글 누르면 섹션 이동
for (var i = 1; i <= 2; i++) {
    //console.log(i);
    document.getElementById("menu" + i).onmouseup = function () {
        menuInit();
        document.getElementById("service" + this.id.slice(4, 5)).style.display =
            "block";
    };
}
// 토글 누르면 섹션 맨 위로 올라가는 스크립트 
document.querySelector('a[href="#service1"]').addEventListener('click', function (event) {
    event.preventDefault();
    const targetElement = document.querySelector('#service1');
    if (targetElement) {
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
    }
});
document.querySelector('a[href="#service2"]').addEventListener('click', function (event) {
    event.preventDefault();
    const targetElement = document.querySelector('#service2');
    if (targetElement) {
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
    }
});

var menuInit = function () {
    console.log("메뉴 초기화");
    document.getElementById("service1").style.display = "none";
    document.getElementById("service2").style.display = "none";
};

const menuItems = document.querySelectorAll("#flow_menu li");
menuItems.forEach((item) => {
    item.addEventListener("click", function () {
        menuItems.forEach((item) => {
            item.classList.remove("selected");
        });
        this.classList.add("selected");
    });
});

//토글 버튼 생겼다가 사라지는 스크립트
$.fn.Scrolling = function(obj, tar) {
    var _this = this;
    var targetElement = $(tar);
    var isFixed = false;

    $(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    var targetTop = targetElement.offset().top;
    var targetBottom = targetTop + targetElement.height();
    if (windowTop >= targetTop && !isFixed) {
        _this.addClass("fixed");
        _this.show().css({ opacity: 0, transform: "scale(1)" }).animate({ opacity: 1, transform: "scale(3)" }, 300);

        isFixed = true;
    } else if (windowTop < targetTop && isFixed) {
        _this.removeClass("fixed");
        _this.css("display", "none");
        isFixed = false;
    }
    var windowBottom = windowTop + $(window).height();
    if (windowBottom >= targetBottom && isFixed) {
        _this.removeClass("fixed");
        _this.css("display", "none");
        isFixed = false;
    }
    if (windowTop > targetBottom || windowBottom < targetTop) {
        _this.hide();
        _this.css("display", "none");
    }
    });
};

$("#toggle-wrap").Scrolling($("#toggle-wrap").offset().top, "#service");
//--home
$(document).ready(function () {
    var $start = $(".mobile-start .start-img");
    var $start2 = $(".tablet-start .start-img");
    
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.5;
        var threshold1 = 0.48;
        var threshold2 = 0.54;

        if (scrollPosition / documentHeight >= threshold) {
            $start.addClass("shows");
            $start2.addClass("shows");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("shows");
            $start2.removeClass("shows");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("shows");
            $start2.removeClass("shows");
        }
    });
});
//컨텐츠
//start
$(document).ready(function () {
    var $line = $(".mobile-start .line1,.tablet-start .line1")

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.5;//59
        var threshold1 = 0.48;
        var threshold2 = 0.58;

        if (scrollPosition / documentHeight >= threshold) {
            //$start.addClass("backInDown");
            $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            //$start.removeClass("backInDown");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            //$start.removeClass("backInDown");
            $line.removeClass("liness");
        }
    });
}); 
//service_content 타이핑
$(document).ready(function () {
    var $start = $(".mobile-start .service_content,.tablet-start .service_content");
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.49;
        var threshold1 = 0.46;
        var threshold2 = 0.52;

        if (scrollPosition / documentHeight >= threshold) {
            $start.addClass("backInDown");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
    });
});
//home
$(document).ready(function () {
    var $start = $(".mobile-home .service_content,.tablet-home .service_content");
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.56;//59
        var threshold1 = 0.55;
        var threshold2 = 0.63;

        if (scrollPosition / documentHeight >= threshold) {
                $start.addClass("backInDown");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
    });
});
//bmi
$(document).ready(function () {
    var $start = $(".mobile-bmi .service_content,.tablet-bmi .service_content");
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.62;
        var threshold1 = 0.6;
        var threshold2 = 0.7;

        if (scrollPosition / documentHeight >= threshold) {
                $start.addClass("backInDown");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
    });
});
//diary
$(document).ready(function () {
    var $start = $(".mobile-diary .service_content");
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.68;
        var threshold1 = 0.67;
        var threshold2 = 0.75;

        if (scrollPosition / documentHeight >= threshold) {
                $start.addClass("backInDown");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
    });
});
//teach
$(document).ready(function () {
    var $start = $(".mobile-teach .service_content");
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.75;
        var threshold1 = 0.73;
        var threshold2 = 0.83;

        if (scrollPosition / documentHeight >= threshold) {
                $start.addClass("backInDown");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
    });
});
//set
$(document).ready(function () {
    var $start = $(".mobile-set .service_content");
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.82;
        var threshold1 = 0.8;
        var threshold2 = 0.87;

        if (scrollPosition / documentHeight >= threshold) {
                $start.addClass("backInDown");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
    });
});
//
$(document).ready(function () {
    var $start = $(".tablet-play .service_content");
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.69;
        var threshold1 = 0.67;
        var threshold2 = 0.8;

        if (scrollPosition / documentHeight >= threshold) {
                $start.addClass("backInDown");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
    });
});
//teach
$(document).ready(function () {
    var $start = $(".tablet-teach .service_content");
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.79;
        var threshold1 = 0.77;
        var threshold2 = 0.88;

        if (scrollPosition / documentHeight >= threshold) {
                $start.addClass("backInDown");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("backInDown");
        }
    });
});

///////플로우 이미지
$(document).ready(function () {
    var $start = $(".mobile-flow .flows img");
    var documentHeight = $(document).height();
    var threshold = 0.53;
    var threshold1 = 0.5158;
    var threshold2 = 0.55;

    var currentIndex = 0;

    function addClassWithDelay() {
        if (currentIndex < $start.length) {
            $start.eq(currentIndex).addClass("bounceInDown");
            currentIndex++;

            if (currentIndex < $start.length) {
                setTimeout(addClassWithDelay, 100);
            }
        }
    }

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition / documentHeight >= threshold && currentIndex === 0) {
            addClassWithDelay();
        }

        if (threshold2 <= scrollPosition / documentHeight) {
            $start.removeClass("bounceInDown");
            currentIndex = 0;
        }

        if (threshold1 >= scrollPosition / documentHeight) {
            $start.removeClass("bounceInDown");
            currentIndex = 0;
        }
    });
});
$(document).ready(function () {
    var $start = $(".tablet-flow .flows img");
    var documentHeight = $(document).height();
    var threshold = 0.53;
    var threshold1 = 0.52;
    //var threshold2 = 0.58;

    var currentIndex = 0;

    function addClassWithDelay() {
        if (currentIndex < $start.length) {
            $start.eq(currentIndex).addClass("bounceInDown");
            currentIndex++;

            if (currentIndex < $start.length) {
                setTimeout(addClassWithDelay, 100);
            }
        }
    }

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition / documentHeight >= threshold && currentIndex === 0) {
            addClassWithDelay();
        }

        /*if (threshold2 <= scrollPosition / documentHeight) {
            $start.removeClass("bounceInDown");
            currentIndex = 0;
        }*/

        if (threshold1 >= scrollPosition / documentHeight) {
            $start.removeClass("bounceInDown");
            currentIndex = 0;
        }
    });
});
$(document).ready(function () {
    var $screen1 = $(".mobile-flow .particle");
    var $screen2 = $(".tablet-flow .particle");

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.53;
        var threshold1 = 0.52;
        var threshold2 = 0.56;

        if (scrollPosition / documentHeight >= threshold) {
            $screen1.addClass("particles");
            $screen2.addClass("particles2");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1.removeClass("particles");
            $screen2.removeClass("particles2");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1.removeClass("particles");
            $screen2.removeClass("particles2");
        }
    });
});
//------------------------화면들 효과------------------------------------------
//---home
$(document).ready(function () {
    var $start = $("#mobile-pumi");
    var $start2 = $("#mobile-toto");
    var $start3 = $("#mobile-ohmong");
    var $screen1 = $(".mobile-home_left_img img,.bmiimgs img")
    var $screen2 = $(".mobile-home #mobile-text")
    var $screen3 = $("#mobile-un")
    var $line = $(".mobile-home .mobile_line img,.mobile-home .mobile_line2 img")
    
    
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.575;//59
        var threshold1 = 0.55;
        var threshold2 = 0.63;

        if (scrollPosition / documentHeight >= threshold) {
                $start.addClass("bounce");
                $start2.addClass("bounce");
                $start3.addClass("bounce");
        }  
        if (0.61<=scrollPosition / documentHeight) { 
            $start.removeClass("bounce");
            $start2.removeClass("bounce");
            $start3.removeClass("bounce");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("bounce");
            $start2.removeClass("bounce");
            $start3.removeClass("bounce");
        }
        if (scrollPosition / documentHeight >= threshold) {
                $screen1.addClass("fadeIn");
                $screen2.addClass("flipInX");
                $screen3.addClass("fadeIn");
                $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen2.removeClass("flipInX");
            $screen3.removeClass("fadeIn");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen2.removeClass("flipInX");
            $screen3.removeClass("fadeIn");
            $line.removeClass("liness");
        }
    })
});
$(document).ready(function () {
    var $start = $("#tablet-pumi");
    var $start2 = $("#tablet-toto");
    var $start3 = $("#tablet-ohmong");
    var $screen1 = $(".tablet-home_left_img img")
    var $screen2 = $(".tablet-home #tablet-text")
    var $line = $(".tablet-home .tablet_line img,.tablet-home .tablet_line4 img")
    
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.57;
        var threshold1 = 0.53;
        var threshold2 = 0.63;

        if (scrollPosition / documentHeight >= threshold) {
                $start.addClass("bounce");
                $start2.addClass("bounce");
                $start3.addClass("bounce");
                $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $start.removeClass("bounce");
            $start2.removeClass("bounce");
            $start3.removeClass("bounce");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $start.removeClass("bounce");
            $start2.removeClass("bounce");
            $start3.removeClass("bounce");
            $line.removeClass("liness");
        }

        if (scrollPosition / documentHeight >= threshold) {
                $screen1.addClass("fadeIn");
                $screen2.addClass("flipInX");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen2.removeClass("flipInX");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen2.removeClass("flipInX");
        }
    });
});
//--------bmi
$(document).ready(function () {
    var $screen1 = $(".mobile-bmi_left_img img");
    var $screen1a = $(".mobile-bmi_right_down_line img");
    var $screen2 = $(".mobile-bmi #mobile-text,.tablet-bmi #tablet-text")
    var $screen2a = $(".tablet-bmi_left_img img,.tablet-bmi_img");
    var $line = $(".mobile-bmi .mobile_line img,.mobile-bmi .mobile_line2 img")
    var $line1 = $(".tablet-bmi .tablet_line img")

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.64;
        var threshold1 = 0.6;
        var threshold2 = 0.7;

        if (scrollPosition / documentHeight >= threshold) {
            $screen1.addClass("fadeIn");
            $screen1a.addClass("fadeIn");
            $screen2.addClass("flipInX");
            $screen2a.addClass("fadeIn");
            $line.addClass("liness");
            $line1.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen1a.removeClass("fadeIn");
            $screen2.removeClass("flipInX");
            $screen2a.removeClass("fadeIn");
            $line.removeClass("liness");
            $line1.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen1a.removeClass("fadeIn");
            $screen2.removeClass("flipInX");
            $screen2a.removeClass("fadeIn");
            $line.removeClass("liness");
            $line1.removeClass("liness");
        }
    });
});

//--------mobile-다이어리
$(document).ready(function () {
    var $screen1 = $(".mobile-diary_left_img img,.mobile-diary_right img");
    var $screen1a = $(".mobile-diary #mobile-text");
    var $line = $(".mobile-diary .mobile_line img,.mobile-diary .mobile_line2 img")

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.71;
        var threshold1 = 0.67;
        var threshold2 = 0.75;

        if (scrollPosition / documentHeight >= threshold) {
            $screen1.addClass("fadeIn");
            $screen1a.addClass("flipInX");
            $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen1a.removeClass("flipInX");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen1a.removeClass("flipInX");
            $line.removeClass("liness");
        }
    });
});
//--------mobile-강의
$(document).ready(function () {
    var $screen1 = $(".mobile-teach_left_img img,.mobile-teach_right_down_line img");
    var $screen1a = $(".mobile-teach #mobile-text");
    var $line = $(".mobile-teach .mobile_line img,.mobile-teach .mobile_line2 img")

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.775;
        var threshold1 = 0.73;
        var threshold2 = 0.83;

        if (scrollPosition / documentHeight >= threshold) {
            $screen1.addClass("fadeIn");
            $screen1a.addClass("flipInX");
            $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen1a.removeClass("flipInX");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen1a.removeClass("flipInX");
            $line.removeClass("liness");
        }
    });
});
//--------mobile-설정
$(document).ready(function () {
    var $screen1 = $(".mobile-set_under #mobile-set_img");  
    var $line = $(".mobile-set .mobile_line img,.mobile-set .mobile_line2 img")  
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.83;
        var threshold1 = 0.8;
        var threshold2 = 0.87;

        if (scrollPosition / documentHeight >= threshold) {
            $screen1.addClass("fadeIn");
            $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $line.removeClass("liness");
        }
    });
});
//--------tablet-놀이
$(document).ready(function () {
    var $screen1 = $(".tablet-play_up img");
    var $screen1a = $(".tablet-play_down1 #play-wrap");
    var $screen2a = $(".tablet-play_down2 #play-wrap");
    var $screen2 = $(".tablet-play_down2_content #tablet-text");
    var $screen2b = $(".tablet-play_down1_content #tablet-text");
    var $line = $(".tablet-play_line img")

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.7;
        var threshold1 = 0.67;
        var threshold2 = 0.8;

        if (scrollPosition / documentHeight >= threshold) {
            $screen1.addClass("fadeIn");
            $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $line.removeClass("liness");
        }
    });
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.72;
        var threshold1 = 0.67;
        var threshold2 = 0.8;

        if (scrollPosition / documentHeight >= threshold) {
            $screen1a.addClass("fadeIn");
            $screen2b.addClass("flipInX");
            $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1a.removeClass("fadeIn");
            $screen2b.removeClass("flipInX");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1a.removeClass("fadeIn");
            $screen2b.removeClass("flipInX");
            $line.removeClass("liness");
        }
    });
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.745;
        var threshold1 = 0.67;
        var threshold2 = 0.8;

        if (scrollPosition / documentHeight >= threshold) {
            $screen2a.addClass("fadeIn");
            $screen2.addClass("flipInX");
            $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen2a.removeClass("fadeIn");
            $screen2.removeClass("flipInX");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen2a.removeClass("fadeIn");
            $screen2.removeClass("flipInX");
            $line.removeClass("liness");
        }
    });
});
//--------tablet-수업
$(document).ready(function () {
    var $screen1 = $(".tablet-teach_left_img img,.tablet-teach_img");
    var $screen1a = $(".tablet-teach #tablet-text");
    var $line = $(".tablet-teach .tablet_line img,tablet-teach .tablet_line2 img")

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var documentHeight = $(document).height();
        
        var threshold = 0.805;
        var threshold1 = 0.77;
        var threshold2 = 0.88;

        if (scrollPosition / documentHeight >= threshold) {
            $screen1.addClass("fadeIn");
            $screen1a.addClass("flipInX");
            $line.addClass("liness");
        }  
        if (threshold2<=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen1a.removeClass("flipInX");
            $line.removeClass("liness");
        }
        if (threshold1>=scrollPosition / documentHeight) { 
            $screen1.removeClass("fadeIn");
            $screen1a.removeClass("flipInX");
            $line.removeClass("liness");
        }
    });
});