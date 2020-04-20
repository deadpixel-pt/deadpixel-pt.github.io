window.onload = function(){
	console.log('app loaded');
	// vanilla JS
	// init with element
	this.setTimeout(() => {
		var grid = document.querySelector('.grid');
		var msnry = new Masonry(grid, {
			gutter: 6,
			fitWidth: true,
		});
	});
}