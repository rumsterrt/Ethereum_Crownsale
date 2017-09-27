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
var Mongo = Package.mongo.Mongo;
var HTTP = Package.http.HTTP;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package['templating-runtime'].Template;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var BigNumber = Package['ethereum:web3'].BigNumber;
var Web3 = Package['ethereum:web3'].Web3;
var PersistentMinimongo = Package['frozeman:persistent-minimongo'].PersistentMinimongo;
var LocalStore = Package['frozeman:storage'].LocalStore;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var EthTools, optionalLength, options;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ethereum_tools/ethtools.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
Template Controllers                                                                                                   // 2
                                                                                                                       // 3
@module Packages                                                                                                       // 4
*/                                                                                                                     // 5
                                                                                                                       // 6
                                                                                                                       // 7
/**                                                                                                                    // 8
Helper functions for ethereum dapps                                                                                    // 9
                                                                                                                       // 10
@class [packages] ethereum:tools                                                                                       // 11
@constructor                                                                                                           // 12
*/                                                                                                                     // 13
                                                                                                                       // 14
var isMeteorPackage = true;                                                                                            // 15
                                                                                                                       // 16
// setup LocalStore if not available                                                                                   // 17
if(typeof LocalStore === 'undefined') {                                                                                // 18
    isMeteorPackage = false;                                                                                           // 19
    LocalStore = {                                                                                                     // 20
        get: function(){},                                                                                             // 21
        set: function(){}                                                                                              // 22
    };                                                                                                                 // 23
}                                                                                                                      // 24
                                                                                                                       // 25
// stup Tracker if not available                                                                                       // 26
if(typeof Tracker === 'undefined')                                                                                     // 27
    Tracker = {                                                                                                        // 28
        Dependency: function(){                                                                                        // 29
            return {                                                                                                   // 30
                depend: function(){},                                                                                  // 31
                changed: function(){}                                                                                  // 32
            }                                                                                                          // 33
        }                                                                                                              // 34
    };                                                                                                                 // 35
                                                                                                                       // 36
var dependency = new Tracker.Dependency;                                                                               // 37
                                                                                                                       // 38
/**                                                                                                                    // 39
Check for supported currencies                                                                                         // 40
                                                                                                                       // 41
@method supportedCurrencies                                                                                            // 42
@param {String} unit                                                                                                   // 43
@return {String}                                                                                                       // 44
*/                                                                                                                     // 45
var supportedCurrencies = function(unit){                                                                              // 46
    return (unit === 'usd' ||                                                                                          // 47
           unit === 'eur' ||                                                                                           // 48
           unit === 'btc' ||                                                                                           // 49
           unit === 'gbp' ||                                                                                           // 50
           unit === 'brl');                                                                                            // 51
};                                                                                                                     // 52
                                                                                                                       // 53
/**                                                                                                                    // 54
Gets the ether unit if not set from localstorage                                                                       // 55
                                                                                                                       // 56
@method getUnit                                                                                                        // 57
@param {String} unit                                                                                                   // 58
@return {String}                                                                                                       // 59
*/                                                                                                                     // 60
var getUnit = function(unit){                                                                                          // 61
    if(!_.isString(unit)) {                                                                                            // 62
        unit = LocalStore.get('dapp_etherUnit');                                                                       // 63
                                                                                                                       // 64
        if(!unit) {                                                                                                    // 65
            unit = 'ether';                                                                                            // 66
            LocalStore.set('dapp_etherUnit', unit);                                                                    // 67
        }                                                                                                              // 68
    }                                                                                                                  // 69
                                                                                                                       // 70
    return unit;                                                                                                       // 71
};                                                                                                                     // 72
                                                                                                                       // 73
                                                                                                                       // 74
                                                                                                                       // 75
/**                                                                                                                    // 76
Helper functions for ethereum dapps                                                                                    // 77
                                                                                                                       // 78
@class EthTools                                                                                                        // 79
@constructor                                                                                                           // 80
*/                                                                                                                     // 81
                                                                                                                       // 82
EthTools = {                                                                                                           // 83
    lang: 'en'                                                                                                         // 84
};                                                                                                                     // 85
                                                                                                                       // 86
