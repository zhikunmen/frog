# 小游戏交叉推广SDK使用说明

## 获取游戏id

使用前需要先在[mini开平](http://miniadmin.egret.com/Extension/gameList)添加小游戏，并获取`游戏id`，同时配置游戏推荐策略。
如果想复用EgretPK等库中已在使用的已在使用的游戏id，则可在后台添加微信小游戏时使用`预定义gameid`进行声明

# chanId  
# 1  微信
# 2  百度
##
#弓箭手 gameId 100013
#弓箭手 chanId 1
##

## 微信后台配置

* 将后台服务域名添加到`request合法域名`：`extension-server.egret.com`
* 将网络资源cdn域名添加到`request合法域名`：`wxrecstatic.egret-labs.org`
* 日志发送地址 extension-log.egret.com


## 使用示例


```
        var info = { gameId: 100013, chanId: 1, debug: true, stage:this, width: 0, height:0, x: 0, y:200 ,userId:'xxxxx'};
        var fix = { gameId: 100019, chanId: 1, debug: true, stage:this, width: 0, height:0, x: 450, y:200,userId:'xxxxx'};
        var btn = { gameId: 100019, chanId: 1, debug: true, stage:this,width: 0, height:0, x:0, y:500, userId:'xxxxx'};
        
        ExtensionSDK.init(info, function (data) {});

        // 固定广告
        ExtensionSDK.showFixed(fix, function (data) {});
        // 轮播图
        ExtensionSDK.showRotation(info, function (data) {});
        // 弹窗
        ExtensionSDK.showButton(btn, function (data) {});


        隐藏
        
        rotation 
        button 
        fixed
        all 

        ExtensionSDK.hide('rotation');    

```

## API说明
gameId    小游戏交叉推广添加时生成的游戏ID 
chanId    渠道id
userId    渠道openid
debug     是否开启错误日志
stage     舞台
width     sdk宽  使用默认大小填 0 
height    sdk高  使用默认大小填 0
x         sdk x 坐标  默认为舞台 0位置
y         sdk y 坐标  默认为舞台 0位置