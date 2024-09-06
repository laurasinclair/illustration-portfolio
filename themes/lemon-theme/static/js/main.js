$(document).ready(function () {
	// Hides the sidebar logo at first, shows it on scroll
	// (otherwise, it's displayed twice: once in the top nav, once in the sidebar)
	$(window).scroll(function () {
		if ($(document).scrollTop() > 250) {
			$('#logo').addClass('reveal');
		} else {
			$('#logo').removeClass('reveal');
		}
	});
});

$(document).ready(function () {
	// Hides nav buttonw when we reach the footer
	$(window).scroll(function () {
		if (
			$(window).scrollTop() + $(window).height() >
			$(document).height() - $('footer').height() + 550
		) {
			$('.nav-element').addClass('hide');
		} else {
			$('.nav-element').removeClass('hide');
		}
	});
});