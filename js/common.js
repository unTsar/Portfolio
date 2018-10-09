$(document).ready(function(){                                                 

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

$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
});
$('.report').click(function() {
    $('.popup1').bPopup({
        position: ['50%', '50%'],
        positionStyle: 'fixed'
    });
});
$('.play').click(function() {
    $('.popup2').bPopup({
        position: ['50%', '50%'],
        positionStyle: 'fixed'
    });
});
$('.owl1').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    mouseDrag: false,
    touchDrag: false
});
var i= 1; $('.owl-dot').each(function(){$(this).find('span').html(i);i++;});
$('.owl2').owlCarousel({
    nav: false,
    loop: true,
    items: 4,
    mouseDrag: false,
    touchDrag: false
});
$('#prev1').click(function () {
    $('.owl1').trigger('prev.owl.carousel', [500]);
})
$('#next1').click(function () {
    $('.owl1').trigger('next.owl.carousel', [500]);
})
$('#prev2').click(function () {
    $('.owl2').trigger('prev.owl.carousel', [500]);
})
$('#next2').click(function () {
    $('.owl2').trigger('next.owl.carousel', [500]);
})
$('#dot1').click(function () {
    $('.owl1').trigger('to.owl.carousel', [0, 500])
})
$('#dot2').click(function () {
    $('.owl1').trigger('to.owl.carousel', [1, 500])
})
$('#dot3').click(function () {
    $('.owl1').trigger('to.owl.carousel', [2, 500])
})
$('#dot4').click(function () {
    $('.owl1').trigger('to.owl.carousel', [3, 500])
})

