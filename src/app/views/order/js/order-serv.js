/**
 * Created by chent on 2017/1/18.
 */

/*
angular.module("myApp").service("OrderService",function(){

    this.getProductStatusArray = function(){
        return [
            {id:null,name:'全部产品'},
            {id:0, name:'最近订单'},
            {id:1,name:'收藏产品'}
        ];
    };
    this.getProductList = function(){

        var productList = [];
        var i,product;
        //make virtual product
        // for(var i =0;i<10;i++){
        //     var v_product = {
        //         productId:"CC001002003"+i,
        //         productName:"一个虚拟产品名称"+i,
        //         price: Number(Math.random()*10).toFixed(2)
        //     };
        //     productList.push(v_product);
        // }
        switch(status.id){
            case 0:
                for(i = 0;i<10;i++){
                    product = {
                        productId:"CC001002001"+i,
                        productName:"一个虚拟产品名称"+i,
                        price: Number(Math.random()*10).toFixed(2)
                    };
                    productList.push(product);
                }
                break;
            case 1:
                for(i = 0;i<10;i++){
                    product = {
                        productId:"CC001002002"+i,
                        productName:"一个虚拟产品名称"+i,
                        price: Number(Math.random()*10).toFixed(2)
                    };
                    productList.push(product);
                }
                break;
            default:
                for(i = 0;i<10;i++){
                    product = {
                        productId:"CC001002003"+i,
                        productName:"一个虚拟产品名称"+i,
                        price: Number(Math.random()*10).toFixed(2)
                    };
                    productList.push(product);
                }
                break;
        }

        return productList;
    };


    this.getProductDetail = function(productId){

        //get product

        var product = {
            productId:productId,
            productName:"一个虚拟的产品",
            price: Number(Math.random()*10).toFixed(2),
            type:"优等品",
            length:"100m"
        };

        return product;
    }

});*/
/**
 * Created by chent on 2017/1/18.
 */
angular.module("myApp")
    .service("OrderService",['$es',function($es){
        this.getOrderList = function(){
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
            }


            return orderList;
        };
    }])
    .service("OrderDetailService",['$es',function($es){

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

    }]);
