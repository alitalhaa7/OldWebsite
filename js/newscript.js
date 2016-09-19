

$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};



$(document).ready(function(){


        var x=false;
  
    
 
    
    
    var Enable = document.getElementById("enable");
             var Disable = document.getElementById("disable");
             var InfoTable = document.getElementById("infotable");
             var GraphicsLabel = document.getElementById("graphicslabel");

    //$("#infotable2").hide();
    //$("#enable3d2").hide();
    
    
$("#enable").click(function(){
  Enable.style.color="#222222";  
    Disable.style.color="#222222";
InfoTable.style.color="#222222";  
    GraphicsLabel.style.color="#222222";
    //$("#infotable").hide();
    //$("#enable3d").hide();
    
    //   $("#infotable2").show();
    //$("#enable3d2").show();
    
})
 






    
 //   $("#intro").mouseover(function(){


      $("#introprogrammerdesigner").fadeTo("slow",1);
    $("#introtalhaali").fadeTo("slow",1);       
   // })
    










$("#disable").click(function(){
  Disable.style.color="#FFFFFF";
    Enable.style.color="#FFFFFF";
        InfoTable.style.color="#FFFFFF";
        GraphicsLabel.style.color="#FFFFFF";

   /* Enable.style.color="#FFFFFF";
     $("#infotable").show();
    $("#enable3d").show();
       $("#infotable2").hide();
    $("#enable3d2").hide();
    */
    
    
    
})


$("#aboutmebutton").click(function(){
$('html, body').animate({
    scrollTop: $("#aboutme").offset().top-(document.getElementById('navigationtable').clientHeight)
}, 1000); 

})

$("#skillsbutton").click(function(){
$('html, body').animate({
    scrollTop: $("#skills").offset().top-(document.getElementById('navigationtable').clientHeight)
}, 1000); 

})
$("#whymebutton").click(function(){
$('html, body').animate({
    scrollTop: $("#Reasons").offset().top-(document.getElementById('navigationtable').clientHeight)
}, 1000); 

})

$("#contactbutton").click(function(){
$('html, body').animate({
    scrollTop: $("#footer").offset().top+
    -(document.getElementById('navigationtable').clientHeight)
}, 1000); 

})

    




       $("#fadein").fadeTo('slow',1000);

       $("#nav").fadeTo('slow',1000);

    
    
    
    
  /*  $("#Reasons").mouseover(function(){
      $("#reasonstable").fadeTo("slow",1);
    $("#whymetable").fadeTo("slow",1);       
    })
    */
    
    
    
   /*  if($("#Reasons").isOnScreen()){
        $("#reasonstable").fadeTo("slow",1);
              $("#whymetable").fadeTo("slow",1);
        
    }
    */
    
    
    
    
    
    
    $("#container").mouseover(function(){
        
        $("#introprogrammerdesigner").fadeTo(2000,1);
            
    
    })

      
      
              $("#aboutmeparagraph").fadeTo("slow",1);
              $("#secondparagraph").fadeTo("slow",1);

      

  
    
    
  /*  if($("#aboutme").isOnScreen()){
    $("#aboutmeparagraph").fadeTo("slow",1);
              $("#secondparagraph").fadeTo("slow",1);
        
    }
    */
    
    
    
    
    $("#skillsdiv").mouseover(function(){
       $("#worktable tr td").fadeTo(1500,1); 
        
        
    });
    
    
      $("#checkoutmypreviousprojects tr td").show();
        $("#shipscene").hide();   
    $("#madebyme").hide();
        $("#lesson01-canvas").hide();   

    $("#webglimage").mousedown(function(){
         
                
                
         
            
        
      //  $("#checkoutmypreviousprojects tr td").fadeToggle("1500","linear",1);
        //$("#PreviousProjects table").fadeToggle("1500","linear",1);
     
        var delay=1000; //1 seconds

//setTimeout(function(){
        $("#shipscene").fadeToggle("1500","linear",1);
            $("#madebyme").fadeToggle("1500","linear",1);
$('html, body').animate({
    scrollTop: $("#shipscene").offset().top
}, 1000);   
  //your code to be executed after 1 seconds
//}, delay); 
        
        
       
    })
    
    
    
    var delay=1000; //1 seconds



    
    $("#shipscene").mousedown(function(){
$('html, body').animate({
    scrollTop: $("#PreviousProjects").offset().top
}, 1000);   
        
        
       // $("#shipscene").fadeToggle("1500","linear",1);
        //$("#madebyme").fadeToggle("1500","linear",1);
setTimeout(function(){

        
        $("#shipscene").hide();
        $("#madebyme").hide();
    
}, delay); 
  
        
        
        
    });
 
    

   
})



$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}





function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 4000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('fadein', true);
    show('loading', false);
});