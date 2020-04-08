jQuery(document).ready(function(){
	jQuery("#resourceobject").on('load', function() {
	jQuery(this).contents().find("head").append(jQuery("<link rel='stylesheet' href='/theme/edunet/style/iframe.css' type='text/css' media='all'>"));
	});
});