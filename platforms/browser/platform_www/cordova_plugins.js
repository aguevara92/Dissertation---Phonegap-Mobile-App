cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/pushwoosh-cordova-plugin/www/PushNotification.js",
        "id": "pushwoosh-cordova-plugin.PushNotification",
        "pluginId": "pushwoosh-cordova-plugin",
        "clobbers": [
            "plugins.pushNotification"
        ]
    },
    {
        "file": "plugins/com.ogonium.goldberg.dov.geofencing/www/DGGeofencing.js",
        "id": "com.ogonium.goldberg.dov.geofencing.DGGeofencing",
        "pluginId": "com.ogonium.goldberg.dov.geofencing",
        "clobbers": [
            "DGGeofencing"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/src/browser/Vibration.js",
        "id": "cordova-plugin-vibration.Vibration",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/call-number/www/CallNumber.js",
        "id": "call-number.CallNumber",
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
}
// BOTTOM OF METADATA
});