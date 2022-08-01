$(function(){
  $('#main-header .container > #toggle-btn').hover(
    function(){
      $(this)
        .children('#gnb')
        .addClass('on');
        console.log(this);
    },
    function(){
      $(this)
      .children('#gnb')
      .removeClass('on');
      console.log(this);
    }
  );
});