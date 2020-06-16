class LoadingUI_GameSLL extends EuiComponent {
    public bg: eui.Image;
    public logo: eui.Image;
    public loadProgressTxt: eui.Label;
    public loadProgressImgBg: eui.Image;
    public loadProgressImg: eui.Image;


    public constructor() {
        super(LoadingUISkin_Wanba);

        this.percentHeight = 100;
        this.percentWidth = 100;

        this.setProgressText("加载基础资源...");
    }

    private setAssets(): void {

        var icon = App.CurrGameId + "_jpg";
        this.logo.source = icon;

        if (!this.loadProgressImgBg.source && RES.getRes("LD_progressBG_png")) {
            this.loadProgressImgBg.source = "LD_progressBG_png";
        }

        if (!this.loadProgressImg.source && RES.getRes("LD_progress_png")) {
            this.loadProgressImg.source = "LD_progress_png";
        }
    }

    public setBaseProgress(current, total): void {
        this.setAssets();
        this.setProgress(Math.ceil(current / total * 100));
    }

    private setProgress(progressNum: number): void {
        this.loadProgressImg.width = progressNum / 100 * this.loadProgressImg.parent.width;
    }

    public setProgressText(text: string) {
        if (!this.loadProgressTxt) {
            return;
        }
        this.loadProgressTxt.text = text;
    }

    public close = (): void => {
        App.MessageCenter.removeAll(this);

        if (this.parent.parent) {
            this.parent.parent.removeChild(this.parent);
        }
    }

    //错误信息显示
    private setErrorMsg(msg: string): void {
        //显示信息
        this.setProgressText(msg);
        //返回平台
        App.TimerManager.doTimer(2000, 1, () => {
            Platform.curPlatform.gameOver(1);
        }, this);
    }

    private addMesssgaeListener(): void {
    }

    public startGameLoad(): void {
        this.addMesssgaeListener();

        //进度显示还原
        this.setProgressText("加载游戏资源...");
        this.setProgress(0);
        //加载资源
        this.loadGameSource();
    }


    // 加载资源
    private loadGameSource(): void {
        var config: any = DataCenter.instance.getGameConfig(App.CurrGameId);
        var gameRes = config.res;
        App.ResourceUtils.loadGroup(gameRes, this.onCompleteHandler, this.onProgressHandler, this, this.onErrorHandler);
    }

    // 资源加载失败
    private onErrorHandler(): void {
        //提示信息
        this.setErrorMsg("游戏资源加载失败");
    }

    private onCompleteHandler(): void {
        //解析龙骨动画
        let dbConfig = RES.getRes("dbAssetConfig_json");
        AssetManager.loadDBAnimation(dbConfig.db[App.CurrGameId.toString()]);
        //发送资源加载完成
        ProxySocket.sendLoadProgress(App.CurrRoomId, 100);
        //等待对手进入
        // this.setProgressText("稍等ta马上就来...");
        this.runGame();
    }

    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private onProgressHandler(itemsLoaded: number, itemsTotal: number): void {
        var progressNum: number = Math.ceil(itemsLoaded / itemsTotal * 100);
        progressNum = Math.min(progressNum, 99);
        //发送LoadProgress
        ProxySocket.sendLoadProgress(App.CurrRoomId, progressNum);
    }

    //游戏开启通知
    private startGameS2C(data: game_start_notice_s2c): void {
        this.runGame();
    }

    //收到loadProgress通知
    private loadProgressS2C(data: game_loadProgress_notice_s2c): void {
        //进度显示
        if (data.userId.toString() == DataCenter.instance.user.id) {
            this.setProgress(data.progress);
        } else {
        }
    }

    private initGame(): void {
        //创建Game
        let game: Game = Game.getInstance();
        this.stage.addChild(game);
        //关闭loading
        this.close();
    }

    //正常进入游戏
    public runGame(): void {
        //进入游戏
        this.initGame();
        Game.getInstance().joinGame(App.CurrGameId);
    }

    //游戏结果返回
    private onGameResultS2C(data: game_result_notice_s2c): void {
        //弹出胜负结果
        if (DataCenter.instance.room) {
            this.initGame();
            DataCenter.instance.room.gameResult = data;
            Game.getInstance().stateManager.curState.popup("GameResult");
        } else {
            this.setErrorMsg("对手已经离线，2秒后退出");
        }
    }
}
