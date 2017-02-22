angular.module("myApp").controller("PaymentListCtrl",["$scope","$rootScope","PaymentService",function ($scope,$rootScope,PaymentService) {
    var page,time,status;

    $scope.changeStatus = function(newStatus){
        page = 0;
        time = 0;
        status = newStatus;
        $scope.payments = loadPayments(status,page,time);
    };

    $scope.changeTime = function(newTime){
        page = 0;
        time = newTime;
        $scope.payments= loadPayments(status,page,newTime);
    };

    $scope.refreshPage = function () {
        $scope.payments = loadPayments(status,page,time);
    };

    $scope.loadMore = function () {
        page = page+1;
        var payments = loadPayments(status,page,time);
        if(payments.length>0)
            for(var i=0,len=payments.length; i<len; i++){
                $scope.payments.push(payments[i]);
            }
    };

    function loadPayments(status,page,time) {
        return PaymentService.getPaymentList(status,page,time);
    }

    function initPage(){
        page =0;time=0;
        var paymentStatusArray = PaymentService.getPaymentStatusArray();
        $scope.paymentStatusArray = paymentStatusArray;
        status = paymentStatusArray[0];
        $scope.payments = loadPayments(status,page,time);
    }

    //初始化
    initPage();
}])
.controller("PaymentDetailCtrl",["$scope","$rootScope",'$stateParams','PaymentDetailService',function ($scope,$rootScope,$stateParams,PaymentDetailService) {
    //取得传过来的参数
    var orderId = $stateParams.orderId;
    var orderNum = $stateParams.orderNum;
    $scope.order = OrderDetailService.getOrderDetail(orderId,orderNum);

    // 我的订单详情
    // function loadOrderDetail(status,page,time) {
    //     return OrderDetailService.getOrderDetail(status,page,time);
    // }
}]);
