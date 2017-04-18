$(function() {
    $.fn.extend({
        preventDisableSelection: function(){
            return this.each(function(i) {
                $(this).bind('mousedown.ui-disableSelection selectstart.ui-disableSelection', function(e) {
                    e.stopImmediatePropagation();
                });
            });
        }
    });
    $( "article" ).find("input").preventDisableSelection();
    $( "article,#timer" ).draggable().mousedown(function() {
        $(this).parent().append(this);
    });
});