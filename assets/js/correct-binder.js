// This piece of code corrects the hight of the binder so the binding doesn't
// get clipped.


$(function() {
    var clip_height = 20;

    // create a helper method that can be called multiple times (if ever needed)
    window.update_binder_height = function() {
        // what is the current height?
        var current = $("#binder").height();

        // does it evenly divide by the clip height?
        var diff = current % clip_height;
        if( diff > 0 ) {
            // no -> force the height to change via min-height
            // NOTE: I use min-height rather than height here in case something
            //       later causes the height to change. In this case, we may get
            //       a weird looking binding, but at least the #binder expands
            //       to fit the new content (rather than it overflowing). If
            //       this does happen maybe you can add a polling check.
            var new_height = current - diff + clip_height;
            $("#binder-content").css('min-height', new_height);
        }
    };

    // update binding!
    update_binder_height();
});
