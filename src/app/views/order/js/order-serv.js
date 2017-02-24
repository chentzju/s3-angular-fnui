/**
 * Created by chent on 2017/1/18.
 */
angular.module("myApp")
    .service("cartService",['$es',function($es){
        this.getCartList = function(){
            var cartList = [];
            var i,order;
            for(i = 0;i<10;i++){
                order = {};
                order.id = i;
                order.num = 5;
                order.name = "订单名称"+i;
                order.price = "1106";
                order.limtNum=7;
                cartList.push(order);
            }
            /*switch(status.id){
                case 0:
                    for(i = 0;i<3;i++){
                        order = {};
                        order.id = "DD2017000000"+time+page+i;
                        order.time = "2017年"+time;
                        order.name = "订单名称";
                        order.money = "1106"+time+page+i;
                        order.status = 0;
                        order.statusText = "待审核";
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
                        order.statusText = "已审核";
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
                        order.statusText = "已作废";
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
            }*/


            return cartList;
        };
    }])
    /*.service("OrderDetailService",['$es',function($es){

        this.getOrderDetail = function(orderId){
            //get orderDetail
            var orderDetail = {
                orderId:orderId,
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

    }]);*/
