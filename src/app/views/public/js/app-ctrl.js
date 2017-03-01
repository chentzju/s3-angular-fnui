
myApp.controller("MyappCtrl",['$scope','$state','$es','MyappService',function ($scope,$state,$es,MyappService) {

    $scope.myOrdermoney = MyappService.getOrdermoney();
    $scope.myOrderDay = MyappService.getOrderDay();
    $scope.myOrderMonth = MyappService.getOrderMonth();


    $scope.otherModules = [
        {
            name:"分行特色",
            url:'about'
        }
    ]
}]);