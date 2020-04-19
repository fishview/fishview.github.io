<!-- Map -->							
	var map = L.map('map', {
			attributionControl: false,
			center: [10, -165],
			zoom: 3,
			layers: [darkmap, coastline],
			timeDimension: true,
			timeDimensionOptions:{
			timeInterval: "2016-01/2017-08",
			period: "P1D",
			loadingTimeout: 9000,
			},
	});	
		
<!-- Basemaps ---!>
	var baseMaps = {
			"Grayscale": greymap,
			//"Open Street Map": street,
			"Bathymetry": world,
			"Ocean basemap": ocean,
			"Sea surface temperature": TimeLayer2,
			"Chlorophyll a": TimeLayer1,
			"Chlorophyll a after 2018": TimeLayerA,
			"Oxygen at 120 m": TimeLayer4,
			"Mixed layer thickness": TimeLayer5,
	};		
	baseMaps.Bathymetry.addTo(map);
	
<!-- Toolbar -->		
	var but1 = L.easyButton({
		states: [{
				stateName: 'zoom1',
				icon:      '<span class="mybutton">&curarr;</span>',
				title:     'Zoom to Hawaii',
				onClick: function(btn, map) {       
					map.setView([24,-150],5);
					btn.state('zoom2');
				}
			}, {
				stateName: 'zoom2',
				icon:      '<span class="mybutton">&cularr;</span>',
				title:     'Zoom out to the Pacific Ocean',
				onClick: function(btn, map) {
					map.setView([10,-170],4);
					btn.state('zoom1');
				}
		}]
	});
	var but2 = L.easyButton({
							  states:[
								{
								  icon: '<span class="star">&hearts;</span>',
								  title:     'Like us on Facebook',
								  onClick: function(){window.open('http://facebook.com/LPRCtunalab', '_blank');}
								}
							  ]
							});
	var but3 = L.easyButton({
							  states:[
								{
								  icon: '<span class="star">&starf;</span>',
								  title:     'Get Involved!',
								  onClick: function(){window.open('http://www.fishtoday.org/tagit/get-involved', '_blank');}
								}
							  ]
							});									

	var butL1 = L.easyButton({
		states: [{
				stateName: 'zoom1',
				icon:      '<span class="mybutton">&rarrfs;</span>',
				title:     'Turn OFF start/end points',
				onClick: function(btn) {       
					migrationLayer1.hide();
					map.removeControl(legend)
					btn.state('zoom2');
				}
			}, {
				stateName: 'zoom2',
				icon:      '<span class="mybutton">&larrfs;</span>',
				title:     'Turn ON start/end points',
				onClick: function(btn) {
					migrationLayer1.show();
					legend.addTo(map);
					btn.state('zoom1');
				}
		}]
	});
	var butL2 = L.easyButton({
		states: [{
				stateName: 'zoom1',
				icon:      '<span class="mybutton">&rarrfs;</span>',
				title:     'Turn OFF IATTC tags',
				onClick: function(btn) {       
					migrationLayer2.hide();
					btn.state('zoom2');
				}
			}, {
				stateName: 'zoom2',
				icon:      '<span class="mybutton">&larrfs;</span>',
				title:     'Turn ON IATTC tags',
				onClick: function(btn) {
					migrationLayer2.show();
					btn.state('zoom1');
				}
		}]
	});
	var butL3 = L.easyButton({
		states: [{
				stateName: 'zoom1',
				icon:      '<span class="mybutton">&rarrfs;</span>',
				title:     'Turn OFF Hawaii tags',
				onClick: function(btn) {       
					migrationLayer3.hide();
					btn.state('zoom2');
				}
			}, {
				stateName: 'zoom2',
				icon:      '<span class="mybutton">&larrfs;</span>',
				title:     'Turn ON Hawaii tags',
				onClick: function(btn) {
					migrationLayer3.show();
					btn.state('zoom1');
				}
		}]
	});
	var butL4 = L.easyButton({
		states: [{
				stateName: 'zoom1',
				icon:      '<span class="mybutton">&rarrfs;</span>',
				title:     'Turn OFF SPC tags',
				onClick: function(btn) {       
					migrationLayer4.hide();
					btn.state('zoom2');
				}
			}, {
				stateName: 'zoom2',
				icon:      '<span class="mybutton">&larrfs;</span>',
				title:     'Turn ON SPC tags',
				onClick: function(btn) {
					migrationLayer4.show();
					btn.state('zoom1');
				}
		}]
	});
	
	var bbar = L.easyBar([but1, butL1]);
	bbar.addTo(map);	      

