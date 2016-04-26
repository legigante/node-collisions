var Shape = require('./Shape');

module.exports = Circle;

/**
 * circle
 * @class Circle
 * @constructor
 */
function Circle(options){
    options = options || {};
    Shape.call(this,options);
    this.shape = 'circle';
    this.r = options.r;
}
Circle.prototype = new Shape();

/**
 * get json for client displaying
 *
 * @method getJSONDisplay
 *
 * @example
 *
 */
Circle.prototype.getJSONDisplay = function(){
    return {
		shape: this.shape,
		radius: this.radius,
		x: this.x,
		y: this.y,
		r: this.r
	};
}