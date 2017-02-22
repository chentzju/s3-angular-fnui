
angular.module("myApp").controller("orderConfirm",["$scope","$stateParams","$rootScope",function ($stateParams,$scope,$rootScope) {
    var scHei = document.documentElement.offsetHeight||document.body.offsetHeight;
    /*console.log(scHei)
    console.log(parseFloat($(".orderconfirm-bottom").css("height")))*/
    $(".orderconfirm").css("height",scHei-50-parseFloat($(".orderconfirm-bottom").css("height")))
    /*console.log($(".cart-back").attr("class"))*/
    /* console.log($rootScope.backState)*/
}])