app.controller('SampleController', ['$scope', function($scope) {
  $scope.title = 'The title in the first controller';

  $scope.cart = [];
  
  $scope.products = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    date: new Date('2014', '03', '08') 
    
   
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    date: new Date('2013', '08', '01') 
    
    
    
  },
     { 
    name: 'Smart way learn Javascript', 
    price: 23, 
    date: new Date('2016', '08', '01') 
    
  
  },
     { 
    name: 'Missing Manual Javascript and JQ', 
    price: 8, 
    date: new Date('2013', '08', '01') 
    
    
  } 
];      
		

$scope.addItem = function(product) {
$scope.cart.push(product);
};
    
       
     $scope.getTotalAmount = function() {
            $scope.myCart.product.price[i] * $scope.myCart.product.price[i];
        
    };
     
    
}]);