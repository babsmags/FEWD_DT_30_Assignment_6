// create array with city abbreviations
// on document.ready, execute function to add a dropdown entry for each city in array to html select
// when city is selected from dropdown:
//   -first remove any class from body (class contains background image)
//	 -then add class which contains background image for selected city (note that class name has been 
//	 -created as lower case value of the dropdown entry)
//
$(document).ready(function() {
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];    	//cities that have background pics
	cities.forEach(function(element) {					//add each city to dropdown
		$("select").append($('<option>', {
			value: element,
			text: element
		}))
	})
	// console.log(cities);

	$("select").on("change", function(){				//when city selected from dropdown
		var selectedValue = $("select").val();
		$('body').toggleClass();						//turn off class if already on
		$('body').addClass(selectedValue.toLowerCase());	//class name matches dropdown name
	});
});
