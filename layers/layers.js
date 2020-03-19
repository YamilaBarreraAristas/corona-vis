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
var lyr_Curvas_nivel_con_color_2500_500_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Curvas_nivel_con_color_2500_500",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Curvas_nivel_con_color_2500_500_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6517368.825574, -4122108.398913, -6495352.048382, -4100973.202405]
                            })
                        });
var format_Curvasdenivel_2 = new ol.format.GeoJSON();
var features_Curvasdenivel_2 = format_Curvasdenivel_2.readFeatures(json_Curvasdenivel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenivel_2.addFeatures(features_Curvasdenivel_2);
var lyr_Curvasdenivel_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvasdenivel_2, 
                style: style_Curvasdenivel_2,
                interactive: true,
                title: '<img src="styles/legend/Curvasdenivel_2.png" /> Curvas de nivel'
            });
var format_random_points_caba_3 = new ol.format.GeoJSON();
var features_random_points_caba_3 = format_random_points_caba_3.readFeatures(json_random_points_caba_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_random_points_caba_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_random_points_caba_3.addFeatures(features_random_points_caba_3);
var lyr_random_points_caba_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_random_points_caba_3, 
                style: style_random_points_caba_3,
                interactive: true,
                title: '<img src="styles/legend/random_points_caba_3.png" /> random_points_caba'
            });
var format_ide_centros_de_salud_no_dependientes_del_estado_4 = new ol.format.GeoJSON();
var features_ide_centros_de_salud_no_dependientes_del_estado_4 = format_ide_centros_de_salud_no_dependientes_del_estado_4.readFeatures(json_ide_centros_de_salud_no_dependientes_del_estado_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ide_centros_de_salud_no_dependientes_del_estado_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ide_centros_de_salud_no_dependientes_del_estado_4.addFeatures(features_ide_centros_de_salud_no_dependientes_del_estado_4);
var lyr_ide_centros_de_salud_no_dependientes_del_estado_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ide_centros_de_salud_no_dependientes_del_estado_4, 
                style: style_ide_centros_de_salud_no_dependientes_del_estado_4,
                interactive: true,
                title: '<img src="styles/legend/ide_centros_de_salud_no_dependientes_del_estado_4.png" /> ide_centros_de_salud_no_dependientes_del_estado'
            });
var format_Hospitalespblicos_5 = new ol.format.GeoJSON();
var features_Hospitalespblicos_5 = format_Hospitalespblicos_5.readFeatures(json_Hospitalespblicos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitalespblicos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitalespblicos_5.addFeatures(features_Hospitalespblicos_5);
var lyr_Hospitalespblicos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitalespblicos_5, 
                style: style_Hospitalespblicos_5,
                interactive: true,
                title: '<img src="styles/legend/Hospitalespblicos_5.png" /> Hospitales públicos'
            });
var format_ignprovinciacopy_6 = new ol.format.GeoJSON();
var jsonSource_ignprovinciacopy_6 = new ol.source.Vector({
    attributions: ' ',
    format: format_ignprovinciacopy_6
});var lyr_ignprovinciacopy_6 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ignprovinciacopy_6, 
    style: style_ignprovinciacopy_6,
    interactive: true,
    title: "ign:provincia copy"
});

function getignprovinciacopy_6Json(geojson) {
    var features_ignprovinciacopy_6 = format_ignprovinciacopy_6.readFeatures(geojson);
    jsonSource_ignprovinciacopy_6.addFeatures(features_ignprovinciacopy_6);
}
var format_borde_capital_federal_7 = new ol.format.GeoJSON();
var features_borde_capital_federal_7 = format_borde_capital_federal_7.readFeatures(json_borde_capital_federal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_borde_capital_federal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_borde_capital_federal_7.addFeatures(features_borde_capital_federal_7);
var lyr_borde_capital_federal_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_borde_capital_federal_7, 
                style: style_borde_capital_federal_7,
                interactive: true,
                title: '<img src="styles/legend/borde_capital_federal_7.png" /> borde_capital_federal'
            });
