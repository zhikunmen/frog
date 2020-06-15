
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/assets/games/game_AnimalChess/skin/ButtonQipao.exml'] = window.ButtonQipao = (function (_super) {
	__extends(ButtonQipao, _super);
	var ButtonQipao$Skin1 = 	(function (_super) {
		__extends(ButtonQipao$Skin1, _super);
		function ButtonQipao$Skin1() {
			_super.call(this);
			this.skinParts = ["bg","img"];
			
			this.elementsContent = [this.bg_i(),this.img_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ButtonQipao$Skin1.prototype;

		_proto.bg_i = function () {
			var t = new eui.Image();
			this.bg = t;
			t.percentHeight = 100;
			t.scaleX = -1;
			t.source = "qipao_png";
			t.percentWidth = 100;
			t.x = 273;
			return t;
		};
		_proto.img_i = function () {
			var t = new eui.Image();
			this.img = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 5;
			return t;
		};
		return ButtonQipao$Skin1;
	})(eui.Skin);

	var ButtonQipao$Skin2 = 	(function (_super) {
		__extends(ButtonQipao$Skin2, _super);
		function ButtonQipao$Skin2() {
			_super.call(this);
			this.skinParts = ["bg","img"];
			
			this.elementsContent = [this.bg_i(),this.img_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ButtonQipao$Skin2.prototype;

		_proto.bg_i = function () {
			var t = new eui.Image();
			this.bg = t;
			t.percentHeight = 100;
			t.scaleX = -1;
			t.source = "qipao_png";
			t.percentWidth = 100;
			t.x = 173;
			return t;
		};
		_proto.img_i = function () {
			var t = new eui.Image();
			this.img = t;
			t.horizontalCenter = 10;
			t.source = "express1_1_png";
			t.verticalCenter = 5;
			return t;
		};
		return ButtonQipao$Skin2;
	})(eui.Skin);

	var ButtonQipao$Skin3 = 	(function (_super) {
		__extends(ButtonQipao$Skin3, _super);
		function ButtonQipao$Skin3() {
			_super.call(this);
			this.skinParts = ["bg","img"];
			
			this.elementsContent = [this.bg_i(),this.img_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ButtonQipao$Skin3.prototype;

		_proto.bg_i = function () {
			var t = new eui.Image();
			this.bg = t;
			t.percentHeight = 100;
			t.source = "qipao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_i = function () {
			var t = new eui.Image();
			this.img = t;
			t.horizontalCenter = 0;
			t.source = "express2_1_png";
			t.verticalCenter = 5;
			return t;
		};
		return ButtonQipao$Skin3;
	})(eui.Skin);

	function ButtonQipao() {
		_super.call(this);
		this.skinParts = ["btn_qipao2","btn_qipao3","btn_qipao","img_1","img_2"];
		
		this.elementsContent = [this.btn_qipao2_i(),this.btn_qipao3_i(),this.btn_qipao_i(),this.img_1_i(),this.img_2_i()];
	}
	var _proto = ButtonQipao.prototype;

	_proto.btn_qipao2_i = function () {
		var t = new eui.Button();
		this.btn_qipao2 = t;
		t.label = "Button";
		t.visible = false;
		t.x = 4;
		t.y = 0;
		t.skinName = ButtonQipao$Skin1;
		return t;
	};
	_proto.btn_qipao3_i = function () {
		var t = new eui.Button();
		this.btn_qipao3 = t;
		t.anchorOffsetX = 165;
		t.label = "Button";
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.width = 165;
		t.skinName = ButtonQipao$Skin2;
		return t;
	};
	_proto.btn_qipao_i = function () {
		var t = new eui.Button();
		this.btn_qipao = t;
		t.label = "Button";
		t.visible = false;
		t.x = 10;
		t.y = 0;
		t.skinName = ButtonQipao$Skin3;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.left = 0;
		t.source = "express4_9_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.right = 0;
		t.source = "express4_9_png";
		t.top = 0;
		t.visible = false;
		t.y = 10;
		return t;
	};
	return ButtonQipao;
})(eui.Skin);generateEUI.paths['resource/assets/games/game_AnimalChess/skin/GameAnimalChessGreet.exml'] = window.GameAnimalChessGreet = (function (_super) {
	__extends(GameAnimalChessGreet, _super);
	var GameAnimalChessGreet$Skin4 = 	(function (_super) {
		__extends(GameAnimalChessGreet$Skin4, _super);
		function GameAnimalChessGreet$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameAnimalChessGreet$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_greet_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "greet_2_png";
			t.verticalCenter = 0;
			return t;
		};
		return GameAnimalChessGreet$Skin4;
	})(eui.Skin);

	var GameAnimalChessGreet$Skin5 = 	(function (_super) {
		__extends(GameAnimalChessGreet$Skin5, _super);
		function GameAnimalChessGreet$Skin5() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameAnimalChessGreet$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_greet_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "greet_3_png";
			t.verticalCenter = 0;
			return t;
		};
		return GameAnimalChessGreet$Skin5;
	})(eui.Skin);

	var GameAnimalChessGreet$Skin6 = 	(function (_super) {
		__extends(GameAnimalChessGreet$Skin6, _super);
		function GameAnimalChessGreet$Skin6() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameAnimalChessGreet$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_greet_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "greet_4_png";
			t.verticalCenter = 0;
			return t;
		};
		return GameAnimalChessGreet$Skin6;
	})(eui.Skin);

	function GameAnimalChessGreet() {
		_super.call(this);
		this.skinParts = ["btn_greet1","btn_greet2","btn_greet3","btn_greet0","gp_greet"];
		
		this.height = 305;
		this.width = 615;
		this.elementsContent = [this.gp_greet_i()];
	}
	var _proto = GameAnimalChessGreet.prototype;

	_proto.gp_greet_i = function () {
		var t = new eui.Group();
		this.gp_greet = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 305;
		t.width = 615;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.btn_greet1_i(),this.btn_greet2_i(),this.btn_greet3_i(),this.btn_greet0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_greet_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_greet1_i = function () {
		var t = new AnimationButton();
		this.btn_greet1 = t;
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 54;
		t.label = "";
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 460;
		t.y = 116;
		t.skinName = GameAnimalChessGreet$Skin4;
		return t;
	};
	_proto.btn_greet2_i = function () {
		var t = new AnimationButton();
		this.btn_greet2 = t;
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 54;
		t.label = "";
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 155;
		t.y = 235;
		t.skinName = GameAnimalChessGreet$Skin5;
		return t;
	};
	_proto.btn_greet3_i = function () {
		var t = new AnimationButton();
		this.btn_greet3 = t;
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 54;
		t.label = "";
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 460;
		t.y = 235;
		t.skinName = GameAnimalChessGreet$Skin6;
		return t;
	};
	_proto.btn_greet0_i = function () {
		var t = new eui.Image();
		this.btn_greet0 = t;
		t.source = "quickMatchGreetBg1_png";
		t.x = 17;
		t.y = 62;
		return t;
	};
	return GameAnimalChessGreet;
})(eui.Skin);generateEUI.paths['resource/assets/games/game_AnimalChess/skin/GameAnimalChessReceiveDrawn.exml'] = window.GameAnimalChessReceiveDrawn = (function (_super) {
	__extends(GameAnimalChessReceiveDrawn, _super);
	var GameAnimalChessReceiveDrawn$Skin7 = 	(function (_super) {
		__extends(GameAnimalChessReceiveDrawn$Skin7, _super);
		function GameAnimalChessReceiveDrawn$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","drawnRefuse_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameAnimalChessReceiveDrawn$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "drawnRefuse_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 5;
			t.verticalCenter = -4;
			return t;
		};
		return GameAnimalChessReceiveDrawn$Skin7;
	})(eui.Skin);

	var GameAnimalChessReceiveDrawn$Skin8 = 	(function (_super) {
		__extends(GameAnimalChessReceiveDrawn$Skin8, _super);
		function GameAnimalChessReceiveDrawn$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","drawnAgree_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameAnimalChessReceiveDrawn$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "drawnAgree_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 5;
			t.verticalCenter = -3;
			return t;
		};
		return GameAnimalChessReceiveDrawn$Skin8;
	})(eui.Skin);

	function GameAnimalChessReceiveDrawn() {
		_super.call(this);
		this.skinParts = ["btn_refuse","btn_agree","DrawnGroup","drawnRefuseAnswer","waitDrawnAnswer","drawnLogo","chijiLogo","failureLogo"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.DrawnGroup_i(),this.drawnRefuseAnswer_i(),this.waitDrawnAnswer_i(),this.drawnLogo_i(),this.chijiLogo_i(),this.failureLogo_i()];
	}
	var _proto = GameAnimalChessReceiveDrawn.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.DrawnGroup_i = function () {
		var t = new eui.Group();
		this.DrawnGroup = t;
		t.anchorOffsetX = 221;
		t.anchorOffsetY = 130.5;
		t.height = 261;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 442;
		t.elementsContent = [this._Image1_i(),this.btn_refuse_i(),this.btn_agree_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.height = 261;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "drawnBg_png";
		t.width = 442;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_refuse_i = function () {
		var t = new AnimationButton();
		this.btn_refuse = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.bottom = 30;
		t.label = "拒绝5s";
		t.left = 24;
		t.skinName = GameAnimalChessReceiveDrawn$Skin7;
		return t;
	};
	_proto.btn_agree_i = function () {
		var t = new AnimationButton();
		this.btn_agree = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.label = "同意";
		t.x = 327;
		t.y = 196;
		t.skinName = GameAnimalChessReceiveDrawn$Skin8;
		return t;
	};
	_proto.drawnRefuseAnswer_i = function () {
		var t = new eui.Image();
		this.drawnRefuseAnswer = t;
		t.horizontalCenter = 0;
		t.source = "drawnRefuseAnswer_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.waitDrawnAnswer_i = function () {
		var t = new eui.Image();
		this.waitDrawnAnswer = t;
		t.horizontalCenter = 0;
		t.source = "waitDrawnAnswer_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.drawnLogo_i = function () {
		var t = new eui.Image();
		this.drawnLogo = t;
		t.anchorOffsetX = 242.5;
		t.anchorOffsetY = 141;
		t.source = "last_drawn_png";
		t.visible = false;
		t.x = 320.5;
		t.y = 568;
		return t;
	};
	_proto.chijiLogo_i = function () {
		var t = new eui.Image();
		this.chijiLogo = t;
		t.anchorOffsetX = 280.5;
		t.anchorOffsetY = 292;
		t.source = "last_chiji_png";
		t.visible = false;
		t.x = 320.5;
		t.y = 568;
		return t;
	};
	_proto.failureLogo_i = function () {
		var t = new eui.Image();
		this.failureLogo = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 196.5;
		t.source = "last_failure_png";
		t.visible = false;
		t.x = 141;
		t.y = 589.5;
		return t;
	};
	return GameAnimalChessReceiveDrawn;
})(eui.Skin);generateEUI.paths['resource/assets/games/game_AnimalChess/skin/GameExpressSkin.exml'] = window.GameExpressSkin = (function (_super) {
	__extends(GameExpressSkin, _super);
	function GameExpressSkin() {
		_super.call(this);
		this.skinParts = ["lb_bg","img_bg","list","Scroller1","pot_1","pot_2","pot_3","gp_pot","gp_express","gp_bg"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.gp_bg_i()];
	}
	var _proto = GameExpressSkin.prototype;

	_proto.gp_bg_i = function () {
		var t = new eui.Group();
		this.gp_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.lb_bg_i(),this.gp_express_i()];
		return t;
	};
	_proto.lb_bg_i = function () {
		var t = new eui.Label();
		this.lb_bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "";
		t.top = 0;
		return t;
	};
	_proto.gp_express_i = function () {
		var t = new eui.Group();
		this.gp_express = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 136;
		t.height = 314.85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.elementsContent = [this.img_bg_i(),this.Scroller1_i(),this.gp_pot_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "express_kuang2_png";
		t.width = 606;
		return t;
	};
	_proto.Scroller1_i = function () {
		var t = new eui.Scroller();
		this.Scroller1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 42;
		t.height = 228;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 606;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 228;
		t.itemRendererSkinName = ItemExpressTipskin;
		t.width = 606;
		t.x = 0;
		t.y = -1.52;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.gp_pot_i = function () {
		var t = new eui.Group();
		this.gp_pot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 8;
		t.height = 18.58;
		t.horizontalCenter = 0;
		t.width = 118.61;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.pot_1_i(),this.pot_2_i(),this.pot_3_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 16;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.pot_1_i = function () {
		var t = new eui.Image();
		this.pot_1 = t;
		t.alpha = 1;
		t.source = "pot_write_png";
		t.x = 32;
		t.y = 15;
		return t;
	};
	_proto.pot_2_i = function () {
		var t = new eui.Image();
		this.pot_2 = t;
		t.alpha = 0.4;
		t.source = "pot_write_png";
		t.x = 42;
		t.y = 25;
		return t;
	};
	_proto.pot_3_i = function () {
		var t = new eui.Image();
		this.pot_3 = t;
		t.alpha = 0.4;
		t.source = "pot_write_png";
		t.x = 52;
		t.y = 35;
		return t;
	};
	return GameExpressSkin;
})(eui.Skin);generateEUI.paths['resource/assets/games/game_AnimalChess/skin/ItemExpressTip.exml'] = window.ItemExpressTipskin = (function (_super) {
	__extends(ItemExpressTipskin, _super);
	var ItemExpressTipskin$Skin9 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin9, _super);
		function ItemExpressTipskin$Skin9() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin9;
	})(eui.Skin);

	var ItemExpressTipskin$Skin10 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin10, _super);
		function ItemExpressTipskin$Skin10() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin10;
	})(eui.Skin);

	var ItemExpressTipskin$Skin11 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin11, _super);
		function ItemExpressTipskin$Skin11() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin11;
	})(eui.Skin);

	var ItemExpressTipskin$Skin12 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin12, _super);
		function ItemExpressTipskin$Skin12() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin12;
	})(eui.Skin);

	var ItemExpressTipskin$Skin13 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin13, _super);
		function ItemExpressTipskin$Skin13() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin13;
	})(eui.Skin);

	var ItemExpressTipskin$Skin14 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin14, _super);
		function ItemExpressTipskin$Skin14() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin14;
	})(eui.Skin);

	var ItemExpressTipskin$Skin15 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin15, _super);
		function ItemExpressTipskin$Skin15() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin15;
	})(eui.Skin);

	var ItemExpressTipskin$Skin16 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin16, _super);
		function ItemExpressTipskin$Skin16() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin16;
	})(eui.Skin);

	var ItemExpressTipskin$Skin17 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin17, _super);
		function ItemExpressTipskin$Skin17() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin17;
	})(eui.Skin);

	var ItemExpressTipskin$Skin18 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin18, _super);
		function ItemExpressTipskin$Skin18() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express1_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin18;
	})(eui.Skin);

	var ItemExpressTipskin$Skin19 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin19, _super);
		function ItemExpressTipskin$Skin19() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin19;
	})(eui.Skin);

	var ItemExpressTipskin$Skin20 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin20, _super);
		function ItemExpressTipskin$Skin20() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin20;
	})(eui.Skin);

	var ItemExpressTipskin$Skin21 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin21, _super);
		function ItemExpressTipskin$Skin21() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin21;
	})(eui.Skin);

	var ItemExpressTipskin$Skin22 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin22, _super);
		function ItemExpressTipskin$Skin22() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin22;
	})(eui.Skin);

	var ItemExpressTipskin$Skin23 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin23, _super);
		function ItemExpressTipskin$Skin23() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin23;
	})(eui.Skin);

	var ItemExpressTipskin$Skin24 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin24, _super);
		function ItemExpressTipskin$Skin24() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin24;
	})(eui.Skin);

	var ItemExpressTipskin$Skin25 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin25, _super);
		function ItemExpressTipskin$Skin25() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin25;
	})(eui.Skin);

	var ItemExpressTipskin$Skin26 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin26, _super);
		function ItemExpressTipskin$Skin26() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin26;
	})(eui.Skin);

	var ItemExpressTipskin$Skin27 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin27, _super);
		function ItemExpressTipskin$Skin27() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin27;
	})(eui.Skin);

	var ItemExpressTipskin$Skin28 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin28, _super);
		function ItemExpressTipskin$Skin28() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg3_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express4_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin28;
	})(eui.Skin);

	var ItemExpressTipskin$Skin29 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin29, _super);
		function ItemExpressTipskin$Skin29() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg4_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express5_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin29;
	})(eui.Skin);

	var ItemExpressTipskin$Skin30 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin30, _super);
		function ItemExpressTipskin$Skin30() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg4_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express5_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin30;
	})(eui.Skin);

	var ItemExpressTipskin$Skin31 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin31, _super);
		function ItemExpressTipskin$Skin31() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg4_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express5_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin31;
	})(eui.Skin);

	var ItemExpressTipskin$Skin32 = 	(function (_super) {
		__extends(ItemExpressTipskin$Skin32, _super);
		function ItemExpressTipskin$Skin32() {
			_super.call(this);
			this.skinParts = ["img_express"];
			
			this.elementsContent = [this._Image1_i(),this.img_express_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ItemExpressTipskin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "express_bg4_png_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.img_express_i = function () {
			var t = new eui.Image();
			this.img_express = t;
			t.horizontalCenter = 0;
			t.source = "express5_1_png";
			t.verticalCenter = 0;
			return t;
		};
		return ItemExpressTipskin$Skin32;
	})(eui.Skin);

	function ItemExpressTipskin() {
		_super.call(this);
		this.skinParts = ["btn_1","btn_2","btn_3","btn_4","btn_5","btn_6","gp_2","btn_7","btn_8","btn_9","btn_10","gp_1","btn_11","btn_12","btn_13","btn_14","btn_15","btn_16","btn_17","btn_18","btn_19","btn_20","gp_3","btn_21","btn_22","btn_23","btn_24","gp_4"];
		
		this.height = 228;
		this.width = 606;
		this.elementsContent = [this.gp_2_i(),this.gp_1_i(),this.gp_3_i(),this.gp_4_i()];
	}
	var _proto = ItemExpressTipskin.prototype;

	_proto.gp_2_i = function () {
		var t = new eui.Group();
		this.gp_2 = t;
		t.height = 130;
		t.visible = false;
		t.width = 606;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.btn_1_i(),this.btn_2_i(),this.btn_3_i(),this.btn_4_i(),this.btn_5_i(),this.btn_6_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 26;
		t.paddingLeft = 35;
		t.paddingTop = 5;
		t.verticalAlign = "contentJustify";
		t.verticalGap = 8;
		return t;
	};
	_proto.btn_1_i = function () {
		var t = new eui.Button();
		this.btn_1 = t;
		t.label = "Button";
		t.name = "1";
		t.x = 97;
		t.skinName = ItemExpressTipskin$Skin9;
		return t;
	};
	_proto.btn_2_i = function () {
		var t = new eui.Button();
		this.btn_2 = t;
		t.label = "Button";
		t.name = "2";
		t.x = 107;
		t.y = 7.67;
		t.skinName = ItemExpressTipskin$Skin10;
		return t;
	};
	_proto.btn_3_i = function () {
		var t = new eui.Button();
		this.btn_3 = t;
		t.label = "Button";
		t.name = "3";
		t.x = 107;
		t.skinName = ItemExpressTipskin$Skin11;
		return t;
	};
	_proto.btn_4_i = function () {
		var t = new eui.Button();
		this.btn_4 = t;
		t.label = "Button";
		t.name = "4";
		t.x = 117;
		t.y = 10;
		t.skinName = ItemExpressTipskin$Skin12;
		return t;
	};
	_proto.btn_5_i = function () {
		var t = new eui.Button();
		this.btn_5 = t;
		t.label = "Button";
		t.name = "5";
		t.x = 117;
		t.skinName = ItemExpressTipskin$Skin13;
		return t;
	};
	_proto.btn_6_i = function () {
		var t = new eui.Button();
		this.btn_6 = t;
		t.label = "Button";
		t.name = "6";
		t.x = 127;
		t.y = 10;
		t.skinName = ItemExpressTipskin$Skin14;
		return t;
	};
	_proto.gp_1_i = function () {
		var t = new eui.Group();
		this.gp_1 = t;
		t.height = 130;
		t.visible = false;
		t.width = 606;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout2_i();
		t.elementsContent = [this.btn_7_i(),this.btn_8_i(),this.btn_9_i(),this.btn_10_i()];
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 26;
		t.paddingLeft = 30;
		t.paddingTop = 5;
		t.verticalAlign = "contentJustify";
		t.verticalGap = 8;
		return t;
	};
	_proto.btn_7_i = function () {
		var t = new eui.Button();
		this.btn_7 = t;
		t.label = "Button";
		t.name = "1";
		t.x = 107;
		t.y = 10;
		t.skinName = ItemExpressTipskin$Skin15;
		return t;
	};
	_proto.btn_8_i = function () {
		var t = new eui.Button();
		this.btn_8 = t;
		t.label = "Button";
		t.name = "2";
		t.x = 107;
		t.skinName = ItemExpressTipskin$Skin16;
		return t;
	};
	_proto.btn_9_i = function () {
		var t = new eui.Button();
		this.btn_9 = t;
		t.label = "Button";
		t.name = "3";
		t.x = 117;
		t.y = 10;
		t.skinName = ItemExpressTipskin$Skin17;
		return t;
	};
	_proto.btn_10_i = function () {
		var t = new eui.Button();
		this.btn_10 = t;
		t.label = "Button";
		t.name = "4";
		t.x = 117;
		t.skinName = ItemExpressTipskin$Skin18;
		return t;
	};
	_proto.gp_3_i = function () {
		var t = new eui.Group();
		this.gp_3 = t;
		t.anchorOffsetY = 0;
		t.height = 216;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 606;
		t.y = 0;
		t.layout = this._TileLayout3_i();
		t.elementsContent = [this.btn_11_i(),this.btn_12_i(),this.btn_13_i(),this.btn_14_i(),this.btn_15_i(),this.btn_16_i(),this.btn_17_i(),this.btn_18_i(),this.btn_19_i(),this.btn_20_i()];
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 16;
		t.paddingLeft = 31;
		t.paddingTop = 12;
		t.requestedColumnCount = 5;
		t.requestedRowCount = 2;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.btn_11_i = function () {
		var t = new eui.Button();
		this.btn_11 = t;
		t.label = "Button";
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 57;
		t.y = 20;
		t.skinName = ItemExpressTipskin$Skin19;
		return t;
	};
	_proto.btn_12_i = function () {
		var t = new eui.Button();
		this.btn_12 = t;
		t.label = "Button";
		t.name = "2";
		t.x = 67;
		t.y = 13;
		t.skinName = ItemExpressTipskin$Skin20;
		return t;
	};
	_proto.btn_13_i = function () {
		var t = new eui.Button();
		this.btn_13 = t;
		t.label = "Button";
		t.name = "3";
		t.x = 77;
		t.y = 40;
		t.skinName = ItemExpressTipskin$Skin21;
		return t;
	};
	_proto.btn_14_i = function () {
		var t = new eui.Button();
		this.btn_14 = t;
		t.label = "Button";
		t.name = "4";
		t.x = 87;
		t.y = 50;
		t.skinName = ItemExpressTipskin$Skin22;
		return t;
	};
	_proto.btn_15_i = function () {
		var t = new eui.Button();
		this.btn_15 = t;
		t.label = "Button";
		t.name = "5";
		t.x = 97;
		t.y = 60;
		t.skinName = ItemExpressTipskin$Skin23;
		return t;
	};
	_proto.btn_16_i = function () {
		var t = new eui.Button();
		this.btn_16 = t;
		t.label = "Button";
		t.name = "6";
		t.x = 107;
		t.y = 70;
		t.skinName = ItemExpressTipskin$Skin24;
		return t;
	};
	_proto.btn_17_i = function () {
		var t = new eui.Button();
		this.btn_17 = t;
		t.label = "Button";
		t.name = "7";
		t.x = 117;
		t.y = 80;
		t.skinName = ItemExpressTipskin$Skin25;
		return t;
	};
	_proto.btn_18_i = function () {
		var t = new eui.Button();
		this.btn_18 = t;
		t.label = "Button";
		t.name = "8";
		t.x = 127;
		t.y = 90;
		t.skinName = ItemExpressTipskin$Skin26;
		return t;
	};
	_proto.btn_19_i = function () {
		var t = new eui.Button();
		this.btn_19 = t;
		t.label = "Button";
		t.name = "9";
		t.x = 137;
		t.y = 100;
		t.skinName = ItemExpressTipskin$Skin27;
		return t;
	};
	_proto.btn_20_i = function () {
		var t = new eui.Button();
		this.btn_20 = t;
		t.label = "Button";
		t.name = "10";
		t.x = 147;
		t.y = 110;
		t.skinName = ItemExpressTipskin$Skin28;
		return t;
	};
	_proto.gp_4_i = function () {
		var t = new eui.Group();
		this.gp_4 = t;
		t.height = 228;
		t.visible = false;
		t.width = 606;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout4_i();
		t.elementsContent = [this.btn_21_i(),this.btn_22_i(),this.btn_23_i(),this.btn_24_i()];
		return t;
	};
	_proto._TileLayout4_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 16;
		t.paddingLeft = 31;
		t.paddingTop = 8;
		t.requestedRowCount = 2;
		t.verticalGap = 12;
		return t;
	};
	_proto.btn_21_i = function () {
		var t = new eui.Button();
		this.btn_21 = t;
		t.label = "Button";
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 147;
		t.y = 110;
		t.skinName = ItemExpressTipskin$Skin29;
		return t;
	};
	_proto.btn_22_i = function () {
		var t = new eui.Button();
		this.btn_22 = t;
		t.label = "Button";
		t.name = "2";
		t.x = 167;
		t.y = 130;
		t.skinName = ItemExpressTipskin$Skin30;
		return t;
	};
	_proto.btn_23_i = function () {
		var t = new eui.Button();
		this.btn_23 = t;
		t.label = "Button";
		t.name = "3";
		t.x = 177;
		t.y = 140;
		t.skinName = ItemExpressTipskin$Skin31;
		return t;
	};
	_proto.btn_24_i = function () {
		var t = new eui.Button();
		this.btn_24 = t;
		t.label = "Button";
		t.name = "4";
		t.x = 157;
		t.y = 120;
		t.skinName = ItemExpressTipskin$Skin32;
		return t;
	};
	return ItemExpressTipskin;
})(eui.Skin);generateEUI.paths['resource/skins/gameCenter/GameChangeMatchSkin.exml'] = window.GameChangeMatchSkin = (function (_super) {
	__extends(GameChangeMatchSkin, _super);
	var GameChangeMatchSkin$Skin33 = 	(function (_super) {
		__extends(GameChangeMatchSkin$Skin33, _super);
		function GameChangeMatchSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameChangeMatchSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_pipei_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameChangeMatchSkin$Skin33;
	})(eui.Skin);

	var GameChangeMatchSkin$Skin34 = 	(function (_super) {
		__extends(GameChangeMatchSkin$Skin34, _super);
		function GameChangeMatchSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameChangeMatchSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "img_invate_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameChangeMatchSkin$Skin34;
	})(eui.Skin);

	var GameChangeMatchSkin$Skin35 = 	(function (_super) {
		__extends(GameChangeMatchSkin$Skin35, _super);
		function GameChangeMatchSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameChangeMatchSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "goBack_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameChangeMatchSkin$Skin35;
	})(eui.Skin);

	function GameChangeMatchSkin() {
		_super.call(this);
		this.skinParts = ["img_icon","img_help","lb_numOnLine","gameItemGroup","startMatchBtn","inviteFriendBtn","goBackBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.gameItemGroup_i(),this.startMatchBtn_i(),this.inviteFriendBtn_i(),this.goBackBtn_i()];
	}
	var _proto = GameChangeMatchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_bg1_jpg";
		t.top = 0;
		return t;
	};
	_proto.gameItemGroup_i = function () {
		var t = new eui.Group();
		this.gameItemGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -120;
		t.elementsContent = [this._Image2_i(),this.img_icon_i(),this.img_help_i(),this.lb_numOnLine_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bg_item_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_game1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_help_i = function () {
		var t = new eui.Image();
		this.img_help = t;
		t.source = "img_help_png";
		t.visible = false;
		t.x = 458;
		t.y = 305;
		return t;
	};
	_proto.lb_numOnLine_i = function () {
		var t = new eui.Label();
		this.lb_numOnLine = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 42;
		t.size = 32;
		t.text = "123456对在玩";
		t.textAlign = "center";
		t.textColor = 0x635e5e;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 270;
		t.x = 128;
		t.y = 443;
		return t;
	};
	_proto.startMatchBtn_i = function () {
		var t = new AnimationButton();
		this.startMatchBtn = t;
		t.anchorOffsetX = 181;
		t.anchorOffsetY = 44.5;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 230;
		t.skinName = GameChangeMatchSkin$Skin33;
		return t;
	};
	_proto.inviteFriendBtn_i = function () {
		var t = new AnimationButton();
		this.inviteFriendBtn = t;
		t.anchorOffsetX = 181;
		t.anchorOffsetY = 44.5;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 340;
		t.skinName = GameChangeMatchSkin$Skin34;
		return t;
	};
	_proto.goBackBtn_i = function () {
		var t = new AnimationButton();
		this.goBackBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 32;
		t.enabled = false;
		t.label = "";
		t.left = 0;
		t.top = 20;
		t.visible = false;
		t.skinName = GameChangeMatchSkin$Skin35;
		return t;
	};
	return GameChangeMatchSkin;
})(eui.Skin);generateEUI.paths['resource/skins/gameCenter/GameExplainSkin.exml'] = window.GameExplainSkin = (function (_super) {
	__extends(GameExplainSkin, _super);
	function GameExplainSkin() {
		_super.call(this);
		this.skinParts = ["img_game"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.img_game_i()];
	}
	var _proto = GameExplainSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.img_game_i = function () {
		var t = new eui.Image();
		this.img_game = t;
		t.anchorOffsetX = 270;
		t.anchorOffsetY = 433;
		t.horizontalCenter = 0;
		t.source = "explain_game1_png";
		t.verticalCenter = 0;
		return t;
	};
	return GameExplainSkin;
})(eui.Skin);generateEUI.paths['resource/skins/gameCenter/GameGiveUp.exml'] = window.GameGiveUp = (function (_super) {
	__extends(GameGiveUp, _super);
	var GameGiveUp$Skin36 = 	(function (_super) {
		__extends(GameGiveUp$Skin36, _super);
		function GameGiveUp$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_cancel1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameGiveUp$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_cancel1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameGiveUp$Skin36;
	})(eui.Skin);

	var GameGiveUp$Skin37 = 	(function (_super) {
		__extends(GameGiveUp$Skin37, _super);
		function GameGiveUp$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_sure_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameGiveUp$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_sure_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameGiveUp$Skin37;
	})(eui.Skin);

	function GameGiveUp() {
		_super.call(this);
		this.skinParts = ["btn_cancel","btn_sure","GiveUpGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.GiveUpGroup_i()];
	}
	var _proto = GameGiveUp.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.GiveUpGroup_i = function () {
		var t = new eui.Group();
		this.GiveUpGroup = t;
		t.anchorOffsetX = 221;
		t.anchorOffsetY = 130.5;
		t.height = 261;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 442;
		t.elementsContent = [this._Image1_i(),this.btn_cancel_i(),this.btn_sure_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.height = 261;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "giveUpBG_png";
		t.width = 442;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_cancel_i = function () {
		var t = new AnimationButton();
		this.btn_cancel = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.label = "";
		t.x = 120;
		t.y = 172;
		t.skinName = GameGiveUp$Skin36;
		return t;
	};
	_proto.btn_sure_i = function () {
		var t = new AnimationButton();
		this.btn_sure = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.label = "";
		t.x = 322;
		t.y = 172;
		t.skinName = GameGiveUp$Skin37;
		return t;
	};
	return GameGiveUp;
})(eui.Skin);generateEUI.paths['resource/skins/gameCenter/GamePopSkin.exml'] = window.GamePopSkin = (function (_super) {
	__extends(GamePopSkin, _super);
	var GamePopSkin$Skin38 = 	(function (_super) {
		__extends(GamePopSkin$Skin38, _super);
		function GamePopSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pop_btn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePopSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pop_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePopSkin$Skin38;
	})(eui.Skin);

	function GamePopSkin() {
		_super.call(this);
		this.skinParts = ["btn_sure","lbl_msg"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GamePopSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 261;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 442;
		t.elementsContent = [this._Image1_i(),this.btn_sure_i(),this.lbl_msg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pop_bg_png";
		t.verticalCenter = 0;
		t.x = 444;
		t.y = -307.00000000000006;
		return t;
	};
	_proto.btn_sure_i = function () {
		var t = new AnimationButton();
		this.btn_sure = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.label = "";
		t.x = 217.09;
		t.y = 220;
		t.skinName = GamePopSkin$Skin38;
		return t;
	};
	_proto.lbl_msg_i = function () {
		var t = new eui.Label();
		this.lbl_msg = t;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x646fb9;
		t.verticalAlign = "middle";
		t.width = 400;
		t.x = 19;
		t.y = 28;
		return t;
	};
	return GamePopSkin;
})(eui.Skin);generateEUI.paths['resource/skins/gameCenter/GameQuickMatchSkin.exml'] = window.GameQuickMatchSkin = (function (_super) {
	__extends(GameQuickMatchSkin, _super);
	var GameQuickMatchSkin$Skin39 = 	(function (_super) {
		__extends(GameQuickMatchSkin$Skin39, _super);
		function GameQuickMatchSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_cancel_disabled_png")
					])
			];
		}
		var _proto = GameQuickMatchSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_cancel_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameQuickMatchSkin$Skin39;
	})(eui.Skin);

	function GameQuickMatchSkin() {
		_super.call(this);
		this.skinParts = ["gp_bg","bgGroup","matchSmallBg","user1VipImg","user1SexImg","user1NameLab","load1_bg","load1","lb_persentage1","load1Group","user1","greetMyImg","user1Group","searchCircle3","searchCircle2","searchCircle1","playerMatchingDbGroup","img_time","lb_time","lb_watingFriend","searchGroup","enterMatchTwGroup","user2VipImg","user2SexImg","user2NameLab","load2_bg","load2","lb_persentage2","load2Group","user2","greetOtherImg","searchSuccessGroup","img_flash","img_v","img_s","gp_vs","cancelMatchBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bgGroup_i(),this.enterMatchTwGroup_i(),this.searchSuccessGroup_i(),this.gp_vs_i(),this.cancelMatchBtn_i()];
	}
	var _proto = GameQuickMatchSkin.prototype;

	_proto.bgGroup_i = function () {
		var t = new eui.Group();
		this.bgGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.gp_bg_i()];
		return t;
	};
	_proto.gp_bg_i = function () {
		var t = new eui.Group();
		this.gp_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.enterMatchTwGroup_i = function () {
		var t = new eui.Group();
		this.enterMatchTwGroup = t;
		t.anchorOffsetX = 307;
		t.anchorOffsetY = 325;
		t.height = 650;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 614;
		t.elementsContent = [this.matchSmallBg_i(),this.user1Group_i(),this.searchGroup_i()];
		return t;
	};
	_proto.matchSmallBg_i = function () {
		var t = new eui.Image();
		this.matchSmallBg = t;
		t.height = 650;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grayBg_png";
		t.verticalCenter = 0;
		t.width = 614;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.user1Group_i = function () {
		var t = new eui.Group();
		this.user1Group = t;
		t.height = 282;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 160;
		t.width = 568;
		t.x = 23;
		t.y = 344;
		t.elementsContent = [this._Image1_i(),this.user1VipImg_i(),this.user1SexImg_i(),this.user1NameLab_i(),this.load1Group_i(),this.user1_i(),this.greetMyImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nameBg_png";
		t.top = 0;
		return t;
	};
	_proto.user1VipImg_i = function () {
		var t = new eui.Image();
		this.user1VipImg = t;
		t.horizontalCenter = 0;
		t.source = "yelloBg_png";
		t.top = 42;
		return t;
	};
	_proto.user1SexImg_i = function () {
		var t = new eui.Image();
		this.user1SexImg = t;
		t.left = 18;
		t.source = "img_boy_png";
		t.top = 9;
		return t;
	};
	_proto.user1NameLab_i = function () {
		var t = new eui.Label();
		this.user1NameLab = t;
		t.fontFamily = "Arial";
		t.left = 52;
		t.size = 26;
		t.text = "asdb";
		t.textAlign = "left";
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.load1Group_i = function () {
		var t = new eui.Group();
		this.load1Group = t;
		t.left = 0;
		t.right = 0;
		t.top = 42;
		t.elementsContent = [this.load1_bg_i(),this.load1_i(),this.lb_persentage1_i()];
		return t;
	};
	_proto.load1_bg_i = function () {
		var t = new eui.Image();
		this.load1_bg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "load2_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.load1_i = function () {
		var t = new eui.Image();
		this.load1 = t;
		t.height = 15.6;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "load1_png";
		t.top = 1;
		t.visible = false;
		t.width = 300;
		return t;
	};
	_proto.lb_persentage1_i = function () {
		var t = new eui.Label();
		this.lb_persentage1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 16;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0%";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = -1;
		t.verticalAlign = "top";
		t.visible = false;
		t.width = 138;
		return t;
	};
	_proto.user1_i = function () {
		var t = new eui.Group();
		this.user1 = t;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 66;
		t.width = 200;
		return t;
	};
	_proto.greetMyImg_i = function () {
		var t = new eui.Image();
		this.greetMyImg = t;
		t.left = 324;
		t.source = "";
		t.top = 104;
		return t;
	};
	_proto.searchGroup_i = function () {
		var t = new eui.Group();
		this.searchGroup = t;
		t.anchorOffsetX = 284;
		t.anchorOffsetY = 141;
		t.height = 282;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -160;
		t.width = 568;
		t.x = 23;
		t.y = 24;
		t.elementsContent = [this._Image2_i(),this.searchCircle3_i(),this.searchCircle2_i(),this.searchCircle1_i(),this.playerMatchingDbGroup_i(),this.img_time_i(),this.lb_time_i(),this.lb_watingFriend_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "playerBg_png";
		t.top = -2;
		return t;
	};
	_proto.searchCircle3_i = function () {
		var t = new eui.Image();
		this.searchCircle3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "halfCircle_png";
		t.top = 0;
		t.width = 154;
		return t;
	};
	_proto.searchCircle2_i = function () {
		var t = new eui.Image();
		this.searchCircle2 = t;
		t.height = 77;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "halfCircle_png";
		t.top = 0;
		t.width = 154;
		return t;
	};
	_proto.searchCircle1_i = function () {
		var t = new eui.Image();
		this.searchCircle1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "halfCircle_png";
		t.top = 0;
		t.width = 154;
		return t;
	};
	_proto.playerMatchingDbGroup_i = function () {
		var t = new eui.Group();
		this.playerMatchingDbGroup = t;
		t.horizontalCenter = 0;
		t.top = 144;
		return t;
	};
	_proto.img_time_i = function () {
		var t = new eui.Image();
		this.img_time = t;
		t.horizontalCenter = 0;
		t.source = "timeBg_png";
		t.top = -77;
		return t;
	};
	_proto.lb_time_i = function () {
		var t = new eui.Label();
		this.lb_time = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "8";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = -25;
		t.verticalAlign = "middle";
		t.x = 286;
		return t;
	};
	_proto.lb_watingFriend_i = function () {
		var t = new eui.Label();
		this.lb_watingFriend = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "等待好友加入...";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 286;
		return t;
	};
	_proto.searchSuccessGroup_i = function () {
		var t = new eui.Group();
		this.searchSuccessGroup = t;
		t.anchorOffsetY = 141;
		t.height = 282;
		t.width = 568;
		t.x = 36;
		t.y = -160;
		t.elementsContent = [this._Image3_i(),this.user2VipImg_i(),this.user2SexImg_i(),this.user2NameLab_i(),this.load2Group_i(),this.user2_i(),this.greetOtherImg_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nameBg_png";
		t.top = 0;
		return t;
	};
	_proto.user2VipImg_i = function () {
		var t = new eui.Image();
		this.user2VipImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yelloBg_png";
		t.top = 42;
		t.x = 36;
		t.y = 50;
		return t;
	};
	_proto.user2SexImg_i = function () {
		var t = new eui.Image();
		this.user2SexImg = t;
		t.anchorOffsetX = 12;
		t.anchorOffsetY = 12;
		t.left = 18;
		t.source = "img_gril_png";
		t.top = 9;
		return t;
	};
	_proto.user2NameLab_i = function () {
		var t = new eui.Label();
		this.user2NameLab = t;
		t.fontFamily = "Arial";
		t.left = 52;
		t.size = 26;
		t.text = "username";
		t.textAlign = "left";
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.load2Group_i = function () {
		var t = new eui.Group();
		this.load2Group = t;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 42;
		t.elementsContent = [this.load2_bg_i(),this.load2_i(),this.lb_persentage2_i()];
		return t;
	};
	_proto.load2_bg_i = function () {
		var t = new eui.Image();
		this.load2_bg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "load2_png";
		t.top = 0;
		t.visible = false;
		t.x = 36;
		return t;
	};
	_proto.load2_i = function () {
		var t = new eui.Image();
		this.load2 = t;
		t.height = 15.6;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "load1_png";
		t.top = 1;
		t.visible = false;
		t.width = 0;
		return t;
	};
	_proto.lb_persentage2_i = function () {
		var t = new eui.Label();
		this.lb_persentage2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 16;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0%";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 0;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 138;
		t.x = 251;
		return t;
	};
	_proto.user2_i = function () {
		var t = new eui.Group();
		this.user2 = t;
		t.alpha = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 66;
		t.width = 200;
		return t;
	};
	_proto.greetOtherImg_i = function () {
		var t = new eui.Image();
		this.greetOtherImg = t;
		t.left = 324;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 104;
		t.x = 324;
		return t;
	};
	_proto.gp_vs_i = function () {
		var t = new eui.Group();
		this.gp_vs = t;
		t.height = 1136;
		t.left = 0;
		t.right = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.elementsContent = [this.img_flash_i(),this.img_v_i(),this.img_s_i()];
		return t;
	};
	_proto.img_flash_i = function () {
		var t = new eui.Image();
		this.img_flash = t;
		t.anchorOffsetX = 56.5;
		t.anchorOffsetY = 94;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "flash_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_v_i = function () {
		var t = new eui.Image();
		this.img_v = t;
		t.anchorOffsetX = 63;
		t.anchorOffsetY = 64;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "V_png";
		t.visible = false;
		t.x = 200;
		t.y = -70;
		return t;
	};
	_proto.img_s_i = function () {
		var t = new eui.Image();
		this.img_s = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 65.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "S_png";
		t.visible = false;
		t.x = 410;
		t.y = 1200;
		return t;
	};
	_proto.cancelMatchBtn_i = function () {
		var t = new AnimationButton();
		this.cancelMatchBtn = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 57;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 431;
		t.skinName = GameQuickMatchSkin$Skin39;
		return t;
	};
	return GameQuickMatchSkin;
})(eui.Skin);generateEUI.paths['resource/skins/gameCenter/GameResultViewSkin_FaceBook.exml'] = window.GameResultViewSkin_FaceBook = (function (_super) {
	__extends(GameResultViewSkin_FaceBook, _super);
	var GameResultViewSkin_FaceBook$Skin40 = 	(function (_super) {
		__extends(GameResultViewSkin_FaceBook$Skin40, _super);
		function GameResultViewSkin_FaceBook$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameResultViewSkin_FaceBook$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_again_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameResultViewSkin_FaceBook$Skin40;
	})(eui.Skin);

	function GameResultViewSkin_FaceBook() {
		_super.call(this);
		this.skinParts = ["alphaRect","bg_result2","bg_result1","gp_particle","goldImg","lb_coin","img_coin","img_persentage","gp_coin","gp_people1","gp_people2","img_sex1","img_sex2","lb_player_1","lb_player_2","lb_persentage","gp_1","flowersContainerGroup","btn_otherGame","resultInfoView","gameResultStateImg","playerLeaveView","StraightWinsAvaterGroup","StraightWinsName","StraightWinsPanelScore","StraightWinsPanelNum","straightWinSharePanel","StraightShare","StraightReturn","StraightWins","NewRecordAvaterGroup","NewRecordName","NewRecordPanelScore","NewRecordPanelPanel","NewRecordShare","NewRecordReturn","NewRecord"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.alphaRect_i(),this.resultInfoView_i(),this.playerLeaveView_i(),this.StraightWins_i(),this.NewRecord_i()];
	}
	var _proto = GameResultViewSkin_FaceBook.prototype;

	_proto.alphaRect_i = function () {
		var t = new eui.Rect();
		this.alphaRect = t;
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.resultInfoView_i = function () {
		var t = new eui.Group();
		this.resultInfoView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.gp_1_i(),this.flowersContainerGroup_i(),this.btn_otherGame_i()];
		return t;
	};
	_proto.gp_1_i = function () {
		var t = new eui.Group();
		this.gp_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 340;
		t.height = 650;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 614;
		t.x = 13;
		t.y = 146;
		t.elementsContent = [this._Image1_i(),this.bg_result2_i(),this.bg_result1_i(),this.gp_particle_i(),this._Image2_i(),this._Image3_i(),this.goldImg_i(),this.lb_coin_i(),this.img_coin_i(),this.img_persentage_i(),this.gp_coin_i(),this._Image4_i(),this.gp_people1_i(),this.gp_people2_i(),this._Image9_i(),this.img_sex1_i(),this.img_sex2_i(),this.lb_player_1_i(),this.lb_player_2_i(),this.lb_persentage_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "grayBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_result2_i = function () {
		var t = new eui.Image();
		this.bg_result2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_result_Lose_png";
		t.y = 48.36;
		return t;
	};
	_proto.bg_result1_i = function () {
		var t = new eui.Image();
		this.bg_result1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_result_win_png";
		t.y = 388;
		return t;
	};
	_proto.gp_particle_i = function () {
		var t = new eui.Group();
		this.gp_particle = t;
		t.height = 650;
		t.scrollEnabled = false;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 640;
		t.x = -13;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nameBg_png";
		t.x = 23;
		t.y = 19.04;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 23;
		t.source = "img_MayCoin_png";
		t.visible = false;
		t.y = 496;
		return t;
	};
	_proto.goldImg_i = function () {
		var t = new eui.Image();
		this.goldImg = t;
		t.anchorOffsetX = 19;
		t.anchorOffsetY = 21.53;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "img_coin_png";
		t.visible = false;
		t.x = 169.92;
		t.y = 511.08;
		return t;
	};
	_proto.lb_coin_i = function () {
		var t = new eui.Label();
		this.lb_coin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 16;
		t.size = 18;
		t.text = "+10";
		t.visible = false;
		t.width = 54;
		t.x = 148;
		t.y = 526;
		return t;
	};
	_proto.img_coin_i = function () {
		var t = new eui.Image();
		this.img_coin = t;
		t.source = "bg_result_TodayGetGold_png";
		t.verticalCenter = 185;
		t.visible = false;
		t.x = 29;
		return t;
	};
	_proto.img_persentage_i = function () {
		var t = new eui.Image();
		this.img_persentage = t;
		t.source = "img_yellow_png";
		t.visible = false;
		t.x = 29;
		t.y = 525;
		return t;
	};
	_proto.gp_coin_i = function () {
		var t = new eui.Group();
		this.gp_coin = t;
		t.height = 650;
		t.scrollEnabled = false;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 640;
		t.x = -13;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.source = "nameBg_png";
		t.x = 23;
		t.y = 361;
		return t;
	};
	_proto.gp_people1_i = function () {
		var t = new eui.Group();
		this.gp_people1 = t;
		t.bottom = 39;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 79;
		t.horizontalCenter = 4;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "timg_jpg";
		t.x = 54;
		t.y = 19;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 12;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_user_png";
		t.x = 31;
		t.y = -14;
		return t;
	};
	_proto.gp_people2_i = function () {
		var t = new eui.Group();
		this.gp_people2 = t;
		t.bottom = 377;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 79;
		t.horizontalCenter = 4;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "timg_jpg";
		t.x = 54;
		t.y = 19;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 12;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_user_png";
		t.x = 31;
		t.y = -14;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "img_write_png";
		t.visible = false;
		t.x = 29;
		t.y = 525;
		return t;
	};
	_proto.img_sex1_i = function () {
		var t = new eui.Image();
		this.img_sex1 = t;
		t.source = "img_boy_png";
		t.x = 39;
		t.y = 369.98;
		return t;
	};
	_proto.img_sex2_i = function () {
		var t = new eui.Image();
		this.img_sex2 = t;
		t.source = "img_gril_png";
		t.x = 39;
		t.y = 28.55;
		return t;
	};
	_proto.lb_player_1_i = function () {
		var t = new eui.Label();
		this.lb_player_1 = t;
		t.fontFamily = "Arial";
		t.rotation = 0;
		t.size = 22;
		t.text = "六个字的名字";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 69;
		t.y = 370.97;
		return t;
	};
	_proto.lb_player_2_i = function () {
		var t = new eui.Label();
		this.lb_player_2 = t;
		t.fontFamily = "Arial";
		t.rotation = 0;
		t.size = 22;
		t.text = "六个字的名字";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 69;
		t.y = 29.66;
		return t;
	};
	_proto.lb_persentage_i = function () {
		var t = new eui.Label();
		this.lb_persentage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 15.66;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x565656;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 115;
		t.x = 29;
		t.y = 524.95;
		return t;
	};
	_proto.flowersContainerGroup_i = function () {
		var t = new eui.Group();
		this.flowersContainerGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_otherGame_i = function () {
		var t = new AnimationButton();
		this.btn_otherGame = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 57;
		t.bottom = 139;
		t.height = 114;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 883;
		t.skinName = GameResultViewSkin_FaceBook$Skin40;
		return t;
	};
	_proto.playerLeaveView_i = function () {
		var t = new eui.Group();
		this.playerLeaveView = t;
		t.anchorOffsetX = 220;
		t.anchorOffsetY = 159.5;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.visible = false;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.gameResultStateImg_i()];
		return t;
	};
	_proto.gameResultStateImg_i = function () {
		var t = new eui.Image();
		this.gameResultStateImg = t;
		t.anchorOffsetX = 220;
		t.anchorOffsetY = 159.5;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_result_playerLeave_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.StraightWins_i = function () {
		var t = new eui.Group();
		this.StraightWins = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.straightWinSharePanel_i(),this.StraightShare_i(),this.StraightReturn_i()];
		return t;
	};
	_proto.straightWinSharePanel_i = function () {
		var t = new eui.Group();
		this.straightWinSharePanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 655.33;
		t.horizontalCenter = 1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 517;
		t.x = 108;
		t.y = 97;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this.StraightWinsAvaterGroup_i(),this.StraightWinsName_i(),this.StraightWinsPanelScore_i(),this.StraightWinsPanelNum_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "strightWinsShare_longJump_png";
		t.top = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "strtightWins_png";
		t.y = 470.03;
		return t;
	};
	_proto.StraightWinsAvaterGroup_i = function () {
		var t = new eui.Group();
		this.StraightWinsAvaterGroup = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 41;
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 89.66;
		t.y = 560.2;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "barrageAvatarMask_png";
		t.verticalCenter = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.StraightWinsName_i = function () {
		var t = new eui.Label();
		this.StraightWinsName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.height = 43.33;
		t.text = "LRIWN";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 129.33;
		t.x = 151.99;
		t.y = 534.67;
		return t;
	};
	_proto.StraightWinsPanelScore_i = function () {
		var t = new eui.Label();
		this.StraightWinsPanelScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.height = 43.33;
		t.text = "38s";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 129.33;
		t.x = 316.66;
		t.y = 534.67;
		return t;
	};
	_proto.StraightWinsPanelNum_i = function () {
		var t = new eui.BitmapLabel();
		this.StraightWinsPanelNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "redBorder_fnt";
		t.height = 43;
		t.horizontalCenter = 1;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "22";
		t.textAlign = "center";
		t.width = 102;
		t.y = 425.33;
		return t;
	};
	_proto.StraightShare_i = function () {
		var t = new eui.Image();
		this.StraightShare = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = 0.5;
		t.source = "share_png";
		t.width = 253;
		t.y = 800.67;
		return t;
	};
	_proto.StraightReturn_i = function () {
		var t = new eui.Image();
		this.StraightReturn = t;
		t.height = 95;
		t.horizontalCenter = 0.5;
		t.source = "resultBack_png";
		t.width = 253;
		t.y = 919.33;
		return t;
	};
	_proto.NewRecord_i = function () {
		var t = new eui.Group();
		this.NewRecord = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.NewRecordPanelPanel_i(),this.NewRecordShare_i(),this.NewRecordReturn_i()];
		return t;
	};
	_proto.NewRecordPanelPanel_i = function () {
		var t = new eui.Group();
		this.NewRecordPanelPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 658;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 519;
		t.y = 95.62;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this.NewRecordAvaterGroup_i(),this.NewRecordName_i(),this.NewRecordPanelScore_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "newRecordShare_longJump_png";
		t.top = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "newRecord_png";
		t.y = 455.35;
		return t;
	};
	_proto.NewRecordAvaterGroup_i = function () {
		var t = new eui.Group();
		this.NewRecordAvaterGroup = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 41;
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 65.66;
		t.y = 565.53;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "barrageAvatarMask_png";
		t.verticalCenter = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.NewRecordName_i = function () {
		var t = new eui.Label();
		this.NewRecordName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.height = 43.33;
		t.text = "LRIWN";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 129.33;
		t.x = 125.33;
		t.y = 540;
		return t;
	};
	_proto.NewRecordPanelScore_i = function () {
		var t = new eui.Label();
		this.NewRecordPanelScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.height = 43.33;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 129.33;
		t.x = 276.67;
		t.y = 540;
		return t;
	};
	_proto.NewRecordShare_i = function () {
		var t = new eui.Image();
		this.NewRecordShare = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = 0.5;
		t.source = "share_png";
		t.touchEnabled = true;
		t.width = 253;
		t.y = 802;
		return t;
	};
	_proto.NewRecordReturn_i = function () {
		var t = new eui.Image();
		this.NewRecordReturn = t;
		t.height = 95;
		t.horizontalCenter = 0.5;
		t.source = "resultBack_png";
		t.touchEnabled = true;
		t.width = 253;
		t.y = 922;
		return t;
	};
	return GameResultViewSkin_FaceBook;
})(eui.Skin);generateEUI.paths['resource/skins/gameCenter/GameResultViewSkin.exml'] = window.GameResultViewSkin = (function (_super) {
	__extends(GameResultViewSkin, _super);
	var GameResultViewSkin$Skin41 = 	(function (_super) {
		__extends(GameResultViewSkin$Skin41, _super);
		function GameResultViewSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameResultViewSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_again_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameResultViewSkin$Skin41;
	})(eui.Skin);

	function GameResultViewSkin() {
		_super.call(this);
		this.skinParts = ["alphaRect","bg_result2","bg_result1","gp_particle","goldImg","lb_coin","img_coin","img_persentage","gp_coin","gp_people1","gp_people2","img_sex1","img_sex2","lb_player_1","lb_player_2","lb_persentage","gp_1","flowersContainerGroup","btn_otherGame","resultInfoView","gameResultStateImg","playerLeaveView"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.alphaRect_i(),this.resultInfoView_i(),this.playerLeaveView_i()];
	}
	var _proto = GameResultViewSkin.prototype;

	_proto.alphaRect_i = function () {
		var t = new eui.Rect();
		this.alphaRect = t;
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.resultInfoView_i = function () {
		var t = new eui.Group();
		this.resultInfoView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.gp_1_i(),this.flowersContainerGroup_i(),this.btn_otherGame_i()];
		return t;
	};
	_proto.gp_1_i = function () {
		var t = new eui.Group();
		this.gp_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 340;
		t.height = 650;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 614;
		t.x = 13;
		t.y = 146;
		t.elementsContent = [this._Image1_i(),this.bg_result2_i(),this.bg_result1_i(),this.gp_particle_i(),this._Image2_i(),this._Image3_i(),this.goldImg_i(),this.lb_coin_i(),this.img_coin_i(),this.img_persentage_i(),this.gp_coin_i(),this._Image4_i(),this.gp_people1_i(),this.gp_people2_i(),this._Image9_i(),this.img_sex1_i(),this.img_sex2_i(),this.lb_player_1_i(),this.lb_player_2_i(),this.lb_persentage_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "grayBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_result2_i = function () {
		var t = new eui.Image();
		this.bg_result2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_result_Lose_png";
		t.y = 48.36;
		return t;
	};
	_proto.bg_result1_i = function () {
		var t = new eui.Image();
		this.bg_result1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_result_win_png";
		t.y = 388;
		return t;
	};
	_proto.gp_particle_i = function () {
		var t = new eui.Group();
		this.gp_particle = t;
		t.height = 650;
		t.scrollEnabled = false;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 640;
		t.x = -13;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nameBg_png";
		t.x = 23;
		t.y = 19.04;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 23;
		t.source = "img_MayCoin_png";
		t.visible = false;
		t.y = 496;
		return t;
	};
	_proto.goldImg_i = function () {
		var t = new eui.Image();
		this.goldImg = t;
		t.anchorOffsetX = 19;
		t.anchorOffsetY = 21.53;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "img_coin_png";
		t.visible = false;
		t.x = 169.92;
		t.y = 511.08;
		return t;
	};
	_proto.lb_coin_i = function () {
		var t = new eui.Label();
		this.lb_coin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 16;
		t.size = 18;
		t.text = "+10";
		t.visible = false;
		t.width = 54;
		t.x = 148;
		t.y = 526;
		return t;
	};
	_proto.img_coin_i = function () {
		var t = new eui.Image();
		this.img_coin = t;
		t.source = "bg_result_TodayGetGold_png";
		t.verticalCenter = 185;
		t.visible = false;
		t.x = 29;
		return t;
	};
	_proto.img_persentage_i = function () {
		var t = new eui.Image();
		this.img_persentage = t;
		t.source = "img_yellow_png";
		t.visible = false;
		t.x = 29;
		t.y = 525;
		return t;
	};
	_proto.gp_coin_i = function () {
		var t = new eui.Group();
		this.gp_coin = t;
		t.height = 650;
		t.scrollEnabled = false;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 640;
		t.x = -13;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.source = "nameBg_png";
		t.x = 23;
		t.y = 361;
		return t;
	};
	_proto.gp_people1_i = function () {
		var t = new eui.Group();
		this.gp_people1 = t;
		t.bottom = 39;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 79;
		t.horizontalCenter = 4;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "timg_jpg";
		t.x = 54;
		t.y = 19;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 12;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_user_png";
		t.x = 31;
		t.y = -14;
		return t;
	};
	_proto.gp_people2_i = function () {
		var t = new eui.Group();
		this.gp_people2 = t;
		t.bottom = 377;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 79;
		t.horizontalCenter = 4;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "timg_jpg";
		t.x = 54;
		t.y = 19;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 12;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_user_png";
		t.x = 31;
		t.y = -14;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "img_write_png";
		t.visible = false;
		t.x = 29;
		t.y = 525;
		return t;
	};
	_proto.img_sex1_i = function () {
		var t = new eui.Image();
		this.img_sex1 = t;
		t.source = "img_boy_png";
		t.x = 39;
		t.y = 369.98;
		return t;
	};
	_proto.img_sex2_i = function () {
		var t = new eui.Image();
		this.img_sex2 = t;
		t.source = "img_gril_png";
		t.x = 39;
		t.y = 28.55;
		return t;
	};
	_proto.lb_player_1_i = function () {
		var t = new eui.Label();
		this.lb_player_1 = t;
		t.fontFamily = "Arial";
		t.rotation = 0;
		t.size = 22;
		t.text = "六个字的名字";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 69;
		t.y = 370.97;
		return t;
	};
	_proto.lb_player_2_i = function () {
		var t = new eui.Label();
		this.lb_player_2 = t;
		t.fontFamily = "Arial";
		t.rotation = 0;
		t.size = 22;
		t.text = "六个字的名字";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 69;
		t.y = 29.66;
		return t;
	};
	_proto.lb_persentage_i = function () {
		var t = new eui.Label();
		this.lb_persentage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 15.66;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x565656;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 115;
		t.x = 29;
		t.y = 524.95;
		return t;
	};
	_proto.flowersContainerGroup_i = function () {
		var t = new eui.Group();
		this.flowersContainerGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_otherGame_i = function () {
		var t = new AnimationButton();
		this.btn_otherGame = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 57;
		t.bottom = 139;
		t.height = 114;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 883;
		t.skinName = GameResultViewSkin$Skin41;
		return t;
	};
	_proto.playerLeaveView_i = function () {
		var t = new eui.Group();
		this.playerLeaveView = t;
		t.anchorOffsetX = 220;
		t.anchorOffsetY = 159.5;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.visible = false;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.gameResultStateImg_i()];
		return t;
	};
	_proto.gameResultStateImg_i = function () {
		var t = new eui.Image();
		this.gameResultStateImg = t;
		t.anchorOffsetX = 220;
		t.anchorOffsetY = 159.5;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_result_playerLeave_png";
		t.verticalCenter = 0;
		return t;
	};
	return GameResultViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/gameCenter/GameResultXiaoMiViewSkin.exml'] = window.GameResultXiaoMiViewSkin = (function (_super) {
	__extends(GameResultXiaoMiViewSkin, _super);
	function GameResultXiaoMiViewSkin() {
		_super.call(this);
		this.skinParts = ["contentImage","group","contentGroup","playagain","playagainGroup","share","share_label","shareGroup","menuUI"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.contentImage_i(),this.contentGroup_i(),this.menuUI_i()];
		this.states = [
			new eui.State ("win",
				[
					new eui.SetProperty("_Image1","y",-121),
					new eui.SetProperty("_Image1","x",121)
				])
			,
			new eui.State ("lose",
				[
					new eui.SetProperty("_Image1","source","sb_png"),
					new eui.SetProperty("_Image1","y",-121),
					new eui.SetProperty("_Image1","x",118)
				])
		];
	}
	var _proto = GameResultXiaoMiViewSkin.prototype;

	_proto.contentImage_i = function () {
		var t = new eui.Image();
		this.contentImage = t;
		t.alpha = 0.8;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "mask_bg_png";
		t.top = 0;
		t.touchEnabled = true;
		t.visible = false;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetY = 0;
		t.height = 523;
		t.horizontalCenter = 0;
		t.verticalCenter = 38.5;
		t.visible = false;
		t.width = 600;
		t.elementsContent = [this.group_i(),this._Image1_i()];
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetY = 0;
		t.height = 533;
		t.horizontalCenter = 0;
		t.verticalCenter = 1.5;
		t.visible = false;
		t.width = 600;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "sl_png";
		t.visible = false;
		t.x = 121;
		t.y = -121;
		return t;
	};
	_proto.menuUI_i = function () {
		var t = new eui.Group();
		this.menuUI = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 408;
		t.visible = false;
		t.width = 640;
		t.elementsContent = [this.playagainGroup_i(),this.shareGroup_i()];
		return t;
	};
	_proto.playagainGroup_i = function () {
		var t = new eui.Group();
		this.playagainGroup = t;
		t.height = 60;
		t.visible = false;
		t.width = 140;
		t.x = 153;
		t.y = 0;
		t.elementsContent = [this.playagain_i(),this._Label1_i()];
		return t;
	};
	_proto.playagain_i = function () {
		var t = new eui.Image();
		this.playagain = t;
		t.alpha = 0;
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(6,6,36,36);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "s9_btn_jpg";
		t.visible = false;
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 140;
		return t;
	};
	_proto.shareGroup_i = function () {
		var t = new eui.Group();
		this.shareGroup = t;
		t.height = 60;
		t.visible = false;
		t.width = 140;
		t.x = 363;
		t.y = 0;
		t.elementsContent = [this.share_i(),this.share_label_i()];
		return t;
	};
	_proto.share_i = function () {
		var t = new eui.Image();
		this.share = t;
		t.alpha = 0;
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(6,6,36,36);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "s9_btn_jpg";
		t.visible = false;
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.share_label_i = function () {
		var t = new eui.Label();
		this.share_label = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "保存桌面";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 140;
		return t;
	};
	return GameResultXiaoMiViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/gameCenter/GameSureLeaveSkin.exml'] = window.GameSureLeaveSkin = (function (_super) {
	__extends(GameSureLeaveSkin, _super);
	var GameSureLeaveSkin$Skin42 = 	(function (_super) {
		__extends(GameSureLeaveSkin$Skin42, _super);
		function GameSureLeaveSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_cancel1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSureLeaveSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_cancel1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSureLeaveSkin$Skin42;
	})(eui.Skin);

	var GameSureLeaveSkin$Skin43 = 	(function (_super) {
		__extends(GameSureLeaveSkin$Skin43, _super);
		function GameSureLeaveSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_sure_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSureLeaveSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_sure_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSureLeaveSkin$Skin43;
	})(eui.Skin);

	function GameSureLeaveSkin() {
		_super.call(this);
		this.skinParts = ["btn_cancel","btn_sure"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameSureLeaveSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 261;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 442;
		t.elementsContent = [this._Image1_i(),this.btn_cancel_i(),this.btn_sure_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_exit_png";
		t.verticalCenter = 0;
		t.x = 444;
		t.y = -307.00000000000006;
		return t;
	};
	_proto.btn_cancel_i = function () {
		var t = new AnimationButton();
		this.btn_cancel = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.label = "";
		t.x = 120;
		t.y = 172;
		t.skinName = GameSureLeaveSkin$Skin42;
		return t;
	};
	_proto.btn_sure_i = function () {
		var t = new AnimationButton();
		this.btn_sure = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.label = "";
		t.x = 322;
		t.y = 172;
		t.skinName = GameSureLeaveSkin$Skin43;
		return t;
	};
	return GameSureLeaveSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LoadingUISkin_Wanba.exml'] = window.LoadingUISkin_Wanba = (function (_super) {
	__extends(LoadingUISkin_Wanba, _super);
	function LoadingUISkin_Wanba() {
		_super.call(this);
		this.skinParts = ["bg","logo","loadProgressTxt","loadProgressImgBg","loadProgressImg"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.logo_i(),this.loadProgressTxt_i(),this._Group1_i()];
	}
	var _proto = LoadingUISkin_Wanba.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0xf3f3f5;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x444444;
		t.top = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.height = 138;
		t.horizontalCenter = 0;
		t.verticalCenter = -118;
		t.width = 138;
		return t;
	};
	_proto.loadProgressTxt_i = function () {
		var t = new eui.Label();
		this.loadProgressTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 60.3;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "加载中...";
		t.textAlign = "center";
		t.textColor = 0x918e8e;
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		t.width = 405.3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 18;
		t.horizontalCenter = 0;
		t.verticalCenter = 51;
		t.width = 300;
		t.elementsContent = [this.loadProgressImgBg_i(),this.loadProgressImg_i()];
		return t;
	};
	_proto.loadProgressImgBg_i = function () {
		var t = new eui.Image();
		this.loadProgressImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(6,6,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.loadProgressImg_i = function () {
		var t = new eui.Image();
		this.loadProgressImg = t;
		t.bottom = 0;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(6,6,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 300;
		return t;
	};
	return LoadingUISkin_Wanba;
})(eui.Skin);generateEUI.paths['resource/skins/LoadingUISkin_XiaoMi.exml'] = window.LoadingUISkin_XiaoMi = (function (_super) {
	__extends(LoadingUISkin_XiaoMi, _super);
	function LoadingUISkin_XiaoMi() {
		_super.call(this);
		this.skinParts = ["bg","logoBg","logoCircle","logo","loadProgressTxt","loadProgressImgBg","loadProgressImg"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.logoBg_i(),this.logoCircle_i(),this.logo_i(),this.loadProgressTxt_i(),this._Group1_i()];
	}
	var _proto = LoadingUISkin_XiaoMi.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0x232323;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x444444;
		t.top = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.logoBg_i = function () {
		var t = new eui.Image();
		this.logoBg = t;
		t.height = 138;
		t.horizontalCenter = 0;
		t.verticalCenter = -118;
		t.width = 138;
		return t;
	};
	_proto.logoCircle_i = function () {
		var t = new eui.Image();
		this.logoCircle = t;
		t.height = 138;
		t.horizontalCenter = 0;
		t.verticalCenter = -118;
		t.width = 138;
		return t;
	};
	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.height = 138;
		t.horizontalCenter = 0;
		t.verticalCenter = -118;
		t.width = 138;
		return t;
	};
	_proto.loadProgressTxt_i = function () {
		var t = new eui.Label();
		this.loadProgressTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 60.3;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "加载中...";
		t.textAlign = "center";
		t.textColor = 0xc7b1f9;
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		t.width = 405.3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 18;
		t.horizontalCenter = 0;
		t.verticalCenter = 51;
		t.width = 300;
		t.elementsContent = [this.loadProgressImgBg_i(),this.loadProgressImg_i()];
		return t;
	};
	_proto.loadProgressImgBg_i = function () {
		var t = new eui.Image();
		this.loadProgressImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(6,6,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.loadProgressImg_i = function () {
		var t = new eui.Image();
		this.loadProgressImg = t;
		t.bottom = 0;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(6,6,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 300;
		return t;
	};
	return LoadingUISkin_XiaoMi;
})(eui.Skin);generateEUI.paths['resource/skins/LoadingUISkin.exml'] = window.LoadingUISkin = (function (_super) {
	__extends(LoadingUISkin, _super);
	function LoadingUISkin() {
		_super.call(this);
		this.skinParts = ["gp_loading","loadProgress","loadText","egretLogo"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.gp_loading_i(),this.loadProgress_i(),this.loadText_i(),this.egretLogo_i()];
	}
	var _proto = LoadingUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0x232323;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x444444;
		t.top = 0;
		return t;
	};
	_proto.gp_loading_i = function () {
		var t = new eui.Group();
		this.gp_loading = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = -60;
		t.width = 200;
		return t;
	};
	_proto.loadProgress_i = function () {
		var t = new eui.Label();
		this.loadProgress = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 60.3;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "加载中...";
		t.textAlign = "center";
		t.textColor = 0xfcfcfc;
		t.verticalAlign = "middle";
		t.verticalCenter = 100;
		t.width = 405.3;
		return t;
	};
	_proto.loadText_i = function () {
		var t = new eui.Label();
		this.loadText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 61;
		t.fontFamily = "Arial";
		t.height = 60.3;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x605d5d;
		t.verticalAlign = "middle";
		t.width = 405.3;
		return t;
	};
	_proto.egretLogo_i = function () {
		var t = new eui.Image();
		this.egretLogo = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	return LoadingUISkin;
})(eui.Skin);