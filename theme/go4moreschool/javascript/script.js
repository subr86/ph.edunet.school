jQuery(document).ready(function($) {

    jQuery('body').append('<a href="#" id="go-top" title="Start"><div class="go-top-container"></div></a>');

    jQuery(function() {
        jQuery.fn.scrollToTop = function() {
            jQuery(this).hide().removeAttr("href");
            if (jQuery(window).scrollTop() >= "200") {
                jQuery(this).fadeIn("slow");
            }
            var scrollDiv = jQuery(this);
            jQuery(window).scroll(function() {
                if (jQuery(window).scrollTop() < "200") {
                    jQuery(scrollDiv).fadeOut("slow");
                } else {
                    jQuery(scrollDiv).fadeIn("slow");
                }
            });
            jQuery(this).click(function() {
                jQuery("html, body").animate({scrollTop: 0}, 'slow');
            });
        };
    });

    // ----------Smoothly scrolling the page----------
    jQuery(".g4m-page-menu a[href*='#']").on("click", function(e) {
        var anchor1 = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(anchor1.attr('href')).offset().top
        }, 1000, 'swing');
        e.preventDefault();
        return false;
    });
    // ----------Smoothly scrolling the page----------

    jQuery(function() {
        jQuery("#go-top").scrollToTop();
    });
});
// Hide message counter with zero >>>>>
jQuery(function() {
    jQuery('.popover-region').on('click', function() {
        jQuery('.count-container').each(function() {
            var a = jQuery(this).text();
            if (a == 0) {
                jQuery(this).addClass('hidden-count-zero');
            } else {
                jQuery(this).removeClass('hidden-count-zero');
            }
        });
    });
});
// Hide message counter with zero <<<<<

// Different colors of languages >>>>>>
jQuery(function() {
    function greyTranslateText(selector) {
        jQuery(selector).each(function() {

            var aText = jQuery(this).html();
            if (aText.indexOf("\\") != -1) {
                var difText = aText.split("\\");
                var length = difText.length,
                    sumText = "";
                sumText = difText[0] + "<span class='grey_text_translate'>" + difText[1] + "</span>";
                jQuery(this).html(sumText);
            }
        });
    }

    // greyTranslateText('h3.sectionname a');
    // greyTranslateText('.instancename');
    greyTranslateText('.content h4.section-title a');
    // greyTranslateText('h3.sectionname span');
    greyTranslateText('.breadcrumb-item a');
    // greyTranslateText('.activity.label h6');
    // greyTranslateText('.activity.label h4');
    greyTranslateText('.list-group-item .text');
    greyTranslateText('.section-navigation .text');
    // greyTranslateText('div[role="main"] .no-overflow p');
    // greyTranslateText('#intro h4');

    function greyTranslateTextText(selector) {
        jQuery(selector).each(function() {

            var aText = jQuery(this).text();

            if (aText.indexOf("\\") != -1) {

                jQuery(this).text('');

                var difText = aText.split("\\");
                var sumText = "";
                sumText = difText[0] + "<span class='grey_text_translate'>" + difText[1] + "</span>";

                var htmlThis = jQuery(this).html();
                htmlThis = sumText + htmlThis;

                jQuery(this).html(htmlThis);
            }
        });
    }

    // greyTranslateTextText('[role="main"] #maincontent ~ h2');
    // greyTranslateTextText('h3.sectionname span');
    // greyTranslateTextText('#intro h4 span');
    // greyTranslateTextText('.qtext p');
    // greyTranslateTextText('.qtext strong');
    // greyTranslateTextText('.formulation p');
    // greyTranslateTextText('.formulation strong');
    // greyTranslateTextText('.qtext h4');
    // greyTranslateTextText('.qtext div strong');
    // greyTranslateTextText('.no-overflow p strong');


    function translatedTextWithTags(selector) {
        jQuery(selector).each(function() {
            var textHtml = jQuery(this).html(),
                strongHtml = textHtml.replace("<strong><strong>", "<strong>").replace("</strong></strong>", "</strong>").replace("</strong><strong>", "");
            jQuery(this).html(strongHtml);

            var aText = jQuery(this).html();
            if (aText.indexOf("\\") != -1) {
                var difText = aText.split("\\");
                var length = difText.length,
                    sumText = "";
                sumText = difText[0] + "<span class='grey_text_translate'>" + difText[1] + "</span>";
                jQuery(this).html(sumText);
            }
        });
    }

    // translatedTextWithTags(".formulation p");
    // translatedTextWithTags("#intro .no-overflow p");
    // translatedTextWithTags(".content .formulation h5");


});


