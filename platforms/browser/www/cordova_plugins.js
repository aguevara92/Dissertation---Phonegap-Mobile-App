cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/pushwoosh-cordova-plugin/www/PushNotification.js",
        "id": "pushwoosh-cordova-plugin.PushNotification",
        "pluginId": "pushwoosh-cordova-plugin",
        "clobbers": [
            "plugins.pushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "pushwoosh-cordova-plugin": "6.5.0"
}
// BOTTOM OF METADATA
});