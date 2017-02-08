angular.module("myApp").controller("PaymentListCtrl",["$scope","$rootScope","PaymentService",function ($scope,$rootScope,ProductService) {
    ////$rootScope  在购买的时候应该会有用吧
    //$scope.products = ProductService.getProductList();
    //
    //$scope.refreshPage = function () {
    //    console.log('刷新');
    //};
    //
    //$scope.loadMore = function () {
    //    console.log('加载更多产品');
    //}
}]);

myApp.controller("PaymentListCtrl",["$scope","$rootScope",'$stateParams','PaymentService',function ($scope,$rootScope,$stateParams,ProductService) {
    //取得传过来的参数
    //var productId = $stateParams.productId;
    //// console.log();
    //$scope.product = ProductService.getProductDetail(productId);
}]);
