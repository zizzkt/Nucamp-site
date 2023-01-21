//Carousel 

$(function(){
    $(".carousel").carousel({ interval: 2000} ); 
    $("#carouselButton").click(function(){
         if($("#carouselButton").children("i").hasClass("fa-pause")){
             $(".carousel").carousel("pause");
             $("#carouselButton").children("i").removeClass("fa-pause"); 
             $("#carouselButton").children("i").addClass("fa-play");
         } else{
             $(".carousel").carousel("cycle"); 
             $("#carouselButton").children("i").removeClass("fa-play");
             $("#carouselButton").children("i").addClass("fa-pause")
         }
    });

    // Reserved Modal 
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
     })
     //Login Modal 
     $("#loginButton").click(function(){
        $("#loginModal").modal("show"); 
    })
    
 });


//  $(function(){
//     $("#reserveButton").click(function(){
//        $("#reserveModal").modal("show");
//     })
//     $("#loginButton").click(function(){
//         $("#loginModal").modal("show"); 
//     })
//  })



