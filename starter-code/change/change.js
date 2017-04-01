console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $("input.add").on("change", addNum);

  function addNum(event) {
  	var left = parseInt($("input#left.add").val());
    var right = parseInt($("input#right.add").val());
    var result = left + right;
  	$("#total").val(result);
  }

})
