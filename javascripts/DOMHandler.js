"use strict";


var Acme = (function(oldAcme) {
	let $prodHolder = $("#prodHolder");

	oldAcme.injectProducts = function(products) {
		$prodHolder.append(products);
		// $prodHolder.html(products);
	};

	return oldAcme;

})(Acme || {});