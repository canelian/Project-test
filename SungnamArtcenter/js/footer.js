$(document).ready(function(){
  //instagram hover
  $("#insta").hover(
      function() {$(this).attr("src","img/instagram_2.png");
      },
      function() {$(this).attr("src","img/instagram.png"); 
  });
  //youtube hover
  $("#youtube").hover(
      function() {$(this).attr("src","img/youtube_2.png");
      },
      function() {$(this).attr("src","img/youtube.png"); 
  });
  //kakao hover
  $("#kakaotalk").hover(
      function() {$(this).attr("src","img/kakao_2.png");
      },
      function() {$(this).attr("src","img/kakao.png"); 
  });
  //naver hover
  $("#naver").hover(
      function() {$(this).attr("src","img/navrer_1.png");
      },
      function() {$(this).attr("src","img/navrer.png"); 
  });
});