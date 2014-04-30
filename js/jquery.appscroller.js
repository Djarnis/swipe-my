var info_xxxxxxx = '';

$(function() {
	
  preCache();
  preClick();
  
  FastClick.attach(document.body);
  
  
});

function preClick(){
  // Click functions ...
  $('.img').click(function() {
    showInfo( $(this).data("infofile") );
  });
}

function preCache(){
  // Cache info pages ....
  var fileUrl = 'info/xxxxxxx.htm';
  $.get( fileUrl, function( data ) {
    info_xxxxxxx = data;
  });
}

function showInfo( strInfoFile ){
  $( "#info-box" ).html( '' );
  $('#overlay').css({'display':'block'});
  $('#overlay-box').css({'top':'160px'});
  $('#overlay-box').html(info_xxxxxxx);
  $('#overlay').click( hideInfo );
}
function hideInfo(){
  $('#overlay').css({'display':'none'});
  $( "#info-box" ).html( '' );
  $('#overlay-box').css({'top':'-200px'});
}