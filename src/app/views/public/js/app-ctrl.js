
myApp.controller("MyappCtrl",['$scope','$state','$es','MyappService',function ($scope,$state,$es,MyappService) {

    $scope.myOrdermoney = MyappService.getOrdermoney();
    $scope.myOrderDay = MyappService.getOrderDay();
    $scope.myOrderMonth = MyappService.getOrderMonth();
}])
.controller('SearchCtrl',['$scope','$state',function($scope,$state){
    $scope.cancel = function(){
        $state.goBack();
    }
}]);