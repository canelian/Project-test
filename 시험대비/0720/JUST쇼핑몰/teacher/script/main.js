$(function(){
  $('#gnb .depth1 > li').hover(
    function(){
      $(this)
        .children('.depth2')
        .addClass('on');
    },
    function(){
      $(this)
      .children('.depth2')
      .removeClass('on');
    }
  );

  let num = 0;

  function changeSlider(img_num) {
    let img_height = 300 * img_num; 
  
    $('.slider .sliders').css({
      Transform: `translateY(${-img_height}px)`
    })
  }


  setInterval(function(){
    num++;
    if(num > 2){
      num = 0;
    };
    changeSlider(num);
  }, 3000);

  // 공지사항/갤러리 tab 버튼
  $('.tab_buttons .notice-btn').click(function(){
    // 텝 초기화
    $('.tab_contents').removeClass('on');
    // 표시
    $('#notice').addClass('on');
    // $('#gallery').removeClass('on');
  });

  $('.tab_buttons .gallery-btn').click(function(){
    $('.tab_contents').removeClass('on');
    $('#gallery').addClass('on');
    // $('#notice').removeClass('on');
  });

  // 레이어팝업창 생성 및 닫기
  $('.notice-btn').click(function(){
    $('.modal').addClass('on');
  });

  $('.close-btn').click(function(){
    $('.modal').removeClass('on');
  });
});