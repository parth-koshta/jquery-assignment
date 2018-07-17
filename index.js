$(document).ready(() => {

	$(".collapse-head-1").click(() => {
		$(".collapse-section-1").slideToggle("1000")
	})

	$(".collapse-head-2").click(() => {
		$(".collapse-section-2").slideToggle("100")
	})

	// $(".dropdown-list").hide()

	$(".dropdown-btn").click(() => {
		$(".dropdown-list").slideToggle("100")
	})

	$(".hamburger-icon").click(() => {
		$(".nav-items-div").slideToggle("100")
	})


	$(window).resize(() => {
		location.reload()
	})

	$(".modal-btn").click(() => {
		$(".modal-content").css("display","flex")
		$(".modal-background").css("display","flex")
	})

	$(".close-btn, .modal-background, .close-btn-2").click(() => {
		$(".modal-content").css("display","none")
		$(".modal-background").css("display","none")
	})



})