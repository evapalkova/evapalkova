
$(document).ready(function() {
	

	/* Apply fancybox to multiple items */
	
	$(".fancybox").fancybox({
		type : "image",
		tpl: {
			closeBtn: '<a title="Close" class="fancybox-item fancybox-close myClose" href="javascript:;"></a>'
		},
		openEffect	: 'none',
		closeEffect	: 'none',
		prevEffect		: 'none',
		nextEffect		: 'none',
		preload	: false,
		helpers	: {
			   overlay: {
				locked: false
				}
		},
		padding:"0"

	});


});
				