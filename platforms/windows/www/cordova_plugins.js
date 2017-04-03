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
        "id": "pushwoosh-cordova-plugin.PushwooshPluginProxy",
        "file": "plugins/pushwoosh-cordova-plugin/src/windows/PushwooshPluginProxy.js",
        "pluginId": "pushwoosh-cordova-plugin",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "pushwoosh-cordova-plugin": "6.5.0"
};
// BOTTOM OF METADATA
});