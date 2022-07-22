$(function(){
let num = 0;

  function changeSlider(img_num) {
    let img_height = 1200 * img_num; 
  
    $('.slider .sliders').css({
      Transform: `translateX(${-img_height}px)`
    })
  }

  setInterval(function(){
    num++;
    if(num > 2){
      num = 0;
    };
    changeSlider(num);
  }, 5000);	

  
});

$(function(){

  $('#gnb #btn-open').click(function(){
    $('#gnbhidden').addClass('on');
  });


  $('#gnbhidden > #btn-close').click(function(){
    $('#gnbhidden').removeClass('on');
  });
});