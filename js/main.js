$(document).ready(function () {

console.log("main js!");
    new WOW().init();

    //animated navbar class
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        if (scroll > 100) {
            //console.log('a');
            $(".navigation").addClass("animated");
        } else {
            //console.log('a');
            $(".navigation").removeClass("animated");
        }
    });

// Filter Portfolio Items on click
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('.portfolio-filters li').on('click', function () {
        $(".portfolio-filters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


});