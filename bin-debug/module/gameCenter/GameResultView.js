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
var GameResultView = (function (_super) {
    __extends(GameResultView, _super);
    function GameResultView() {
        var _this = _super.call(this, GameResultViewSkin) || this;
        _this.num_time = 5;
        _this.particlesArr = []; // 存放撒花，撒雪的粒子效果
        _this.gameCallBackFun = null; // 回调函数
        return _this;
    }
    GameResultView.prototype.init = function () {
        _super.prototype.init.call(this);
        // 其它游戏
        this.btn_otherGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOtherGame, this);
        this.mask_1 = new egret.Rectangle(0, 0, 57, 18); //115
        this.mask_2 = new egret.Rectangle(0, 0, 640, 650); //115
        this.addAllDb();
    };
    GameResultView.prototype.show = function (callBackFun) {
        if (callBackFun === void 0) { callBackFun = null; }
        _super.prototype.show.call(this);
        // 是否有游戏内部结算结果
        this.gameCallBackFun = callBackFun || null;
        //战斗结果
        this.gameOverResultData = DataCenter.instance.room.gameResult;
        this.gameOverResultData.dayGetMoney = 100;
        this.gameOverResultData.addMoney = 100;
        // 对方退出
        if (this.gameOverResultData.userExitFlag == 1 && this.gameOverResultData.winUserId == DataCenter.instance.user.id) {
            // 离开玩家的Id
            GameResultView.playerExitGameId = DataCenter.instance.room.player.id;
            // 提示离开/认输 状态
            this.gameResultStateImgFun(1);
        }
        else if (this.gameOverResultData.userExitFlag == 1 && this.gameOverResultData.winUserId == DataCenter.instance.room.player.id) {
            // 自己退出 进入聊天窗口
            Game.getInstance().leaveGame();
            this.close();
        }
        else {
            // 是否有内部结算
            if (!this.gameCallBackFun) {
                App.googleAd && App.googleAd.show();
                // 正常游戏结算
                this.resultInfoFun();
            }
            else {
                // 抛出事件
                this.gameCallBackFun();
                this.close();
            }
        }
    };
    // 状态
    GameResultView.prototype.gameResultStateImgFun = function (stateIndex) {
        var _this = this;
        if (!GameResultView.gameInnerResult) {
            switch (stateIndex) {
                case 1:
                    this.gameResultStateImg.source = "bg_result_playerLeave_png";
                    break;
                case 2:
                    this.gameResultStateImg.source = "bg_result_You_Giveup_png";
                    break;
                case 3:
                    this.gameResultStateImg.source = "bg_result_Other_Giveup_png";
                    break;
            }
            // 弹出状态面板
            var self_1 = this;
            self_1.playerLeaveView.visible = true;
            self_1.playerLeaveView.scaleX = self_1.playerLeaveView.scaleY = 0.3;
            egret.Tween.get(self_1.playerLeaveView)
                .to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.bounceOut)
                .wait(1600)
                .to({ scaleX: 0, scaleY: 0, visible: false }, 200, egret.Ease.bounceOut)
                .call(function () {
                // 无内部游戏结算
                if (!self_1.gameCallBackFun) {
                    // 面板状态切换
                    self_1.playerLeaveView.visible = false;
                    // 结算页结算
                    self_1.resultInfoFun();
                }
                else {
                    // 抛出事件
                    _this.gameCallBackFun();
                    GameResultView.gameInnerResult = true;
                    self_1.close();
                }
            });
        }
        else {
            GameResultView.gameInnerResult = false;
            // 面板状态切换
            this.playerLeaveView.visible = false;
            // 结算页结算
            this.resultInfoFun();
        }
    };
    // 结算页信息
    GameResultView.prototype.resultInfoFun = function () {
        // 显示结算面板
        this.resultInfoView.visible = true;
        //我的数据
        var myUserData = DataCenter.instance.user;
        //敌方数据
        var otherUserData = DataCenter.instance.room.player;
        //配置数据
        var systemConfig = RES.getRes("system_json");
        this.lb_player_1.text = myUserData.name;
        this.lb_player_2.text = otherUserData.name;
        //自己性别判断
        this.img_sex1.source = GameCenterGetSexIcon.getSexIconSource(myUserData.sex);
        //他人性别判断
        this.img_sex2.source = GameCenterGetSexIcon.getSexIconSource(otherUserData.sex);
        //输赢结果显示
        if (this.gameOverResultData.winUserId == myUserData.id) {
            //赢了
            this.bg_result1.source = "bg_result_win_png";
            this.bg_result2.source = "bg_result_Lose_png";
            this.onParticleEffect(this.gp_particle.width / 2, 398, "hua");
            this.onParticleEffect(this.gp_particle.width / 2, 48, "falisnow");
        }
        else {
            //输了
            this.bg_result1.source = "bg_result_Lose_png";
            this.bg_result2.source = "bg_result_win_png";
            this.onParticleEffect(this.gp_particle.width / 2, 48, "hua");
            this.onParticleEffect(this.gp_particle.width / 2, 398, "falisnow");
        }
        if (this.gameOverResultData.dayGetMoney < systemConfig.dayMaxMoney) {
            this.mask_1.width = 116 * Math.min(1, (this.gameOverResultData.dayGetMoney / systemConfig.dayMaxMoney));
            this.img_coin.source = "bg_result_TodayGetGold_png";
        }
        else {
            this.mask_1.width = 116;
            this.img_coin.source = "img_max_coin_png";
        }
        this.lb_persentage.text = "" + this.gameOverResultData.dayGetMoney + "/" + systemConfig.dayMaxMoney;
        this.mask_1.x = 0;
        this.mask_1.y = -2;
        this.img_persentage.mask = this.mask_1;
        this.gp_particle.mask = this.mask_2;
        if (this.gameOverResultData.addMoney > 0) {
            this.lb_coin.text = "+" + this.gameOverResultData.addMoney.toString();
        }
        else if (this.gameOverResultData.addMoney == 0) {
            this.lb_coin.text = "";
        }
        else {
            this.lb_coin.text = this.gameOverResultData.addMoney.toString();
        }
        // 对方已经离开结算页
        if (GameResultView.playerExitGameId != null && GameResultView.playerExitGameId == otherUserData.id) {
            GameResultView.playerExitGameId = null;
        }
        this.addPerson();
    };
    GameResultView.prototype.addMesssgaeListener = function () {
        _super.prototype.addMesssgaeListener.call(this);
        // 收其它页面操作
        App.MessageCenter.addListener(EventMessage.gameResultLeave, this.onGameResultLeave, this);
        // 监听形象更换
        App.MessageCenter.addListener(EventMessage.ChangeAvatar, this.onChangeAvatarFun, this);
    };
    // 形象更新
    GameResultView.prototype.onChangeAvatarFun = function () {
        this.roleAvatar1 = this.createAvatar(this.gp_people1, true);
        var myUserData = DataCenter.instance.user;
        if (this.gameOverResultData.winUserId == myUserData.id) {
            this.roleAvatar1.armature.play("win");
        }
        else {
            this.roleAvatar1.armature.play("Loser2");
        }
    };
    GameResultView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        // 
        this.particlesArr.splice(0);
        this.onClear();
        this.gp_particle.removeChildren();
        App.SoundManager.stopEffect("win_mp3");
        App.SoundManager.stopEffect("lose_mp3");
        App.SoundManager.restoreVolumeBg();
    };
    GameResultView.prototype.timer = function () {
        this.num_time--;
        if (this.num_time == 0) {
            App.TimerManager.remove(this.timer, this);
            this.onOtherGame();
            return;
        }
        // this.btn_otherGame["img_time"].source = "otherGame" + this.num_time + "_png";
    };
    // 收到其它页面消息
    GameResultView.prototype.onGameResultLeave = function () {
        this.onOtherGame();
    };
    // 创建动画资源加载到舞台
    GameResultView.prototype.addAllDb = function () {
        // 
        this.dbresult1 = AssetManager.getQuickDBArmature("winloser");
        this.dbresult1.y = 570;
        this.gp_1.addChild(this.dbresult1);
        this.dbresult1.addDisplayEvent(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onPlayResultEnd, this);
        this.dbresult2 = AssetManager.getQuickDBArmature("winloser");
        this.dbresult2.y = 230;
        this.gp_1.addChild(this.dbresult2);
        // 金币掉落效果
        // this.dbGoldDrop = AssetManager.getQuickDBArmature("goldDB");
        // this.gp_coin.addChild(this.dbGoldDrop);
        // this.dbGoldDrop.addDisplayEvent(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onPlayGoldDropEnd, this);
        // this.dbGoldDrop.x = 182;
        // this.dbGoldDrop.y = 512;
        this.dbresult1.visible = false;
        this.dbresult2.visible = false;
        // this.dbGoldDrop.visible = false;
    };
    // 隐藏金币
    // private onPlayGoldDropEnd() {
    //     this.dbGoldDrop.visible = false;
    // }
    GameResultView.prototype.onPlayResultEnd = function () {
        var _this = this;
        this.dbresult1.visible = false;
        this.dbresult2.visible = false;
        //我的数据
        var myUserData = DataCenter.instance.user;
        setTimeout(function () {
            // 停止下雪，
            for (var i = 0; i < _this.particlesArr.length; i++) {
                _this.particlesArr[i].stop();
            }
        }, 5000);
        //输赢结果显示
        if (this.gameOverResultData.winUserId == myUserData.id) {
            // 获得金币
            // this.dbGoldDrop.visible = true;
            // this.dbGoldDrop.play("getGoldIcon", 1);
            // App.SoundManager.playEffect("addGoldAudio_mp3");
        }
    };
    GameResultView.prototype.onClear = function () {
        // 离开玩家的Id
        GameResultView.playerExitGameId = null;
        // 隐藏面板
        this.resultInfoView.visible = false;
        this.playerLeaveView.visible = false;
        if (this.roleAvatar1) {
            this.roleAvatar1.dispose();
            this.roleAvatar1 = null;
        }
        if (this.roleAvatar2) {
            this.roleAvatar2.dispose();
            this.roleAvatar2 = null;
        }
        // this.btn_otherGame["img_time"].visible = false;
        // this.btn_otherGame["img_time"].source = "otherGame5_png";
        // this.num_time = 5;
        // App.TimerManager.remove(this.timer, this);
    };
    // 其它游戏
    GameResultView.prototype.onOtherGame = function () {
        this.close();
        // 离开游戏
        Game.getInstance().leaveGame();
    };
    GameResultView.prototype.addPerson = function () {
        this.roleAvatar1 = this.createAvatar(this.gp_people1, true);
        this.roleAvatar2 = this.createAvatar(this.gp_people2, false);
        var myUserData = DataCenter.instance.user;
        this.dbresult1.visible = true;
        this.dbresult2.visible = true;
        if (this.gameOverResultData.winUserId == myUserData.id) {
            // 播放完成播放金币效果
            // this.roleAvatar2.armature.once(dragonBones.AnimationEvent.COMPLETE, this.onLoseComplete, this);
            this.dbresult2.play("loser", 1);
            this.dbresult1.play("win", 1);
            this.roleAvatar1.armature.play("win");
            this.roleAvatar2.armature.play("Loser2");
            App.SoundManager.playEffect("win_mp3");
        }
        else {
            //this.roleAvatar1.armature.once(dragonBones.AnimationEvent.COMPLETE, this.onLoseComplete, this);
            this.dbresult1.play("loser", 1);
            this.dbresult2.play("win", 1);
            this.roleAvatar1.armature.play("Loser2");
            this.roleAvatar2.armature.play("win");
            App.SoundManager.playEffect("lose_mp3");
        }
        this.dbresult1.x = this.gp_1.width / 2;
        this.dbresult2.x = this.gp_1.width / 2;
        App.SoundManager.muteBg();
    };
    // 粒子效果
    GameResultView.prototype.onParticleEffect = function (_X, _Y, str, time, scaleX) {
        if (time === void 0) { time = -1; }
        if (scaleX === void 0) { scaleX = 1; }
        var texture = RES.getRes(str + "_png");
        var config = RES.getRes(str + "_json");
        var particleXueHua = new particle.GravityParticleSystem(texture, config);
        this.particlesArr.push(particleXueHua);
        particleXueHua.y = _Y;
        particleXueHua.x = _X;
        particleXueHua.scaleX = scaleX;
        if (str == "flowers") {
            this.gp_1.addChild(particleXueHua);
        }
        else {
            this.gp_particle.addChild(particleXueHua);
        }
        particleXueHua.start(time);
        if (str == "hua") {
            for (var i = 2; i < 7; i++) {
                str = "hua" + i;
                var texture = RES.getRes(str + "_png");
                var config = RES.getRes("hua_json");
                var particleXueHua = new particle.GravityParticleSystem(texture, config);
                this.particlesArr.push(particleXueHua);
                particleXueHua.y = _Y;
                particleXueHua.x = _X;
                particleXueHua.scaleX = scaleX;
                this.gp_particle.addChild(particleXueHua);
                particleXueHua.start(time);
            }
        }
    };
    GameResultView.prototype.onLoseComplete = function (evt) {
        // var armature: DBArmature = <DBArmature>evt.currentTarget.parent;
        // armature.play("Loser2");
    };
    GameResultView.prototype.createAvatar = function (parentGroup, isMe) {
        parentGroup.removeChildren();
        var roleAvatar;
        if (isMe) {
            var myData = DataCenter.instance.user;
            roleAvatar = new RoleAvatar(myData.curAvatarType, myData.imgUrl);
        }
        else {
            var playData = DataCenter.instance.room.player;
            roleAvatar = new RoleAvatar(playData.curAvatarType, playData.imgUrl);
        }
        roleAvatar.armature.x = parentGroup.width * 0.5;
        roleAvatar.armature.y = parentGroup.height;
        roleAvatar.armature.scaleX = roleAvatar.armature.scaleY = 0.8;
        parentGroup.addChild(roleAvatar.armature);
        return roleAvatar;
    };
    GameResultView.gameInnerResult = false; // 是否有游戏内部结算
    GameResultView.gameOpenTimes = 0; // 打开次数
    // 游戏中退出的玩家Id
    GameResultView.playerExitGameId = null;
    return GameResultView;
}(StateEui));
__reflect(GameResultView.prototype, "GameResultView");
