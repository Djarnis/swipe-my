var info_xxxxxxx = '';

$(function() {
	
  preCache();
  preClick();
  
  FastClick.attach(document.body);

  /* 
  $('.load-row-1').waypoint(function(direction) {
    alert('Top of thing hit top of viewport.');
  });
  */

 /* 

  $('.load-row-1').waypoint(function(direction) {
    alert('Top of thing hit top of viewport.');
  });



  $('.infinite-container').waypoint('infinite', {
  container: 'auto',
  items: '.infinite-item',
  more: '.infinite-more-link',
  offset: 'bottom-in-view',
  loadingClass: 'infinite-loading',
  onBeforePageLoad: $.noop,
  onAfterPageLoad: $.noop
});
  

  */
  
});

function preClick(){
  // Click functions ...
  $('.img').click(function() {
    showInfo( $(this).data("infofile"), $(this).data("infotype") );
  });
}

function preCache(){
  // Cache info pages ....
  var fileUrl = 'info/xxxxxxx.htm';
  $.get( fileUrl, function( data ) {
    info_xxxxxxx = data;
  });
}

function getPage(strSlug){
  var fileUrl = 'info/'+ strSlug +'.htm';
  var rtn = '';
   $.get( fileUrl, function( data ) {
    rtn = data;
  });


   return rtn;
}

function showInfo( strInfoFile, infoType ){
  $( ".info-box" ).html( '' );
  $('.overlay-box').removeClass('info-box-image');
  
  $('#overlay').css({'display':'block'});
  /* $('.overlay-box').css({'top':'160px'}); */
  
  
  $('#overlay').click( hideInfo );
  $('.overlay-box').click( hideInfo );

  var infohtml = '';

  // Get the info
  if(infoType == 'htm'){
    

    var fileUrl = 'info/'+ strInfoFile +'.htm';
    
     $.get( fileUrl, function( data ) {
      infohtml = data;
      // $('.info-box').html('strInfoFile: '+ strInfoFile +'<br>infoType: '+ infoType + '<br>'+ infohtml);
      $('.info-box').html(infohtml);
    });


  } else {
    // image?
    infohtml = '<img src="info/'+ strInfoFile +'.'+ infoType +'" width="1920" height="1080" id="infoimg" />';


    // $('.overlay-box').addClass('info-box-image');


    // $('.overlay-box').html('strInfoFile: '+ strInfoFile +'<br>infoType: '+ infoType + '<br>'+ infohtml);
    $('.info-box').html(infohtml);
    $('.overlay-box').addClass('info-box-image');
    // $('.overlay-box').css({'top':'0'});
    // $('.overlay-box').css({'left':'0'});

    $('#infoimg').click( hideInfo );
  }

  $( ".overlay-box" ).show();
  

}
function hideInfo(){
  $('.overlay-box').removeClass('info-box-image');
  $('#overlay').css({'display':'none'});
  $( ".info-box" ).html( '' );
  $( ".overlay-box" ).html( '<a class="boxclose" id="boxclose"></a><div class="info-box"></div>' );
  $( ".overlay-box" ).hide();
  /* $('.overlay-box').css({'top':'-200px'}); */
}