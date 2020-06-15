var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Statistics = (function () {
    function Statistics() {
    }
    /**
     * 初始化
     */
    Statistics.init = function (platform, url, chanId) {
        if (url === void 0) { url = "https://gameanalysis.egret.com/pk/stat.php"; }
        if (chanId === void 0) { chanId = ""; }
        this.platform = platform;
        if (chanId != "" && chanId != undefined && chanId != null) {
            this.chanId = chanId;
        }
        console.log("chanId", chanId);
        this.url = url;
        //http初始化
        this.loader = new egret.URLLoader();
        this.loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        this.loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        this.loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
    };
    /**
     * 打开游戏
     */
    Statistics.open = function () {
        var data = {
            "act": "open",
            "gameId": App.CurrGameId,
            "roomId": App.CurrRoomId,
            "platform": this.platform,
            "platUid": App.CurrPlatformUid,
            "chanId": this.chanId
        };
        this.sendData(data);
    };
    /**
     * 登录成功
     */
    Statistics.loginSccess = function () {
        var data = {
            "act": "login",
            "gameId": App.CurrGameId,
            "roomId": App.CurrRoomId,
            "platform": this.platform,
            "platUid": App.CurrPlatformUid,
            "uId": DataCenter.instance.user.id,
            "sex": DataCenter.instance.user.sex,
            "name": DataCenter.instance.user.name,
            "uuid": DataCenter.instance.user.uuid,
            "chanId": this.chanId
        };
        this.sendData(data);
    };
    /**
     * 游戏结束
     */
    Statistics.gameEnd = function () {
        var data = {
            "act": "end",
            "gameId": App.CurrGameId,
            "roomId": App.CurrRoomId,
            "platform": this.platform,
            "platUid": App.CurrPlatformUid,
            "uId": DataCenter.instance.user.id,
            "sex": DataCenter.instance.user.sex,
            "name": DataCenter.instance.user.name,
            "uuid": DataCenter.instance.user.uuid,
            "chanId": this.chanId
        };
        this.sendData(data);
    };
    /**
     * 俩人游戏加载完成发送
     */
    Statistics.loadingEnd = function () {
        var data = {
            "act": "loadingEnd",
            "gameId": App.CurrGameId,
            "roomId": App.CurrRoomId,
            "platform": this.platform,
            "platUid": App.CurrPlatformUid,
            "uId": DataCenter.instance.user.id,
            "sex": DataCenter.instance.user.sex,
            "name": DataCenter.instance.user.name,
            "uuid": DataCenter.instance.user.uuid,
            "chanId": this.chanId
        };
        this.sendData(data);
    };
    /**
     * 单人游戏加载完成发送
     */
    Statistics.loadingEndOne = function () {
        var data = {
            "act": "loadingEndOne",
            "gameId": App.CurrGameId,
            "roomId": App.CurrRoomId,
            "platform": this.platform,
            "platUid": App.CurrPlatformUid,
            "uId": DataCenter.instance.user.id,
            "sex": DataCenter.instance.user.sex,
            "name": DataCenter.instance.user.name,
            "uuid": DataCenter.instance.user.uuid,
            "chanId": this.chanId
        };
        this.sendData(data);
    };
    /**
     * 上报游戏结果
     */
    Statistics.reportResult = function (winUserId) {
        // result: 1输 2平 3赢
        var result = 2;
        if (winUserId.length) {
            if (winUserId == DataCenter.instance.user.id) {
                result = 3;
            }
            else {
                result = 1;
            }
        }
        var data = {
            "act": "reportResult",
            "gameId": App.CurrGameId,
            "roomId": App.CurrRoomId,
            "platform": this.platform,
            "platUid": App.CurrPlatformUid,
            "uId": DataCenter.instance.user.id,
            "sex": DataCenter.instance.user.sex,
            "name": DataCenter.instance.user.name,
            "uuid": DataCenter.instance.user.uuid,
            "win": result,
            "chanId": this.chanId
        };
        this.sendData(data);
    };
    Statistics.sendData = function (data) {
        if (!this.platform) {
            return;
        }
        var request = new egret.URLRequest(this.url);
        var paramStr = JSON.stringify(data);
        var variables = new egret.URLVariables("data=" + paramStr);
        request.data = variables;
        //this.loader.load(request);
    };
    Statistics.onLoadComplete = function (event) {
        var loader = event.target;
    };
    Statistics.onLoadError = function () {
        console.log("onLoadError");
    };
    /**
     * 上报游戏结果
     */
    Statistics.test = function (str) {
        var data = {
            "str": str,
        };
        this.sendData(data);
    };
    Statistics.url = "https://gameanalysis.egret.com/pk/stat.php";
    Statistics.chanId = "";
    return Statistics;
}());
__reflect(Statistics.prototype, "Statistics");