jQuery(function() {
    function translateToGrey(selector) {
        jQuery(selector).each(function() {
            function deleteDuplicates(string, array) {
                jQuery.each(array, function(index, value) {
                    string = string.replace("<" + value + "><" + value + ">", "<" + value + ">").replace("</" + value + "></" + value + ">", "</" + value + ">").replace("</" + value + "><" + value + ">", "").replace(/\s+/g, " ")/*.replace("> <", "><")*/;
                });
                // string = string.replace("&nbsp;", " ");
                return string;
            }

            var thisHtml = jQuery(this).html();
            var indexOfSlashInHtml = thisHtml.indexOf("\\");

            if (indexOfSlashInHtml != -1) {
                var arrayDuplicates = ["strong", "b", "em"];
                thisHtml = deleteDuplicates(thisHtml, arrayDuplicates);
                jQuery(this).html(thisHtml);
                thisHtml = thisHtml.replace("\\", "<font class='translated_grey_text'>&nbsp;");
                thisHtml = thisHtml.replace("\\", "<font class='translated_grey_text'>");
                thisHtml = thisHtml + "</font>";
                // thisHtml = thisHtml.replace("&nbsp;"," ");
                jQuery(this).html(thisHtml);
            }
        });
    }

    var selectorsForTranslatedGreyText = [
        '#intro h1',
        '#intro h2',
        '#intro h3',
        '#intro h4',
        '#intro h5',
        '#intro h6',
        '[role="main"] #maincontent ~ h1',
        '[role="main"] #maincontent ~ h2',
        '[role="main"] #maincontent ~ h3',
        '[role="main"] #maincontent ~ h4',
        '[role="main"] #maincontent ~ h5',
        '[role="main"] #maincontent ~ h6',
        'h1.sectionname',
        'h2.sectionname',
        'h3.sectionname',
        'h4.sectionname',
        'h5.sectionname',
        'h6.sectionname',
        '.activity.label h1',
        '.activity.label h2',
        '.activity.label h3',
        '.activity.label h4',
        '.activity.label h5',
        '.activity.label h6',
        '.qtext h1',
        '.qtext h2',
        '.qtext h3',
        '.qtext h4',
        '.qtext h5',
        '.qtext h6',
        '.qtext p',
        '.qtext li',
        '.no-overflow p',
        '.no-overflow li',
        '.no-overflow h2',
        '.instancename',
        // 'h4.section-title',
        // '.list-group-item .text',
        // '.section-navigation .text',
        '.formulation p',
        '.formulation h1',
        '.formulation h2',
        '.formulation h3',
        '.formulation h4',
        '.formulation h5',
        '.formulation h6',
        '.qtext .et_pb_blurb_description',
        '.qtext strong',
        // '.no-overflow div',
        // '.activities',
        '.activityname',
        "[data-block='course_modulenavigation'] li.allsectionnames a"
        // '.allsectionnames'
    ];
    jQuery.each(selectorsForTranslatedGreyText, function(index, value) {
        translateToGrey(value);
    });
});


jQuery(function() {
    function translateToGreyQuote(selector) {
        jQuery(selector).each(function() {
            function deleteDuplicates(string, array) {
                jQuery.each(array, function(index, value) {
                    string = string.replace("<" + value + "><" + value + ">", "<" + value + ">").replace("</" + value + "></" + value + ">", "</" + value + ">").replace("</" + value + "><" + value + ">", "").replace(/\s+/g, " ");
                });
                return string;
            }

            var thisHtml = jQuery(this).html();
            var indexOfSlashInHtml = thisHtml.indexOf("\\");

            if (indexOfSlashInHtml != -1) {
                var arrayDuplicatesQuote = ["strong", "b", "em"];
                thisHtml = deleteDuplicates(thisHtml, arrayDuplicatesQuote);
                jQuery(this).html(thisHtml);
                thisHtml = thisHtml.replace("\\", "<font class='translated_grey_text'>&nbsp;");
                if (thisHtml.indexOf("<br") != -1) {
                    thisHtml = thisHtml.replace("<br", "</font> <br");
                } else {
                    thisHtml = thisHtml = thisHtml + "</font>";
                }
                jQuery(this).html(thisHtml);
            }
        });
    }

    var selectorsForTranslatedGreyTextQuote = [
        '.quote_example p',
        '.example_text_header',
        '.quote_example'
    ];

    jQuery.each(selectorsForTranslatedGreyTextQuote, function(index, value) {
        translateToGreyQuote(value);
    });
});


// Different colors of languages <<<<<<

// Change hovercolor text with button >>>>>>>>>>>
jQuery(function() {

    function navButtonsAddAActiveColor(hoverSelector, changeSelector) {
        jQuery(hoverSelector).hover(function() {
            jQuery(changeSelector).addClass("addactivecolor");
        }, function() {
            jQuery(changeSelector).removeClass("addactivecolor");
        });
    }

    navButtonsAddAActiveColor("#labelnext", "label[for='idnext'] > div:first-child");
    navButtonsAddAActiveColor("#labelprev", "label[for='idprev'] > div:first-child");
    navButtonsAddAActiveColor("#labelhome", "label[for='idhome'] > div:first-child");

    $("label[for='idnext'], label[for='idprev'], label[for='idhome']").tooltipster({
        theme: 'tooltipster-shadow'
    });

});

// Change hovercolor text with button <<<<<<<<<<<<<<<<<<

jQuery(function() {
    $('.qtext table.flowtable').flowtype({
        minFont: 10,
        maxFont: 18
    });
    $('.no-overflow table.flowtable').flowtype({
        minFont: 10,
        maxFont: 14
    });
});

// Decrease text field size
jQuery(function() {
    var item = jQuery('.formulation input[type="text"]');
    item.each(function() {
        var size = jQuery(this).attr('size');
        if (size == 1) {
            jQuery(this).css('width', '30px');
        }
    });

    // replace apostrophes >>>>>>>>>>>
    $("input[type=text][id*='answer']").keyup(function() {
        this.value = this.value.replace(/[\`\'\’\ʼ]/g, "\'");
    });
    // replace apostrophes <<<<<<<<<<<
});
// Decrease text field size
