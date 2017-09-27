//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package['templating-runtime'].Template;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var BigNumber = Package['ethereum:web3'].BigNumber;
var Web3 = Package['ethereum:web3'].Web3;
var EthTools = Package['ethereum:tools'].EthTools;
var LocalStore = Package['frozeman:storage'].LocalStore;
var TemplateVar = Package['frozeman:template-var'].TemplateVar;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var EthElements, data, i;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/ethelements.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  // 1
Template Controllers                                                                                                 // 2
                                                                                                                     // 3
@module Packages                                                                                                     // 4
*/                                                                                                                   // 5
                                                                                                                     // 6
                                                                                                                     // 7
/**                                                                                                                  // 8
Helper elements for ethereum dapps                                                                                   // 9
                                                                                                                     // 10
@class [packages] ethereum:elements                                                                                  // 11
@constructor                                                                                                         // 12
*/                                                                                                                   // 13
                                                                                                                     // 14
EthElements = {                                                                                                      // 15
    'Modal': {                                                                                                       // 16
        _current: new ReactiveVar(),                                                                                 // 17
        /**                                                                                                          // 18
        Shows the modal template                                                                                     // 19
                                                                                                                     // 20
        @method show                                                                                                 // 21
        @param {String|Object} template the template name or an object with `{template: 'name', data: {data: 'context'}}`
        @param {Object} options the options for the modal like `{closeable: true, closePath: '/dashboard'}`          // 23
        */                                                                                                           // 24
        'show': function(template, options) {                                                                        // 25
            options = options || {};                                                                                 // 26
                                                                                                                     // 27
            if(_.isObject(template)) {                                                                               // 28
                options = _.extend(options, template);                                                               // 29
                this._current.set(options);                                                                          // 30
            } else if(_.isString(template)) {                                                                        // 31
                options.template = template;                                                                         // 32
                this._current.set(options);                                                                          // 33
            }                                                                                                        // 34
        },                                                                                                           // 35
        /**                                                                                                          // 36
        Hide the modal template                                                                                      // 37
                                                                                                                     // 38
        @method hide                                                                                                 // 39
        */                                                                                                           // 40
        'hide': function(){                                                                                          // 41
            this._current.set(false);                                                                                // 42
        },                                                                                                           // 43
        /**                                                                                                          // 44
        Show the question modal                                                                                      // 45
                                                                                                                     // 46
        @method question.show                                                                                        // 47
        @param {Object} data the data for the modal question template                                                // 48
        @param {Object} options the options for the modal like `{closeable: true, closePath: '/dahsboard'}`          // 49
        */                                                                                                           // 50
        'question': function(data, options){                                                                         // 51
            EthElements.Modal.show({                                                                                 // 52
                template: 'dapp_modal_question',                                                                     // 53
                data: data                                                                                           // 54
            }, options);                                                                                             // 55
        }                                                                                                            // 56
    }                                                                                                                // 57
};                                                                                                                   // 58
                                                                                                                     // 59
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/template.identicon.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("dapp_identicon");                                                                              // 2
Template["dapp_identicon"] = new Template("Template.dapp_identicon", (function() {                                   // 3
  var view = this;                                                                                                   // 4
  return Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("identity"));                                                                  // 6
  }, function() {                                                                                                    // 7
    return [ "\n        ", Blaze.If(function() {                                                                     // 8
      return Spacebars.call(view.lookup("link"));                                                                    // 9
    }, function() {                                                                                                  // 10
      return [ "\n            ", HTML.A({                                                                            // 11
        href: function() {                                                                                           // 12
          return Spacebars.mustache(view.lookup("link"));                                                            // 13
        },                                                                                                           // 14
        class: function() {                                                                                          // 15
          return [ "dapp-identicon ", Spacebars.mustache(view.lookup("class")) ];                                    // 16
        },                                                                                                           // 17
        style: function() {                                                                                          // 18
          return [ "background-image: url('", Spacebars.mustache(view.lookup("identiconData"), view.lookup("identity")), "')" ];
        },                                                                                                           // 20
        title: function() {                                                                                          // 21
          return Spacebars.mustache(view.lookup("i18nTextIcon"));                                                    // 22
        }                                                                                                            // 23
      }), "\n        " ];                                                                                            // 24
    }, function() {                                                                                                  // 25
      return [ "\n            ", HTML.SPAN({                                                                         // 26
        class: function() {                                                                                          // 27
          return [ "dapp-identicon ", Spacebars.mustache(view.lookup("class")) ];                                    // 28
        },                                                                                                           // 29
        style: function() {                                                                                          // 30
          return [ "background-image: url('", Spacebars.mustache(view.lookup("identiconData"), view.lookup("identity")), "')" ];
        },                                                                                                           // 32
        title: function() {                                                                                          // 33
          return Spacebars.mustache(view.lookup("i18nTextIcon"));                                                    // 34
        }                                                                                                            // 35
      }), "\n        " ];                                                                                            // 36
    }), "\n    " ];                                                                                                  // 37
  });                                                                                                                // 38
}));                                                                                                                 // 39
                                                                                                                     // 40
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/identicon.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  // 1
Template Controllers                                                                                                 // 2
                                                                                                                     // 3
@module Templates                                                                                                    // 4
*/                                                                                                                   // 5
                                                                                                                     // 6
/**                                                                                                                  // 7
Return the user identity icon                                                                                        // 8
                                                                                                                     // 9
@class [template] dapp_identicon                                                                                     // 10
@constructor                                                                                                         // 11
*/                                                                                                                   // 12
                                                                                                                     // 13
/**                                                                                                                  // 14
The cached identicons                                                                                                // 15
                                                                                                                     // 16
@property cache                                                                                                      // 17
*/                                                                                                                   // 18
var cache = {};                                                                                                      // 19
                                                                                                                     // 20
Template['dapp_identicon'].helpers({                                                                                 // 21
    /**                                                                                                              // 22
    Make sure the identity is lowercased                                                                             // 23
                                                                                                                     // 24
    @method (identity)                                                                                               // 25
    */                                                                                                               // 26
    'identity': function(identity){                                                                                  // 27
        return (_.isString(this.identity)) ? this.identity.toLowerCase() : this.identity;                            // 28
    },                                                                                                               // 29
    /**                                                                                                              // 30
    Return the cached or generated identicon                                                                         // 31
                                                                                                                     // 32
    @method (identiconData)                                                                                          // 33
    */                                                                                                               // 34
    'identiconData': function(identity){                                                                             // 35
                                                                                                                     // 36
        // remove items if the cache is larger than 50 entries                                                       // 37
        if(_.size(cache) > 50) {                                                                                     // 38
            delete cache[Object.keys(cache)[0]];                                                                     // 39
        }                                                                                                            // 40
                                                                                                                     // 41
        return cache['ID_'+ identity] || (cache['ID_'+ identity] =  blockies.create({                                // 42
            seed: identity,                                                                                          // 43
            size: 8,                                                                                                 // 44
            scale: 8                                                                                                 // 45
        }).toDataURL());                                                                                             // 46
    },                                                                                                               // 47
    /**                                                                                                              // 48
    Get the correct text, if TAPi18n is available.                                                                   // 49
                                                                                                                     // 50
    @method i18nText                                                                                                 // 51
    */                                                                                                               // 52
    'i18nTextIcon': function(){                                                                                      // 53
        if(typeof TAPi18n === 'undefined' || TAPi18n.__('elements.identiconHelper') == 'elements.identiconHelper') {
            return "This is a security icon, if there's any change on the address the resulting icon should be a completelly different one";
        } else {                                                                                                     // 56
            return TAPi18n.__('elements.identiconHelper');                                                           // 57
        }                                                                                                            // 58
    }                                                                                                                // 59
});                                                                                                                  // 60
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/template.addressInput.js                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("dapp_addressInput");                                                                           // 2
Template["dapp_addressInput"] = new Template("Template.dapp_addressInput", (function() {                             // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: function() {                                                                                              // 6
      return [ "dapp-address-input ", Blaze.If(function() {                                                          // 7
        return Spacebars.dataMustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "hasName");                  // 8
      }, function() {                                                                                                // 9
        return "has-name";                                                                                           // 10
      }) ];                                                                                                          // 11
    }                                                                                                                // 12
  }, "\n        ", HTML.INPUT(HTML.Attrs({                                                                           // 13
    type: "text",                                                                                                    // 14
    name: function() {                                                                                               // 15
      return Spacebars.mustache(view.lookup("name"));                                                                // 16
    },                                                                                                               // 17
    placeholder: function() {                                                                                        // 18
      return Spacebars.mustache(view.lookup("placeholder"));                                                         // 19
    },                                                                                                               // 20
    class: function() {                                                                                              // 21
      return [ Spacebars.mustache(view.lookup("class")), " ", Blaze.Unless(function() {                              // 22
        return Spacebars.dataMustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "isValid");                  // 23
      }, function() {                                                                                                // 24
        return "dapp-error";                                                                                         // 25
      }), " ", Blaze.Unless(function() {                                                                             // 26
        return Spacebars.dataMustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "isChecksum");               // 27
      }, function() {                                                                                                // 28
        return " dapp-non-checksum ";                                                                                // 29
      }) ];                                                                                                          // 30
    },                                                                                                               // 31
    value: function() {                                                                                              // 32
      return Spacebars.mustache(view.lookup("value"));                                                               // 33
    },                                                                                                               // 34
    title: function() {                                                                                              // 35
      return Blaze.Unless(function() {                                                                               // 36
        return Spacebars.dataMustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "isChecksum");               // 37
      }, function() {                                                                                                // 38
        return Blaze.View("lookup:i18nText", function() {                                                            // 39
          return Spacebars.mustache(view.lookup("i18nText"));                                                        // 40
        });                                                                                                          // 41
      });                                                                                                            // 42
    }                                                                                                                // 43
  }, function() {                                                                                                    // 44
    return Spacebars.attrMustache(view.lookup("additionalAttributes"));                                              // 45
  })), "\n\n        ", Blaze.If(function() {                                                                         // 46
    return Spacebars.dataMustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "hasName");                      // 47
  }, function() {                                                                                                    // 48
    return [ "\n        ", HTML.SPAN({                                                                               // 49
      class: "ens-name"                                                                                              // 50
    }, Blaze.View("lookup:ensDisplay", function() {                                                                  // 51
      return Spacebars.mustache(view.lookup("ensDisplay"));                                                          // 52
    })), "\n        " ];                                                                                             // 53
  }), "\n\n        ", Blaze.If(function() {                                                                          // 54
    return Spacebars.dataMustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "isValid");                      // 55
  }, function() {                                                                                                    // 56
    return [ "\n            ", Blaze._TemplateWith(function() {                                                      // 57
      return {                                                                                                       // 58
        identity: Spacebars.call(view.lookup("address")),                                                            // 59
        class: Spacebars.call("dapp-small")                                                                          // 60
      };                                                                                                             // 61
    }, function() {                                                                                                  // 62
      return Spacebars.include(view.lookupTemplate("dapp_identicon"));                                               // 63
    }), "\n        " ];                                                                                              // 64
  }, function() {                                                                                                    // 65
    return [ "\n            ", HTML.I({                                                                              // 66
      class: "icon-shield"                                                                                           // 67
    }), "\n        " ];                                                                                              // 68
  }), "\n\n    ");                                                                                                   // 69
}));                                                                                                                 // 70
                                                                                                                     // 71
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/addressInput.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
/**                                                                                                                  // 2
Template Controllers                                                                                                 // 3
                                                                                                                     // 4
@module Templates                                                                                                    // 5
*/                                                                                                                   // 6
                                                                                                                     // 7
