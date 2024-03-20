//&&mainmodule&&
//Vitua = {};
Vitua.vitua = (function () {
    //local variables and functions here
    return {
        init: function () {
            //first we call any Javascripts modules initializers
            for (var namespace in Vitua) {
                if (vitua[namespace].init) {
                    vitua[namespace].init();
                }
            }          
        },
        RTC: function () {
            //Then we let the module set up the sockets/WebRTC listeners.  Must have a connection though...
            for (var namespace in Vitua) {
                if (vitua[namespace].RTC) {
                    vitua[namespace].RTC();
                }
            }          
        }
    }
})();