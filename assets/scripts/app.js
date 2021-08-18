const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "HTML",
				weight: 12.3
			}, {
				text: "CSS3",
				weight: 8
			}, {
				text: "JAVASCRIPT",
				weight: 14
			}, {
				text: "JQuery",
				weight: 7
			}, {
				text: "C & C++",
				weight: 8
			}, {
				text: "Python",
				weight: 10
			}, {
				text: "JAVA",
				weight: 9
			}, {
				text: "SWIFT & SWIFTUI",
				weight: 10
			}, {
				text: "FIREBASE",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; 
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I am a Full-Stack Web Developer.", "love everything about code.", "also teach programming to people .", "solve problems.", "and Iam also fitness trainer(Get More ... on the link below)."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#c7c705"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
