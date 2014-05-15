angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'scotchController', 'GeekService', 'StarDirective', 'angularLocalStorage', 'ui.router', 'emguo.poller', 'ngResource'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider

		// HOME STATES AND NESTED VIEWS ========================================
		.state('home', {
			url: '/home',
			templateUrl: 'views/home2.html'
		})

		.state('home.list', {
			url: '/list',
			templateUrl: 'views/home2-list.html',
			controller: function($scope) {
				$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
			}
		})

		// nested list with just some random string data
		.state('home.paragraph', {
			url: '/paragraph',
			template: 'I could sure use a drink right now.'
		})

		// nested list with custom controller
		.state('about', {
			url: 'views/partial-about',
			views: {

				// the main template will be placed here (relatively named)
				'': {
					templateUrl: 'views/partial-about.html'
				},

				// the child views will be defined here (absolutely named)
				'columnOne@about': {
					template: 'Look I am a column!'
				},

				// for column two, we'll define a separate controller 
				'columnTwo@about': {
					templateUrl: 'views/partial-data.html',
					controller: 'scotchController'
				}
			}

		});
		//$urlRouterProvider.otherwise('/home');

	});