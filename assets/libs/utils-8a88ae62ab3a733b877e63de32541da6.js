 function searchFilterClickEvent(){
    mtvn.btg.Controller.sendLinkEvent({ linkName:'SEARCH:Filter', linkType:'o' } );    
 }

function promoClickEvent(){
    var promoid = $('.promotion #promoid').html();
    var linkname = 'PROMOS:Click_'+promoid;
    mtvn.btg.Controller.sendLinkEvent({ linkName:linkname, linkType:'o' } );    
 }

<!-- for addrating form -->
function showDependentQuestion(id,className){
   $("div[class*='"+id+"-'").hide()
   $('.'+className).show();
}

