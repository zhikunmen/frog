class Platform {
    public static Jump: number = 16;
    


    public static curPlatformID: number = Platform.Jump;
    public static curPlatform: IPlatform;

    public static initPlatform(platformID: number): void {
        Platform.curPlatformID = platformID;
        App.Language = LanguageType.Ch;
        switch (Platform.curPlatformID) {
            case Platform.Jump:
                Platform.curPlatform = new PlatformJump();
                    break;
        }
        App.CurrPlatformUid = platformID.toString();
    }
}
