console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("span").on("click", showName);

	function showName(event) {
		var phrase = $(this).text();
		$("h2").append(phrase);
	}

})
