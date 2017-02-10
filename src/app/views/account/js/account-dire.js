/**
 * Created by chent on 2017/2/10.
 */
angular.module("myApp").directive('loginForm',['$es','$state',function($es,$state){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'views/account/login.tpl.html',
        link:function (scope,element,attr) {
             $("#login-form").validator({
                 onValid:function(){
                     scope.doLogin = function(){
                         //处理登陆事宜
                         if(scope.loginName !== "" && scope.password !== ""){
                         $es.userinfo = {userName:'测试名称',unionId:'3817',customerId:'01.001',customerName:'测试公司'};
                         event.preventDefault();
                         $state.go('app');
                          }else{
                             scope.errorMessage = "用户名或密码错误";
                             scope.showError = true;
                          }
                     }
                      },
                      onInValid:function(){
                         return false;
                       }

                     });
             }
    }
}]);