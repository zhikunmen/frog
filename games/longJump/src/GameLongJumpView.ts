class GameLongJumpView extends State {
    static instance: GameLongJumpView;
    private returnToLastButton: egret.Bitmap;
    constructor() {
        super();
        GameLongJumpView.instance = this;
        this.gameLayer = new egret.DisplayObjectContainer();
        this.sceneItemLayer = new egret.DisplayObjectContainer();
        this.moveLayer = new egret.DisplayObjectContainer();
        this.emojiLayer = new eui.Group();
    }
    gameLayer: egret.DisplayObjectContainer;
    sceneItemLayer: egret.DisplayObjectContainer;
    moveLayer: egret.DisplayObjectContainer;
    emojiLayer: eui.Group;

    userController: GameLongJump.UserController;
    platformController: GameLongJump.PlatformController;
    comController: GameLongJump.CompetitorController;
    randomConfig: number[];
    random: Function;
    canJump: boolean;
    stateController: GameLongJump.StateController;
    readyGo: GameLongJump.LongJumpReady;
    result: GameLongJump.GameLongJumpResult;

    public static GAME_WIDTH: number = 640;
    public static GAME_HEIGHT: number = 1136;

    init() {
        this.stateController = new GameLongJump.StateController();
        this.stateController.init();
        let i = CommonUtils.hashCodeAbs(DataCenter.instance.room.id) % 10;
        this.randomConfig = RES.getRes("RandomConfig_json")[i];
        this.random = new Math["seedrandom"](DataCenter.instance.room.id + "random");
        this.canJump = false;

        var a = App.GameWidth / GameLongJumpView.GAME_WIDTH;
        var b = App.GameHeight / GameLongJumpView.GAME_HEIGHT;
        var c = Math.min(a, b);

        let bg = AssetManager.getBitmap("LongJumpBG_png", false, false);
        bg.width = App.GameWidth;
        bg.height = App.GameHeight;
        this.addChild(bg);
        this.moveLayer.addChild(this.sceneItemLayer);
        this.moveLayer.addChild(this.gameLayer);


        this.addChild(this.moveLayer);
        this.comController = new GameLongJump.CompetitorController();
        this.comController.init();
        this.userController = new GameLongJump.UserController();
        this.userController.init();

        this.platformController = new GameLongJump.PlatformController();
        this.platformController.init();
        this.addListener();

        this.addChild(this.stateController);
        this.stateController.x = App.GameWidth / 2;
        this.stateController.y = 90 + (App.GameHeight - GameLongJumpView.GAME_HEIGHT * c) * 0.5;

        this.addEmoji();

        this.readyGo = new GameLongJump.LongJumpReady(() => {
            this.canJump = true;
            if (DataCenter.instance.room.IsAI)
                GameLongJumpView.instance.comController.ai.AItouch();
            this.stateController.timeStart();
        });
        this.addChild(this.readyGo);
        this.readyGo.hide();
        this.result = new GameLongJump.GameLongJumpResult();
        this.result.init();

        this.returnToLastButton = AssetManager.getBitmap("goBack_png", false, false);
        this.returnToLastButton.y = 19;
        this.addChild(this.returnToLastButton);
        this.returnToLastButton.touchEnabled = true;
        this.returnToLastButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.popup("GameSureLeave");
        }, this)

        App.SoundManager.stopBg();
        App.MessageCenter.addListener('game_result', this.onGameResult, this);
        this.readyGo.play();



    }
    user1Ready = false;
    user2Ready = false;
    start = () => {
        if (this.user1Ready && this.user2Ready)
            this.readyGo.play();
    }
    private onGameEvent(data: any): void {
        /** 
         * "stand|123"
         * command：stand && parameter：123 
         * */
        switch (data.data) {
            case "ready":
                // if (data.userId == DataCenter.instance.user.id)
                this.user1Ready = true;
                // else
                this.user2Ready = true;
                this.start();
                break;
        }
    }
    addListener() {
        this.touchChildren = this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pressBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.pressEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.pressEnd, this)
    }
    private isPressBegin: boolean;
    private pressBegin(evt: egret.TouchEvent) {
        if (evt.target.name == 'RoleHeadImage') {
            return;
        }
        if (evt.target.name == "emoji") {
            return;
        }
        if (!this.canJump) return;
        this.isPressBegin = true;
        App.TimerManager.remove(this.touch, this);
        App.TimerManager.doTimer(100, 0, this.touch, this);
        App.SoundManager.playEffect("longJump_powering_mp3", true);
        this.userController.userCharacter.play("xuli", 1);
    }
    sound = false;
    private touch() {
        if (this.userController.power > GameLongJump.userConfig.powerLimit) {
            if (!this.sound) {
                App.SoundManager.playEffect("longJump_powerLimit_mp3", true, 0);
                this.sound = true;
            }
            return;
        }
        this.userController.power += GameLongJump.userConfig.powerAdd;
    }
    private pressEnd() {
        if (!this.canJump || !this.isPressBegin) return;
        this.isPressBegin = false;
        App.TimerManager.remove(this.touch, this);
        this.userController.jump();
        this.sound = false;
    }
    onGameResult = (result): void => {
        if (result == 'win') {
            this.result.win();
        } else {
            this.result.lose();
        }
    }
    pauseCallback = () => {
        this.next("gameChangeMatch");
    }

    addEmoji = () => {
        App.MessageCenter.addListener('onEmojiMessage', (res) => {
            this.playEmoji(res.id, false);
        }, this);
        this.addChild(this.emojiLayer);
        this.emojiLayer.touchThrough = true;
        this.emojiLayer.width = App.GameWidth;
        this.emojiLayer.y = App.GameHeight - 150;
        this.emojiLayer.horizontalCenter = 0;
        let layout = new eui.HorizontalLayout();
        layout.horizontalAlign = 'center';
        layout.gap = 15;
        this.emojiLayer.layout = layout;
    }

    playEmoji = (index, isSelf) => {
    }

    RandomNum(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min, 10);
    }

    dispose() {
        super.dispose();
        this.userController.dispose();
        this.platformController.dispose();
        this.comController.dispose();
        this.readyGo.dispose();
        this.result.dispose();
        this.stateController.dispose();
        App.TimerManager.removeAll(this);
        if (!DataCenter.instance.room.IsAI) {
            // App.MessageCenter.removeListener(EventMessage.ReceiveGameEventS2C, this.onGameEvent, this);
            // App.MessageCenter.removeListener(EventMessage.ReceiveGameResultS2C, this.onGameResult, this);
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pressBegin, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.pressEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.pressEnd, this)
        // App.MessageCenter.removeListener(EventMessage.pauseMessage, this.pauseCallback, this);
    }
}

window["GameLongJumpView"] = GameLongJumpView;
