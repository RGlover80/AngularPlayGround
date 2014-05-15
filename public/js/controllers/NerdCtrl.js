'use strict';

angular.module('NerdCtrl', []).controller('NerdController', function($scope, storage) {

	storage.bind($scope, 'tagline');
	storage.bind($scope, 'test', 'Some Default Text');
	storage.bind($scope, 'firstName');
	storage.bind($scope, 'lastName');

	$scope.clearTest = function() {
		storage.remove('test');
	};

	//storage.bind($scope,'varName',{defaultValue: 'randomValue123' ,storeName: 'customStoreKey'});

});
/*

// binding it to a $scope.variable (minimal)
storage.bind($scope,'varName');
// binding full
storage.bind($scope,'varName',{defaultValue: 'randomValue123' ,storeName: 'customStoreKey'});
// the params are ($scope, varName, opts(optional))
// $scope - pass a reference to whatever scope the variable resides in
// varName - the variable name so for $scope.firstName enter 'firstName'
// opts - custom options like default value or unique store name
//    Here are the available options you can set:
//        * defaultValue: the default value
//        * storeName: add a custom store key value instead of using the scope variable name

// will constantly be updating $scope.viewType
// to change the variable both locally in your controller and in localStorage just do
$scope.viewType = 'ANYTHING';
// that's it, it will be updated in localStorage

// just storing something in localStorage with cookie backup for unsupported browsers
storage.set('key','value');
// getting that value
storage.get('key');

// clear all localStorage values
storage.clearAll();

*/ 