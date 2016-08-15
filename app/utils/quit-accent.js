'use strict';

module.exports = function(str){ 
	for (var i=0;i<str.length;i++){ 
		//Sustituye "á é í ó ú" 
		if (str.charAt(i)=="á") str = str.replace(/á/,"a"); 
		if (str.charAt(i)=="é") str = str.replace(/é/,"e"); 
		if (str.charAt(i)=="í") str = str.replace(/í/,"i"); 
		if (str.charAt(i)=="ó") str = str.replace(/ó/,"o"); 
		if (str.charAt(i)=="ú") str = str.replace(/ú/,"u"); 
	} 
	return str;
} 