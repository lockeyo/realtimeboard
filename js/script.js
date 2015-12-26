// ############################
// ## Options
// Initilaize the app runs
var appRuns = 0;
// Set the time in milliseconds
// until the next refresh
var refreshTime = 1000;
// Get the timestamp of now
var currentDate = new Date();
// ############################

// ############################
// ## Data
// Data that is pushed to the App
var json = [
	{
		"id" : "usertime",
		"startValue" : 1,
		"multiplier" : 1
	},
	{
		"id" : "realtimeboard_1",
		"startValue" : 1,
		"multiplier" : 1
	},
	{
		"id" : "realtimeboard_2",
		"startValue" : 12,
		"multiplier" : 1
	},
	{
		"id" : "realtimeboard_3",
		"startValue" : 124,
		"multiplier" : 1
	},
	{
		"id" : "realtimeboard_4",
		"startValue" : 124,
		"multiplier" : 1
	},
	{
		"id" : "realtimeboard_5",
		"startValue" : 32,
		"multiplier" : 1
	},
	{
		"id" : "realtimeboard_6",
		"startValue" : 54,
		"multiplier" : 1
	},
	{
		"id" : "realtimeboard_7",
		"startValue" : 23,
		"multiplier" : 1
	},
	{
		"id" : "realtimeboard_8",
		"startValue" : 56,
		"multiplier" : 0.21
	},
	{
		"id" : "realtimeboard_9",
		"startValue" : 7,
		"multiplier" : 1.5
	},
	{
		"id" : "realtimeboard_10",
		"startValue" : 12,
		"multiplier" : 0.4
	},
	{
		"id" : "realtimeboard_11",
		"startValue" : 4,
		"multiplier" : 1.3
	},
	{
		"id" : "realtimeboard_12",
		"startValue" : 1,
		"multiplier" : 0.45
	}
];
// ############################

// ############################
// ## Start the app
setInterval(function(){
	// Count +1 app runs
	appRuns++;

	// Get for each Array-Element the values
	// And call the function to update the data-field in the view
	for(var i=0; i<json.length; i++){
		// Data from the Array-Item
		var id = json[i]['id'];
		var startValue = json[i]['startValue'];
		var multiplier = json[i]['multiplier'];

		// Call Function to update the data
		updateValue(id, startValue, multiplier, appRuns);
	}
}, refreshTime);
// ############################

// ############################
// ## Function to update the views content
function updateValue(id, startValue, multiplier, appRuns){

	// # Change behavior by daytime
	// hour is before noon
	if (currentDate.getHours() < 12)  {    
	    var day_time_multiplier = 0.4;
	}
	// Hour is from noon to 7pm (actually to 7:59 pm)
	else if (currentDate.getHours() >= 12 && currentDate.getHours() <= 19) {
	    var day_time_multiplier = 1;
	}
	 // the hour is after 7pm, so it is between 8pm and midnight
	else if (currentDate.getHours() > 19 && currentDate.getHours() <= 24) {    
	    var day_time_multiplier = 0.7;
	}
	// the hour is not between 0 and 24, so something is wrong
	else {    
	    var day_time_multiplier = 1;
	}

	// correction of by displaying seconds
	if(id == 'usertime'){
		day_time_multiplier = 1;
	}

	// calculation of the value
	var value = startValue * multiplier * appRuns * day_time_multiplier;
	document.getElementById(id).innerHTML = Math.round(value).toString();
}
// ############################
