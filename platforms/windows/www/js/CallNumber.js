var CallNumber = function(){};

CallNumber.prototype.callNumber = function(success, failure, number, bypassAppChooser){
    cordova.exec(success, failure, "CallNumber", "callNumber", [number, bypassAppChooser]);
};

//Plug in to Cordova

if (!window.plugins) {
    window.plugins = {};
}


    if (!window.Cordova) {
    	console.log("no windows")
        window.Cordova = cordova;
    };

    if(!window.plugins) window.plugins = {};
    window.plugins.CallNumber = new CallNumber();
