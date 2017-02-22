
myApp.controller("MyappCtrl",['$scope','$state','$es','MyappService',function ($scope,$state,$es,MyappService) {

    //首页
    var orderMonery = $es.orderMonery;
    var orderDay = $es.orderDay;
    var orderMonth = $es.orderMonth;
    $scope.myapp = MyappService.getMyapp(orderMonery,orderDay,orderMonth);
}]);