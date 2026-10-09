# Sentinel-1---Assam---Flood-Analysis---GEE
Analyzed Assam’s July 2026 flood conditions using Google Earth Engine and Sentinel-1 SAR imagery, generating before-and-after maps to visualize changes in radar backscatter across the state.
# Assam Flood Analysis Using Google Earth Engine

OVERVIEW:

This project uses Google Earth Engine (GEE) and Sentinel-1 Synthetic Aperture Radar (SAR) imagery to compare surface conditions in Assam, India, before and during the July 2026 flood period. Two maps were generated to visualize changes between the selected pre-flood and flood-period imagery.

OBJECTIVES:

* Visualize Assam's surface conditions before and during the July 2026 flood period.
* Process Sentinel-1 SAR imagery using Google Earth Engine.
* Generate before-and-after composite maps for visual comparison.
* Explore the application of satellite remote sensing in flood monitoring.

STUDY AREA:

Location: Assam, northeastern India.

The state boundary was obtained from the FAO GAUL Simplified administrative boundaries dataset available in Google Earth Engine.

DATA SOURCES:

* Satellite imagery: Sentinel-1 Ground Range Detected (GRD)
* Platform: Google Earth Engine
* Administrative boundaries: FAO GAUL Simplified 500m, 2015, Level 2
* Polarizations: VV and VH
* Instrument mode: Interferometric Wide (IW)

STUDY PERIOD:

* Before-flood reference period:** 20 March – 20 April 2026
* Flood-period imagery:** 26 July – 1 August 2026

These periods are used to compare radar imagery from before the selected flood period with imagery acquired during the July–August period.

METHODLOGY:

1. Study area selection: Extracted Assam's administrative boundary using the FAO GAUL dataset.
2. Satellite data filtering:** Selected Sentinel-1 GRD imagery covering Assam, acquired in IW mode and containing both VV and VH polarizations.
3. Temporal filtering: Created date-filtered image collections for the reference and flood periods.
4. Image compositing: Generated mosaics and clipped the imagery to the Assam boundary.
5. Band calculation: Calculated the VV/VH ratio and added it as a new band to the radar imagery.
6. Visualization: Applied visualization ranges to display the VV, VH, and VV/VH ratio bands as composite maps.
7. Map comparison: Displayed the before and after layers for visual interpretation of surface changes.

OUTPUTS:

* **Before Flood Map:** Sentinel-1 radar composite for the March–April 2026 reference period.
* **After Flood Map:** Intended Sentinel-1 radar composite for the 26 July–1 August 2026 period.

TOOLS AND TECHNOLOGIES:

* Google Earth Engine
* JavaScript
* Sentinel-1 SAR remote sensing
* Satellite image processing
* Flood monitoring and change visualization

APPLICATIONS:

This workflow demonstrates how radar satellite imagery can support flood monitoring, surface-change assessment, and geospatial analysis, including under cloudy conditions common during monsoon periods.

LIMITATIONS:

Radar backscatter changes may result from flooding, soil moisture, vegetation, surface roughness, and other factors. Therefore, visual differences alone do not confirm inundation or quantify flood extent. Further validation and water classification would be needed for reliable flood-area estimates.

AUTHOR: 
Mahesh Majumder
Remote Sensing and GIS student

RESEARCH INTEREST: 

Cryosphere and Glaciology, Hydrology, Geomorphology and Climate Change. 
