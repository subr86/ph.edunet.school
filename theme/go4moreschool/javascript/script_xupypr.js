jQuery(document).ready(function ($) {
//dont open tips before sound listen
/*    
    jQuery(function () {
        let questionList = [...document.querySelectorAll('.que')];
        let collapsableList = questionList.map(item => item.querySelector('.collapsibleregion'))
                .filter(item => !!item);

        collapsableList.forEach(item => {
            item.onclick = event => {
                //console.dir(event.target);
                if ($(event.target).text() !== "Vocabulary") {
                    let checkProgress = 100;
                    let videoProgress = event.target.offsetParent.querySelector('.vjs-play-progress');
                    if (videoProgress) {
                        checkProgress = 0;
                    }
                    if ($(videoProgress).attr('style')) {
                        checkProgress = videoProgress.style.width.split('%')[0];
                    }

                    let collapseItem = event.target.offsetParent.querySelector('.collapsibleregion.collapsablefiltered');

                    //console.log(checkProgress);
                    if (+checkProgress < 90) {
                        console.dir("Please listen to the audio first.");
                        $('.collapsibleregioninner').css('display', 'none');
                        //alert("Please listen to the audio first.");

                        setTimeout(function () {
                            $(collapseItem).css('height', '23px');
                            $(collapseItem).addClass('collapsed');
                            $('.collapsibleregioninner').css('display', 'block');
                        }, 400);
                        checkProgress = 100;
                    }
                    if (+checkProgress >= 90) {
                        //$('.collapsibleregioninner').css('display', 'block');
                        $('.collapsibleregioninner').css('height', 'auto');
                    }
                }
            }
        });
    });
*/
/*
    $(function () {
        $("div[class*='collapsibleregion collapsablefiltered collapsed']").each(function (index, item) {
            $(this).on("click", function () {
                var elements = document.getElementsByClassName("vjs-play-progress vjs-slider-bar");
                // console.log("index = " + index);
                for (var i = 0, len = elements.length; i < len; i++) {
                    var positionInfo = elements[i].getBoundingClientRect();
                    var width = positionInfo.width;
                    var id = "#collapsible-" + i;

                    if (index === i && width > 250) {
                        // console.log(index, width);

                        $(id + '_inner').css('display', 'block');
                        $(id + '_inner').css('height', 'auto');
                    } else if (index === i && width <= 250) {
                        // console.log("need to hide, width:" + width);

                        $(id + '_inner').css('display', 'none');
                        alert("Please listen to the audio first.");

                        setTimeout(function () {
                            $('#collapsible-' + index).css('height', '23px');
                            $('#collapsible-' + index).addClass('collapsed');
                        }, 400);
                    }
                }
            });
        });
    });
*/
//dont open tips before sound listen

});