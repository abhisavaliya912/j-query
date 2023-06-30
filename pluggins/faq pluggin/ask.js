$(function () {
  var Speed = 800;
  $('.questions dd').hide();
  $('.questions dt').click(function () {
    $(this).next(".questions dd").slideToggle(Speed);
    $(this).toggleClass("expanded_img");
  });
    $('.open').click(function (){
        $('.questions dd').slideToggle('.questions dt');
        $('.questions dt').toggleClass("expanded_img");
        $('.open').val('Open All');
        $('.open').toggleClass('close');
        $('.close').val('Close All').removeClass('.close');
    });
});