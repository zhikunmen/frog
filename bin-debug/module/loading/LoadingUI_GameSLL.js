//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var LoadingUI_GameSLL = (function (_super) {
    __extends(LoadingUI_GameSLL, _super);
    function LoadingUI_GameSLL() {
        var _this = _super.call(this, LoadingUISkin_Wanba) || this;
        _this.close = function () {
            App.MessageCenter.removeAll(_this);
            if (_this.parent.parent) {
                _this.parent.parent.removeChild(_this.parent);
            }
        };
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        _this.setProgressText("加载基础资源...");
        return _this;
    }
    LoadingUI_GameSLL.prototype.setAssets = function () {
        var icon = App.CurrGameId + "_jpg";
        this.logo.source = icon;
        if (!this.loadProgressImgBg.source && RES.getRes("LD_progressBG_png")) {
            this.loadProgressImgBg.source = "LD_progressBG_png";
        }
        if (!this.loadProgressImg.source && RES.getRes("LD_progress_png")) {
            this.loadProgressImg.source = "LD_progress_png";
        }
    };
    LoadingUI_GameSLL.prototype.setBaseProgress = function (current, total) {
        this.setAssets();
        this.setProgress(Math.ceil(current / total * 100));
    };
    LoadingUI_GameSLL.prototype.setProgress = function (progressNum) {
        this.loadProgressImg.width = progressNum / 100 * this.loadProgressImg.parent.width;
    };
    LoadingUI_GameSLL.prototype.setProgressText = function (text) {
        if (!this.loadProgressTxt) {
            return;
        }
        this.loadProgressTxt.text = text;
    };
    //错误信息显示
    LoadingUI_GameSLL.prototype.setErrorMsg = function (msg) {
        //显示信息
        this.setProgressText(msg);
        //返回平台
        App.TimerManager.doTimer(2000, 1, function () {
            Platform.curPlatform.gameOver(1);
        }, this);
    };
    LoadingUI_GameSLL.prototype.addMesssgaeListener = function () {
        //游戏开启通知
        // App.MessageCenter.addListener(Proto.ID_game_start_notice_s2c, this.startGameS2C, this);
        //收到loadProgress通知
        // App.MessageCenter.addListener(Proto.ID_game_loadProgress_notice_s2c, this.loadProgressS2C, this);
        //结果返回
        // App.MessageCenter.addListener(Proto.ID_game_result_notice_s2c, this.onGameResultS2C, this);
    };
    LoadingUI_GameSLL.prototype.startGameLoad = function () {
        this.addMesssgaeListener();
        //进度显示还原
        this.setProgressText("加载游戏资源...");
        this.setProgress(0);
        //加载资源
        this.loadGameSource();
    };
    // 加载资源
    LoadingUI_GameSLL.prototype.loadGameSource = function () {
        var config = DataCenter.instance.getGameConfig(App.CurrGameId);
        var gameRes = config.res;
        App.ResourceUtils.loadGroup(gameRes, this.onCompleteHandler, this.onProgressHandler, this, this.onErrorHandler);
    };
    // 资源加载失败
    LoadingUI_GameSLL.prototype.onErrorHandler = function () {
        //提示信息
        this.setErrorMsg("游戏资源加载失败");
    };
    LoadingUI_GameSLL.prototype.onCompleteHandler = function () {
        //解析龙骨动画
        var dbConfig = RES.getRes("dbAssetConfig_json");
        AssetManager.loadDBAnimation(dbConfig.db[App.CurrGameId.toString()]);
        //加载完成统计log
        Statistics.loadingEndOne();
        //发送资源加载完成
        ProxySocket.sendLoadProgress(App.CurrRoomId, 100);
        //等待对手进入
        // this.setProgressText("稍等ta马上就来...");
        this.runGame();
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    LoadingUI_GameSLL.prototype.onProgressHandler = function (itemsLoaded, itemsTotal) {
        var progressNum = Math.ceil(itemsLoaded / itemsTotal * 100);
        progressNum = Math.min(progressNum, 99);
        //发送LoadProgress
        ProxySocket.sendLoadProgress(App.CurrRoomId, progressNum);
    };
    //游戏开启通知
    LoadingUI_GameSLL.prototype.startGameS2C = function (data) {
        this.runGame();
    };
    //收到loadProgress通知
    LoadingUI_GameSLL.prototype.loadProgressS2C = function (data) {
        //进度显示
        if (data.userId.toString() == DataCenter.instance.user.id) {
            this.setProgress(data.progress);
        }
        else {
        }
    };
    LoadingUI_GameSLL.prototype.initGame = function () {
        //创建Game
        var game = Game.getInstance();
        this.stage.addChild(game);
        //关闭loading
        this.close();
    };
    //正常进入游戏
    LoadingUI_GameSLL.prototype.runGame = function () {
        //进入游戏
        this.initGame();
        Game.getInstance().joinGame(App.CurrGameId);
    };
    //游戏结果返回
    LoadingUI_GameSLL.prototype.onGameResultS2C = function (data) {
        //统计
        Statistics.gameEnd();
        Statistics.reportResult(data.winUserId);
        //弹出胜负结果
        if (DataCenter.instance.room) {
            this.initGame();
            DataCenter.instance.room.gameResult = data;
            Game.getInstance().stateManager.curState.popup("GameResult");
        }
        else {
            this.setErrorMsg("对手已经离线，2秒后退出");
        }
    };
    return LoadingUI_GameSLL;
}(EuiComponent));
__reflect(LoadingUI_GameSLL.prototype, "LoadingUI_GameSLL");
