hideAdds = function() {
	var els = document.getElementsByClassName("q-box qu-borderAll qu-borderRadius--small qu-borderColor--raised qu-boxShadow--small qu-mb--small qu-bg--raised");
	var searchValue = "Sponsored";

	for(var i = 0; i < els.length; i++){
	  if(els[i].innerHTML.indexOf(searchValue) > -1){
	    els[i].style.visibility = 'hidden';
	  }
	}
};

window.onload = hideAdds;
window.onscroll = hideAdds;
