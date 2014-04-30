$(function() {
	
  FastClick.attach(document.body);
 
  // Click functions ...
    $( ".img" ).click(function() {
      var $dataInfoFile = $(this).data("infofile");
      var fileUrl = 'info/'+ $dataInfoFile +'.htm';

      $.get( fileUrl, function( data ) {
        $( "#info-box" ).html( data );
        $('#overlay').css({'display':'block'});
        $('#overlay-box').css({'top':'160px'})

        $('#overlay').click(function() { 
            $('#overlay').css({'display':'none'});
            $( "#info-box" ).html( '' );
            $('#overlay-box').css({'top':'-200px'});
        });
      });
    }); // end img.click(function)
});