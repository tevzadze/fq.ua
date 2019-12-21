$(function() {
  $('.formatsTextP').fadeOut(0);
  $('#item1').fadeIn(1000);

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

});

$('.item').on('click', function(e) {
  console.log(e.target.className);
  $('.formatsTextP').fadeOut(0);
  $('#'+e.target.className).fadeIn(1000);
});
    