var sha3 = function(str, opt) {                                                                                      // 8
  return '0x' + web3.sha3(str, opt).replace('0x', '');                                                               // 9
};                                                                                                                   // 10
                                                                                                                     // 11
function namehash(name) {                                                                                            // 12
  var node = '0x0000000000000000000000000000000000000000000000000000000000000000';                                   // 13
  if (name != '') {                                                                                                  // 14
    var labels = name.split('.');                                                                                    // 15
    for (var i = labels.length - 1; i >= 0; i--) {                                                                   // 16
      node = sha3(node + sha3(labels[i]).slice(2), {encoding: 'hex'});                                               // 17
    }                                                                                                                // 18
  }                                                                                                                  // 19
  return node.toString();                                                                                            // 20
}                                                                                                                    // 21
                                                                                                                     // 22
var ensContractAbi = [{'constant': true, 'inputs': [{'name': 'node', 'type': 'bytes32'}], 'name': 'resolver', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'node', 'type': 'bytes32'}], 'name': 'owner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'label', 'type': 'bytes32'}, {'name': 'owner', 'type': 'address'}], 'name': 'setSubnodeOwner', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'ttl', 'type': 'uint64'}], 'name': 'setTTL', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'node', 'type': 'bytes32'}], 'name': 'ttl', 'outputs': [{'name': '', 'type': 'uint64'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'resolver', 'type': 'address'}], 'name': 'setResolver', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'owner', 'type': 'address'}], 'name': 'setOwner', 'outputs': [], 'payable': false, 'type': 'function'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'node', 'type': 'bytes32'}, {'indexed': false, 'name': 'owner', 'type': 'address'}], 'name': 'Transfer', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'node', 'type': 'bytes32'}, {'indexed': true, 'name': 'label', 'type': 'bytes32'}, {'indexed': false, 'name': 'owner', 'type': 'address'}], 'name': 'NewOwner', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'node', 'type': 'bytes32'}, {'indexed': false, 'name': 'resolver', 'type': 'address'}], 'name': 'NewResolver', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'node', 'type': 'bytes32'}, {'indexed': false, 'name': 'ttl', 'type': 'uint64'}], 'name': 'NewTTL', 'type': 'event'}];
                                                                                                                     // 24
var resolverContractAbi = [{'constant': true, 'inputs': [{'name': 'interfaceID', 'type': 'bytes4'}], 'name': 'supportsInterface', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'contentTypes', 'type': 'uint256'}], 'name': 'ABI', 'outputs': [{'name': 'contentType', 'type': 'uint256'}, {'name': 'data', 'type': 'bytes'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'x', 'type': 'bytes32'}, {'name': 'y', 'type': 'bytes32'}], 'name': 'setPubkey', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'node', 'type': 'bytes32'}], 'name': 'content', 'outputs': [{'name': 'ret', 'type': 'bytes32'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'node', 'type': 'bytes32'}], 'name': 'addr', 'outputs': [{'name': 'ret', 'type': 'address'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'contentType', 'type': 'uint256'}, {'name': 'data', 'type': 'bytes'}], 'name': 'setABI', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'node', 'type': 'bytes32'}], 'name': 'name', 'outputs': [{'name': 'ret', 'type': 'string'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'name', 'type': 'string'}], 'name': 'setName', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'hash', 'type': 'bytes32'}], 'name': 'setContent', 'outputs': [], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'node', 'type': 'bytes32'}], 'name': 'pubkey', 'outputs': [{'name': 'x', 'type': 'bytes32'}, {'name': 'y', 'type': 'bytes32'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'node', 'type': 'bytes32'}, {'name': 'addr', 'type': 'address'}], 'name': 'setAddr', 'outputs': [], 'payable': false, 'type': 'function'}, {'inputs': [{'name': 'ensAddr', 'type': 'address'}], 'payable': false, 'type': 'constructor'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'node', 'type': 'bytes32'}, {'indexed': false, 'name': 'a', 'type': 'address'}], 'name': 'AddrChanged', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'node', 'type': 'bytes32'}, {'indexed': false, 'name': 'hash', 'type': 'bytes32'}], 'name': 'ContentChanged', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'node', 'type': 'bytes32'}, {'indexed': false, 'name': 'name', 'type': 'string'}], 'name': 'NameChanged', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'node', 'type': 'bytes32'}, {'indexed': true, 'name': 'contentType', 'type': 'uint256'}], 'name': 'ABIChanged', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'node', 'type': 'bytes32'}, {'indexed': false, 'name': 'x', 'type': 'bytes32'}, {'indexed': false, 'name': 'y', 'type': 'bytes32'}], 'name': 'PubkeyChanged', 'type': 'event'}];
                                                                                                                     // 26
var ensAddress = '0x314159265dd8dbb310642f98f50c066173c1259b';                                                       // 27
                                                                                                                     // 28
function getAddr(name, ens, callback) {                                                                              // 29
  var resolverContract = web3.eth.contract(resolverContractAbi);                                                     // 30
                                                                                                                     // 31
  var node = namehash(name);                                                                                         // 32
  // get a resolver address for that name                                                                            // 33
  ens.resolver(node, function(err, resolverAddress) {                                                                // 34
    if (!err && resolverAddress != 0) {                                                                              // 35
      // if you find one, find the addr of that resolver                                                             // 36
      resolverContract.at(resolverAddress).addr(node, function(error, result) {                                      // 37
        if (!err && result != 0 && callback) {                                                                       // 38
          callback(result);                                                                                          // 39
        }                                                                                                            // 40
      });                                                                                                            // 41
    }                                                                                                                // 42
  });                                                                                                                // 43
}                                                                                                                    // 44
                                                                                                                     // 45
