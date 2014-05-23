'use strict';

angular.module('StarDirective', [])
  .directive('starRating', function() {
    return {
      restrict: 'A',
      template: '<ul class="rating list-inline">' +
        '<li ng-click="toggle($index)" ng-repeat="star in stars" class="{{star.class}}">' +
        '\u2605' +
        '</li>' +
        '</ul>',
      scope: {
        ratingValue: '=',
        max: '='
      },
      link: function(scope, elem, attrs) {

        var updateStars = function() {
          scope.stars = [];
          for (var i = 0; i < scope.max; i++) {
            var newStar = {};
            if (i < scope.ratingValue) {
              newStar.class = 'filled';
            } else {
              newStar.class = 'notfilled';
            }
            scope.stars.push(newStar);
          }
        };

        scope.$watch('ratingValue', function(oldVal, newVal) {
          if (newVal) {
            updateStars();
          }
        });
        scope.toggle = function(index) {
          scope.ratingValue = index + 1;
        };

        console.log(scope.stars);
      }
    }
  });