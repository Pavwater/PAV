var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PostCode_1 = new ol.format.GeoJSON();
var features_PostCode_1 = format_PostCode_1.readFeatures(json_PostCode_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostCode_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostCode_1.addFeatures(features_PostCode_1);
var lyr_PostCode_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostCode_1, 
                style: style_PostCode_1,
                popuplayertitle: "PostCode",
                interactive: true,
                title: 'PostCode'
            });
var format_DH99PE_SEWERS_2 = new ol.format.GeoJSON();
var features_DH99PE_SEWERS_2 = format_DH99PE_SEWERS_2.readFeatures(json_DH99PE_SEWERS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DH99PE_SEWERS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DH99PE_SEWERS_2.addFeatures(features_DH99PE_SEWERS_2);
var lyr_DH99PE_SEWERS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DH99PE_SEWERS_2, 
                style: style_DH99PE_SEWERS_2,
                popuplayertitle: "DH9 9PE_SEWERS",
                interactive: true,
                title: '<img src="styles/legend/DH99PE_SEWERS_2.png" /> DH9 9PE_SEWERS'
            });
var format_DH99PE_MHs_3 = new ol.format.GeoJSON();
var features_DH99PE_MHs_3 = format_DH99PE_MHs_3.readFeatures(json_DH99PE_MHs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DH99PE_MHs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DH99PE_MHs_3.addFeatures(features_DH99PE_MHs_3);
var lyr_DH99PE_MHs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DH99PE_MHs_3, 
                style: style_DH99PE_MHs_3,
                popuplayertitle: "DH9 9PE_MHs",
                interactive: true,
                title: '<img src="styles/legend/DH99PE_MHs_3.png" /> DH9 9PE_MHs'
            });
var group_NWL_2425TANFIELDLEASTES215764DH99PE = new ol.layer.Group({
                                layers: [lyr_PostCode_1,lyr_DH99PE_SEWERS_2,lyr_DH99PE_MHs_3,],
                                fold: "open",
                                title: "NWL_24-25-, TANFIELD LEA, STE-S215764 @ DH9 9PE"});

lyr_GoogleSatellite_0.setVisible(true);lyr_PostCode_1.setVisible(true);lyr_DH99PE_SEWERS_2.setVisible(true);lyr_DH99PE_MHs_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_NWL_2425TANFIELDLEASTES215764DH99PE];
lyr_PostCode_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DH99PE_SEWERS_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DH99PE_MHs_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PostCode_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_DH99PE_SEWERS_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DH99PE_MHs_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PostCode_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DH99PE_SEWERS_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DH99PE_MHs_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DH99PE_MHs_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});