// preloader for magnific popup iframe >>>>>>>>>>>
var showIframeLoading = function() {
    var curLength = 0;
    var interval = setInterval(function() {
        if ($('iframe').length !== curLength) {
            curLength = $('.column-header').length;
            $('.mfp-content').hide();
            $('.mfp-preloader').show();
        }
    }, 50);
    this.content.find('iframe').on('load', function() {
        clearInterval(interval);
        $('.mfp-content').show();
        $('.mfp-preloader').hide();
    });
};
// preloader for magnific popup iframe <<<<<<<<<<<<