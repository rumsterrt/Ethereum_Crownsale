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
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var TemplateVar;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/frozeman_template-var/TemplateVar.js                                                              //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
/**                                                                                                           // 1
Template helpers                                                                                              // 2
                                                                                                              // 3
@module package frozeman:template-var                                                                         // 4
**/                                                                                                           // 5
                                                                                                              // 6
                                                                                                              // 7
/**                                                                                                           // 8
The `TemplateVar` provides reactive variables for template instances.                                         // 9
                                                                                                              // 10
Note! The reactive variables, are not preserved over hot code reloads, like the Meteor `Session` object does.
                                                                                                              // 12
                                                                                                              // 13
To set and get properties inside template helpers, hooks and events do as follow:                             // 14
                                                                                                              // 15
    // set a property                                                                                         // 16
    TemplateVar.set('myProperty', 'myValue');                                                                 // 17
                                                                                                              // 18
    // to get it inside a helper, or callback                                                                 // 19
    TemplateVar.get('myProperty');                                                                            // 20
                                                                                                              // 21
                                                                                                              // 22
@class TemplateVar                                                                                            // 23
@constructor                                                                                                  // 24
**/                                                                                                           // 25
TemplateVar = {                                                                                               // 26
                                                                                                              // 27
    /**                                                                                                       // 28
    Gets the current template instance and returns also the correct keys and values.                          // 29
                                                                                                              // 30
    @method _getTemplateInstance                                                                              // 31
    @param {Object} givenTemplate            the current template                                             // 32
    @param {String} key                 the given key                                                         // 33
    @param {Mixed} value                the value to set                                                      // 34
    @return {String} The generated key name.                                                                  // 35
    **/                                                                                                       // 36
    _getTemplateInstance: function(givenTemplate, key, value){                                                // 37
        var template = null;                                                                                  // 38
                                                                                                              // 39
        // try if a template instance was given                                                               // 40
        if(_.isObject(givenTemplate) && (givenTemplate.hasOwnProperty('_templateInstance') || givenTemplate.hasOwnProperty('view'))) {
                                                                                                              // 42
            // if it couldn't get the template, check if a template instance was given.                       // 43
            if(givenTemplate.hasOwnProperty('_templateInstance'))                                             // 44
                template = givenTemplate;                                                                     // 45
            else if(givenTemplate.hasOwnProperty('view'))                                                     // 46
                template = givenTemplate.view;                                                                // 47
                                                                                                              // 48
        // otherwise try to get one yourself                                                                  // 49
        } else {                                                                                              // 50
            try {                                                                                             // 51
                                                                                                              // 52
                if(givenTemplate === 'waiting') {                                                             // 53
                    return;                                                                                   // 54
                }                                                                                             // 55
                                                                                                              // 56
                template = Template.instance().view;                                                          // 57
                value = key;                                                                                  // 58
                key = givenTemplate;                                                                          // 59
                                                                                                              // 60
            } catch(e) {                                                                                      // 61
                throw new Meteor.Error('TemplateVar: works only from withing template helpers, callbacks or events. Additonally you can pass a template instance as the first parameter.');
            }                                                                                                 // 63
        }                                                                                                     // 64
                                                                                                              // 65
                                                                                                              // 66
                                                                                                              // 67
                                                                                                              // 68
        // move on view up if its a #with, #if or #unless                                                     // 69
        while(template.name.indexOf('Template.') === -1 && template.parentView) {                             // 70
            template = template.parentView;                                                                   // 71
        }                                                                                                     // 72
                                                                                                              // 73
        // make sure the template session object exists                                                       // 74
        if(template && !template._templateVar)                                                                // 75
            template._templateVar = {};                                                                       // 76
                                                                                                              // 77
        // create Reactive var, if not existing                                                               // 78
        if(template && !template._templateVar[key])                                                           // 79
            template._templateVar[key] = new ReactiveVar(value);                                              // 80
                                                                                                              // 81
                                                                                                              // 82
        // build the keyname                                                                                  // 83
        return {                                                                                              // 84
            key: key,                                                                                         // 85
            value: value,                                                                                     // 86
            template: template                                                                                // 87
        };                                                                                                    // 88
    },                                                                                                        // 89
                                                                                                              // 90
    /**                                                                                                       // 91
    Gets the template instance form an DOM selector of an element within.                                     // 92
                                                                                                              // 93
    @method _getTemplateInstance                                                                              // 94
    @param {String} selector            an element withing the template to get                                // 95
    @return {Object} The template instace                                                                     // 96
    **/                                                                                                       // 97
    _getTemplateInstanceBySelector: function(selector){                                                       // 98
                                                                                                              // 99
        var view;                                                                                             // 100
                                                                                                              // 101
        try {                                                                                                 // 102
            view = Blaze.getView($(selector)[0]);                                                             // 103
        } catch(e) {                                                                                          // 104
                                                                                                              // 105
        }                                                                                                     // 106
                                                                                                              // 107
        // set interval until elemtn appears and re-call funciton????                                         // 108
        if(selector && view) {                                                                                // 109
                                                                                                              // 110
            // move on view up if its a #with, #if or #unless                                                 // 111
            while(view.name.indexOf('Template.') === -1 && view.parentView) {                                 // 112
                view = view.parentView;                                                                       // 113
            }                                                                                                 // 114
                                                                                                              // 115
            if(!view || !view.templateInstance)                                                               // 116
                return;                                                                                       // 117
                                                                                                              // 118
            // view is not yet rendered, wait for it and recall this function                                 // 119
            if(!view.isRendered) {                                                                            // 120
                var wait = new ReactiveVar(false);                                                            // 121
                // make reactive                                                                              // 122
                wait.get();                                                                                   // 123
                Blaze.getView($(selector)[0]).onViewReady(function(){                                         // 124
                    if(wait)                                                                                  // 125
                        wait.set(true);                                                                       // 126
                    wait = null;                                                                              // 127
                });                                                                                           // 128
                                                                                                              // 129
                return 'waiting';                                                                             // 130
            }                                                                                                 // 131
                                                                                                              // 132
            return view.templateInstance();                                                                   // 133
                                                                                                              // 134
        } else {                                                                                              // 135
            console.warn('TemplateVar: Couldn\'t find an element within a template matching the selector "'+ selector +'"');
            return null;                                                                                      // 137
        }                                                                                                     // 138
    },                                                                                                        // 139
                                                                                                              // 140
                                                                                                              // 141
    // PUBLIC                                                                                                 // 142
                                                                                                              // 143
    /**                                                                                                       // 144
    When get is called we use the ReactiveVar.get from the template instance.                                 // 145
                                                                                                              // 146
    @method get                                                                                               // 147
    @param {Object} template            the current template                                                  // 148
    @param {String} propertyName     The name of the property you want to get. Should consist of the `'myPropertyName'`
    @return {Mixed} The stored value.                                                                         // 150
    **/                                                                                                       // 151
    get: function (template, propertyName) {                                                                  // 152
        var values = TemplateVar._getTemplateInstance(template, propertyName);                                // 153
                                                                                                              // 154
        return values.template._templateVar[values.key].get();                                                // 155
    },                                                                                                        // 156
                                                                                                              // 157
                                                                                                              // 158
    /**                                                                                                       // 159
    When set is called every depending reactive function where `TemplateVar.get()` with the same key is called will rerun.
                                                                                                              // 161
    @method set                                                                                               // 162
    @param {Object} template            the current template                                                  // 163
    @param {String} propertyName     The name of the property you want to get. Should consist of the `'templateName->myPropertyName'`
    @param {String|Object} value     If the value is a string with `rerun`, then it will be rerun all dependent functions where get `TemplateInstance.get()` was called.
    @return undefined                                                                                         // 166
    **/                                                                                                       // 167
    set: function (template, propertyName, value) {                                                           // 168
        var values = TemplateVar._getTemplateInstance(template, propertyName, value);                         // 169
                                                                                                              // 170
        values.template._templateVar[values.key].set(values.value);                                           // 171
    },                                                                                                        // 172
                                                                                                              // 173
                                                                                                              // 174
    /**                                                                                                       // 175
    When get is called we use the ReactiveVar.get from the template instance.                                 // 176
                                                                                                              // 177
    @method get                                                                                               // 178
    @param {Object} selector         a selector of an element within another template                         // 179
    @param {String} propertyName     The name of the property you want to get. Should consist of the `'myPropertyName'`
    @return {Mixed} The stored value.                                                                         // 181
    **/                                                                                                       // 182
    getFrom: function (selector, propertyName) {                                                              // 183
        var template = TemplateVar._getTemplateInstanceBySelector(selector);                                  // 184
        if(!template)                                                                                         // 185
            return;                                                                                           // 186
        var values = TemplateVar._getTemplateInstance(template, propertyName);                                // 187
                                                                                                              // 188
        if(values)                                                                                            // 189
            return values.template._templateVar[values.key].get();                                            // 190
    },                                                                                                        // 191
                                                                                                              // 192
                                                                                                              // 193
    /**                                                                                                       // 194
    When set is called every depending reactive function where `TemplateVar.get()` with the same key is called will rerun.
                                                                                                              // 196
    @method set                                                                                               // 197
    @param {Object} selector         a selector of an element within another template                         // 198
    @param {String} propertyName     The name of the property you want to get. Should consist of the `'templateName->myPropertyName'`
    @param {String|Object} value     If the value is a string with `rerun`, then it will be rerun all dependent functions where get `TemplateInstance.get()` was called.
    @return undefined                                                                                         // 201
    **/                                                                                                       // 202
    setTo: function (selector, propertyName, value) {                                                         // 203
        var template = TemplateVar._getTemplateInstanceBySelector(selector);                                  // 204
        if(!template)                                                                                         // 205
            return;                                                                                           // 206
        var values = TemplateVar._getTemplateInstance(template, propertyName, value);                         // 207
                                                                                                              // 208
        if(values)                                                                                            // 209
            values.template._templateVar[values.key].set(values.value);                                       // 210
    }                                                                                                         // 211
};                                                                                                            // 212
                                                                                                              // 213
// Register Global helpers                                                                                    // 214
/**                                                                                                           // 215
Global TemplateVar helper                                                                                     // 216
                                                                                                              // 217
@method (TemplateVar)                                                                                         // 218
**/                                                                                                           // 219
Template.registerHelper('TemplateVar', function(name){                                                        // 220
    return {                                                                                                  // 221
        get: TemplateVar.get.bind(this, Template.instance()),                                                 // 222
        set: TemplateVar.set.bind(this, Template.instance()),                                                 // 223
        getFrom: TemplateVar.getFrom.bind(this),                                                              // 224
        setTo: TemplateVar.setTo.bind(this)                                                                   // 225
    };                                                                                                        // 226
});                                                                                                           // 227
                                                                                                              // 228
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['frozeman:template-var'] = {}, {
  TemplateVar: TemplateVar
});

})();
