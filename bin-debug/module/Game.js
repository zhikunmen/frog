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
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.sendResultStartTime = 0;
        _this.currGameId = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdded, _this);
        return _this;
    }
    Game.getInstance = function () {
        var self = this;
        if (self.instance == null) {
            self.instance = new Game();
        }
        return self.instance;
    };
    Game.prototype.onAdded = function (e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
        this.initLayer();
        this.init();
    };
    Game.prototype.initLayer = function () {
        this.layer = new egret.DisplayObjectContainer();
        this.addChild(this.layer);
        this.euiLayer = new eui.UILayer();
        this.euiLayer.percentWidth = 100;
        this.euiLayer.percentHeight = 100;
        this.euiLayer.touchEnabled = false;
        this.addChild(this.euiLayer);
        this.popupLayer = new eui.UILayer();
        this.popupLayer.percentWidth = 100;
        this.popupLayer.percentHeight = 100;
        this.popupLayer.touchEnabled = false;
        this.addChild(this.popupLayer);
    };
    Game.prototype.init = function () {
        this.initBgMusic();
        this.initPlatform();
        this.initView();
        this.initMessage();
        this.isInit = true;
        new NetWorkDelayTest();
    };
    Game.prototype.initMessage = function () {
        // ErrCode处理
        App.MessageCenter.addListener(Proto.ID_error_notice_s2c, this.errorS2C, this);
        //收到发送游戏结果
        App.MessageCenter.addListener(EventMessage.SendGameResultC2S, this.onSendGameResultC2S, this);
        //收到发送游戏事件
        App.MessageCenter.addListener(EventMessage.SendGameEventC2S, this.onSendGameEventC2S, this);
        //收到服务器发送的游戏事件
        App.MessageCenter.addListener(Proto.ID_game_event_notice_s2c, this.onReceiveGameEventS2C, this);
        //游戏结果返回
        App.MessageCenter.addListener(Proto.ID_game_result_notice_s2c, this.onReceiveGameResultS2C, this);
        //收到错题反馈
        App.MessageCenter.addListener(EventMessage.AddErrQuestionC2S, this.onAddErrQuestionC2S, this);
        //收到获取题目列表
        App.MessageCenter.addListener(EventMessage.GetQuestionsC2S, this.onGetQuestionsC2S, this);
        App.MessageCenter.addListener(EventMessage.GetDataC2S, this.onGetDataC2S, this);
    };
    Game.prototype.initBgMusic = function () {
        App.SoundManager.setBgOn(true);
        App.SoundManager.setEffectOn(true);
        // App.SoundManager.playBg("BG_mp3");
        Platform.curPlatform.dealBgMusic();
    };
    Game.prototype.initView = function () {
        this.stateManager.setCurStateName("index");
        this.stateManager.startTick();
    };
    Game.prototype.initPlatform = function () {
        this.stateManager = new StateManager(this.layer, this.euiLayer, this.popupLayer);
        this.stateManager.registerState("index", new Index()); //空页面
        this.stateManager.registerState("gamePopup", new GamePopView()); //提示框
        this.stateManager.registerState("GameSureLeave", new GameSureLeaveView()); //游戏确认离开
        this.stateManager.registerState("GameGiveUp", new GameGiveUpView()); //认输面板
        this.stateManager.registerState("GameExpress", new GameExpressTip()); //游戏内的表情发送
    };
    Game.prototype.getGameClass = function (stateName) {
        switch (stateName) {
            case "gameLongJump": return GameLongJumpView;
        }
    };
    /**
     * 进入游戏
     */
    Game.prototype.joinGame = function (gameId) {
        //记录当前运行的游戏ID
        this.currGameId = gameId;
        //进入游戏
        var gameConfig = DataCenter.instance.getGameConfig(this.currGameId);
        if (!gameConfig) {
            console.error("请先在gameConfig.json中进行配置");
            return;
        }
        var stateName = gameConfig.stateName;
        var cls = this.getGameClass(stateName);
        if (!cls) {
            console.error("请先在gameClassList中进行配置");
            return;
        }
        this.stateManager.registerState(stateName, new cls());
        this.stateManager.curState.next(stateName);
    };
    /**
     * 离开游戏
     */
    Game.prototype.leaveGame = function (toView) {
        if (toView === void 0) { toView = "gameChangeMatch"; }
        if (!this.currGameId) {
            this.stateManager.curState.next(toView);
            return;
        }
        //离开当前运行的游戏
        var gameConfig = DataCenter.instance.getGameConfig(this.currGameId);
        var stateName = gameConfig.stateName;
        this.stateManager.unregisterState(stateName);
        this.stateManager.curState.next(toView);
        // 销毁游戏资源
        this.destoryGameRes(this.currGameId);
        // currGameId重置
        this.currGameId = 0;
        // 断开socket
        ProxySocket.stop();
        // 背景音乐停止
        App.SoundManager.stopBg();
    };
    //销毁游戏资源
    Game.prototype.destoryGameRes = function (gameId) {
        var gameConfig = DataCenter.instance.getGameConfig(gameId);
        if (!gameConfig) {
            return;
        }
        // 销毁DB资源
        var dbConfig = RES.getRes("dbAssetConfig_json");
        AssetManager.removeDBAnimation(dbConfig.db[gameId.toString()]);
        // 销毁游戏资源
        RES.destroyRes(gameConfig.res);
    };
    /**
     * 在游戏中
     */
    Game.prototype.isGameing = function () {
        return this.currGameId > 0;
    };
    // ErrCode处理
    Game.prototype.errorS2C = function (data) {
        // alert("服务端错误码:" + data.errorCode);
    };
    //发送游戏结果
    Game.prototype.onSendGameResultC2S = function (isWin) {
        // 记录当前时间
        this.sendResultStartTime = egret.getTimer();
        //发送结果
        ProxySocket.sendGameResult(App.CurrRoomId, isWin);
    };
    //收到发送游戏事件
    Game.prototype.onSendGameEventC2S = function (event, sendType) {
        ProxySocket.sendGameEvent(App.CurrRoomId, event, sendType);
    };
    //收到服务器发送的游戏事件
    Game.prototype.onReceiveGameEventS2C = function (data) {
        data.userId = data.userId.toString();
        App.MessageCenter.dispatch(EventMessage.ReceiveGameEventS2C, data);
    };
    //服务器游戏结果返回
    Game.prototype.onReceiveGameResultS2C = function (data) {
        var time = egret.getTimer() - this.sendResultStartTime;
        App.MessageCenter.dispatch(EventMessage.ReceiveGameResultS2C, data);
    };
    //收到获取题目列表
    Game.prototype.onGetQuestionsC2S = function (callBack) {
        ProxyHttp.getQuestions(App.CurrRoomId, function (data) {
            callBack(data.data);
        });
    };
    //收到获取数据列表
    Game.prototype.onGetDataC2S = function (callBack) {
        ProxyHttp.getData(window["egretGid"], function (data) {
            callBack(data.data);
        });
    };
    //收到错题反馈
    Game.prototype.onAddErrQuestionC2S = function (question, callBack) {
    };
    return Game;
}(egret.DisplayObjectContainer));
__reflect(Game.prototype, "Game");
