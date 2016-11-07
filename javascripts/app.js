"use strict";

let urlArray = ["data/categories.json", "data/types.json", "data/products.json"];

function getData(sources) {
	let promiseArray = sources.map( (currentUrl) => {
		return new Promise( (resolve, reject) => {
			$.ajax({
				url: currentUrl
			}).done(function(data) {
				resolve(data);
			}).fail( (error) => {
				reject(error);
			});
		});
	});
	return promiseArray;
}

function logData(data) {
	console.log("data", data);
}



Promise.all([getData(urlArray)])
.then( (allTheStuff) => {
	logData(allTheStuff);
});



















