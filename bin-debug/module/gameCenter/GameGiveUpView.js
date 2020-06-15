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
var GameGiveUpView = (function (_super) {
    __extends(GameGiveUpView, _super);
    function GameGiveUpView() {
        return _super.call(this, GameGiveUp) || this;
    }
    GameGiveUpView.prototype.init = function () {
        _super.prototype.init.call(this);
        this.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQuit, this);
        this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancel, this);
    };
    GameGiveUpView.prototype.show = function () {
        _super.prototype.show.call(this);
        this.GiveUpGroup.scaleX = this.GiveUpGroup.scaleY = 0.3;
        egret.Tween.get(this.GiveUpGroup).to({ scaleX: 1, scaleY: 1 }, 360, egret.Ease.bounceOut);
    };
    GameGiveUpView.prototype.addMesssgaeListener = function () {
        var _this = this;
        _super.prototype.addMesssgaeListener.call(this);
        // 监听离开游戏
        App.MessageCenter.addListener(EventMessage.gameCloseGiveUp, function () {
            _this.close();
        }, this);
    };
    GameGiveUpView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    GameGiveUpView.prototype.onCancel = function () {
        this.close();
    };
    GameGiveUpView.prototype.onQuit = function (e) {
        this.close();
        App.MessageCenter.dispatch(EventMessage.GameGiveUp);
    };
    return GameGiveUpView;
}(StateEui));
__reflect(GameGiveUpView.prototype, "GameGiveUpView");
