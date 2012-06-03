// This piece of code corrects the hight of the binder so the binding doesn't
// get clipped.


$(function() {
    var clip_height = 20;
    var comment_clip_width = 30;
    var comment_clip_padding = 30;

    // create a helper method that can be called multiple times (if ever needed)
    window.update_binder_height = function() {
        // what is the current height?
        var current = $("#binder").height();

        // does it evenly divide by the clip height?
        var diff = current % clip_height;
        if( diff ) {
            var height = current - diff;
            $('#binding').css({
                'height': height,
                'margin-top': '-'+ (current/2) +'px'
            });
        }
    };

    window.update_comment_binder_width = function() {
        var current = $("#binder-comments").width();
        var diff = current % comment_clip_width;

        // if we have binder comments and there's a diff
        if( diff ) {
            var width = current - diff;
            $("#binder-comments-binding").css({
                'width': width,
                'margin-left': '-'+ (width/2) +'px'
            });
        }
    };

    // update binding!
    //update_binder_height();
    setTimeout(function() { update_binder_height() }, 1);

    update_comment_binder_width();
    // after any resize of the window, adjust the comment binding
    $(window).resize(function() {
        update_comment_binder_width();
    });
});
