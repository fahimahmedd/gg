$(function(){
  $(document).ready(function(){
    $(".appointment_top").click(()=>{
      $('#appointment').toggleClass('appointmentNewClass3')
    })
  });
  $(function(){

    $("#example").htmlNumberSpinner();
  
  });
  $(function(){

    $("#example2").htmlNumberSpinner();
  
  });
// Banner Slider
$('.banner_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  arrows:true,
  autoplay: true, 
  autoplaySpeed: 4000,
  speed: 800,
  dots:false,
  prevArrow:'<i class="fas fa-chevron-left Prev"></i>', 
  nextArrow:'<i class="fas fa-chevron-right Next"></i>',
  responsive: [
    {
      breakpoint: 968,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow:1
      }
    }
  ]
});
// Service Slider
$('.service_slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll:1,
  arrows:true,
  autoplay: true, 
  autoplaySpeed: 4000,
  speed: 800,
  dots:false,
  prevArrow:'<i class="fas fa-chevron-left Prev"></i>', 
  nextArrow:'<i class="fas fa-chevron-right Next"></i>',
  responsive: [
    {
      breakpoint: 968,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow:1
      }
    }
  ]
});
   // Back to Top 
   var btn = $('.backtotop');
   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
 


// Ofcan Side bar dropper
var list1 = $('.js-dropdown-list1');
var link1 = $('.js-link1');
link1.click(function(e) {
  e.preventDefault();
  list1.slideToggle(200);
}); 


  // countup
  $('.counter').countUp();

});