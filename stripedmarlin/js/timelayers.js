<!-- GIS ---!>
	// Date time
	var startTime = new Date('2017-01-01T12:00:00.000Z'),
		endTime = new Date('2017-12-31T12:00:00.000Z'),
		interval = "P3D";
    var Time0 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

	var startTime = new Date('2019-01-01T12:00:00.000Z'),
		endTime = new Date('2019-12-31T12:00:00.000Z'),
		interval = "P3D";
    var TimeA = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);
	
	// Chlorophyll		
	var TimeLayer1 = L.timeDimension.layer.wms(chla0, {
		updateTimeDimension: false,
		cacheBackward: 8,
		cacheForward: 8,		
	});
	var TimeLayerA = L.timeDimension.layer.wms(chla1, {
		updateTimeDimension: false,
		cacheBackward: 8,
		cacheForward: 8,		
	});
	// SST
	var TimeLayer2 = L.timeDimension.layer.wms(sst2, {
		updateTimeDimension: false,
		cacheBackward: 8,
		cacheForward: 8,
	});
	var TimeLayerB = L.timeDimension.layer.wms(sst3, {
		updateTimeDimension: false,
		cacheBackward: 8,
		cacheForward: 8,		
	});
	// Velocity	- ovel doesn't need time layer
	var TimeLayer3 = L.timeDimension.layer.wms(ovel, {
		updateTimeDimension: false,
		cacheBackward: 8,
		cacheForward: 8,		
	});	
	// Oxygen
	var TimeLayer4 = L.timeDimension.layer.wms(dO2, {
		updateTimeDimension: false,
		cacheBackward: 8,
		cacheForward: 8,		
	});
	// Mixed layer thickness
	var TimeLayer5 = L.timeDimension.layer.wms(mlt, {
		updateTimeDimension: false,
		cacheBackward: 8,
		cacheForward: 8,		
	});
	
<!-- PSAT Tracks ---!>
    //Start and end dates
var startTime = new Date('2016-06-03TT12:00:00.000Z'), endTime = new Date('2017-06-03TT12:00:00.000Z'), interval = 'P1D';
var Time11 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2017-07-20TT12:00:00.000Z'), endTime = new Date('2017-09-27TT12:00:00.000Z'), interval = 'P1D';
var Time12 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2017-06-11TT12:00:00.000Z'), endTime = new Date('2017-09-25TT12:00:00.000Z'), interval = 'P1D';
var Time13 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2017-12-05TT12:00:00.000Z'), endTime = new Date('2018-02-21TT12:00:00.000Z'), interval = 'P1D';
var Time14 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2017-06-10TT12:00:00.000Z'), endTime = new Date('2018-06-10TT12:00:00.000Z'), interval = 'P1D';
var Time15 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2018-05-29TT12:00:00.000Z'), endTime = new Date('2018-07-27TT12:00:00.000Z'), interval = 'P1D';
var Time16 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2018-05-24TT12:00:00.000Z'), endTime = new Date('2018-07-31TT12:00:00.000Z'), interval = 'P1D';
var Time17 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2018-05-22TT12:00:00.000Z'), endTime = new Date('2018-09-03TT12:00:00.000Z'), interval = 'P1D';
var Time18 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2018-06-17TT12:00:00.000Z'), endTime = new Date('2019-02-14TT12:00:00.000Z'), interval = 'P1D';
var Time19 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2018-05-24TT12:00:00.000Z'), endTime = new Date('2018-09-02TT12:00:00.000Z'), interval = 'P1D';
var Time20 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2018-05-29TT12:00:00.000Z'), endTime = new Date('2018-09-01TT12:00:00.000Z'), interval = 'P1D';
var Time21 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2018-12-18TT12:00:00.000Z'), endTime = new Date('2019-02-11TT12:00:00.000Z'), interval = 'P1D';
var Time22 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2018-12-19TT12:00:00.000Z'), endTime = new Date('2019-04-10TT12:00:00.000Z'), interval = 'P1D';
var Time23 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2019-04-10TT12:00:00.000Z'), endTime = new Date('2019-05-04TT12:00:00.000Z'), interval = 'P1D';
var Time24 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2019-05-01TT12:00:00.000Z'), endTime = new Date('2019-08-22TT12:00:00.000Z'), interval = 'P1D';
var Time25 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2019-05-03TT12:00:00.000Z'), endTime = new Date('2020-02-23TT12:00:00.000Z'), interval = 'P1D';
var Time26 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

