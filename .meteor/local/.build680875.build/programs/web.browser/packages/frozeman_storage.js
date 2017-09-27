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
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var LocalStore;

(function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// packages/frozeman_storage/LocalStore.js                                    //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
                                                                              // 1
/**                                                                           // 2
The LocalStore singleton.                                                     // 3
                                                                              // 4
@class TemplateStore                                                          // 5
@constructor                                                                  // 6
**/                                                                           // 7
LocalStore = {                                                                // 8
    /**                                                                       // 9
    This object stores all keys and their values.                             // 10
                                                                              // 11
    @property keys                                                            // 12
    @type Object                                                              // 13
    @default {}                                                               // 14
    @example                                                                  // 15
                                                                              // 16
        {                                                                     // 17
            name->myProperty: "myValue",                                      // 18
            ...                                                               // 19
        }                                                                     // 20
                                                                              // 21
    **/                                                                       // 22
    keys: {},                                                                 // 23
                                                                              // 24
                                                                              // 25
    /**                                                                       // 26
    Keeps the dependencies for the keys in the store.                         // 27
                                                                              // 28
    @property deps                                                            // 29
    @type Object                                                              // 30
    @default {}                                                               // 31
    @example                                                                  // 32
                                                                              // 33
        {                                                                     // 34
            name->myProperty: new Tracker.Dependency,                         // 35
            ...                                                               // 36
        }                                                                     // 37
                                                                              // 38
    **/                                                                       // 39
    deps: {},                                                                 // 40
                                                                              // 41
    // METHODS                                                                // 42
                                                                              // 43
    // PRIVATE                                                                // 44
    /**                                                                       // 45
    Creates at least ones a `Tracker.Dependency` object to a key.             // 46
                                                                              // 47
    @method _ensureDeps                                                       // 48
    @private                                                                  // 49
    @param {String} key     the name of the key to add a dependecy tracker to
    @return undefined                                                         // 51
    **/                                                                       // 52
    _ensureDeps: function (key) {                                             // 53
        if (!this.deps[key]){                                                 // 54
            this.deps[key] = new Tracker.Dependency;                          // 55
        }                                                                     // 56
    },                                                                        // 57
	set: function(key, value, options, callback){                                // 58
                                                                              // 59
        this._ensureDeps(key);                                                // 60
                                                                              // 61
		// USE CHROME STORAGE                                                       // 62
		if(typeof chrome !== 'undefined' && chrome.storage) {                       // 63
			var item = {};                                                             // 64
			item[key] = value;                                                         // 65
                                                                              // 66
			// set                                                                     // 67
			chrome.storage.local.set(item, function(){                                 // 68
                                                                              // 69
				// re-run reactive functions                                              // 70
				if(!options || options.reactive !== false)                                // 71
	                this.deps[key].changed();                                    // 72
                                                                              // 73
	            // run callbacks                                                 // 74
				if(_.isFunction(callback))                                                // 75
					callback();                                                              // 76
			});                                                                        // 77
                                                                              // 78
                                                                              // 79
		// USE LOCALSTORAGE                                                         // 80
		} else {                                                                    // 81
			// stringify                                                               // 82
			if(_.isObject(value))                                                      // 83
				value = EJSON.stringify(value);                                           // 84
                                                                              // 85
			// set                                                                     // 86
            // use try to prevent warnings from low cache storages            // 87
            try {                                                             // 88
    			localStorage.setItem(key, value);                                      // 89
            } catch(e) {                                                      // 90
                                                                              // 91
            }                                                                 // 92
                                                                              // 93
			// re-run reactive functions                                               // 94
			if(!options || options.reactive !== false)                                 // 95
                this.deps[key].changed();                                     // 96
                                                                              // 97
			// run callbacks                                                           // 98
			if(_.isFunction(callback))                                                 // 99
				callback();                                                               // 100
		}                                                                           // 101
	},                                                                           // 102
	get: function(key, options, callback){                                       // 103
                                                                              // 104
        this._ensureDeps(key);                                                // 105
                                                                              // 106
                                                                              // 107
        // DEPEND REACTIVE FUNCTIONS                                          // 108
		if(!options || options.reactive !== false)                                  // 109
            this.deps[key].depend();                                          // 110
                                                                              // 111
                                                                              // 112
		// use chrome storage                                                       // 113
		if(typeof chrome !== 'undefined' && chrome.storage) {                       // 114
                                                                              // 115
			// get                                                                     // 116
			chrome.storage.local.get(key, callback);                                   // 117
                                                                              // 118
                                                                              // 119
		// USE LOCALSTORAGE                                                         // 120
		} else {                                                                    // 121
			// get                                                                     // 122
			var value = localStorage.getItem(key),                                     // 123
				retunValue = value;                                                       // 124
                                                                              // 125
			// try to parse                                                            // 126
            if(value && _.isString(value)) {                                  // 127
            	try {                                                            // 128
	                retunValue = EJSON.parse(value);                             // 129
            	} catch(error){                                                  // 130
            		retunValue = value;                                             // 131
            	}                                                                // 132
            }                                                                 // 133
                                                                              // 134
            return retunValue;                                                // 135
		}                                                                           // 136
                                                                              // 137
	}                                                                            // 138
}                                                                             // 139
////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['frozeman:storage'] = {}, {
  LocalStore: LocalStore
});

})();
