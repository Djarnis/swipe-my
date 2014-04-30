var info_xxxxxxx = '';


xui.extend({
    data: function(attribute, val) {
        if (arguments.length == 2) {
            return this.attr(attribute, val);
        } else {
            return this.attr(attribute);
        }
    }
});



xui.ready(function() { 
    // alert('Ready to rock!');
    // fastClick(document.body);
    
    preCache();
    preClick();
});





function preClick(){
  // Click functions ...
  x$('.img').click(function() {
    showInfo(  );
  });
}

function preCache(){
  // Cache info pages ....
  // var fileUrl = 'info/xxxxxxx.htm';
  info_xxxxxxx = 'This is a test';
  /* x$.get( fileUrl, function( data ) {
    info_xxxxxxx = data;
  });
  */
}

function showInfo( strInfoFile ){
  x$( "#info-box" ).html( '' );
  x$('#overlay').css({'display':'block'});
  x$('#overlay-box').css({'top':'160px'});
  x$('#overlay-box').html(info_xxxxxxx);
  x$('#overlay').click( hideInfo );
}
function hideInfo(){
  x$('#overlay').css({'display':'none'});
  x$( "#info-box" ).html( '' );
  x$('#overlay-box').css({'top':'-200px'});
}