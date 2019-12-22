$(function() {
  $('.formatsTextP').fadeOut(0);
  $('#item1').fadeIn(1000);

$('.slide-one').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
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

$('.slide-two').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:false,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


});

$('.item').on('click', function(e) {
  console.log(e.target.className);
  $('.formatsTextP').fadeOut(0);
  $('#'+e.target.className).fadeIn(1000);
});
    