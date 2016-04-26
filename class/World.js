var Utils = require('./Utils');
var Geometry = require('./Geometry');

module.exports = World;



/**
 * Repr�sente la carte et l'ensemble des �l�ments la peuplant
 * @class World
 * @constructor
 */
function World(options){
	options = options || {};
	this.id = options.id || 'field';
	this.width = options.width || 800;
	this.height = options.height || 800;
	this.fps = options.fps || 25;
	this.formes = [];
  
}
World.prototype.fps_multi = 1;

/**
 * Ajoute une forme dans le monde
 *
 * @method addShape
 * @param {Forme} forme
 *
 * @example
 *     var world = new World(),
 *     f = new Forme();
 *     world.addShape(f);
 */
World.prototype.addShape = function(el){
	if(el){
		this.formes.push(el);
	}
}

/**
 * Supprimer une forme du monde
 *
 * @method delForme
 * @param {Forme} forme
 *
 * @example
 *
 */
World.prototype.delForme = function(el){
    Utils.arrayRemove(this.formes, el);
}

/**
 * Effectu tous les changements de position en fonction des forces en pr�sence
 *
 * @method refresh
 *
 * @example
 *
 */
World.prototype.refresh = function(){
	return [];
}

/**
 * Retourne la liste des �l�ments � afficher au format json
 *
 * @method getJSONDisplay
 *
 * @example
 *
 */
World.prototype.getJSONDisplay = function(){
	r = [];
	var i = 0;
	while(i<this.formes.length){
		r.push(this.formes[i].getJSONDisplay());
		i++;
	}
	return r;
}

/**
 * D�marre l'update en temps r�el des positions
 *
 * @method run
 * @param {function} call back pour communiquer avec le client
 * @param {function} call back pour debugage
 *
 * @example
 *
 */
World.prototype.run = function(upd,log){
	var fps = (1000/this.fps)*this.fps_multi;
	var w = this;
	var boucle = setInterval(function(){
		if(w.stop_loop){
			clearInterval(boucle);
			return 1;
		}
		var arrLog = w.refresh();
		upd.call(this,w.getJSONDisplay());
		if(arrLog.length>0){
			log.call(this,arrLog);
		}
	},fps);
}

/**
 * Stop l'update en temps r�el des positions
 *
 * @method stop_loop
 *
 * @example
 *
 */
World.prototype.stop_loop = 0;
World.prototype.stop = function(){
	this.stop_loop = 1;
}

/**
 * Debug
 *
 * @method debug
 * @param {} 
 *
 * @example
 *
 */
World.prototype.debug = function(el){
	return [];
}




