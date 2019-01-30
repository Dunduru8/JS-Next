
 (function($){
    $("#city").on("click", function(event){
      $.ajax({
        url: "http://127.0.0.1:8080/city_1.json",
        dataType: "json",
        success: function(data){
          $("#city_list").removeClass("display_none");
        for (var i = 0; i < data.length; i++){
            var $cityList = $("<li></li>").text(data[i].city_ru).addClass("city_list_li")

            $("#city_list").append($cityList);
            $cityList.on("click",  function(){
                var $input = $(this).text();
                $("#city").val($input);
                $("#city_list").addClass("display_none").children().remove();
            });
            event.stopPropagation();
           
        } 
        }
       });
     });
   })(jQuery); 
    
  
  (function($){
    $(".checkout_buttonJQ").on("click", function(event){
    $(this).next().toggleClass("checkout_buttonHide").removeClass("checkout_buttonHide");  
    var $toggleClass = $(this).parents("div").find("div.checkout_form_1").not($(this).next());
    $($toggleClass).eq($toggleClass.index()).toggleClass("checkout_buttonHide").addClass("checkout_buttonHide");
  });
  })(jQuery);