var format_ignareas_de_transporte_aereo_GB005_8 = new ol.format.GeoJSON();
var jsonSource_ignareas_de_transporte_aereo_GB005_8 = new ol.source.Vector({
    attributions: ' ',
    format: format_ignareas_de_transporte_aereo_GB005_8
});var lyr_ignareas_de_transporte_aereo_GB005_8 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ignareas_de_transporte_aereo_GB005_8, 
    style: style_ignareas_de_transporte_aereo_GB005_8,
    interactive: true,
    title: "ign:areas_de_transporte_aereo_GB005"
});

function getignareas_de_transporte_aereo_GB005_8Json(geojson) {
    var features_ignareas_de_transporte_aereo_GB005_8 = format_ignareas_de_transporte_aereo_GB005_8.readFeatures(geojson);
    jsonSource_ignareas_de_transporte_aereo_GB005_8.addFeatures(features_ignareas_de_transporte_aereo_GB005_8);
}
var format_ignpuntos_de_transporte_aereo_GB005_9 = new ol.format.GeoJSON();
var jsonSource_ignpuntos_de_transporte_aereo_GB005_9 = new ol.source.Vector({
    attributions: ' ',
    format: format_ignpuntos_de_transporte_aereo_GB005_9
});var lyr_ignpuntos_de_transporte_aereo_GB005_9 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ignpuntos_de_transporte_aereo_GB005_9, 
    style: style_ignpuntos_de_transporte_aereo_GB005_9,
    interactive: true,
    title: "ign:puntos_de_transporte_aereo_GB005"
});

function getignpuntos_de_transporte_aereo_GB005_9Json(geojson) {
    var features_ignpuntos_de_transporte_aereo_GB005_9 = format_ignpuntos_de_transporte_aereo_GB005_9.readFeatures(geojson);
    jsonSource_ignpuntos_de_transporte_aereo_GB005_9.addFeatures(features_ignpuntos_de_transporte_aereo_GB005_9);
}
var format_idecuarteles_y_destacamentos_de_bomberos_10 = new ol.format.GeoJSON();
var jsonSource_idecuarteles_y_destacamentos_de_bomberos_10 = new ol.source.Vector({
    attributions: ' ',
    format: format_idecuarteles_y_destacamentos_de_bomberos_10
});var lyr_idecuarteles_y_destacamentos_de_bomberos_10 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_idecuarteles_y_destacamentos_de_bomberos_10, 
    style: style_idecuarteles_y_destacamentos_de_bomberos_10,
    interactive: true,
    title: "ide:cuarteles_y_destacamentos_de_bomberos"
});

function getidecuarteles_y_destacamentos_de_bomberos_10Json(geojson) {
    var features_idecuarteles_y_destacamentos_de_bomberos_10 = format_idecuarteles_y_destacamentos_de_bomberos_10.readFeatures(geojson);
    jsonSource_idecuarteles_y_destacamentos_de_bomberos_10.addFeatures(features_idecuarteles_y_destacamentos_de_bomberos_10);
}
var lyr_Curvas_nivel_con_color_2500_500_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Curvas_nivel_con_color_2500_500",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Curvas_nivel_con_color_2500_500_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6517368.825574, -4122108.398913, -6495352.048382, -4100973.202405]
                            })
                        });
var format_Curvasdenivel_12 = new ol.format.GeoJSON();
var features_Curvasdenivel_12 = format_Curvasdenivel_12.readFeatures(json_Curvasdenivel_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenivel_12.addFeatures(features_Curvasdenivel_12);
var lyr_Curvasdenivel_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvasdenivel_12, 
                style: style_Curvasdenivel_12,
                interactive: true,
                title: '<img src="styles/legend/Curvasdenivel_12.png" /> Curvas de nivel'
            });
var format_random_points_caba_13 = new ol.format.GeoJSON();
var features_random_points_caba_13 = format_random_points_caba_13.readFeatures(json_random_points_caba_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_random_points_caba_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_random_points_caba_13.addFeatures(features_random_points_caba_13);
var lyr_random_points_caba_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_random_points_caba_13, 
                style: style_random_points_caba_13,
                interactive: true,
                title: '<img src="styles/legend/random_points_caba_13.png" /> random_points_caba'
            });
