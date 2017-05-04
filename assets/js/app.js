$(document).ready(function(){

    $('#grid').imagesLoaded(function() { // wait to layout grid until all images are loaded

        $('#grid li').wookmark({
            container: $('#grid'),
            autoResize: true,
            flexibleWidth: "20%", // 5 columns on biggest layout
            itemWidth: 300, // min-width of thumbnails in grid
            resizeDelay: 65,
        });

        $("#spinner-wrap").addClass("fadeOut"); // in spinner.css with 750ms delay before 250ms fade out

        var timeout = setTimeout(function(){
            $('#spinner-wrap').remove();
        }, 1000);

    });

    $('#grid').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled:true},
        disableOn: function() { // disables popup on mobile
            if ( $(window).width() < 669 ) {
                return false;
            }
            return true;
            }
    });

    $('#grid a').click(function(e) { // disables links to image src on mobile
        if( $(window).width() < 669 ) {
            e.preventDefault();
        }
    });

    $('.navicon').sidr({
        name: 'sidr',
        source: '#navigation',
        renaming: false, // needed to preserve FontAwesome class names
        side: "right",
    });

	$('.drop-nav').hide();
	$("#sidr li:has(ul)").click(function(){
	$("ul",this).toggle('fast');
});

});