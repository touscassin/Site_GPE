var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Exploitation_1 = new ol.format.GeoJSON();
var features_Exploitation_1 = format_Exploitation_1.readFeatures(json_Exploitation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exploitation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exploitation_1.addFeatures(features_Exploitation_1);
var lyr_Exploitation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Exploitation_1, 
                style: style_Exploitation_1,
                interactive: true,
                title: '<img src="styles/legend/Exploitation_1.png" /> Exploitation'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Exploitation_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Exploitation_1];
lyr_Exploitation_1.set('fieldAliases', {'id': 'id', 'Ville': 'Ville', 'Adresse': 'Adresse', });
lyr_Exploitation_1.set('fieldImages', {'id': 'TextEdit', 'Ville': 'TextEdit', 'Adresse': 'TextEdit', });
lyr_Exploitation_1.set('fieldLabels', {'id': 'no label', 'Ville': 'no label', 'Adresse': 'no label', });
lyr_Exploitation_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});