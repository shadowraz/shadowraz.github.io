(function () {
	
	'use strict';


	var burgerMenu = function() {
		console.log('1');
		$('.js-colorlib-nav-toggle').on('click', function(event){
			console.log('1');
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Document on load.
	$(function(){
		burgerMenu();
	});


}());