// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(x,y) {
	console.log("makeGridc called with arguments:" + x + " " + y);
	for(var rows = 0; rows < y; rows++){
		console.log('make rows');
		$('#pixelCanvas').append('<tr class="pixelRow"></tr>');	
	}
	for(var cols = 0; cols < x; cols++){
		console.log('make cols');
		// append td all tr at once
		$('.pixelRow').append('<td class="pixel"></td>');
	}
}

var color;
// After submit, prevent default, but grab dimension value
// Call makeGrid with dimension value, which populates DOM with DIV's
// Use tables to make cells and rows: square pixels
// Use jQuery to .toggleClass .on('click')
// Color handling: a set of pre-defined color palettes that can be changed, or
// dynamically push new color into array, and set class to point to location in array (which holds color value) 
// bonus: ability to cycle the colors in array in a circular fashion
// ???

// Profit! I think...

$('#sizePicker').on('submit', function(){
	var x, y;
	color = $('#colorPicker').val();
	y = $('#inputHeight').val();
	x = $('#inputWidth').val();
	console.log('Clicked - vaues: ' + x + ', ' + y + ', ' + color);
	makeGrid(x,y);
	return false;	// preventDefault and stopPropagation
})

// This will only work on elements as loaded,
// not on elements added to DOM afterwards
// $('.pixel').click(function(){
// 	console.log('pixel clicked');
// 	$(this).toggleClass( "on" );
// })

// jQuery event delegation:
// Tells jQuery to watch the table element for clicks,
// and then if there are any, check if the click event's target is a pixel.
$( 'table' ).on( 'click', '.pixel', function() {
	console.log('pixel clicked');
	$(this).toggleClass( "on" );
});