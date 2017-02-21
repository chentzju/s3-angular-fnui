/**
 * Created by chent on 2017/1/18.
 */
angular.module("myApp")
    .service("OrderService",function(){
    
        this.getOrderStatusArray = function(){
            return [
                {id:null,name:'全  部'},
                {id:0, name:'待审核'},
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
    })
    .service("OrderDetailService",function(){

        this.getOrderDetail = function(orderId,orderNum){
            //get orderDetail
            var orderDetail = {
                orderId:orderId,
                orderNum:orderNum,
                orderTo:"王大二",
                orderTel:'1590000001256',
                orderAddDefault:"杭州市下城区新市街153号",
                orderAdd:"浙江宁波",
                price: Number(Math.random()*10).toFixed(2),
                orderType:"自购零食",
                orderPayType:"265dtex/48f",
                length:"100m"
            };

            return orderDetail;
        }

    });