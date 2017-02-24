//修改密码的form
//实现修改密码的功能
angular.module("myApp")
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
}])
