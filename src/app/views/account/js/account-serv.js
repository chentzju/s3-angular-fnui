/**
 * Created by chent on 2017/2/13.
 */
angular.module('myApp').service('UserService',['$es',function($es){

    var userManage = $es.getConfig('userservice');

    var getPublicKey = function(){
        return $es.java('userAuthenBean.getPublickKey',{},userManage,1000);
    };

    /**
     *  登录
     * @param loginName
     * @param password
     * @param code
     * @returns {*}
     */
    var userLogin = function(loginName,password,code){
        //TESTSTART
        $es.userinfo = {userName:'haha'};
        return {
            retCode:'200',
            retMsg:'success',
        };
        //TESTEND

        // public key
        var key = getPublicKey();
        if(key.retCode != "200"){
            return key;
        }
        var rsakey = new RSAKey();
        rsakey.setPublic(key.modulus,key.exponent);
        var pwd = rsakey.encrypt(password);
        var param = {};
        param.loginName = loginName;
        param.password = pwd.toString(16);
        if(code)
            param.code = code;
        else
            param.code = '';
        var result = $es.java('userAuthenBean.userLogin',param,userManage,3000);
        if(result || !result.retCode){
            return {
                retCode:'400',
                retMsg:'系统错误，请联系管理员'
            }
        }else if(result.retCode !== "200"){
            return result;
        }else if(result.isActive == '0'){
            return {
                retCode:'400',
                retMsg:'用户未激活，请激活后登录'
            }
        }else{
            $es.userinfo = result.user;
            return result;
        }
    };

    var changePassword = function(oldPassword,newPassword,repeatPassword){
        //TESTSTART
        return {
            retCode:'200',
            retMsg:'success'
        };
        //TESTEND


        // public key
        var key = getPublicKey();
        if(key.retCode != "200"){
            return key;
        }
        var rsakey = new RSAKey();
        rsakey.setPublic(key.modulus,key.exponent);
        var oldPwd = rsakey.encrypt(oldPassword);
        var newPwd = rsakey.encrypt(newPassword);
        var repeatPwd = rsakey.encrypt(repeatPassword);

        var param = {
            oldPassword:oldPwd,
            newPassword:newPwd,
            repeatPassword:repeatPwd
        };

        var result = $es.java("userAuthenBean.changePassword",param,userManage);
        return result;
    };

    return {
        userLogin:userLogin,
        changePassword:changePassword
    }
}])
    .service('PhoneService',['$es',function($es){

        var userManage = $es.getConfig('userservice');

        this.getValidateCode = function(phoneNumber){

            //TESTSTART

            //假装取到了
            return{
                retCode:200,
                retMsg:'success'
            };
            //TESTEND

            var param = {
                mobile:phoneNumber
            };
            return $es.ajax('userInfoBean.getValidateCode',param,userManage);
        };

        this.mobileLogin = function(phoneNumber,code){

            //TESTSTART

            return{
                retCode:200,
                retMsg:'success'
            };
            //TESTEND

            var param = {
                mobile:phoneNumber,
                code:code
            };
            return $es.ajax('userInfoBean.getValidateCode',param,userManage);
        };

    }]);