function getName(address, ens, callback) {                                                                           // 46
  var resolverContract = web3.eth.contract(resolverContractAbi);                                                     // 47
                                                                                                                     // 48
  var node = namehash(address.toLowerCase().replace('0x', '') + '.addr.reverse');                                    // 49
  // get a resolver address for that name                                                                            // 50
  ens.resolver(node, function(err, resolverAddress) {                                                                // 51
    if (!err && resolverAddress != 0) {                                                                              // 52
      // if you find one, find the name on that resolver                                                             // 53
      resolverContract.at(resolverAddress).name(node, function(error, result) {                                      // 54
        if (!err && result != 0 && callback) {                                                                       // 55
          callback(result);                                                                                          // 56
        }                                                                                                            // 57
      });                                                                                                            // 58
    }                                                                                                                // 59
  });                                                                                                                // 60
}                                                                                                                    // 61
                                                                                                                     // 62
/**                                                                                                                  // 63
The address input template, containg the identicon.                                                                  // 64
                                                                                                                     // 65
@class [template] dapp_addressInput                                                                                  // 66
@constructor                                                                                                         // 67
*/                                                                                                                   // 68
                                                                                                                     // 69
Template.dapp_addressInput.onCreated(function() {                                                                    // 70
  var template = this;                                                                                               // 71
                                                                                                                     // 72
  // default set to true, to show no error                                                                           // 73
  TemplateVar.set('isValid', true);                                                                                  // 74
  TemplateVar.set('isChecksum', true);                                                                               // 75
                                                                                                                     // 76
  if (this.data && this.data.value) {                                                                                // 77
    TemplateVar.set('value', this.data.value);                                                                       // 78
  }                                                                                                                  // 79
                                                                                                                     // 80
  var ensContract = web3.eth.contract(ensContractAbi);                                                               // 81
  ensContract.at(ensAddress, function(err, ens) {                                                                    // 82
    TemplateVar.set(template, 'ensContract', ens);                                                                   // 83
  });                                                                                                                // 84
                                                                                                                     // 85
  TemplateVar.set(template, 'ensAvailable', true);                                                                   // 86
                                                                                                                     // 87
  web3.eth.getSyncing(function(err, syncing) {                                                                       // 88
    if (!err && !syncing) {                                                                                          // 89
      // cannot use ENS while syncing                                                                                // 90
      web3.eth.getCode(ensAddress, function(err, code) {                                                             // 91
        if (!err && code.length > 2) {                                                                               // 92
          // check if there's code on the address                                                                    // 93
          TemplateVar.set(template, 'ensAvailable', true);                                                           // 94
        }                                                                                                            // 95
      });                                                                                                            // 96
    }                                                                                                                // 97
  });                                                                                                                // 98
});                                                                                                                  // 99
                                                                                                                     // 100
Template.dapp_addressInput.onRendered(function() {                                                                   // 101
  if (this.data) {                                                                                                   // 102
    this.$('input').trigger('change');                                                                               // 103
  }                                                                                                                  // 104
});                                                                                                                  // 105
                                                                                                                     // 106
Template.dapp_addressInput.helpers({                                                                                 // 107
  /**                                                                                                                // 108
    Return the to address                                                                                            // 109
                                                                                                                     // 110
    @method (address)                                                                                                // 111
    */                                                                                                               // 112
  'address': function() {                                                                                            // 113
    var address = TemplateVar.get('value');                                                                          // 114
                                                                                                                     // 115
    // if(Template.instance().view.isRendered && Template.instance().find('input').value !== address)                // 116
    // Template.instance().$('input').trigger('change');                                                             // 117
                                                                                                                     // 118
    return (_.isString(address) && web3.isAddress(address)) ? '0x' + address.replace('0x', '') : false;              // 119
  },                                                                                                                 // 120
  /**                                                                                                                // 121
    Return the autofocus or disabled attribute.                                                                      // 122
                                                                                                                     // 123
    @method (additionalAttributes)                                                                                   // 124
    */                                                                                                               // 125
  'additionalAttributes': function() {                                                                               // 126
    var attr = {};                                                                                                   // 127
                                                                                                                     // 128
    if (this.autofocus) {attr.autofocus = true;}                                                                     // 129
    if (this.disabled) {attr.disabled = true;}                                                                       // 130
                                                                                                                     // 131
    return attr;                                                                                                     // 132
  },                                                                                                                 // 133
  /**                                                                                                                // 134
    Get the correct text, if TAPi18n is available.                                                                   // 135
                                                                                                                     // 136
    @method i18nText                                                                                                 // 137
    */                                                                                                               // 138
  'i18nText': function() {                                                                                           // 139
    if (typeof TAPi18n === 'undefined' || TAPi18n.__('elements.checksumAlert') == 'elements.checksumAlert') {        // 140
      return "This address looks valid, but it doesn't have some security features that will protect you against typos, so double check you have the right one. If provided, check if the security icon  matches.";
    }                                                                                                                // 142
    return TAPi18n.__('elements.checksumAlert');                                                                     // 143
  },                                                                                                                 // 144
  'ensDisplay': function() {                                                                                         // 145
    return TemplateVar.get('ensName').split('.').slice(0, -1).reverse().join(' ▸ ');                                 // 146
  }                                                                                                                  // 147
});                                                                                                                  // 148
                                                                                                                     // 149
                                                                                                                     // 150