if(isMeteorPackage) {                                                                                                  // 87
                                                                                                                       // 88
    /**                                                                                                                // 89
    Sets the default unit used by all EthTools functions, if no unit is provided.                                      // 90
                                                                                                                       // 91
        EthTools.setUnit('ether')                                                                                      // 92
                                                                                                                       // 93
    @method setUnit                                                                                                    // 94
    @param {String} unit the unit like 'ether', or 'eur'                                                               // 95
    @param {Boolean}                                                                                                   // 96
    **/                                                                                                                // 97
    EthTools.setUnit = function(unit){                                                                                 // 98
        if(supportedCurrencies(unit)) {                                                                                // 99
            LocalStore.set('dapp_etherUnit', unit);                                                                    // 100
            return true;                                                                                               // 101
        } else {                                                                                                       // 102
            try {                                                                                                      // 103
                web3.toWei(1, unit);                                                                                   // 104
                LocalStore.set('dapp_etherUnit', unit);                                                                // 105
                return true;                                                                                           // 106
            } catch(e) {                                                                                               // 107
                return false;                                                                                          // 108
            }                                                                                                          // 109
        }                                                                                                              // 110
    };                                                                                                                 // 111
                                                                                                                       // 112
    /**                                                                                                                // 113
    Get the default unit used by all EthTools functions, if no unit is provided.                                       // 114
                                                                                                                       // 115
        EthTools.getUnit()                                                                                             // 116
                                                                                                                       // 117
    @method getUnit                                                                                                    // 118
    @return {String} unit the unit like 'ether', or 'eur'                                                              // 119
    **/                                                                                                                // 120
    EthTools.getUnit = function(){                                                                                     // 121
        return LocalStore.get('dapp_etherUnit');                                                                       // 122
    };                                                                                                                 // 123
}                                                                                                                      // 124
                                                                                                                       // 125
/**                                                                                                                    // 126
Sets the locale to display numbers in different formats.                                                               // 127
                                                                                                                       // 128
    EthTools.setLocale('de')                                                                                           // 129
                                                                                                                       // 130
@method language                                                                                                       // 131
@param {String} lang the locale like "de" or "de-DE"                                                                   // 132
**/                                                                                                                    // 133
EthTools.setLocale = function(lang){                                                                                   // 134
    var lang = lang.substr(0,2).toLowerCase();                                                                         // 135
    // numeral.language(lang);                                                                                         // 136
    EthTools.lang = lang;                                                                                              // 137
                                                                                                                       // 138
    dependency.changed();                                                                                              // 139
                                                                                                                       // 140
    return lang;                                                                                                       // 141
};                                                                                                                     // 142
                                                                                                                       // 143
/**                                                                                                                    // 144
Formats a given number                                                                                                 // 145
                                                                                                                       // 146
    EthTools.formatNumber(10000, "0.0[000]")                                                                           // 147
                                                                                                                       // 148
@method formatNumber                                                                                                   // 149
@param {Number|String|BigNumber} number the number to format                                                           // 150
@param {String} format           the format string e.g. "0,0.0[000]" see http://numeraljs.com for more.                // 151
@return {String} The formated time                                                                                     // 152
**/                                                                                                                    // 153
EthTools.formatNumber = function(number, format){                                                                      // 154
    var length = optionalLength = 0;                                                                                   // 155
    dependency.depend();                                                                                               // 156
                                                                                                                       // 157
    if(!_.isFinite(number) && !(number instanceof BigNumber))                                                          // 158
        number = 0;                                                                                                    // 159
                                                                                                                       // 160
    if(format instanceof Spacebars.kw)                                                                                 // 161
        format = null;                                                                                                 // 162
                                                                                                                       // 163
    if(_.isString(number))                                                                                             // 164
        number = new BigNumber(number, 10);                                                                            // 165
    if(_.isFinite(number) && !_.isObject(number))                                                                      // 166
        number = new BigNumber(number);                                                                                // 167
                                                                                                                       // 168
    options = (EthTools.lang === 'en')                                                                                 // 169
        ?   { decimalSeparator: '.',                                                                                   // 170
              groupSeparator: ',',                                                                                     // 171
              groupSize: 3                                                                                             // 172
            }                                                                                                          // 173
        :   { decimalSeparator: ',',                                                                                   // 174
              groupSeparator: ' ',                                                                                     // 175
              groupSize: 3                                                                                             // 176
            };                                                                                                         // 177
    BigNumber.config({ FORMAT: options });                                                                             // 178
                                                                                                                       // 179
                                                                                                                       // 180
    // get segment positions (0,0. | 0 | [0])                                                                          // 181
    if(format && ~format.indexOf('.')) {                                                                               // 182
        var decimalPos = format.indexOf('.');                                                                          // 183
        if(~format.indexOf('[')) {                                                                                     // 184
            length = format.substr(decimalPos, format.indexOf('[') - decimalPos).replace(/[\.\[\]]/g,'').length;       // 185
            optionalLength = format.substr(format.indexOf('[')).replace(/[\[\]]/g,'').length;                          // 186
        } else {                                                                                                       // 187
            length = format.substr(decimalPos).replace(/[\.\[\]]/g,'').length;                                         // 188
            optionalLength = 0;                                                                                        // 189
        }                                                                                                              // 190
    }                                                                                                                  // 191
    var fullLength = length + optionalLength;                                                                          // 192
    number = number.toFormat(fullLength ? fullLength : undefined);                                                     // 193
                                                                                                                       // 194
    // if segements are detected, rebuild the number string                                                            // 195
    if(fullLength) {                                                                                                   // 196
        var beforeDecimal = number.substr(0, number.indexOf(options.decimalSeparator) + 1);                            // 197
        var afterDecimal = number.replace(beforeDecimal, '').substr(0, length);                                        // 198
        var afterDecimalOptional = number.replace(beforeDecimal, '').substr(length, optionalLength).replace(/0*$/,'');
        beforeDecimal = beforeDecimal.replace(options.decimalSeparator, '');                                           // 200
                                                                                                                       // 201
        return (!afterDecimal && !afterDecimalOptional)                                                                // 202
            ? beforeDecimal                                                                                            // 203
            : beforeDecimal + options.decimalSeparator + afterDecimal + afterDecimalOptional;                          // 204
                                                                                                                       // 205
    // otherwise simply return the formated number                                                                     // 206
    } else {                                                                                                           // 207
        return number;                                                                                                 // 208
    }                                                                                                                  // 209
};                                                                                                                     // 210
                                                                                                                       // 211
