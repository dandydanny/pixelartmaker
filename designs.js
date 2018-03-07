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

// Default color
var color = "dimgray";
console.log('test color: ' + color);
// After submit, prevent default, but grab dimension value
// Call makeGrid with dimension value, which populates DOM with DIV's
// Use tables to make cells and rows: square pixels
// Use jQuery to .toggleClass .on('click')
// Color handling (MVP): add inline styles to elements in DOM
// Color handling: a set of pre-defined color palettes that can be changed, or
// dynamically push new color into array, and set class to point to location in array (which holds color value) 
// bonus: ability to cycle the colors in array in a circular fashion
// ???

// Profit! I think...

$('#sizePicker').on('submit', function(){
	var x, y;
	// color = $('#colorPicker').val();
	y = $('#inputHeight').val();
	x = $('#inputWidth').val();
	console.log('Clicked - values: ' + x + ', ' + y);
	makeGrid(x,y);
	return false;	// preventDefault and stopPropagation
})

// $('#colorPicker1').on('change', function(){
// 	color = $('#colorPicker1').val();
// 	console.log('Color value: ' + color);
// 	// return false;	// preventDefault and stopPropagation
// })

// This will only work on elements as loaded,
// not on elements added to DOM afterwards
// $('.pixel').click(function(){
// 	console.log('pixel clicked');
// 	$(this).toggleClass( "on" );
// })

// jQuery event delegation:
// Tells jQuery to watch the table element for clicks,
// and then if there are any, check if the click event's target is a pixel.

// Store color onto color palette
$( '.palette' ).on( 'click', function() {
	console.log("plalette clicked");
	console.log("color from outside: " + color);
	color = $(this).css( "background-color" );
	console.log("new color: " + color);
});

$( '#colorPicker1' ).on( 'click', function() {
	console.log("picker1 clicked");
	$('#color1').css( "background-color", $('#colorPicker1').val() );
});

// TODO: consolidate and rid of duplication after getting this to work
$( '#colorPicker2' ).on( 'click', function() {
	console.log("picker2 clicked");
	$('#color2').css( "background-color", $('#colorPicker2').val() );
});

// Draw pixel
$( 'table' ).on( 'click', '.pixel', function() {
	console.log('pixel clicked, color: ');
	console.log(color);
	// $(this).toggleClass( "on" );
	// $(this).css( "background-color", $('#colorPicker1').val() );
	$(this).css( "background-color", color );


});