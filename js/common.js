                                              
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

function scrTo(id){
    $.scrollTo(id, 1000);
};                                         
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
    dots: false,
    loop: true,
    items: 4,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        900: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
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


$(".fofm").submit(function() {
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "contact.php",
        data: str,
        success: function(msg) {
            if(msg == 'ok') {
                $('#formPopupDone').bPopup({
                    position: ['50%', '50%'],
                    positionStyle: 'fixed'
                });
            }
            else {
                $('#formPopupError').bPopup({
                    position: ['50%', '50%'],
                    positionStyle: 'fixed'
                });
            }
        }
    });
    return false;
});

$(function($) {
    $.mask.definitions['9'] = '';
    $.mask.definitions['n'] = '[0-9]';
    $('input[type="tel"]').mask("+49 (nnn) nnnn-nnnn");
});

$('.button-done').click(function() {
    $('.cookie-block').css('display', 'none');
});
$('.button-no').click(function() {
    $('.cookie-block').css('display', 'none');
});