/**                                                                                                                    // 212
Formats a number of wei to a balance.                                                                                  // 213
                                                                                                                       // 214
    EthTools.formatBalance(myNumber, "0,0.0[0000] unit")                                                               // 215
                                                                                                                       // 216
@method (formatBalance)                                                                                                // 217
@param {String} number                                                                                                 // 218
@param {String} format       the format string                                                                         // 219
@return {String} The formatted number                                                                                  // 220
**/                                                                                                                    // 221
EthTools.formatBalance = function(number, format, unit){                                                               // 222
    dependency.depend();                                                                                               // 223
                                                                                                                       // 224
    if(!_.isFinite(number) && !(number instanceof BigNumber))                                                          // 225
        number = 0;                                                                                                    // 226
                                                                                                                       // 227
    if(format instanceof Spacebars.kw)                                                                                 // 228
        format = null;                                                                                                 // 229
                                                                                                                       // 230
    format = format || '0,0.[00000000]';                                                                               // 231
                                                                                                                       // 232
    unit = getUnit(unit);                                                                                              // 233
                                                                                                                       // 234
    if(typeof EthTools.ticker !== 'undefined' && supportedCurrencies(unit)) {                                          // 235
        var ticker = EthTools.ticker.findOne(unit, {fields: {price: 1}});                                              // 236
                                                                                                                       // 237
        // convert first to ether                                                                                      // 238
        number = web3.fromWei(number, 'ether');                                                                        // 239
                                                                                                                       // 240
        // then times the currency                                                                                     // 241
        if(ticker) {                                                                                                   // 242
            number = (number instanceof BigNumber || _.isObject(number))                                               // 243
                ? number.times(ticker.price)                                                                           // 244
                : new BigNumber(String(number), 10).times(ticker.price);                                               // 245
                                                                                                                       // 246
        } else {                                                                                                       // 247
            number = '0';                                                                                              // 248
        }                                                                                                              // 249
                                                                                                                       // 250
    } else {                                                                                                           // 251
        number = web3.fromWei(number, unit.toLowerCase());                                                             // 252
    }                                                                                                                  // 253
                                                                                                                       // 254
    var isUppercase = (format.indexOf('UNIT') !== -1);                                                                 // 255
                                                                                                                       // 256
    var cleanedFormat = format.replace(/ *unit */i,'').replace(/ +/,'');                                               // 257
    var format = format.replace(cleanedFormat, '__format__');                                                          // 258
                                                                                                                       // 259
    if(format.toLowerCase().indexOf('unit') !== -1) {                                                                  // 260
        return format.replace('__format__', EthTools.formatNumber(number, cleanedFormat)).replace(/unit/i, (isUppercase ? unit.toUpperCase() : unit));
    } else                                                                                                             // 262
        return EthTools.formatNumber(number, cleanedFormat);                                                           // 263
};                                                                                                                     // 264
                                                                                                                       // 265
                                                                                                                       // 266
