function openNav() {
	"use strict";
    document.getElementById("myNav").style.width = "100%";
		document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function closeNav() {
	"use strict";
    document.getElementById("myNav").style.width = "0%";
	document.getElementsByTagName("body")[0].style.overflow = "visible";
}

