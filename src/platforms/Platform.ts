class Platform {
    public static G360: number = 16;
    


    public static curPlatformID: number = Platform.G360;
    public static curPlatform: IPlatform;

    public static initPlatform(platformID: number): void {
        Platform.curPlatformID = platformID;
        App.Language = LanguageType.Ch;
        switch (Platform.curPlatformID) {
            case Platform.G360:
                Platform.curPlatform = new PlatformJump();
                    break;
        }
        App.CurrPlatformUid = platformID.toString();
    }
}
