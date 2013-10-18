
var app = {

    isDeviceSupported: false,


    initialize: function() {
        this.bindEvents();
    },


    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },


    onDeviceSupportedCallback: function() {
        WikitudePlugin.loadARchitectWorld('assets/www/world/index.html');
    },

    onDeviceNotSupportedCallback: function() {
    },

    onDeviceReady: function() {

        // check if the current device is able to launch ARchitect Worlds
        WikitudePlugin.isDeviceSupported(app.onDeviceSupportedCallback, app.onDeviceNotSupportedCallback);
    }
};

app.initialize();
