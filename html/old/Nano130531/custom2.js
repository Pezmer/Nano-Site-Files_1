$(document).ready(function() {

        // Start the SlideContent here
        $('#container').slideContent({
            duration     : 300,
            ajaxContent  : ['#sidebar-nav ul','#content'],             // Array of JQuery Selector
            linkAllow    : ['a.sidebar-menu','.back a','.next a'],           // Array JQuery Selector (default : 'a')
            linkExcept   : ['.active'], // Array of JQuery Selector
            padding      : 25
        });

    }

});
