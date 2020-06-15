var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 网络延迟测试
 */
var NetWorkDelayTest = (function () {
    function NetWorkDelayTest() {
        // 记录点击次数
        this.clickNum = 0;
        this.init();
    }
    NetWorkDelayTest.prototype.init = function () {
        // 文本
        this.netWorktext = new egret.TextField();
        this.netWorktext.borderColor = 0xFF0000;
        this.netWorktext.border = true;
        this.netWorktext.width = 400;
        this.netWorktext.height = 34;
        this.netWorktext.x = (App.GameWidth - this.netWorktext.width) / 2;
        this.netWorktext.y = 10;
        this.netWorktext.textColor = 0x000000;
        this.netWorktext.strokeColor = 0xFF0000;
        this.netWorktext.stroke = 2;
        this.netWorktext.size = 30;
        this.netWorktext.textAlign = "center";
        // 注册事件
        this.initMessage();
        // 监听舞台点击事件
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    NetWorkDelayTest.prototype.onClick = function (evt) {
        var _this = this;
        if (evt.$stageY > 50) {
            return;
        }
        if (this.clickNum == 0) {
            egret.setTimeout(function () {
                if (_this.clickNum >= 5) {
                    _this.onStartSendNetWork();
                }
                else {
                    _this.clickNum = 0;
                }
            }, this, 1000);
        }
        this.clickNum++;
    };
    // 注册网络延迟测试监听
    NetWorkDelayTest.prototype.initMessage = function () {
        //收到网络延时返回
        App.MessageCenter.addListener(Proto.ID_client_network_s2c, this.onGetNetWorkS2C, this);
    };
    // 收到网络延迟返回
    NetWorkDelayTest.prototype.onGetNetWorkS2C = function (data) {
        var newTime = egret.getTimer() - parseInt(data.time.toString());
        this.netWorktext.text = "Server：" + Common.ServerIndex + " 延迟: " + newTime + " 毫秒";
    };
    // 开始发送net work
    NetWorkDelayTest.prototype.onStartSendNetWork = function () {
        this.ontimerUpdate();
        App.StageUtils.getStage().addChild(this.netWorktext);
        App.TimerManager.doTimer(2000, 0, this.ontimerUpdate, this);
    };
    // 结束发送net work
    NetWorkDelayTest.prototype.onStopSendNetWork = function () {
        App.TimerManager.remove(this.ontimerUpdate, this);
    };
    // net 
    NetWorkDelayTest.prototype.ontimerUpdate = function () {
        // 记录当前时间
        var sendNetResult = egret.getTimer();
        var sendMsg = new client_network_c2s();
        sendMsg.time = sendNetResult;
        App.Socket.send(sendMsg);
    };
    return NetWorkDelayTest;
}());
__reflect(NetWorkDelayTest.prototype, "NetWorkDelayTest");
