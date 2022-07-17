
  // Header Scrolll Function
  $(document).ready(function() {   
   // var $header = $("header"),
    // $clone = $header.before($header.clone().addClass("fixed"));
    
    $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 750) {
        // $('#menuHeader').removeClass('moveUp');
        $('#menuHeader').removeClass('moveUp').addClass('fixed');
        $('body').addClass('down');
      } 
      else {
        $('#menuHeader').addClass('moveUp').removeClass('fixed').addClass('moveUp');
        $('body').removeClass('down');
      }
    });
    $('.wp1').waypoint(function() {
      $('.wp1').addClass('animated slideInRight');
    }, {
        offset: '90%'
      });
    $('.wp2').waypoint(function() {
      $('.wp2').addClass('animated slideInUp');
    }, {
        offset: '90%'
      });
    $('.wp3').waypoint(function() {
      $('.wp3').addClass('animated slideInLeft');
    }, {
        offset: '90%'
      });
    $('.wp4').waypoint(function() {
      $('.wp4').addClass('animated slideInUp');
    }, {
        offset: '90%'
      });
    $('.wp5').waypoint(function() {
      $('.wp5').addClass('animated slideInUp');
    }, {
        offset: '90%'
      });
    $('.wp6').waypoint(function() {
      $('.wp6').addClass('animated slideInUp');
    }, {
        offset: '70%'
      });
  });