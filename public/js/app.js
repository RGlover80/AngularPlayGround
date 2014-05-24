'use strict';

angular.module('sampleApp', ['ngRoute', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'scotchController', 'GeekService', 'StarDirective', 'angularLocalStorage', 'ui.router', 'emguo.poller', 'ngResource','btford.socket-io'])
	
	
	.factory('mySocket', function (socketFactory){
		var myIoSocket = io.connect('http://localhost');
		var mySocket = socketFactory({
			ioSocket: myIoSocket
		});
		return mySocket;
	}) 

	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');
		$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// nerds page that will use the NerdController
		.state('nerds', {
			url: '/nerds',
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		// 
		.state('geeks', {
			url: '/geeks',
			templateUrl: 'views/geek.html',
			controller: 'GeekController'
		})

		// HOME STATES AND NESTED VIEWS ========================================
		.state('nested', {
			url: '/nested',
			templateUrl: 'views/nested.html'
		})

		.state('nested.list', {
			url: '/list',
			templateUrl: 'views/nested-list.html',
			controller: function($scope) {
				$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
			}
		})

		// nested list with just some random string data
		.state('nested.paragraph', {
			url: '/paragraph',
			template: 'I could sure use a drink right now.'
		})

		// nested list with custom controller
		.state('multipleViews', {
			url: '/multipleViews',
			views: {

				// the main template will be placed here (relatively named)
				'': {
					templateUrl: 'views/multipleViews.html'
				},

				// the child views will be defined here (absolutely named)
				'columnOne@multipleViews': {
					template: 'Look I am a column!'
				},

				// for column two, we'll define a separate controller 
				'columnTwo@multipleViews': {
					templateUrl: 'views/multipleViews-data.html',
					controller: 'scotchController'
				}
			}

		})
		.state('game', {
			url: '/game',
			templateUrl: 'views/game.html'
		})

		.state('game.page1', {
			url: '/page1',
			templateUrl: 'views/game-page1.html'
		})
		.state('game.page2',{
			url: '/page2',
			templateUrl: 'views/game-page2.html'
		})
		.state('game.page3',{
			url: '/page3',
			templateUrl: 'views/game-page3.html'
		})
	});