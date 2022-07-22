$(function() {
  /*2가지유형 
    1. 현재 하위 뎁스만(this) 보임
    2. 전체 하위 뎁스 표시
  */
  $('#gnb .depth1 > li').hover(
    // mouseover
    function(){
      $(this).childern('.depth2')
      .addClass('on');
    },
    // mouseout
    function(){
      $(this).childern('.depth2')
      .removeClass('on');
    }
  );
});