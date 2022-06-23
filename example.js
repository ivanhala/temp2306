jQuery(document).on( 'wbk_on_form_rendered', function(){
	jQuery('#wbk-book-quantity').change( function(){     
	    var fields = '';
		jQuery('.wbk-dynamic-element').remove();
		for( var i = 1; i <= parseInt( jQuery(this).val() ); i++ ){
		   var template = '<label class="wbk-input-label wbk-dynamic-element" for="wbk-secondary-name_' + i + '">Name</label><span class="wbk-dynamic-element wpcf7-form-control-wrap wbk-secondary-name_' + i + '"><input type="text" name="wbk-secondary-name_' + i + '" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="wbk-secondary-name_' + i + '" aria-required="true" aria-invalid="false"></span><label class="wbk-input-label wbk-dynamic-element" for="wbk-secondary-age_' + i + '">Age</label><span class="wbk-dynamic-element wpcf7-form-control-wrap wbk-secondary-age_' + i + '"><input type="text" name="wbk-secondary-age_' + i + '" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="wbk-secondary-age_' + i + '" aria-required="true" aria-invalid="false"></span>';           
	       fields += template;
		}	
		jQuery('#wbk-book_appointment').before(fields);		
	});        
});
