'use strict';

angular.module('MainCtrl', []).controller('MainController', function($scope, poller, $resource, storage) {


	/*
	include mySocket above!

	mySocket.on('news', function(data) {
		console.log(data);
		mySocket.emit('my other event', {
			my: 'data'
		});
	}); */

	$scope.tagline = 'To the moon and back!';

	storage.bind($scope, 'counter', '0');

	var myResource = $resource('http://localhost:8080/api/stuff', {});

	//var myPoller = poller.get(myResource);

	function success(succ) {
		console.log(succ);
	}

	function error(err) {
		console.log(err);
	}

	//myPoller.promise.then(success(),error(), function(){
	//	$scope.counter++;
	//});


});