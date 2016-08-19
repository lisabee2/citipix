   /*
      0 user input city name
      1 click update "submit"
      2 determine correct image to display
      3 body background updates to image    
        corresponing city specified
      4 data entry field clears after
       each entry
       */

   $(document).ready(function () {
       $('form').on('submit', function (event) {
           var cityStr = $('#city-type').val();
           showImage(cityStr);
           event.preventDefault();
       });
   });

   function showImage(aStr) {
       //test aStr for values like NY and determine correct image to display.

       var cityClass = matchInput(aStr);
       $('body').removeClass();
       $('body').addClass(cityClass);
       $('#city-type').val('');

   }

   function matchInput(aStr) {

       if (aStr == "New York" || aStr == "New York City" || aStr == "NYC") {
           return 'nyc';
       } else if (aStr == "San Francisco" || aStr == "SF" || aStr == "Bay Area") {
           return 'sf';
       } else if (aStr == "Los Angeles" || aStr == "LA" || aStr == "LAX") {
           return 'la';
       } else if (aStr == "ATX" || aStr == "Austin") {
           return 'austin';
       } else if (aStr == "Sydney" || aStr == "SYD") {
           return 'sydney';
       }

       alert('thanks but no thanks');
       return '';



   }