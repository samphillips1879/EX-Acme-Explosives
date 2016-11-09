"use strict";


var Acme = (function(oldAcme) {




	let urlArray = ["data/categories.json", "data/types.json", "data/products.json"];

	oldAcme.getData = function(sources) {
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
		// console.log("promiseArray", promiseArray);
		return promiseArray;
	};

	oldAcme.logData = function(data) {
		console.log("data", data);
	};



//takes the selected category
//
	oldAcme.dataAccess = function(catID) {
		// console.log("Acme.getData(urlArray)", Acme.getData(urlArray));
		Promise.all(Acme.getData(urlArray))
		.then( (dataArray) => {
			// console.log("dataArray from .then", dataArray);
			Acme.productCardsBuilder(dataArray, catID);
		});
	};





//gonna try to rewrite this so that it returns only an array, not an array of 1 holding another array.
	// oldAcme.dataAccess = function(catID) {
	// 	console.log("Acme.getData(urlArray)", Acme.getData(urlArray));
	// 	Promise.all([Acme.getData(urlArray)])
	// 	.then( (dataArray) => {
	// 		console.log("dataArray from .then", dataArray);
	// 		Acme.productCardsBuilder(dataArray, catID);
	// 	});
	// };
// Create a simple user interface for your product catalog where a user can select a category from a dropdown. When a category is selected, you must use Promises to read, first, from the categories.json to load that array of objects, then load types.json, then products.json.

	oldAcme.productCardsBuilder = function (dataArray, catID) {
		let htmlString = '',


		categories = $(dataArray[0].categories), //returns an array still
		// types = $(dataArray[1]),
		types = $(dataArray[1].types),
		// products = $(dataArray[2]);
		products = $(dataArray[2].products);


		// categories = dataArray[0].categories, //returns an array still
		// types = dataArray[1].types,
		// products = dataArray[2].products;

		console.log("catID", catID);
		console.log("categories", categories);
		console.log("types", types);
		console.log("products", products);

		let validTypes = $.grep(types, (currentEl, index) => {
			return currentEl.categoryId === catID;
		});
		console.log("validTypes", validTypes);

		let validTypeIds = $.map( validTypes, (object, index) => {
			return object.id;
		});
		// console.log("validTypeIds", validTypeIds);

		// let validProducts = $.grep(products, (currentProduct, index) => {
		// 	return currentProduct.typeId === 
		// });

		// htmlString = `${}`;














		Acme.injectProducts(htmlString);


		// catObject = dataArray[0], //returns an array still
		// typesObject = dataArray[1],
		// productsObject = dataArray[2];

		// console.log("catID", catID);
		// console.log("catObject", catObject);
		// console.log("typesObject", typesObject);
		// console.log("productsObject", productsObject);

		// console.log("$promiseArray[0]", $promiseArray[0]);
		// console.log("$promiseArray[0].[[PromiseValue]]", $promiseArray[0].PromiseValue);
		// console.log("$data.find('[[PromiseValue]]')", $data.find('[[PromiseValue]]'));
		// console.log("$data.find('Promise')", $data.find('Promise'));


	};


	



	return oldAcme;






})(Acme || {});






// let urlArray = ["data/categories.json", "data/types.json", "data/products.json"];

// 	function getData(sources) {
// 		let promiseArray = sources.map( (currentUrl) => {
// 			return new Promise( (resolve, reject) => {
// 				$.ajax({
// 					url: currentUrl
// 				}).done(function(data) {
// 					resolve(data);
// 				}).fail( (error) => {
// 					reject(error);
// 				});
// 			});
// 		});
// 		return promiseArray;
// 	}

// 	function logData(data) {
// 		console.log("data", data);
// 	}




// 	function dataAccess(catID) {
// 		Promise.all([getData(urlArray)])
// 		.then( (allTheStuff) => {
// 			outputProductsToDOM(allTheStuff, catID);
// 			logData(allTheStuff);	
// 		});
// 	}



// 	function outputProductsToDOM(dataArray, catID) {

// 	}




