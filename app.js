// Declare the angular app
var app = angular.module('app', []);

// Hook in a directive
app.directive('fileDownload', function(){
  return {
    restrict: 'E', // applied on 'element'
    scope: {
      fileurl: '@fileurl',
      linktext: '@linktext'      
    },
    template: '<a href="{{ fileurl }}" download>{{ linktext }}</a>', // need this so that the inner HTML can be re-used
    link: function(scope, elem, attrs) {
 
    }               
  }
})

// Manually run the Angular app
//angular.bootstrap(document, ['app']);