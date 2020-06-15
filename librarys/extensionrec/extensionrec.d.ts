declare class ExtensionSDK {
    /**
    * 平台的入口
    */
    private static curPlatform;
    /**
     * SDK 版本
     */
    static SDKVersion: string;
    static gameId: number;
    static chanId: number;
    static userId: any;
    static gameStage: any;
    static debug: boolean;
    static logUrl: string;
    static CDN: string;
    static SER: string;
    static time: number;
    static init(params: any, callback: Function): void;
    static showRotation(params: any, callback: Function): void;
    static showFixed(params: any, callback: Function): void;
    static showButton(params: any, callback: Function): void;
    static showBanner(params: any, callback: Function): void;
    static readonly platform: any;
    static hide(type: string): void;
}
declare namespace sdkinter {
    /**
     * 按钮样式
     */
    interface ButtonStyle {
        /**
         * 是否使用，若值为false，则不显示指定按钮，其他所有配置也将无效
         */
        enable: boolean;
        /**
         * 是否使用自定义的图片，可以是图片或网络url
         */
        texture?: egret.Texture | string;
        /**
         * 位置，无要求时将显示默认位置
         */
        position?: egret.Point;
        /**
         * 点击事件回调
         */
        onclick?: Function;
        /**
         * 层级
         */
        level?: number;
    }
    interface Style {
        /**
         * 轮播
         */
        rotation_base?: ButtonStyle;
        rotation_top?: ButtonStyle;
        /**
         * 固定位广告
         */
        fixed_base?: ButtonStyle;
        fixed_top?: ButtonStyle;
        /**
         * 按钮
         */
        button_base?: ButtonStyle;
        /**
         * 弹窗
         */
        pop_base?: ButtonStyle;
        pop_close?: ButtonStyle;
        pop_head?: ButtonStyle;
        pop_jump?: ButtonStyle;
    }
    interface InPlatform {
        showRotation(params: any, callBack: Function): any;
        showFixed(params: any, callBack: Function): any;
        showButton(params: any, callBack: Function): any;
        showBanner(params: any, callBack: Function): any;
        hide(type: string): any;
    }
}
declare namespace sdkinter {
    class PlatformList {
        static platform_wx: number;
        static platform_baidu: number;
        static platform_no: number;
    }
    const Style: Style;
    function TheOpenPop(): void;
    class Platform implements sdkinter.InPlatform {
        private static role;
        private static samellStage;
        private static fixedStage;
        private static buttonStage;
        private static bannerStage;
        private static url;
        private static _viewStack;
        private static _fixStack;
        private static pop;
        private out_width;
        private out_height;
        private static rotationNum;
        private static ratio;
        private static x_ratio;
        private static y_ratio;
        private static fixed_ratio;
        private static fixed_x_ratio;
        private static fixed_y_ratio;
        hide(type: string): void;
        /**
         * 轮播图
         */
        showRotation(params: {
            stage: egret.DisplayObjectContainer;
            width?: number;
            height?: number;
            x?: number;
            y?: number;
            openid?: string;
        }, callBack: Function): void;
        showButton(params: {
            stage: egret.DisplayObjectContainer;
            width?: number;
            height?: number;
            x?: number;
            y?: number;
            openid?: string;
        }, callBack: Function): void;
        showBanner(params: any, callBack: Function): void;
        /**
         * 固定位广告
         */
        showFixed(params: {
            stage: egret.DisplayObjectContainer;
            width?: number;
            height?: number;
            x?: number;
            y?: number;
            openid?: string;
        }, callBack: Function): void;
        /**
         * 获取轮播图
         */
        getRotation(getDataCode: any, callBack: Function): void;
        /**
         * 设置轮播图
         */
        static setRotation(bitmap: egret.Bitmap, texture: egret.Texture | string, width: number, height: number): egret.Bitmap;
        /**
         * 加载cdn 资源
         */
        static setByCdn(btn: any, data: any, game_channel: number, path: string, width: number, height: number, type: number): void;
        static openPop(data: any, url: any): void;
        /**
         * tiaozhu
         * 日志发送
         */
        static jump(appid: string, id: any, type: any): void;
        /**
        * 切换图片
        */
        static changeIndexByTimer: (evt: egret.TimerEvent) => void;
        /**
         * 绘制遮罩
         */
        static drawMask(type: number, width: number, height: number, x: number, y: number, ellW: number, ellH: number): egret.Shape;
        /**
         * 获取资源列表
         */
        static getResList(resType: string, callBack: Function): void;
    }
}
