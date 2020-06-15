class G360Platform implements IPlatform {
    public platformData: any;
    public static base64Avatar: string;
    public constructor() {
        this.init();
    }

    private init(): void {
        Statistics.init('Vivo');
        //初始化GameId
        App.CurrGameId = 11;
    }

    public login(callBack: Function): void {
        //返回数据
        let userIdRandom = App.RandomUtils.limitInteger(10000, 20000).toString();
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
        }
        App.CurrRoomId = this.platformData.roomId;
        App.CurrPlatformUid = this.platformData.roomId;
    }

    private onInit(param: any) {
        // vivo.getRoomInfo();
    }

    //背景音乐特殊处理
    public dealBgMusic(): void {

    }

    // 游戏结算通知撩站平台前端  "0":无胜负结果,"1":负,"2":平,"3":胜
    public gameOver(value: number): void {
        var win = 1;
        if (value == 1) {
            win = 2;
        } else if (value == 2) {
            win = 3;
        } else if (value == 3) {
            win = 1;
        }
        /*
        vivo.finish(win);
        */
    }

    invite() {

    }
    loaded() {

    }
}
