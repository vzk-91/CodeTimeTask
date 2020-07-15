
$(document).ready(function(){
    PopUpHide();
});


function PopUpShow(){
    $("#popup1").show()
}
function PopUpHide(){
    $("#popup1").hide()
}

   
 

        $('.body-wrap').mouseleave(function(){
            PopUpShow()
          },
          ) 
 