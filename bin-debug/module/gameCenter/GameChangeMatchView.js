var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameChangeMatchView = (function (_super) {
    __extends(GameChangeMatchView, _super);
    function GameChangeMatchView() {
        return _super.call(this, GameChangeMatchSkin) || this;
    }
    GameChangeMatchView.prototype.init = function () {
        _super.prototype.init.call(this);
        // 匹配
        this.startMatchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startMatchBtnHandler, this);
        // 邀请好友
        this.inviteFriendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.inviteFriendBtnHandler, this);
        //返回游戏
        this.goBackBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);
        //游戏说明
        this.img_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
    };
    GameChangeMatchView.prototype.showRank = function (arr) {
    };
    GameChangeMatchView.prototype.show = function () {
        _super.prototype.show.call(this);
        var data = DataCenter.instance.getGameConfig(App.CurrGameId);
        // this.lb_numOnLine.text = data.playerNum + "对在玩";
        this.img_icon.source = data.icon;
    };
    GameChangeMatchView.prototype.tick = function (advancedTime) {
        _super.prototype.tick.call(this, advancedTime);
    };
    GameChangeMatchView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    GameChangeMatchView.prototype.onBack = function () {
        App.SoundManager.playEffect("mouseClickSound_mp3");
        this.next("gameIndex");
    };
    GameChangeMatchView.prototype.onHelp = function () {
        // App.SoundManager.playEffect("mouseClickSound_mp3");
        // this.popup("GameExplainView");
    };
    GameChangeMatchView.prototype.addMesssgaeListener = function () {
        _super.prototype.addMesssgaeListener.call(this);
        // 请求匹配返回
        App.MessageCenter.addListener(Proto.ID_game_matching_s2c, this.successMatchingS2C, this);
        //Socket连接成功消息
        App.MessageCenter.addListener(SocketConst.SOCKET_CONNECT, this.connectSocketSuccess, this);
        App.MessageCenter.addListener(SocketConst.SOCKET_CLOSE, this.connectSocketClose, this);
        App.MessageCenter.addListener(SocketConst.SOCKET_NOCONNECT, this.connectSocketError, this);
    };
    //开启连接匹配服务器
    GameChangeMatchView.prototype.startConnectMatchingServer = function () {
        var userId = Platform.curPlatform.platformData.userId;
        ProxyHttp.getGameServer(userId, function (data) {
            var connectorServer = data.data;
            if (!connectorServer.hasOwnProperty("useSSL")) {
                connectorServer.useSSL = true;
            }
            ProxySocket.init(connectorServer.host, connectorServer.port, connectorServer.useSSL);
            Common.ServerIndex = connectorServer.sindex;
        });
    };
    //连接关闭
    GameChangeMatchView.prototype.connectSocketClose = function () {
        var errMsg = RES.getRes("errorCode_json")["6001"];
        Common.showErrorMsg_Game(errMsg);
    };
    //连接失败
    GameChangeMatchView.prototype.connectSocketError = function () {
        var errMsg = RES.getRes("errorCode_json")["6002"];
        Common.showErrorMsg_Game(errMsg);
    };
    //连接Socket服务器成功，进行登录
    GameChangeMatchView.prototype.connectSocketSuccess = function () {
        //开启ping
        ProxySocket.startPing();
        //请求匹配
        var myData = Platform.curPlatform.platformData;
        var userId = myData.userId;
        var userName = myData.userName;
        var userPic = myData.userPic;
        var userSex = myData.userSex;
        ProxySocket.startMatching(App.CurrGameId, userId, userName, userPic, userSex);
    };
    //匹配成功返回
    GameChangeMatchView.prototype.successMatchingS2C = function (data) {
        // 跳转页面
        this.next("gameSeach");
    };
    // 开始匹配
    GameChangeMatchView.prototype.startMatchBtnHandler = function (e) {
        App.SoundManager.playEffect("mouseClickSound_mp3");
        this.startConnectMatchingServer();
    };
    // 邀请好友
    GameChangeMatchView.prototype.inviteFriendBtnHandler = function (e) {
        App.SoundManager.playEffect("mouseClickSound_mp3");
        Platform.curPlatform.invite(function () {
            //切换到匹配页面
            Game.getInstance().stateManager.curState.next("gameSeach");
            Game.getInstance().stateManager.curState["playWaitDB"]();
            Game.getInstance().stateManager.curState["startConnectGameServer"](App.CurrRoomId);
        });
    };
    return GameChangeMatchView;
}(StateEui));
__reflect(GameChangeMatchView.prototype, "GameChangeMatchView");
