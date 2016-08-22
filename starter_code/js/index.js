   /*
      // user input city name
      // click update "submit"
      // determine correct image to display
      // body background updates to image    
         corresponing city specified
      // data entry field clears after
       each entry
       */

   $(document).ready(function () {
       $('form').on('submit', function (event) {
           var city= $('#city-type').val().toLocaleLowerCase();
           showImage(city);
           event.preventDefault();
       });
   });

   function showImage(aStr) {
       //test aStr for values like NY and determine correct image to display.
       //ignore caps since aStr is always lowercase.
       var cityClass = matchInput(aStr);
       $('body').removeClass();
       $('body').addClass(cityClass);
       $('#city-type').val('');

   }

   function matchInput(aStr) {
       //aStr is lowercase string.
       if (aStr == "new york" || aStr == "new york city" || aStr == "nyc") {
           return 'nyc';
       } else if (aStr == "san francisco" || aStr == "sf" || aStr == "bay area") {
           return 'sf';
       } else if (aStr == "los angeles" || aStr == "la" || aStr == "lax") {
           return 'la';
       } else if (aStr == "atx" || aStr == "austin") {
           return 'austin';
       } else if (aStr == "sydney" || aStr == "syd") {
           return 'sydney';
       }

       alert('thanks, but no thanks');
       return '';



   }