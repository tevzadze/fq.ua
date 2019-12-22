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
    autoplay: false,
    loop:true,
    margin:0,
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

$('.slide-three').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


});

$('.item').on('click', function(e) {
  $('.item').children().removeClass('active');
  $('.formatsTextP').fadeOut(0);
  $('#'+e.target.className).fadeIn(1300);
  $(e.target).addClass('active');
});
    