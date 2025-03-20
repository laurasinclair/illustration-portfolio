$(document).ready(function () {
	// Hides the sidebar logo at first, shows it on scroll
	// (otherwise, it's displayed twice: once in the top nav, once in the sidebar)
	$(window).scroll(function () {
		if ($(document).scrollTop() > 250) {
			$("#logo").addClass("reveal");
		} else {
			$("#logo").removeClass("reveal");
		}
	});
});

$(document).ready(function () {
	// Hides nav buttonw when we reach the footer
	$(window).scroll(function () {
		if (
			$(window).scrollTop() + $(window).height() >
			$(document).height() - $("footer").height() + 550
		) {
			$(".nav-element").addClass("hide");
		} else {
			$(".nav-element").removeClass("hide");
		}
	});
});

$(document).ready(function () {
	// footer info
	$("#collapsible").click(function () {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	// little arrows goes up or down
	$(".toggle-label").click(function () {
		$(".collapsible-content").toggleClass("collapsible-open");
	});
});

document.body.className += ' js'; // adds a .js class only if javascript is enabled

// nav open/close
document.addEventListener("DOMContentLoaded", function () { 
	const openButton = document.querySelector('.nav_menu_btn_open');
	const closeButton = document.querySelector('.nav_menu_btn_close');
	const mobileNav = document.querySelector('.nav_menu_navbar');
	const navLinks = document.querySelectorAll('.nav_menu_nav-element_link')

	const isNavOpen = (isOpen) => {
		mobileNav.classList.toggle("isOpen", isOpen);
		openButton.classList.toggle("d-none", isOpen);
		document.body.classList.toggle("overflow-hidden", isOpen);
	};

	navLinks.forEach(link => link.addEventListener('click', isNavOpen(false)));
	openButton.addEventListener('click', () => isNavOpen(true));
	closeButton.addEventListener('click', () => isNavOpen(false));
})