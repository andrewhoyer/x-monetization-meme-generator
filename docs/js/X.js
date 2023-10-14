$(document).ready(function() {
	
	console.log(location.search); // Assume location.search = "?a=1&b=2b2"
	
	let params = new URLSearchParams(location.search.substring(1));
	
	let username = params.get('username');
	let amount = params.get('amount');
	
	$('#username').html(username);
	$('#amount').html(amount);

});
