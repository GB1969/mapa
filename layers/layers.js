var wms_layers = [];

var format_nombres_edificios_0 = new ol.format.GeoJSON();
var features_nombres_edificios_0 = format_nombres_edificios_0.readFeatures(json_nombres_edificios_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nombres_edificios_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nombres_edificios_0.addFeatures(features_nombres_edificios_0);
var lyr_nombres_edificios_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nombres_edificios_0, 
                style: style_nombres_edificios_0,
                popuplayertitle: 'nombres_edificios',
                interactive: true,
                title: '<img src="styles/legend/nombres_edificios_0.png" /> nombres_edificios'
            });
var format_plano_base_1 = new ol.format.GeoJSON();
var features_plano_base_1 = format_plano_base_1.readFeatures(json_plano_base_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plano_base_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plano_base_1.addFeatures(features_plano_base_1);
var lyr_plano_base_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plano_base_1, 
                style: style_plano_base_1,
                popuplayertitle: 'plano_base',
                interactive: true,
                title: '<img src="styles/legend/plano_base_1.png" /> plano_base'
            });
var format_inventario_elementos_electricos_fia_2 = new ol.format.GeoJSON();
var features_inventario_elementos_electricos_fia_2 = format_inventario_elementos_electricos_fia_2.readFeatures(json_inventario_elementos_electricos_fia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inventario_elementos_electricos_fia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inventario_elementos_electricos_fia_2.addFeatures(features_inventario_elementos_electricos_fia_2);
var lyr_inventario_elementos_electricos_fia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inventario_elementos_electricos_fia_2, 
                style: style_inventario_elementos_electricos_fia_2,
                popuplayertitle: 'inventario_elementos_electricos_fia',
                interactive: true,
    title: 'inventario_elementos_electricos_fia<br />\
    <img src="styles/legend/inventario_elementos_electricos_fia_2_0.png" /> Caseta eléctrica<br />\
    <img src="styles/legend/inventario_elementos_electricos_fia_2_1.png" /> Luminaria<br />\
    <img src="styles/legend/inventario_elementos_electricos_fia_2_2.png" /> Poste<br />\
    <img src="styles/legend/inventario_elementos_electricos_fia_2_3.png" /> Pozo eléctrico<br />\
    <img src="styles/legend/inventario_elementos_electricos_fia_2_4.png" /> Transformador<br />\
    <img src="styles/legend/inventario_elementos_electricos_fia_2_5.png" /> <br />' });

lyr_nombres_edificios_0.setVisible(true);lyr_plano_base_1.setVisible(true);lyr_inventario_elementos_electricos_fia_2.setVisible(true);
var layersList = [lyr_nombres_edificios_0,lyr_plano_base_1,lyr_inventario_elementos_electricos_fia_2];
lyr_nombres_edificios_0.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', });
lyr_plano_base_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_inventario_elementos_electricos_fia_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Y': 'Y (m)', 'X': 'X (m)', 'Elev': 'Elev', 'Codigo': 'Codigo', 'Zona': 'Zona', 'Elemento 1': 'Equipo 1', 'Elemento 2': 'Equipo 2', 'Elemento 3': 'Equipo 3', 'Tipo de Infraestructura': 'Tipo de Infraestructura', 'Condición de la Infraestructura': 'Condición de la Infraestructura', 'Foto': 'Foto', 'tipo_mapa': 'tipo_mapa', 'popup_html': 'popup_html', 'Estructura': 'Estructura', });
lyr_nombres_edificios_0.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', });
lyr_plano_base_1.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_inventario_elementos_electricos_fia_2.set('fieldImages', {'fid': 'Hidden', 'ID': 'UniqueValues', 'Y': 'TextEdit', 'X': 'TextEdit', 'Elev': 'Hidden', 'Codigo': 'TextEdit', 'Zona': 'TextEdit', 'Elemento 1': 'TextEdit', 'Elemento 2': 'TextEdit', 'Elemento 3': 'TextEdit', 'Tipo de Infraestructura': 'TextEdit', 'Condición de la Infraestructura': 'TextEdit', 'Foto': 'ExternalResource', 'tipo_mapa': 'TextEdit', 'popup_html': 'TextEdit', 'Estructura': 'TextEdit', });
lyr_nombres_edificios_0.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'no label', });
lyr_plano_base_1.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_inventario_elementos_electricos_fia_2.set('fieldLabels', {'ID': 'hidden field', 'Y': 'no label', 'X': 'no label', 'Codigo': 'no label', 'Zona': 'no label', 'Elemento 1': 'no label', 'Elemento 2': 'no label', 'Elemento 3': 'no label', 'Tipo de Infraestructura': 'no label', 'Condición de la Infraestructura': 'no label', 'Foto': 'hidden field', 'tipo_mapa': 'hidden field', 'popup_html': 'no label', 'Estructura': 'no label', });
lyr_inventario_elementos_electricos_fia_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});