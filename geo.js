// task 2
ymaps.ready(function(){
   let city = ymaps.geolocation.country === 'Россия' ? ymaps.geolocation.city : 'Страны СНГ';
   $('.city_country').text(`Средство №1 в ${city} стабилизирующее выработку инсулина и уровень фосфора в организме`)


   jQuery (function ($) {  
    $(function() {
      function maskPhone() {
        switch (ymaps.geolocation.country) {
            case "Россия":
                $(".phone").mask("+7(999) 999-99-99");
                break;
            case "Украина":
                $(".phone").mask("+380(999) 999-99-99");
                break;
             case "Беларусь":
                $(".phone").mask("+375(999) 999-99-99");
                break;   
             case "Армения":
                    $(".phone").mask("+374(99) 99-99-99");
                    break;            
        }    
      }
      maskPhone();
    });
  });
});






