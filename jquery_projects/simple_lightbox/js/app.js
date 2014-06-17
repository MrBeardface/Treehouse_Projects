//Problem:When picture is clicked, it takes you to another page, dead end. No bueno.
//Need to make picture appear in current screen(overlay,lightbox), instead of another page.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")
//an image to overlay
$overlay.append($image);

//a caption to overlay
$overlay.append($caption);

//add overlay
$("body").append($overlay);
	//an image
	//a caption


//Capture the click event on the link to a image.
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//Update overlay with the image linked in the link
	$image.attr("src", imageLocation)
	//Show the overlay.
	$overlay.show();

	//Get childs alt attribute and set caption.
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});
	
	
//3. When overlay is clicked, 
$overlay.click(function(){
	$overlay.hide();
});
	//3.1 hide the overlay.