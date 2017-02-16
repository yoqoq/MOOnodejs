/**
 * 
 */
app.controller('SampleController', ['$scope', function($scope) { 
  $scope.title = 'Gemma Gem'; 
  $scope.description = 'Home of the most elligant gem.';
  $scope.products = [
	  	{ 
	  		name: "Dodecahedron",
	  		price: 2.95,
	  		description: "This is a very nice gem",
	  		canPurchase: true,
	  		soldOut: false,
	  		images: [ 
	  			{
	  			full: 'images/gems.jpg',
	  			thumb: 'images/gems2.jpg'
	  			}
	  		]
	  		},
	  		{
	  		name: "Pentagonal Gem",
	  		price: 5.95,
	  		description: "This is a rare gem",
	  		canPurchase: true,
	  		soldOut: false,
	  		images: [ 
	  			{
	  			full: 'images/gems.jpg',
	  			thumb: 'images/gems2.jpg'
	  			}
	  		]
	  		}
		];
  $scope.reviews= [
	  {
	  stars: 5,
	  body: "I love this product!",
	  author: "joe@thomas.com"
	  },
	  {
	  stars: 1,
	  body: "This product sucks",
	  author: "tim@hater.com"
	  }
	  ];
}]);