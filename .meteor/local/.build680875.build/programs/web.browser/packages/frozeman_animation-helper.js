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
var Template = Package['templating-runtime'].Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/frozeman_animation-helper/packages/frozeman_animation-helper.js                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                             //     // 4
// packages/frozeman:animation-helper/template.animation-helper.js                                             //     // 5
//                                                                                                             //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                               //     // 8
                                                                                                               // 1   // 9
Template.__checkName("Animate");                                                                               // 2   // 10
Template["Animate"] = new Template("Template.Animate", (function() {                                           // 3   // 11
  var view = this;                                                                                             // 4   // 12
  return Blaze._InOuterTemplateScope(view, function() {                                                        // 5   // 13
    return Spacebars.include(function() {                                                                      // 6   // 14
      return Spacebars.call(view.templateContentBlock);                                                        // 7   // 15
    });                                                                                                        // 8   // 16
  });                                                                                                          // 9   // 17
}));                                                                                                           // 10  // 18
                                                                                                               // 11  // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 20
                                                                                                                      // 21
}).call(this);                                                                                                        // 22
                                                                                                                      // 23
                                                                                                                      // 24
                                                                                                                      // 25
                                                                                                                      // 26
                                                                                                                      // 27
                                                                                                                      // 28
(function () {                                                                                                        // 29
                                                                                                                      // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 31
//                                                                                                             //     // 32
// packages/frozeman:animation-helper/animation-helper.js                                                      //     // 33
//                                                                                                             //     // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 35
                                                                                                               //     // 36
/**                                                                                                            // 1   // 37
Aniamtion-Helper                                                                                               // 2   // 38
                                                                                                               // 3   // 39
@module package animation-helper                                                                               // 4   // 40
**/                                                                                                            // 5   // 41
                                                                                                               // 6   // 42
                                                                                                               // 7   // 43
/**                                                                                                            // 8   // 44
Check if the animation element has a animation set                                                             // 9   // 45
                                                                                                               // 10  // 46
@method checkForError                                                                                          // 11  // 47
@return {Boolean} true, when an error was detected                                                             // 12  // 48
*/                                                                                                             // 13  // 49
var checkForError = function($node){                                                                           // 14  // 50
                                                                                                               // 15  // 51
    if($node.css('transition') === 'all 0s ease 0s' && $node.css('animation') === 'none 0s ease 0s 1 normal none running') {
        console.warn('animation-helper error: The following element has no transition defined, but an "animate" class:', $node[0]);
        return true;                                                                                           // 18  // 54
    } else                                                                                                     // 19  // 55
        return false;                                                                                          // 20  // 56
};                                                                                                             // 21  // 57
                                                                                                               // 22  // 58
                                                                                                               // 23  // 59
Template['Animate'].rendered = function(){                                                                     // 24  // 60
    var template = this;                                                                                       // 25  // 61
    // template._animation_helper_animationElements = this.findAll('.animate');                                // 26  // 62
                                                                                                               // 27  // 63
                                                                                                               // 28  // 64
    // HACK: initial animation rendered, as insertElement, doesn't fire as the rendered callback happended after the first insert
    _.each(this.findAll('.animate'), function(item){                                                           // 30  // 66
        var $item = $(item);                                                                                   // 31  // 67
                                                                                                               // 32  // 68
        // check if the element has a transition                                                               // 33  // 69
        if(checkForError($item))                                                                               // 34  // 70
            return;                                                                                            // 35  // 71
                                                                                                               // 36  // 72
        $item.width(); // force-draw before animation                                                          // 37  // 73
        $item.removeClass('animate');                                                                          // 38  // 74
                                                                                                               // 39  // 75
        // console.log('rendered', item, item._animation_helper_isVisible);                                    // 40  // 76
                                                                                                               // 41  // 77
        $item.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionEnd msTransitionEnd animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd animationEnd msAnimationEnd', function(e) {
            if (e.target === item) {                                                                           // 43  // 79
                $item.off(e);                                                                                  // 44  // 80
                item._animation_helper_isVisible = true;                                                       // 45  // 81
            }                                                                                                  // 46  // 82
        });                                                                                                    // 47  // 83
    });                                                                                                        // 48  // 84
                                                                                                               // 49  // 85
                                                                                                               // 50  // 86
    // add the parentNode te the instance, so we can access it in the destroyed function                       // 51  // 87
    template._animation_helper_parentNode = this.firstNode.parentNode;                                         // 52  // 88
                                                                                                               // 53  // 89
    template._animation_helper_parentNode._uihooks = {                                                         // 54  // 90
        insertElement: function (node, next) {                                                                 // 55  // 91
            var $node = $(node);                                                                               // 56  // 92
                                                                                                               // 57  // 93
            $node.insertBefore(next);                                                                          // 58  // 94
                                                                                                               // 59  // 95
            // console.log('inserted', node, node._animation_helper_isVisible);                                // 60  // 96
                                                                                                               // 61  // 97
            if($node.hasClass('animate') && !checkForError($node)) {                                           // 62  // 98
                                                                                                               // 63  // 99
                                                                                                               // 64  // 100
                                                                                                               // 65  // 101
                // add to animation elements array                                                             // 66  // 102
                // if(!_.contains(template._animation_helper_animationElements, node))                         // 67  // 103
                //     template._animation_helper_animationElements.push(node);                                // 68  // 104
                                                                                                               // 69  // 105
                                                                                                               // 70  // 106
                // animate                                                                                     // 71  // 107
                $node.width(); // force-draw before animation                                                  // 72  // 108
                $node.removeClass('animate');                                                                  // 73  // 109
                                                                                                               // 74  // 110
                $node.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionEnd msTransitionEnd animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd animationEnd msAnimationEnd', function(e) {
                    if (e.target === node) {                                                                   // 76  // 112
                        $node.off(e);                                                                          // 77  // 113
                        node._animation_helper_isVisible = true;                                               // 78  // 114
                    }                                                                                          // 79  // 115
                });                                                                                            // 80  // 116
            }                                                                                                  // 81  // 117
                                                                                                               // 82  // 118
        },                                                                                                     // 83  // 119
        removeElement: function (node) {                                                                       // 84  // 120
            var $node = $(node);                                                                               // 85  // 121
                // indexOfElement = _.indexOf(template._animation_helper_animationElements, node);             // 86  // 122
                                                                                                               // 87  // 123
            // console.log('removed',node, node._animation_helper_isVisible);                                  // 88  // 124
                                                                                                               // 89  // 125
            if(node._animation_helper_isVisible) { //&& !$node.hasClass('animate') //indexOfElement !== -1 &&  // 90  // 126
                                                                                                               // 91  // 127
                // add timeout in case the element wasn't removed                                              // 92  // 128
                var timeoutId;                                                                                 // 93  // 129
                if(Meteor.isClient) {                                                                          // 94  // 130
                    timeoutId = Meteor.setTimeout(function(){                                                  // 95  // 131
                        $node.remove();                                                                        // 96  // 132
                        $node = null;                                                                          // 97  // 133
                    }, 5000);                                                                                  // 98  // 134
                }                                                                                              // 99  // 135
                                                                                                               // 100
                // remove from animation elements array                                                        // 101
                // delete template._animationElements[indexOfElement];                                         // 102
                $node.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionEnd msTransitionEnd animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd animationEnd msAnimationEnd', function(e) {
                    if (e.target === node) {                                                                   // 104
                        $node.off(e);                                                                          // 105
                                                                                                               // 106
                        Meteor.clearTimeout(timeoutId);                                                        // 107
                                                                                                               // 108
                        delete node._animation_helper_isVisible;                                               // 109
                        $node.remove();                                                                        // 110
                        $node = null;                                                                          // 111
                    }                                                                                          // 112
                                                                                                               // 113
                });                                                                                            // 114
                $node.addClass('animate').width();                                                             // 115
                                                                                                               // 116
            // otherwise remove immedediately                                                                  // 117
            } else {                                                                                           // 118
                $node.remove();                                                                                // 119
                $node = null;                                                                                  // 120
            }                                                                                                  // 121
                                                                                                               // 122
        }                                                                                                      // 123
    };                                                                                                         // 124
};                                                                                                             // 125
                                                                                                               // 126
Template['Animate'].destroyed = function(){                                                                    // 127
    var template = this;                                                                                       // 128
                                                                                                               // 129
    if(Meteor.isClient && template._animation_helper_parentNode) {                                             // 130
        Tracker.afterFlush(function(){                                                                         // 131
            template._animation_helper_parentNode._uihooks = null;                                             // 132
        });                                                                                                    // 133
    }                                                                                                          // 134
};                                                                                                             // 135
                                                                                                               // 136
                                                                                                               // 137
/**                                                                                                            // 138
The destroyed method, which remove the hooks to make sure, they work again next time.                          // 139
                                                                                                               // 140
*/                                                                                                             // 141
// Template['Animate'].destroyed = function(){                                                                 // 142
//     var template = this;                                                                                    // 143
//     // Meteor.defer(function(){                                                                             // 144
//         template._animation_helper_firstNode.parentNode._uihooks = null;                                    // 145
//     // });                                                                                                  // 146
                                                                                                               // 147
// };                                                                                                          // 148
                                                                                                               // 149
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 186
                                                                                                                      // 187
}).call(this);                                                                                                        // 188
                                                                                                                      // 189
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['frozeman:animation-helper'] = {};

})();
