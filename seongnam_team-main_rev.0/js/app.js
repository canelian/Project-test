// 헤더 메뉴
$(function(){
        $('#header nav .gnb > li').hover(function(){
            $(this).find('.sub').stop().slideDown();
        },function(){
            $(this).find('.sub').stop().slideUp();
        });
});

// 스크롤 업다운감지해서 헤더 숨기기
$(window).bind('mousewheel', function (event) {
    if (event.originalEvent.wheelDelta >= 0) {
        // console.log('Scroll up');
        $('#header').css('transition-duration', '0.5s').css('transform', 'translateY(0)');
    } else {
        // console.log('Scroll down');
        $('#header').css('transition-duration', '0.5s').css('transform', 'translateY(-100%)');
    }
});

// 토글메뉴버튼 애니메이션
$(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("active");
    });
    
    $('#toggle-menu-btn').click(function(){
        $('#toggle-menu').toggleClass('on');
    })
});

// 토글메뉴의 메뉴 슬라이드 애니메이션
$(function(){
    $('#toggle-gnb > li').hover(function(){
        $(this).find('.sub').stop().slideDown();
    },function(){
        $(this).find('.sub').stop().slideUp();
    });
});


// 스크롤좌표값 구하기
$(function () {
    $(window).scroll(function () {
        // scrollposition이 현재 스크롤 좌표임
        var scrollposition = $(window).scrollTop();
        console.log(scrollposition);


        // 300 이 넘으면
        if (scrollposition >= 300) {
            $('.left-curtain').css('transition-duration', '3s').css('transform',
                'translateX(-100%)');
            $('.right-curtain').css('transition-duration', '3s').css('transform',
                'translateX(100%)');
        } else {
            $('.left-curtain').css('transition-duration', '3s').css('transform',
                'translateX(0)');
            $('.right-curtain').css('transition-duration', '3s').css('transform',
                'translateX(0)');
        }
    });
});

// #show swiper
$(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
});
