$(document).ready(function() {
	
	let params   = new URLSearchParams(location.search.substring(1));
	let username = params.get('username');
	let amount   = params.get('amount');
	
	$('#username').html(username);
	$('#amount').html(amount);

});
