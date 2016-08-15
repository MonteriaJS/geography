$(document).ready(function(){
	search();
})

function search(){
	$('#button').click(function(){
		var town = $('#town').val();

		window.location.assign(`/${town}`);
	})
}