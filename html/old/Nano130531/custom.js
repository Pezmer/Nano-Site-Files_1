$(document).ready(function() {

    // Detect if you have chrome browser and your file is local
    if ($.browser['safari'] && $.browser['webkit']) {
        if ($(location)[0]['origin'] == "file://") {
            alert("Chrome Browser can't load local file with XMLHttpRequest \nIf you want to test this script, please use another browser \nor upload these files on a server.\n\nThank you!");
        } else {
            startSlideContent();
        }
    } else {
        startSlideContent();
    }

    // Start the function, if you are on a server, you can use just the code inside the function
    function startSlideContent() {

        // Start the SlideContent here
        $('#content').slideContent({
            duration     : 300,
            ajaxContent  : ['#sidebar-nav'],             // Array of JQuery Selector
            linkAllow    : ['a.sidebar-menu','.back a','.next a'],           // Array JQuery Selector (default : 'a')
            linkExcept   : ['.active','.current'], // Array of JQuery Selector
            padding      : 5
        });

    }

});