var startTime = new Date('2018-02-25TT12:00:00.000Z'), endTime = new Date('2018-03-11TT12:00:00.000Z'), interval = 'P1D';
var Time27 = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, interval);

	//Tracks
var icon11 = L.icon({ 
        iconUrl: 'css/images/icon11.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer11 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon11 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG01-20139-115409.kml', null, customLayer11); 
    var kmlTimeLayer11 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon12 = L.icon({ 
        iconUrl: 'css/images/icon12.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer12 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon12 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG02-16P1909-169364.kml', null, customLayer12); 
    var kmlTimeLayer12 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon13 = L.icon({ 
        iconUrl: 'css/images/icon13.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer13 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon13 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG03-20573-117277.kml', null, customLayer13); 
    var kmlTimeLayer13 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon14 = L.icon({ 
        iconUrl: 'css/images/icon14.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer14 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon14 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG04-16P1849-169355.kml', null, customLayer14); 
    var kmlTimeLayer14 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon15 = L.icon({ 
        iconUrl: 'css/images/icon15.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer15 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon15 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG05-20138-115408.kml', null, customLayer15); 
    var kmlTimeLayer15 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon16 = L.icon({ 
        iconUrl: 'css/images/icon16.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer16 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon16 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG06-16P1579-167346.kml', null, customLayer16); 
    var kmlTimeLayer16 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon17 = L.icon({ 
        iconUrl: 'css/images/icon17.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer17 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon17 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG07-16P1855-169356.kml', null, customLayer17); 
    var kmlTimeLayer17 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon18 = L.icon({ 
        iconUrl: 'css/images/icon18.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer18 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon18 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG08-16P1580-167347.kml', null, customLayer18); 
    var kmlTimeLayer18 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon19 = L.icon({ 
        iconUrl: 'css/images/icon19.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer19 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon19 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG09-16P1587-167351.kml', null, customLayer19); 
    var kmlTimeLayer19 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon20 = L.icon({ 
        iconUrl: 'css/images/icon20.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer20 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon20 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG10-16P1896-169361.kml', null, customLayer20); 
    var kmlTimeLayer20 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon21 = L.icon({ 
        iconUrl: 'css/images/icon21.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer21 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon21 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG11-16P1916-169365.kml', null, customLayer21); 
    var kmlTimeLayer21 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon22 = L.icon({ 
        iconUrl: 'css/images/icon22.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer22 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon22 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG12-16P2435-172777.kml', null, customLayer22); 
    var kmlTimeLayer22 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon23 = L.icon({ 
        iconUrl: 'css/images/icon23.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer23 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon23 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG13-17P0206-172780.kml', null, customLayer23); 
    var kmlTimeLayer23 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon24 = L.icon({ 
        iconUrl: 'css/images/icon24.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer24 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon24 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG14-17P0213-172782.kml', null, customLayer24); 
    var kmlTimeLayer24 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon25 = L.icon({ 
        iconUrl: 'css/images/icon25.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer25 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon25 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG15-16P1903-169363.kml', null, customLayer25); 
    var kmlTimeLayer25 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon26 = L.icon({ 
        iconUrl: 'css/images/icon26.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer26 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon26 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG16-17P0212-172781.kml', null, customLayer26); 
    var kmlTimeLayer26 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

var icon27 = L.icon({ 
        iconUrl: 'css/images/icon27.png', 
        iconSize: [80, 40], 
        iconAnchor: [5, 25] }); 
    var customLayer27 = L.geoJson(null, { 
          pointToLayer: function (feature, latLng) { 
            if (feature.properties.hasOwnProperty('last')) { 
                return new L.Marker(latLng, { 
                  icon: icon27 }); 
            } 
            return L.circleMarker(latLng); 
        } 
       });
    var kmlLayer = omnivore.kml('data/PIFG17-16P1575-167342.kml', null, customLayer27); 
    var kmlTimeLayer27 = L.timeDimension.layer.geoJson(kmlLayer, { 
           updateTimeDimension: true, addlastPoint: true, waitForReady: true}); 

