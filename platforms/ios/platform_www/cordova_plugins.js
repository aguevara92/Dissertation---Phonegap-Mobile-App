cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "pushwoosh-cordova-plugin.PushNotification",
        "file": "plugins/pushwoosh-cordova-plugin/www/PushNotification.js",
        "pluginId": "pushwoosh-cordova-plugin",
        "clobbers": [
            "plugins.pushNotification"
        ]
    },
    {
        "id": "com.ogonium.goldberg.dov.geofencing.DGGeofencing",
        "file": "plugins/com.ogonium.goldberg.dov.geofencing/www/DGGeofencing.js",
        "pluginId": "com.ogonium.goldberg.dov.geofencing",
        "clobbers": [
            "DGGeofencing"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.Coordinates",
        "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.Position",
        "file": "plugins/cordova-plugin-geolocation/www/Position.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "id": "call-number.CallNumber",
        "file": "plugins/call-number/www/CallNumber.js",
        "pluginId": "call-number",
        "clobbers": [
            "call"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "pushwoosh-cordova-plugin": "6.5.0",
    "com.ogonium.goldberg.dov.geofencing": "0.3.6",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.2",
    "cordova-plugin-console": "1.0.6",
    "cordova-plugin-statusbar": "2.2.2",
    "cordova-plugin-vibration": "2.1.4",
    "cordova-plugin-whitelist": "1.3.2",
    "call-number": "0.0.2"
};
// BOTTOM OF METADATA
});