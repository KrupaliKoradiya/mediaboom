
var banner = $('.main-banner .overlay');
      var range = 300;

$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop(),
      height = banner.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  banner.css({ 'opacity': calc });

  if (calc > '1') {
    banner.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    banner.css({ 'opacity': 0 });
  }
  
});


var $animation_elements = $('.fadeIn');
var $window = $(window);
$(window).on('scroll', function () {
	   var scrollTop = $(this).scrollTop();
		if (scrollTop >= 1) {
		  $animation_elements.addClass('show');
		}
	});

