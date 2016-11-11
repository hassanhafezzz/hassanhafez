$(document).ready(function(){
  $(function(){
    $("#typed").typed({
        strings: [" UI/UX designer. "," front-end engineer. ", " web designer. "," freelancer. ", " researcher."," CAT Reloaded member."," blogger."," longlife learner."],
        contentType: 'text',
        startDelay: 2000,
        typeSpeed: 50,
        backDelay: 400,
        loop: true
    });
  });

  $('.sender').click(function(){
    $('.form').slideDown(800);
    $('.all-content').slideUp(700);
    $(".lines").hide();
    $(".xdd").hide();
    $(".dd").hide();
    $(".x").hide();
    $(".bolt").hide();
    $(".head svg").hide();
  });

  $('.close').click(function(){
    $('.form').slideUp(800);
    $('.all-content').slideDown(700);
    $(".head svg").show();
    if (matchMedia) {
      var mq = window.matchMedia("(min-width: 991px)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }
   // media query change
   function WidthChange(mq) {
     if (mq.matches) {
       // window width is at least 991px
       $(".lines").show();
       $(".xdd").show();
       $(".dd").show();
       $(".x").show();
       $(".bolt").show();
     }
   }
});

  $('.form-input input, .form-input textarea').focus(function(){
   $(this).parent().find('.form-text').animate({fontSize:'11px',marginLeft:'-85px',fontWeight:'800'},100)
  });
  $('.form-input input, .form-input textarea').blur(function(){
   if($(this).val()=='') {
   $(this).parent().find('.form-text').animate({fontSize:'14px',marginLeft:'0px',fontWeight:'400'},100)}
  });


});

function toggleMenu() {
    $("#menu").toggleClass("responsive");
};
