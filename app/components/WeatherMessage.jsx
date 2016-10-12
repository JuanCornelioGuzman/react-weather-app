var React = require('react');

//Presentational Component - no state
var WeatherMessage = ({city,temp}) => {
	return (
		<h3 className="text-center">It's {temp} degrees in {city}</h3>
	);
}

module.exports = WeatherMessage;