Template.dapp_addressInput.events({                                                                                  // 151
  /**                                                                                                                // 152
    Set the address while typing                                                                                     // 153
                                                                                                                     // 154
    @event input input, change input                                                                                 // 155
    */                                                                                                               // 156
  'input input, keyup input': function(e, template) {                                                                // 157
    if (!e.currentTarget.value) return;                                                                              // 158
                                                                                                                     // 159
    var value = e.currentTarget.value.replace(/[\s\*\(\)\!\?\#\$\%]+/g, '');                                         // 160
    TemplateVar.set(template, 'hasName', false);                                                                     // 161
                                                                                                                     // 162
    // add 0x                                                                                                        // 163
    if (value.length > 38                                                                                            // 164
            && value.indexOf('0x') === -1                                                                            // 165
            && /^[0-9a-f]+$/.test(value.toLowerCase())) {                                                            // 166
      value = '0x' + value;                                                                                          // 167
    }                                                                                                                // 168
                                                                                                                     // 169
    if (web3.isAddress(value) || _.isEmpty(value)) {                                                                 // 170
      TemplateVar.set('isValid', true);                                                                              // 171
                                                                                                                     // 172
      if (!_.isEmpty(value)) {                                                                                       // 173
        TemplateVar.set('value', '0x' + value.replace('0x', ''));                                                    // 174
        TemplateVar.set('isChecksum', web3.isChecksumAddress(value));                                                // 175
                                                                                                                     // 176
        if (TemplateVar.get('ensAvailable')) {                                                                       // 177
          var ens = TemplateVar.get('ensContract');                                                                  // 178
                                                                                                                     // 179
          // if an address was added, check if there's a name associated with it                                     // 180
          getName(value, ens, function(name) {                                                                       // 181
            // Any address can claim to be any name. Double check it!                                                // 182
            getAddr(name, ens, function(addr) {                                                                      // 183
              TemplateVar.set(template, 'hasName', true);                                                            // 184
              TemplateVar.set(template, 'ensName', name);                                                            // 185
              TemplateVar.set(template, 'isValid', true);                                                            // 186
              TemplateVar.set(template, 'isChecksum', true);                                                         // 187
              TemplateVar.set(template, 'value', web3.toChecksumAddress(addr));                                      // 188
              e.currentTarget.value = web3.toChecksumAddress(addr);                                                  // 189
            });                                                                                                      // 190
          });                                                                                                        // 191
        }                                                                                                            // 192
      } else {                                                                                                       // 193
        TemplateVar.set('value', undefined);                                                                         // 194
        TemplateVar.set('isChecksum', true);                                                                         // 195
      }                                                                                                              // 196
                                                                                                                     // 197
      e.currentTarget.value = value;                                                                                 // 198
    } else if (TemplateVar.get('ensAvailable')) {                                                                    // 199
      if (value.slice(-4) !== '.eth') value = value + '.eth';                                                        // 200
                                                                                                                     // 201
      TemplateVar.set('hasName', false);                                                                             // 202
      TemplateVar.set('isValid', false);                                                                             // 203
      TemplateVar.set('value', undefined);                                                                           // 204
      var ens = TemplateVar.get('ensContract');                                                                      // 205
                                                                                                                     // 206
      getAddr(value, ens, function(addr) {                                                                           // 207
        TemplateVar.set(template, 'hasName', true);                                                                  // 208
        TemplateVar.set(template, 'isValid', true);                                                                  // 209
        TemplateVar.set(template, 'isChecksum', true);                                                               // 210
        TemplateVar.set(template, 'value', web3.toChecksumAddress(addr));                                            // 211
        TemplateVar.set(template, 'ensName', value);                                                                 // 212
        // e.currentTarget.value = web3.toChecksumAddress(addr);                                                     // 213
        // check name                                                                                                // 214
        getName(addr, ens, function(name) {                                                                          // 215
          TemplateVar.set(template, 'ensName', name);                                                                // 216
        });                                                                                                          // 217
      });                                                                                                            // 218
    }                                                                                                                // 219
  },                                                                                                                 // 220
  /**                                                                                                                // 221
    Set the address while typing                                                                                     // 222
                                                                                                                     // 223
    @event input input, change input                                                                                 // 224
    */                                                                                                               // 225
  'focus input': function(e, template) {                                                                             // 226
    if (TemplateVar.get('hasName')) e.currentTarget.value = TemplateVar.get('ensName');                              // 227
  },                                                                                                                 // 228
  /**                                                                                                                // 229
    Set the address while typing                                                                                     // 230
                                                                                                                     // 231
    @event input input, change input                                                                                 // 232
    */                                                                                                               // 233
  'blur input': function(e, template) {                                                                              // 234
    var value = TemplateVar.get('value');                                                                            // 235
    if (value) e.currentTarget.value = value;                                                                        // 236
  },                                                                                                                 // 237
  /**                                                                                                                // 238
    Prevent the identicon from beeing clicked.                                                                       // 239
                                                                                                                     // 240
    TODO: remove?                                                                                                    // 241
                                                                                                                     // 242
    @event click a                                                                                                   // 243
    */                                                                                                               // 244
  'click a, click .ens-name': function(e, template) {                                                                // 245
    // focus on input element                                                                                        // 246
    var inputElement = template.find('input');                                                                       // 247
    inputElement.focus();                                                                                            // 248
    e.preventDefault();                                                                                              // 249
  }                                                                                                                  // 250
});                                                                                                                  // 251
                                                                                                                     // 252
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/template.dataTextarea.js                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("dapp_dataTextarea");                                                                           // 2
Template["dapp_dataTextarea"] = new Template("Template.dapp_dataTextarea", (function() {                             // 3
  var view = this;                                                                                                   // 4
  return HTML.TEXTAREA(HTML.Attrs({                                                                                  // 5
    name: function() {                                                                                               // 6
      return Spacebars.mustache(view.lookup("name"));                                                                // 7
    },                                                                                                               // 8
    class: function() {                                                                                              // 9
      return [ "dapp-data-textarea ", Spacebars.mustache(view.lookup("class")), " ", Blaze.Unless(function() {       // 10
        return Spacebars.dataMustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "isValid");                  // 11
      }, function() {                                                                                                // 12
        return "dapp-error";                                                                                         // 13
      }) ];                                                                                                          // 14
    },                                                                                                               // 15
    cols: function() {                                                                                               // 16
      return Spacebars.mustache(view.lookup("cols"));                                                                // 17
    },                                                                                                               // 18
    rows: function() {                                                                                               // 19
      return Spacebars.mustache(view.lookup("rows"));                                                                // 20
    }                                                                                                                // 21
  }, function() {                                                                                                    // 22
    return Spacebars.attrMustache(view.lookup("additionalAttributes"));                                              // 23
  }, {                                                                                                               // 24
    value: function() {                                                                                              // 25
      return Spacebars.mustache(view.lookup("value"));                                                               // 26
    }                                                                                                                // 27
  }));                                                                                                               // 28
}));                                                                                                                 // 29
                                                                                                                     // 30
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/dataTextarea.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  // 1
Template Controllers                                                                                                 // 2
                                                                                                                     // 3
@module Templates                                                                                                    // 4
*/                                                                                                                   // 5
                                                                                                                     // 6
/**                                                                                                                  // 7
The data textarea template.                                                                                          // 8
                                                                                                                     // 9
@class [template] dapp_dataTextarea                                                                                  // 10
@constructor                                                                                                         // 11
*/                                                                                                                   // 12
                                                                                                                     // 13
Template['dapp_dataTextarea'].onCreated(function(){                                                                  // 14
                                                                                                                     // 15
    // default set to true, to show no error                                                                         // 16
    TemplateVar.set('isValid', true);                                                                                // 17
                                                                                                                     // 18
    if(this.data && this.data.value) {                                                                               // 19
        TemplateVar.set('value', this.data.value);                                                                   // 20
    }                                                                                                                // 21
});                                                                                                                  // 22
                                                                                                                     // 23
Template['dapp_dataTextarea'].onRendered(function(){                                                                 // 24
    if(this.data && this.data.value) {                                                                               // 25
        this.$('textarea').trigger('change');                                                                        // 26
    }                                                                                                                // 27
});                                                                                                                  // 28
                                                                                                                     // 29
Template['dapp_dataTextarea'].helpers({                                                                              // 30
    /**                                                                                                              // 31
    Return the autofocus or disabled attribute.                                                                      // 32
                                                                                                                     // 33
    @method (additionalAttributes)                                                                                   // 34
    */                                                                                                               // 35
    'additionalAttributes': function(){                                                                              // 36
        var attr = {};                                                                                               // 37
                                                                                                                     // 38
        if(this.autofocus)                                                                                           // 39
            attr.autofocus = true;                                                                                   // 40
        if(this.disabled)                                                                                            // 41
            attr.disabled = true;                                                                                    // 42
                                                                                                                     // 43
        return attr;                                                                                                 // 44
    }                                                                                                                // 45
});                                                                                                                  // 46
                                                                                                                     // 47
                                                                                                                     // 48
Template['dapp_dataTextarea'].events({                                                                               // 49
    /**                                                                                                              // 50
    Set the value while typing                                                                                       // 51
                                                                                                                     // 52
    @event input textarea, change textarea                                                                           // 53
    */                                                                                                               // 54
    'input textarea, change textarea': function(e, template){                                                        // 55
        var value = e.currentTarget.value.replace(/\s+/g, '');                                                       // 56
                                                                                                                     // 57
        // remove multiline                                                                                          // 58
        if(value.indexOf("\n") !== -1) {                                                                             // 59
            value = value.replace("\n", '');                                                                         // 60
            e.currentTarget.value = value;                                                                           // 61
        }                                                                                                            // 62
                                                                                                                     // 63
        // add 0x                                                                                                    // 64
        if(value.length > 2 && value.indexOf('0x') === -1) {                                                         // 65
            value = '0x'+ value;                                                                                     // 66
            e.currentTarget.value = value;                                                                           // 67
        }                                                                                                            // 68
                                                                                                                     // 69
        if(/^(0x)?[a-f0-9]*$/i.test(value) || _.isEmpty(value)) {                                                    // 70
            TemplateVar.set('isValid', true);                                                                        // 71
            if(!_.isEmpty(value))                                                                                    // 72
                TemplateVar.set('value', '0x'+ value.replace('0x',''));                                              // 73
            else                                                                                                     // 74
                TemplateVar.set('value', undefined);                                                                 // 75
        } else {                                                                                                     // 76
            TemplateVar.set('isValid', false);                                                                       // 77
            TemplateVar.set('value', undefined);                                                                     // 78
        }                                                                                                            // 79
    }                                                                                                                // 80
});                                                                                                                  // 81
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/template.selectAccount.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("dapp_selectAccount");                                                                          // 2
Template["dapp_selectAccount"] = new Template("Template.dapp_selectAccount", (function() {                           // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: function() {                                                                                              // 6
      return [ "dapp-select-account ", Spacebars.mustache(view.lookup("class")) ];                                   // 7
    }                                                                                                                // 8
  }, "\n        ", HTML.SELECT({                                                                                     // 9
    name: function() {                                                                                               // 10
      return Blaze.If(function() {                                                                                   // 11
        return Spacebars.call(view.lookup("name"));                                                                  // 12
      }, function() {                                                                                                // 13
        return Blaze.View("lookup:name", function() {                                                                // 14
          return Spacebars.mustache(view.lookup("name"));                                                            // 15
        });                                                                                                          // 16
      }, function() {                                                                                                // 17
        return "dapp-select-account";                                                                                // 18
      });                                                                                                            // 19
    },                                                                                                               // 20
    class: function() {                                                                                              // 21
      return Spacebars.mustache(view.lookup("class"));                                                               // 22
    }                                                                                                                // 23
  }, "\n            ", Blaze.Each(function() {                                                                       // 24
    return Spacebars.call(view.lookup("accounts"));                                                                  // 25
  }, function() {                                                                                                    // 26
    return [ "\n                ", HTML.OPTION(HTML.Attrs({                                                          // 27
      value: function() {                                                                                            // 28
        return Spacebars.mustache(view.lookup("address"));                                                           // 29
      }                                                                                                              // 30
    }, function() {                                                                                                  // 31
      return Spacebars.attrMustache(view.lookup("selected"));                                                        // 32
    }), "\n                    ", Blaze.If(function() {                                                              // 33
      return Spacebars.call(view.lookup("isAccount"));                                                               // 34
    }, function() {                                                                                                  // 35
      return "🔑";                                                                                                   // 36
    }), " ", Blaze.View("lookup:name", function() {                                                                  // 37
      return Spacebars.mustache(view.lookup("name"));                                                                // 38
    }), "\n                    ", Blaze.If(function() {                                                              // 39
      return Spacebars.call(view.lookup("balance"));                                                                 // 40
    }, function() {                                                                                                  // 41
      return [ "\n                        - ", Blaze.View("lookup:dapp_formatBalance", function() {                  // 42
        return Spacebars.mustache(view.lookup("dapp_formatBalance"), view.lookup("balance"), "0,0.00 UNIT");         // 43
      }), "\n                        ", Blaze.If(function() {                                                        // 44
        return Spacebars.call(view.lookup("isNotEtherUnit"));                                                        // 45
      }, function() {                                                                                                // 46
        return [ "\n                            (", Blaze.View("lookup:dapp_formatBalance", function() {             // 47
          return Spacebars.mustache(view.lookup("dapp_formatBalance"), view.lookup("balance"), "0,0.00 UNIT", "ether");
        }), ")\n                        " ];                                                                         // 49
      }), "\n                    " ];                                                                                // 50
    }), "\n                "), "\n            " ];                                                                   // 51
  }), "\n        "), "\n        ", Blaze.If(function() {                                                             // 52
    return Spacebars.call(view.lookup("isAddress"));                                                                 // 53
  }, function() {                                                                                                    // 54
    return [ "\n        ", Blaze._TemplateWith(function() {                                                          // 55
      return {                                                                                                       // 56
        identity: Spacebars.call(Spacebars.dataMustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "value")),
        class: Spacebars.call("dapp-small")                                                                          // 58
      };                                                                                                             // 59
    }, function() {                                                                                                  // 60
      return Spacebars.include(view.lookupTemplate("dapp_identicon"));                                               // 61
    }), "\n        " ];                                                                                              // 62
  }, function() {                                                                                                    // 63
    return [ "\n        ", HTML.I({                                                                                  // 64
      class: function() {                                                                                            // 65
        return [ "no-identicon icon-", Spacebars.mustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "value") ];
      }                                                                                                              // 67
    }), "\n        " ];                                                                                              // 68
  }), "\n    ");                                                                                                     // 69
}));                                                                                                                 // 70
                                                                                                                     // 71
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/selectAccount.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  // 1
Template Controllers                                                                                                 // 2
                                                                                                                     // 3
