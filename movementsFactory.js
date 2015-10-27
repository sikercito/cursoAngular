(function () {

	angular.module('auctionDiary').factory('movementsFactory', movementsFactory);

	function movementsFactory()  {

		var movements = [];

		var total = {
			bets: 0,
			bids: 0
		};

		var result  =   {};


		result.getMovements =   function ()  {
			return movements;
		};

		result.getTotal =   function ()  {
			return total;
		};

		result.postMovement =   function (movement)  {
			movements.push(movement);
			total.bets += movement.isBet * movement.money;
			total.bids += movement.isBid * movement.money;
		};

		result.balance = function () {
			return total.bets - total.bids
		}

		result.type = function (movement) {
			return movement.isBet && 'Apuesta' || 'Subasta'
		}


		return result;
	};

}());