var format_ide_centros_de_salud_no_dependientes_del_estado_14 = new ol.format.GeoJSON();
var features_ide_centros_de_salud_no_dependientes_del_estado_14 = format_ide_centros_de_salud_no_dependientes_del_estado_14.readFeatures(json_ide_centros_de_salud_no_dependientes_del_estado_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ide_centros_de_salud_no_dependientes_del_estado_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ide_centros_de_salud_no_dependientes_del_estado_14.addFeatures(features_ide_centros_de_salud_no_dependientes_del_estado_14);
var lyr_ide_centros_de_salud_no_dependientes_del_estado_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ide_centros_de_salud_no_dependientes_del_estado_14, 
                style: style_ide_centros_de_salud_no_dependientes_del_estado_14,
                interactive: true,
                title: '<img src="styles/legend/ide_centros_de_salud_no_dependientes_del_estado_14.png" /> ide_centros_de_salud_no_dependientes_del_estado'
            });
var format_Hospitalespblicos_15 = new ol.format.GeoJSON();
var features_Hospitalespblicos_15 = format_Hospitalespblicos_15.readFeatures(json_Hospitalespblicos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitalespblicos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitalespblicos_15.addFeatures(features_Hospitalespblicos_15);
var lyr_Hospitalespblicos_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitalespblicos_15, 
                style: style_Hospitalespblicos_15,
                interactive: true,
                title: '<img src="styles/legend/Hospitalespblicos_15.png" /> Hospitales públicos'
            });
var format_ignareas_de_transporte_aereo_GB005_16 = new ol.format.GeoJSON();
var jsonSource_ignareas_de_transporte_aereo_GB005_16 = new ol.source.Vector({
    attributions: ' ',
    format: format_ignareas_de_transporte_aereo_GB005_16
});var lyr_ignareas_de_transporte_aereo_GB005_16 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ignareas_de_transporte_aereo_GB005_16, 
    style: style_ignareas_de_transporte_aereo_GB005_16,
    interactive: true,
    title: "ign:areas_de_transporte_aereo_GB005"
});

function getignareas_de_transporte_aereo_GB005_16Json(geojson) {
    var features_ignareas_de_transporte_aereo_GB005_16 = format_ignareas_de_transporte_aereo_GB005_16.readFeatures(geojson);
    jsonSource_ignareas_de_transporte_aereo_GB005_16.addFeatures(features_ignareas_de_transporte_aereo_GB005_16);
}
var format_ignpuntos_de_transporte_aereo_GB005_17 = new ol.format.GeoJSON();
var jsonSource_ignpuntos_de_transporte_aereo_GB005_17 = new ol.source.Vector({
    attributions: ' ',
    format: format_ignpuntos_de_transporte_aereo_GB005_17
});var lyr_ignpuntos_de_transporte_aereo_GB005_17 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_ignpuntos_de_transporte_aereo_GB005_17, 
    style: style_ignpuntos_de_transporte_aereo_GB005_17,
    interactive: true,
    title: "ign:puntos_de_transporte_aereo_GB005"
});

function getignpuntos_de_transporte_aereo_GB005_17Json(geojson) {
    var features_ignpuntos_de_transporte_aereo_GB005_17 = format_ignpuntos_de_transporte_aereo_GB005_17.readFeatures(geojson);
    jsonSource_ignpuntos_de_transporte_aereo_GB005_17.addFeatures(features_ignpuntos_de_transporte_aereo_GB005_17);
}
var format_idecuarteles_y_destacamentos_de_bomberos_18 = new ol.format.GeoJSON();
var jsonSource_idecuarteles_y_destacamentos_de_bomberos_18 = new ol.source.Vector({
    attributions: ' ',
    format: format_idecuarteles_y_destacamentos_de_bomberos_18
});var lyr_idecuarteles_y_destacamentos_de_bomberos_18 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_idecuarteles_y_destacamentos_de_bomberos_18, 
    style: style_idecuarteles_y_destacamentos_de_bomberos_18,
    interactive: true,
    title: "ide:cuarteles_y_destacamentos_de_bomberos"
});

