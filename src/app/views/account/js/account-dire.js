/**
 * Created by chent on 2017/2/10.
 */
angular.module("myApp").directive('loginForm',['$state','UserService',function($state,UserService){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'views/account/login.tpl.html',
        link:function (scope,element,attr) {
             $(element).validator({
                 validateOnSubmit:true,
                 onSuccess:function(){
                     //处理登陆事宜
                     var result = UserService.userLogin(scope.user,scope.password);
                     if(result.retCode === "200"){
                         event.preventDefault();
                         $state.go('app');
                     }else{
                         scope.errorMessage = result.retMsg;
                         scope.showError = true;
                     }
                 }

             });
        }
    }
}])
.directive('passwordForm',['$state','UserService',function($state,UserService){
    return {
        restrict:'E',
        replace:true,
        templateUrl:'views/account/password.tpl.html',
        link:function (scope,element,attr) {
            $(element).validator({
                validateOnSubmit:true,
                onSuccess:function(){
                    var result = UserService.changePassword(scope.oldPassword,scope.newPassword,scope.repeatPassword);
                    if(result.retCode === "200"){
                        event.preventDefault();
                        $state.go('profile.info');
                    }else{
                        scope.errorMessage = result.retMsg;
                        scope.showError = true;
                    }
                }
            });
        }
    }
}]);