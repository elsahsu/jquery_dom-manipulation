/*
Set the href of the <a> in the first nav item to "#1".

Must use jQuery's attr() method!
*/

// Start with this variable!
var navList;
navList = $('.nav-item').first().children();
navList.attr('href', '#1');

//navList = $('.nav-item').first().find("a");
//navList.attr('href', '#1');