<!-- Mouse position -->
  L.control.mousePosition({position: 'bottomleft'}).addTo(map);

<!-- Branding -->
	// L.control.banner().addTo(map); // Intro banner
	L.control.logo().addTo(map); // LPRC
	L.control.logo2().addTo(map); // PIFG
	//L.control.logo3().addTo(map); // MCSI
	//L.control.logo4().addTo(map); // Offield
	
<!-- Animation -->
    var prad = .01; //30
	var pbw = .01; // 3
	var migrationLayer1 = new L.migrationLayer({
		map: map,
		data: data1,
		pulseRadius: prad,
		pulseBorderWidth: pbw,
		arcWidth:2,
		arcLabel:true,
		arcLabelFont:'10px sans-serif',
		}
	);
	migrationLayer1.addTo(map)

<!-- Legend -->
	function getColor(d) {
		return d > 11 ? '#de0063' :
			   d > 8  ? '#FFE000' :
			   d > 2  ? '#00a872' :
			   d > 1  ? '#0086b6' :
						'#9A32CD';
	}
	var legend = L.control({position: 'topright'});
	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [1, 3, 9, 12],
			labels = [];

		// loop through our density intervals and generate a label with a colored square for each interval
		div.innerHTML = '<h4>Months at liberty</h4>' 
		for (var i = 0; i < grades.length; i++) {
			div.innerHTML +=
				'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
				grades[i] + '<br>' ;
		}

		return div;
	};
	legend.addTo(map);

<!-- Satellite layer legend -->
	// Base layer
	var legendA = L.control({
			position: 'bottomleft'
		});
		legendA.onAdd = function(map) {
			var src = alink + '?REQUEST=GetLegendGraphic&LAYER=' + alayer + '&PALETTE=' + app + '&COLORSCALERANGE=' + '16%2C32' + '&transparent=TRUE';
			var div = L.DomUtil.create('div', 'info2 legend');
			div.innerHTML +=
				'<img src="' + src + '" alt="legend">';
			return div;
	};	
	
	var legendB = L.control({
			position: 'bottomleft'
		});
		legendB.onAdd = function(map) {
			var src = 'http://my.cmems-du.eu/thredds/wms/global-reanalysis-bio-001-029-daily?REQUEST=GetLegendGraphic&LAYER=chl&PALETTE=ferret&COLORSCALERANGE=0.01%2C4.6416' + '&transparent=TRUE';
			var div = L.DomUtil.create('div', 'info2 legend');
			div.innerHTML +=
				'<img src="' + src + '" alt="legend">';
			return div;
	};
	
	var legendC = L.control({
			position: 'bottomleft'
		});
		legendC.onAdd = function(map) {
			var src = 'http://my.cmems-du.eu/thredds/wms/global-reanalysis-bio-001-029-daily?REQUEST=GetLegendGraphic&LAYER=o2&PALETTE=occam&COLORSCALERANGE=44.661%2C491.271' + '&transparent=TRUE';
			var div = L.DomUtil.create('div', 'info2 legend');
			div.innerHTML +=
				'<img src="' + src + '" alt="legend">';
			return div;
	};
	
	var legendD = L.control({
			position: 'bottomleft'
		});
		legendD.onAdd = function(map) {
			var src = 'http://my.cmems-du.eu/thredds/wms/global-reanalysis-phy-001-030-daily?REQUEST=GetLegendGraphic&LAYER=mlotst&PALETTE=alg2&COLORSCALERANGE=10%2C160' + '&transparent=TRUE';
			var div = L.DomUtil.create('div', 'info2 legend');
			div.innerHTML +=
				'<img src="' + src + '" alt="legend">';
			return div;
	};
	
	// Overlay layer
	var olink = dlink + '?REQUEST=GetLegendGraphic&LAYER=' + dlayer + '&PALETTE=' + pp + '&COLORSCALERANGE=' + cc + '&transparent=TRUE';
	var legendO = L.control({
			position: 'bottomleft'
		});
		legendO.onAdd = function(map) {
			var src = olink;
			var div = L.DomUtil.create('div', 'info2 legend');
			div.innerHTML +=
				'<img src="' + src + '" alt="legend">';
			return div;
	};
		
