var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlatformJump = (function () {
    function PlatformJump() {
        this.init();
    }
    PlatformJump.prototype.init = function () {
        //初始化GameId
        App.CurrGameId = 11;
    };
    PlatformJump.prototype.login = function (callBack) {
        //返回数据
        var userIdRandom = App.RandomUtils.limitInteger(10000, 20000).toString();
        this.platformData = {
            userId: userIdRandom,
            userName: "PK" + userIdRandom,
            userPic: "tou103_png",
            userSex: 1,
            base64Avatar: "",
            otherUserId: null,
            otherUserName: null,
            otherUserPic: null,
            otherUserSex: null,
            roomId: userIdRandom,
            isAi: null,
            aiLevel: null,
        };
        App.CurrRoomId = this.platformData.roomId;
        App.CurrPlatformUid = this.platformData.roomId;
    };
    PlatformJump.prototype.onInit = function (param) {
        // vivo.getRoomInfo();
    };
    //背景音乐特殊处理
    PlatformJump.prototype.dealBgMusic = function () {
    };
    // 游戏结算通知撩站平台前端  "0":无胜负结果,"1":负,"2":平,"3":胜
    PlatformJump.prototype.gameOver = function (value) {
        var win = 1;
        if (value == 1) {
            win = 2;
        }
        else if (value == 2) {
            win = 3;
        }
        else if (value == 3) {
            win = 1;
        }
        /*
        vivo.finish(win);
        */
    };
    PlatformJump.prototype.invite = function () {
    };
    PlatformJump.prototype.loaded = function () {
    };
    return PlatformJump;
}());
__reflect(PlatformJump.prototype, "PlatformJump", ["IPlatform"]);
