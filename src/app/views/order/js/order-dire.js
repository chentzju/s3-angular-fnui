/**
 * Created by chent on 2017/1/18.
 */
myApp.directive("dropDown",function(){
    return {
        restrict:'E',
        transclude:true,
        template:'',
        link:function(scope,element,attr){
            $(element).dropdown();
        }
    }
});