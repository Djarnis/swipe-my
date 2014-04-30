$(function() {

  // Cache info pages ....
  var fileUrl = 'info/xxxxxxx.htm';
  var info_xxxxxxx = '';
  $.get( fileUrl, function( data ) {
    info_xxxxxxx = data;
  });
	
  FastClick.attach(document.body);
 
  // Click functions ...
    $( ".img" ).click(function() {
      var $dataInfoFile = $(this).data("infofile");

      $( "#info-box" ).html( '' );
      $('#overlay').css({'display':'block'});
      $('#overlay-box').css({'top':'160px'});
      $('#overlay-box').html(info_xxxxxxx);

      $('#overlay').click(function() { 
          $('#overlay').css({'display':'none'});
          $( "#info-box" ).html( '' );
          $('#overlay-box').css({'top':'-200px'});
      });

    }); // end img.click(function)
});