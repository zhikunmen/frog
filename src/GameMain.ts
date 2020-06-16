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

class GameMain extends egret.DisplayObjectContainer {

    private loadingView: LoadingUI_GameSLL;
    private euiLayer: eui.UILayer;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        //loading容器层
        this.euiLayer = new eui.UILayer();
        this.euiLayer.percentWidth = 100;
        this.euiLayer.percentHeight = 100;
        this.stage.addChild(this.euiLayer);

        //设置加载进度界面
        this.loadingView = new LoadingUI_GameSLL();
        this.loadingView.bottom = 0;
        this.euiLayer.addChild(this.loadingView);

        //初始化Resource资源加载库
        var gameResPath = "resource/";
        App.ResourceUtils.addConfig(gameResPath + "default.res.json", gameResPath);
        App.ResourceUtils.addConfig(gameResPath + "gameLongJump.res.json", gameResPath);
        App.ResourceUtils.loadConfig(this.onConfigComplete, this);
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        App.ResourceUtils.loadGroup("preload", this.onResourceLoadComplete, this.onResourceProgress, this, this.onResourceError);
    }

    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(groupName: string): void {
        if (groupName == "preload") {
            //解析龙骨动画
            let dbConfig = RES.getRes("dbAssetConfig_json");
            AssetManager.loadDBAnimation(dbConfig.db["0"]);

            //EasyLoading初始化
            //EasyLoading.init();
            //配置文件初始化
            DataCenter.instance.initConfig(RES.getRes("gameConfig_json"));

            //进行平台登录
            this.startPlatformLogin();
        }
    }

    /**
     * preload资源组加载进度
     */
    private onResourceProgress(itemsLoaded: number, itemsTotal: number): void {
        this.loadingView.setBaseProgress(itemsLoaded, itemsTotal);
    }

    /**
     * 资源加载失败
     */
    private onResourceError(): void {
        this.showErrorMsg_Loading("基础资源加载失败");
    }

    //开始平台登录
    private startPlatformLogin(): void {
        //进行平台登录
        this.platformLogin();
    }

    //平台数据初始化
    private platformLogin(): void {
        this.loadingView.setProgressText("获取平台用户数据...");
        //根据平台用户数据进行登录
        Platform.curPlatform.login((success) => {
            if (!success) {
                this.loadingView.setProgressText("获取平台用户数据失败...");
                return;
            }
            //获取要连接的服务器
            this.loadingView.setProgressText("获取服务器地址...");
            var roomId = Platform.curPlatform.platformData.roomId;
            let myUser: User;
            let otherUser: User;
        })
        let data = {
            roomId: '1234',
            players: [
                {
                    userId: '12',
                    nickname: '11',
                    headIconUrl: '',
                    sex: 'M',
                    aiRank: 1,
                    type: 0
                }, {
                    userId: '121',
                    nickname: '1111',
                    headIconUrl: '',
                    sex: 'M',
                    aiRank: 3,
                    type: 1
                }
            ]
        }
        Platform.curPlatform.platformData.userId = '12';
        this.loadingView.setProgressText("获取服务器地址...");
        var roomId = Platform.curPlatform.platformData.roomId;
        let myUser: User;
        let otherUser: User;
        App.CurrRoomId = data.roomId;
        // let gameID = data.gameId;
        let players = data.players;//两个人的信息
        App.CurrGameIsAi = false;
        for (var i = 0; i < players.length; i++) {
            let player = players[i]
            let user = new User(player.userId)
            user.name = player.nickname;
            user.imgUrl = player.headIconUrl;
            user.sex = player.sex == "M" ? 1 : 2;
            user.uuid = player.userId;
            if (player.userId == Platform.curPlatform.platformData.userId) {
                myUser = user;
            } else {
                otherUser = user;
            }
            if (player.type == 1) {
                App.CurrGameIsAi = true;
                App.CurrGameAiLevel = player.aiRank > 5 ? 5 : player.aiRank
            }
        }

        myUser.curAvatarType = 1;
        otherUser.curAvatarType = 2;

        DataCenter.instance.user = myUser;


        DataCenter.instance.room = new RoomVO(App.CurrRoomId, App.CurrGameId, otherUser, App.CurrGameIsAi);
        App.CurrChatId = Common.createChatId([myUser.id, otherUser.id]);
        //开启游戏加载
        this.loadingView.startGameLoad();
    }

    //错误信息显示
    private showErrorMsg_Loading(msg: string): void {
        //显示信息
        msg = msg + "(" + Common.ServerIndex + ")";
        this.loadingView.setProgressText(msg);
        //返回平台
        App.TimerManager.doTimer(2000, 1, () => {
            Platform.curPlatform.gameOver(1);
        }, this);
    }
}


