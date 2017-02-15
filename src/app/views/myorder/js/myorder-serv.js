/**
 * Created by chent on 2017/1/18.
 */
angular.module("myApp").service("OrderService",function(){

    this.getOrderStatusArray = function(){
        return [
            {id:null,name:'全  部'},
            {id:0, name:'待审核'},
            {id:1,name:'已审核'},
            {id:2,name:'已核销'},
            {id:3,name:'已作废'}
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
                    order.time = "2017年"+time;
                    order.name = "订单名称";
                    order.money = "1106"+time+page+i;
                    order.status = 0;
                    order.statusText = "未审核";
                    orderList.push(order);
                }
                break;
            case 1:
                for(i = 0;i<10;i++){
                    order = {};
                    order.id = "DD2017111111"+time+page+i;
                    order.time = "2017年"+time;
                    order.name = "订单名称";
                    order.money = "1106"+time+page+i;
                    order.status = 0;
                    order.statusText = "未审核";
                    orderList.push(order);
                }
                break;
            case 2:
                for(i = 0;i<10;i++){
                    order = {};
                    order.id = "DD201722222"+time+page+i;
                    order.time = "2017年"+time;
                    order.name = "订单名称";
                    order.money = "1106"+time+page+i;
                    order.status = 0;
                    order.statusText = "未审核";
                    orderList.push(order);
                }
                break;
            default:
                for(i = 0;i<10;i++){
                    order = {};
                    order.id = "DD2017xxxxxxx"+time+page+i+Math.floor(Math.random()*3);
                    order.time = "2017年"+time;
                    order.name = "订单名称";
                    order.money = "1106"+time+page+i;
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