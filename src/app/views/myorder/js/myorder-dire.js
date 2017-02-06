/**
 * Created by chent on 2017/1/18.
 */

myApp.directive('orderTabs', function() {
    return {
        restrict: 'E',
        replace:true,
        scope: {},
        controller: 'OrderListCtrl',
        templateUrl: 'views/myorder/orderTab.tpl.html',
        link:function(OrderListCtrl){

        }
    };
})