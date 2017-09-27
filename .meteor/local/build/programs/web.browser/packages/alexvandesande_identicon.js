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

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/alexvandesande_identicon/vendor/blockies/blockies.js                           //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
(function() {                                                                              // 1
	// The random number is a js implementation of the Xorshift PRNG                          // 2
	var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values                      // 3
                                                                                           // 4
	function seedrand(seed) {                                                                 // 5
		for (var i = 0; i < randseed.length; i++) {                                              // 6
			randseed[i] = 0;                                                                        // 7
		}                                                                                        // 8
		for (var i = 0; i < seed.length; i++) {                                                  // 9
			randseed[i%4] = ((randseed[i%4] << 5) - randseed[i%4]) + seed.charCodeAt(i);            // 10
		}                                                                                        // 11
	}                                                                                         // 12
                                                                                           // 13
	function rand() {                                                                         // 14
		// based on Java's String.hashCode(), expanded to 4 32bit values                         // 15
		var t = randseed[0] ^ (randseed[0] << 11);                                               // 16
                                                                                           // 17
		randseed[0] = randseed[1];                                                               // 18
		randseed[1] = randseed[2];                                                               // 19
		randseed[2] = randseed[3];                                                               // 20
		randseed[3] = (randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8));                        // 21
                                                                                           // 22
		return (randseed[3]>>>0) / ((1 << 31)>>>0);                                              // 23
	}                                                                                         // 24
                                                                                           // 25
	function createColor() {                                                                  // 26
		//saturation is the whole color spectrum                                                 // 27
		var h = Math.floor(rand() * 360);                                                        // 28
		//saturation goes from 40 to 100, it avoids greyish colors                               // 29
		var s = ((rand() * 60) + 40) + '%';                                                      // 30
		//lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
		var l = ((rand()+rand()+rand()+rand()) * 25) + '%';                                      // 32
                                                                                           // 33
		var color = 'hsl(' + h + ',' + s + ',' + l + ')';                                        // 34
		return color;                                                                            // 35
	}                                                                                         // 36
                                                                                           // 37
	function createImageData(size) {                                                          // 38
		var width = size; // Only support square icons for now                                   // 39
		var height = size;                                                                       // 40
                                                                                           // 41
		var dataWidth = Math.ceil(width / 2);                                                    // 42
		var mirrorWidth = width - dataWidth;                                                     // 43
                                                                                           // 44
		var data = [];                                                                           // 45
		for(var y = 0; y < height; y++) {                                                        // 46
			var row = [];                                                                           // 47
			for(var x = 0; x < dataWidth; x++) {                                                    // 48
				// this makes foreground and background color to have a 43% (1/2.3) probability        // 49
				// spot color has 13% chance                                                           // 50
				row[x] = Math.floor(rand()*2.3);                                                       // 51
			}                                                                                       // 52
			var r = row.slice(0, mirrorWidth);                                                      // 53
			r.reverse();                                                                            // 54
			row = row.concat(r);                                                                    // 55
                                                                                           // 56
			for(var i = 0; i < row.length; i++) {                                                   // 57
				data.push(row[i]);                                                                     // 58
			}                                                                                       // 59
		}                                                                                        // 60
                                                                                           // 61
		return data;                                                                             // 62
	}                                                                                         // 63
                                                                                           // 64
	function createCanvas(imageData, color, scale, bgcolor, spotcolor) {                      // 65
		var c = document.createElement('canvas');                                                // 66
		var width = Math.sqrt(imageData.length);                                                 // 67
		c.width = c.height = width * scale;                                                      // 68
                                                                                           // 69
		var cc = c.getContext('2d');                                                             // 70
		cc.fillStyle = bgcolor;                                                                  // 71
		cc.fillRect(0, 0, c.width, c.height);                                                    // 72
		cc.fillStyle = color;                                                                    // 73
                                                                                           // 74
		for(var i = 0; i < imageData.length; i++) {                                              // 75
			var row = Math.floor(i / width);                                                        // 76
			var col = i % width;                                                                    // 77
			// if data is 2, choose spot color, if 1 choose foreground                              // 78
			cc.fillStyle = (imageData[i] == 1) ? color : spotcolor;                                 // 79
                                                                                           // 80
			// if data is 0, leave the background                                                   // 81
			if(imageData[i]) {                                                                      // 82
				cc.fillRect(col * scale, row * scale, scale, scale);                                   // 83
			}                                                                                       // 84
		}                                                                                        // 85
                                                                                           // 86
		return c;                                                                                // 87
	}                                                                                         // 88
                                                                                           // 89
	function createIcon(opts) {                                                               // 90
		opts = opts || {};                                                                       // 91
		var size = opts.size || 8;                                                               // 92
		var scale = opts.scale || 4;                                                             // 93
		var seed = opts.seed || Math.floor((Math.random()*Math.pow(10,16))).toString(16);        // 94
                                                                                           // 95
		seedrand(seed);                                                                          // 96
                                                                                           // 97
		var color = opts.color || createColor();                                                 // 98
		var bgcolor = opts.bgcolor || createColor();                                             // 99
		var spotcolor = opts.spotcolor || createColor();                                         // 100
		var imageData = createImageData(size);                                                   // 101
		var canvas = createCanvas(imageData, color, scale, bgcolor, spotcolor);                  // 102
                                                                                           // 103
		return canvas;                                                                           // 104
	}                                                                                         // 105
                                                                                           // 106
	window.blockies = {create: createIcon};                                                   // 107
})();                                                                                      // 108
                                                                                           // 109
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/alexvandesande_identicon/lib/identicon.js                                      //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
'use strict';                                                                              // 1
                                                                                           // 2
if (Package.templating) {                                                                  // 3
  Package.templating.Template.registerHelper('identicon', function (seed, opt) {           // 4
    opt = (opt && opt.hash) || {};                                                         // 5
    if (seed) {                                                                            // 6
      opt.seed = seed;                                                                     // 7
    }                                                                                      // 8
    return blockies.create(opt).toDataURL();                                               // 9
  });                                                                                      // 10
}                                                                                          // 11
                                                                                           // 12
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['alexvandesande:identicon'] = {};

})();