function getidecuarteles_y_destacamentos_de_bomberos_18Json(geojson) {
    var features_idecuarteles_y_destacamentos_de_bomberos_18 = format_idecuarteles_y_destacamentos_de_bomberos_18.readFeatures(geojson);
    jsonSource_idecuarteles_y_destacamentos_de_bomberos_18.addFeatures(features_idecuarteles_y_destacamentos_de_bomberos_18);
}
var group_otros = new ol.layer.Group({
                                layers: [lyr_ignareas_de_transporte_aereo_GB005_16,lyr_ignpuntos_de_transporte_aereo_GB005_17,lyr_idecuarteles_y_destacamentos_de_bomberos_18,],
                                title: "otros"});
var group_Centrossalud = new ol.layer.Group({
                                layers: [lyr_ide_centros_de_salud_no_dependientes_del_estado_14,lyr_Hospitalespblicos_15,],
                                title: "Centros salud"});
var group_Simulacinpositivos = new ol.layer.Group({
                                layers: [lyr_Curvas_nivel_con_color_2500_500_11,lyr_Curvasdenivel_12,lyr_random_points_caba_13,],
                                title: "Simulación positivos"});
var group_CABA = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Curvas_nivel_con_color_2500_500_11,lyr_Curvasdenivel_12,lyr_random_points_caba_13,lyr_ide_centros_de_salud_no_dependientes_del_estado_14,lyr_Hospitalespblicos_15,lyr_ignprovinciacopy_6,lyr_borde_capital_federal_7,lyr_ignareas_de_transporte_aereo_GB005_16,lyr_ignpuntos_de_transporte_aereo_GB005_17,lyr_idecuarteles_y_destacamentos_de_bomberos_18,],
                                title: "CABA"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Curvas_nivel_con_color_2500_500_1.setVisible(true);lyr_Curvasdenivel_2.setVisible(true);lyr_random_points_caba_3.setVisible(true);lyr_ide_centros_de_salud_no_dependientes_del_estado_4.setVisible(true);lyr_Hospitalespblicos_5.setVisible(true);lyr_ignprovinciacopy_6.setVisible(true);lyr_borde_capital_federal_7.setVisible(true);lyr_ignareas_de_transporte_aereo_GB005_8.setVisible(true);lyr_ignpuntos_de_transporte_aereo_GB005_9.setVisible(true);lyr_idecuarteles_y_destacamentos_de_bomberos_10.setVisible(true);lyr_Curvas_nivel_con_color_2500_500_11.setVisible(true);lyr_Curvasdenivel_12.setVisible(true);lyr_random_points_caba_13.setVisible(true);lyr_ide_centros_de_salud_no_dependientes_del_estado_14.setVisible(true);lyr_Hospitalespblicos_15.setVisible(true);lyr_ignareas_de_transporte_aereo_GB005_16.setVisible(true);lyr_ignpuntos_de_transporte_aereo_GB005_17.setVisible(true);lyr_idecuarteles_y_destacamentos_de_bomberos_18.setVisible(true);
