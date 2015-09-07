define([
	'jquery',
	'weatherService'
], function (
	$,
	weatherService
	) {
    return {
			init: function () {
				this.showWeatherInfo(false);
				this.showErrorInfo(false);
				this.showLoadingIcon(false);
				this.registerEvents();
			},
			registerEvents: function () {
				var that = this;
				$('#searchBtn').click(function () {					
					that.showErrorInfo(false);
					that.showLoadingIcon(true);
					that.showWeatherInfo(false);
					var city = $('#city').val();
					var country = $('#country').val();
					weatherService.search(city, country).done(function (data) {
						that.renderWeatherInfo(data);
						that.showWeatherInfo(true);
						that.showLoadingIcon(false);
					}).fail(function (message) {
						that.showWeatherInfo(false);
						that.showErrorInfo(true);
						that.showLoadingIcon(false);
					})
				});
			},
			showWeatherInfo: function (isShow) {
				var el = $('.weather-info');
				if (isShow) {
					el.show();
				} else {
					el.hide();
				}
			},
			showErrorInfo: function (isShow) {
				var el = $('.weather-error');
				if (isShow) {
					el.show();
				} else {
					el.hide();
				}
			},
			showLoadingIcon: function (isShow) {
				var el = $('.weather-loading');
				if (isShow) {
					el.show();
				} else {
					el.hide();
				}
			},
			renderWeatherInfo: function (data) {
				var infoEl = $('.weather-info');
				infoEl.find('.weather-info-caption').text(data.main);
				infoEl.find('.weather-info-description').text(data.description);
				infoEl.find('.weather-info-temp-max').text(data.tempMax);
				infoEl.find('.weather-info-temp-min').text(data.tempMin);
				infoEl.find('.weather-info-humidity').text(data.humidity);
				infoEl.find('.weather-img').removeClass("cloud clear rain unknown").addClass(data.imgType);
			}
		};
	});