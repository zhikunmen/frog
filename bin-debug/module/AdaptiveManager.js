var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by Ink on 2018/1/8.
 * 适配工具类
 */
var AdaptiveManager = (function () {
    function AdaptiveManager($preinstallWidth, $preinstallHeight) {
        this._preinstallWidth = $preinstallWidth;
        this._preinstallHeight = $preinstallHeight;
    }
    /**
     * 获取一个实例化的适配工具单例
     * @param $preinstallWidth:number 游戏舞台预设宽度
     * @param $preinstallHeight:number 游戏舞台预设高度
     */
    AdaptiveManager.instance = function ($preinstallWidth, $preinstallHeight) {
        if ($preinstallWidth === void 0) { $preinstallWidth = 1136; }
        if ($preinstallHeight === void 0) { $preinstallHeight = 640; }
        if (!this._instance)
            this._instance = new AdaptiveManager($preinstallWidth, $preinstallHeight);
        return this._instance;
    };
    Object.defineProperty(AdaptiveManager.prototype, "PreinstallWidth", {
        /** 游戏预设宽度 */
        get: function () {
            return this._preinstallWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveManager.prototype, "PreinstallHeight", {
        /**舞台预设高度 */
        get: function () {
            return this._preinstallHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveManager.prototype, "Stage", {
        /** 舞台 */
        get: function () {
            return egret.MainContext.instance.stage;
        },
        enumerable: true,
        configurable: true
    });
    /** 是否禁用舞台 */
    AdaptiveManager.prototype.stageEnable = function (boo) {
        this.Stage.touchChildren = boo;
    };
    Object.defineProperty(AdaptiveManager.prototype, "StageWidth", {
        /** 舞台宽度（实际） */
        get: function () {
            return this.Stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveManager.prototype, "StageHeight", {
        /** 舞台高度（实际） */
        get: function () {
            return this.Stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveManager.prototype, "MainShowWidth", {
        /** 主内容显示宽度 */
        get: function () {
            return this.StageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveManager.prototype, "MainShowHeight", {
        /** 主内容显示高度 */
        get: function () {
            var ratio = this.getWHRatio();
            var height = this.StageHeight;
            //iphoneX 去除上额头和下额头所占百分比
            if (ratio == 0.46) {
                height -= Math.ceil(height * (0.049 + 0.027));
            }
            else if (ratio <= 0.48) {
                // 刘海窄屏
                height -= Math.ceil(height * (0.049 + 0.027));
            }
            return height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveManager.prototype, "MainOffsetY", {
        /** 获取偏移量 */
        get: function () {
            var ratio = this.getWHRatio();
            var offset = 0;
            if (ratio == 0.46) {
                offset = Math.ceil(this.StageHeight * 0.049);
            }
            else if (ratio <= 0.48) {
                // 刘海窄屏
                offset = Math.ceil(this.StageHeight * 0.049);
            }
            return offset;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param component 要缩放的控件
     * @param type 适配类型  AdaptiveType
     */
    AdaptiveManager.prototype.adaptiveComponent = function (component, type) {
        if (!component)
            return;
        if (type == AdaptiveType.CenterAdaptive) {
            this.adaptiveScreen(component);
        }
        else if (type == AdaptiveType.StretchAdaptive) {
            this.bgAdaptiveScreen(component);
        }
        else if (type == AdaptiveType.MinScaleAdaptive) {
            this.adaptiveMinScale(component);
        }
        else if (type == AdaptiveType.ScaleXAdaptive) {
            component.scaleX = component.scaleY = this.getScaleX();
        }
        else if (type == AdaptiveType.ScaleYAdaptive) {
            component.scaleX = component.scaleY = this.getScaleY();
        }
    };
    /**适配屏幕 */
    AdaptiveManager.prototype.adaptiveScreen = function (contentGroup) {
        if (!contentGroup)
            return;
        contentGroup.x = this.StageWidth / 2;
        contentGroup.y = this.StageHeight / 2;
        contentGroup.anchorOffsetX = contentGroup.width / 2;
        contentGroup.anchorOffsetY = contentGroup.height / 2;
        this.adaptiveMinScale(contentGroup);
    };
    /**背景适配 */
    AdaptiveManager.prototype.bgAdaptiveScreen = function (bg) {
        if (!bg)
            return;
        bg.width = this.StageWidth;
        bg.height = this.StageHeight;
    };
    /**适配最小缩放值 */
    AdaptiveManager.prototype.adaptiveMinScale = function (obj) {
        if (!obj)
            return;
        obj.scaleX = obj.scaleY = this.getMinScale();
    };
    AdaptiveManager.prototype.getScaleX = function () {
        return this.MainShowWidth / this.PreinstallWidth;
        // return Math.floor(this.MainShowWidth / this.PreinstallWidth * 10) / 10;
    };
    AdaptiveManager.prototype.getScaleY = function () {
        return this.MainShowHeight / this.PreinstallHeight;
        // return Math.floor(this.MainShowHeight / this.PreinstallHeight * 10) / 10;
    };
    AdaptiveManager.prototype.getMinScale = function () {
        return Math.min(this.getScaleX(), this.getScaleY(), 1);
    };
    /**
     * 获取实际宽高比 保留两位小数
     * @param
     */
    AdaptiveManager.prototype.getWHRatio = function (fractionDigits) {
        if (fractionDigits === void 0) { fractionDigits = 2; }
        var ratio = this.StageWidth / this.StageHeight;
        var value = Math.pow(10, fractionDigits);
        ratio = ~~(ratio * value) / value;
        return ratio;
    };
    Object.defineProperty(AdaptiveManager.prototype, "ratioValue", {
        /**
         * 获取屏幕兑换比例
         */
        get: function () {
            return window.innerWidth / this.StageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveManager.prototype, "ratioValue_baidugame", {
        /**
         * 获取微信小游戏中舞台尺寸的兑换比例
         */
        get: function () {
            var sysInfo = baidu.getSystemInfoSync();
            var wxStageW = sysInfo.pixelRatio * sysInfo.windowWidth;
            var ratio = wxStageW / this.StageWidth;
            return ratio;
        },
        enumerable: true,
        configurable: true
    });
    return AdaptiveManager;
}());
__reflect(AdaptiveManager.prototype, "AdaptiveManager");
/**
 * 适配类型
 */
var AdaptiveType;
(function (AdaptiveType) {
    /** 内容完整适配并居中 1 */
    AdaptiveType[AdaptiveType["CenterAdaptive"] = 1] = "CenterAdaptive";
    /** 全屏拉伸适配 2 */
    AdaptiveType[AdaptiveType["StretchAdaptive"] = 2] = "StretchAdaptive";
    /** 从宽高中取最小缩放比缩放 3 */
    AdaptiveType[AdaptiveType["MinScaleAdaptive"] = 3] = "MinScaleAdaptive";
    /** 按照宽度缩放比进行缩放 4 */
    AdaptiveType[AdaptiveType["ScaleXAdaptive"] = 4] = "ScaleXAdaptive";
    /** 按照高度缩放比尽心缩放 5 */
    AdaptiveType[AdaptiveType["ScaleYAdaptive"] = 5] = "ScaleYAdaptive";
})(AdaptiveType || (AdaptiveType = {}));
