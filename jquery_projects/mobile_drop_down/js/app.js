//Problem: it looks really bad in smaller browers widths, like a phone.
//Solution: Find a way to hide the text links and swap them out with a more appropriate navigation.

//Create a select and append to #menu.
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links 
//To cycle over things, traverse over things, .each(iterate over object for each matched element.)
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");
  
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true)
  }
  //Options value is the href of the link.
  $option.val($anchor.attr("href"));
  //Options text is the text of link.
  $option.text($anchor.text());
  //Append options to select.
  $select.append($option);
});
  
//Create a button to click to go to selects location.

//Bind click to button
$select.change(function(){
    //Go to selects location
    window.location = $select.val();
  });
  
