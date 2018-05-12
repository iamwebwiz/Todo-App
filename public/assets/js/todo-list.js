$(document).ready(function() {
	$('#theTask').focus();

	$('form').on('submit', function() {

		var item = $('form input');
		var todo = {item: item.val()};

		$.ajax({
			type: 'post',
			url: '/todo',
			data: todo,
			success: function(data) {
				location.reload();
			}
		});

		// $('#theTask').focus();

		return false;
	});

	$('li').on('click', function() {
		var item = $(this).text().replace(/ /g, "-");
		$.ajax({
			type: 'delete',
			url: '/todo/' + item,
			success: function(data) {
				location.reload();
			}
		});
	});
});
