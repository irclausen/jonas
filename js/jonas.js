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

	switch ($("#services-pageNav").children(".selected").attr("id")) {
		case "services-mixing-nav":
			$("#services-contentTitle span").text("Mixing");
			$("#services-contentBox p").text("This is the mixing content box!");
			break;
		case "services-mastering-nav":
			$("#services-contentTitle span").text("Mastering");
			$("#services-contentBox p").text("This is the mastering content box!");
			break;
		case "services-additionalRecording-nav":
			$("#services-contentTitle span").text("Additional Recording");
			$("#services-contentBox p").text("This is the additional recording content box");
			break;
		case "services-musicEditing-nav":
			$("#services-contentTitle span").text("Music Editing");
			$("#services-contentBox p").text("This is the music editing content box!");
			break;
		case "services-proToolsEducation-nav":
			$("#services-contentTitle span").text("Pro Tools Education");
			$("#services-contentBox p").text("This is the Pro Tools Education content box!");
			break;
		case "services-other-nav":
			$("#services-contentTitle span").text("Other Audio Services");
			$("#services-contentBox p").text("This is the Other Audio Services content box!");
			break;
		default:
			$("#services-contentTitle span").text("Mixing");
			$("#services-contentBox p").text("This is the mixing content box!");
			break;
	}

	switch ($("#gear-pageNav").children(".selected").attr("id")) {
		case "gear-philosophy-nav":
			$("#gear-contentTitle span").text("Philosophy");
			$("#gear-contentBox").html("<p class='copy'>In today's digital age you no longer need big expensive analog mixing desks and tons of analog outboard to be able to make brilliant records. More and more records being released today is completely mixed &quot;in the box&quot; which means mixing everything in the computer using plug-ins.</p>");
			break;
		case "gear-equipmentList-nav":
			$("#gear-contentTitle span").text("Equipment List");
			$("#gear-contentBox").html("<p>Hardware and Instruments</p><ul><li>Pro Tools HD2</li><li>Lynx Aurora 16 Converters</li><li>API 2500 buss Compressor</li><li>Vintage design SU1 &quot;Neve 1272 style&quot; summing amp</li><li>Genelec monitoring</li><li>Sonica labs (Hush QR extreme) quad xeon computer </li><li>TC Electronics </li><li>Music Man Guitars</li><li>Ibanez Guitars</li><li>Mesa Boogie Amps</li><li>Terratec Axon AX100 Guitar to Midi Converter</li></ul>");
			break;
		default:
			$("#gear-contentTitle span").text("Philosophy");
			$("#gear-contentBox").html("<p class='copy'>In today's digital age you no longer need big expensive analog mixing desks and tons of analog outboard to be able to make brilliant records. More and more records being released today is completely mixed &quot;in the box&quot; which means mixing everything in the computer using plug-ins.</p>");
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