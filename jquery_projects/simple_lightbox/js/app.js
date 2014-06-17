//Problem: When picture is clicked, it takes you to another page, dead end. No bueno.
//Need to make picture appear in current screen(overlay,lightbox), instead of another page.

//Decalre a overlay variable. $makes it a jQuery representation of the object.
var $overlay = $('<div id="overlay"></div>');
//create a detached element from the DOM.
var $image = $("<img>");
var $caption = $("<p></p>")
//an image to overlay
//Append the image to the overlay, which gets appended to the body.
//Within the overlay div the image is added.
$overlay.append($image);

//add caption to overlay
//append - insert content to the end of each element in the set of matched elements.
$overlay.append($caption);

//add overlay
//Need to add the overlay to document, don't do it in the HTML. Do it in jQuery.
//add overlay to the body.
//Could put the overlay into a variable.
$("body").append($overlay);
	

//We know we want to click on something, but what is the something?
//Capture the click event on the link to a image.
//We can't be sure that in the future the attributes won't change, so give whole thing a unique id.
$("#imageGallery a").click(function(event){
	//default action will not be triggered. Will not take you to a new page. Will not follow the link anymore.
	event.preventDefault();
	//attr - get a particuliar attribute. Will return a string of the href.
	var imageLocation = $(this).attr("href");
	//Update overlay with the image linked in the link.
	//update the src to be the href of the actual link.
	$image.attr("src", imageLocation)
	//Show the overlay.
	//After you've created $("body").append($overlay), you need to show it on the click.
	$overlay.show();

	//Get childs alt attribute and set caption.
	var captionText = $(this).children("img").attr("alt");
	//apped the caption, alt, to caption and appened that to the end of the body.
	$caption.text(captionText);
});
	
	
//3. When overlay is clicked.
//we want the overlay to disappear when it is clicked.
$overlay.click(function(){
	//Hide the overlay.
	$overlay.hide();
});