<!-- Layer control -->		
	var overlayMaps = {
			'Coastline': coastline,
			'Grid lines': grid,
			'Ocean places': oceanLab,
			'Exclusive Economic Zones': eez,
			"Sea water velocity": TimeLayer3,
			"24 degC SST": TimeLayerB,
			"Predation locations": predation,
			'PIFG01-20139-115409': kmlTimeLayer11,
			'PIFG02-16P1909-169364': kmlTimeLayer12,
			'PIFG03-20573-117277': kmlTimeLayer13,
			'PIFG04-16P1849-169355': kmlTimeLayer14,
			'PIFG05-20138-115408': kmlTimeLayer15,
			'PIFG17-16P1575-167342': kmlTimeLayer27,
			'PIFG06-16P1579-167346': kmlTimeLayer16,
			'PIFG07-16P1855-169356': kmlTimeLayer17,
			'PIFG08-16P1580-167347': kmlTimeLayer18,
			'PIFG09-16P1587-167351': kmlTimeLayer19,
			'PIFG10-16P1896-169361': kmlTimeLayer20,
			'PIFG11-16P1916-169365': kmlTimeLayer21,
			'PIFG12-16P2435-172777': kmlTimeLayer22,
			'PIFG13-17P0206-172780': kmlTimeLayer23,
			'PIFG14-17P0213-172782': kmlTimeLayer24,
			'PIFG15-16P1903-169363': kmlTimeLayer25,
			'PIFG16-17P0212-172781': kmlTimeLayer26,
		};
	L.control.layers(baseMaps,overlayMaps,{collapsed:true}).addTo(map);
	
<!-- Time control -->
	var timeDimensionControl = new L.Control.TimeDimension({
				position: 'bottomleft',
				playReverseButton: true,				
				minSpeed: 1,
				maxSpeed: 20,
				speedStep: 1,				
				autoPlay: true,
				playerOptions: {
				buffer: 5,
				minBufferReady: -2,
				loop: true,
				}
	});
	
