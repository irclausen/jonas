function navigate(){
	$("#main").children().css("display","none");
	switch ($("#mainNav").children(".current").attr("id")) {
		case "homeNav":
			$("#homeContainer").css("display","block");
			break;
		case "aboutNav":
			$("#aboutContainer").css("display","block");
			break;
		case "servicesNav":
			$("#servicesContainer").css("display","block");
			break;
		case "testimonialsNav":
			$("#testimonialsContainer").css("display","block");
			break;
		case "gearNav":
			$("#gearContainer").css("display","block");
			break;
		case "contactNav":
			$("#contactContainer").css("display","block");
			break;
		default:
			$("#homeContainer").css("display","block");
			break;
	}
}

function updateContent() {
	//alert($("#home-pageNav").children(".selected").attr("id"));
	switch ($("#home-pageNav").children(".selected").attr("id")) {
		case "home-work-nav":
			$("#home-contentTitle span").text("What I've been doing");
			$("#home-contentBox p").text("Work Content");
			break;
		case "home-blog-nav":
			$("#home-contentTitle span").text("What I've been thinking");
			$("#home-contentBox p").text("Blog Content");
			break;
		case "home-media-nav":
			$("#home-contentTitle span").text("What others think");
			$("#home-contentBox p").text("Media Content");
			break;
		default:
			$("#home-contentBox p").text("Please select work, blog, or media.");
			break;
	}
}

$(document).ready(function() {
	$(".mainNavItem").click(function() {
		$('#mainNav').children().removeClass('current');
		$(this).addClass('current');
		navigate();
	});

	$(".pageNavItem").click(function() {
		$(this).parent().children().removeClass('selected');
		$(this).addClass('selected');
		updateContent();
	});
});