/*
Use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
*/


$('#input').on('change', function() {
    var val;
    val = $('#input').val();
    $('.articles').children('h1').text(val);
});
