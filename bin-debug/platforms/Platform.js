var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Platform = (function () {
    function Platform() {
    }
    Platform.initPlatform = function (platformID) {
        Platform.curPlatformID = platformID;
        App.Language = LanguageType.Ch;
        switch (Platform.curPlatformID) {
            case Platform.G360:
                Platform.curPlatform = new G360Platform();
                break;
        }
        App.CurrPlatformUid = platformID.toString();
    };
    Platform.G360 = 16;
    Platform.curPlatformID = Platform.G360;
    return Platform;
}());
__reflect(Platform.prototype, "Platform");
