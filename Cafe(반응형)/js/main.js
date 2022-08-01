$(function(){
  // 모바일 토글 메뉴
  // #toggle click하면 nav가 toggle됨(toggleClass)
  $('#toggle').click(function(){
    $('header nav').toggleClass('on');
  });

  // slide down 효과로 수정해 보세요(css에서.)
  $('#toggle').click(function(){
    $(this).find('nav').stop().slideToggle();
  });
});