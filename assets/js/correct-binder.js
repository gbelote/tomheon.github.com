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
        console.log('current height', current);

        // does it evenly divide by the clip height?
        var diff = current % clip_height;
        console.log('diff is', diff);
        if( diff > 0 ) {
            // no -> force the height to change via min-height
            // NOTE: I use min-height rather than height here in case something
            //       later causes the height to change. In this case, we may get
            //       a weird looking binding, but at least the #binder expands
            //       to fit the new content (rather than it overflowing). If
            //       this does happen maybe you can add a polling check.
            var new_height = current + Math.max( diff, clip_height - diff );
            console.log('adjusting min-height to', new_height);
            $("#binder-content").css('min-height', new_height);
        }
    };

    window.update_comment_binder_width = function() {
        var current = $("#binder-comments").width();
        var diff = current % comment_clip_width;

        // if we have binder comments and there's a diff
        if( diff ) {
            console.log('binder clip width off by', diff);
            // do we add diff or width-diff ?

            // adjust the left/right padding so our width becomes a multiple of
            // the clip width.
//          $("#binder-comments-binding").css({
//              left: comment_clip_padding + Math.floor(change/2),
//              right: comment_clip_padding + Math.ceil(change/2)
//          });
            var width = current - diff;
            $("#binder-comments-binding").css({
                'width': width,
                'margin-left': '-'+ (width/2) +'px'
            });
        }
    };

    // update binding!
    update_binder_height();

    update_comment_binder_width();
    // after any resize of the window, adjust the comment binding
    $(window).resize(function() {
        update_comment_binder_width();
    });
});
