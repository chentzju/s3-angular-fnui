/**
 * Created by chent on 2017/1/18.
 */

angular.module("myApp").controller("OrderListCtrl",["$scope","$rootScope","OrderService",function ($scope,$rootScope,OrderService) {
    var page,time,status;

    $scope.changeStatus = function(newStatus){
        page = 0;
        time = 0;
        status = newStatus;
        $scope.orders = loadOrders(status,page,time);
    };

    $scope.changeTime = function(newTime){
        page = 0;
        time = newTime;
        $scope.orders = loadOrders(status,page,newTime);
    };

    $scope.refreshPage = function () {
        $scope.orders = loadOrders(status,page,time);
    };

    $scope.loadMore = function () {
        page = page+1;
        var orders = loadOrders(status,page,time);
        if(orders.length>0)
            for(var i=0,len=orders.length; i<len; i++){
                $scope.orders.push(orders[i]);
            }
    };

    function loadOrders(status,page,time) {
         return OrderService.getOrderList(status,page,time);
    }

    function initPage(){
        page =0;time=0;
        var orderStatusArray = OrderService.getOrderStatusArray();
        $scope.orderStatusArray = orderStatusArray;
        status = orderStatusArray[0];
        $scope.orders = loadOrders(status,page,time);
    }

    //初始化
    initPage();
}]);