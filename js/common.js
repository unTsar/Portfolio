$(document).ready(function(){                                                 
    // Owl
    $(".owl1").owlCarousel({
        nav: true,
        loop: true,
        items: 1,
    });
    $(".owl2").owlCarousel({
        nav: true,
        loop: true,
        items: 4,
        margin: 25
    });

    $('.hideB').hide();
    $a = $('.visB');
    $a.on('click', function(event) {
        event.preventDefault();
        $a.not(this).next().slideUp(500);
        $(this).next().slideToggle(500);
        $a.not(this).parent('.punct').css("background-color", 'rgb(246, 246, 246)');
        if ($(this).parent('.punct').css("background-color") == 'rgb(246, 246, 246)') {
            $(this).parent('.punct').css("background-color", "transparent");
        }else
            $(this).parent('.punct').css("background-color", 'rgb(246, 246, 246)');
    });

});