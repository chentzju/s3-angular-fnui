/**
 * Created by chent on 2017/2/8.
 */
angular.module('myApp').controller('LoginCtrl',['$scope','$rootScope','$state','$es',function ($scope,$rootScope,$state,$es) {


    $("#login-form").validator({
        onValid:function(){
            $scope.doLogin = function(){
                //处理登陆事宜
                if($scope.loginName === "testuser" && $scope.password === "123456"){
                    $es.userinfo = {userName:'测试名称',unionId:'3817',customerId:'01.001',customerName:'测试公司'};
                    event.preventDefault();
                    $state.go('app');
                }else{
                    $scope.errorMessage = "用户名或密码错误";
                    $scope.showError = true;
                }
            }
        },

        onInValid:function(){
            return false;
        }

    });
}]);