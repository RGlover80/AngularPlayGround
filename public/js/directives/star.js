'use strict';

angular.module('StarDirective', [])
  .directive('starRating', function() {
    return {
      restrict: 'A',
      template: '<ul class="rating list-inline">' +
        '<li ng-repeat="star in stars" class="{{star.class}}">' +
        '\u2605' +
        '</li>' +
        '</ul>',
      scope: {
        ratingValue: '=',
        max: '='
      },
      link: function(scope, elem, attrs) {
        
          scope.stars = [];
          var starNumber = scope.ratingValue;
          for (var i = 0; i < scope.max; i++) {
            var newStar = {};
            if (i < scope.ratingValue) {
              newStar.class = "filled";
            }
            else { newStar.class = 'notfilled'; }
            scope.stars.push(newStar);
          }
          console.log(scope.stars);
      }
    }
  });