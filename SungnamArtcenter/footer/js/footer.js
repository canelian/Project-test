$(document).ready(function(){
  //instagram hover
  $("#insta").hover(
      function() {$(this).attr("src","images/instagram_2.png");
      },
      function() {$(this).attr("src","images/instagram.png"); 
  });
  //youtube hover
  $("#youtube").hover(
      function() {$(this).attr("src","images/youtube_2.png");
      },
      function() {$(this).attr("src","images/youtube.png"); 
  });
  //kakao hover
  $("#kakaotalk").hover(
      function() {$(this).attr("src","images/kakao_2.png");
      },
      function() {$(this).attr("src","images/kakao.png"); 
  });
  //naver hover
  $("#naver").hover(
      function() {$(this).attr("src","images/navrer_1.png");
      },
      function() {$(this).attr("src","images/navrer.png"); 
  });
});