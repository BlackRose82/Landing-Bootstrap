$(function(){
    $('#myForm').validator({
        feedback: {
          success: 'fa fa-check-circle',
          error: 'fa fa-times-circle'
        }
    });
    
    $('.form-sel').select2({
		minimumResultsForSearch: Infinity
	});
    
    new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       100,          // default
        mobile:       true,       // default
        live:         true        // default
    }
    ).init();
    
    $('table.responsive').responsiveTables();
  
});


