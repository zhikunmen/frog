var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ExtensionSDK = (function () {
    function ExtensionSDK() {
    }
    ExtensionSDK.init = function (params, callback) {
        console.log("SDK 版本:", this.SDKVersion);
        var res = { code: 0, msg: "ok" };
        if (params.debug != "undefined" && typeof (params.debug) == "boolean") {
            this.debug = params.debug;
        }
        // 日志输出
        if (this.debug == true) {
            console.log("初始化参数:", params);
        }
        if (params.gameId == 'undefined') {
            console.log('游戏ID错误');
            return;
        }
        if (params.chanId == 'undefined') {
            console.log('渠道ID错误');
            return;
        }
        ExtensionSDK.gameId = params.gameId;
        ExtensionSDK.chanId = params.chanId;
        ExtensionSDK.userId = params.userId;
        this.curPlatform = new sdkinter.Platform();
        callback(res);
    };
    ExtensionSDK.showRotation = function (params, callback) {
        this.curPlatform.showRotation(params, callback);
    };
    ExtensionSDK.showFixed = function (params, callback) {
        this.curPlatform.showFixed(params, callback);
    };
    ExtensionSDK.showButton = function (params, callback) {
        this.curPlatform.showButton(params, callback);
    };
    ExtensionSDK.showBanner = function (params, callback) {
        this.curPlatform.showBanner(params, callback);
    };
    Object.defineProperty(ExtensionSDK, "platform", {
        get: function () {
            return sdkinter.PlatformList;
        },
        enumerable: true,
        configurable: true
    });
    ExtensionSDK.hide = function (type) {
        this.curPlatform.hide(type);
    };
    /**
     * SDK 版本
     */
    ExtensionSDK.SDKVersion = 'extension-sdk-0.0.1';
    ExtensionSDK.debug = true; // 输出日志
    ExtensionSDK.logUrl = "https://extension-log.egret.com";
    ExtensionSDK.CDN = "https://wxrecstatic.egret-labs.org";
    //public static SER = "https://minisdk.egret.com";
    ExtensionSDK.SER = "https://minisdk.egret.com";
    ExtensionSDK.time = 10000; // 轮播切换时间
    return ExtensionSDK;
}());
__reflect(ExtensionSDK.prototype, "ExtensionSDK");
window["ExtensionSDK"] = ExtensionSDK || ExtensionSDK;
var sdkinter;
(function (sdkinter) {
    var PlatformList = (function () {
        function PlatformList() {
        }
        PlatformList.platform_wx = 1; // 微信
        PlatformList.platform_baidu = 2; // 百度
        PlatformList.platform_no = 999; // 未知
        return PlatformList;
    }());
    sdkinter.PlatformList = PlatformList;
    __reflect(PlatformList.prototype, "sdkinter.PlatformList");
    sdkinter.Style = {
        rotation_base: {
            enable: true,
            texture: ExtensionSDK.CDN + "/across/ui/left_base.png",
            level: 0
        },
        rotation_top: {
            enable: true,
            texture: ExtensionSDK.CDN + "/across/ui/left_top.png",
            level: 2
        },
        fixed_base: {
            enable: true,
            texture: ExtensionSDK.CDN + "/across/ui/right_base.png",
            level: 0
        },
        fixed_top: {
            enable: true,
            texture: ExtensionSDK.CDN + "/across/ui/right_top.png",
            level: 2
        },
        button_base: {
            enable: true,
            texture: ExtensionSDK.CDN + "/across/ui/btn.png",
            level: 0,
            onclick: TheOpenPop
        },
        pop_base: {
            enable: true,
            texture: ExtensionSDK.CDN + "/across/ui/pop_bg.png",
            level: 0
        },
        pop_close: {
            enable: true,
            texture: ExtensionSDK.CDN + "/across/ui/x.png",
            level: 2
        },
        pop_head: {
            enable: true,
            texture: ExtensionSDK.CDN + "/across/ui/tjsw.png",
            level: 3
        },
        pop_jump: {
            enable: true,
            texture: ExtensionSDK.CDN + "/across/ui/btn_bg1.png",
            level: 4
        }
    };
    function TheOpenPop() {
        var resList = Platform.getResList('popList', function (data, url) {
            Platform.openPop(data, url);
        });
    }
    sdkinter.TheOpenPop = TheOpenPop;
    var Platform = (function () {
        function Platform() {
            this.out_width = null;
            this.out_height = null;
        }
        Platform.prototype.hide = function (type) {
            switch (type) {
                case 'rotation':
                    Platform.samellStage.visible = false;
                    break;
                case 'fixed':
                    Platform.fixedStage.visible = false;
                    break;
                case 'button':
                    Platform.buttonStage.visible = false;
                    break;
                case 'all':
                    Platform.samellStage.visible = false;
                    Platform.fixedStage.visible = false;
                    Platform.buttonStage.visible = false;
                    break;
            }
        };
        /**
         * 轮播图
         */
        Platform.prototype.showRotation = function (params, callBack) {
            var container = params.stage;
            // 外部大小
            if (!params.width) {
                this.out_width = 164;
                this.out_height = 164;
            }
            else {
                this.out_width = params.width;
                this.out_height = params.height;
            }
            var rotationX = 0;
            var rotationY = 0;
            var openid = 'wz';
            if (params.x)
                rotationX = params.x;
            if (params.y)
                rotationY = params.y;
            if (params.openid)
                openid = params.openid;
            // 锚点, 宽高, 位置 
            var view = Platform.samellStage;
            // 边框
            // const button: egret.Bitmap = new egret.Bitmap();
            // const promises = ['rotation_base', 'rotation_top'].map(name => {
            //     const btnStyle: ButtonStyle = Style[name];
            //     if (!btnStyle.enable) {
            //         return ;
            //     }
            //     const button: egret.Bitmap = new egret.Bitmap();
            //     if (btnStyle.position) {
            //         button.x = btnStyle.position.x;
            //         button.y = btnStyle.position.y;
            //     }
            //     if (btnStyle.onclick) {
            //         button.addEventListener(egret.TouchEvent.TOUCH_TAP, btnStyle.onclick, null);
            //         button.touchEnabled = true;
            //     }
            //     view.addChildAt(button, btnStyle.level);
            //     Platform.setRotation(button, btnStyle.texture, this.out_width, this.out_height);
            // });
            this.getRotation('extensionList', function (data, path, out_width, out_height) {
                var stackWidth = out_width; //Math.round(out_width * Platform.ratio);             
                var stackHeight = stackWidth;
                // 位置 
                // let stackX = Math.round(out_width * Platform.x_ratio);
                // let stackY = Math.round(out_width * Platform.y_ratio);
                for (var i = 0; i < data.length; i++) {
                    if (data[i].type == 'jpg') {
                        var btn = new egret.Bitmap();
                        if (i != 0) {
                            btn.visible = false;
                        }
                        Platform._viewStack.addChild(btn);
                        Platform.setByCdn(btn, data[i], ExtensionSDK.chanId, path, stackWidth, stackWidth, 1);
                    }
                    else if (data[i].type == 'mc') {
                        var btn = new egret.Bitmap();
                        if (i != 0) {
                            btn.visible = false;
                        }
                        Platform.setByCdn(btn, data[i], ExtensionSDK.chanId, path, stackWidth, stackWidth, 1);
                    }
                }
                // 默认选项
                //Platform._viewStack.selectedIndex = 0;
                var timer = new egret.Timer(ExtensionSDK.time);
                timer.removeEventListener(egret.TimerEvent.TIMER, Platform.changeIndexByTimer, Platform._viewStack);
                timer.addEventListener(egret.TimerEvent.TIMER, Platform.changeIndexByTimer, Platform._viewStack);
                timer.start();
                // 遮罩层
                // const _mask = Platform.drawMask(2, stackWidth, stackHeight, 0, 0, 16, 16);
                // _mask.x = stackX;
                // _mask.y = stackY;
                // view.addChild(_mask);
                // Platform._viewStack.mask = _mask;
                // Platform._viewStack.x = stackX;
                // Platform._viewStack.y = stackY;
                view.addChildAt(Platform._viewStack, 1);
            });
            view.x = rotationX;
            view.y = rotationY;
            container.addChild(view);
            callBack(container);
        };
        // list 
        Platform.prototype.showButton = function (params, callBack) {
            var _this = this;
            var container = params.stage;
            // 外部大小
            if (!params.width) {
                this.out_width = 117;
                this.out_height = 119;
            }
            else {
                this.out_width = params.width;
                this.out_height = params.height;
            }
            var rotationX = 0;
            var rotationY = 0;
            if (params.x)
                rotationX = params.x;
            if (params.y)
                rotationY = params.y;
            var view = Platform.buttonStage;
            var button = new egret.Bitmap();
            var promises = ['button_base'].map(function (name) {
                var btnStyle = sdkinter.Style[name];
                if (!btnStyle.enable) {
                    return;
                }
                var button = new egret.Bitmap();
                // if (btnStyle.position) {
                //     button.x = btnStyle.position.x;
                //     button.y = btnStyle.position.y;
                // }
                if (btnStyle.onclick) {
                    button.addEventListener(egret.TouchEvent.TOUCH_TAP, btnStyle.onclick, null);
                    button.touchEnabled = true;
                }
                view.addChildAt(button, btnStyle.level);
                button.x = rotationX;
                button.y = rotationY;
                Platform.setRotation(button, btnStyle.texture, _this.out_width, _this.out_height);
            });
            container.addChild(view);
            callBack(container);
        };
        // banner 
        Platform.prototype.showBanner = function (params, callBack) {
            var stage = params.stage;
            // 外部大小
            if (!params.width) {
                this.out_width = 410;
            }
            else {
                this.out_width = params.width;
                this.out_height = params.height;
            }
            var rotationX = 0;
            var rotationY = 0;
            if (params.x)
                rotationX = params.x;
            if (params.y)
                rotationY = params.y;
            var view = Platform.bannerStage;
            var getBanner = function (res) {
                var dataList = res.data.r.bannerList;
                var url = res.data.data.path;
                if (dataList) {
                    var button = new egret.Bitmap();
                    Platform.setByCdn(button, dataList[0], ExtensionSDK.chanId, url, this.out_width, this.out_height, 3);
                    // button.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                    // Platform.jump(dataList[0].appid, dataList[0].id, 3);
                    // }, this);
                    button.touchEnabled = true;
                    view.addChild(button);
                    view.x = rotationX;
                    view.y = rotationY;
                    stage.addChild(view);
                    callBack(stage);
                }
            };
            if (ExtensionSDK.chanId == 1) {
            }
            window["swan"].request({ "url": ExtensionSDK.SER + "?a=getBannerList&gameId=" + ExtensionSDK.gameId.toString(), "success": getBanner });
        };
        /**
         * 固定位广告
         */
        Platform.prototype.showFixed = function (params, callBack) {
            var container = params.stage;
            // 外部大小
            if (!params.width) {
                this.out_width = 164;
                this.out_height = 164;
            }
            else {
                this.out_width = params.width;
                this.out_height = params.height;
            }
            var rotationX = 0;
            var rotationY = 0;
            if (params.x)
                rotationX = params.x;
            if (params.y)
                rotationY = params.y;
            var view = Platform.fixedStage;
            // 边框
            // const button: egret.Bitmap = new egret.Bitmap();
            // const promises = ['fixed_base', 'fixed_top'].map(name => {
            //     const btnStyle: ButtonStyle = Style[name];
            //     if (!btnStyle.enable) {
            //         return ;
            //     }
            //     const button: egret.Bitmap = new egret.Bitmap();
            //     if (btnStyle.position) {
            //         button.x = btnStyle.position.x;
            //         button.y = btnStyle.position.y;
            //     }
            //     if (btnStyle.onclick) {
            //         button.addEventListener(egret.TouchEvent.TOUCH_TAP, btnStyle.onclick, null);
            //         button.touchEnabled = true;
            //     }
            //     view.addChildAt(button, btnStyle.level);
            //     Platform.setRotation(button, btnStyle.texture, this.out_width, this.out_height);
            // });
            //
            this.getRotation('fixedList', function (data, path, out_width, out_height) {
                var stackWidth = out_width; //Math.round(out_width * Platform.fixed_ratio);             
                var stackHeight = stackWidth;
                // 位置 
                // let stackX =  Math.round(out_width * Platform.fixed_x_ratio);
                // let stackY =  Math.round(out_width * Platform.fixed_y_ratio);
                for (var i = 0; i < data.data.length; i++) {
                    var _data = new Array();
                    _data['type'] = data.data[i].game_type;
                    _data['image_path'] = data.data[i].game_icon.icon;
                    if (data.data[i].game_icon.json1) {
                        _data['json1'] = data.data[i].game_icon.json1;
                    }
                    _data['id'] = data.data[i].game_id;
                    _data['appid'] = data.data[i].game_appid;
                    if (data.data[i].game_type == 'jpg') {
                        var btn = new egret.Bitmap();
                        Platform._fixStack.addChild(btn);
                        Platform.setByCdn(btn, _data, ExtensionSDK.chanId, path, stackWidth, stackWidth, 2);
                    }
                    else if (data.data[i].game_type == 'mc') {
                        var btn = new egret.Bitmap();
                        Platform.setByCdn(btn, _data, ExtensionSDK.chanId, path, stackWidth, stackWidth, 2);
                    }
                }
                // 绘制遮罩
                // const _mask = Platform.drawMask(1, stackWidth / 2, stackHeight, stackWidth / 2, stackWidth / 2, 16, 16);
                // _mask.x = stackX;
                // _mask.y = stackY;
                // view.addChild(_mask);
                // Platform._fixStack.mask = _mask;
                // Platform._fixStack.x = stackX; 
                // Platform._fixStack.y = stackY;
                Platform._fixStack.scaleX = out_width / 90;
                Platform._fixStack.scaleY = out_height / 90;
                view.addChildAt(Platform._fixStack, 1);
            });
            view.x = rotationX;
            view.y = rotationY;
            container.addChild(view);
            callBack(container);
        };
        /**
         * 获取轮播图
         */
        Platform.prototype.getRotation = function (getDataCode, callBack) {
            var gameId = ExtensionSDK.gameId;
            var chanId = ExtensionSDK.chanId;
            var userId = ExtensionSDK.userId;
            var dataList = new Array();
            var url = null;
            var width = this.out_width;
            var height = this.out_height;
            var success = function (res) {
                if (getDataCode == 'extensionList') {
                    dataList = res.data.data.extensionList;
                }
                else if (getDataCode == 'fixedList') {
                    dataList = res.data.data.fixedList;
                }
                url = res.data.data.path;
                callBack(dataList, url, width, height);
            };
            // 微信
            if (ExtensionSDK.chanId == 1) {
                wx.request({ "url": ExtensionSDK.SER + "/Dissemination.carouselInfo?data={\"gameId\":" + gameId + ",\"chanId\":" + chanId + ",\"userId\":\"" + userId + "\"}", "success": success });
            }
            // 百度
            if (ExtensionSDK.chanId == 2) {
                window["swan"].request({ "url": ExtensionSDK.SER + "/Dissemination.carouselInfo?data={\"gameId\":" + gameId + ",\"chanId\":" + chanId + ",\"userId\":\"" + userId + "\"}", "success": success });
            }
        };
        /**
         * 设置轮播图
         */
        Platform.setRotation = function (bitmap, texture, width, height) {
            if (!bitmap)
                debugger;
            if (texture instanceof egret.Texture) {
                bitmap.texture = texture;
                return bitmap;
            }
            if (!width) {
                width = 104;
            }
            var url = texture;
            var loader = new egret.ImageLoader();
            loader.once(egret.Event.COMPLETE, function () {
                var texture = new egret.Texture();
                texture.bitmapData = loader.data;
                bitmap.texture = texture;
                bitmap.width = width;
                bitmap.height = height;
            }, null);
            loader.once(egret.IOErrorEvent.IO_ERROR, function (err) {
                console.error(err);
            }, null);
            loader.load(url);
            return bitmap;
        };
        /**
         * 加载cdn 资源
         */
        Platform.setByCdn = function (btn, data, game_channel, path, width, height, type) {
            switch (data.type) {
                case 'jpg':
                    Platform.setRotation(btn, path + data.image_path, width, width);
                    btn.touchEnabled = true;
                    btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        Platform.jump(data.appid, data.id, type);
                    }, this);
                    break;
                case 'mc':
                    var mcTexture_1;
                    var mcData_1;
                    var success1 = function (res) {
                        mcData_1 = res.data;
                        // if (mcTexture && mcData)  showAction(mcData, mcTexture);                                                                                                                                                                                   
                    };
                    if (ExtensionSDK.chanId == 1) {
                        wx.request({ "url": ExtensionSDK.CDN + "/" + data.json1, "success": success1 });
                    }
                    if (ExtensionSDK.chanId == 2) {
                        window["swan"].request({ "url": ExtensionSDK.CDN + "/" + data.json1, "success": success1 });
                    }
                    var loader_1 = new egret.ImageLoader();
                    loader_1.once(egret.Event.COMPLETE, function () {
                        var texture = new egret.Texture();
                        texture.bitmapData = loader_1.data;
                        mcTexture_1 = texture;
                        if (mcTexture_1 && mcData_1)
                            showAction_1(btn, mcData_1, mcTexture_1);
                    }, null);
                    loader_1.load(ExtensionSDK.CDN + "/" + data.image_path);
                    var showAction_1 = function (btn, _mcData, _mcTexture) {
                        var mcDataFactory = new egret.MovieClipDataFactory(_mcData, _mcTexture);
                        btn = new egret.MovieClip(mcDataFactory.generateMovieClipData(_mcData.name));
                        btn.play(-1);
                        btn.touchEnabled = true;
                        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            Platform.jump(data.appid, data.id, type);
                        }, this);
                        btn.width = width;
                        btn.height = height;
                        btn.anchorOffsetX = 0;
                        btn.anchorOffsetY = 0;
                        if (type == 1) {
                            Platform._viewStack.addChild(btn);
                        }
                        if (type == 2) {
                            Platform._fixStack.addChild(btn);
                        }
                    };
                    break;
                case 'lg':
                    break;
            }
        };
        Platform.openPop = function (data, url) {
            var out_width = 506;
            var out_height = 698;
            // 1134 
            // 640 
            var dataList = data.data;
            if (Platform.pop != null || data.length == 0) {
                return;
            }
            var Group = new egret.DisplayObjectContainer();
            Group.x = (egret.MainContext.instance.stage.stageWidth - out_width) / 2;
            Group.y = (egret.MainContext.instance.stage.stageHeight - out_height) / 2;
            Platform.pop = 1;
            var setX = out_width;
            var button = new egret.Bitmap();
            // 添加背景
            var promises = ['pop_base', 'pop_close'].map(function (name) {
                var btnStyle = sdkinter.Style[name];
                if (!btnStyle.enable) {
                    return;
                }
                var button = new egret.Bitmap();
                button.touchEnabled = true;
                if (btnStyle.position) {
                    button.anchorOffsetX = btnStyle.position.x;
                    button.y = btnStyle.position.y;
                }
                if (name == 'pop_close') {
                    out_width = 52;
                    out_height = 52;
                    button.x = setX - 39;
                    button.anchorOffsetY = 13;
                    button.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        // 关闭; 
                        Platform.buttonStage.removeChild(Platform.buttonStage.getChildAt(Platform.buttonStage.numChildren - 1));
                        Platform.pop = null;
                    }, null);
                    button.touchEnabled = true;
                }
                Group.addChildAt(button, btnStyle.level);
                Platform.setRotation(button, btnStyle.texture, out_width, out_height);
            });
            // 添加列表
            var l_top = 93;
            var l_left = 24;
            var l_right = 21;
            if (dataList.length >= 1) {
                var _loop_1 = function () {
                    var app_info = dataList[i];
                    add_top = 154 * i;
                    pop_head = new egret.Bitmap();
                    pop_head.x = l_left;
                    pop_head.y = l_top + add_top;
                    Group.addChild(pop_head);
                    Platform.setRotation(pop_head, sdkinter.Style.pop_head.texture, 118, 118);
                    pop_jump = new egret.Bitmap();
                    pop_jump.x = 340;
                    pop_jump.y = 120 + add_top;
                    Platform.setRotation(pop_jump, sdkinter.Style.pop_jump.texture, 145, 59);
                    Group.addChild(pop_jump);
                    pop_jump.touchEnabled = true;
                    pop_jump.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        Platform.jump(app_info.game_appid, app_info.game_id, 4);
                    }, this_1);
                    icon = new egret.Bitmap();
                    icon.x = l_left;
                    icon.y = l_top + add_top;
                    d = { image_path: dataList[i]['game_icon']['icon'], type: dataList[i]['game_type'], name: app_info['game_name'], appid: dataList[i]['game_appid'], id: dataList[i]['game_id'] };
                    Platform.setByCdn(icon, d, ExtensionSDK.chanId, url, 118, 118, 4);
                    Group.addChild(icon);
                    //再来个遮罩
                    // var icon_mask = Platform.drawMask(2, 114,114, l_left + 2, l_top + 2 + add_top, 50, 50);
                    // Group.addChild(icon_mask);
                    // icon.mask = icon_mask;
                    name = new egret.TextField();
                    name.text = dataList[i].game_name;
                    name.size = 26;
                    name.height = 170;
                    name.y = 136 + add_top;
                    name.x = 10 + 118 + l_left; // 左边距 + 图片宽 + 图片左边距
                    name.textAlign = egret.HorizontalAlign.CENTER;
                    name.textColor = 0x9f642c;
                    Group.addChild(name);
                };
                var this_1 = this, add_top, pop_head, pop_jump, icon, d, name;
                for (var i = 0; i < dataList.length; i++) {
                    _loop_1();
                }
            }
            var num = Platform.buttonStage.numChildren;
            Platform.buttonStage.addChildAt(Group, num);
        };
        /**
         * tiaozhu
         * 日志发送
         */
        Platform.jump = function (appid, id, type) {
            if (ExtensionSDK.chanId == 1) {
                var uid = ExtensionSDK.userId;
                var str = '{"gameId":' + ExtensionSDK.gameId + ',"chanId":' + ExtensionSDK.chanId + ',"userId":"' + uid.toString() + '","type":2,"platformP":"{}"}';
                wx.request({ "url": ExtensionSDK.SER + "/ShareVideo.getRule?data=" + str, "success": function (rs) {
                        if (rs.data.data.allow) {
                            wx.navigateToMiniProgram({
                                appId: appid,
                                extraData: {
                                    id: ExtensionSDK.gameId,
                                    from: "wx"
                                },
                                success: function (res) { },
                                complete: function (res) { }
                            });
                            wx.request({ "url": ExtensionSDK.logUrl + "/stat/stat.php?data=" + JSON.stringify({ "game_id": ExtensionSDK.gameId, "channel": ExtensionSDK.chanId, "extension_game_id": id, "type": type, "system": egret.Capabilities.os }), "success": function () { } });
                        }
                    } });
            }
            if (ExtensionSDK.chanId == 2) {
                var urlStr = ExtensionSDK.SER + "/ShareVideo.getRule?data={\"gameId\":" + ExtensionSDK.gameId + ",\"chanId\":" + ExtensionSDK.chanId + ",\"userId\":\"" + ExtensionSDK.userId + "\",\"type\":2,\"platformP\":\"{}\"}";
                window["swan"].request({ "url": urlStr, "success": function (rs) {
                        if (rs.data.data.allow) {
                            window["swan"].navigateToMiniProgram({
                                appKey: appid,
                                extraData: {
                                    id: ExtensionSDK.gameId,
                                    from: "baidu"
                                },
                                success: function (res) { },
                                complete: function (res) { }
                            });
                            window["swan"].request({ "url": ExtensionSDK.logUrl + "/stat/stat.php?data=" + JSON.stringify({ "game_id": ExtensionSDK.gameId, "channel": ExtensionSDK.chanId, "extension_game_id": id, "type": type, "system": egret.Capabilities.os }), "success": function () { } });
                        }
                    } });
            }
        };
        /**
         * 绘制遮罩
         */
        Platform.drawMask = function (type, width, height, x, y, ellW, ellH) {
            switch (type) {
                case 1:// 圆形遮罩
                    var shape = new egret.Shape();
                    shape.graphics.beginFill(0xff0000);
                    shape.graphics.drawCircle(x, y, width);
                    shape.graphics.endFill();
                    break;
                case 2:// 圆角矩形    
                    var shape = new egret.Shape();
                    shape.graphics.beginFill(0x00ff00);
                    shape.graphics.drawRoundRect(x, y, width, height, ellW, ellH);
                    shape.graphics.endFill();
                    break;
            }
            return shape;
        };
        /**
         * 获取资源列表
         */
        Platform.getResList = function (resType, callBack) {
            var gameId = ExtensionSDK.gameId;
            var chanId = ExtensionSDK.chanId;
            var userId = ExtensionSDK.userId;
            var dataList = new Array();
            var url = null;
            var success = function (res) {
                if (res.code == undefined || res.code != 0) {
                    callBack(dataList, '');
                }
                if (resType == 'extensionList') {
                    dataList = res.data.data.extensionList;
                }
                else if (resType == 'fixedList') {
                    dataList = res.data.data.fixedList;
                }
                else if (resType == 'popList') {
                    dataList = res.data.data.popList;
                }
                else if (resType == 'bannerList') {
                    dataList = res.data.data.bannerList;
                }
                url = res.data.data.path;
                callBack(dataList, url);
            };
            if (ExtensionSDK.chanId == 2) {
                if (resType == 'popList') {
                    window["swan"].request({ "url": ExtensionSDK.SER + "/Dissemination.carouselInfo?data={\"gameId\":" + gameId + ",\"chanId\":" + chanId + ",\"userId\":\"" + userId + "\"}", "success": success });
                }
                else {
                    window["swan"].request({ "url": ExtensionSDK.SER + "?a=getBannerList&gameId=" + gameId.toString(), "success": success });
                }
            }
            if (ExtensionSDK.chanId == 1) {
                if (resType == 'popList') {
                    wx.request({ "url": ExtensionSDK.SER + "/Dissemination.carouselInfo?data={\"gameId\":" + gameId + ",\"chanId\":" + chanId + ",\"userId\":\"" + userId + "\"}", "success": success });
                }
                else {
                    wx.request({ "url": ExtensionSDK.SER + "?a=getBannerList&gameId=" + gameId.toString(), "success": success });
                }
            }
        };
        Platform.role = new egret.MovieClip();
        Platform.samellStage = new egret.DisplayObjectContainer();
        Platform.fixedStage = new egret.DisplayObjectContainer();
        Platform.buttonStage = new egret.DisplayObjectContainer();
        Platform.bannerStage = new egret.DisplayObjectContainer();
        Platform.url = ExtensionSDK.SER + "/";
        Platform._viewStack = new egret.DisplayObjectContainer();
        Platform._fixStack = new egret.DisplayObjectContainer();
        Platform.pop = null;
        Platform.rotationNum = 1;
        Platform.ratio = 0.634;
        Platform.x_ratio = 0.0975;
        Platform.y_ratio = 0.201;
        Platform.fixed_ratio = 0.743;
        Platform.fixed_x_ratio = 0.115;
        Platform.fixed_y_ratio = 0.091;
        /**
        * 切换图片
        */
        Platform.changeIndexByTimer = function (evt) {
            Platform._viewStack.getChildAt(Platform.rotationNum).visible = false;
            if (Platform.rotationNum == Platform._viewStack.numChildren - 1) {
                Platform.rotationNum = 0;
            }
            else {
                Platform.rotationNum += 1;
            }
            Platform._viewStack.getChildAt(Platform.rotationNum).visible = true;
        };
        return Platform;
    }());
    sdkinter.Platform = Platform;
    __reflect(Platform.prototype, "sdkinter.Platform", ["sdkinter.InPlatform"]);
})(sdkinter || (sdkinter = {}));
