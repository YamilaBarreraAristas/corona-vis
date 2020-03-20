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
var lyr_Curvasdenivel500m_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Curvas de nivel 500m ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Curvasdenivel500m_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6517368.825574, -4122108.398913, -6495352.048382, -4100973.202405]
                            })
                        });
var format_Curvasdenivel500m_2 = new ol.format.GeoJSON();
var features_Curvasdenivel500m_2 = format_Curvasdenivel500m_2.readFeatures(json_Curvasdenivel500m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel500m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenivel500m_2.addFeatures(features_Curvasdenivel500m_2);
var lyr_Curvasdenivel500m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvasdenivel500m_2, 
                style: style_Curvasdenivel500m_2,
                interactive: true,
                title: '<img src="styles/legend/Curvasdenivel500m_2.png" /> Curvas de nivel 500m'
            });
var format_Personasinfectadas_3 = new ol.format.GeoJSON();
var features_Personasinfectadas_3 = format_Personasinfectadas_3.readFeatures(json_Personasinfectadas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Personasinfectadas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Personasinfectadas_3.addFeatures(features_Personasinfectadas_3);
var lyr_Personasinfectadas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Personasinfectadas_3, 
                style: style_Personasinfectadas_3,
                interactive: true,
                title: '<img src="styles/legend/Personasinfectadas_3.png" /> Personas infectadas'
            });
var format_Centrosdesaludprivados_4 = new ol.format.GeoJSON();
var features_Centrosdesaludprivados_4 = format_Centrosdesaludprivados_4.readFeatures(json_Centrosdesaludprivados_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrosdesaludprivados_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrosdesaludprivados_4.addFeatures(features_Centrosdesaludprivados_4);
var lyr_Centrosdesaludprivados_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centrosdesaludprivados_4, 
                style: style_Centrosdesaludprivados_4,
                interactive: true,
                title: '<img src="styles/legend/Centrosdesaludprivados_4.png" /> Centros de salud privados'
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
var format_CapitalFederal_6 = new ol.format.GeoJSON();
var features_CapitalFederal_6 = format_CapitalFederal_6.readFeatures(json_CapitalFederal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapitalFederal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapitalFederal_6.addFeatures(features_CapitalFederal_6);
var lyr_CapitalFederal_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CapitalFederal_6, 
                style: style_CapitalFederal_6,
                interactive: true,
                title: '<img src="styles/legend/CapitalFederal_6.png" /> Capital Federal'
            });
var group_Regiones = new ol.layer.Group({
                                layers: [lyr_CapitalFederal_6,],
                                title: "Regiones"});
var group_Centrossalud = new ol.layer.Group({
                                layers: [lyr_Centrosdesaludprivados_4,lyr_Hospitalespblicos_5,],
                                title: "Centros salud"});
var group_Simulacinpositivos = new ol.layer.Group({
                                layers: [lyr_Curvasdenivel500m_1,lyr_Curvasdenivel500m_2,lyr_Personasinfectadas_3,],
                                title: "Simulación positivos"});
var group_Mapas = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mapas"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Curvasdenivel500m_1.setVisible(true);lyr_Curvasdenivel500m_2.setVisible(true);lyr_Personasinfectadas_3.setVisible(true);lyr_Centrosdesaludprivados_4.setVisible(true);lyr_Hospitalespblicos_5.setVisible(true);lyr_CapitalFederal_6.setVisible(true);
var layersList = [group_Mapas,group_Simulacinpositivos,group_Centrossalud,group_Regiones];
lyr_Curvasdenivel500m_2.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_Personasinfectadas_3.set('fieldAliases', {'id': 'id', });
lyr_Centrosdesaludprivados_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CALLE': 'CALLE', 'ALTURA': 'ALTURA', 'PISO': 'PISO', 'DIRECCION': 'DIRECCION', 'TELEFONOS': 'TELEFONOS', 'OBSERV': 'OBSERV', });
lyr_Hospitalespblicos_5.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'NOM_MAP': 'NOM_MAP', 'OBJETO': 'OBJETO', 'CALLE': 'CALLE', 'ALTURA': 'ALTURA', 'DOM_NORMA': 'DOM_NORMA', 'DOM_GEO': 'DOM_GEO', 'TELEFONO': 'TELEFONO', 'GUARDIA': 'GUARDIA', 'FAX': 'FAX', 'WEB': 'WEB', 'COD_POSTAL': 'COD_POSTAL', 'TIPO': 'TIPO', 'TIPO_ESPEC': 'TIPO_ESPEC', 'MOD_AT_1': 'MOD_AT_1', 'MOD_AT_2': 'MOD_AT_2', 'DEPEND_ADM': 'DEPEND_ADM', 'DIRECTOR': 'DIRECTOR', });
lyr_CapitalFederal_6.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Curvasdenivel500m_2.set('fieldImages', {'id': '', 'cost_level': '', });
lyr_Personasinfectadas_3.set('fieldImages', {'id': '', });
lyr_Centrosdesaludprivados_4.set('fieldImages', {'NOMBRE': '', 'CALLE': '', 'ALTURA': '', 'PISO': '', 'DIRECCION': '', 'TELEFONOS': '', 'OBSERV': '', });
lyr_Hospitalespblicos_5.set('fieldImages', {'ID': '', 'NOMBRE': '', 'NOM_MAP': '', 'OBJETO': '', 'CALLE': '', 'ALTURA': '', 'DOM_NORMA': '', 'DOM_GEO': '', 'TELEFONO': '', 'GUARDIA': '', 'FAX': '', 'WEB': '', 'COD_POSTAL': '', 'TIPO': '', 'TIPO_ESPEC': '', 'MOD_AT_1': '', 'MOD_AT_2': '', 'DEPEND_ADM': '', 'DIRECTOR': '', });
lyr_CapitalFederal_6.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'in1': '', 'fdc': '', 'sag': '', });
lyr_Curvasdenivel500m_2.set('fieldLabels', {});
lyr_Personasinfectadas_3.set('fieldLabels', {});
lyr_Centrosdesaludprivados_4.set('fieldLabels', {});
lyr_Hospitalespblicos_5.set('fieldLabels', {});
lyr_CapitalFederal_6.set('fieldLabels', {});
lyr_CapitalFederal_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});