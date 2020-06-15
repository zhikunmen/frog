namespace GameLongJump {
    export class StateController extends egret.DisplayObjectContainer {
        constructor() {
            super();
        }
        private selfScoreBG: egret.Bitmap;
        private comScoreBg: egret.Bitmap;

        private selfScoreView: egret.TextField;
        private comScoreView: egret.TextField;
        private _selfScore: number;
        private _comScore: number;
        private timeView: egret.BitmapText;
        private isOver = false;
        public selfHeadBg: egret.Bitmap;
        public comHeadBg: egret.Bitmap;
        init() {
            let selfHeadBg: egret.Bitmap;
            let comHeadBg: egret.Bitmap;

            if (DataCenter.instance.room.selfIsMaster) {
                this.selfScoreBG = AssetManager.getBitmap("green_png");
                this.comScoreBg = AssetManager.getBitmap("red_png");
                selfHeadBg = AssetManager.getBitmap("headBg_green_png");
                comHeadBg = AssetManager.getBitmap("headBg_red_png");
            } else {
                this.selfScoreBG = AssetManager.getBitmap("red_png");
                this.comScoreBg = AssetManager.getBitmap("green_png");
                comHeadBg = AssetManager.getBitmap("headBg_green_png");
                selfHeadBg = AssetManager.getBitmap("headBg_red_png");
            }

            this.selfScoreBG.anchorOffsetX = this.selfScoreBG.width;
            this.comScoreBg.anchorOffsetX = 0;

            this.addChild(this.selfScoreBG);
            this.addChild(this.comScoreBg);

            this.selfHeadBg = selfHeadBg;
            this.comHeadBg = comHeadBg;

            selfHeadBg.x = this.selfScoreBG.x - this.selfScoreBG.width;
            // let selfHead = new RoleHeadImage(DataCenter.instance.user.imgUrl);
            let selfHead = new RoleHeadImage(DataCenter.instance.user.imgUrl);
            selfHead.anchorOffsetX = selfHead.width / 2;
            selfHead.anchorOffsetY = selfHead.height / 2;
            selfHead.x = selfHeadBg.x;
            selfHead.touchEnabled = true;
            selfHead.name = 'RoleHeadImage';
            selfHead.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                gmbox.openUserInfoDialog({ uid: DataCenter.instance.user.id })
            }, this);

            comHeadBg.x = this.comScoreBg.x + this.comScoreBg.width;
            let comHead = new RoleHeadImage(DataCenter.instance.room.player.imgUrl);
            console.log(DataCenter.instance.room.player.imgUrl);

            comHead.anchorOffsetX = comHead.width / 2;
            comHead.anchorOffsetY = comHead.height / 2;
            comHead.x = comHeadBg.x;
            comHead.touchEnabled = true;
            comHead.name = 'RoleHeadImage';
            comHead.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                gmbox.openUserInfoDialog({ uid: DataCenter.instance.room.player.id })
            }, this);

            this.addChild(selfHeadBg);
            this.addChild(comHeadBg);
            this.addChild(selfHead);
            this.addChild(comHead);

            this.selfScoreView = new egret.TextField();
            this.selfScoreView.text = "00";
            this.selfScoreView.size = 40;
            this.selfScoreView.anchorOffsetX = this.selfScoreView.measuredWidth;
            this.selfScoreView.anchorOffsetY = this.selfScoreView.measuredHeight / 2;
            this.selfScoreView.x = -this.selfScoreBG.width / 3;
            this.selfScoreView.textAlign = 'center';
            this.addChild(this.selfScoreView);

            this.comScoreView = new egret.TextField();
            this.comScoreView.text = "00";
            this.comScoreView.size = 40;
            this.comScoreView.anchorOffsetX = 0;
            this.comScoreView.anchorOffsetY = this.comScoreView.measuredHeight / 2;
            this.comScoreView.x = this.comScoreBg.width / 3;
            this.addChild(this.comScoreView);

            let timeBG = AssetManager.getBitmap("longJump_TimeBG_png")
            timeBG.scaleX = timeBG.scaleY = 1.2;
            this.addChild(timeBG);

            this._selfScore = 0;
            this._comScore = 0;

            this.timeView = new egret.BitmapText();
            this.timeView.font = RES.getRes("longJump_number_fnt") as egret.BitmapFont;
            this.timeView.width = 102;
            this.timeView.height = 50;
            this.timeView.letterSpacing = -5;
            this.timeView.anchorOffsetX = 51;
            this.timeView.anchorOffsetY = 25;
            this.timeView.textAlign = egret.HorizontalAlign.CENTER;
            this.timeView.alpha = 1;
            this.timeView.text = "100";
            this.addChild(this.timeView);
        }
        /**接受网络传来的事件 */
        private onGameEvent(data: any): void {
            /** 
             * "stand|123"
             * command：stand && parameter：123 
             * */
            let parseData = (data: string): string[] => {
                let splitChar = data.split("|");
                return splitChar;
            }
            let datas = parseData(data.data);
            switch (datas[0]) {
                case "Score":
                    if (DataCenter.instance.user.id == datas[1]) {
                        console.log('增加自己的分数22')
                        this.selfScore = parseInt(datas[2]);
                    } else {
                        console.log('增加对手的分数')
                        this.comScore = parseInt(datas[2]);
                    }
                    break;
            }
        }
        set selfScore(offset: number) {
            if (offset < 0) return;
            this._selfScore = offset;
            if (this._selfScore >= 10)
                this.selfScoreView.text = this._selfScore.toString();
            else
                this.selfScoreView.text = "0" + this._selfScore;
            if (this._selfScore >= userConfig.score && !this.isOver) {
                this.isWin = true;
            }
        }
        get selfScore() {
            return this._selfScore;
        }
        private set isWin(isWin: boolean) {
            this.isOver = true;
            App.TimerManager.doTimer(100, 1, () => {
                let win = 1;
                if (isWin) {
                    win = 3;
                }
                if (isWin) {
                    App.SoundManager.playEffect("longJump_sccess_mp3", true);
                    App.MessageCenter.dispatch('game_result', 'win');
                } else {
                    App.SoundManager.playEffect("longJump_lose_wav", true);
                    App.MessageCenter.dispatch('game_result', 'lose');
                }
            }, this);
            App.TimerManager.remove(this.timeOver, this);
        }
        set comScore(offset: number) {
            if (offset < 0 && isNaN(offset)) return;
            this._comScore = offset;
            if (this._comScore >= 10)
                this.comScoreView.text = this._comScore.toString();
            else
                this.comScoreView.text = "0" + this._comScore;
            if (this._comScore >= userConfig.score && !this.isOver) {
                this.isWin = false;
            }
        }
        get comScore() {
            return this._comScore;
        }
        private _time: number;
        get time() {
            return this._time;
        }
        timeStart() {
            this._time = 100;
            App.TimerManager.doTimer(1000, 0, this.timeOver, this)
        }
        private timeOver = () => {
            this._time--;
            this.timeView.text = this._time.toString();

            if (this._time <= 0) {
                if (this._selfScore > this._comScore) {
                    this.isWin = true;
                } else if (this._selfScore < this._comScore) {
                    console.log("输了")
                    this.isWin = false;
                    // App.TimerManager.doTimer(100, 1, () => {
                    //     App.SoundManager.playEffect("longJump_lose_wav", true);
                    //     // App.MessageCenter.dispatch(EventMessage.SendGameResultC2S, 1);
                    //     gmbox.battleBridge.postMessage({
                    //         "type": EventMessage.SendGameResultC2S,
                    //         "data": 1
                    //     });
                    //     console.log(DataCenter.instance.room.id + "号房发送结果为" + DataCenter.instance.user.id + ":" + 1)
                    //     GameLongJumpView.instance.result.lose(true);
                    // }, this)
                } else {
                    console.log("平局")
                }
                App.TimerManager.remove(this.timeOver, this);
            }else if(this._time < 10){
                App.SoundManager.playEffect("countDown_mp3");
            }
        }
        dispose() {
            App.TimerManager.removeAll(this);
            // if (!DataCenter.instance.room.IsAI)
            // App.MessageCenter.removeListener(EventMessage.ReceiveGameEventS2C, this.onGameEvent, this);
        }
    }
}
