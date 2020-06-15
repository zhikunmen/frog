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
// TypeScript file
var GameSureLeaveView = (function (_super) {
    __extends(GameSureLeaveView, _super);
    function GameSureLeaveView() {
        return _super.call(this, GameSureLeaveSkin) || this;
    }
    GameSureLeaveView.prototype.init = function () {
        _super.prototype.init.call(this);
        this.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQuit, this);
        this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancel, this);
    };
    GameSureLeaveView.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    GameSureLeaveView.prototype.addMesssgaeListener = function () {
        _super.prototype.addMesssgaeListener.call(this);
        //收到发送游戏结果
        App.MessageCenter.addListener(EventMessage.SendGameResultC2S, this.onCancel, this);
    };
    GameSureLeaveView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    GameSureLeaveView.prototype.onCancel = function () {
        this.close();
    };
    GameSureLeaveView.prototype.onQuit = function (e) {
        this.close();
        // 背景音乐停止
        App.SoundManager.stopBg();
        // 发送退出游戏事件
        App.MessageCenter.dispatch(EventMessage.GameLeave);
        // 退出游戏 socket是否连接
        if (!App.Socket.isConnecting()) {
            Game.getInstance().leaveGame();
        }
        else {
            ProxySocket.exitGame(App.CurrRoomId);
        }
    };
    return GameSureLeaveView;
}(StateEui));
__reflect(GameSureLeaveView.prototype, "GameSureLeaveView");
