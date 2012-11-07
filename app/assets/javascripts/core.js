
$(document).ready(function() {
    $(".pop_out").animate({left:"100px"}, 2000);

    $(window).bind("resize.browsersize", function() {
                    
        var $tab = $('.nav-tabs');
            windowHalf = $(window).height() / 2;
                        
        $(window).scroll(function(){
                      
            if ($(window).scrollTop() > 2200 ){
                          
                $tab.css({ position:'fixed', top:'11%', left: '207px'});
                
                              
            }  else {
                $tab.css({ position:'relative', top:'0', left: '0' });   
            }
            
        });  
                      
    }).trigger("resize.browsersize");
  });