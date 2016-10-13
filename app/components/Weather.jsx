var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		};
	},
	handleSearch: function(city){
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(city).then(function(temp){
			that.setState({
				city: city,
				temp: temp,
				isLoading: false
			});
		}, function(e){
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},
  render: function(){
		var {isLoading,city,temp,errorMessage} = this.state;

		function renderError(){
			if(typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage city={city} temp={temp}/>;
			}
		}

		return (
			<div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;
