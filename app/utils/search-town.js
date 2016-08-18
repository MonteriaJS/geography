'use strict';
const fs 			= require('fs');
const quitAccent 	= require('./quit-accent');

module.exports = function(nombre){
	return new Promise( function(resolve, reject){
		fs.readFile('./towns.json', function(err, file){
			if  (!err){
				// se declaran los municipios
				let towns = JSON.parse(file);
				let searched = null;

				// recorremos el array json para buscar el municipio
				towns.forEach( function(town, index) {
					if ( quitAccent(town.nombre.toLowerCase()) == quitAccent(nombre.toLowerCase()) ){
						searched = town
					}
				});

				// si se encontro el objeto resolvemos sino catcheamos
				if ( searched ){
					resolve(searched)
				} else {
					reject('objeto no encontrado')
				}
			}
		});
	})
}