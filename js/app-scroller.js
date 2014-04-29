$(function() {
	

  var rowno = 3;
	var colno = 4;
	var stageW = $(window).width()
	var stageH = $(window).height()
	var unitW = 480; //  stageW / colno;
	var unitH = 360; // stageH / rowno;
	
  $('.img').width(unitW).height(unitH);
	
  // window.mySwipe = $('.mySwipe').show().width(stageW).height(unitH).Swipe().data('Swipe');
	// $.nonbounce();

 
  // Click functions ...
  

    $( ".img" ).click(function() {
      // alert('CLICK!');
      var $dataInfoFile = $(this).data("infofile");
      var fileUrl = 'info/'+ $dataInfoFile +'.htm';

      $.get( fileUrl, function( data ) {
        $( "#info-box" ).html( data );
        $('#overlay').fadeIn('fast',function(){$('#overlay-box').animate({'top':'160px'},500);});
      });
    }); // end img.click(function)
  

    

  $('#boxclose').click(function(){
    $('#overlay-box').animate({'top':'-200px'},500,function(){ $('#overlay').fadeOut('fast'); });
  });
});