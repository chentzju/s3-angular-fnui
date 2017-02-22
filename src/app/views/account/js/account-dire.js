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
    .directive('mobileLogin',['$state','PhoneService',function($state,PhoneService){
        return {
            restrict:'E',
            replace:true,
            templateUrl:'views/account/mobileLogin.tpl.html',
            link:function(scope,element,attr){
                $(element).find('#mobileForm').validator({
                    validateOnSubmit:true,
                    onSuccess:function(){
                        PhoneService.getValidateCode(scope.mobilephone);
                        //点击之后 倒计时
                        var getCode = $("#getCode");
                        $("#checkCode").removeClass('fn-disabled');
                        getCode.addClass('fn-disabled');

                        var i = 60;
                        getCode.html("("+i+")s");
                        Timer.invoke(tick,0,1000,60000);
                        function tick(){
                            --i;
                            getCode.html("("+i+")s");
                            if(i <= 1){
                                getCode.html("获取验证码");
                                getCode.removeClass('fn-disabled');
                            }
                        }
                    }
                });
                $(element).validator({
                    validateOnSubmit:true,
                    onSuccess:function(){
                        var result = PhoneService.mobileLogin(scope.mobilephone,scope.validateCode);
                        //点击之后 倒计时
                        if(result.retCode == "200"){
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