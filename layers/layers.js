var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_HM1943_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HM-1943<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HM1943_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16820911.800876, -4009608.814140, 16821378.764474, -4009283.516514]
        })
    });
var lyr_HM1955_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HM-1955<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HM1955_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16820911.800876, -4009608.814140, 16821378.764474, -4009283.516514]
        })
    });
var lyr_HM1965_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HM-1965<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HM1965_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16820911.800876, -4009608.814140, 16821378.764474, -4009283.516514]
        })
    });
var lyr_HM1986_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HM-1986<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HM1986_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16820911.800876, -4009608.814140, 16821378.764474, -4009283.516514]
        })
    });
var lyr_HM1991_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HM-1991<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HM1991_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16820911.800876, -4009608.814140, 16821378.764474, -4009283.516514]
        })
    });
var lyr_HM1994_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HM-1994<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HM1994_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16820911.800876, -4009608.814140, 16821378.764474, -4009283.516514]
        })
    });
var lyr_HM2005_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HM-2005<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HM2005_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16820911.800876, -4009608.814140, 16821378.764474, -4009283.516514]
        })
    });
var lyr_HM202x_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HM-202x<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HM202x_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16820911.800876, -4009608.814140, 16821378.764474, -4009283.516514]
        })
    });
var lyr_LUAL20260421_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LUAL - 2026-04-21<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LUAL20260421_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16820936.233644, -4009580.722053, 16821358.939795, -4009322.104365]
        })
    });
var format_SydneyWaterSewer_10 = new ol.format.GeoJSON();
var features_SydneyWaterSewer_10 = format_SydneyWaterSewer_10.readFeatures(json_SydneyWaterSewer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SydneyWaterSewer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SydneyWaterSewer_10.addFeatures(features_SydneyWaterSewer_10);
var lyr_SydneyWaterSewer_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SydneyWaterSewer_10, 
                style: style_SydneyWaterSewer_10,
                popuplayertitle: 'Sydney Water - Sewer',
                interactive: false,
                title: '<img src="styles/legend/SydneyWaterSewer_10.png" /> Sydney Water - Sewer'
            });
var format_LotCoverageBriarsLocal_11 = new ol.format.GeoJSON();
var features_LotCoverageBriarsLocal_11 = format_LotCoverageBriarsLocal_11.readFeatures(json_LotCoverageBriarsLocal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotCoverageBriarsLocal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotCoverageBriarsLocal_11.addFeatures(features_LotCoverageBriarsLocal_11);
var lyr_LotCoverageBriarsLocal_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotCoverageBriarsLocal_11, 
                style: style_LotCoverageBriarsLocal_11,
                popuplayertitle: 'Lot Coverage - Briars Local',
                interactive: false,
                title: '<img src="styles/legend/LotCoverageBriarsLocal_11.png" /> Lot Coverage - Briars Local'
            });
var format_HSEAdvisory_12 = new ol.format.GeoJSON();
var features_HSEAdvisory_12 = format_HSEAdvisory_12.readFeatures(json_HSEAdvisory_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HSEAdvisory_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HSEAdvisory_12.addFeatures(features_HSEAdvisory_12);
var lyr_HSEAdvisory_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HSEAdvisory_12, 
                style: style_HSEAdvisory_12,
                popuplayertitle: 'HSE Advisory',
                interactive: false,
                title: '<img src="styles/legend/HSEAdvisory_12.png" /> HSE Advisory'
            });
var group_ExternalServices = new ol.layer.Group({
                                layers: [lyr_LUAL20260421_9,lyr_SydneyWaterSewer_10,lyr_LotCoverageBriarsLocal_11,lyr_HSEAdvisory_12,],
                                fold: 'open',
                                title: 'External Services'});
var group_NSWHIExtract = new ol.layer.Group({
                                layers: [lyr_HM1943_1,lyr_HM1955_2,lyr_HM1965_3,lyr_HM1986_4,lyr_HM1991_5,lyr_HM1994_6,lyr_HM2005_7,lyr_HM202x_8,],
                                fold: 'open',
                                title: 'NSW-HI-Extract'});
var group_AerialImagery = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'open',
                                title: 'Aerial Imagery'});

lyr_GoogleSatellite_0.setVisible(true);lyr_HM1943_1.setVisible(true);lyr_HM1955_2.setVisible(true);lyr_HM1965_3.setVisible(true);lyr_HM1986_4.setVisible(true);lyr_HM1991_5.setVisible(true);lyr_HM1994_6.setVisible(true);lyr_HM2005_7.setVisible(true);lyr_HM202x_8.setVisible(true);lyr_LUAL20260421_9.setVisible(true);lyr_SydneyWaterSewer_10.setVisible(true);lyr_LotCoverageBriarsLocal_11.setVisible(true);lyr_HSEAdvisory_12.setVisible(true);
var layersList = [group_AerialImagery,group_NSWHIExtract,group_ExternalServices];
lyr_SydneyWaterSewer_10.set('fieldAliases', {'id': 'id', 'Diameter': 'Diameter', });
lyr_LotCoverageBriarsLocal_11.set('fieldAliases', {'Lot': 'Lot', 'Plan Type': 'Plan Type', 'Plan Numbe': 'Plan Numbe', 'Street No': 'Street No', 'Building N': 'Building N', 'Street': 'Street', 'Suburb': 'Suburb', 'Post Code': 'Post Code', });
lyr_HSEAdvisory_12.set('fieldAliases', {'id': 'id', 'Advisory01': 'Advisory01', 'Advisory02': 'Advisory02', 'Advisory03': 'Advisory03', 'Advisory90': 'Advisory90', });
lyr_SydneyWaterSewer_10.set('fieldImages', {'id': '', 'Diameter': '', });
lyr_LotCoverageBriarsLocal_11.set('fieldImages', {'Lot': '', 'Plan Type': '', 'Plan Numbe': '', 'Street No': '', 'Building N': '', 'Street': '', 'Suburb': '', 'Post Code': '', });
lyr_HSEAdvisory_12.set('fieldImages', {'id': 'TextEdit', 'Advisory01': 'TextEdit', 'Advisory02': 'TextEdit', 'Advisory03': 'TextEdit', 'Advisory90': 'TextEdit', });
lyr_SydneyWaterSewer_10.set('fieldLabels', {'id': 'no label', 'Diameter': 'no label', });
lyr_LotCoverageBriarsLocal_11.set('fieldLabels', {'Lot': 'no label', 'Plan Type': 'no label', 'Plan Numbe': 'no label', 'Street No': 'no label', 'Building N': 'no label', 'Street': 'no label', 'Suburb': 'no label', 'Post Code': 'no label', });
lyr_HSEAdvisory_12.set('fieldLabels', {'id': 'no label', 'Advisory01': 'no label', 'Advisory02': 'no label', 'Advisory03': 'no label', 'Advisory90': 'no label', });
lyr_HSEAdvisory_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});