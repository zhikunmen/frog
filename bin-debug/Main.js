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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        egret.lifecycle.onPause = function () {
            App.SoundManager.setBgOn(false);
            App.SoundManager.setEffectOn(false);
        };
        egret.lifecycle.onResume = function () {
            App.SoundManager.setBgOn(true);
            App.SoundManager.setEffectOn(true);
        };
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        //允許跨域
        egret.ImageLoader.crossOrigin = "anonymous";
        //注入自定义的素材解析器
        egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //设置Res并发加载数量
        RES.setMaxLoadingThread(8);
        //Log开启设置
        App.DebugUtils.isOpen(true);
        //帧频设置为60
        App.StageUtils.setFrameRate(60);
        //Proto初始化
        Proto.init();
        //平台初始化
        this.initPlatform();
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var gameResPath = "resource/";
        if (App.Language == LanguageType.En) {
            gameResPath = "resource_En/";
        }
        var theme = new eui.Theme(gameResPath + "default.thm.json", this.stage);
        theme.once(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
    };
    /**
     * 主题文件加载完成
     */
    Main.prototype.onThemeLoadComplete = function () {
        //入口初始化
        this.initMain();
    };
    //平台初始化
    Main.prototype.initPlatform = function () {
        var platformType = Platform.Jump;
        Platform.initPlatform(platformType);
    };
    //Main初始化
    Main.prototype.initMain = function () {
        var main;
        main = new GameMain();
        this.stage.addChild(main);
        this.stage.removeChild(this);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
