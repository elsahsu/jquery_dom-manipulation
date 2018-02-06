/*
Use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/
var content;
$( "p" ).each(function() {
    var length;
    content = $( this ).text();
    length = content.length;
    content = content + length;
    $( this ).text(content);
});
