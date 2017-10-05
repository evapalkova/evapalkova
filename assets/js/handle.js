
$(document).ready(function() {
	
	//fancybox handler	
		$(".fancybox").fancybox();
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
		helpers	: {
			   overlay: {
				locked: false
				}
		},
		padding:"0"

	});


});
				