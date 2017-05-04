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
	
	/* When the user clicks on the button, 
	toggle between hiding and showing the dropdown content */
	var dropdownclassname = document.getElementByClassName("dropdown-toggle");
	dropdownclassname.addEventListener("click", myFunction);
	
	function myFunction() {
		if( $(window).width() >= 669 ){
			document.getElementByClassName("drop-nav").classList.toggle("show");
		}
	}

	// Close the dropdown if the user clicks outside of it
	window.onclick = function(e) {
	  if( $(window).width() >= 669 ){
		  if (!e.target.matches('.dropdown')) {
			var myDropdown = document.getElementByClassName("drop-nav");
			  if (myDropdown.classList.contains('show')) {
				myDropdown.classList.remove('show');
			  }
		  }
	  }
	}
});

});