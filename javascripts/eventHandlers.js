"use strict";

$("#catSelect").change((e) => {
	let selectedCat = parseInt($(e.target).val());

	switch(selectedCat) {
		case 0:
			Acme.dataAccess(selectedCat);
			break;
		case 1: 
			Acme.dataAccess(selectedCat);
			break;
	}
});