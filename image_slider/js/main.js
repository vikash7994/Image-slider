jQuery(document).ready(function ($) {

  //variables
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

 $('#slider').css({ width: slideWidth, height: slideHeight });

  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $('#slider ul li:last-child').prependTo('#slider ul');

  function moveLeft() {
      $('#slider ul').animate({
          left: + slideWidth
      }, 300,
       function () {
          $('#slider ul li:last-child').prependTo('#slider ul');
          $('#slider ul').css('left', '');
      }
      );
  };

  function moveRight() {
      $('#slider ul').animate({
          left: - slideWidth
      }, 300, function () {
          $('#slider ul li:first-child').appendTo('#slider ul');
          $('#slider ul').css('left', '');
      });
  };

  $('.control_prev').click(function () {
      moveLeft();
  });

  $('.control_next').click(function () {
      moveRight();
  });

});

document.addEventListener('DOMContentLoaded',init);
function init(){
    let query = window.matchMedia("(max-width:768px)");
    if(query.matches){
        document.querySelector('#slider ul li:last-child').style.display ="none";
    }    
}