@module Templates                                                                                                    // 4
*/                                                                                                                   // 5
                                                                                                                     // 6
/**                                                                                                                  // 7
The select account template                                                                                          // 8
                                                                                                                     // 9
@class [template] dapp_selectAccount                                                                                 // 10
@constructor                                                                                                         // 11
*/                                                                                                                   // 12
                                                                                                                     // 13
Template['dapp_selectAccount'].onCreated(function(){                                                                 // 14
    if(this.data ) {                                                                                                 // 15
        if(this.data.value) {                                                                                        // 16
            TemplateVar.set('value', this.data.value);                                                               // 17
        } else if(this.data.accounts && this.data.accounts[0]) {                                                     // 18
            TemplateVar.set('value', this.data.accounts[0].address);                                                 // 19
        }                                                                                                            // 20
    }                                                                                                                // 21
});                                                                                                                  // 22
                                                                                                                     // 23
                                                                                                                     // 24
Template['dapp_selectAccount'].helpers({                                                                             // 25
    /**                                                                                                              // 26
    Check if its a normal account                                                                                    // 27
                                                                                                                     // 28
    @method (isAccount)                                                                                              // 29
    */                                                                                                               // 30
    'isAccount': function(){                                                                                         // 31
        return this.type === 'account' && Template.parentData(1).showAccountTypes;                                   // 32
    },                                                                                                               // 33
    /**                                                                                                              // 34
    Return the selected attribute if its selected                                                                    // 35
                                                                                                                     // 36
    @method (selected)                                                                                               // 37
    */                                                                                                               // 38
    'selected': function(){                                                                                          // 39
        return (TemplateVar.get('value') === this.address)                                                           // 40
            ? {selected: true}                                                                                       // 41
            : {};                                                                                                    // 42
    },                                                                                                               // 43
    /**                                                                                                              // 44
    Check if the current selected unit is not ether                                                                  // 45
                                                                                                                     // 46
    @method (isNotEtherUnit)                                                                                         // 47
    */                                                                                                               // 48
    'isNotEtherUnit': function() {                                                                                   // 49
        return EthTools.getUnit().toLowerCase() !== 'ether';                                                         // 50
    },                                                                                                               // 51
    /**                                                                                                              // 52
    Check if the current selected unit is not ether                                                                  // 53
                                                                                                                     // 54
    @method (isNotEtherUnit)                                                                                         // 55
    */                                                                                                               // 56
    'isAddress': function() {                                                                                        // 57
        return web3.isAddress(TemplateVar.get('value'));                                                             // 58
    }                                                                                                                // 59
});                                                                                                                  // 60
                                                                                                                     // 61
Template['dapp_selectAccount'].events({                                                                              // 62
    /**                                                                                                              // 63
    Set the selected address.                                                                                        // 64
                                                                                                                     // 65
    @event change select                                                                                             // 66
    */                                                                                                               // 67
    'change select': function(e){                                                                                    // 68
        TemplateVar.set('value', e.currentTarget.value);                                                             // 69
    }                                                                                                                // 70
});                                                                                                                  // 71
                                                                                                                     // 72
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/template.selectGasPrice.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("dapp_selectGasPrice");                                                                         // 2
Template["dapp_selectGasPrice"] = new Template("Template.dapp_selectGasPrice", (function() {                         // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: "dapp-select-gas-price"                                                                                   // 6
  }, "\n        ", HTML.SPAN(Blaze.View("lookup:fee", function() {                                                   // 7
    return Spacebars.mustache(view.lookup("fee"));                                                                   // 8
  }), " ", HTML.SPAN(Blaze.View("lookup:unit", function() {                                                          // 9
    return Spacebars.mustache(view.lookup("unit"));                                                                  // 10
  }))), HTML.Raw("\n        <br>\n        "), HTML.INPUT({                                                           // 11
    type: "range",                                                                                                   // 12
    name: "fee",                                                                                                     // 13
    min: "-4",                                                                                                       // 14
    max: "1",                                                                                                        // 15
    step: "1",                                                                                                       // 16
    value: function() {                                                                                              // 17
      return Spacebars.mustache(Spacebars.dot(view.lookup("TemplateVar"), "get"), "feeMultiplicator");               // 18
    }                                                                                                                // 19
  }), "\n        ", HTML.SPAN(Blaze.View("lookup:i18nText", function() {                                             // 20
    return Spacebars.mustache(view.lookup("i18nText"), "low");                                                       // 21
  })), "\n        ", HTML.SPAN(Blaze.View("lookup:i18nText", function() {                                            // 22
    return Spacebars.mustache(view.lookup("i18nText"), "high");                                                      // 23
  })), "\n    ");                                                                                                    // 24
}));                                                                                                                 // 25
                                                                                                                     // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/selectGasPrice.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  // 1
Template Controllers                                                                                                 // 2
                                                                                                                     // 3
@module Templates                                                                                                    // 4
*/                                                                                                                   // 5
                                                                                                                     // 6
/**                                                                                                                  // 7
The select gas price template                                                                                        // 8
                                                                                                                     // 9
@class [template] dapp_selectGasPrice                                                                                // 10
@constructor                                                                                                         // 11
*/                                                                                                                   // 12
                                                                                                                     // 13
/**                                                                                                                  // 14
The the factor by which the gas price should be changeable.                                                          // 15
                                                                                                                     // 16
@property toPowerFactor                                                                                              // 17
*/                                                                                                                   // 18
var toPowerFactor = 2;                                                                                               // 19
                                                                                                                     // 20
/**                                                                                                                  // 21
Calculates the gas * gas price.                                                                                      // 22
                                                                                                                     // 23
@method calculateGasInWei                                                                                            // 24
@return {Number}                                                                                                     // 25
*/                                                                                                                   // 26
var calculateGasInWei = function(template, gas, gasPrice, returnGasPrice){                                           // 27
    // Only defaults to 20 shannon if there's no default set                                                         // 28
    gasPrice = gasPrice || 20000000000;                                                                              // 29
                                                                                                                     // 30
    if(!_.isObject(gasPrice))                                                                                        // 31
        gasPrice = new BigNumber(String(gasPrice), 10);                                                              // 32
                                                                                                                     // 33
    if(_.isUndefined(gas)) {                                                                                         // 34
        console.warn('No gas provided for {{> dapp_selectGasPrice}}');                                               // 35
        return new BigNumber(0);                                                                                     // 36
    }                                                                                                                // 37
                                                                                                                     // 38
    var feeMultiplicator = Number(TemplateVar.get(template, 'feeMultiplicator'));                                    // 39
                                                                                                                     // 40
    // divide and multiply to round it to the nearest billion wei (1 shannon)                                        // 41
    var billion = new BigNumber(1000000000);                                                                         // 42
    gasPrice = gasPrice.times(new BigNumber(toPowerFactor).toPower(feeMultiplicator)).dividedBy(billion).round().times(billion);
                                                                                                                     // 44
    return (returnGasPrice)                                                                                          // 45
        ? gasPrice                                                                                                   // 46
        : gasPrice.times(gas);                                                                                       // 47
}                                                                                                                    // 48
                                                                                                                     // 49
