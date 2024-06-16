System.register("chunks:///_virtual/AdditionMoneyController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CCInteger, tween, Vec3, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      tween = module.tween;
      Vec3 = module.Vec3;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "74073kkBu1Ato4ceZaCjtj0", "AdditionMoneyController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AdditionMoneyController = exports('AdditionMoneyController', (_dec = ccclass('AdditionMoneyController'), _dec2 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdditionMoneyController, _Component);
        function AdditionMoneyController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "availableTime", _descriptor, _assertThisInitialized(_this));
          _this._additionMoney = void 0;
          return _this;
        }
        var _proto = AdditionMoneyController.prototype;
        _proto.start = function start() {
          var _this2 = this;
          tween(this.node).by(this.availableTime, {
            position: new Vec3(0, 200, 0)
          }) // Move by 100 pixels vertically in 1 second
          .delay(0.2) // Delay for 1 second before destroying
          .call(function () {
            return _this2.node.destroy();
          }).start();
        };
        _proto.update = function update(deltaTime) {};
        _proto.UpdateText = function UpdateText() {
          var lb = this.node.getComponent(Label);
          lb.string = " + " + this._additionMoney.toFixed(0);
        };
        _createClass(AdditionMoneyController, [{
          key: "additionMoney",
          set: function set(value) {
            this._additionMoney = value;
            this.UpdateText();
          }
        }]);
        return AdditionMoneyController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "availableTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AsNode.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a8ec1/JlC1Cvr/v3BByu2Rz", "AsNode", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoundingGiftController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, Node, UITransform, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      Node = module.Node;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "b0978iMBKNEC7dwXxLZAIZN", "BoundingGiftController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BoundingGiftController = exports('BoundingGiftController', (_dec = ccclass('BoundingGiftController'), _dec2 = property({
        type: CCInteger
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoundingGiftController, _Component);
        function BoundingGiftController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "speedX", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speedY", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boundingNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "destroyTime", _descriptor4, _assertThisInitialized(_this));
          _this.leftWall = 0;
          _this.rightWall = 0;
          _this.topWall = 0;
          _this.bottomWall = 0;
          _this.checkTime = 0;
          return _this;
        }
        var _proto = BoundingGiftController.prototype;
        _proto.start = function start() {
          // Get the size of the current scene (screen size)
          var contentsize = this.boundingNode.getComponent(UITransform).contentSize;
          this.leftWall = -contentsize.x / 2;
          this.rightWall = contentsize.x / 2;
          this.topWall = contentsize.y / 2;
          this.bottomWall = -contentsize.y / 2;
          this.checkTime = 0;
        };
        _proto.update = function update(dt) {
          // Update the position based on speed
          var posX = this.node.position.x + this.speedX * dt;
          var posY = this.node.position.y + this.speedY * dt;

          // Check for wall collisions and change direction
          if (posX < this.leftWall) {
            this.speedX *= -1;
            posX = this.leftWall;
          } else if (posX > this.rightWall) {
            this.speedX *= -1;
            posX = this.rightWall;
          }
          if (posY < this.bottomWall) {
            this.speedY *= -1;
            posY = this.bottomWall;
          } else if (posY > this.topWall) {
            this.speedY *= -1;
            posY = this.topWall;
          }
          this.node.position = new Vec3(posX, posY, 0);
          this.checkTime += dt;
          if (this.checkTime >= this.destroyTime) {
            this.node.destroy();
          }
        };
        return BoundingGiftController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speedX", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speedY", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boundingNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "destroyTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EntryScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneManagerComponent.ts', './GameDirector.ts', './SoundManagerComponent.ts', './TerrainManagerComponent.ts', './NetworkManagerComponent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCBoolean, Node, director, Component, SceneManagerComponent, GameDirector, SoundManagerComponent, TerrainManagerComponent, NetworkManagerComponent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCBoolean = module.CCBoolean;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      SceneManagerComponent = module.SceneManagerComponent;
    }, function (module) {
      GameDirector = module.GameDirector;
    }, function (module) {
      SoundManagerComponent = module.SoundManagerComponent;
    }, function (module) {
      TerrainManagerComponent = module.TerrainManagerComponent;
    }, function (module) {
      NetworkManagerComponent = module.NetworkManagerComponent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "9e143tgQ7dPS4axfK5yTPDg", "EntryScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // https://json2ts.dev/

      var EntryScene = exports('EntryScene', (_dec = ccclass('EntryScene'), _dec2 = property({
        type: CCBoolean,
        visible: true
      }), _dec3 = property({
        visible: true
      }), _dec4 = property({
        type: CCBoolean,
        visible: true
      }), _dec5 = property({
        visible: true
      }), _dec6 = property({
        type: CCBoolean,
        visible: true
      }), _dec7 = property({
        visible: true
      }), _dec8 = property({
        type: CCBoolean,
        visible: true
      }), _dec9 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EntryScene, _Component);
        function EntryScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._initializedCount = 0;
          _this._assignedSystemCount = 0;
          _initializerDefineProperty(_this, "_sceneManager", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_sceneManagerConfigPath", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_soundManager", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_soundManagerConfigPath", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_terrainManager", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_terrainManagerConfigPath", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_networkManager", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_networkManagerConfigPaht", _descriptor8, _assertThisInitialized(_this));
          _this.initialized = function () {
            _this._initializedCount++;
            console.log("Initialized " + _this._initializedCount);
            if (_this._initializedCount >= _this._assignedSystemCount) {
              console.log("Start load first scene");
              GameDirector.SceneManager().loadFirstScene();
            }
          };
          return _this;
        }
        var _proto = EntryScene.prototype;
        _proto.start = function start() {
          this._initializedCount = 0;
          this._assignedSystemCount = 0;
          if (this._terrainManager) {
            var terrainManagerNode = new Node("TerrainManager");
            this.node.parent.addChild(terrainManagerNode);
            director.addPersistRootNode(terrainManagerNode);
            var myComp = terrainManagerNode.addComponent(TerrainManagerComponent);
            var monoConfig = {
              configPath: this._terrainManagerConfigPath
            };
            GameDirector.TerrainManager().initialize(monoConfig, this.initialized.bind(this));
            GameDirector.TerrainManager().setComponent(myComp);
            this._assignedSystemCount++;
          }
          if (this._sceneManager) {
            var sceneManagerNode = new Node("SceneManager");
            this.node.parent.addChild(sceneManagerNode);
            director.addPersistRootNode(sceneManagerNode);
            var _myComp = sceneManagerNode.addComponent(SceneManagerComponent);
            var _monoConfig = {
              configPath: this._sceneManagerConfigPath
            };
            GameDirector.SceneManager().initialize(_monoConfig, this.initialized.bind(this));
            GameDirector.SceneManager().setComponent(_myComp);
            this._assignedSystemCount++;
          }
          if (this._soundManager) {
            var soundManagerNode = new Node("SoundManager");
            this.node.parent.addChild(soundManagerNode);
            director.addPersistRootNode(soundManagerNode);
            var _myComp2 = soundManagerNode.addComponent(SoundManagerComponent);
            var _monoConfig2 = {
              configPath: this._soundManagerConfigPath
            };
            GameDirector.SoundManager().initialize(_monoConfig2, this.initialized.bind(this));
            GameDirector.SoundManager().setComponent(_myComp2);
            this._assignedSystemCount++;
          }
          if (this._networkManager) {
            var networkManagerNode = new Node("NetworkManager");
            this.node.parent.addChild(networkManagerNode);
            director.addPersistRootNode(networkManagerNode);
            var _myComp3 = networkManagerNode.addComponent(NetworkManagerComponent);
            var _monoConfig3 = {
              configPath: this._networkManagerConfigPaht
            };
            GameDirector.NetworkManager().initialize(_monoConfig3, this.initialized.bind(this));
            GameDirector.NetworkManager().setComponent(_myComp3);
            this._assignedSystemCount++;
          }
        };
        _proto.update = function update(deltaTime) {};
        return EntryScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sceneManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_sceneManagerConfigPath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_soundManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_soundManagerConfigPath", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_terrainManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_terrainManagerConfigPath", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_networkManager", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_networkManagerConfigPaht", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Game.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8870eaGaulOA5QCV8Zzj45z", "Game", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameData = exports('GameData', /*#__PURE__*/function () {
        function GameData() {
          this.monsterId = void 0;
          this.currentHp = void 0;
          this.maxHp = void 0;
          this.currentExp = void 0;
          this.nextExp = void 0;
          this.incomeBoost = void 0;
          this.incomeBoostCost = void 0;
          this.increaseSpeedBoost = void 0;
          this.increaseSpeedBoostCost = void 0;
          this.recoveryBoost = void 0;
          this.recoverBoostCost = void 0;
        }
        GameData.getFullGrapFormat = function getFullGrapFormat() {
          return "{\r\n" + "__typename\r\n" + "id\r\n" + "isLocked\r\n" + "role\r\n" + "createdAt\r\n" + "}";
        };
        return GameData;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameDirector.ts", ['cc', './SceneManager.ts', './SoundManager.ts', './TerrainManager.ts', './NetworkManager.ts'], function (exports) {
  var cclegacy, SceneManager, SoundManager, TerrainManager, NetworkManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SceneManager = module.SceneManager;
    }, function (module) {
      SoundManager = module.SoundManager;
    }, function (module) {
      TerrainManager = module.TerrainManager;
    }, function (module) {
      NetworkManager = module.NetworkManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bb220cZsUVHPJ6faDlN7ILr", "GameDirector", undefined);
      var GameDirector = exports('GameDirector', /*#__PURE__*/function () {
        function GameDirector() {}
        GameDirector.SceneManager = function SceneManager$1() {
          return SceneManager.getInstance("SceneManager");
        };
        GameDirector.TerrainManager = function TerrainManager$1() {
          return TerrainManager.getInstance("TerrainManager");
        };
        GameDirector.SoundManager = function SoundManager$1() {
          return SoundManager.getInstance("SoundManager");
        };
        GameDirector.NetworkManager = function NetworkManager$1() {
          return NetworkManager.getInstance("NetworkManager");
        };
        return GameDirector;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GamercialSceneController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "59e46LdvdpBaJUx/PjKgWa0", "GamercialSceneController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GamercialSceneController = exports('GamercialSceneController', (_dec = ccclass('GamercialSceneController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GamercialSceneController, _Component);
        function GamercialSceneController() {
          return _Component.apply(this, arguments) || this;
        }
        return GamercialSceneController;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GraphQlQuery.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a95d12FVaNIl7pD3/E5YCVG", "GraphQlQuery", undefined);
      var GraphQlQuery = exports('GraphQlQuery', function GraphQlQuery(query, variable, files) {
        this._query = void 0;
        this._variable = void 0;
        this._files = {};
        this._query = query;
        this._files = files;
        this._variable = variable;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HomeCanvasController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDirector.ts', './AdditionMoneyController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Label, ProgressBar, Prefab, Node, RichText, Button, sp, instantiate, Input, Component, GameDirector, AdditionMoneyController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Prefab = module.Prefab;
      Node = module.Node;
      RichText = module.RichText;
      Button = module.Button;
      sp = module.sp;
      instantiate = module.instantiate;
      Input = module.Input;
      Component = module.Component;
    }, function (module) {
      GameDirector = module.GameDirector;
    }, function (module) {
      AdditionMoneyController = module.AdditionMoneyController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _dec10, _dec11, _dec12, _dec13, _class7, _class8, _descriptor8, _descriptor9, _descriptor10, _dec14, _dec15, _dec16, _dec17, _class10, _class11, _descriptor11, _descriptor12, _descriptor13, _dec18, _dec19, _dec20, _dec21, _dec22, _class13, _class14, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _dec23, _dec24, _class16, _class17, _descriptor18, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class19, _class20, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25;
      cclegacy._RF.push({}, "90a16o3Wp1PM6nMKIBgn0Ao", "HomeCanvasController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UserInfo = exports('UserInfo', (_dec = ccclass('UserInfo'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = function UserInfo() {
        _initializerDefineProperty(this, "username", _descriptor, this);
        _initializerDefineProperty(this, "level", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "username", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var MonsterInfo = exports('MonsterInfo', (_dec4 = ccclass("MonsterInfo"), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Label
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: ProgressBar
      }), _dec4(_class4 = (_class5 = function MonsterInfo() {
        _initializerDefineProperty(this, "hp", _descriptor3, this);
        _initializerDefineProperty(this, "maxHp", _descriptor4, this);
        _initializerDefineProperty(this, "exp", _descriptor5, this);
        _initializerDefineProperty(this, "maxExp", _descriptor6, this);
        _initializerDefineProperty(this, "expBar", _descriptor7, this);
      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "hp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "maxHp", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "exp", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "maxExp", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "expBar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class5)) || _class4));
      var Currency = exports('Currency', (_dec10 = ccclass("Currency"), _dec11 = property({
        type: Label
      }), _dec12 = property({
        type: Prefab
      }), _dec13 = property({
        type: Node
      }), _dec10(_class7 = (_class8 = function Currency() {
        _initializerDefineProperty(this, "goldAmount", _descriptor8, this);
        _initializerDefineProperty(this, "additionCoin", _descriptor9, this);
        _initializerDefineProperty(this, "spawPos", _descriptor10, this);
      }, (_descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "goldAmount", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "additionCoin", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "spawPos", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class8)) || _class7));
      var BottomBar = exports('BottomBar', (_dec14 = ccclass("BottomBar"), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec17 = property({
        type: Node
      }), _dec14(_class10 = (_class11 = function BottomBar() {
        _initializerDefineProperty(this, "booters", _descriptor11, this);
        _initializerDefineProperty(this, "earn", _descriptor12, this);
        _initializerDefineProperty(this, "invite", _descriptor13, this);
      }, (_descriptor11 = _applyDecoratedDescriptor(_class11.prototype, "booters", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class11.prototype, "earn", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class11.prototype, "invite", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class11)) || _class10));
      var BootersInfo = exports('BootersInfo', (_dec18 = ccclass("BootersInfo"), _dec19 = property({
        type: RichText
      }), _dec20 = property({
        type: RichText
      }), _dec21 = property({
        type: Label
      }), _dec22 = property({
        type: Button
      }), _dec18(_class13 = (_class14 = function BootersInfo() {
        _initializerDefineProperty(this, "title", _descriptor14, this);
        _initializerDefineProperty(this, "additionValue", _descriptor15, this);
        _initializerDefineProperty(this, "cost", _descriptor16, this);
        _initializerDefineProperty(this, "updateButton", _descriptor17, this);
      }, (_descriptor14 = _applyDecoratedDescriptor(_class14.prototype, "title", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class14.prototype, "additionValue", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class14.prototype, "cost", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class14.prototype, "updateButton", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class14)) || _class13));
      var BootersPanel = exports('BootersPanel', (_dec23 = ccclass("BootersPanel"), _dec24 = property({
        type: BootersInfo
      }), _dec23(_class16 = (_class17 = function BootersPanel() {
        _initializerDefineProperty(this, "booster", _descriptor18, this);
      }, _descriptor18 = _applyDecoratedDescriptor(_class17.prototype, "booster", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class17)) || _class16));
      var HomeCanvasController = exports('HomeCanvasController', (_dec25 = ccclass('HomeCanvasController'), _dec26 = property({
        type: UserInfo
      }), _dec27 = property({
        type: MonsterInfo
      }), _dec28 = property({
        type: Currency
      }), _dec29 = property({
        type: BootersPanel
      }), _dec30 = property({
        type: BottomBar
      }), _dec31 = property({
        type: Node
      }), _dec32 = property({
        type: sp.Skeleton
      }), _dec25(_class19 = (_class20 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HomeCanvasController, _Component);
        function HomeCanvasController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userInfos", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "monsterInfos", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentcy", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bootersPanel", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomBar", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "touchField", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine", _descriptor25, _assertThisInitialized(_this));
          _this.onEarnByTouch = void 0;
          _this.onBoostUpdate = void 0;
          _this._isSpineIsRuning = void 0;
          _this._playerData = void 0;
          return _this;
        }
        var _proto = HomeCanvasController.prototype;
        _proto.setPlayerInfo = function setPlayerInfo(player) {
          this.userInfos.username.string = player.username;
          this.userInfos.level.string = player.level.toString();
          this.currentcy.goldAmount.string = player.currentMoney.toFixed(0).toString();
          this._playerData = player;
          this.setGameInfo(player.gameData);
          this.checkBoosterAvailable();
        };
        _proto.setGameInfo = function setGameInfo(game) {
          this.monsterInfos.hp.string = game.currentHp.toFixed(0).toString();
          this.monsterInfos.exp.string = game.currentExp.toFixed(0).toString();
          this.monsterInfos.maxHp.string = game.maxHp.toFixed(0).toString();
          this.monsterInfos.maxExp.string = game.nextExp.toFixed(0).toString();
          this.monsterInfos.expBar.progress = game.currentExp / game.nextExp;
          this.bootersPanel.booster[0].title.string = "<color=#C9C9C9>Increase income by </color><color=#C4CC62>" + (game.incomeBoost * 100).toFixed(0) + "%</color>";
          this.bootersPanel.booster[0].cost.string = game.incomeBoostCost.toFixed(0).toString();
          this.bootersPanel.booster[1].title.string = "<color=#C9C9C9>Increase speed by </color><color=#C4CC62>" + game.increaseSpeedBoost.toFixed(1) + "%</color>";
          this.bootersPanel.booster[1].cost.string = game.increaseSpeedBoostCost.toFixed(0).toString();
          this.bootersPanel.booster[2].title.string = "<color=#C9C9C9>Increase recover by </color><color=#C4CC62>" + game.recoveryBoost.toFixed(1) + "%</color>";
          this.bootersPanel.booster[2].cost.string = game.recoverBoostCost.toFixed(0).toString();
        };
        _proto.increaseMoneyBy = function increaseMoneyBy(addition) {
          var adm = instantiate(this.currentcy.additionCoin);
          adm.getComponent(AdditionMoneyController).additionMoney = addition;
          adm.position = this.currentcy.spawPos.position;
          adm.setParent(this.currentcy.spawPos);
        };
        _proto.start = function start() {
          var _this2 = this;
          GameDirector.SoundManager().playBgm("bgm3");
          this._isSpineIsRuning = false;
          if (this.spine) ;else {
            console.error('Spine node not found!');
          }
          this.spine.setAnimation(0, "idle", true);
          this.touchField.on(Input.EventType.MOUSE_DOWN, function () {
            _this2.onEarnByTouch();
            if (!_this2._isSpineIsRuning) {
              //Need to be update later , set it = true, when animation completed set = false
              _this2._isSpineIsRuning = false;
              var track = _this2.spine.setAnimation(0, "flying", true);
            }
          }, this);
          this.bottomBar.invite.on(Input.EventType.MOUSE_DOWN, function () {
            localStorage.clear();
          }, this);
          this.bottomBar.booters.on(Input.EventType.MOUSE_DOWN, function () {
            _this2.checkBoosterAvailable();
          }, this);
          this.schedule(function () {
            this.onEarnByTouch();
          }, 3);
        };
        _proto.checkBoosterAvailable = function checkBoosterAvailable() {
          this.bootersPanel.booster[0].updateButton.interactable = this._playerData.currentMoney >= this._playerData.gameData.incomeBoostCost;
          this.bootersPanel.booster[1].updateButton.interactable = this._playerData.currentMoney >= this._playerData.gameData.increaseSpeedBoostCost;
          this.bootersPanel.booster[2].updateButton.interactable = this._playerData.currentMoney >= this._playerData.gameData.recoverBoostCost;
        };
        _proto.updateAllBoots = function updateAllBoots() {
          while (true) {
            if (this._playerData.currentMoney >= this._playerData.gameData.incomeBoostCost) {
              this.onBoostUpdate(0);
              continue;
            }
            if (this._playerData.currentMoney >= this._playerData.gameData.increaseSpeedBoostCost) {
              this.onBoostUpdate(1);
              continue;
            }
            if (this._playerData.currentMoney >= this._playerData.gameData.recoverBoostCost) {
              this.onBoostUpdate(2);
              continue;
            }
            this.checkBoosterAvailable();
            break;
          }
        };
        _proto.updateIncomeButtonDown = function updateIncomeButtonDown() {
          this.onBoostUpdate(0);
          this.checkBoosterAvailable();
        };
        _proto.updateSpeedButtonDown = function updateSpeedButtonDown() {
          this.onBoostUpdate(1);
          this.checkBoosterAvailable();
        };
        _proto.updateRecoverButtonDown = function updateRecoverButtonDown() {
          this.onBoostUpdate(2);
          this.checkBoosterAvailable();
        };
        return HomeCanvasController;
      }(Component), (_descriptor19 = _applyDecoratedDescriptor(_class20.prototype, "userInfos", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new UserInfo();
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class20.prototype, "monsterInfos", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new MonsterInfo();
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class20.prototype, "currentcy", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Currency();
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class20.prototype, "bootersPanel", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BootersPanel();
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class20.prototype, "bottomBar", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BottomBar();
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class20.prototype, "touchField", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class20.prototype, "spine", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class20)) || _class19));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HomeLogic.ts", ['cc', './Player.ts', './Game.ts', './GameDirector.ts'], function (exports) {
  var cclegacy, Player, GameData, GameDirector;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Player = module.Player;
    }, function (module) {
      GameData = module.GameData;
    }, function (module) {
      GameDirector = module.GameDirector;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ee0ebcf3vREcpyVHAFgigRH", "HomeLogic", undefined);
      var HomeLogic = exports('HomeLogic', /*#__PURE__*/function () {
        function HomeLogic() {
          this.player = void 0;
          this.player = new Player();
        }
        var _proto = HomeLogic.prototype;
        _proto.doGeneratePlayerInfo = function doGeneratePlayerInfo() {
          var _this = this;
          return new Promise(function (resolve, reject) {
            var player = new Player();
            player.username = localStorage.getItem("username");
            player.level = 1;
            player.currentMoney = 0;
            player.currentIncome = 1;
            _this.doLoadGameInfo().then(function (gameinfo) {
              player.gameData = gameinfo;
              _this.player = player;
              _this.savePlayer();
              resolve(player);
            });
          });
        };
        _proto.doLoadPlayer = function doLoadPlayer() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            try {
              var playerJson = localStorage.getItem("player");
              if (playerJson) {
                _this2.player = JSON.parse(playerJson);
                resolve(_this2.player);
              } else {
                reject("cannot found player");
              }
            } catch (err) {
              reject(err);
            }
          });
        };
        _proto.doLoadGameInfo = function doLoadGameInfo() {
          return new Promise(function (resolve, reject) {
            var game = new GameData();
            game.currentExp = 0;
            game.nextExp = 20;
            game.currentHp = 100;
            game.maxHp = 100;
            game.incomeBoost = 0;
            game.incomeBoostCost = 20;
            game.increaseSpeedBoost = 0;
            game.increaseSpeedBoostCost = 20;
            game.recoveryBoost = 0;
            game.recoverBoostCost = 20;
            resolve(game);
          });
        };
        _proto.doEarn = function doEarn() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            _this3.player.currentMoney = _this3.player.currentMoney + _this3.player.currentIncome + _this3.player.gameData.incomeBoost;
            _this3.player.gameData.currentExp = _this3.player.gameData.currentExp + 1;
            _this3.player.gameData.currentHp = _this3.player.gameData.currentHp - 0.5;
            if (_this3.player.gameData.currentExp >= _this3.player.gameData.nextExp) {
              _this3.player.gameData.currentExp = 0;
              _this3.player.gameData.nextExp *= 1.5;
              _this3.player.level += 1;
              _this3.player.gameData.currentHp = _this3.player.gameData.maxHp;
              //dont do that later ~_~
              GameDirector.SoundManager().playSfx("levelup");
            }
            GameDirector.SoundManager().playSfx("coin");
            resolve(_this3.player);
          });
        };
        _proto.recover = function recover() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            _this4.player.gameData.currentHp = Math.max(_this4.player.gameData.currentHp + 1 * _this4.player.gameData.recoveryBoost, _this4.player.gameData.maxHp);
            resolve(_this4.player);
          });
        };
        _proto.savePlayer = function savePlayer() {
          var json = JSON.stringify(this.player);
          localStorage.setItem("player", json);
        };
        _proto.doBoost = function doBoost(type) {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            if (type == 0 && _this5.player.currentMoney > _this5.player.gameData.incomeBoostCost) {
              _this5.player.currentMoney = _this5.player.currentMoney - _this5.player.gameData.incomeBoostCost;
              _this5.player.gameData.incomeBoost += 0.2;
              _this5.player.gameData.incomeBoostCost *= 1.5;
            }
            if (type == 1 && _this5.player.currentMoney > _this5.player.gameData.increaseSpeedBoost) {
              _this5.player.currentMoney = _this5.player.currentMoney - _this5.player.gameData.increaseSpeedBoostCost;
              _this5.player.gameData.increaseSpeedBoost += 0.2;
              _this5.player.gameData.increaseSpeedBoostCost *= 1.5;
            }
            if (type == 2 && _this5.player.currentMoney > _this5.player.gameData.recoveryBoost) {
              _this5.player.currentMoney = _this5.player.currentMoney - _this5.player.gameData.recoverBoostCost;
              _this5.player.gameData.recoveryBoost += 2;
              _this5.player.gameData.recoverBoostCost *= 1.5;
            }
            resolve(_this5.player);
          });
        };
        return HomeLogic;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HomeSceneController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HomeCanvasController.ts', './HomeLogic.ts', './GamercialSceneController.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, HomeCanvasController, HomeLogic, GamercialSceneController;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      HomeCanvasController = module.HomeCanvasController;
    }, function (module) {
      HomeLogic = module.HomeLogic;
    }, function (module) {
      GamercialSceneController = module.GamercialSceneController;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0a472ffQIRHu4WPEnz+Ie4C", "HomeSceneController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HomeSceneController = exports('HomeSceneController', (_dec = ccclass('HomeSceneController'), _dec(_class = /*#__PURE__*/function (_GamercialSceneContro) {
        _inheritsLoose(HomeSceneController, _GamercialSceneContro);
        function HomeSceneController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GamercialSceneContro.call.apply(_GamercialSceneContro, [this].concat(args)) || this;
          _this._homeCanvas = void 0;
          _this._homeLogic = void 0;
          _this._player = void 0;
          return _this;
        }
        var _proto = HomeSceneController.prototype;
        _proto.onSceneLoaded = function onSceneLoaded() {
          var _this2 = this;
          console.log("HomeSceneController on scene loaded");
          this._homeLogic = new HomeLogic();
          this._homeCanvas = this.node.parent.getComponentInChildren(HomeCanvasController);
          this._homeLogic.doLoadPlayer().then(function (result) {
            console.log("Home scene res");
            _this2._player = result;
            _this2.updateUiPlayer();
          })["catch"](function (err) {
            console.warn(err);
            _this2._homeLogic.doGeneratePlayerInfo().then(function (result) {
              console.log("HomeSceneController load player");
              _this2._player = result;
              _this2.updateUiPlayer();
            })["catch"](function (err) {
              console.error("Cannot load player info " + err);
            });
          });
          this._homeCanvas.onEarnByTouch = this.earnByTouch.bind(this);
          this._homeCanvas.onBoostUpdate = this.bootsUpdate.bind(this);
        };
        _proto.updateUiPlayer = function updateUiPlayer() {
          console.log("updateUiPlayer");
          console.log(this._player);
          this._homeCanvas.setPlayerInfo(this._player);
          this._homeCanvas.setGameInfo(this._player.gameData);
          this.autoSavePlayer();
        };
        _proto.onSceneUnLoad = function onSceneUnLoad() {
          console.log("HomeSceneController on scene unloaded");
        };
        _proto.onAssetLoaded = function onAssetLoaded() {
          console.log("HomeSceneController on asset loaded");
        };
        _proto.onAssetUnload = function onAssetUnload() {
          console.log("HomeSceneController on asset unloaded");
        };
        _proto.earnByTouch = function earnByTouch() {
          var _this3 = this;
          this._homeLogic.doEarn().then(function (result) {
            _this3._player = result;
            _this3._homeCanvas.setPlayerInfo(_this3._player);
            _this3._homeCanvas.setGameInfo(_this3._player.gameData);
            _this3._homeCanvas.increaseMoneyBy(_this3._player.currentIncome + _this3._player.gameData.incomeBoost);
          });
        };
        _proto.autoSavePlayer = function autoSavePlayer() {
          this.schedule(function () {
            this.RequestSavePlayer();
          }, 3);
        };
        _proto.RequestSavePlayer = function RequestSavePlayer() {
          this._homeLogic.savePlayer();
          this._homeLogic.recover().then(function (result) {});
        };
        _proto.bootsUpdate = function bootsUpdate(type) {
          var _this4 = this;
          this._homeLogic.doBoost(type).then(function (value) {
            _this4._player = value;
            _this4._homeCanvas.setPlayerInfo(_this4._player);
            _this4._homeCanvas.setGameInfo(_this4._player.gameData);
          });
        };
        return HomeSceneController;
      }(GamercialSceneController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/INetworkData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2df8a8Fer5P54/67FQ3hJBZ", "INetworkData", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IState.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bf66a5l4iRG77zj35qalSUG", "IState", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ISystemBase.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "144df2PeidJ049ph8kBfgQ4", "ISystemBase", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LobbyCanvasController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, EditBox, Label, Input, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      EditBox = module.EditBox;
      Label = module.Label;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "cd503zAtwxCIrSLLpKzcg2S", "LobbyCanvasController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LobbyCanvasController = exports('LobbyCanvasController', (_dec = ccclass('LobbyCanvasController'), _dec2 = property({
        type: Node,
        visible: true
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec4 = property({
        type: Node,
        visible: true
      }), _dec5 = property({
        type: EditBox,
        visible: true
      }), _dec6 = property({
        type: Node,
        visible: true
      }), _dec7 = property({
        type: Label,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LobbyCanvasController, _Component);
        function LobbyCanvasController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_tapToLoginField", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_loginPannel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_loginButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_usernameEdt", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_errorNotificationNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_errorNotificationText", _descriptor6, _assertThisInitialized(_this));
          _this.onLoginEvent = void 0;
          _this.onSignUp = void 0;
          _this.onTabToEnter = void 0;
          return _this;
        }
        var _proto = LobbyCanvasController.prototype;
        _proto.start = function start() {
          this.initScene();
        };
        _proto.initScene = function initScene() {
          var _this2 = this;
          this._tapToLoginField.on(Input.EventType.MOUSE_DOWN, function () {
            _this2.onTabToEnter();
            _this2._loginPannel.active = true;
          }, this);
          this._loginButton.on(Input.EventType.MOUSE_DOWN, function () {
            // this.onLoginEvent("Username","Password");
            var username = _this2._usernameEdt.string;
            if (username.length == 0) {
              _this2._errorNotificationNode.active = true;
              _this2._errorNotificationText.string = "Username cannot empty";
            } else _this2.onSignUp(username);
          }, this);
        };
        return LobbyCanvasController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_tapToLoginField", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_loginPannel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_loginButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_usernameEdt", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_errorNotificationNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_errorNotificationText", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LobbyLogic.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "beb24e8UNdMYacrxVQoSMwQ", "LobbyLogic", undefined);
      var LobbyLogic = exports('LobbyLogic', /*#__PURE__*/function () {
        function LobbyLogic() {}
        var _proto = LobbyLogic.prototype;
        _proto.logIn = function logIn(username, password, loginComepleted, loginFailed) {
          console.log("Login completed " + username + " " + password);
          loginComepleted();
          // const headers = {
          //     'Content-Type': 'application/json',
          //     'Authorization': 'Bearer token123',
          //     'Access-Control-Allow-Origin': '*'
          // };
          // const requestBody = "\{  \"a\" : \"12312321\" }"; // Note: requestBody is an object, not a JSON string
          // const files = {};
          // GameDirector.NetworkManager()
          // .sendHttpRequest("https://webhook.site","328950b1-c8a0-4d70-b96a-45fd2b178aaa","POST",headers,requestBody,files)
          // .then(value => {
          //     console.log(value)
          // }, reject => {
          //     console.error(reject);
          // });
        };

        _proto.signUp = function signUp(username) {
          return new Promise(function (resolve, reject) {
            localStorage.setItem("username", username);
            resolve(username);
          });
        };
        _proto.loadPlayer = function loadPlayer() {
          return new Promise(function (resolve, reject) {
            try {
              var playerJson = localStorage.getItem("player");
              if (playerJson) {
                var player = JSON.parse(playerJson);
                console.log("Lobby logic load player");
                console.log(player);
                resolve(player);
              } else {
                reject("cannot found player");
              }
            } catch (err) {
              reject(err);
            }
          });
        };
        return LobbyLogic;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LobbySceneController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GamercialSceneController.ts', './LobbyLogic.ts', './LobbyCanvasController.ts', './GameDirector.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GamercialSceneController, LobbyLogic, LobbyCanvasController, GameDirector;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GamercialSceneController = module.GamercialSceneController;
    }, function (module) {
      LobbyLogic = module.LobbyLogic;
    }, function (module) {
      LobbyCanvasController = module.LobbyCanvasController;
    }, function (module) {
      GameDirector = module.GameDirector;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4556bpHHaFGGauVXcImIaBz", "LobbySceneController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LobbySceneController = exports('LobbySceneController', (_dec = ccclass('LobbySceneController'), _dec(_class = /*#__PURE__*/function (_GamercialSceneContro) {
        _inheritsLoose(LobbySceneController, _GamercialSceneContro);
        function LobbySceneController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GamercialSceneContro.call.apply(_GamercialSceneContro, [this].concat(args)) || this;
          _this._logic = void 0;
          _this._canvas = void 0;
          return _this;
        }
        var _proto = LobbySceneController.prototype;
        _proto.onSceneLoaded = function onSceneLoaded() {
          console.log("LobbySceneController on scene loaded");
          this._logic = new LobbyLogic();
          this._canvas = this.node.parent.getComponentInChildren(LobbyCanvasController);
          if (!this._canvas) {
            console.log("Cannot found canvas");
          }
          GameDirector.SoundManager().preloadSoundsClip("lobbyScene").then(function (result) {
            GameDirector.SoundManager().playBgm("bgm3");
            GameDirector.SoundManager().setBgmVolume(1);
          });
          this._canvas.onLoginEvent = this.onLogin.bind(this);
          this._canvas.onSignUp = this.onSignUp.bind(this);
          this._canvas.onTabToEnter = this.onTabToPlay.bind(this);
        };
        _proto.onSceneUnLoad = function onSceneUnLoad() {};
        _proto.onAssetLoaded = function onAssetLoaded() {};
        _proto.onAssetUnload = function onAssetUnload() {};
        _proto.onLogin = function onLogin(username, password) {
          console.log("LobbySceneController onLogin");
          this._logic.logIn(username, password, function () {
            GameDirector.SceneManager().loadScene("Home");
          }, function (error) {});
        };
        _proto.onSignUp = function onSignUp(username) {
          this._logic.signUp(username).then(function (result) {
            console.log("Sign up with username " + result);
            GameDirector.SceneManager().loadScene("Home");
          })["catch"](function (err) {
            console.error("Signup err " + err);
          });
        };
        _proto.onTabToPlay = function onTabToPlay() {
          this._logic.loadPlayer().then(function (result) {
            GameDirector.SceneManager().loadScene("Home");
          });
        };
        return LobbySceneController;
      }(GamercialSceneController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginDetail.ts", ['cc', './User.ts'], function (exports) {
  var cclegacy, User;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      User = module.User;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a9232jEHtpPMq7T40Xit0Wu", "LoginDetail", undefined);
      var LoginDetail = exports('LoginDetail', /*#__PURE__*/function () {
        function LoginDetail() {
          this.username = void 0;
          this.token = void 0;
          this.avatarUrl = void 0;
          this.user = void 0;
        }
        LoginDetail.getFullGraphFormat = function getFullGraphFormat() {
          return "{\n        id\n        username\n        token\n        avatarUrl\n        user {\n            " + User.getFullGrapFormat() + "\n        }\n        }";
        };
        return LoginDetail;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './GraphQlQuery.ts', './INetworkData.ts', './NetworkManager.ts', './NetworkManagerComponent.ts', './NetworkManagerConfig.ts', './UploadFileInfo.ts', './EntryScene.ts', './GamercialSceneController.ts', './SceneManager.ts', './SceneManagerComponent.ts', './SceneManagerConfig.ts', './SfxButtonController.ts', './SfxDestroyWhenEnded.ts', './SoundManager.ts', './SoundManagerComponent.ts', './SoundManagerConfig.ts', './IState.ts', './StateMachine.ts', './MapBlockType.ts', './TerrainManager.ts', './TerrainManagerComponent.ts', './TerrainManagerConfig.ts', './UiButtonEvents.ts', './AsNode.ts', './GameDirector.ts', './ISystemBase.ts', './MonoSingleton.ts', './MonoSingletonConfig.ts', './Queue.ts', './Game.ts', './LoginDetail.ts', './Player.ts', './User.ts', './AdditionMoneyController.ts', './BoundingGiftController.ts', './HomeCanvasController.ts', './HomeLogic.ts', './HomeSceneController.ts', './LobbyCanvasController.ts', './LobbyLogic.ts', './LobbySceneController.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MapBlockType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aa5f6YlA+5CqIsZZ2uf0PkB", "MapBlockType", undefined);
      // index by rule 
      // ab 000000
      // a: can interact, 1 mean yes
      // b: can go through 1 mean yes
      var MapBlockType = exports('MapBlockType', /*#__PURE__*/function (MapBlockType) {
        MapBlockType[MapBlockType["FLOOR"] = 64] = "FLOOR";
        MapBlockType[MapBlockType["WALL"] = 128] = "WALL";
        MapBlockType[MapBlockType["BRICK"] = 129] = "BRICK";
        MapBlockType[MapBlockType["STONE"] = 130] = "STONE";
        MapBlockType[MapBlockType["GOLD"] = 131] = "GOLD";
        MapBlockType[MapBlockType["BASE"] = 1] = "BASE";
        MapBlockType[MapBlockType["LADDER"] = 193] = "LADDER";
        return MapBlockType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MonoSingleton.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, resources;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      resources = module.resources;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d894a/GX3dFE7EtOAFqut5R", "MonoSingleton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // Dictionary to store instances for different T types
      var instanceDictionary = {};
      var MonoSingleton = exports('MonoSingleton', (_dec = ccclass('MonoBehaviour'), _dec(_class = /*#__PURE__*/function () {
        function MonoSingleton() {
          this._component = void 0;
          this._config = void 0;
        }
        MonoSingleton.getInstance = function getInstance(typename) {
          var typeName = typename; // Get the name of the type T1
          if (!instanceDictionary[typeName]) {
            instanceDictionary[typeName] = new this();
          }
          return instanceDictionary[typeName];
        };
        var _proto = MonoSingleton.prototype;
        _proto.setComponent = function setComponent(comp) {
          this._component = comp;
        };
        _proto.getComponent = function getComponent() {
          return this._component;
        };
        _proto.initialize = function initialize(config, onCompleted) {
          var _this = this;
          if (config) {
            console.log("Load config from " + config.configPath);
            resources.load("Gamercial/Config/" + config.configPath, function (err, data) {
              if (err) {
                console.error('Failed to load config.json:', err);
                return;
              }
              _this._config = data.json;
              onCompleted();
            });
          }
        };
        return MonoSingleton;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MonoSingletonConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9b0535yDOZDio7Cp3ZXgAlt", "MonoSingletonConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MonoSingleton.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, MonoSingleton;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      MonoSingleton = module.MonoSingleton;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "631e2ro3whPmZlLZMsa5ZlQ", "NetworkManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NetworkManager = exports('NetworkManager', (_dec = ccclass("NetworkManager"), _dec(_class = /*#__PURE__*/function (_MonoSingleton) {
        _inheritsLoose(NetworkManager, _MonoSingleton);
        function NetworkManager() {
          return _MonoSingleton.apply(this, arguments) || this;
        }
        var _proto = NetworkManager.prototype;
        _proto.sendGrapQlAsync = function sendGrapQlAsync(baseUr, headers, requestBody) {
          var _this = this;
          return new Promise(function (resolve, reject) {
            var jsonString = JSON.stringify(requestBody);
            //just use empty file first
            var files;
            _this.sendHttpRequest(baseUr, "graphql", "POST", headers, jsonString, files).then(function (result) {
              console.log(result);
              var obj = JSON.parse(result);
              resolve(obj);
            })["catch"](function (err) {
              reject(err);
            });
          });
        };
        _proto.sendHttpRequest = function sendHttpRequest(baseUrl, path, method, headers, requestBody, files) {
          var _this2 = this;
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
            var requestSent, retrires, url, options, formData, _key, response, responseData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("Request body " + requestBody);
                  requestSent = false;
                  retrires = 0;
                case 3:
                  if (requestSent) {
                    _context.next = 32;
                    break;
                  }
                  _context.prev = 4;
                  url = new URL(path, baseUrl);
                  options = {
                    method: method,
                    headers: headers
                  };
                  if (requestBody.length > 0) {
                    options.body = JSON.stringify(requestBody);
                  }
                  if (Object.keys(files).length > 0) {
                    formData = new FormData();
                    for (_key in files) {
                      if (Object.prototype.hasOwnProperty.call(files, _key)) {
                        formData.append(_key, files[_key]);
                      }
                    }
                    options.body = formData;
                  }
                  _context.next = 11;
                  return fetch(url.toString(), options);
                case 11:
                  response = _context.sent;
                  console.log("sendHttpRequest response " + response);
                  if (response.ok) {
                    _context.next = 20;
                    break;
                  }
                  retrires++;
                  if (!(retrires > _this2._config.max_retry_time)) {
                    _context.next = 17;
                    break;
                  }
                  throw new Error("HTTP error! Status: " + response.status);
                case 17:
                  _context.next = 19;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, _this2._config.retry_interval);
                  });
                case 19:
                  return _context.abrupt("continue", 3);
                case 20:
                  _context.next = 22;
                  return response.json();
                case 22:
                  responseData = _context.sent;
                  console.log("Receive " + responseData);
                  resolve(responseData);
                  _context.next = 30;
                  break;
                case 27:
                  _context.prev = 27;
                  _context.t0 = _context["catch"](4);
                  reject(_context.t0);
                case 30:
                  _context.next = 3;
                  break;
                case 32:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[4, 27]]);
          })));
        };
        return NetworkManager;
      }(MonoSingleton)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkManagerComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "14ffcmbz9pB6JPCu5b1O83R", "NetworkManagerComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NetworkManagerComponent = exports('NetworkManagerComponent', (_dec = ccclass('NetworkManagerComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetworkManagerComponent, _Component);
        function NetworkManagerComponent() {
          return _Component.apply(this, arguments) || this;
        }
        return NetworkManagerComponent;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkManagerConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bb22e8zoepB7JHYFj1ySRhf", "NetworkManagerConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './User.ts'], function (exports) {
  var _inheritsLoose, cclegacy, User;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      User = module.User;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4c76a+H5TBAjLqSmKxQ01gn", "Player", undefined);
      var Player = exports('Player', /*#__PURE__*/function (_User) {
        _inheritsLoose(Player, _User);
        function Player() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _User.call.apply(_User, [this].concat(args)) || this;
          _this.username = void 0;
          _this.firstname = void 0;
          _this.displaynamme = void 0;
          _this.level = void 0;
          _this.currentMoney = void 0;
          _this.currentIncome = void 0;
          _this.gameData = void 0;
          return _this;
        } // public static getFullGraphFormat() : string {
        //     return " ..on Player { "+
        //     "username \r"+
        //     "displayname\r "+
        //     "firstname \r" +
        //     "level \r" +
        //     "current_money \n"+
        //     "gamedata { \n"+
        //         GameData.getFullGrapFormat()+
        //     "   }"+
        //     " }";
        // }
        return Player;
      }(User));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Queue.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "892c8QIgv9G4LpcvtPhc0n5", "Queue", undefined);
      var Queue = exports('Queue', /*#__PURE__*/function () {
        function Queue() {
          this.items = [];
        }
        var _proto = Queue.prototype;
        // Add an element to the end of the queue
        _proto.enqueue = function enqueue(item) {
          this.items.push(item);
        }

        // Remove and return the first element from the queue
        ;

        _proto.dequeue = function dequeue() {
          if (this.isEmpty()) {
            return undefined;
          }
          return this.items.shift();
        }

        // Peek at the first element without removing it
        ;

        _proto.peek = function peek() {
          if (this.isEmpty()) {
            return undefined;
          }
          return this.items[0];
        }

        // Check if the queue is empty
        ;

        _proto.isEmpty = function isEmpty() {
          return this.items.length === 0;
        }

        // Get the size of the queue
        ;

        _proto.size = function size() {
          return this.items.length;
        }

        // Clear the queue
        ;

        _proto.clear = function clear() {
          this.items = [];
        };
        return Queue;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MonoSingleton.ts', './GamercialSceneController.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, resources, Prefab, MonoSingleton, GamercialSceneController;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      resources = module.resources;
      Prefab = module.Prefab;
    }, function (module) {
      MonoSingleton = module.MonoSingleton;
    }, function (module) {
      GamercialSceneController = module.GamercialSceneController;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "76242s/zPhFhLGKh9d7Cres", "SceneManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SceneManager = exports('SceneManager', (_dec = ccclass('SceneManager'), _dec(_class = /*#__PURE__*/function (_MonoSingleton) {
        _inheritsLoose(SceneManager, _MonoSingleton);
        function SceneManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MonoSingleton.call.apply(_MonoSingleton, [this].concat(args)) || this;
          _this._sceneStack = void 0;
          _this._currentSceneController = void 0;
          return _this;
        }
        var _proto = SceneManager.prototype;
        _proto.loadFirstScene = function loadFirstScene() {
          this._sceneStack = [];
          var start_scene = this._config.start_scene;
          this.pushSceneWithName(start_scene, null);
        };
        _proto.loadScene = function loadScene(name) {
          this.pushSceneWithName(name);
        };
        _proto.pushSceneWithName = function pushSceneWithName(name, data) {
          var _this2 = this;
          var sceneConfig = this._config.scene.find(function (scene) {
            return scene.name === name;
          });
          var path = sceneConfig.path;
          if (!path) {
            console.log("Cannot load scene " + name + ": not found");
            return;
          }
          if (this._currentSceneController) {
            this._currentSceneController.onSceneUnLoad();
          }
          if (sceneConfig.preloading_assets.length > 0) {
            for (var pathIndex = 0; pathIndex < sceneConfig.preloading_assets.length; pathIndex++) {
              if (sceneConfig.preloading_assets[pathIndex].asset_name == "prefab") {
                resources.preload(sceneConfig.preloading_assets[pathIndex].asset_path, Prefab);
              }
              //add more type later
            }
          }

          this._component.loadScene(path, function () {
            //must sure scene is loaded
            _this2._currentSceneController = _this2._component.node.parent.getComponentInChildren(GamercialSceneController);
            if (!_this2._currentSceneController) {
              console.log("Cannot get Scene controller");
              return;
            }
            console.log(_this2._currentSceneController.node.name);
            _this2._currentSceneController.onSceneLoaded();
          });
        };
        _proto.pushSceneWithIndex = function pushSceneWithIndex(sceneNumber, data) {
          var path = this._config.scene.find(function (scene) {
            return scene.index === sceneNumber;
          }).path;
          if (!path) {
            console.log("Cannot load scene " + sceneNumber + ": not found");
            return;
          }
          console.log("Not implement");
        };
        _proto.doPushScene = function doPushScene(name, data) {} //some thing need to do in future 
        // 1 closing animation
        // preloading assets
        // unloading assets
        // show loading scene
        ;

        _proto.doPushSceneSync = function doPushSceneSync(name, data) {};
        return SceneManager;
      }(MonoSingleton)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneManagerComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2fd850XeSxPjaxwh6W2YNB7", "SceneManagerComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SceneManagerComponent = exports('SceneManagerComponent', (_dec = ccclass('SceneManagerComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SceneManagerComponent, _Component);
        function SceneManagerComponent() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SceneManagerComponent.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        _proto.loadFirstScene = function loadFirstScene() {};
        _proto.loadScene = function loadScene(scenename, onSceneLoaded) {
          director.loadScene(scenename, function () {
            onSceneLoaded();
          });
        };
        return SceneManagerComponent;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneManagerConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "83810ZWzo5LZY0tJ4zbBwT3", "SceneManagerConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SfxButtonController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDirector.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Input, Component, GameDirector;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Input = module.Input;
      Component = module.Component;
    }, function (module) {
      GameDirector = module.GameDirector;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a0e30T18LpFeav/FjOcwSr2", "SfxButtonController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SfxButtonController = exports('SfxButtonController', (_dec = ccclass('SfxButtonController'), _dec2 = property({
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SfxButtonController, _Component);
        function SfxButtonController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_sfxName", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SfxButtonController.prototype;
        _proto.start = function start() {
          var _this2 = this;
          if (this._sfxName) {
            this.node.on(Input.EventType.MOUSE_DOWN, function () {
              GameDirector.SoundManager().playSfx(_this2._sfxName);
            }, this);
          }
        };
        _proto.onDestroy = function onDestroy() {
          var _this3 = this;
          if (this._sfxName) {
            this.node.off(Input.EventType.MOUSE_DOWN, function () {
              GameDirector.SoundManager().playSfx(_this3._sfxName);
            }, this);
          }
        };
        return SfxButtonController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sfxName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SfxDestroyWhenEnded.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, AudioSource, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "56f2aBhhdRJ0oB5VkkM4rYd", "SfxDestroyWhenEnded", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SfxDestroyWhenEnded = exports('SfxDestroyWhenEnded', (_dec = ccclass('SfxDestroyWhenEnded'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SfxDestroyWhenEnded, _Component);
        function SfxDestroyWhenEnded() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._audioSource = void 0;
          return _this;
        }
        var _proto = SfxDestroyWhenEnded.prototype;
        _proto.start = function start() {
          this._audioSource = this.node.getComponent(AudioSource);
          if (!this._audioSource) {
            return;
          }
          this._audioSource.node.on("ended", this.onAudioEnded, this);
        };
        _proto.onAudioEnded = function onAudioEnded() {
          if (this._audioSource) {
            this._audioSource.node.off("ended", this.onAudioEnded, this);
          }
          this.node.destroy();
        };
        return SfxDestroyWhenEnded;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MonoSingleton.ts', './SfxDestroyWhenEnded.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, resources, AudioClip, Node, AudioSource, MonoSingleton, SfxDestroyWhenEnded;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      resources = module.resources;
      AudioClip = module.AudioClip;
      Node = module.Node;
      AudioSource = module.AudioSource;
    }, function (module) {
      MonoSingleton = module.MonoSingleton;
    }, function (module) {
      SfxDestroyWhenEnded = module.SfxDestroyWhenEnded;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ebd14A3Fu5NH6fQxsxmMELv", "SoundManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SoundManager = exports('SoundManager', (_dec = ccclass('SoundManager'), _dec(_class = /*#__PURE__*/function (_MonoSingleton) {
        _inheritsLoose(SoundManager, _MonoSingleton);
        function SoundManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MonoSingleton.call.apply(_MonoSingleton, [this].concat(args)) || this;
          _this._bgmAudioSource = void 0;
          _this._sfxAudioSource = [];
          _this._currentGroupName = void 0;
          _this._soundClips = void 0;
          return _this;
        }
        var _proto = SoundManager.prototype;
        _proto.preloadSoundsClip = function preloadSoundsClip(groupName) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var soundLoaded = 0;
            _this2._currentGroupName = groupName;
            var group = _this2._config.group.find(function (group) {
              return group.name == groupName;
            });
            if (!group) {
              console.log("Not found sound group " + groupName);
              reject("Not found sound group " + groupName);
              return;
            }
            var targetSoundCount = group.bmg.length + group.sfx.length; // The number of sounds we expect to load before resolving

            _this2._soundClips = new Map();
            var onSoundLoaded = function onSoundLoaded() {
              soundLoaded++;
              if (soundLoaded >= targetSoundCount) {
                resolve();
              }
            };
            var loadSound = function loadSound(path) {
              if (_this2._soundClips.has(path)) {
                onSoundLoaded();
                return;
              }
              _this2.loadAudioClip(path).then(function (clip) {
                console.log("Loaded " + path);
                _this2._soundClips.set(path, clip);
                onSoundLoaded();
              })["catch"](function (err) {
                console.error(err);
                onSoundLoaded();
              });
            };
            for (var _iterator = _createForOfIteratorHelperLoose(group.bmg), _step; !(_step = _iterator()).done;) {
              var bmg = _step.value;
              loadSound(bmg.dir);
            }
            for (var _iterator2 = _createForOfIteratorHelperLoose(group.sfx), _step2; !(_step2 = _iterator2()).done;) {
              var sfx = _step2.value;
              loadSound(sfx.dir);
            }
          });
        };
        _proto.loadAudioClip = function loadAudioClip(path) {
          return new Promise(function (resolve, reject) {
            resources.load(path, AudioClip, function (err, clip) {
              if (err) {
                console.log("Cannot load sound " + path);
                reject(err);
              } else {
                resolve(clip);
              }
            });
          });
        };
        _proto.unloadSoundsClip = function unloadSoundsClip() {
          this._soundClips.clear();
        };
        _proto.playBgm = function playBgm(soundkey) {
          var _this3 = this;
          if (!this._bgmAudioSource) {
            var bgmNode = new Node("Bgm");
            bgmNode.setParent(this._component.node);
            this._bgmAudioSource = bgmNode.addComponent(AudioSource);
          }
          var foundGroup = this._config.group.filter(function (group) {
            return group.name == _this3._currentGroupName;
          });
          if (!foundGroup) {
            console.log("Cannot found group");
            return;
          }
          var sound = foundGroup[0].bmg.filter(function (bgm) {
            return bgm.name == soundkey;
          });
          if (!sound) {
            console.log("Cannot found sound " + soundkey);
            return;
          }
          var soundPath = sound[0].dir;
          if (this._soundClips.has(soundPath)) {
            this._bgmAudioSource.stop();
            this._bgmAudioSource.clip = this._soundClips.get(soundPath);
            this._bgmAudioSource.loop = true;
            this._bgmAudioSource.play();
          }
        };
        _proto.stopBgm = function stopBgm() {
          if (this._bgmAudioSource) {
            this._bgmAudioSource.stop();
          }
        };
        _proto.playSfx = function playSfx(soundKey) {
          var _this4 = this;
          var foundGroup = this._config.group.filter(function (group) {
            return group.name == _this4._currentGroupName;
          });
          if (!foundGroup) {
            console.log("Cannot found group");
            return;
          }
          var sound = foundGroup[0].sfx.filter(function (bgm) {
            return bgm.name == soundKey;
          });
          if (!sound) {
            console.log("Cannot found sound " + soundKey);
            return;
          }
          var soundPath = sound[0].dir;
          if (this._soundClips.has(soundPath)) {
            var sfxNode = new Node("sfx " + soundKey);
            sfxNode.setParent(this._component.node);
            var sfxAudioSource = sfxNode.addComponent(AudioSource);
            sfxAudioSource.clip = this._soundClips.get(soundPath);
            sfxAudioSource.loop = false;
            sfxAudioSource.play();
            sfxNode.addComponent(SfxDestroyWhenEnded);
            this._sfxAudioSource.push(sfxAudioSource);
          }
        };
        _proto.stopSfx = function stopSfx() {};
        _proto.setBgmVolume = function setBgmVolume(volume) {
          if (this._bgmAudioSource) {
            this._bgmAudioSource.volume = volume;
          }
        };
        _proto.setSfxVolume = function setSfxVolume(volume) {
          for (var sfxindex = 0; sfxindex < this._sfxAudioSource.length; sfxindex++) {
            this._sfxAudioSource[sfxindex].volume = volume;
          }
        };
        return SoundManager;
      }(MonoSingleton)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundManagerComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ec39a/MzKFJ5KJow06HuKaD", "SoundManagerComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SoundManagerComponent = exports('SoundManagerComponent', (_dec = ccclass('SoundManagerComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SoundManagerComponent, _Component);
        function SoundManagerComponent() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SoundManagerComponent.prototype;
        _proto.start = function start() {
          console.log("Sound manager component");
        };
        _proto.update = function update(deltaTime) {};
        return SoundManagerComponent;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundManagerConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a3a33n89NBBILM6dkwEsx/4", "SoundManagerConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StateMachine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCString, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7dd4dXItmNDx4/RJJe2TLMt", "StateMachine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var StateMachine = exports('default', (_dec = ccclass('StateMachine'), _dec2 = property({
        type: CCString,
        visible: true
      }), _dec3 = property({
        type: CCString,
        visible: true,
        readonly: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StateMachine, _Component);
        function StateMachine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._states = new Map();
          _this._currentState = void 0;
          _initializerDefineProperty(_this, "_defaultStateName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_currentStateName", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = StateMachine.prototype;
        _proto.addState = function addState(name, state) {
          this._states[name] = state;
        };
        _proto.setState = function setState(name) {
          if (this._currentState) {
            // console.log(`Exit ${this._currentStateName} state`)
            this._currentState.onExit();
          }
          // console.log(`Start ${name} state`);
          this._currentStateName = name;
          this._currentState = this._states[name];
          this._currentState.onEnter();
        };
        _proto.onUpdate = function onUpdate(dt) {
          if (!this._currentState && this._states[this._defaultStateName]) {
            this.setState(this._defaultStateName);
          }
          this._currentState.onUpdate(dt);
        };
        return StateMachine;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_defaultStateName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_currentStateName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TerrainManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MonoSingleton.ts', './MapBlockType.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, resources, Prefab, MonoSingleton, MapBlockType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      resources = module.resources;
      Prefab = module.Prefab;
    }, function (module) {
      MonoSingleton = module.MonoSingleton;
    }, function (module) {
      MapBlockType = module.MapBlockType;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4fbd5fn6yRHu62wy2O44lrV", "TerrainManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var blockDictionary = {};
      var TerrainManager = exports('TerrainManager', (_dec = ccclass('TerrainManager'), _dec(_class = /*#__PURE__*/function (_MonoSingleton) {
        _inheritsLoose(TerrainManager, _MonoSingleton);
        function TerrainManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MonoSingleton.call.apply(_MonoSingleton, [this].concat(args)) || this;
          _this._terrainMap = void 0;
          _this._resourceMap = void 0;
          _this._toughnessMap = void 0;
          _this.onUpdateResourceMap = void 0;
          return _this;
        }
        var _proto = TerrainManager.prototype;
        //#region Terrain generate
        _proto.randomFill = function randomFill() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var noiseMap = [];
            var randomColumn = Math.floor(Math.random() * (_this2._config.width - 8)) + 4;
            for (var y = 0; y < _this2._config.height; y++) {
              var row = [];
              for (var x = 0; x < _this2._config.width; x++) {
                if (x === 0 || y === 0 || x === _this2._config.width - 1 || y === _this2._config.height - 1) {
                  row.push(MapBlockType.WALL);
                } else if (Math.abs(randomColumn - x) < 1) {
                  //this will add random collumn to connect map
                  row.push(MapBlockType.FLOOR);
                } else if (Math.random() * 100 > _this2._config.noise_map.frequency) {
                  row.push(MapBlockType.WALL);
                } else {
                  row.push(MapBlockType.FLOOR);
                }
              }
              noiseMap.push(row);
            }
            return resolve(noiseMap);
          });
        };
        _proto.generateCellularAutomationMap = function generateCellularAutomationMap(input) {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            for (var i = 0; i < _this3._config.noise_map.step; i++) {
              input = _this3.step(input);
            }
            resolve(input);
          });
        };
        _proto.step = function step(map) {
          var width = this._config.width;
          var height = this._config.height;
          var tempMap = [];
          for (var y = 0; y < height; y++) {
            var row = [];
            for (var x = 0; x < width; x++) {
              if (x === 0 || y === 0 || x === width - 1 || y === height - 1) {
                row.push(MapBlockType.WALL);
              } else {
                row.push(this.placeWallLogic(map, x, y) ? MapBlockType.WALL : MapBlockType.FLOOR);
              }
            }
            tempMap.push(row);
          }
          return tempMap;
        };
        _proto.countAdjacentWalls = function countAdjacentWalls(input, x, y) {
          var walls = 0;
          for (var mapY = y - 1; mapY <= y + 1; mapY++) {
            for (var mapX = x - 1; mapX <= x + 1; mapX++) {
              if (!(mapX == x && mapY == y)) {
                if (input[mapY][mapX] == MapBlockType.WALL) {
                  walls++;
                }
              }
            }
          }
          return walls;
        };
        _proto.USmoothMap = function USmoothMap(input) {
          var tempMap = [];
          var leftSide = [[0, 1, 1], [0, 0, 1], [0, 1, 1]];
          var rightSide = [[1, 1, 0], [1, 0, 0], [1, 1, 0]];
          var topSide = [[1, 1, 1], [1, 0, 1], [0, 0, 0]];
          var bottomSide = [[0, 0, 0], [1, 0, 1], [1, 1, 1]];
          var checkSize = [leftSide, rightSide, topSide, bottomSide];
          for (var y = 0; y < this._config.height; y++) {
            var row = [];
            for (var x = 0; x < this._config.width; x++) {
              if (x < this._config.boundary || x > this._config.width - this._config.boundary || y < this._config.boundary || y > this._config.height - this._config.boundary) {
                row.push(MapBlockType.WALL);
                continue;
              }
              if (input[y][x] == MapBlockType.WALL) {
                row.push(MapBlockType.WALL);
                for (var checkSideIndex = 0; checkSideIndex < checkSize.length; checkSideIndex++) {
                  if (this.checkIsNotContainWallInFindMap(input, checkSize[checkSideIndex], x, y)) {
                    row.pop();
                    row.push(MapBlockType.FLOOR);
                    break;
                  }
                }
              } else {
                row.push(MapBlockType.FLOOR);
              }
            }
            tempMap.push(row);
          }
          return tempMap;
        };
        _proto.checkIsNotContainWallInFindMap = function checkIsNotContainWallInFindMap(input, map, x, y) {
          for (var j = -1; j < 2; j++) {
            for (var i = -1; i < 2; i++) {
              if (input[j + y][i + x] == MapBlockType.WALL && map[j + 1][i + 1] == 1) {
                return false;
              }
            }
          }
          return true;
        };
        _proto.placeWallLogic = function placeWallLogic(map, x, y) {
          // return this.countAdjacentWalls(map,x, y) >= this._config.wall_limit ||
          //        this.countNearByWalls(map, x, y) <= 2;
          return this.countAdjacentWalls(map, x, y) >= this._config.wall_limit || x < this._config.boundary || x > this._config.width - this._config.boundary || y < this._config.boundary || y > this._config.height - this._config.boundary;
        };
        _proto.putResources = function putResources(map) {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var resourceMap = [];
            var baselocationX = 0;
            var baselocationY = 0;

            //find base first
            for (var j = 0; j < map.length; j++) {
              for (var i = 0; i < map[0].length; i++) {
                if (map[j][i] == MapBlockType.BASE && baselocationX == 0) {
                  baselocationX = i + _this4._config.home_size / 2;
                  baselocationY = j + _this4._config.home_size / 2;
                  break;
                }
              }
              if (baselocationX != 0) {
                break;
              }
            }
            //start put resource 
            for (var _j = 0; _j < map.length; _j++) {
              var row = [];
              for (var _i = 0; _i < map[0].length; _i++) {
                if (map[_j][_i] == MapBlockType.FLOOR) {
                  //just test indensity here
                  if (Math.pow(baselocationY - _j, 2) + Math.pow(baselocationX - _i, 2) < Math.pow(_this4._config.home_size * 1.5, 2)) {
                    row.push(MapBlockType.FLOOR);
                  } else if (Math.random() * 100 > 0) {
                    row.push(MapBlockType.BRICK);
                  } else {
                    row.push(MapBlockType.FLOOR);
                  }
                } else {
                  row.push(map[_j][_i]);
                }
              }
              resourceMap.push(row);
            }
            resolve(resourceMap);
          });
        };
        _proto.createToughnessMap = function createToughnessMap(sourceMap) {
          return new Promise(function (resolve, reject) {
            try {
              var toughnessMap = [];
              for (var j = 0; j < sourceMap.length; j++) {
                var row = [];
                for (var i = 0; i < sourceMap.length; i++) {
                  //can not interact
                  if ((sourceMap[j][i] & 1 << 7) == 0) {
                    row.push(0);
                  } else {
                    //test just test val here
                    //in the future : must be calculate 
                    row.push(100);
                  }
                }
                toughnessMap.push(row);
              }
              resolve(toughnessMap);
            } catch (err) {
              reject(err);
            }
          });
        };
        _proto.putCampPlace = function putCampPlace(map) {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            var _this5$findAvaiableAr = _this5.findAvaiableArena(map),
              campX = _this5$findAvaiableAr[0],
              campY = _this5$findAvaiableAr[1];
            for (var j = campY - _this5._config.home_size; j < campY; j++) {
              for (var i = campX - _this5._config.home_size; i < campX; i++) {
                map[j][i] = MapBlockType.BASE;
              }
            }
            resolve(map);
          });
        };
        _proto.findAvaiableArena = function findAvaiableArena(map) {
          var fMap = [];
          for (var i = 0; i < map[0].length; i++) {
            var _, _fMap$_;
            (_fMap$_ = fMap[_ = 0]) != null ? _fMap$_ : fMap[_] = [];
            fMap[0][i] = 1;
          }
          for (var j = 0; j < map.length; j++) {
            var _j2, _fMap$_j;
            (_fMap$_j = fMap[_j2 = j]) != null ? _fMap$_j : fMap[_j2] = [];
            fMap[j][0] = 1;
          }
          for (var _j3 = 2; _j3 < map.length; _j3++) {
            for (var _i2 = 2; _i2 < map.length; _i2++) {
              if (map[_j3][_i2] == map[_j3 - 1][_i2] && map[_j3][_i2] == map[_j3][_i2 - 1] && map[_j3 - 1][_j3] && map[_j3][_i2] != MapBlockType.WALL) {
                fMap[_j3][_i2] = Math.min(fMap[_j3 - 1][_i2], Math.min(fMap[_j3][_i2 - 1], fMap[_j3 - 1][_i2 - 1])) + 1;
              } else {
                fMap[_j3][_i2] = 1;
              }
              if (fMap[_j3][_i2] > this._config.home_size) {
                console.log("Put map in " + _i2 + " " + _j3);
                return [_i2, _j3];
              }
            }
          }
          return [-1, -1];
        }

        //#endregion

        //#region save/load
        ;

        _proto.saveMap = function saveMap(map) {
          var mapJson = JSON.stringify(map);
          localStorage.setItem("map", mapJson);
        };
        _proto.saveResource = function saveResource(resourceMap) {
          var resourceJson = JSON.stringify(resourceMap);
          localStorage.setItem("resource", resourceJson);
        };
        _proto.saveToughness = function saveToughness(toughnessMap) {
          var toughnessJson = JSON.stringify(toughnessMap);
          localStorage.setItem("toughness", toughnessJson);
        };
        _proto.loadMap = function loadMap() {
          return new Promise(function (resolve, reject) {
            try {
              var mapJson = localStorage.getItem("map");
              if (mapJson) {
                var map = JSON.parse(mapJson);
                resolve(map);
              } else {
                reject("cannot found map");
              }
            } catch (err) {
              reject(err);
            }
          });
        };
        _proto.loadResource = function loadResource() {
          return new Promise(function (resolve, reject) {
            try {
              var resourceJson = localStorage.getItem("resource");
              if (resourceJson) {
                var map = JSON.parse(resourceJson);
                resolve(map);
              } else {
                reject("Cannot found resouce");
              }
            } catch (err) {
              reject(err);
            }
          });
        };
        _proto.loadToughness = function loadToughness() {
          return new Promise(function (resolve, reject) {
            try {
              var resourceJson = localStorage.getItem("toughness");
              if (resourceJson) {
                var map = JSON.parse(resourceJson);
                for (var j = 0; j < map.length; j++) {
                  for (var i = 0; i < map[0].length; i++) {
                    //clear exploiting block
                    map[j][i] = map[j][i] & 0x7F;
                  }
                }
                resolve(map);
              } else {
                reject("Cannot found toughness");
              }
            } catch (err) {
              reject(err);
            }
          });
        }

        //#endregion

        //#region Block handler
        ;

        _proto.initPrefab = function initPrefab() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            var resourceLoaded = 0;
            var _loop = function _loop(blockPrefabIndex) {
              resources.load(_this6._config.blocks[blockPrefabIndex].path, Prefab, function (err, blockPrefab) {
                if (err) {
                  console.error("Cannot load prefab " + _this6._config.blocks[blockPrefabIndex].path + " " + err);
                } else {
                  console.log("Load prefab " + _this6._config.blocks[blockPrefabIndex].name);
                  blockDictionary[_this6._config.blocks[blockPrefabIndex].type_index] = blockPrefab;
                }
                resourceLoaded++;
                if (resourceLoaded >= _this6._config.blocks.length) {
                  resolve("Load all resouce completed");
                }
              });
            };
            for (var blockPrefabIndex = 0; blockPrefabIndex < _this6._config.blocks.length; blockPrefabIndex++) {
              _loop(blockPrefabIndex);
            }
          });
        };
        _proto.getBlockPrefab = function getBlockPrefab(type) {
          var prefab = blockDictionary[type];
          if (!prefab) {
            console.log("Prefab not found");
            return null;
          }
          return prefab;
        };
        _proto.clearResource = function clearResource(x, y) {
          this._resourceMap[y][x] = MapBlockType.FLOOR;
          this.saveResource(this._resourceMap);
          this._toughnessMap[y][x] = 0;
          this.saveToughness(this._toughnessMap);
          this.onUpdateResourceMap([x, y], MapBlockType.FLOOR);
        };
        _createClass(TerrainManager, [{
          key: "resourceMap",
          get: function get() {
            return this._resourceMap;
          },
          set: function set(value) {
            this._resourceMap = value;
            this.saveResource(this._resourceMap);
          }
        }, {
          key: "terrainMap",
          get: function get() {
            return this._terrainMap;
          },
          set: function set(value) {
            this._terrainMap = value;
            this.saveMap(this._terrainMap);
          }
        }, {
          key: "toughnessMap",
          get: function get() {
            return this._toughnessMap;
          },
          set: function set(value) {
            this._toughnessMap = value;
            this.saveToughness(this.toughnessMap);
          }
        }, {
          key: "mapWidth",
          get: function get() {
            return this._config.width;
          }
        }, {
          key: "mapHeight",
          get: function get() {
            return this._config.height;
          }
        }, {
          key: "baseSize",
          get: function get() {
            return this._config.home_size;
          }
        }]);
        return TerrainManager;
      }(MonoSingleton)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TerrainManagerComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b27b8Eq3s1M7LFJv61+qLzq", "TerrainManagerComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TerrainManagerComponent = exports('TerrainManagerComponent', (_dec = ccclass('TerrainManagerComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TerrainManagerComponent, _Component);
        function TerrainManagerComponent() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = TerrainManagerComponent.prototype;
        _proto.start = function start() {
          console.log("Terrain manager component");
        };
        _proto.update = function update(deltaTime) {};
        return TerrainManagerComponent;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TerrainManagerConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cde7agApK1MBZPbuxTcshMK", "TerrainManagerConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UiButtonEvents.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Enum, Node, Input, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _class4, _class5, _descriptor4;
      cclegacy._RF.push({}, "40ae8LYbZJPD7nf0zAje+Ao", "UiButtonEvents", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Key = exports('Key', /*#__PURE__*/function (Key) {
        Key[Key["BUTTON_DOWN"] = 0] = "BUTTON_DOWN";
        Key[Key["BUTTON_UP"] = 1] = "BUTTON_UP";
        return Key;
      }({}));
      var Action = exports('Action', /*#__PURE__*/function (Action) {
        Action[Action["ACTIVE"] = 0] = "ACTIVE";
        Action[Action["INACTIVE"] = 1] = "INACTIVE";
        return Action;
      }({}));
      var ButtonEvent = exports('ButtonEvent', (_dec = ccclass("ButtonEvent"), _dec2 = property({
        type: Enum(Key)
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Enum(Action)
      }), _dec(_class = (_class2 = function ButtonEvent() {
        _initializerDefineProperty(this, "key", _descriptor, this);
        _initializerDefineProperty(this, "node", _descriptor2, this);
        _initializerDefineProperty(this, "action", _descriptor3, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Key.BUTTON_DOWN;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "action", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Action.ACTIVE;
        }
      })), _class2)) || _class));
      var UiButtonEvents = exports('UiButtonEvents', (_dec5 = ccclass('UiButtonEvents'), _dec6 = property(ButtonEvent), _dec5(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UiButtonEvents, _Component);
        function UiButtonEvents() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "buttonEvents", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UiButtonEvents.prototype;
        _proto.start = function start() {
          this.node.on(Input.EventType.MOUSE_DOWN, this.handleMouseDown.bind(this));
          this.node.on(Input.EventType.MOUSE_UP, this.handleMouseUp.bind(this));
        };
        _proto.handleMouseDown = function handleMouseDown() {
          this.buttonEvents.forEach(function (event) {
            if (event.key == Key.BUTTON_DOWN) event.node.active = event.action == Action.ACTIVE;
          });
        };
        _proto.handleMouseUp = function handleMouseUp() {
          this.buttonEvents.forEach(function (event) {
            if (event.key == Key.BUTTON_UP) event.node.active = event.action == Action.ACTIVE;
          });
        };
        _proto.onDestroy = function onDestroy() {
          this.node.off(Input.EventType.MOUSE_DOWN, this.handleMouseDown);
          this.node.off(Input.EventType.MOUSE_UP, this.handleMouseUp);
        };
        return UiButtonEvents;
      }(Component), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "buttonEvents", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UploadFileInfo.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5cd62MNKVJDsY4ihTu9M0/M", "UploadFileInfo", undefined);
      var UploadImageDataType = exports('UploadImageDataType', /*#__PURE__*/function (UploadImageDataType) {
        UploadImageDataType[UploadImageDataType["FILE_DATA"] = 0] = "FILE_DATA";
        UploadImageDataType[UploadImageDataType["FILE_PATH"] = 1] = "FILE_PATH";
        return UploadImageDataType;
      }({}));
      var UploadFileInfo = exports('UploadFileInfo', function UploadFileInfo(type, data) {
        this._type = void 0;
        this._data = void 0;
        this._data = data;
        this._type = type;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/User.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "db1a3oW6glAzZRKh5Tl66TP", "User", undefined);
      // import { Player } from "./Player";

      var User = exports('User', function User() {
        this.isLocked = void 0;
        this.role = void 0;
        this.createAt = void 0;
      } //    public static getFullGrapFormat() : string {
      //        return "{\r\n" +
      //        "__typename\r\n" +
      //        "id\r\n" +
      //        "isLocked\r\n" +
      //        "role\r\n" +
      //        "createdAt\r\n" +
      //            Player.getFullGraphFormat()+"\r\n"+
      //        "}";
      //    }
      );

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});