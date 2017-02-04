/**
 * Created by chent on 2017/1/18.
 */
angular.module("myApp").service("OrderService",function(){

    this.getOrderStatusArray = function(){
        return [
            {id:null,name:'全  部'},
            {id:0, name:'未审核'},
            {id:1,name:'已审核'},
            {id:2,name:'已作废'}
        ];
    };

    this.getOrderList = function(status,page,time){
        var orderList = [];
        var i,order;
        switch(status.id){
            case 0:
                for(i = 0;i<3;i++){
                    order = {};
                    order.id = "DD2017000000"+time+page+i;
                    order.name = "订单名称";
                    order.status = 0;
                    order.statusText = "未审核";
                    orderList.push(order);
                }
                break;
            case 1:
                for(i = 0;i<10;i++){
                    order = {};
                    order.id = "DD2017111111"+time+page+i;
                    order.name = "订单名称";
                    order.status = 0;
                    order.statusText = "未审核";
                    orderList.push(order);
                }
                break;
            case 2:
                for(i = 0;i<10;i++){
                    order = {};
                    order.id = "DD201722222"+time+page+i;
                    order.name = "订单名称";
                    order.status = 0;
                    order.statusText = "未审核";
                    orderList.push(order);
                }
                break;
            default:
                for(i = 0;i<10;i++){
                    order = {};
                    order.id = "DD2017xxxxxxx"+time+page+i+Math.floor(Math.random()*3);
                    order.name = "订单名称";
                    order.status = 0;
                    order.statusText = "未审核";
                    orderList.push(order);
                }
                break;
        }


        return orderList;
    };

    this.getOrderDetail = function(){

    }

});