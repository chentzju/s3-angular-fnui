

angular.module("myApp").controller("cartCtrl",["$scope","$rootScope",function ($scope,$rootScope) {
    var scHei = document.documentElement.offsetHeight||document.body.offsetHeight;
    /*console.log(scHei)

    console.log($(".cart-main").attr("class"))*/
    $(".cart-main").css("height",scHei-90);
    $scope.cartBack=function () {
        $rootScope.go(order.productDetail)
    }
    /*console.log($(".cart-back").attr("class"))*/
   /* console.log($rootScope.backState)*/
}])
/**
 * Created by ICBC on 2017/2/13.
 */
/*
$(function(){
    //计算根元素字体大小
    function adapt(w){
        var winWidth = $(window).width();
        var font_size = (winWidth / w) * 20;
        $('html').css('font-size', font_size);
    }
    // 设计稿像素的一半
    adapt(540);

    var mainH=$(window).height();
    $('.main').css('min-height',mainH-19);
});*/

