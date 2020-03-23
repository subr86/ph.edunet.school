$(function () {
    var scalableImages = $('#intro img, .qtext img, div.generalbox img');
    for (i = 0; i < scalableImages.length; i++) {
        var scalableImagesSrc = $(scalableImages[i]).attr('src');
        $(scalableImages[i]).wrap('<a href="' + scalableImagesSrc + '" class="g4m-scalable-image">');
    }
    dragscroll.reset();

    $('.g4m-scalable-image').magnificPopup({
        type: 'image',
        callbacks: {
            open: function() {
                let a = $('.mfp-figure figure').html();

                $('.mfp-figure figure').addClass('dragscroll');
                dragscroll.reset();
            },
            change: function() {
                $('img.mfp-img').css('max-height', '100% !important');
            }
        }
    });
});
