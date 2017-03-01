var button0TimeFadeIn = 1000;
var button1TimeFadeIn = 700;

function main(){
  $('.title').hide();
  $('.title').fadeIn(button0TimeFadeIn);


  $('.button0').hide();
  $('.button0').fadeIn(button0TimeFadeIn);


    $('.media').hide();
    $('.content').hide();


    $('.button0').on('click',function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle(button1TimeFadeIn);
  });

  $('.button1').on('click',function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle(button1TimeFadeIn);
  });
}

$(document).ready(main);