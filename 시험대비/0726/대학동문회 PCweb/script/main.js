$(function(){
  $('#gnb #dept1 > .pointer').hover(
    function(){
      $(this)
        .children('.dept2')
        .addClass('on');
        console.log(this);
    },
    function(){
      $(this)
      .children('.dept2')
      .removeClass('on');
      console.log(this);
    }
  );

  
  let num = 0;

  function changeSlider(img_num) {
    let img_height = 350 * img_num; 
  
    $('.slider .sliders').css({
      Transform: `translateY(${-img_height}px)`
    });
  }

  setInterval(function(){
    num++;
    if(num > 2){
      num = 0;
    };
    changeSlider(num);
  }, 5000);

  $(function(){
    let anum = 0;

    function changeSlider(img_num) {
      let img_height = 111 * img_num; 
    
      $('.partslider .partsliders').css({
        Transform: `translateY(${-img_height}px)`
      });
    }

    setInterval(function(){
      anum++;
      if(anum > 1){
        anum = 0;
      };
      changeSlider(anum);
    }, 4000);
  });
});
