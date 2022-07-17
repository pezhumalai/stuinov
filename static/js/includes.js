

jQuery(function($) {
  
  var doAnimations = function() {
    
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animations');
  
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animations').addClass('animatable');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
//--Begin Hello Banner Code--//
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 350) {
    $("body").addClass("down");
  } else {
    $("body").removeClass("down");
  }
  if (!window.bannerClosed) {
    if (scroll >= 300) {
      $("body").addClass("hideBanner");
      $("body").removeClass("showBanner");
    } else {
      $("body").addClass("showBanner");
      $("body").removeClass("hideBanner");
    }
  }
});

window.onload = function () {
  $('body').addClass('showBanner');
};

function closeFunction() {
  window.bannerClosed = true;
  $("body").addClass("hideBanner");
  $("body").removeClass("showBanner");
}
//--End Hello Banner Code--//



// ---violet hello banner code --//
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 730) {
      $(".white-color").css("color", "#3b3b3b");
    } else {
      $(".white-color").css("color", "#fff");
    }
  })
})

// ---violet hello banner code --//

//--End onscroll navbar shadow Code--//
$(document).ready(function () {
  $(".nav-tabs a").click(function (e) {
    $(this).tab("show");
    e.preventDefault();
    $(this)
      .siblings()
      .removeClass("active")
      .end()
      .addClass("active");
  });
});

//--End onscroll navbar shadow Code--//

//--Begin Inspectlet Asynchronous Code--//
(function () {
  window.__insp = window.__insp || [];
  __insp.push(["wid", 2079867712]);
  var ldinsp = function () {
    if (typeof window.__inspld != "undefined") return;
    window.__inspld = 1;
    var insp = document.createElement("script");
    insp.type = "text/javascript";
    insp.async = true;
    insp.id = "inspsync";
    insp.src =
      ("https:" == document.location.protocol ? "https" : "http") +
      "://cdn.inspectlet.com/inspectlet.js?wid=2079867712&r=" +
      Math.floor(new Date().getTime() / 3600000);
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(insp, x);
  };
  setTimeout(ldinsp, 0);

});

//--End Inspectlet Asynchronous Code--//

//---Begin client-carousel----//

$(function () {
  var $clientscroll = $("#customerlist");
  var clients = $clientscroll.children().length;
  var clientwidth = clients * 180;
  $clientscroll.css("width", clientwidth);
  var rotating = true;
  var clientspeed = 0;
  var seeclients = setInterval(rotateClients, clientspeed);

  $(document).on({
    mouseenter: function () {
      rotating = false;
    },
    mouseleave: function () {
      rotating = true;
    }
  },
    "#customers"
  );

  function rotateClients() {
    if (rotating != false) {
      var $first = $("#customerlist li:first");
      $first.animate({
        "margin-left": "-200px"
      },
        3500,
        "linear",
        function () {
          $first.remove().css({
            "margin-left": "0px"
          });
          $("#customerlist li:last").after($first);
        }
      );
    }
  }
});

//--End client carousel


$(document).on ("click", ".fc-mob-linker", function()
{
  $(".modal").hide();
}
);



//begin track leads form//
function onTypeEmail(email) {
  if (email.trim().length > 0) {
    document.getElementById("email").className = "form-control fc-input";
  }
}


function trackLead(lead) {
  var postData = {
    data: lead
  };
  // var postUrl = location.protocol + '//api.fazilio.com/api/tracklead'
  var postUrl = location.protocol + "//localhost:8080/ROOT/api/tracklead";

  var xhr = window.XMLHttpRequest ?
    new XMLHttpRequest() :
    new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("POST", postUrl);
  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(postData));
  return xhr;
}

//--end track leads--//


//--- Begin location based display div ---//

// jQuery.ajax({
//     url: 'https://geoip-db.com/jsonp',
//     jsonpCallback: "callback",
//     type: 'POST',
//     dataType: 'jsonp',
//     success: function (location) {
//         if (location.country_code === 'US') {
//             console.log("this is us");
//             jQuery('#US').css('display', 'block');
//         } else if (location.country_code === 'IN') {
//             console.log("this is india");
//             jQuery('#IN').css('display', 'block');
//         } else if (location.country_code === 'AE') {
//             console.log("this is UAE");
//             jQuery('#UAE').css('display', 'block');
//         } else {
//             jQuery('#IN').css('display', 'block');
//         }
//     }
// });

