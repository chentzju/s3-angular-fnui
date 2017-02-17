/**
 * Created by chent on 2017/1/18.
 */
angular.module("myApp").controller("ProductCtrl",["$scope","$rootScope","ProductService",function ($scope,$rootScope,ProductService) {
    //$rootScope  在购买的时候应该会有用吧
    $scope.products = ProductService.getProductList();

    $scope.refreshPage = function () {
        console.log('刷新');
    };

    $scope.loadMore = function () {
        console.log('加载更多产品');
    }
    console.log($("#iscroll-wrapper").attr("id"));

}]);

myApp.controller("ProductDetailCtrl",["$scope","$rootScope",'$stateParams','ProductService',function ($scope,$rootScope,$stateParams,ProductService) {
    //取得传过来的参数
    var productId = $stateParams.productId;
    // console.log();
    $scope.product = ProductService.getProductDetail(productId);
}]);