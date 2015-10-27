(function () {
	angular.module('auctionDiary').controller('AuctCtrl', auctCtrl);

	function auctCtrl(movementsFactory, dropdownService) {
		var vm = this;

		vm.title = "Registra tus Apuestas/Subastas";
		vm.dropdown = dropdownService.categories;
		vm.newMovement = {
			isBet: 1,
			isBid: 0,
			money: 0,
			dateStart: new Date(),
            dateFinish: new Date()
		};

		vm.movements = movementsFactory.getMovements();
		vm.total = movementsFactory.getTotal();

		vm.saveMovement = function () {
			var auxCopyMov = angular.copy(vm.newMovement);
			movementsFactory.postMovement(auxCopyMov);
			vm.newMovement.money = 0;
		}
		vm.balance = movementsFactory.balance;
		vm.type = movementsFactory.type;
	}

}());
