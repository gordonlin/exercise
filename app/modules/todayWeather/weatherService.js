define([
	'jquery'
], function (
	$
	) {
    return {
			search: function (city, country) {
				var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&units=metric';
				var defer = $.Deferred();
				$.get(url).done(function (data) {
					if (data.cod && data.cod === '404') {
						defer.reject('location not found');
						return;
					}
					var imgType = ''
					var description = data.weather[0].description.toLowerCase();
					if (description.indexOf('cloud') !== -1) {
						imgType = "cloud";
					} else if (description.indexOf('rain') !== -1) {
						imgType = "rain";
					} else if (description.indexOf('clear') !== -1) {
						imgType = "clear";
					} else {
						imgType = "unknown";
					}
					var result = {
						main: data.weather[0].main,
						description: description,
						tempMax: data.main.temp_max,
						tempMin: data.main.temp_min,
						humidity: data.main.humidity,
						imgType: imgType
					}

					defer.resolve(result);
				});
				return defer;
			}
		};
	});