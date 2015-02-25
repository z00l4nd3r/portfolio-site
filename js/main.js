(function(){
    var $iso_container = $('#iso_container');

    $iso_container.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    // filter items on button click
    $('#iso_filters').on('click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $iso_container.isotope({filter: filterValue});

        // Now toggle class on buttons
        $('#iso_filters a.success').removeClass('success');
        $( this ).addClass('success');
    });

})();