// --end location based display div --//



$(document).click(function (e) {
  if (!$(e.target).is('.fc-collapse-list')) {
    $('.collapse').collapse('hide');
  }
});

// ----accordion list ----//

$(document).click(function (e) {
  if (!$(e.target).is('.fc-accordion-list')) {
    //   $('.collapse').collapse('hide');
  }
});

// ----accordion list ----//


// ---break free navbar color change code ---- //

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 730) {
      $(".logo-grey").addClass("fc-logo-grey");
    } else {
      $(".logo-grey").removeClass("fc-logo-grey");
    }
  })
})

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 730) {
      $(".white-color").css("color", "#3b3b3b");

    } else {
      $(".white-color").css("color", "#fff");
    }
  })
})

// ---break free navbar color change code ---- //



// ---carousel javascript ---- //

jssor_1_slider_init = function () {

  var jssor_1_options = {
    $AutoPlay: 0,
    $AutoPlaySteps: 5,
    $SlideDuration: 160,
    $SlideWidth: 275,
    $SlideSpacing: 3,
    $Cols: 5,
    $Align: 390,
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
      $Steps: 5
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 1200;

  function ScaleSlider() {
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;

    if (containerWidth) {

      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

      jssor_1_slider.$ScaleWidth(expectedWidth);
    } else {
      window.setTimeout(ScaleSlider, 30);
    }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};


$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 350) {
    $('body').addClass('down');
  } else {
    $('body').removeClass('down');
  }
});
$(document).ready(function () {
  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    e.preventDefault()
    $(this).siblings().removeClass('active').end().addClass('active');
  });
});

function showEnquiryForm() {
  var x = $(".demo a").offset();
  console.log("Top: " + x.top + " Left: ", x.left);
  console.log("offset", x)
  $('#enquireForm').css({
    left: (x.left - 220) + 'px'
  });
  $("#enquireForm").addClass('formSlideUp');
  $("#productPage").addClass('blind')
  $("#enquiryIcon").hide(100);
}

function hideEnquiryForm() {
  $('#leadFormDemo').find('input[type=text], input[type=email], input[type=number]').val('')
  $("#enquireForm").removeClass('formSlideUp');
  $("#productPage").removeClass('blind')
  $("#enquiryIcon").show(100);
}

$("#fc-feature-sub-nav").onscroll = function() {
  scrollindicatorFunction()};
function scrollindicatorFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



function onTypeEmail(email) {
  if (email.trim().length > 0) {
    document.getElementById('email').className = 'form-control fc-input'
  }
}

// function getDemo() {
//   var fullName = document.getElementById('demofullname').value;
//   fullName = fullName.trim()
//   var demoemail = document.getElementById('demoemail').value;
//   var demonumber = document.getElementById('demonumber').value;
//   var website = document.domain
//   let first = ''
//   let last = ''
//   if (fullName !== '') {
//     if (fullName.indexOf(' ') > 0) {
//       first = fullName.substring(0, fullName.indexOf(' '))
//       last = fullName.substring(fullName.indexOf(' ') + 1, fullName.length)
//     } else {
//       first = ''
//       last = fullName
//     }
//   } else {
//     first = 'Not'
//     last = 'specified'
//   }

//   if (demoemail === '' || demoemail.indexOf('@') === -1) {
//     document.getElementById('demoemail').className = 'form-control fc-input error'
//     return false;
//   }

//   var lead_props = {
//     'first_name': first,
//     'last_name': last,
//     'email': demoemail,
//     'mobile_number': demonumber,
//     'medium': document.domain,
//     'lead_source_id': 2000485410
//   };
//   trackLead(lead_props)

//   document.getElementById('leadFormDemo').style.display = "none"
//   document.getElementById('successMsg').style.display = "block"
//   return false;
// }

//----promotion-pages-script-for-carousel eg: facilities-asset-management.html--//

///----- violet background navbar script ---//

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".navbar-fixed-top").css({
        "background": "#ffffff"
      });
    } else {
      $(".navbar-fixed-top").css("background", "transparent");
    }
  })
})



$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 750) {
      $(".white-color").css("color", "#3b3b3b");

    } else {
      $(".white-color").css("color", "#fff");
    }
  })
})


///----- violet background navbar script ---//




$('#featureMore').click(function () {
  $('#featurelist li:hidden').slice(0, 5).slideDown();
});


