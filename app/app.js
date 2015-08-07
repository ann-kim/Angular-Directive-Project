var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'app/homeTmpl.html',
				controller: 'homeCtrl',
				dirDisplay: '<dir-display></dir-display>'
			})
			.otherwise({
				redirectTo: '/'
			})
	});
