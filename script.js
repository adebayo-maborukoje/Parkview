$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    var $searchBar = $('#search');
    var searchPark = $searchBar.val();
    var parkviewAPI = "http://api.parkwhiz.com/search/";
    var parkviewData = {
        destination: searchPark,
        key:"def583f3e79a11fc613af49da96ca393",
        format: "json"
      }
    var display = function(data){
        var showPark ="<ul>";
        $.each(data.parking_listings, function(i, parks){
          showPark += '<li class=images>';
          showPark += '<a href="'+ parks.parkwhiz_url +'">"'+ parks.location_name+'</a>';
          showPark += '<p>'+ parks.city +', '+ parks.state + '</p>';  
          showPark += '</li>';
        });
       showPark += '</ul>';
       $('#resultUl').html(showPark);
    }  
  $.getJSON(parkviewAPI, parkviewData, display)
  //$getJSON(url, data, callback());
  }); // end of the submit function
}); //end of .ready function