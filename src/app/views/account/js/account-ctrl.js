/**
 * Created by chent on 2017/2/7.
 */
angular.module("myApp").controller('InfoCtrl',function($scope){
    $scope.items = function(){
        var items = [];
        for(var i =0;i<30;i++){
            var item = {};
            item.name = i;
            items.push(item)
        }
        return items;
    }();
    modal.action('标题','你确定吗？');
});