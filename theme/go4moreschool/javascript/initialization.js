// initialization flowtipe
// "use strict";
jQuery(document).ready(function($) {
    $('.go4more-title-container').flowtype();
});

jQuery(document).ready(function($) {
    $('.g4m-magnific-popup').magnificPopup({
        type: 'iframe',
        tLoading:'<div class="g4m-loader-wrapper2" id="g4m-loader-wrapper2"><div class="g4m-loader2" id="4gm-loader2"><div class="g4m-loader3" id="4gm-loader3"><div class="g4m-loader4" id="4gm-loader4"><div class="g4m-loader5" id="4gm-loader5"></div></div></div></div></div>',
        callbacks: {
            beforeAppend: showIframeLoading
        }
    });
});
