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
                "section",                                                                              // 22
                {                                                                                       // 22
                    className: "container"                                                              // 22
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
                                background: this.props.abielem.constant ? "#a4f2ff" : "#ff928f"         // 24
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
            var inputs = this.props.abielem.inputs;                                                     // 37
                                                                                                        //
            if (inputs.length == 0) {                                                                   // 38
                return;                                                                                 // 39
            }                                                                                           // 40
                                                                                                        //
            var texts = inputs.map(function (input) {                                                   // 41
                return input.type + " " + input.name;                                                   // 42
            });                                                                                         // 43
            var placeholder = '';                                                                       // 44
                                                                                                        //
            for (var elem in meteorBabelHelpers.sanitizeForInObject(texts)) {                           // 45
                placeholder += texts[elem] + ',';                                                       // 46
            }                                                                                           // 47
                                                                                                        //
            return React.createElement("input", {                                                       // 48
                className: "form-control",                                                              // 50
                type: "text",                                                                           // 51
                ref: "textInput",                                                                       // 52
                placeholder: placeholder,                                                               // 53
                style: {                                                                                // 54
                    width: 60 + '%'                                                                     // 54
                }                                                                                       // 54
            });                                                                                         // 49
        }                                                                                               // 57
                                                                                                        //
        return renderInput;                                                                             //
    }();                                                                                                //
                                                                                                        //
    ContractFunc.prototype.renderResults = function () {                                                //
        function renderResults() {                                                                      //
            var _this2 = this;                                                                          // 59
                                                                                                        //
            if (!this.state.results || this.state.results.length == 0) {                                // 60
                return;                                                                                 // 61
            }                                                                                           // 62
                                                                                                        //
            return this.state.results.map(function (result) {                                           // 63
                if (result instanceof Error) {                                                          // 64
                    return React.createElement(                                                         // 65
                        "div",                                                                          // 66
                        null,                                                                           // 66
                        result.name,                                                                    // 67
                        React.createElement("hr", null)                                                 // 68
                    );                                                                                  // 66
                } else {                                                                                // 71
                    if (_this2.props.abielem.constant) {                                                // 73
                        return React.createElement(                                                     // 74
                            "div",                                                                      // 75
                            null,                                                                       // 75
                            React.createElement(                                                        // 76
                                "div",                                                                  // 76
                                null,                                                                   // 76
                                React.createElement(                                                    // 77
                                    "strong",                                                           // 77
                                    null,                                                               // 77
                                    "Value:"                                                            // 77
                                ),                                                                      // 77
                                result.value.toString()                                                 // 78
                            ),                                                                          // 76
                            React.createElement("hr", null)                                             // 80
                        );                                                                              // 75
                    } else {                                                                            // 82
                        return React.createElement(                                                     // 83
                            "div",                                                                      // 84
                            null,                                                                       // 84
                            React.createElement(                                                        // 85
                                "div",                                                                  // 85
                                null,                                                                   // 85
                                React.createElement(                                                    // 86
                                    "strong",                                                           // 86
                                    null,                                                               // 86
                                    "Result:"                                                           // 86
                                ),                                                                      // 86
                                React.createElement(                                                    // 87
                                    "pre",                                                              // 87
                                    null,                                                               // 87
                                    "{" + JSON.stringify(result.value).replace(/,|{|}/gi, '\n') + "}"   // 87
                                )                                                                       // 87
                            ),                                                                          // 85
                            React.createElement("hr", null)                                             // 89
                        );                                                                              // 84
                    }                                                                                   // 91
                }                                                                                       // 92
            });                                                                                         // 93
        }                                                                                               // 95
                                                                                                        //
        return renderResults;                                                                           //
    }();                                                                                                //
                                                                                                        //
    ContractFunc.prototype.onClickFunction = function () {                                              //
        function onClickFunction() {                                                                    //
            try {                                                                                       // 98
                var name = this.props.abielem.name;                                                     // 99
                var argArray = new Array();                                                             // 100
                                                                                                        //
                if (this.refs.textInput) {                                                              // 101
                    argArray = this.refs.textInput.value.trim().split(',');                             // 103
                }                                                                                       // 104
                                                                                                        //
                argArray.push({                                                                         // 106
                    from: web3.eth.defaultAccount                                                       // 106
                });                                                                                     // 106
                var result = this.props.abielem.constant ? this.props.contractRealization[name].call.apply(null, argArray) : web3.eth.getTransactionReceipt(this.props.contractRealization[name].sendTransaction.apply(null, argArray));
                var newResult = this.state.results;                                                     // 108
                                                                                                        //
                if (!this.refs.textInput && this.props.abielem.constant) {                              // 109
                    newResult = new Array();                                                            // 110
                }                                                                                       // 111
                                                                                                        //
                newResult.push({                                                                        // 112
                    value: result                                                                       // 113
                });                                                                                     // 112
                this.setState({                                                                         // 115
                    results: newResult                                                                  // 116
                });                                                                                     // 115
            } catch (err) {                                                                             // 118
                var _newResult = this.state.results;                                                    // 119
                                                                                                        //
                _newResult.push(err);                                                                   // 120
                                                                                                        //
                this.setState({                                                                         // 121
                    results: _newResult                                                                 // 122
                });                                                                                     // 121
            }                                                                                           // 124
        }                                                                                               // 125
                                                                                                        //
        return onClickFunction;                                                                         //
    }();                                                                                                //
                                                                                                        //
    return ContractFunc;                                                                                //
}(Component);                                                                                           //
                                                                                                        //
ContractFunc.propTypes = {                                                                              // 129
    // This component gets the task to display through a React prop.                                    // 130
    // We can use propTypes to indicate it is required                                                  // 131
    contractRealization: PropTypes.object.isRequired,                                                   // 132
    abielem: PropTypes.object.isRequired                                                                // 133
};                                                                                                      // 129
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
        _this.contract = browser_untitled1_sol_crowdsaleContract.at(_this.props.contractAddress);       // 13
        return _this;                                                                                   // 7
    }                                                                                                   // 14
                                                                                                        //
    CrownsaleContract.prototype.render = function () {                                                  //
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
                    "Crownsale (",                                                                      // 22
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
    CrownsaleContract.prototype.renderAbi = function () {                                               //
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
    CrownsaleContract.prototype.componentDidMount = function () {                                       //
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
    CrownsaleContract.prototype.show = function () {                                                    //
        function show() {                                                                               //
            this.refs.panel.style.display = 'block';                                                    // 58
            this.props.hide = false;                                                                    // 59
        }                                                                                               // 60
                                                                                                        //
        return show;                                                                                    //
    }();                                                                                                //
                                                                                                        //
    CrownsaleContract.prototype.hide = function () {                                                    //
        function hide() {                                                                               //
            this.refs.panel.style.display = 'none';                                                     // 63
            this.props.hide = true;                                                                     // 64
        }                                                                                               // 65
                                                                                                        //
        return hide;                                                                                    //
    }();                                                                                                //
                                                                                                        //
    return CrownsaleContract;                                                                           //
}(Component);                                                                                           //
                                                                                                        //
CrownsaleContract.propTypes = {                                                                         // 68
    contractAddress: PropTypes.string.isRequired,                                                       // 69
    hide: PropTypes.bool.isRequired                                                                     // 70
};                                                                                                      // 68
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