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
var GamePopView = (function (_super) {
    __extends(GamePopView, _super);
    function GamePopView() {
        return _super.call(this, GamePopSkin) || this;
    }
    GamePopView.Popup = function (state, msg, callBack) {
        if (callBack === void 0) { callBack = null; }
        state.popup("gamePopup", {
            msg: msg,
            callBack: callBack
        });
    };
    GamePopView.prototype.init = function () {
        _super.prototype.init.call(this);
        this.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    GamePopView.prototype.show = function (param) {
        _super.prototype.show.call(this);
        this.lbl_msg.text = param.msg;
        this.callBack = param.callBack;
    };
    GamePopView.prototype.addMesssgaeListener = function () {
        _super.prototype.addMesssgaeListener.call(this);
    };
    GamePopView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    GamePopView.prototype.onClick = function () {
        this.close();
        if (this.callBack) {
            this.callBack();
            this.callBack = null;
        }
    };
    return GamePopView;
}(StateEui));
__reflect(GamePopView.prototype, "GamePopView");
