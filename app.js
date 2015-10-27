// tenemos que cambiar la dependencia hacia el nuevo módulo
angular.module('auctionDiary', ['ui.router']);

// las rutas ahora se maneja con el concepto de estado
angular.module('auctionDiary').config(function ($stateProvider) {
	// Las rutas pasan a ser opcionales,
	// en la práctica sólo se usan si vienen de aplicaciones externas y por cuestiones de SEO
	$stateProvider
		.state('total', {
			url: '/',
			controller: 'AuctCtrl as subasta',
			templateUrl: 'total.html'
		})
		.state('nuevo', {
			url: '/nuevo',
			controller: 'AuctCtrl as subasta',
			templateUrl: 'nuevo.html'
		})
		.state('lista', {
			url: '/lista',
			controller: 'AuctCtrl as subasta',
			templateUrl: 'lista.html'
		}).state('not-found', {
			url: '*path',
			templateUrl: 'not-found.html'
		});
	// realmente no existe un estado 'not found',
	// pero puede llegar rutas no controladas
});
