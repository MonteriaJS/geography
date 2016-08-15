var map
var polygon

$(document).ready(function () {
	initMap()
	drawTown()
});

function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 4.696879026871413, lng: -74.091796875},
		scrollwheel: true,
		zoom: 5
	})
}


function drawTown(){
	map.setCenter(town.coordinates[0]);
	map.setZoom(8);
	polygon = new google.maps.Polygon({
		path 			: town.coordinates,
		strokeColor		: 'gray',
		strokeOpacity	: 0.8,
		strokeWeight	: .5,
		fillColor		: generateColor(),
		fillOpacity		: 0.3,
		map : map
	})
}


function random(up, down){ 
	posibilities = up - down 
	luck = Math.random() * posibilities 
	luck = Math.floor(luck) 
	return parseInt(down) + luck
}


function generateColor(){
	hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F") 
	randomColor = "#"; 
		for (i=0;i<6;i++){ 
			posarray = random(0,hexadecimal.length) 
			randomColor += hexadecimal[posarray] 
		} 
	return randomColor
}