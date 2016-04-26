
module.exports = Shape;

/**
 * shape
 * @class Shape
 * @constructor
 */
function Shape(options){
	options = options || {};
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.radius = options.radius || 0;
	this.weight = options.weight || 1;
}
// vitesse de deplacement et de pivot auto
Shape.prototype.forceSpeed = 0;
Shape.prototype.forceRadius = 0;
// forces appliquées à la forme
Shape.prototype.forcesTranslate = [];
Shape.prototype.forcesSpin = [];

/**
 * exec translation
 *
 * @method translate
 *
 * @example
 *
 */
Shape.prototype.translate = function(vecteur){
    // updater x et y
}

/**
 * exec spinning
 *
 * @method getJSONDisplay
 *
 * @example
 *
 */
Shape.prototype.spin = function(angle){
    this.radius = (this.radius+angle)%(Math.PI*2);
}

Shape.prototype.debug = function(){
    return 'Je suis un ' + this.forme + ' placé en (' + this.x + ';' + this.y + ') orienté en ' + this.radius;
}