/* ------------------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------------------- */
/* FONCTIONS UTILES */
/* ------------------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------------------- */

module.exports = Geometry;

/**
 * Misc utility functions
 * @class Geometry
 * @constructor
 */
function Geometry(){}


/**
 * arc à partir d'un point (x,y), d'une longuer et de 2 angles
 *
 * @method getArc
 * @param {coord} centre
 * @param {int} rayon
 * @param {float} radius from
 * @param {float} radius to
 *
 * @example
 *
 */
Geometry.getArc = function(c,l,a1,a2){
	return {o: c, r: l,a1: a1,a2: a2};
}

/**
 * scalaire de 2 vecteurs (i,j) = i1*i2+j1*j2
 *
 * @method produitScalaire
 * @param {vector} vector
 * @param {vector} vector
 *
 * @example
 *
 */
Geometry.produitScalaire = function(v1,v2){
	return v1.i*v2.i+v1.j*v2.j;
}

/**
 * calcule angle de deux vecteur (i,j) = acos (scalaire / (longueur1*longueur2))
 *
 * @method getAngleVecteurs
 * @param {vector} vector
 * @param {vector} vector
 * @param {boolean} sens du radius
 *
 * @example
 *
 */
Geometry.getAngleVecteurs = function(v1,v2,opt){
	d = produitScalaire(v1,v2);
	n = v1.getLongueurVecteur()*v2.getLongueurVecteur();
	if(v1.j<v2.j && opt){
		return Math.PI*2-Math.acos(d/n);
	}else{
		return Math.acos(d/n);
	}
}

/**
 * détermine si un point est contenu dans un polygone (tenant dans une élipse = concave)
 *
 * @method getAngleVecteurs
 * @param {polygone} polygone
 * @param {coord} coordonnées
 *
 * @example
 *
 *//*
Geometry.isInPolygone = function(poly,coord){
	var s = '';
	var a = 0;
	var i = 0;
	while(i<poly.length){
		a += getAngleVecteurs(getVecteurPt(coord,poly[i]),getVecteurPt(coord,poly[(i+1)%poly.length]),false);
		i++;
	}
	return (Math.round(a*100)==Math.round(2*Math.PI*100));
}*/

/**
 * détermine si un point est contenu dans un cercle
 *
 * @method getAngleVecteurs
 * @param {arc} arc
 * @param {coord} coordonnées
 *
 * @example
 *
 *//*
Geometry.isInArc = function(arc,coord){
	t1 = getLongueurVecteur(getVecteurPt(coord,arc.o)) <= arc.r;
	t2 = getAngleVecteurs(getVecteurA(arc.o,arc.a1,arc.r),getVecteurPt(arc.o,coord),true) <= arc.a2;
	return t1 && t2;
}*/

/**
 * détermine si un segment coupe un polygone
 *
 * @method getAngleVecteurs
 * @param {segment} segment
 * @param {polygone} polygone
 *
 * @example
 *
 *//*
Geometry.isColisionSegmentPoly = function(seg,poly){
	r = false;
	var i = 0;
	while(i<poly.length && r==false){
		r = isColisionSegments(seg,[poly[i],poly[(i+1)%poly.length]]);
		i++;
	}
	return r;
}*/

/**
 * détermine si un segment coupe un segment
 *
 * @method getAngleVecteurs
 * @param {segment} segment
 * @param {segment} segment
 *
 * @example
 *
 *//*
Geometry.isColisionSegments = function(seg1,seg2){
	var r = ((seg1[0].y-seg2[0].y)*(seg2[1].x-seg2[0].x)-(seg1[0].x-seg2[0].x)*(seg2[1].y-seg2[0].y))/((seg1[1].x-seg1[0].x)*(seg2[1].y-seg2[0].y)-(seg1[1].y-seg1[0].y)*(seg2[1].x-seg2[0].x));
	var s = ((seg1[0].y-seg2[0].y)*(seg1[1].x-seg1[0].x)-(seg1[0].x-seg2[0].x)*(seg1[1].y-seg1[0].y))/((seg1[1].x-seg1[0].x)*(seg2[1].y-seg2[0].y)-(seg1[1].y-seg1[0].y)*(seg2[1].x-seg2[0].x));
	/*pX = seg1[0].x + r*(seg1[1].x-seg1[0].x);
	pY = seg1[0].y + r*(seg1[1].y-seg1[0].y);*/
	if(r>=0 && r<=1 && s>=0 && s<=1){
		return true;
	}else{
		return false;
	}
}*/

