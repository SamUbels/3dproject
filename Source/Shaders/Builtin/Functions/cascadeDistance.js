//This file is automatically rebuilt by the Cesium build process.
/*global define*/
define(function() {
    'use strict';
    return "\n\
uniform vec4 shadowMap_cascadeDistances;\n\
\n\
float czm_cascadeDistance(vec4 weights)\n\
{\n\
    return dot(shadowMap_cascadeDistances, weights);\n\
}\n\
";
});