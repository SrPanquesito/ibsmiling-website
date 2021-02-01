/* ----- Google Map ----- */
if ($("#map").length) {
    function initialize() {
        var myLatLng = {lat: 32.5766327, lng: -117.1063436};
        var mapOptions = {
            zoom: 15,
            center: myLatLng,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
              },
              styles:
          [
              {
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "hue": "#ff4400"
                      },
                      {
                          "saturation": -68
                      },
                      {
                          "lightness": -4
                      },
                      {
                          "gamma": 0.72
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "stylers": [
                      {
                          "color": "#bbf4ff"
                      },
                      {
                          "lightness": -7
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "labels.icon"
              },
              {
                  "featureType": "landscape.man_made",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "hue": "#0077ff"
                      },
                      {
                          "gamma": 3.1
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "stylers": [
                      {
                          "hue": "#00ccff"
                      },
                      {
                          "gamma": 0.44
                      },
                      {
                          "saturation": -33
                      }
                  ]
              },
              {
                  "featureType": "poi.park",
                  "stylers": [
                      {
                          "hue": "#44ff00"
                      },
                      {
                          "saturation": -23
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "hue": "#007fff"
                      },
                      {
                          "gamma": 0.77
                      },
                      {
                          "saturation": 65
                      },
                      {
                          "lightness": 99
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "gamma": 0.11
                      },
                      {
                          "weight": 5.6
                      },
                      {
                          "saturation": 99
                      },
                      {
                          "hue": "#0091ff"
                      },
                      {
                          "lightness": -86
                      }
                  ]
              },
              {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "lightness": -48
                      },
                      {
                          "hue": "#ff5e00"
                      },
                      {
                          "gamma": 1.2
                      },
                      {
                          "saturation": -23
                      }
                  ]
              },
              {
                  "featureType": "transit",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "saturation": -64
                      },
                      {
                          "hue": "#ff9100"
                      },
                      {
                          "lightness": 16
                      },
                      {
                          "gamma": 0.47
                      },
                      {
                          "weight": 2.7
                      }
                  ]
              }
              ]
            };

        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
        var marker = new google.maps.Marker({ 
            position: {lat: 32.5766327, lng: -117.1063436},
            icon: 'images/location-pin.png', //if u want custom
            animation: google.maps.Animation.DROP,
            map: map,
            title:"Imperial Beach Dental"
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
}