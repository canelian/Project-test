/*const menu = document.getElementById("jsMenu");
// menu의 css에서 left의 값을 -300으로 설정해줍니다.
function slideDown () {
  menu.style.left="-300px";
}

// menu의 css에서 left의 값을 0으로 설정해줍니다.
function slideUp() {
  menu.style.left="0";
}

function handleMouseMove(event) {
// console.log(event)
// clientX 속성과 screenX 속성이 어떻게 다른지 파악하시는 것이 중요합니다.
let clientX = event.clientX;
// 커서가 00이상 10안에 있는 clientX 범위에 위치할 때
  if (clientX >= 0 && clientX <= 10) {
    slideUp();
  } else if (clientX > 310) {
    slideDown();
  }
}

function init() {
document.addEventListener("mousemove", handleMouseMove);
}

init();*/

$(function(){
  $('#gnb .depth > li').hover(
    // mouseover
    function(){
      $(this)
        .children('.menu__list')
        .addClass('on');
    },
    // mouseout
    function(){
      $(this)
      .children('.menu__list')
      .removeClass('on');
    }
  );
});