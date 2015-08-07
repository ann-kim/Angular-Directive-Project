var app = angular.module('directivePractice');

app.directive('dirDisplay', function(){
	return {
		restrict: 'E',
		link: function(){

		},
		templateUrl: 'app/dirTmpl.html'
	};
});