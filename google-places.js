(function($) {

    $.googlePlaces = function(element, options) {

        var defaults = {
              placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4' // placeId provided by google api documentation
            , render: ['reviews']
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
          plugin.settings = $.extend({}, defaults, options);
          $element.html("<div id='map-plug'></div>"); // create a plug for google to load data into
          initialize_place(function(place){
            plugin.place_data = place;
            // render specified sections
            if(plugin.settings.render.indexOf('reviews') > -1){
              renderReviews(plugin.place_data.reviews);
            }
          });
        }

        var initialize_place = function(c){
          var map = new google.maps.Map(document.getElementById('map-plug'));

          var request = {
            placeId: plugin.settings.placeId
          };

          var service = new google.maps.places.PlacesService(map);

          service.getDetails(request, function(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              c(place);
            }
          });
        }

        var renderReviews = function(reviews){
          var html = "";
          for (var i = reviews.length - 1; i >= 0; i--) {
            var stars = renderStars(reviews[i].rating);
            var date = convertTime(reviews[i].time);
            html = html+"<div><div><span><strong>"+reviews[i].author_name+"</strong></span> <span>"+date+"</span></div>"+stars+"<p>"+reviews[i].text+"</p>"
          };
          $element.append(html);
        }

        var renderStars = function(rating){
          var stars = "<div class='room-rating'><ul>";
                            
          // fill in gold stars
          for (var i = 0; i < rating; i++) {
            stars = stars+"<li><i class='fa fa-star'></i></li>";
          };

          // fill in empty stars
          if(rating < 5){
            for (var i = 0; i < (5 - rating); i++) {
              stars = stars+"<li><i class='fa fa-star inactive'></i></li>";
            };
          }
          stars = stars+"</ul></div>";
          return stars;
        }

        var convertTime = function(UNIX_timestamp){
          var a = new Date(UNIX_timestamp * 1000);
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          var time = months[a.getMonth()] + ' ' + a.getDate() + ', ' + a.getFullYear();
          return time;
        }

        plugin.init();

    }

    $.fn.googlePlaces = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('googlePlaces')) {
                var plugin = new $.googlePlaces(this, options);
                $(this).data('googlePlaces', plugin);
            }
        });

    }

})(jQuery);