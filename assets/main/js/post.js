(function(win, $){
    win.ak = win.ak || {};
    var ak = win.ak;

    $('#sidebar').ready(function(){
        $('#sidebar section').remove();
        var content = $('#sidebar div.inner').html();
        $('#sidebar div.inner').html($('#sidebar_post').html() + content);
        //ak.showSidebar();
    });
})(window, window.jQuery)
