angular.module('app.dataAnalysis', [
	'ui.router',
	'app.dataAnalysis.controller'
])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('dataAnalysis', {
				url: '/dataAnalysis',
				templateUrl: 'modules/dataAnalysis/dataAnalysis.html',
				controller: 'DataAnalysisController'
			});
	});