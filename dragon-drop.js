$(function() {
    $( "article" ).draggable().mousedown(function() {
        $(this).parent().append(this);
    }); 
    $( "#timer" ).draggable().mousedown(function() {
        $(this).parent().append(this);
    }); 
});