Template['dapp_selectGasPrice'].onCreated(function(){                                                                // 50
    TemplateVar.set('gasInWei', '0');                                                                                // 51
    TemplateVar.set('gasPrice', '0');                                                                                // 52
    TemplateVar.set('feeMultiplicator', 0);                                                                          // 53
});                                                                                                                  // 54
                                                                                                                     // 55
                                                                                                                     // 56
Template['dapp_selectGasPrice'].helpers({                                                                            // 57
    /**                                                                                                              // 58
    Return the currently selected fee value calculate with gas price                                                 // 59
                                                                                                                     // 60
    @method (fee)                                                                                                    // 61
    */                                                                                                               // 62
    'fee': function(){                                                                                               // 63
        if(_.isFinite(TemplateVar.get('feeMultiplicator')) && _.isFinite(this.gas)) {                                // 64
            var template = Template.instance();                                                                      // 65
                                                                                                                     // 66
            // set the value                                                                                         // 67
            TemplateVar.set('gasInWei', calculateGasInWei(template, this.gas, this.gasPrice).floor().toString(10));  // 68
            TemplateVar.set('gasPrice', calculateGasInWei(template, this.gas, this.gasPrice, true).floor().toString(10));
                                                                                                                     // 70
            // return the fee                                                                                        // 71
            return EthTools.formatBalance(calculateGasInWei(template, this.gas, this.gasPrice).toString(10), '0,0.[000000000000000000]', this.unit);
        }                                                                                                            // 73
    },                                                                                                               // 74
    /**                                                                                                              // 75
    Return the current unit                                                                                          // 76
                                                                                                                     // 77
    @method (unit)                                                                                                   // 78
    */                                                                                                               // 79
    'unit': function(){                                                                                              // 80
        var unit = this.unit || EthTools.getUnit();                                                                  // 81
        if(unit)                                                                                                     // 82
            return unit.toUpperCase();                                                                               // 83
    },                                                                                                               // 84
    /**                                                                                                              // 85
    Get the correct text, if TAPi18n is available.                                                                   // 86
                                                                                                                     // 87
    @method i18nText                                                                                                 // 88
    */                                                                                                               // 89
    'i18nText': function(key){                                                                                       // 90
        if(typeof TAPi18n !== 'undefined'                                                                            // 91
            && TAPi18n.__('elements.selectGasPrice.'+ key) !== 'elements.selectGasPrice.'+ key) {                    // 92
            return TAPi18n.__('elements.selectGasPrice.'+ key);                                                      // 93
        } else if (typeof this[key] !== 'undefined') {                                                               // 94
            return this[key];                                                                                        // 95
        } else {                                                                                                     // 96
            return (key === 'high') ? '+' : '-';                                                                     // 97
        }                                                                                                            // 98
    }                                                                                                                // 99
});                                                                                                                  // 100
                                                                                                                     // 101
Template['dapp_selectGasPrice'].events({                                                                             // 102
    /**                                                                                                              // 103
    Change the selected fee                                                                                          // 104
                                                                                                                     // 105
    @event change input[name="fee"], input input[name="fee"]                                                         // 106
    */                                                                                                               // 107
    'change input[name="fee"], input input[name="fee"]': function(e){                                                // 108
        TemplateVar.set('feeMultiplicator', Number(e.currentTarget.value));                                          // 109
    },                                                                                                               // 110
});                                                                                                                  // 111
                                                                                                                     // 112
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/template.modal.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("dapp_modalPlaceholder");                                                                       // 2
Template["dapp_modalPlaceholder"] = new Template("Template.dapp_modalPlaceholder", (function() {                     // 3
  var view = this;                                                                                                   // 4
  return Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("modalTemplate"));                                                             // 6
  }, function() {                                                                                                    // 7
    return [ "\n        ", Blaze._TemplateWith(function() {                                                          // 8
      return {                                                                                                       // 9
        template: Spacebars.call(view.lookup("modalTemplate")),                                                      // 10
        data: Spacebars.call(view.lookup("modalData"))                                                               // 11
      };                                                                                                             // 12
    }, function() {                                                                                                  // 13
      return Spacebars.include(function() {                                                                          // 14
        return Spacebars.call(Template.__dynamic);                                                                   // 15
      });                                                                                                            // 16
    }), "\n    " ];                                                                                                  // 17
  });                                                                                                                // 18
}));                                                                                                                 // 19
                                                                                                                     // 20
Template.__checkName("dapp_modal");                                                                                  // 21
Template["dapp_modal"] = new Template("Template.dapp_modal", (function() {                                           // 22
  var view = this;                                                                                                   // 23
  return Spacebars.include(view.lookupTemplate("Animate"), function() {                                              // 24
    return [ "\n        ", HTML.DIV({                                                                                // 25
      class: "dapp-modal-overlay animate"                                                                            // 26
    }, "\n            ", HTML.SECTION({                                                                              // 27
      class: function() {                                                                                            // 28
        return [ "dapp-modal-container ", Spacebars.mustache(view.lookup("class")) ];                                // 29
      }                                                                                                              // 30
    }, "\n                ", Blaze.If(function() {                                                                   // 31
      return Spacebars.call(view.lookup("template"));                                                                // 32
    }, function() {                                                                                                  // 33
      return [ "\n                    ", Blaze._TemplateWith(function() {                                            // 34
        return {                                                                                                     // 35
          template: Spacebars.call(view.lookup("template")),                                                         // 36
          data: Spacebars.call(view.lookup("data"))                                                                  // 37
        };                                                                                                           // 38
      }, function() {                                                                                                // 39
        return Spacebars.include(function() {                                                                        // 40
          return Spacebars.call(Template.__dynamic);                                                                 // 41
        });                                                                                                          // 42
      }), "\n                " ];                                                                                    // 43
    }), "\n            "), "\n        "), "\n    " ];                                                                // 44
  });                                                                                                                // 45
}));                                                                                                                 // 46
                                                                                                                     // 47
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/modal.js                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  // 1
Template Controllers                                                                                                 // 2
                                                                                                                     // 3
@module Templates                                                                                                    // 4
*/                                                                                                                   // 5
                                                                                                                     // 6
                                                                                                                     // 7
/**                                                                                                                  // 8
The modal placeholder template.                                                                                      // 9
                                                                                                                     // 10
@class [template] dapp_modalPlaceholder                                                                              // 11
@constructor                                                                                                         // 12
*/                                                                                                                   // 13
                                                                                                                     // 14
Template['dapp_modalPlaceholder'].onCreated(function(){                                                              // 15
});                                                                                                                  // 16
                                                                                                                     // 17
                                                                                                                     // 18
Template['dapp_modalPlaceholder'].helpers({                                                                          // 19
    /**                                                                                                              // 20
    The modal template, set manualy                                                                                  // 21
                                                                                                                     // 22
    @method (modalTemplate)                                                                                          // 23
    */                                                                                                               // 24
    'modalTemplate': function(){                                                                                     // 25
        return (EthElements.Modal._current.get())                                                                    // 26
            ? 'dapp_modal' : false;                                                                                  // 27
    },                                                                                                               // 28
    /**                                                                                                              // 29
    The modal templates data, set manualy                                                                            // 30
                                                                                                                     // 31
    @method (modalData)                                                                                              // 32
    */                                                                                                               // 33
    'modalData': function(){                                                                                         // 34
        return EthElements.Modal._current.get();                                                                     // 35
    }                                                                                                                // 36
});                                                                                                                  // 37
                                                                                                                     // 38
                                                                                                                     // 39
                                                                                                                     // 40
/**                                                                                                                  // 41
The modal wrapper template.                                                                                          // 42
If you pass "closePath" in the data context, it will use this path, when the modal overlay is clicked.               // 43
                                                                                                                     // 44
                                                                                                                     // 45
@class [template] dapp_modal                                                                                         // 46
@constructor                                                                                                         // 47
*/                                                                                                                   // 48
                                                                                                                     // 49
                                                                                                                     // 50
