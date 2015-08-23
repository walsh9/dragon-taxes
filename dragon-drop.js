$(function() {
    $( "article" ).draggable().mousedown(function() {
        $(this).parent().append(this);
    }); 
});

