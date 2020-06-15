class Common {
    public constructor() {
    }

    public static ServerIndex: number = -1;

    //错误信息显示
    public static showErrorMsg_Game(msg: string): void {
        msg = msg + "(" + Common.ServerIndex + ")";
        GamePopView.Popup(Game.getInstance().stateManager.curState, msg, () => {
            Platform.curPlatform.gameOver(1);
        });
    }

    //根据两个userId创建一个chatId
    public static createChatId(userIds): string {
        var userId1 = userIds[0];
        var userId2 = userIds[1];
        if (userId1 < userId2) {
            return userId1 + '_' + userId2;
        } else {
            return userId2 + '_' + userId1;
        }
    }
}
