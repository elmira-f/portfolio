$(function() {

	function createSlider(path, list) {
		var parent = $(path);

		var sliderRoot = parent.find(".slider");
		var slider = parent.find(".slider .items");

		var listOpts = {
			slidesToShow: 3,
			vertical: true,
			autoplay: false,
			infinite: false,
			variableWidth: false,
			swipeToSlide: false,
			draggable: false,
			prevArrow: parent.find(".arrow_up"),
			nextArrow: parent.find(".arrow_down")
		};

		var gridOpts = {
			slidesToShow: 4,
			vertical: false,
			autoplay: false,
			infinite: true,
			variableWidth: true,
			swipeToSlide: true,
			draggable: true
		};

		if (list) {
			slider.slick(listOpts);
		} else {
			slider.slick(gridOpts);
		}

		var types = parent.find(".type_filter a");

		types.on("click", function() {
			types.removeClass("active");
			$(this).addClass("active");

			slider.slick("slickUnfilter");

			if ($(this).data("value") !== "all") {
				slider.slick("slickFilter", $(this).data("value"));
			}
		});

		var views = parent.find(".view_filter a");

		views.on("click", function() {
			sliderRoot.removeClass("list");
			sliderRoot.removeClass("grid");
			sliderRoot.addClass($(this).data("value"));

			slider.find(".slick-list").css("height", "auto");
			slider.find(".slick-track").css("height", "auto");
			slider.find(".slick-list").css("width", "auto");
			slider.find(".slick-track").css("width", "auto");

			if ($(this).data("value") === "grid") {
				slider.slick("slickSetOption", gridOpts, true);
			} else {
				slider.slick("slickSetOption", listOpts, true);
			}
		});
	}

	createSlider(".coming_soon", false);
	createSlider(".most_popular", true);

});
