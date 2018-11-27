ymaps.ready(init);
        var myMap,myPlacemark,myMapG,myPlacemarkG,mapCenterG;

        function init(){ 
            myMap = new ymaps.Map("j-map", {
                center: mapCenter,
                zoom: mapZoom,
            }); 

            marks.forEach(function(item, i, arr) {
                myPlacemark = new ymaps.Placemark(item.coord, 
                {
                    balloonContent: item.text,    
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: img,
                    iconImageSize: [36, 49],
                    //iconImageOffset: [0, -45]
                }
                );
                myMap.geoObjects.add(myPlacemark);
            });

            //вторая карта
            myMapG = new ymaps.Map("j-mapGen", {
                center: mapCenterG,
                zoom: mapZoomG,
            }); 

            marksG.forEach(function(item, i, arr) {
                myPlacemarkG = new ymaps.Placemark(item.coord, 
                {
                    balloonContent: item.text,    
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: img,
                    iconImageSize: [36, 49],
                    //iconImageOffset: [0, -45]
                }
                );
                myMapG.geoObjects.add(myPlacemarkG);
            });
        }