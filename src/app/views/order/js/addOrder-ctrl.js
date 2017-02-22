
angular.module("myApp").controller("addOrderCtrl",["$scope","$stateParams","$rootScope",function ($stateParams,$scope,$rootScope) {
    var scHei = document.documentElement.offsetHeight||document.body.offsetHeight;
    console.log(scHei)

    console.log(parseFloat($(".bottom").css("height")))
    $(".addO").css("height",scHei-50-parseFloat($(".bottom").css("height")))
    /*console.log($(".cart-back").attr("class"))*/
    /* console.log($rootScope.backState)*/
}])