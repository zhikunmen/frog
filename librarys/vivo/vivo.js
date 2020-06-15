var vivo = {
    init: function (version, gameId, gameKey, gameSecret) {
        GameSDK.init(version, gameId, gameKey, gameSecret);
    },
    getRoomInfo: function () {
        GameSDK.getRoomInfo();
    },
    setOnRoomInfoCB: function (callback) {
        GameSDK.setOnRoomInfoCB(callback);
    },
    setOnInitCB: function (callback) {
        GameSDK.setOnInitCB(callback);
    },
    setOnReadyCB: function (callback) {
        GameSDK.setOnReadyCB(callback);
    },
    setOnStartCB: function (callback) {
        GameSDK.setOnStartCB(callback);
    },
    setOnFinishCB: function (callback) {
        GameSDK.setOnFinishCB(callback);
    },
    setOrientation: function (orientation) {
        GameSDK.setOrientation(orientation);
    },
    quit: function (reason) {
        GameSDK.quit(reason);
    },
    finish: function (result) {
        GameSDK.finish(result);
    },
};