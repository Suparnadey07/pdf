var wms_layers = [];

var format_for_attach_pdf_0 = new ol.format.GeoJSON();
var features_for_attach_pdf_0 = format_for_attach_pdf_0.readFeatures(json_for_attach_pdf_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_for_attach_pdf_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_for_attach_pdf_0.addFeatures(features_for_attach_pdf_0);
var lyr_for_attach_pdf_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_for_attach_pdf_0, 
                style: style_for_attach_pdf_0,
                popuplayertitle: "for_attach_pdf",
                interactive: true,
                title: '<img src="styles/legend/for_attach_pdf_0.png" /> for_attach_pdf'
            });

lyr_for_attach_pdf_0.setVisible(true);
var layersList = [lyr_for_attach_pdf_0];
lyr_for_attach_pdf_0.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'photos': 'photos', 'pdf': 'pdf', });
lyr_for_attach_pdf_0.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'photos': 'ExternalResource', 'pdf': 'ExternalResource', });
lyr_for_attach_pdf_0.set('fieldLabels', {'OID_': 'inline label - always visible', 'Name': 'inline label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'photos': 'header label - visible with data', 'pdf': 'inline label - visible with data', });
lyr_for_attach_pdf_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});