/**                                                                                                                    // 267
Formats any of the supported currency to ethereum wei.                                                                 // 268
                                                                                                                       // 269
    EthTools.toWei(myNumber, unit)                                                                                     // 270
                                                                                                                       // 271
@method (toWei)                                                                                                        // 272
@param {String} number                                                                                                 // 273
@return {String} unit                                                                                                  // 274
**/                                                                                                                    // 275
EthTools.toWei = function(number, unit){                                                                               // 276
                                                                                                                       // 277
    if(!_.isFinite(number) && !(number instanceof BigNumber))                                                          // 278
        return number;                                                                                                 // 279
                                                                                                                       // 280
    unit = getUnit(unit);                                                                                              // 281
                                                                                                                       // 282
    if(typeof EthTools.ticker !== 'undefined' && supportedCurrencies(unit)) {                                          // 283
        var ticker = EthTools.ticker.findOne(unit, {fields: {price: 1}});                                              // 284
                                                                                                                       // 285
        // convert first to ether                                                                                      // 286
        number = web3.toWei(number, 'ether');                                                                          // 287
                                                                                                                       // 288
        // then times the currency                                                                                     // 289
        if(ticker) {                                                                                                   // 290
            number = (number instanceof BigNumber || _.isObject(number))                                               // 291
                ? number.dividedBy(ticker.price)                                                                       // 292
                : new BigNumber(String(number), 10).dividedBy(ticker.price);                                           // 293
                                                                                                                       // 294
            // make sure the number is flat                                                                            // 295
            number = number.round(0).toString(10);                                                                     // 296
        } else {                                                                                                       // 297
            number = '0';                                                                                              // 298
        }                                                                                                              // 299
                                                                                                                       // 300
    } else {                                                                                                           // 301
        number = web3.toWei(number, unit.toLowerCase());                                                               // 302
                                                                                                                       // 303
    }                                                                                                                  // 304
                                                                                                                       // 305
    return number;                                                                                                     // 306
};                                                                                                                     // 307
                                                                                                                       // 308
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ethereum_tools/ticker.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Price ticker                                                                                                        // 1
EthTools.ticker = new Mongo.Collection('ethereum_price_ticker', {connection: null});                                   // 2
if(Meteor.isClient)                                                                                                    // 3
    new PersistentMinimongo(EthTools.ticker);                                                                          // 4
                                                                                                                       // 5
EthTools.ticker.start = function(options){                                                                             // 6
    options = options || {};                                                                                           // 7
    if (!options.currencies){                                                                                          // 8
        options.currencies = ['BTC', 'USD', 'EUR'];                                                                    // 9
    }                                                                                                                  // 10
    var url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=' + options.currencies.join(',');           // 11
    if (options.extraParams) {                                                                                         // 12
        url += '&extraParams='+ options.extraParams;                                                                   // 13
    }                                                                                                                  // 14
                                                                                                                       // 15
    var updatePrice = function(e, res){                                                                                // 16
                                                                                                                       // 17
        if(!e && res && res.statusCode === 200) {                                                                      // 18
            var content = JSON.parse(res.content);                                                                     // 19
                                                                                                                       // 20
            if(content){                                                                                               // 21
                _.each(content, function(price, key){                                                                  // 22
                    var name = key.toLowerCase();                                                                      // 23
                                                                                                                       // 24
                    // make sure its a number and nothing else!                                                        // 25
                    if(_.isFinite(price)) {                                                                            // 26
                        EthTools.ticker.upsert(name, {$set: {                                                          // 27
                            price: String(price),                                                                      // 28
                            timestamp: null                                                                            // 29
                        }});                                                                                           // 30
                    }                                                                                                  // 31
                                                                                                                       // 32
                });                                                                                                    // 33
            }                                                                                                          // 34
        } else {                                                                                                       // 35
            console.warn('Can not connect to https://mini-api.cryptocompare.com to get price ticker data, please check your internet connection.');
        }                                                                                                              // 37
    };                                                                                                                 // 38
                                                                                                                       // 39
    // update right away                                                                                               // 40
    HTTP.get(url, updatePrice);                                                                                        // 41
                                                                                                                       // 42
    // update prices                                                                                                   // 43
    Meteor.setInterval(function(){                                                                                     // 44
        HTTP.get(url, updatePrice);                                                                                    // 45
    }, 1000 * 30);                                                                                                     // 46
}                                                                                                                      // 47
                                                                                                                       // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ethereum_tools/globalHelpers.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
Formats a number.                                                                                                      // 2
                                                                                                                       // 3
    {{dapp_formatNumber myNumber "0,0.0[0000]"}}                                                                       // 4
                                                                                                                       // 5
@method (dapp_formatNumber)                                                                                            // 6
@param {String} number                                                                                                 // 7
@param {String} format       the format string                                                                         // 8
@return {String} The formatted number                                                                                  // 9
**/                                                                                                                    // 10
Template.registerHelper('dapp_formatNumber', EthTools.formatNumber);                                                   // 11
                                                                                                                       // 12
/**                                                                                                                    // 13
Formats a number.                                                                                                      // 14
                                                                                                                       // 15
    {{dapp_formatBalance myNumber "0,0.0[0000]"}}                                                                      // 16
                                                                                                                       // 17
@method (dapp_formatBalance)                                                                                           // 18
@param {String} number                                                                                                 // 19
@param {String} format       the format string                                                                         // 20
@return {String} The formatted number                                                                                  // 21
**/                                                                                                                    // 22
Template.registerHelper('dapp_formatBalance', EthTools.formatBalance);                                                 // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ethereum:tools'] = {}, {
  EthTools: EthTools
});

})();
