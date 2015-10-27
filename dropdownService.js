(function () {

	angular.module('auctionDiary').service('dropdownService', dropdownService);

	function dropdownService() {
		this.categories = {
			categoriesBets: ['bet365', 'bwin', 'William Hill', 'Sportium'],
			categoriesBids: ['eBay', 'TodoColección', 'Wallapop']
		};
	}

}());
