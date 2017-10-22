$(document).ready(function() {

	var rates = document.querySelectorAll('.js-ratings__section');

	Array.prototype.forEach.call(rates, function(item, index) {

		new Ratings({
			element: item,
			width: 13 * 5 / 5,
			clickFn: function(index) {
				alert(index);
			}
		});

	});

});