/**
 * Created by chent on 2017/1/18.
 */
angular.module("myApp").controller("cartCtrl",["$scope","$rootScope","cartService",function ($scope,$rootScope,cartService) {
    var scHei = document.documentElement.offsetHeight||document.body.offsetHeight;
    $(".cart-main").css("height",scHei-90);

    /*console.log(111)*/
    /*var page,time,status;
     $scope.changeStatus = function(newStatus){
     page = 0;
     time = 0;
     status = newStatus;
     $scope.products = loadProducts(status,page,time);
     };

     //$rootScope  在购买的时候应该会有用吧
     $scope.products = ProductService.getProductList();

     $scope.refreshPage = function () {
     $scope.products = loadProducts(status,page,time);
     };

     $scope.loadMore = function () {
     page = page+1;
     var products = loadProducts(status,page,time);
     if(products.length>0)
     for(var i=0,len=products.length; i<len; i++){
     $scope.products.push(products[i]);
     }
     };

     function loadProducts(status,page,time) {
     return ProductService.getProductList(status,page,time);
     }
     function initPage(){
     page =0;time=0;
     var productStatusArray = ProductService.getProductStatusArray();
     $scope.productStatusArray = productStatusArray;
     status = productStatusArray[0];
     $scope.products = loadProducts(status,page,time);
     }

     //初始化
     initPage();*/

    $scope.reduceCartPro=function ($index) {
        if($scope.cartProducts[$index].num==1){
            $scope.cartProducts[$index].num=1
        }else{
            $scope.cartProducts[$index].num--
        }
    };
    $scope.addCartPro=function($index){
        if($scope.cartProducts[$index].num==$scope.cartProducts[$index].limtNum){
            $scope.cartProducts[$index].num=$scope.cartProducts[$index].limtNum
        }else{
            $scope.cartProducts[$index].num++
        }
    };
    function loadCartProducts() {
        return cartService.getCartList();
    }
    function initPage(){
        $scope.cartProducts = loadCartProducts();
    }

    //初始化
    initPage()

}]);
myApp.controller("addOrderCtrl",["$scope","$rootScope",'$stateParams',function ($scope,$rootScope,$stateParams) {
    /*//取得传过来的参数
     console.log($rootScope.backState)
     var productId = $stateParams.productId;
     // console.log();
     $scope.product = ProductService.getProductDetail(productId);*/
    var scHei = document.documentElement.offsetHeight||document.body.offsetHeight;
    $(".addO").css("height",scHei-50)
}]);
myApp.controller("orderConfirmCtrl",["$scope","$rootScope",'$stateParams',function ($scope,$rootScope,$stateParams) {
    var scHei = document.documentElement.offsetHeight||document.body.offsetHeight;
    $(".orderconfirm").css("height",scHei-51-parseFloat($(".orderconfirm-bottom").css("height")))
}]);
/*
 myApp.controller("orderCatCtrl",["$scope","$rootScope",'$stateParams','ProductService',function ($scope,$rootScope,$stateParams,ProductService) {
 //取得传过来的参数
 console.log($rootScope.backState)
 var productId = $stateParams.productId;
 // console.log();
 $scope.product = ProductService.getProductDetail(productId);
 }]);*/