/**                                                                                                                  // 51
Look the scrolling of the body                                                                                       // 52
                                                                                                                     // 53
@method rendered                                                                                                     // 54
*/                                                                                                                   // 55
Template['dapp_modal'].onCreated(function(){                                                                         // 56
    $('body').addClass('disable-scroll blur');                                                                       // 57
});                                                                                                                  // 58
                                                                                                                     // 59
                                                                                                                     // 60
/**                                                                                                                  // 61
Remove look of scrolling from the body                                                                               // 62
                                                                                                                     // 63
@method rendered                                                                                                     // 64
*/                                                                                                                   // 65
Template['dapp_modal'].onDestroyed(function(){                                                                       // 66
    $('body').removeClass('disable-scroll blur');                                                                    // 67
});                                                                                                                  // 68
                                                                                                                     // 69
                                                                                                                     // 70
Template['dapp_modal'].events({                                                                                      // 71
    /**                                                                                                              // 72
    Hide the modal on click. If the data context has the property "closePath",                                       // 73
    it will route to this one instead of going back in the browser history.                                          // 74
                                                                                                                     // 75
    If the "closeable" is FALSE, it won't close the modal, when clicking the overlay.                                // 76
                                                                                                                     // 77
    @event click .dapp-modal-overlay                                                                                 // 78
    */                                                                                                               // 79
    'click .dapp-modal-overlay': function(e, template){                                                              // 80
        // hide the modal                                                                                            // 81
        if($(e.target).hasClass('dapp-modal-overlay') && template.data.closeable !== false) {                        // 82
                                                                                                                     // 83
            if(template.data.closePath && typeof Router !== 'undefined') {                                           // 84
                if(typeof Router !== 'undefined')                                                                    // 85
                    Router.go(template.data.closePath);                                                              // 86
                if(typeof FlowRouter !== 'undefined')                                                                // 87
                    FlowRouter.go(template.data.closePath);                                                          // 88
            } else                                                                                                   // 89
                EthElements.Modal.hide();                                                                            // 90
        }                                                                                                            // 91
    }                                                                                                                // 92
});                                                                                                                  // 93
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/template.modalQuestion.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("dapp_modal_question");                                                                         // 2
Template["dapp_modal_question"] = new Template("Template.dapp_modal_question", (function() {                         // 3
  var view = this;                                                                                                   // 4
  return [ Blaze.If(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("template"));                                                                  // 6
  }, function() {                                                                                                    // 7
    return [ "\n        ", Blaze._TemplateWith(function() {                                                          // 8
      return {                                                                                                       // 9
        template: Spacebars.call(view.lookup("template")),                                                           // 10
        data: Spacebars.call(view.lookup("data"))                                                                    // 11
      };                                                                                                             // 12
    }, function() {                                                                                                  // 13
      return Spacebars.include(function() {                                                                          // 14
        return Spacebars.call(Template.__dynamic);                                                                   // 15
      });                                                                                                            // 16
    }), "\n    " ];                                                                                                  // 17
  }, function() {                                                                                                    // 18
    return [ "\n        ", HTML.P(Blaze.View("lookup:text", function() {                                             // 19
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));                                             // 20
    })), "\n    " ];                                                                                                 // 21
  }), "\n    ", HTML.DIV({                                                                                           // 22
    class: "dapp-modal-buttons"                                                                                      // 23
  }, "\n        ", Blaze.If(function() {                                                                             // 24
    return Spacebars.call(view.lookup("hasCancel"));                                                                 // 25
  }, function() {                                                                                                    // 26
    return [ "\n            ", HTML.BUTTON({                                                                         // 27
      class: "cancel"                                                                                                // 28
    }, Blaze.View("lookup:cancelButtonText", function() {                                                            // 29
      return Spacebars.mustache(view.lookup("cancelButtonText"));                                                    // 30
    })), "\n        " ];                                                                                             // 31
  }), "\n        ", Blaze.If(function() {                                                                            // 32
    return Spacebars.call(view.lookup("hasOk"));                                                                     // 33
  }, function() {                                                                                                    // 34
    return [ "\n            ", HTML.BUTTON({                                                                         // 35
      class: "ok dapp-primary-button"                                                                                // 36
    }, Blaze.View("lookup:okButtonText", function() {                                                                // 37
      return Spacebars.mustache(view.lookup("okButtonText"));                                                        // 38
    })), "\n        " ];                                                                                             // 39
  }), "\n    ") ];                                                                                                   // 40
}));                                                                                                                 // 41
                                                                                                                     // 42
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/modalQuestion.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  // 1
Template Controllers                                                                                                 // 2
                                                                                                                     // 3
@module Templates                                                                                                    // 4
*/                                                                                                                   // 5
                                                                                                                     // 6
/**                                                                                                                  // 7
The modal question template. It can receive an ok and cancel function,                                               // 8
which will be execited if the ok or cancel button is pressed.                                                        // 9
                                                                                                                     // 10
After any of the buttons is pressed the modal, will disappear.                                                       // 11
                                                                                                                     // 12
The data context for this modal should look as follows:                                                              // 13
                                                                                                                     // 14
    {                                                                                                                // 15
        text: 'Do you really want to do this?',                                                                      // 16
        ok: function(){                                                                                              // 17
            // do something on ok                                                                                    // 18
        },                                                                                                           // 19
        cancel: function(){                                                                                          // 20
            // do something on cancel                                                                                // 21
        }                                                                                                            // 22
    }                                                                                                                // 23
                                                                                                                     // 24
@class [template] dapp_modal_question                                                                                // 25
@constructor                                                                                                         // 26
*/                                                                                                                   // 27
                                                                                                                     // 28
Template['dapp_modal_question'].helpers({                                                                            // 29
    /**                                                                                                              // 30
    Check if the `ok` property is present, without executing it yet.                                                 // 31
                                                                                                                     // 32
    @method (hasOk)                                                                                                  // 33
    */                                                                                                               // 34
    hasOk: function(){                                                                                               // 35
        return (this.ok);                                                                                            // 36
    },                                                                                                               // 37
    /**                                                                                                              // 38
    Check if the `cancel` property is present, without executing it yet.                                             // 39
                                                                                                                     // 40
    @method (hasCancel)                                                                                              // 41
    */                                                                                                               // 42
    hasCancel: function(){                                                                                           // 43
        return (this.cancel);                                                                                        // 44
    },                                                                                                               // 45
                                                                                                                     // 46
    /**                                                                                                              // 47
    Returns text for OK button. Can be either an argument, a i18n default text or a default value.                   // 48
                                                                                                                     // 49
    @method (okButtonText)                                                                                           // 50
    */                                                                                                               // 51
    okButtonText: function(){                                                                                        // 52
        return this.modalQuestionOkButtonText || TAPi18n.__('buttons.ok') || 'OK';                                   // 53
    },                                                                                                               // 54
                                                                                                                     // 55
    /**                                                                                                              // 56
    Returns text for Cancel button. Can be either an argument, a i18n default text or a default value.               // 57
                                                                                                                     // 58
    @method (cancelButtonText)                                                                                       // 59
    */                                                                                                               // 60
    cancelButtonText: function(){                                                                                    // 61
        return this.modalQuestionCancelButtonText || TAPi18n.__('buttons.cancel') || 'Cancel';                       // 62
    }                                                                                                                // 63
});                                                                                                                  // 64
                                                                                                                     // 65
                                                                                                                     // 66
