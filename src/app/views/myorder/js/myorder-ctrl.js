/**
 * Created by chent on 2017/1/18.
 */

angular.module("myApp").controller("OrderListCtrl",["$scope","$rootScope","OrderService",function ($scope,$rootScope,OrderService) {
    var page,time,status;

    $scope.changeStatus = function(newStatus){
        page = 0;
        time = 0;
        status = newStatus;
        if(status.id=='1'){
            $scope.isBadge = false;
            $scope.isPending = false;
            $scope.isSuccess = true;

        }else if(status.id=='2'){

            $scope.isPending = false;
            $scope.isSuccess = false;
            $scope.isBadge = true;
        }else{

            $scope.isBadge = false;
            $scope.isSuccess = false;
            $scope.isPending = true;

        }
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
        var toast = $.toast.show('loading');
        var result = OrderService.getOrderList(status,page,time);
        if(toast)
            setTimeout(function(){
                toast.close();
            },0);
        if(result.retCode == "200"){
            return result.orderList;
        }else
            return [];
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


myApp.controller("OrderDetailCtrl",["$scope","$rootScope",'$stateParams','OrderDetailService',function ($scope,$rootScope,$stateParams,OrderDetailService) {
    //取得传过来的参数
    var orderId = $stateParams.orderId;
    $scope.order = OrderDetailService.getOrderDetail(orderId);
    // var orderNum = $stateParams.orderNum;
    // $scope.order = OrderDetailService.getOrderDetail(orderId,orderNum);

    // 我的订单详情
    // function loadOrderDetail(status,page,time) {
    //     return OrderDetailService.getOrderDetail(status,page,time);
    // }
}]);
