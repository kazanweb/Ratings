$(document).ready(function() {


	$('.js-ratings__section').each(function(i) {

		new Ratings({
			element: this,
			countRate: (i == 0 ? 5 : 10),
			clickFn: function(index) {
				alert(index);
			}
		});

	});

});