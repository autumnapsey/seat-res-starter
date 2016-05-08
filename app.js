$(document).ready(function() {

	var seatNumber;
	var selectedSeat;
	var name;

	$("form").hide();
	$(".available").on("click", function() {
		$("form").show();
		selectedSeat = $(this);
		seatNumber = $(this).attr("id");
		$(".yourSeat").text("seat #" + seatNumber + ":");
	});

	$("#button").on("click", function() {
		name = $("#name").val();
		$("#thanks").html("<p>Thank you for your reservation!</p>");
		$(selectedSeat).removeClass("available").addClass("reserved")
			.unwrap()
			.html("<p id='reservedSeat'></p>");
		$("#reservedSeat").text("Seat reserved for " + name);
		$("#name").val("");
		$("#email").val("");
		$("#phone_number").val("");
		$("html, body").animate({ scrollTop: 0 }, 500);
	});

});
