/* ------------------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------------------- */
/* FONCTIONS UTILES */
/* ------------------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------------------- */

module.exports = Utils;

/**
 * Misc utility functions
 * @class Utils
 * @constructor
 */
function Utils(){}

Utils.arrayRemove = function(array, element) {
    var idx = array.indexOf(element);
    if(idx!==-1){
		for (var i=idx, len=array.length-1; i < len; i++){
			array[i] = array[i + 1];
		}
		array.length = len;
    }
};


Utils.getTimer = function () {
    var a = new Date();
    var str = a.getHours();
    str += ':'+(a.getMinutes()<10?'0':'')+a.getMinutes();
    str += ':'+(a.getSeconds()<10?'0':'')+a.getSeconds();
    return str;
};


Utils.printLog = function (msg) {
    console.log(this.getTimer() + " " + msg);
};