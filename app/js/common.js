$(function() {

$('.formats-slider-2').owlCarousel({
    autoplay: false,
    loop:true,
    margin:0,
    center:true,
    autoWidth:true,
    nav:true,
    items:3,
    navText: ["<span>&#8592;</span>   ","<span>&#8594; </span> "],
    responsive:{
        0:{
            items:1,
             autoWidth:false,
             animateOut: 'fadeOut',
        },
        577:{
            items:3,
        },
    }
});



$('.slide-two').owlCarousel({
    autoplay: false,
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    center:true,
    navText: ["<span>&#8592;</span>   ","<span>&#8594; </span> "],
    responsive:{
        0:{
            items:1
        },
        576: {
            items:2
        },
        768:{
            items:3
        },
        992:{
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
            items:1
        },
        992:{
            items:2
        }
    }
})


});



$('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

$('form button a').on('click' , function (argument) {
    event.preventDefault();
});



$(document).ready(function() {

    $('a.btn-gallery').on('click', function(event) {
        event.preventDefault();
        
        var gallery = $(this).attr('href');
    
        $(gallery).magnificPopup({
      delegate: 'a',
            type:'image',
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');
    });
    
});

$("a[rel='m_PageScroll2id']").mPageScroll2id({
    offset:50
});

    $('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
})
$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});

$('.menu-list a').on('click' , function(e) {
    $('.menu').removeClass('menu_active');
     $('.menu-btn').removeClass('menu-btn_active')
});



   
    if ($(window).width() > 768) {
        
 $(window).scroll(function() {

        var st = $(this).scrollTop();
  
        if (st > 2735) {
            $('.uslugi .img_2').css({
                "padding-top" : "0px"
            });
            $('.uslugi .h3_photo').css({
                "margin-top" : "-30px"
            });
            
$('.uslugi .img_4').css({
                "margin-top" : "50px"
            })
        }
         
      


    });

    } else {}