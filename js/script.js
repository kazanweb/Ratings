$(document).ready(function() {

	new Ratings({
		element: document.querySelector('.js-ratings__section'),
		width: 120 / 5,
		clickFn: function(index) {
			alert(index);
		}
	});

});