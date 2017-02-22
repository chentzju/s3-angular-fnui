
myApp.controller("MyappCtrl",['$scope','$state','$es','MyappService',function ($scope,$state,$es,MyappService) {

    //首页
    var orderMonery = $es.orderMonery;
    var orderDay = $es.orderDay;
    var orderMonth = $es.orderMonth;
    $scope.myapp = MyappService.getMyapp(orderMonery,orderDay,orderMonth);
}])
.controller('SearchCtrl',['$scope','$state',function($scope,$state){
    $scope.cancel = function(){
        $state.goBack();
    }
}]);