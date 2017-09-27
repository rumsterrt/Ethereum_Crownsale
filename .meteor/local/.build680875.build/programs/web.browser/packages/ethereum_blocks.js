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
var Web3 = Package['ethereum:web3'].Web3;
var BigNumber = Package['ethereum:web3'].BigNumber;

/* Package-scope variables */
var EthBlocks;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ethereum_blocks/blocks.js                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
/**                                                                                                             // 1
                                                                                                                // 2
@module Ethereum:blocks                                                                                         // 3
*/                                                                                                              // 4
                                                                                                                // 5
                                                                                                                // 6
                                                                                                                // 7
/**                                                                                                             // 8
The EthBlocks collection, with some ethereum additions.                                                         // 9
                                                                                                                // 10
@class EthBlocks                                                                                                // 11
@constructor                                                                                                    // 12
*/                                                                                                              // 13
                                                                                                                // 14
                                                                                                                // 15
                                                                                                                // 16
EthBlocks = new Mongo.Collection('ethereum_blocks', {connection: null});                                        // 17
                                                                                                                // 18
// if(typeof PersistentMinimongo !== 'undefined')                                                               // 19
//     new PersistentMinimongo(EthBlocks);                                                                      // 20
                                                                                                                // 21
                                                                                                                // 22
/**                                                                                                             // 23
Gives you reactively the lates block.                                                                           // 24
                                                                                                                // 25
@property latest                                                                                                // 26
*/                                                                                                              // 27
Object.defineProperty(EthBlocks, 'latest', {                                                                    // 28
    get: function () {                                                                                          // 29
        return EthBlocks.findOne({}, {sort: {number: -1}}) || {};                                               // 30
    },                                                                                                          // 31
    set: function (values) {                                                                                    // 32
        var block = EthBlocks.findOne({}, {sort: {number: -1}}) || {};                                          // 33
        values = values || {};                                                                                  // 34
        EthBlocks.update(block._id, {$set: values});                                                            // 35
    }                                                                                                           // 36
});                                                                                                             // 37
                                                                                                                // 38
/**                                                                                                             // 39
Stores all the callbacks                                                                                        // 40
                                                                                                                // 41
@property _forkCallbacks                                                                                        // 42
*/                                                                                                              // 43
EthBlocks._forkCallbacks = [];                                                                                  // 44
                                                                                                                // 45
                                                                                                                // 46
/**                                                                                                             // 47
Start looking for new blocks                                                                                    // 48
                                                                                                                // 49
@method init                                                                                                    // 50
*/                                                                                                              // 51
EthBlocks.init = function(){                                                                                    // 52
    if(typeof web3 === 'undefined') {                                                                           // 53
        console.warn('EthBlocks couldn\'t find web3, please make sure to instantiate a web3 object before calling EthBlocks.init()');
        return;                                                                                                 // 55
    }                                                                                                           // 56
                                                                                                                // 57
    // clear current block list                                                                                 // 58
    EthBlocks.clear();                                                                                          // 59
                                                                                                                // 60
    Tracker.nonreactive(function() {                                                                            // 61
        observeLatestBlocks();                                                                                  // 62
    });                                                                                                         // 63
};                                                                                                              // 64
                                                                                                                // 65
/**                                                                                                             // 66
Add callbacks to detect forks                                                                                   // 67
                                                                                                                // 68
@method detectFork                                                                                              // 69
*/                                                                                                              // 70
EthBlocks.detectFork = function(cb){                                                                            // 71
    EthBlocks._forkCallbacks.push(cb);                                                                          // 72
};                                                                                                              // 73
                                                                                                                // 74
/**                                                                                                             // 75
Clear all blocks                                                                                                // 76
                                                                                                                // 77
@method clear                                                                                                   // 78
*/                                                                                                              // 79
EthBlocks.clear = function(){                                                                                   // 80
    _.each(EthBlocks.find({}).fetch(), function(block){                                                         // 81
        EthBlocks.remove(block._id);                                                                            // 82
    });                                                                                                         // 83
};                                                                                                              // 84
                                                                                                                // 85
                                                                                                                // 86
/**                                                                                                             // 87
The global block filter instance.                                                                               // 88
                                                                                                                // 89
@property filter                                                                                                // 90
*/                                                                                                              // 91
var filter = null;                                                                                              // 92
                                                                                                                // 93
