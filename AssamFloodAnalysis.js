// 24 july
var before_start = '2026-03-20';
var before_end = '2026-04-20';
var after_start = '2026-07-26';
var after_end = '2026-08-01';
var admin1 = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level2");
var assam = admin1.filter(ee.Filter.eq('ADM1_NAME', 'Assam'));
var geometry = assam.geometry();
Map.addLayer(geometry, {color: 'grey'}, 'Assam District');
var s1 = ee.ImageCollection("COPERNICUS/S1_GRD");
var filter = s1
    .filter(ee.Filter.eq('instrumentMode', 'IW'))
    .filter(ee.Filter.listContains('transmitterReceiverPolarisation','VH'))
    .filter(ee.Filter.listContains('transmitterReceiverPolarisation','VV'))
   // .filter(ee.Filter.listContains('orbitProperties_pass','DESCENDING'))
    //.filter(ee.Filter.listContains('resolution_meters',10))
    .filter(ee.Filter.bounds(geometry))
    .select(['VV','VH'])
print(filter.first());
var BeforeCollection = filter.filter(ee.Filter.date(before_start, before_end));
var AfterCollection = filter.filter(ee.Filter.date(after_start, after_end));
var Before = BeforeCollection.mosaic().clip(geometry);
var After = BeforeCollection.mosaic().clip(geometry);

var addBand = function(image) {
  var ratioBand = image.select('VV').divide(image.select('VH')).rename('VV/VH')
  return image.addBands(ratioBand)
};
var BeforeRGB = addBand(Before);
var AfterRGB = addBand(After);
print(BeforeRGB);

var visparam = {
  min: [-25, -25, 0],
  max: [0, 0, 2]
};

Map.addLayer(BeforeRGB, visparam, 'BEFORE');
Map.addLayer(AfterRGB, visparam, 'AFTER');// 24 july
var before_start = '2026-03-20';
var before_end = '2026-04-20';
var after_start = '2026-07-26';
var after_end = '2026-08-01';
var admin1 = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level2");
var assam = admin1.filter(ee.Filter.eq('ADM1_NAME', 'Assam'));
var geometry = assam.geometry();
Map.addLayer(geometry, {color: 'grey'}, 'Assam District');
var s1 = ee.ImageCollection("COPERNICUS/S1_GRD");
var filter = s1
    .filter(ee.Filter.eq('instrumentMode', 'IW'))
    .filter(ee.Filter.listContains('transmitterReceiverPolarisation','VH'))
    .filter(ee.Filter.listContains('transmitterReceiverPolarisation','VV'))
   // .filter(ee.Filter.listContains('orbitProperties_pass','DESCENDING'))
    //.filter(ee.Filter.listContains('resolution_meters',10))
    .filter(ee.Filter.bounds(geometry))
    .select(['VV','VH'])
print(filter.first());
var BeforeCollection = filter.filter(ee.Filter.date(before_start, before_end));
var AfterCollection = filter.filter(ee.Filter.date(after_start, after_end));
var Before = BeforeCollection.mosaic().clip(geometry);
var After = BeforeCollection.mosaic().clip(geometry);

var addBand = function(image) {
  var ratioBand = image.select('VV').divide(image.select('VH')).rename('VV/VH')
  return image.addBands(ratioBand)
};
var BeforeRGB = addBand(Before);
var AfterRGB = addBand(After);
print(BeforeRGB);

var visparam = {
  min: [-25, -25, 0],
  max: [0, 0, 2]
};

Map.addLayer(BeforeRGB, visparam, 'BEFORE');
Map.addLayer(AfterRGB, visparam, 'AFTER');