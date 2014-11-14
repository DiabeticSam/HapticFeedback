<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){


	$('#tapanswer').on("tap",function random() {
		var result = Math.floor((Math.random() * 10) + 1);

			if (result < 5)
			{
			alert("True");
			}
			else
			{
			alert ("False");
			}
	 
	});
 
 
 });