/**                                                                                                             // 94
Update the block info and adds additional properties.                                                           // 95
                                                                                                                // 96
@method updateBlock                                                                                             // 97
@param {Object} block                                                                                           // 98
*/                                                                                                              // 99
function updateBlock(block){                                                                                    // 100
                                                                                                                // 101
    // reset the chain, if the current blocknumber is 100 blocks less                                           // 102
    if(block.number + 10 < EthBlocks.latest.number)                                                             // 103
        EthBlocks.clear();                                                                                      // 104
                                                                                                                // 105
    block.difficulty = block.difficulty.toString(10);                                                           // 106
    block.totalDifficulty = block.totalDifficulty.toString(10);                                                 // 107
                                                                                                                // 108
    web3.eth.getGasPrice(function(e, gasPrice){                                                                 // 109
        if(!e) {                                                                                                // 110
            block.gasPrice = gasPrice.toString(10);                                                             // 111
            EthBlocks.upsert('bl_'+ block.hash.replace('0x','').substr(0,20), block);                           // 112
        }                                                                                                       // 113
    });                                                                                                         // 114
};                                                                                                              // 115
                                                                                                                // 116
/**                                                                                                             // 117
Observe the latest blocks and store them in the Blocks collection.                                              // 118
Additionally cap the collection to 50 blocks                                                                    // 119
                                                                                                                // 120
@method observeLatestBlocks                                                                                     // 121
*/                                                                                                              // 122
function observeLatestBlocks(){                                                                                 // 123
                                                                                                                // 124
    // get the latest block immediately                                                                         // 125
    web3.eth.getBlock('latest', function(e, block){                                                             // 126
        if(!e) {                                                                                                // 127
            updateBlock(block);                                                                                 // 128
        }                                                                                                       // 129
    });                                                                                                         // 130
                                                                                                                // 131
    // GET the latest blockchain information                                                                    // 132
    filter = web3.eth.filter('latest').watch(checkLatestBlocks);                                                // 133
                                                                                                                // 134
};                                                                                                              // 135
                                                                                                                // 136
/**                                                                                                             // 137
The observeLatestBlocks callback used in the block filter.                                                      // 138
                                                                                                                // 139
@method checkLatestBlocks                                                                                       // 140
*/                                                                                                              // 141
var checkLatestBlocks = function(e, hash){                                                                      // 142
    if(!e) {                                                                                                    // 143
        web3.eth.getBlock(hash, function(e, block){                                                             // 144
            if(!e) {                                                                                            // 145
                var oldBlock = EthBlocks.latest;                                                                // 146
                                                                                                                // 147
                // console.log('BLOCK', block.number);                                                          // 148
                                                                                                                // 149
                // if(!oldBlock)                                                                                // 150
                //     console.log('No previous block found: '+ --block.number);                                // 151
                                                                                                                // 152
                // CHECK for FORK                                                                               // 153
                if(oldBlock && oldBlock.hash !== block.parentHash) {                                            // 154
                    // console.log('FORK detected from Block #'+ oldBlock.number + ' -> #'+ block.number +'!');
                                                                                                                // 156
                    _.each(EthBlocks._forkCallbacks, function(cb){                                              // 157
                        if(_.isFunction(cb))                                                                    // 158
                            cb(oldBlock, block);                                                                // 159
                    });                                                                                         // 160
                }                                                                                               // 161
                                                                                                                // 162
                updateBlock(block);                                                                             // 163
                                                                                                                // 164
                // drop the 50th block                                                                          // 165
                var blocks = EthBlocks.find({}, {sort: {number: -1}}).fetch();                                  // 166
                if(blocks.length >= 5) {                                                                        // 167
                    var count = 0;                                                                              // 168
                    _.each(blocks, function(bl){                                                                // 169
                        count++;                                                                                // 170
                        if(count >= 5)                                                                          // 171
                            EthBlocks.remove({_id: bl._id});                                                    // 172
                    });                                                                                         // 173
                }                                                                                               // 174
            }                                                                                                   // 175
        });                                                                                                     // 176
                                                                                                                // 177
    // try to re-create the filter on error                                                                     // 178
    // TODO: want to do this?                                                                                   // 179
    } else {                                                                                                    // 180
        filter.stopWatching();                                                                                  // 181
        filter = web3.eth.filter('latest').watch(checkLatestBlocks);                                            // 182
    }                                                                                                           // 183
};                                                                                                              // 184
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ethereum:blocks'] = {}, {
  EthBlocks: EthBlocks
});

})();
