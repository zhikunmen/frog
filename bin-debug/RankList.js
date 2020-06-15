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
var RankList = (function (_super) {
    __extends(RankList, _super);
    function RankList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankList.prototype.setData = function (list) {
        var width = App.GameWidth;
        var height = App.GameHeight;
        var mask = new egret.Shape();
        mask.touchEnabled = true;
        mask.graphics.beginFill(0x000000, 0.7);
        mask.graphics.drawRect(0, 0, width, height);
        mask.graphics.endFill();
        this.addChild(mask);
        this.bg = new egret.Bitmap(RES.getRes("rankBg_png"));
        this.bg.x = width - this.bg.width >> 1;
        this.bg.y = (height - this.bg.height >> 1) - 70;
        this.addChild(this.bg);
        var context = new egret.DisplayObjectContainer();
        var size = list.length;
        for (var i = 0; i < size; ++i) {
            var data = list[i];
            var item = new egret.Sprite();
            item.graphics.beginFill(0xff0000, 0);
            item.graphics.drawRect(0, 0, 490, 70);
            item.graphics.endFill();
            item.y = i * 85;
            var numTxt = new egret.TextField();
            numTxt.text = (i + 1) + "";
            numTxt.anchorOffsetX = numTxt.width * 0.5;
            numTxt.x = 40;
            numTxt.y = 23;
            numTxt.bold = true;
            numTxt.scaleX = 0.7;
            numTxt.size = 44;
            item.addChild(numTxt);
            if (i == 0) {
                numTxt.textColor = 0xffb900;
            }
            else if (i == 1) {
                numTxt.textColor = 0xc0f6ff;
            }
            else if (i == 2) {
                numTxt.textColor = 0xea762f;
            }
            else {
                numTxt.textColor = 0x666666;
            }
            var head = new RoleHeadImage(data.head, "rankItemBG_s_png", 64, 64);
            head.x = 100;
            head.y = 10;
            item.addChild(head);
            var nameTxt = new egret.TextField();
            nameTxt.size = 18;
            nameTxt.x = 190;
            nameTxt.y = 34;
            nameTxt.textColor = 0x333333;
            nameTxt.text = data.name;
            item.addChild(nameTxt);
            context.addChild(item);
            var desTxt = new egret.TextField();
            desTxt.text = data.des + "";
            desTxt.anchorOffsetX = desTxt.width * 0.5;
            desTxt.x = 320;
            desTxt.y = 30;
            desTxt.textColor = 0x333333;
            desTxt.bold = true;
            item.addChild(desTxt);
            context.addChild(item);
            if (i != size - 1) {
                var line = new egret.Shape();
                line.graphics.lineStyle(2, 0xffdc65, 1);
                line.graphics.moveTo(0, 0);
                line.graphics.lineTo(357, 0);
                line.x = 30;
                line.y = 84;
                item.addChild(line);
            }
        }
        var scrollView = new egret.ScrollView();
        scrollView.width = 490;
        scrollView.height = 498;
        scrollView.setContent(context);
        scrollView.horizontalScrollPolicy = "off";
        scrollView.x = this.bg.x + 20;
        scrollView.y = this.bg.y + 100;
        this.addChild(scrollView);
        var closeBtn = new egret.Bitmap(RES.getRes("rankCloseBtn_png"));
        closeBtn.anchorOffsetX = closeBtn.width >> 1;
        closeBtn.anchorOffsetY = closeBtn.height >> 1;
        closeBtn.x = width >> 1;
        closeBtn.y = this.bg.y + 810;
        closeBtn.touchEnabled = true;
        this.addChild(closeBtn);
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            closeBtn.scaleX = closeBtn.scaleY = 0.9;
        }, this);
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            closeBtn.scaleX = closeBtn.scaleY = 1;
            this.parent.removeChild(this);
        }, this);
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            closeBtn.scaleX = closeBtn.scaleY = 1;
        }, this);
    };
    RankList.prototype.setSelfData = function (data) {
        var item = new egret.Sprite();
        item.graphics.beginFill(0xff0000, 0);
        item.graphics.drawRect(0, 0, 490, 70);
        item.graphics.endFill();
        var numTxt = new egret.TextField();
        numTxt.text = data.rank;
        numTxt.anchorOffsetX = numTxt.width * 0.5;
        numTxt.x = 40;
        numTxt.y = 23;
        numTxt.bold = true;
        numTxt.scaleX = 0.7;
        numTxt.size = 44;
        item.addChild(numTxt);
        numTxt.textColor = 0x666666;
        var head = new RoleHeadImage(data.head, "rankItemBG_s_png", 64, 64);
        head.x = 100;
        head.y = 10;
        item.addChild(head);
        var nameTxt = new egret.TextField();
        nameTxt.text = data.name;
        nameTxt.size = 18;
        nameTxt.x = 190;
        nameTxt.y = 34;
        nameTxt.textColor = 0x333333;
        item.addChild(nameTxt);
        var desTxt = new egret.TextField();
        desTxt.text = data.des;
        desTxt.anchorOffsetX = desTxt.width * 0.5;
        desTxt.x = 320;
        desTxt.y = 30;
        desTxt.textColor = 0x333333;
        desTxt.bold = true;
        item.addChild(desTxt);
        item.x = this.bg.x + 20;
        item.y = this.bg.y + 610;
        this.addChild(item);
    };
    return RankList;
}(egret.DisplayObjectContainer));
__reflect(RankList.prototype, "RankList");
