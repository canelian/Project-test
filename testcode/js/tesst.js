$(document).ready(function(){
  //instagram hover
  $("#insta").hover(
      function() {$(this).attr("src","../성남아트센터/img/icons_sns/instagram_2.png");
      },
      function() {$(this).attr("src","../성남아트센터/img/icons_sns/instagram.png"); 
  });
  //youtube hover
  $("#youtube").hover(
      function() {$(this).attr("src","../성남아트센터/img/icons_sns/youtube_2.png");
      },
      function() {$(this).attr("src","../성남아트센터/img/icons_sns/youtube.png"); 
  });
  //kakao hover
  $("#kakaotalk").hover(
      function() {$(this).attr("src","../성남아트센터/img/icons_sns/kakao_2.png");
      },
      function() {$(this).attr("src","../성남아트센터/img/icons_sns/kakao.png"); 
  });
  //naver hover
  $("#naver").hover(
      function() {$(this).attr("src","../성남아트센터/img/icons_sns/navrer_1.png");
      },
      function() {$(this).attr("src","../성남아트센터/img/icons_sns/navrer.png"); 
  });
});