var layersList = [group_CABA];
lyr_Curvasdenivel_2.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_random_points_caba_3.set('fieldAliases', {'id': 'id', });
lyr_ide_centros_de_salud_no_dependientes_del_estado_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CALLE': 'CALLE', 'ALTURA': 'ALTURA', 'PISO': 'PISO', 'DIRECCION': 'DIRECCION', 'TELEFONOS': 'TELEFONOS', 'OBSERV': 'OBSERV', });
lyr_Hospitalespblicos_5.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'NOM_MAP': 'NOM_MAP', 'OBJETO': 'OBJETO', 'CALLE': 'CALLE', 'ALTURA': 'ALTURA', 'DOM_NORMA': 'DOM_NORMA', 'DOM_GEO': 'DOM_GEO', 'TELEFONO': 'TELEFONO', 'GUARDIA': 'GUARDIA', 'FAX': 'FAX', 'WEB': 'WEB', 'COD_POSTAL': 'COD_POSTAL', 'TIPO': 'TIPO', 'TIPO_ESPEC': 'TIPO_ESPEC', 'MOD_AT_1': 'MOD_AT_1', 'MOD_AT_2': 'MOD_AT_2', 'DEPEND_ADM': 'DEPEND_ADM', 'DIRECTOR': 'DIRECTOR', });
lyr_ignprovinciacopy_6.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_borde_capital_federal_7.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_ignareas_de_transporte_aereo_GB005_8.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fun': 'fun', 'fdc': 'fdc', 'sag': 'sag', });
lyr_ignpuntos_de_transporte_aereo_GB005_9.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fun': 'fun', 'fdc': 'fdc', 'sag': 'sag', });
lyr_idecuarteles_y_destacamentos_de_bomberos_10.set('fieldAliases', {'ID': 'ID', 'DCIA': 'DCIA', 'TIPO': 'TIPO', 'CUARTEL': 'CUARTEL', 'CALLE_OFIC': 'CALLE_OFIC', 'INTERS': 'INTERS', 'ALTURA': 'ALTURA', 'DIRECC': 'DIRECC', 'CP': 'CP', 'TEL': 'TEL', 'GESTION': 'GESTION', 'OBSERVACIO': 'OBSERVACIO', });
lyr_Curvasdenivel_12.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_random_points_caba_13.set('fieldAliases', {'id': 'id', });
lyr_ide_centros_de_salud_no_dependientes_del_estado_14.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CALLE': 'CALLE', 'ALTURA': 'ALTURA', 'PISO': 'PISO', 'DIRECCION': 'DIRECCION', 'TELEFONOS': 'TELEFONOS', 'OBSERV': 'OBSERV', });
lyr_Hospitalespblicos_15.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'NOM_MAP': 'NOM_MAP', 'OBJETO': 'OBJETO', 'CALLE': 'CALLE', 'ALTURA': 'ALTURA', 'DOM_NORMA': 'DOM_NORMA', 'DOM_GEO': 'DOM_GEO', 'TELEFONO': 'TELEFONO', 'GUARDIA': 'GUARDIA', 'FAX': 'FAX', 'WEB': 'WEB', 'COD_POSTAL': 'COD_POSTAL', 'TIPO': 'TIPO', 'TIPO_ESPEC': 'TIPO_ESPEC', 'MOD_AT_1': 'MOD_AT_1', 'MOD_AT_2': 'MOD_AT_2', 'DEPEND_ADM': 'DEPEND_ADM', 'DIRECTOR': 'DIRECTOR', });
lyr_ignareas_de_transporte_aereo_GB005_16.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fun': 'fun', 'fdc': 'fdc', 'sag': 'sag', });
lyr_ignpuntos_de_transporte_aereo_GB005_17.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fun': 'fun', 'fdc': 'fdc', 'sag': 'sag', });
lyr_idecuarteles_y_destacamentos_de_bomberos_18.set('fieldAliases', {'ID': 'ID', 'DCIA': 'DCIA', 'TIPO': 'TIPO', 'CUARTEL': 'CUARTEL', 'CALLE_OFIC': 'CALLE_OFIC', 'INTERS': 'INTERS', 'ALTURA': 'ALTURA', 'DIRECC': 'DIRECC', 'CP': 'CP', 'TEL': 'TEL', 'GESTION': 'GESTION', 'OBSERVACIO': 'OBSERVACIO', });
lyr_Curvasdenivel_2.set('fieldImages', {'id': '', 'cost_level': '', });
lyr_random_points_caba_3.set('fieldImages', {'id': '', });
lyr_ide_centros_de_salud_no_dependientes_del_estado_4.set('fieldImages', {'NOMBRE': '', 'CALLE': '', 'ALTURA': '', 'PISO': '', 'DIRECCION': '', 'TELEFONOS': '', 'OBSERV': '', });
lyr_Hospitalespblicos_5.set('fieldImages', {'ID': '', 'NOMBRE': '', 'NOM_MAP': '', 'OBJETO': '', 'CALLE': '', 'ALTURA': '', 'DOM_NORMA': '', 'DOM_GEO': '', 'TELEFONO': '', 'GUARDIA': '', 'FAX': '', 'WEB': '', 'COD_POSTAL': '', 'TIPO': '', 'TIPO_ESPEC': '', 'MOD_AT_1': '', 'MOD_AT_2': '', 'DEPEND_ADM': '', 'DIRECTOR': '', });
lyr_ignprovinciacopy_6.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'in1': '', 'fdc': '', 'sag': '', });
lyr_borde_capital_federal_7.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'in1': '', 'fdc': '', 'sag': '', });
lyr_ignareas_de_transporte_aereo_GB005_8.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'fun': '', 'fdc': '', 'sag': '', });
lyr_ignpuntos_de_transporte_aereo_GB005_9.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'fun': '', 'fdc': '', 'sag': '', });
lyr_idecuarteles_y_destacamentos_de_bomberos_10.set('fieldImages', {'ID': '', 'DCIA': '', 'TIPO': '', 'CUARTEL': '', 'CALLE_OFIC': '', 'INTERS': '', 'ALTURA': '', 'DIRECC': '', 'CP': '', 'TEL': '', 'GESTION': '', 'OBSERVACIO': '', });
lyr_Curvasdenivel_12.set('fieldImages', {'id': '', 'cost_level': '', });
lyr_random_points_caba_13.set('fieldImages', {'id': '', });
lyr_ide_centros_de_salud_no_dependientes_del_estado_14.set('fieldImages', {'NOMBRE': '', 'CALLE': '', 'ALTURA': '', 'PISO': '', 'DIRECCION': '', 'TELEFONOS': '', 'OBSERV': '', });
lyr_Hospitalespblicos_15.set('fieldImages', {'ID': '', 'NOMBRE': '', 'NOM_MAP': '', 'OBJETO': '', 'CALLE': '', 'ALTURA': '', 'DOM_NORMA': '', 'DOM_GEO': '', 'TELEFONO': '', 'GUARDIA': '', 'FAX': '', 'WEB': '', 'COD_POSTAL': '', 'TIPO': '', 'TIPO_ESPEC': '', 'MOD_AT_1': '', 'MOD_AT_2': '', 'DEPEND_ADM': '', 'DIRECTOR': '', });
lyr_ignareas_de_transporte_aereo_GB005_16.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'fun': '', 'fdc': '', 'sag': '', });
lyr_ignpuntos_de_transporte_aereo_GB005_17.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'fun': '', 'fdc': '', 'sag': '', });
lyr_idecuarteles_y_destacamentos_de_bomberos_18.set('fieldImages', {'ID': '', 'DCIA': '', 'TIPO': '', 'CUARTEL': '', 'CALLE_OFIC': '', 'INTERS': '', 'ALTURA': '', 'DIRECC': '', 'CP': '', 'TEL': '', 'GESTION': '', 'OBSERVACIO': '', });
lyr_Curvasdenivel_2.set('fieldLabels', {});
lyr_random_points_caba_3.set('fieldLabels', {});
lyr_ide_centros_de_salud_no_dependientes_del_estado_4.set('fieldLabels', {});
lyr_Hospitalespblicos_5.set('fieldLabels', {});
lyr_ignprovinciacopy_6.set('fieldLabels', {});
lyr_borde_capital_federal_7.set('fieldLabels', {});
lyr_ignareas_de_transporte_aereo_GB005_8.set('fieldLabels', {});
lyr_ignpuntos_de_transporte_aereo_GB005_9.set('fieldLabels', {});
lyr_idecuarteles_y_destacamentos_de_bomberos_10.set('fieldLabels', {});
lyr_Curvasdenivel_12.set('fieldLabels', {});
lyr_random_points_caba_13.set('fieldLabels', {});
lyr_ide_centros_de_salud_no_dependientes_del_estado_14.set('fieldLabels', {});
lyr_Hospitalespblicos_15.set('fieldLabels', {});
lyr_ignareas_de_transporte_aereo_GB005_16.set('fieldLabels', {});
lyr_ignpuntos_de_transporte_aereo_GB005_17.set('fieldLabels', {});
lyr_idecuarteles_y_destacamentos_de_bomberos_18.set('fieldLabels', {});
lyr_idecuarteles_y_destacamentos_de_bomberos_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});