<!-- Display/ hide items -->
var tCtrlOn = 0,
	tBlay = 0, 
	tOverlay = 0;
	
	// Base change		
	map.on('baselayerchange', function(eventLayer) {
		if (eventLayer.name == 'Chlorophyll a') {
			map.removeControl(legendA);
			map.removeControl(legendC);
			map.removeControl(legendD);
			if (tOverlay == 0) map.timeDimension.setAvailableTimes(Time0, 'replace');
			timeDimensionControl.addTo(this);
			tCtrlOn = 1;
			tBay = 1;
			legendB.addTo(this);
		} else if (eventLayer.name == 'Chlorophyll a after 2018') {
			map.removeControl(legendA);
			map.removeControl(legendC);
			map.removeControl(legendD);
			if (tOverlay == 0) map.timeDimension.setAvailableTimes(TimeA, 'replace');
			timeDimensionControl.addTo(this);
			tCtrlOn = 1;
			tBay = 1;
			legendB.addTo(this);			
		} else if (eventLayer.name == 'Sea surface temperature'){
			map.removeControl(legendB);
			map.removeControl(legendC);
			map.removeControl(legendD);			
			if (tOverlay == 0) map.timeDimension.setAvailableTimes(Time0, 'replace');
			timeDimensionControl.addTo(this);
			tCtrlOn = 1;
			tBlay = 1;
			legendA.addTo(this);			
		} else if (eventLayer.name == 'Oxygen at 120 m'){
			map.removeControl(legendA);
			map.removeControl(legendB);
			map.removeControl(legendD);			
			if (tOverlay == 0) map.timeDimension.setAvailableTimes(Time0, 'replace');
			timeDimensionControl.addTo(this);
			tCtrlOn = 1;
			tBlay = 1;
			legendC.addTo(this);
		} else if (eventLayer.name == 'Mixed layer thickness'){
			map.removeControl(legendA);
			map.removeControl(legendB);
			map.removeControl(legendC);			
			if (tOverlay == 0) map.timeDimension.setAvailableTimes(Time0, 'replace');
			timeDimensionControl.addTo(this);
			tCtrlOn = 1;
			tBlay = 1;
			legendD.addTo(this);				
		} else {
			map.removeControl(legendA);
			map.removeControl(legendB);
			map.removeControl(legendC);
			map.removeControl(legendD);
			if (tOverlay == 0) {map.removeControl(timeDimensionControl);}
			tCtrlOn = 0;
			tBlay = 0;
		} 
	});	
	// Overlay ON
	map.on('overlayadd', function(eventLayer) {
		if (eventLayer.name == 'Sea water velocity' || eventLayer.name == '24 degC SST') {
			tOverlay = tOverlay + 1;
			if (tCtrlOn == 0){
				map.timeDimension.setAvailableTimes(Time0, 'replace');
				timeDimensionControl.addTo(this);
			} else if (tBlay ==1 & tCtrlOn ==1) {
				map.timeDimension.setAvailableTimes(Time0, 'union');
			} else {
				map.timeDimension.setAvailableTimes(Time0, 'replace');
			}
			if (eventLayer.name == 'Sea water velocity') legendO.addTo(this);
		} else if (eventLayer.name == 'PIFG01-20139-115409') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time11, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time11, 'replace');
            }
		} else if (eventLayer.name == 'PIFG02-16P1909-169364') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time12, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time12, 'replace');
            }
		} else if (eventLayer.name == 'PIFG03-20573-117277') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time13, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time13, 'replace');
            }
		} else if (eventLayer.name == 'PIFG04-16P1849-169355') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time14, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time14, 'replace');
            }
		} else if (eventLayer.name == 'PIFG05-20138-115408') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time15, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time15, 'replace');
            }
		} else if (eventLayer.name == 'PIFG06-16P1579-167346') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time16, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time16, 'replace');
            }
		} else if (eventLayer.name == 'PIFG07-16P1855-169356') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time17, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time17, 'replace');
            }
		} else if (eventLayer.name == 'PIFG08-16P1580-167347') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time18, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time18, 'replace');
            }
		} else if (eventLayer.name == 'PIFG09-16P1587-167351') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time19, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time19, 'replace');
            }
		} else if (eventLayer.name == 'PIFG10-16P1896-169361') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time20, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time20, 'replace');
            }
		} else if (eventLayer.name == 'PIFG11-16P1916-169365') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time21, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time21, 'replace');
            }
		} else if (eventLayer.name == 'PIFG12-16P2435-172777') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time22, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time22, 'replace');
            }
		} else if (eventLayer.name == 'PIFG13-17P0206-172780') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time23, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time23, 'replace');
            }
		} else if (eventLayer.name == 'PIFG14-17P0213-172782') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time24, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time24, 'replace');
            }
		} else if (eventLayer.name == 'PIFG15-16P1903-169363') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time25, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time25, 'replace');
            }
		} else if (eventLayer.name == 'PIFG16-17P0212-172781') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time26, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time26, 'replace');
            }			
		} else if (eventLayer.name == 'PIFG17-16P1575-167342') {
            tOverlay = tOverlay + 1;
            if (tCtrlOn == 0){
                timeDimensionControl.addTo(this);
            } else if (tBlay ==1 & tCtrlOn ==1) {
                map.timeDimension.setAvailableTimes(Time27, 'union');
            } else {
                map.timeDimension.setAvailableTimes(Time27, 'replace');
            }}
	});	
	// Overlay OFF
	map.on('overlayremove', function(eventLayer) {
		if (eventLayer.name == 'Sea water velocity' || eventLayer.name == '24 degC SST') {
			map.removeControl(legendO);
			tOverlay = tOverlay - 1
			if (tBlay == 0 && tOverlay < 1) {map.removeControl(timeDimensionControl);}
		} else if (eventLayer.name == 'PIFG-LPRC 20139' || eventLayer.name == 'PIFG01-20139-115409' || eventLayer.name == 'PIFG02-16P1909-169364' || eventLayer.name == 'PIFG03-20573-117277' || eventLayer.name == 'PIFG04-16P1849-169355' || eventLayer.name == 'PIFG05-20138-115408' || eventLayer.name == 'PIFG06-16P1579-167346' || eventLayer.name == 'PIFG07-16P1855-169356' || eventLayer.name == 'PIFG08-16P1580-167347' || eventLayer.name == 'PIFG09-16P1587-167351' || eventLayer.name == 'PIFG10-16P1896-169361' || eventLayer.name == 'PIFG11-16P1916-169365' || eventLayer.name == 'PIFG12-16P2435-172777' || eventLayer.name == 'PIFG13-17P0206-172780' || eventLayer.name == 'PIFG14-17P0213-172782' || eventLayer.name == 'PIFG15-16P1903-169363' || eventLayer.name == 'PIFG16-17P0212-172781' || eventLayer.name == 'PIFG17-16P1575-167342' ) {
			tOverlay = tOverlay - 1
			if (tBlay == 0 && tOverlay < 1) {map.removeControl(timeDimensionControl);}			
		}	
	});	
