var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common = (function () {
    function Common() {
    }
    //错误信息显示
    Common.showErrorMsg_Game = function (msg) {
        msg = msg + "(" + Common.ServerIndex + ")";
        GamePopView.Popup(Game.getInstance().stateManager.curState, msg, function () {
            Platform.curPlatform.gameOver(1);
        });
    };
    //根据两个userId创建一个chatId
    Common.createChatId = function (userIds) {
        var userId1 = userIds[0];
        var userId2 = userIds[1];
        if (userId1 < userId2) {
            return userId1 + '_' + userId2;
        }
        else {
            return userId2 + '_' + userId1;
        }
    };
    Common.ServerIndex = -1;
    return Common;
}());
__reflect(Common.prototype, "Common");
