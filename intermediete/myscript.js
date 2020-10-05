$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});

/* deleting the form */

//$("form").remove();

/* inserting 5 DIV inside of article */

$(document).ready(function() {
	var newDiv = $ ('<div></div>');
	$('article').prepend(newDiv);
	for (var i = 0; i < 4; i++) {
		newDiv.clone().insertAfter(newDiv);
	}
});

// chaning the value message of the input

$(document).ready(function() {
$('input[name=msg]').val('Searching for...');
});

// adding to the created divs class name box

$(document).ready(function() {
$("div").addClass("box");
});

// changing the link

$(document).ready(function() {
$('a').attr('href','www.codefactory.wien');
});
