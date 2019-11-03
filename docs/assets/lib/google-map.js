function google_maps_init() {
  'use strict'
  var myLatLng = {lat: -41.2872787, lng: 174.7654104};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng,
    styles: style,
    disableDefaultUI: true
  });
  var image = './images/map-icon.png';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

function google_maps_lazyload(api_key) {
  'use strict'
  if (api_key) {
	  var options = {
	    rootMargin: '100px',
	    threshold: 0
	  }
    var map = document.getElementById('map')
    var observer = new IntersectionObserver(
      function(entries, self) {
        var isIntersecting = typeof entries[0].isIntersecting === 'boolean' ? entries[0].isIntersecting : entries[0].intersectionRatio > 0
        if (isIntersecting) {
          var mapsJS = document.createElement('script')
          mapsJS.src = 'https://maps.googleapis.com/maps/api/js?callback=google_maps_init&key=' + api_key
          document.getElementsByTagName('head')[0].appendChild(mapsJS)
          self.unobserve(map)
        }
      },
      options
    )
    observer.observe(map)
  }
}