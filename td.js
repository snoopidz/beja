$(document).ready(function(){


//stiky
$('.stiky').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  variableWidth: false,
  dots: false,
  rtl: true,
  nextArrow: '<i class="fa fa-chevron-right bt nxt"></i>',
  prevArrow: '<i class="fa fa-chevron-left bt prv"></i>',
  responsive: [
  {
    breakpoint: 728,
    settings: {
      centerPadding: false,
      slidesToShow: 1,
    }
  },
  ]
});

//td_match
$('.mlist').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  centerMode: false,
  variableWidth: false,
  adaptiveHeight: false,
  centerPadding: '40px',
  dots: false,
  rtl: true,
  nextArrow: '<i class="fa fa-arrow-right bt nxt"></i>',
  prevArrow: '<i class="fa fa-arrow-left bt prv"></i>',
  responsive: [
  {
    breakpoint: 728,
    settings: {
      centerPadding: '20px',
      slidesToShow: 2,
    }
  },
  ]
});


//slider
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  rtl:true,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: '<i class="fa fa fa-arrow-left bt nxt"></i>',
  prevArrow: '<i class="fa fa fa-arrow-right bt prv"></i>',
});





// Last News 
$(".info-txt").hover(function(){

  h1 = parseInt($(this).find(".info-txt-titre").width());
  h2 = parseInt($(this).find("a").width());
  rightAnimation = (h1 - h2) + 45;
  leftAnimation = (h1 - h2) + 45;
    //alert(rightAnimation);
    if(rightAnimation <= 45){
      $(this).find(".info-txt-titre").stop().animate({ right: rightAnimation }, 1400 );   

    }
    $(".info-txt").stop().animate({ opacity: 0.4 }, 200 );
    $(this).stop().animate({ opacity: 1 }, 200 );
  },function(event){
    var direction;
    $(this).find(".info-txt-titre").stop().animate({ right: "55px" }, 1400 );   

    $(".info-txt").stop().animate({ opacity: 1 }, 200 );
  });


//glry
$('.glr-for').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: false,
  dots: true,
  rtl: true,
  nextArrow: '<i class="fa fa-arrow-right bt nxt"></i>',
  prevArrow: '<i class="fa fa-arrow-left bt prv"></i>',
});

// Scroll Box
$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default        
$("#scrollbox .lastn").mCustomScrollbar({theme:"dark"});

//td_match
$('.main_content .secnews .crsl_news').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  variableWidth: false,
  adaptiveHeight: false,
  dots: false,
  rtl: true,
  nextArrow: '<i class="fa fa-chevron-right bt nxt"></i>',
  prevArrow: '<i class="fa fa-chevron-left bt prv"></i>',
  responsive: [
  {
    breakpoint: 728,
    settings: {
      centerPadding: false,
      slidesToShow: 1,
    }
  },
  ]
});
//td_match sidebar
$('.sidebar .secnews .crsl_news').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: false,
  adaptiveHeight: false,
  dots: false,
  rtl: true,
  nextArrow: '<i class="fa fa-chevron-right bt nxt"></i>',
  prevArrow: '<i class="fa fa-chevron-left bt prv"></i>',
});

// Scroll Box
$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default        
$(".main_video .snd").mCustomScrollbar({theme:"light"});


// Active Videos Item
$(".ap_single_live #simple-tabs .tabs li").click(function () {
  $(".ap_single_live #simple-tabs .tabs li").removeClass("active");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).addClass("active");   
  });

// Active live li
$(".main_video .snd li").click(function () {
  $(".main_video .snd li").removeClass("active");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).addClass("active");   
  });


//live-tabs
$("#live-tabs .tab_content").hide(); //Hide all content
$("#live-tabs ul.tabs-live li:nth-child(2)").addClass("active").show(); //Activate first tab
$("#live-tabs .tab_content:nth-child(2)").show(); //Show first tab content
//On Click Event
$("#live-tabs ul.tabs-live li").click(function(e) {
    $("#live-tabs ul.tabs-live li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //Add "active" class to selected tab
    $("#live-tabs .tab_content").hide(); //Hide all tab content
    var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active content
    e.preventDefault();
  });

(function($) {
  $('.tab ul.tabs-live li:nth-child(2) a').addClass('current');
  $('.tab .tab_content div.tabs_tab:nth-child(2)').show();

  $('.tab ul.tabs-live li a').click(function(g) {
    var tab = $(this).parent().parent().parent(),
    index = $(this).parent().index();

    tab.find('ul.tabs-live').find('a').removeClass('current');
    $(this).addClass('current');

    tab.find('.tab_content').find('div.tabs_tab').not('div.tabs_tab:eq(' + index + ')').slideUp();
    tab.find('.tab_content').find('div.tabs_tab:eq(' + index + ')').slideDown();

    g.preventDefault();

  });
})(jQuery);
//End live-tabs

//Gallery
$('.fading-gal').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: false,
  dots: false,
  rtl: true,
  nextArrow: '<i class="fa fa-chevron-right bt nxt"></i>',
  prevArrow: '<i class="fa fa-chevron-left bt prv"></i>',
});


$(".flip").click(function(){
      $(this).next().toggle();
});

});