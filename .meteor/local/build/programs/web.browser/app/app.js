var require = meteorInstall({"client":{"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/template.main.js                                                                              //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
                                                                                                        // 1
Template.body.addContent((function() {                                                                  // 2
  var view = this;                                                                                      // 3
  return HTML.Raw('<div id="render-target"></div>');                                                    // 4
}));                                                                                                    // 5
Meteor.startup(Template.body.renderToDocument);                                                         // 6
                                                                                                        // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/main.js                                                                                       //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var React = void 0;                                                                                     // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var Meteor = void 0;                                                                                    // 1
module.watch(require("meteor/meteor"), {                                                                // 1
    Meteor: function (v) {                                                                              // 1
        Meteor = v;                                                                                     // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
var render = void 0;                                                                                    // 1
module.watch(require("react-dom"), {                                                                    // 1
    render: function (v) {                                                                              // 1
        render = v;                                                                                     // 1
    }                                                                                                   // 1
}, 2);                                                                                                  // 1
var App = void 0;                                                                                       // 1
module.watch(require("../imports/ui/App.jsx"), {                                                        // 1
    "default": function (v) {                                                                           // 1
        App = v;                                                                                        // 1
    }                                                                                                   // 1
}, 3);                                                                                                  // 1
Meteor.startup(function () {                                                                            // 6
    render(React.createElement(App, null), document.getElementById('render-target'));                   // 7
});                                                                                                     // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"lib":{"web3.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/lib/web3.js                                                                                  //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
module.export({                                                                                         // 1
  web3: function () {                                                                                   // 1
    return web3;                                                                                        // 1
  }                                                                                                     // 1
});                                                                                                     // 1
var web3 = new Web3();                                                                                  // 1
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));                             // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"App.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/App.jsx                                                                                   //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
var React = void 0,                                                                                     // 1
    Component = void 0,                                                                                 // 1
    PropTypes = void 0;                                                                                 // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    },                                                                                                  // 1
    Component: function (v) {                                                                           // 1
        Component = v;                                                                                  // 1
    },                                                                                                  // 1
    PropTypes: function (v) {                                                                           // 1
        PropTypes = v;                                                                                  // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var createContainer = void 0;                                                                           // 1
module.watch(require("meteor/react-meteor-data"), {                                                     // 1
    createContainer: function (v) {                                                                     // 1
        createContainer = v;                                                                            // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
var RegistrationPanel = void 0;                                                                         // 1
module.watch(require("./RegistrationPanel"), {                                                          // 1
    "default": function (v) {                                                                           // 1
        RegistrationPanel = v;                                                                          // 1
    }                                                                                                   // 1
}, 2);                                                                                                  // 1
var CrownsaleContract = void 0;                                                                         // 1
module.watch(require("./CrownsaleContract"), {                                                          // 1
    "default": function (v) {                                                                           // 1
        CrownsaleContract = v;                                                                          // 1
    }                                                                                                   // 1
}, 3);                                                                                                  // 1
var CustomTokenContract = void 0;                                                                       // 1
module.watch(require("./CustomTokenContract"), {                                                        // 1
    "default": function (v) {                                                                           // 1
        CustomTokenContract = v;                                                                        // 1
    }                                                                                                   // 1
}, 4);                                                                                                  // 1
var web3 = void 0;                                                                                      // 1
module.watch(require("../lib/web3"), {                                                                  // 1
    web3: function (v) {                                                                                // 1
        web3 = v;                                                                                       // 1
    }                                                                                                   // 1
}, 5);                                                                                                  // 1
                                                                                                        //
var App = function (_Component) {                                                                       //
    (0, _inherits3.default)(App, _Component);                                                           //
                                                                                                        //
    function App(props) {                                                                               // 9
        (0, _classCallCheck3.default)(this, App);                                                       // 9
                                                                                                        //
        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));       // 9
                                                                                                        //
        _this.isRendered = false;                                                                       // 12
        _this.crownsaleAddress = "0xc619c512b83ad850d7236fcf5a1f9039a6f47645";                          // 13
        _this.tokenAddress = "0x7e5a24f052bcfeb82f1ab0cd4a6429c78bad9a4d";                              // 14
        _this.currentTab = 'CrownsaleContract';                                                         // 16
        web3.eth.defaultAccount = web3.eth.accounts[0];                                                 // 18
        return _this;                                                                                   // 9
    }                                                                                                   // 19
                                                                                                        //
    App.prototype.componentDidMount = function () {                                                     //
        function componentDidMount() {                                                                  //
            this.isRendered = true;                                                                     // 22
        }                                                                                               // 23
                                                                                                        //
        return componentDidMount;                                                                       //
    }();                                                                                                //
                                                                                                        //
    App.prototype.render = function () {                                                                //
        function render() {                                                                             //
            return React.createElement(                                                                 // 26
                "div",                                                                                  // 27
                {                                                                                       // 27
                    className: "container"                                                              // 27
                },                                                                                      // 27
                React.createElement(                                                                    // 28
                    "header",                                                                           // 28
                    null,                                                                               // 28
                    React.createElement(                                                                // 29
                        "h1",                                                                           // 29
                        null,                                                                           // 29
                        "Crownsale test"                                                                // 29
                    )                                                                                   // 29
                ),                                                                                      // 28
                React.createElement(                                                                    // 31
                    "ul",                                                                               // 31
                    null,                                                                               // 31
                    React.createElement(RegistrationPanel, {                                            // 32
                        ref: "RegPanel"                                                                 // 32
                    }),                                                                                 // 32
                    React.createElement(                                                                // 33
                        "div",                                                                          // 33
                        {                                                                               // 33
                            className: "tab"                                                            // 33
                        },                                                                              // 33
                        React.createElement(                                                            // 34
                            "button",                                                                   // 34
                            {                                                                           // 34
                                ref: "CrownsaleContractLink",                                           // 34
                                className: "tablinks",                                                  // 34
                                onClick: this.openTab.bind(this, 'CrownsaleContract')                   // 34
                            },                                                                          // 34
                            "Crownsale"                                                                 // 34
                        ),                                                                              // 34
                        React.createElement(                                                            // 35
                            "button",                                                                   // 35
                            {                                                                           // 35
                                ref: "CustomTokenContractLink",                                         // 35
                                className: "tablinks",                                                  // 35
                                onClick: this.openTab.bind(this, 'CustomTokenContract')                 // 35
                            },                                                                          // 35
                            "Custom token"                                                              // 35
                        )                                                                               // 35
                    ),                                                                                  // 33
                    React.createElement(CrownsaleContract, {                                            // 38
                        ref: "CrownsaleContract",                                                       // 38
                        className: "tabcontent",                                                        // 38
                        contractAddress: this.crownsaleAddress,                                         // 38
                        hide: this.currentTab != 'CrownsaleContract'                                    // 38
                    }),                                                                                 // 38
                    React.createElement(CustomTokenContract, {                                          // 39
                        ref: "CustomTokenContract",                                                     // 39
                        className: "tabcontent",                                                        // 39
                        contractAddress: this.tokenAddress,                                             // 39
                        hide: this.currentTab != 'CustomTokenContract'                                  // 39
                    })                                                                                  // 39
                )                                                                                       // 31
            );                                                                                          // 27
        }                                                                                               // 43
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    App.prototype.openTab = function () {                                                               //
        function openTab(tabId) {                                                                       //
            if (!this.isRendered || this.currentTab == tabId) {                                         // 46
                return;                                                                                 // 47
            }                                                                                           // 48
                                                                                                        //
            this.refs[tabId].show();                                                                    // 49
            this.refs[tabId + 'Link'].className += " active";                                           // 50
            this.refs[this.currentTab].hide();                                                          // 51
            this.refs[this.currentTab + 'Link'].className = this.refs[this.currentTab + 'Link'].className.replace(" active", "");
            this.currentTab = tabId;                                                                    // 53
        }                                                                                               // 54
                                                                                                        //
        return openTab;                                                                                 //
    }();                                                                                                //
                                                                                                        //
    return App;                                                                                         //
}(Component);                                                                                           //
                                                                                                        //
App.propTypes = {};                                                                                     // 57
module.exportDefault(createContainer(function () {                                                      // 1
    return {};                                                                                          // 61
}, App));                                                                                               // 63
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ContractFunc.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/ContractFunc.jsx                                                                          //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    "default": function () {                                                                            // 1
        return ContractFunc;                                                                            // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var React = void 0,                                                                                     // 1
    Component = void 0,                                                                                 // 1
    PropTypes = void 0;                                                                                 // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    },                                                                                                  // 1
    Component: function (v) {                                                                           // 1
        Component = v;                                                                                  // 1
    },                                                                                                  // 1
    PropTypes: function (v) {                                                                           // 1
        PropTypes = v;                                                                                  // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var createContainer = void 0;                                                                           // 1
module.watch(require("meteor/react-meteor-data"), {                                                     // 1
    createContainer: function (v) {                                                                     // 1
        createContainer = v;                                                                            // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
var web3 = void 0;                                                                                      // 1
module.watch(require("../lib/web3"), {                                                                  // 1
    web3: function (v) {                                                                                // 1
        web3 = v;                                                                                       // 1
    }                                                                                                   // 1
}, 2);                                                                                                  // 1
                                                                                                        //
var ContractFunc = function (_Component) {                                                              //
    (0, _inherits3.default)(ContractFunc, _Component);                                                  //
                                                                                                        //
    function ContractFunc() {                                                                           // 6
        (0, _classCallCheck3.default)(this, ContractFunc);                                              // 6
                                                                                                        //
        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));              // 6
                                                                                                        //
        _this.state = {                                                                                 // 9
            results: new Array()                                                                        // 10
        };                                                                                              // 9
        return _this;                                                                                   // 6
    }                                                                                                   // 12
                                                                                                        //
    ContractFunc.prototype.componentWillUnmount = function () {                                         //
        function componentWillUnmount() {}                                                              //
                                                                                                        //
        return componentWillUnmount;                                                                    //
    }();                                                                                                //
                                                                                                        //
    ContractFunc.prototype.componentWillUpdate = function () {                                          //
        function componentWillUpdate() {}                                                               //
                                                                                                        //
        return componentWillUpdate;                                                                     //
    }();                                                                                                //
                                                                                                        //
    ContractFunc.prototype.render = function () {                                                       //
        function render() {                                                                             //
            return React.createElement(                                                                 // 21
                "div",                                                                                  // 22
                {                                                                                       // 22
                    className: "panel-contractfunction"                                                 // 22
                },                                                                                      // 22
                React.createElement(                                                                    // 23
                    "div",                                                                              // 23
                    {                                                                                   // 23
                        style: {                                                                        // 23
                            width: 100 + '%',                                                           // 23
                            position: 'relative'                                                        // 23
                        }                                                                               // 23
                    },                                                                                  // 23
                    React.createElement(                                                                // 24
                        "button",                                                                       // 24
                        {                                                                               // 24
                            onClick: this.onClickFunction.bind(this),                                   // 24
                            style: {                                                                    // 24
                                width: 30 + '%',                                                        // 24
                                background: this.props.abielem.payable ? "#ff0004" : this.props.abielem.constant ? "#a4f2ff" : "#ff928f"
                            }                                                                           // 24
                        },                                                                              // 24
                        this.props.abielem.name                                                         // 25
                    ),                                                                                  // 24
                    this.renderInput()                                                                  // 27
                ),                                                                                      // 23
                React.createElement(                                                                    // 29
                    "div",                                                                              // 29
                    {                                                                                   // 29
                        className: "contractRealization-body"                                           // 29
                    },                                                                                  // 29
                    this.renderResults()                                                                // 30
                )                                                                                       // 29
            );                                                                                          // 22
        }                                                                                               // 34
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    ContractFunc.prototype.renderInput = function () {                                                  //
        function renderInput() {                                                                        //
            var inputs = this.props.abielem.inputs;                                                     // 38
            var isPayable = this.props.abielem.payable;                                                 // 39
            var isInputs = inputs.length != 0;                                                          // 40
                                                                                                        //
            if (!isInputs && !isPayable) {                                                              // 41
                return;                                                                                 // 42
            }                                                                                           // 43
                                                                                                        //
            var inputArray = new Array();                                                               // 44
                                                                                                        //
            if (isInputs) {                                                                             // 45
                var placeholder = '';                                                                   // 46
                var texts = inputs.map(function (input) {                                               // 47
                    return input.type + " " + input.name;                                               // 48
                });                                                                                     // 49
                                                                                                        //
                for (var elem in meteorBabelHelpers.sanitizeForInObject(texts)) {                       // 50
                    placeholder += texts[elem] + ',';                                                   // 51
                }                                                                                       // 52
                                                                                                        //
                inputArray.push(React.createElement("input", {                                          // 53
                    className: "form-control",                                                          // 54
                    type: "text",                                                                       // 55
                    ref: "textInput",                                                                   // 56
                    placeholder: placeholder,                                                           // 57
                    style: {                                                                            // 58
                        width: (isInputs && isPayable ? 30 : isInputs ? 60 : 0) + '%'                   // 58
                    }                                                                                   // 58
                }));                                                                                    // 53
            }                                                                                           // 60
                                                                                                        //
            if (isPayable) {                                                                            // 62
                inputArray.push(React.createElement("input", {                                          // 63
                    className: "form-control",                                                          // 65
                    type: "number",                                                                     // 66
                    ref: "textValue",                                                                   // 67
                    placeholder: "value in ether",                                                      // 68
                    style: {                                                                            // 69
                        width: (isInputs && isPayable ? 30 : isPayable ? 60 : 0) + '%'                  // 69
                    }                                                                                   // 69
                }));                                                                                    // 64
            }                                                                                           // 71
                                                                                                        //
            return inputArray;                                                                          // 73
        }                                                                                               // 74
                                                                                                        //
        return renderInput;                                                                             //
    }();                                                                                                //
                                                                                                        //
    ContractFunc.prototype.renderResults = function () {                                                //
        function renderResults() {                                                                      //
            var _this2 = this;                                                                          // 76
                                                                                                        //
            if (!this.state.results || this.state.results.length == 0) {                                // 77
                return;                                                                                 // 78
            }                                                                                           // 79
                                                                                                        //
            return this.state.results.map(function (result) {                                           // 80
                if (result instanceof Error) {                                                          // 81
                    return React.createElement(                                                         // 82
                        "div",                                                                          // 83
                        null,                                                                           // 83
                        result.name,                                                                    // 84
                        React.createElement("hr", null)                                                 // 85
                    );                                                                                  // 83
                } else {                                                                                // 88
                    if (_this2.props.abielem.constant) {                                                // 90
                        return React.createElement(                                                     // 91
                            "div",                                                                      // 92
                            null,                                                                       // 92
                            React.createElement(                                                        // 93
                                "div",                                                                  // 93
                                null,                                                                   // 93
                                React.createElement(                                                    // 94
                                    "strong",                                                           // 94
                                    null,                                                               // 94
                                    "Value:"                                                            // 94
                                ),                                                                      // 94
                                result.value.toString()                                                 // 95
                            ),                                                                          // 93
                            React.createElement("hr", null)                                             // 97
                        );                                                                              // 92
                    } else {                                                                            // 99
                        return React.createElement(                                                     // 100
                            "div",                                                                      // 101
                            null,                                                                       // 101
                            React.createElement(                                                        // 102
                                "div",                                                                  // 102
                                null,                                                                   // 102
                                React.createElement(                                                    // 103
                                    "strong",                                                           // 103
                                    null,                                                               // 103
                                    "Result:"                                                           // 103
                                ),                                                                      // 103
                                React.createElement(                                                    // 104
                                    "pre",                                                              // 104
                                    null,                                                               // 104
                                    "{" + JSON.stringify(result.value).replace(/,|{|}/gi, '\n') + "}"   // 104
                                )                                                                       // 104
                            ),                                                                          // 102
                            React.createElement("hr", null)                                             // 106
                        );                                                                              // 101
                    }                                                                                   // 108
                }                                                                                       // 109
            });                                                                                         // 110
        }                                                                                               // 112
                                                                                                        //
        return renderResults;                                                                           //
    }();                                                                                                //
                                                                                                        //
    ContractFunc.prototype.onClickFunction = function () {                                              //
        function onClickFunction() {                                                                    //
            try {                                                                                       // 115
                var name = this.props.abielem.name;                                                     // 116
                var argArray = new Array();                                                             // 117
                                                                                                        //
                if (this.refs.textInput) {                                                              // 118
                    argArray = this.refs.textInput.value.trim().split(',');                             // 120
                }                                                                                       // 121
                                                                                                        //
                argArray.push({                                                                         // 123
                    from: web3.eth.defaultAccount                                                       // 123
                });                                                                                     // 123
                                                                                                        //
                if (this.props.abielem.payable) {                                                       // 124
                    argArray.push({                                                                     // 125
                        value: (parseInt(this.refs.textValue.value) * 1000000000000000000).toString()   // 125
                    });                                                                                 // 125
                }                                                                                       // 126
                                                                                                        //
                var result = this.props.abielem.constant ? this.props.contractRealization[name].call.apply(null, argArray) : web3.eth.getTransactionReceipt(this.props.contractRealization[name].sendTransaction.apply(null, argArray));
                var newResult = this.state.results;                                                     // 128
                                                                                                        //
                if (!this.refs.textInput && this.props.abielem.constant) {                              // 129
                    newResult = new Array();                                                            // 130
                }                                                                                       // 131
                                                                                                        //
                newResult.push({                                                                        // 132
                    value: result                                                                       // 133
                });                                                                                     // 132
                this.setState({                                                                         // 135
                    results: newResult                                                                  // 136
                });                                                                                     // 135
            } catch (err) {                                                                             // 138
                var _newResult = this.state.results;                                                    // 139
                                                                                                        //
                _newResult.push(err);                                                                   // 140
                                                                                                        //
                this.setState({                                                                         // 141
                    results: _newResult                                                                 // 142
                });                                                                                     // 141
            }                                                                                           // 144
        }                                                                                               // 145
                                                                                                        //
        return onClickFunction;                                                                         //
    }();                                                                                                //
                                                                                                        //
    return ContractFunc;                                                                                //
}(Component);                                                                                           //
                                                                                                        //
ContractFunc.propTypes = {                                                                              // 149
    // This component gets the task to display through a React prop.                                    // 150
    // We can use propTypes to indicate it is required                                                  // 151
    contractRealization: PropTypes.object.isRequired,                                                   // 152
    abielem: PropTypes.object.isRequired                                                                // 153
};                                                                                                      // 149
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"CrownsaleContract.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/CrownsaleContract.jsx                                                                     //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    "default": function () {                                                                            // 1
        return CrownsaleContract;                                                                       // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var React = void 0,                                                                                     // 1
    Component = void 0,                                                                                 // 1
    PropTypes = void 0;                                                                                 // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    },                                                                                                  // 1
    Component: function (v) {                                                                           // 1
        Component = v;                                                                                  // 1
    },                                                                                                  // 1
    PropTypes: function (v) {                                                                           // 1
        PropTypes = v;                                                                                  // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var web3 = void 0;                                                                                      // 1
module.watch(require("../lib/web3"), {                                                                  // 1
    web3: function (v) {                                                                                // 1
        web3 = v;                                                                                       // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
var ContractFunc = void 0;                                                                              // 1
module.watch(require("./ContractFunc"), {                                                               // 1
    "default": function (v) {                                                                           // 1
        ContractFunc = v;                                                                               // 1
    }                                                                                                   // 1
}, 2);                                                                                                  // 1
                                                                                                        //
var CrownsaleContract = function (_Component) {                                                         //
    (0, _inherits3.default)(CrownsaleContract, _Component);                                             //
                                                                                                        //
    function CrownsaleContract(props) {                                                                 // 7
        (0, _classCallCheck3.default)(this, CrownsaleContract);                                         // 7
                                                                                                        //
        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));       // 7
                                                                                                        //
        _this.isRendered = false;                                                                       // 10
        var browser_untitled1_sol_crowdsaleContract = web3.eth.contract([{                              // 12
            "constant": false,                                                                          // 12
            "inputs": [],                                                                               // 12
            "name": "createTokens",                                                                     // 12
            "outputs": [],                                                                              // 12
            "payable": true,                                                                            // 12
            "stateMutability": "payable",                                                               // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": true,                                                                           // 12
            "inputs": [],                                                                               // 12
            "name": "token",                                                                            // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "address"                                                                       // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "view",                                                                  // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "inputs": [],                                                                               // 12
            "payable": false,                                                                           // 12
            "stateMutability": "nonpayable",                                                            // 12
            "type": "constructor"                                                                       // 12
        }, {                                                                                            // 12
            "payable": true,                                                                            // 12
            "stateMutability": "payable",                                                               // 12
            "type": "fallback"                                                                          // 12
        }]);                                                                                            // 12
        _this.contract = browser_untitled1_sol_crowdsaleContract.at(_this.props.contractAddress);       // 13
        return _this;                                                                                   // 7
    }                                                                                                   // 15
                                                                                                        //
    CrownsaleContract.prototype.render = function () {                                                  //
        function render() {                                                                             //
            if (!this.contract) {                                                                       // 18
                return;                                                                                 // 19
            }                                                                                           // 20
                                                                                                        //
            return React.createElement(                                                                 // 21
                "div",                                                                                  // 22
                {                                                                                       // 22
                    className: "panel",                                                                 // 22
                    ref: "panel"                                                                        // 22
                },                                                                                      // 22
                React.createElement(                                                                    // 23
                    "div",                                                                              // 23
                    {                                                                                   // 23
                        className: "panel-heading"                                                      // 23
                    },                                                                                  // 23
                    "Crownsale (",                                                                      // 23
                    this.props.contractAddress,                                                         // 24
                    ")"                                                                                 // 23
                ),                                                                                      // 23
                React.createElement(                                                                    // 26
                    "div",                                                                              // 26
                    {                                                                                   // 26
                        className: "panel-body"                                                         // 26
                    },                                                                                  // 26
                    React.createElement(                                                                // 27
                        "p",                                                                            // 27
                        null,                                                                           // 27
                        this.renderAbi()                                                                // 27
                    )                                                                                   // 27
                )                                                                                       // 26
            );                                                                                          // 22
        }                                                                                               // 31
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    CrownsaleContract.prototype.renderAbi = function () {                                               //
        function renderAbi() {                                                                          //
            if (this.contract.abi.length == 0) {                                                        // 34
                return;                                                                                 // 35
            }                                                                                           // 36
                                                                                                        //
            var funcAbi = this.contract.abi.filter(function (elem) {                                    // 37
                return elem.type == 'function';                                                         // 37
            }).sort(function (x, y) {                                                                   // 37
                return !(x.constant || !x.constant && !y.constant);                                     // 38
            });                                                                                         // 39
            var result = new Array();                                                                   // 40
                                                                                                        //
            for (var i = 0; i < funcAbi.length; i++) {                                                  // 41
                result.push(React.createElement(ContractFunc, {                                         // 42
                    contractRealization: this.contract,                                                 // 43
                    abielem: funcAbi[i]                                                                 // 43
                }));                                                                                    // 43
            }                                                                                           // 45
                                                                                                        //
            return result;                                                                              // 46
        }                                                                                               // 47
                                                                                                        //
        return renderAbi;                                                                               //
    }();                                                                                                //
                                                                                                        //
    CrownsaleContract.prototype.componentDidMount = function () {                                       //
        function componentDidMount() {                                                                  //
            this.isRendered = true;                                                                     // 50
                                                                                                        //
            if (!this.props.hide) {                                                                     // 51
                this.show();                                                                            // 52
            } else {                                                                                    // 53
                this.hide();                                                                            // 54
            }                                                                                           // 55
        }                                                                                               // 56
                                                                                                        //
        return componentDidMount;                                                                       //
    }();                                                                                                //
                                                                                                        //
    CrownsaleContract.prototype.show = function () {                                                    //
        function show() {                                                                               //
            this.refs.panel.style.display = 'block';                                                    // 59
            this.props.hide = false;                                                                    // 60
        }                                                                                               // 61
                                                                                                        //
        return show;                                                                                    //
    }();                                                                                                //
                                                                                                        //
    CrownsaleContract.prototype.hide = function () {                                                    //
        function hide() {                                                                               //
            this.refs.panel.style.display = 'none';                                                     // 64
            this.props.hide = true;                                                                     // 65
        }                                                                                               // 66
                                                                                                        //
        return hide;                                                                                    //
    }();                                                                                                //
                                                                                                        //
    return CrownsaleContract;                                                                           //
}(Component);                                                                                           //
                                                                                                        //
CrownsaleContract.propTypes = {                                                                         // 69
    contractAddress: PropTypes.string.isRequired,                                                       // 70
    hide: PropTypes.bool.isRequired                                                                     // 71
};                                                                                                      // 69
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"CustomTokenContract.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/CustomTokenContract.jsx                                                                   //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    "default": function () {                                                                            // 1
        return CustomTokenContract;                                                                     // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var React = void 0,                                                                                     // 1
    Component = void 0,                                                                                 // 1
    PropTypes = void 0;                                                                                 // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    },                                                                                                  // 1
    Component: function (v) {                                                                           // 1
        Component = v;                                                                                  // 1
    },                                                                                                  // 1
    PropTypes: function (v) {                                                                           // 1
        PropTypes = v;                                                                                  // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var web3 = void 0;                                                                                      // 1
module.watch(require("../lib/web3"), {                                                                  // 1
    web3: function (v) {                                                                                // 1
        web3 = v;                                                                                       // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
var ContractFunc = void 0;                                                                              // 1
module.watch(require("./ContractFunc"), {                                                               // 1
    "default": function (v) {                                                                           // 1
        ContractFunc = v;                                                                               // 1
    }                                                                                                   // 1
}, 2);                                                                                                  // 1
                                                                                                        //
var CustomTokenContract = function (_Component) {                                                       //
    (0, _inherits3.default)(CustomTokenContract, _Component);                                           //
                                                                                                        //
    function CustomTokenContract(props) {                                                               // 7
        (0, _classCallCheck3.default)(this, CustomTokenContract);                                       // 7
                                                                                                        //
        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));       // 7
                                                                                                        //
        _this.isRendered = false;                                                                       // 10
        var browser_untitled1_sol_customtokencoinContract = web3.eth.contract([{                        // 12
            "constant": true,                                                                           // 12
            "inputs": [],                                                                               // 12
            "name": "mintingFinished",                                                                  // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "bool"                                                                          // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "view",                                                                  // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": true,                                                                           // 12
            "inputs": [],                                                                               // 12
            "name": "name",                                                                             // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "string"                                                                        // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "view",                                                                  // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": false,                                                                          // 12
            "inputs": [{                                                                                // 12
                "name": "_spender",                                                                     // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "name": "_value",                                                                       // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "name": "approve",                                                                          // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "bool"                                                                          // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "nonpayable",                                                            // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": true,                                                                           // 12
            "inputs": [],                                                                               // 12
            "name": "totalSupply",                                                                      // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "view",                                                                  // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": false,                                                                          // 12
            "inputs": [{                                                                                // 12
                "name": "_from",                                                                        // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "name": "_to",                                                                          // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "name": "_value",                                                                       // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "name": "transferFrom",                                                                     // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "bool"                                                                          // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "nonpayable",                                                            // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": true,                                                                           // 12
            "inputs": [],                                                                               // 12
            "name": "decimals",                                                                         // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "uint32"                                                                        // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "view",                                                                  // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": false,                                                                          // 12
            "inputs": [{                                                                                // 12
                "name": "_to",                                                                          // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "name": "_amount",                                                                      // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "name": "mint",                                                                             // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "bool"                                                                          // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "nonpayable",                                                            // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": true,                                                                           // 12
            "inputs": [{                                                                                // 12
                "name": "_owner",                                                                       // 12
                "type": "address"                                                                       // 12
            }],                                                                                         // 12
            "name": "balanceOf",                                                                        // 12
            "outputs": [{                                                                               // 12
                "name": "balance",                                                                      // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "view",                                                                  // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": false,                                                                          // 12
            "inputs": [],                                                                               // 12
            "name": "finishMinting",                                                                    // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "bool"                                                                          // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "nonpayable",                                                            // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": true,                                                                           // 12
            "inputs": [],                                                                               // 12
            "name": "owner",                                                                            // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "address"                                                                       // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "view",                                                                  // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": true,                                                                           // 12
            "inputs": [],                                                                               // 12
            "name": "symbol",                                                                           // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "string"                                                                        // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "view",                                                                  // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": false,                                                                          // 12
            "inputs": [{                                                                                // 12
                "name": "_to",                                                                          // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "name": "_value",                                                                       // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "name": "transfer",                                                                         // 12
            "outputs": [{                                                                               // 12
                "name": "",                                                                             // 12
                "type": "bool"                                                                          // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "nonpayable",                                                            // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": true,                                                                           // 12
            "inputs": [{                                                                                // 12
                "name": "_owner",                                                                       // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "name": "_spender",                                                                     // 12
                "type": "address"                                                                       // 12
            }],                                                                                         // 12
            "name": "allowance",                                                                        // 12
            "outputs": [{                                                                               // 12
                "name": "remaining",                                                                    // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "payable": false,                                                                           // 12
            "stateMutability": "view",                                                                  // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "constant": false,                                                                          // 12
            "inputs": [{                                                                                // 12
                "name": "newOwner",                                                                     // 12
                "type": "address"                                                                       // 12
            }],                                                                                         // 12
            "name": "transferOwnership",                                                                // 12
            "outputs": [],                                                                              // 12
            "payable": false,                                                                           // 12
            "stateMutability": "nonpayable",                                                            // 12
            "type": "function"                                                                          // 12
        }, {                                                                                            // 12
            "anonymous": false,                                                                         // 12
            "inputs": [{                                                                                // 12
                "indexed": true,                                                                        // 12
                "name": "to",                                                                           // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "indexed": false,                                                                       // 12
                "name": "amount",                                                                       // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "name": "Mint",                                                                             // 12
            "type": "event"                                                                             // 12
        }, {                                                                                            // 12
            "anonymous": false,                                                                         // 12
            "inputs": [],                                                                               // 12
            "name": "MintFinished",                                                                     // 12
            "type": "event"                                                                             // 12
        }, {                                                                                            // 12
            "anonymous": false,                                                                         // 12
            "inputs": [{                                                                                // 12
                "indexed": true,                                                                        // 12
                "name": "owner",                                                                        // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "indexed": true,                                                                        // 12
                "name": "spender",                                                                      // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "indexed": false,                                                                       // 12
                "name": "value",                                                                        // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "name": "Approval",                                                                         // 12
            "type": "event"                                                                             // 12
        }, {                                                                                            // 12
            "anonymous": false,                                                                         // 12
            "inputs": [{                                                                                // 12
                "indexed": true,                                                                        // 12
                "name": "from",                                                                         // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "indexed": true,                                                                        // 12
                "name": "to",                                                                           // 12
                "type": "address"                                                                       // 12
            }, {                                                                                        // 12
                "indexed": false,                                                                       // 12
                "name": "value",                                                                        // 12
                "type": "uint256"                                                                       // 12
            }],                                                                                         // 12
            "name": "Transfer",                                                                         // 12
            "type": "event"                                                                             // 12
        }]);                                                                                            // 12
        _this.contract = browser_untitled1_sol_customtokencoinContract.at(_this.props.contractAddress);
        return _this;                                                                                   // 7
    }                                                                                                   // 14
                                                                                                        //
    CustomTokenContract.prototype.render = function () {                                                //
        function render() {                                                                             //
            if (!this.contract) {                                                                       // 17
                return;                                                                                 // 18
            }                                                                                           // 19
                                                                                                        //
            return React.createElement(                                                                 // 20
                "div",                                                                                  // 21
                {                                                                                       // 21
                    className: "panel",                                                                 // 21
                    ref: "panel"                                                                        // 21
                },                                                                                      // 21
                React.createElement(                                                                    // 22
                    "div",                                                                              // 22
                    {                                                                                   // 22
                        className: "panel-heading"                                                      // 22
                    },                                                                                  // 22
                    "CustomTokenCoin (",                                                                // 22
                    this.props.contractAddress,                                                         // 23
                    ")"                                                                                 // 22
                ),                                                                                      // 22
                React.createElement(                                                                    // 25
                    "div",                                                                              // 25
                    {                                                                                   // 25
                        className: "panel-body"                                                         // 25
                    },                                                                                  // 25
                    React.createElement(                                                                // 26
                        "p",                                                                            // 26
                        null,                                                                           // 26
                        this.renderAbi()                                                                // 26
                    )                                                                                   // 26
                )                                                                                       // 25
            );                                                                                          // 21
        }                                                                                               // 30
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    CustomTokenContract.prototype.renderAbi = function () {                                             //
        function renderAbi() {                                                                          //
            if (this.contract.abi.length == 0) {                                                        // 33
                return;                                                                                 // 34
            }                                                                                           // 35
                                                                                                        //
            var funcAbi = this.contract.abi.filter(function (elem) {                                    // 36
                return elem.type == 'function';                                                         // 36
            }).sort(function (x, y) {                                                                   // 36
                return !(x.constant || !x.constant && !y.constant);                                     // 37
            });                                                                                         // 38
            var result = new Array();                                                                   // 39
                                                                                                        //
            for (var i = 0; i < funcAbi.length; i++) {                                                  // 40
                result.push(React.createElement(ContractFunc, {                                         // 41
                    contractRealization: this.contract,                                                 // 42
                    abielem: funcAbi[i]                                                                 // 42
                }));                                                                                    // 42
            }                                                                                           // 44
                                                                                                        //
            return result;                                                                              // 45
        }                                                                                               // 46
                                                                                                        //
        return renderAbi;                                                                               //
    }();                                                                                                //
                                                                                                        //
    CustomTokenContract.prototype.componentDidMount = function () {                                     //
        function componentDidMount() {                                                                  //
            this.isRendered = true;                                                                     // 49
                                                                                                        //
            if (!this.props.hide) {                                                                     // 50
                this.show();                                                                            // 51
            } else {                                                                                    // 52
                this.hide();                                                                            // 53
            }                                                                                           // 54
        }                                                                                               // 55
                                                                                                        //
        return componentDidMount;                                                                       //
    }();                                                                                                //
                                                                                                        //
    CustomTokenContract.prototype.show = function () {                                                  //
        function show() {                                                                               //
            this.refs.panel.style.display = 'block';                                                    // 58
            this.props.hide = false;                                                                    // 59
        }                                                                                               // 60
                                                                                                        //
        return show;                                                                                    //
    }();                                                                                                //
                                                                                                        //
    CustomTokenContract.prototype.hide = function () {                                                  //
        function hide() {                                                                               //
            this.refs.panel.style.display = 'none';                                                     // 63
            this.props.hide = true;                                                                     // 64
        }                                                                                               // 65
                                                                                                        //
        return hide;                                                                                    //
    }();                                                                                                //
                                                                                                        //
    return CustomTokenContract;                                                                         //
}(Component);                                                                                           //
                                                                                                        //
CustomTokenContract.propTypes = {                                                                       // 68
    contractAddress: PropTypes.string.isRequired,                                                       // 69
    hide: PropTypes.bool.isRequired                                                                     // 70
};                                                                                                      // 68
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RegistrationPanel.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/ui/RegistrationPanel.jsx                                                                     //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                 //
                                                                                                        //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                        //
                                                                                                        //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");           //
                                                                                                        //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                  //
                                                                                                        //
var _inherits2 = require("babel-runtime/helpers/inherits");                                             //
                                                                                                        //
var _inherits3 = _interopRequireDefault(_inherits2);                                                    //
                                                                                                        //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }       //
                                                                                                        //
module.export({                                                                                         // 1
    "default": function () {                                                                            // 1
        return RegistrationPanel;                                                                       // 1
    }                                                                                                   // 1
});                                                                                                     // 1
var React = void 0,                                                                                     // 1
    Component = void 0,                                                                                 // 1
    PropTypes = void 0;                                                                                 // 1
module.watch(require("react"), {                                                                        // 1
    "default": function (v) {                                                                           // 1
        React = v;                                                                                      // 1
    },                                                                                                  // 1
    Component: function (v) {                                                                           // 1
        Component = v;                                                                                  // 1
    },                                                                                                  // 1
    PropTypes: function (v) {                                                                           // 1
        PropTypes = v;                                                                                  // 1
    }                                                                                                   // 1
}, 0);                                                                                                  // 1
var web3 = void 0;                                                                                      // 1
module.watch(require("../lib/web3"), {                                                                  // 1
    web3: function (v) {                                                                                // 1
        web3 = v;                                                                                       // 1
    }                                                                                                   // 1
}, 1);                                                                                                  // 1
                                                                                                        //
var RegistrationPanel = function (_Component) {                                                         //
    (0, _inherits3.default)(RegistrationPanel, _Component);                                             //
                                                                                                        //
    function RegistrationPanel(props) {                                                                 // 5
        (0, _classCallCheck3.default)(this, RegistrationPanel);                                         // 5
                                                                                                        //
        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));       // 5
                                                                                                        //
        _this.isRendered = false;                                                                       // 8
        _this.state = {                                                                                 // 10
            balance: web3.eth.getBalance(web3.eth.defaultAccount)                                       // 11
        };                                                                                              // 10
        _this.updateBalance = setInterval(function () {                                                 // 13
            var newBalance = web3.eth.getBalance(web3.eth.defaultAccount);                              // 14
                                                                                                        //
            if (this.state.balance.equals(newBalance)) {                                                // 15
                return;                                                                                 // 16
            }                                                                                           // 17
                                                                                                        //
            this.setState({                                                                             // 18
                balance: newBalance                                                                     // 19
            });                                                                                         // 18
        }.bind(_this), 1000);                                                                           // 21
        return _this;                                                                                   // 5
    }                                                                                                   // 22
                                                                                                        //
    RegistrationPanel.prototype.render = function () {                                                  //
        function render() {                                                                             //
            return React.createElement(                                                                 // 25
                "div",                                                                                  // 26
                {                                                                                       // 26
                    className: "panel",                                                                 // 26
                    ref: "panel"                                                                        // 26
                },                                                                                      // 26
                React.createElement(                                                                    // 27
                    "div",                                                                              // 27
                    {                                                                                   // 27
                        className: "panel-body"                                                         // 27
                    },                                                                                  // 27
                    React.createElement(                                                                // 28
                        "h1",                                                                           // 28
                        null,                                                                           // 28
                        "Current account"                                                               // 28
                    ),                                                                                  // 28
                    React.createElement(                                                                // 29
                        "p",                                                                            // 29
                        null,                                                                           // 29
                        this.renderAccountSelector(),                                                   // 29
                        " ",                                                                            // 29
                        React.createElement(                                                            // 29
                            "button",                                                                   // 29
                            {                                                                           // 29
                                onClick: this.handleUnlock.bind(this)                                   // 29
                            },                                                                          // 29
                            "Unlock"                                                                    // 29
                        )                                                                               // 29
                    ),                                                                                  // 29
                    React.createElement(                                                                // 30
                        "p",                                                                            // 30
                        null,                                                                           // 30
                        (this.state.balance / 1000000000000000000).toString(),                          // 30
                        " ether"                                                                        // 30
                    )                                                                                   // 30
                )                                                                                       // 27
            );                                                                                          // 26
        }                                                                                               // 34
                                                                                                        //
        return render;                                                                                  //
    }();                                                                                                //
                                                                                                        //
    RegistrationPanel.prototype.renderAccountSelector = function () {                                   //
        function renderAccountSelector() {                                                              //
            var transSelector = web3.eth.accounts.map(function (trans) {                                // 37
                return React.createElement(                                                             // 37
                    "option",                                                                           // 38
                    {                                                                                   // 38
                        value: trans                                                                    // 38
                    },                                                                                  // 38
                    trans                                                                               // 38
                );                                                                                      // 38
            });                                                                                         // 37
            return React.createElement(                                                                 // 40
                "select",                                                                               // 41
                {                                                                                       // 41
                    type: "accountOption",                                                              // 41
                    ref: "accountSelector",                                                             // 41
                    onChange: this.handleEnter.bind(this)                                               // 41
                },                                                                                      // 41
                transSelector                                                                           // 42
            );                                                                                          // 41
        }                                                                                               // 45
                                                                                                        //
        return renderAccountSelector;                                                                   //
    }();                                                                                                //
                                                                                                        //
    RegistrationPanel.prototype.handleEnter = function () {                                             //
        function handleEnter() {                                                                        //
            web3.eth.defaultAccount = this.refs.accountSelector.value;                                  // 48
            this.forceUpdate();                                                                         // 49
        }                                                                                               // 50
                                                                                                        //
        return handleEnter;                                                                             //
    }();                                                                                                //
                                                                                                        //
    RegistrationPanel.prototype.handleUnlock = function () {                                            //
        function handleUnlock() {                                                                       //
            var password = prompt("Enter password for unlock", "Password");                             // 53
            var result = web3.personal.unlockAccount(web3.eth.defaultAccount, password);                // 54
            console.log(result);                                                                        // 55
        }                                                                                               // 56
                                                                                                        //
        return handleUnlock;                                                                            //
    }();                                                                                                //
                                                                                                        //
    return RegistrationPanel;                                                                           //
}(Component);                                                                                           //
                                                                                                        //
RegistrationPanel.propTypes = {};                                                                       // 59
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".jsx",
    ".css"
  ]
});
require("./client/template.main.js");
require("./client/main.js");