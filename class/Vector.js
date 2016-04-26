
module.exports = Vector;

/**
 * vector
 * @class Vector
 * @constructor
 */
function Vector(options){
	options = options || {};
	this.i = options.i || 0;
	this.j = options.j || 0;
}

/**
 * vecteur (i,j) à partir de deux points (x,y)
 *
 * @method getVecteurPt
 * @param {coord} from
 * @param {coord} to
 *
 * @example
 *
 */
Vector.getVecteurPt = function(p1,p2){
	this.i = p2.x-p1.x;
	this.j = p2.y-p1.y;
	return {this};
}

/**
 * vecteur (i,j) à parti d'un point (x,y), un angle et une longueur
 *
 * @method getVecteurA
 * @param {coord} from
 * @param {float} radius
 * @param {int} longueur
 *
 * @example
 *
 */
Vector.getVecteurA = function(p,a,l){
	this.i = l*Math.round(Math.cos(a)*100)/100;
	this.j = l*Math.round(Math.sin(a)*100)/100;
	return {this};
}

/**
 * longueur d'un vecteur (i,j) = racine(i²+j²)
 *
 * @method getLongueurVecteur
 * @param {vector} vector
 *
 * @example
 *
 */	
Vector.getLongueurVecteur = function(){
	return Math.sqrt(Math.pow(this.i,2)+Math.pow(this.j,2));
}


	
