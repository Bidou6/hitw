var createGeoJSONCircle = function(center, radiusInKm, points) {
    if(!points) points = 64;

    var coords = {
        latitude: center[1],
        longitude: center[0]
    };

    var km = radiusInKm;

    var ret = [];
    var distanceX = km/(111.320*Math.cos(coords.latitude*Math.PI/180));
    var distanceY = km/110.574;

    var theta, x, y;
    for(var i=0; i<points; i++) {
        theta = (i/points)*(2*Math.PI);
        x = distanceX*Math.cos(theta);
        y = distanceY*Math.sin(theta);

        ret.push([coords.longitude+x, coords.latitude+y]);
    }
    ret.push(ret[0]);

    return {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [ret]
                }
            }]
        }
    };
};

$(function(){
    var map;
    var postersData;
    if ("geolocation" in navigator) {
        /* géolocalisation possible */
        navigator.geolocation.getCurrentPosition(function(position) {
            //clé api
            mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzdGllbmgiLCJhIjoiY2p5dWwzNW0xMGV0ODNtcnJmOW5tN3B4ayJ9.VCExw9vlyrt9_AQ3v4wv8w';
            //création de l'objet map
            map = new mapboxgl.Map({
                container: 'map',//id du container
                style: 'mapbox://styles/mapbox/streets-v11',//style de la mpa
                center:[3.5119444444444445,50.6079444],//cordonnées ou on se trouve
                zoom:15.5//niveau de zoom sur la map
            });

            map.on("click",function(e){
                //quand on clique on créé un marqueur à l'endroit cliqué
                var lng=e.lngLat.lng;
                var lat=e.lngLat.lat;
                var marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
                postersData.push({
                    "childConcernedId":0,
                    "posters":[
                        {
                            "lng":lng,
                            "lat":lat
                        }
                    ]
                });
                $.post("./php/write.php",{
                    type:"writePosters",
                    json:postersData
                });
            })
            
        });


        } else {
            alert("Le service de géolocalisation n'est pas disponible sur votre ordinateur.");
        }

        /**
         * chargement des affiches déjà posées
         */
        setTimeout(function(){
            $.getJSON('../v1/data/poster.json',function(data){
                postersData=data;
                for(var i=0;i<data.length;i++){
                    posters=data[i].posters;
                    for(var j=0;j<posters.length;j++){
                        new mapboxgl.Marker().setLngLat([posters[j].lng, posters[j].lat]).addTo(map);
                    }
                }

                //création d'un cercle test
                map.addSource("polygon", createGeoJSONCircle([3.5119444444444445,50.6079444], 0.5));

                map.addLayer({
                    "id": "polygon",
                    "type": "fill",
                    "source": "polygon",
                    "layout": {},
                    "paint": {
                        "fill-color": "blue",
                        "fill-opacity": 0.6
                    }
                });
            });
        },1000);

        
        
        
    
});