Template['dapp_modal_question'].events({                                                                             // 67
    /**                                                                                                              // 68
    When the confirm button is clicked, execute the given ok() function.                                             // 69
                                                                                                                     // 70
    @event click .dapp-modal-buttons button.ok                                                                       // 71
    */                                                                                                               // 72
    'click .dapp-modal-buttons button.ok': function(e){                                                              // 73
        // hide the modal                                                                                            // 74
        EthElements.Modal.hide();                                                                                    // 75
                                                                                                                     // 76
        if(_.isFunction(this.ok)){                                                                                   // 77
            this.ok();                                                                                               // 78
        }                                                                                                            // 79
                                                                                                                     // 80
    },                                                                                                               // 81
    /**                                                                                                              // 82
    When the confirm button is clicked, execute the given cancel() function.                                         // 83
                                                                                                                     // 84
    @event click .dapp-modal-buttons button.cancel                                                                   // 85
    */                                                                                                               // 86
    'click .dapp-modal-buttons button.cancel': function(e){                                                          // 87
        // hide the modal                                                                                            // 88
        EthElements.Modal.hide();                                                                                    // 89
                                                                                                                     // 90
        if(_.isFunction(this.cancel))                                                                                // 91
            this.cancel();                                                                                           // 92
    }                                                                                                                // 93
});                                                                                                                  // 94
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/template.output.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("dapp_output");                                                                                 // 2
Template["dapp_output"] = new Template("Template.dapp_output", (function() {                                         // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    class: "dapp-output"                                                                                             // 6
  }, "\n        ", HTML.DIV({                                                                                        // 7
    class: "value"                                                                                                   // 8
  }, "\n        ", Blaze.If(function() {                                                                             // 9
    return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("output"), "type"), "address");      // 10
  }, function() {                                                                                                    // 11
    return [ "\n            ", HTML.SPAN({                                                                           // 12
      class: "address"                                                                                               // 13
    }, "\n                ", Blaze._TemplateWith(function() {                                                        // 14
      return {                                                                                                       // 15
        identity: Spacebars.call(view.lookup("value")),                                                              // 16
        class: Spacebars.call("dapp-tiny")                                                                           // 17
      };                                                                                                             // 18
    }, function() {                                                                                                  // 19
      return Spacebars.include(view.lookupTemplate("dapp_identicon"));                                               // 20
    }), "\n                ", Blaze.View("lookup:value", function() {                                                // 21
      return Spacebars.mustache(view.lookup("value"));                                                               // 22
    }), " \n            "), "        \n        " ];                                                                  // 23
  }, function() {                                                                                                    // 24
    return [ "\n            ", HTML.STRONG(" ", Blaze.View("lookup:value", function() {                              // 25
      return Spacebars.mustache(view.lookup("value"));                                                               // 26
    }), " "), "\n            ", HTML.EM(" ", Blaze.View("lookup:extra", function() {                                 // 27
      return Spacebars.mustache(view.lookup("extra"));                                                               // 28
    }), " "), "\n\n        " ];                                                                                      // 29
  }), "\n        "), "\n        \n        ", HTML.DIV({                                                              // 30
    class: "type"                                                                                                    // 31
  }, "\n            ", Blaze.View("lookup:type", function() {                                                        // 32
    return Spacebars.mustache(view.lookup("type"));                                                                  // 33
  }), " \n            ", Blaze.If(function() {                                                                       // 34
    return Spacebars.call(view.lookup("bits"));                                                                      // 35
  }, function() {                                                                                                    // 36
    return [ "\n                (", Blaze.View("lookup:bits", function() {                                           // 37
      return Spacebars.mustache(view.lookup("bits"));                                                                // 38
    }), " bits)\n            " ];                                                                                    // 39
  }), "\n        "), "  \n    ");                                                                                    // 40
}));                                                                                                                 // 41
                                                                                                                     // 42
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ethereum_elements/output.js                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     // 2
/**                                                                                                                  // 3
The contract constants template                                                                                      // 4
                                                                                                                     // 5
@class [template] dapp_output                                                                                        // 6
@constructor                                                                                                         // 7
*/                                                                                                                   // 8
                                                                                                                     // 9
/**                                                                                                                  // 10
Formats the values for display                                                                                       // 11
                                                                                                                     // 12
@method formatOutput                                                                                                 // 13
*/                                                                                                                   // 14
var formatOutput = function(val) {                                                                                   // 15
    if(_.isArray(val))                                                                                               // 16
        return _.map(val, formatOutput);                                                                             // 17
    else {                                                                                                           // 18
        var value = 0;                                                                                               // 19
                                                                                                                     // 20
        console.log('val?', val, typeof val, _.isBoolean(val));                                                      // 21
        // stringify boolean                                                                                         // 22
        if(_.isBoolean(val))                                                                                         // 23
            value = val ? 'YES' : 'NO';                                                                              // 24
                                                                                                                     // 25
        // convert bignumber objects                                                                                 // 26
        value = (_.isObject(val) && val.toString)                                                                    // 27
            ? val.toString(10)                                                                                       // 28
            : val;                                                                                                   // 29
                                                                                                                     // 30
        return value;                                                                                                // 31
    }                                                                                                                // 32
};                                                                                                                   // 33
                                                                                                                     // 34
                                                                                                                     // 35
var createTemplateDataFromInput = function (input){                                                                  // 36
    input = _.clone(input);                                                                                          // 37
                                                                                                                     // 38
    input.typeShort = input.type.match(/[a-z]+/i);                                                                   // 39
    input.typeShort = input.typeShort[0];                                                                            // 40
    input.bits = input.type.replace(input.typeShort, '');                                                            // 41
    input.displayName = input.name                                                                                   // 42
        .replace(/([A-Z])/g, ' $1')                                                                                  // 43
        .replace(/([\-\_])/g, '&thinsp;<span class="punctuation">$1</span>&thinsp;');                                // 44
                                                                                                                     // 45
    if(input.type.indexOf('[') === -1 &&                                                                             // 46
       (input.typeShort === 'string' ||                                                                              // 47
        input.typeShort === 'uint' ||                                                                                // 48
        input.typeShort == 'int' ||                                                                                  // 49
        input.typeShort == 'address' ||                                                                              // 50
        input.typeShort == 'bool' ||                                                                                 // 51
        input.typeShort == 'bytes')) {                                                                               // 52
                                                                                                                     // 53
        input.template =  'elements_input_'+ input.typeShort;                                                        // 54
    } else {                                                                                                         // 55
        input.template =  'elements_input_json';                                                                     // 56
    }                                                                                                                // 57
                                                                                                                     // 58
    return input;                                                                                                    // 59
};                                                                                                                   // 60
                                                                                                                     // 61
                                                                                                                     // 62
Template['dapp_output'].helpers({                                                                                    // 63
    /**                                                                                                              // 64
    Formats the value if its a big number or array                                                                   // 65
                                                                                                                     // 66
    @method (value)                                                                                                  // 67
    */                                                                                                               // 68
    'value': function() {                                                                                            // 69
        var value = this.output.value;                                                                               // 70
        var type = this.output.type;                                                                                 // 71
                                                                                                                     // 72
        if (type == "bool") {                                                                                        // 73
            if (value=="true")                                                                                       // 74
                return "YES"                                                                                         // 75
            else                                                                                                     // 76
                return "NO"                                                                                          // 77
        } else if (type.indexOf("int")>0) {                                                                          // 78
            return value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")                                                  // 79
        } else {                                                                                                     // 80
            return value;                                                                                            // 81
        }                                                                                                            // 82
    },                                                                                                               // 83
    /**                                                                                                              // 84
    format the right bits                                                                                            // 85
                                                                                                                     // 86
    @method (value)                                                                                                  // 87
    */                                                                                                               // 88
    'bits': function() {                                                                                             // 89
        var bits = this.output.type.match(/([0-9]+)/i);                                                              // 90
        return bits ? bits[0] : null;                                                                                // 91
    },                                                                                                               // 92
    /**                                                                                                              // 93
    format the right type                                                                                            // 94
                                                                                                                     // 95
    @method (value)                                                                                                  // 96
    */                                                                                                               // 97
    'type': function() {                                                                                             // 98
        if(typeof TAPi18n === 'undefined') {                                                                         // 99
            return this.output.type;                                                                                 // 100
        } else {                                                                                                     // 101
            var typeShort = this.output.type.match(/([a-z]+)/i);                                                     // 102
            return TAPi18n.__('elements.type.'+ typeShort[0] );                                                      // 103
        }                                                                                                            // 104
    },                                                                                                               // 105
    /**                                                                                                              // 106
    Figures out extra data                                                                                           // 107
                                                                                                                     // 108
    @method (extra)                                                                                                  // 109
    */                                                                                                               // 110
    'extra': function() {                                                                                            // 111
        // var data = formatOutput(this.output.value); // 1000000000                                                 // 112
        var value = this.output.value;                                                                               // 113
        var type = this.output.type;                                                                                 // 114
                                                                                                                     // 115
        if (type == "bool") {                                                                                        // 116
           if (value == "true") {                                                                                    // 117
                return new Spacebars.SafeString('<span class="icon icon-check"></span>');                            // 118
            } else {                                                                                                 // 119
                return new Spacebars.SafeString('<span class="icon icon-ban"></span>')                               // 120
            }                                                                                                        // 121
        } else if(type.indexOf("int")>0) {                                                                           // 122
            data = parseInt(value, 10);                                                                              // 123
            if (data > 1400000000 && data < 1800000000 && Math.floor(data/1000) != data/1000) {                      // 124
                return '(' + moment(data*1000).fromNow() + ')';                                                      // 125
            }                                                                                                        // 126
        } else if (type.indexOf("bytes") > 0 ) {                                                                     // 127
            var returnData = "";                                                                                     // 128
            for(i = 0; i < value.length; i++) {                                                                      // 129
                // console.log("returnData", returnData);                                                            // 130
                returnData += value.charAt(i);                                                                       // 131
            }                                                                                                        // 132
            return returnData;                                                                                       // 133
        } else if (value == '') {                                                                                    // 134
            return 'Value is empty';                                                                                 // 135
        }                                                                                                            // 136
                                                                                                                     // 137
        // return;                                                                                                   // 138
    }                                                                                                                // 139
});                                                                                                                  // 140
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ethereum:elements'] = {}, {
  EthElements: EthElements
});

})();
