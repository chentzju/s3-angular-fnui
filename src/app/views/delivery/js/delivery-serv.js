angular.module("myApp").service("DeliveryService",function(){

    this.getDeliveryStatusArray = function(){
        return [
            {id:null,name:'全  部'},
            {id:0, name:'待审核'},
            {id:1,name:'已审核'},
            {id:2,name:'已作废'}
        ];
    };
    this.getDeliveryList = function(status,page,time){
        var deliveryList = [];
        var i,delivery;
        switch(status.id){
            case 0:
                for(i = 0;i<3;i++){
                    delivery = {};
                    delivery.id = "DD2017000000"+time+page+i;
                    delivery.name = "订单名称";
                    delivery.status = 0;
                    delivery.statusText = "待审核";
                    deliveryList.push(delivery);
                }
                break;
            case 1:
                for(i = 0;i<10;i++){
                    delivery = {};
                    delivery.id = "DD2017111111"+time+page+i;
                    delivery.name = "订单名称";
                    delivery.status = 0;
                    delivery.statusText = "已审核";
                    deliveryList.push(delivery);
                }
                break;
            case 2:
                for(i = 0;i<10;i++){
                    delivery = {};
                    delivery.id = "DD201722222"+time+page+i;
                    delivery.name = "订单名称";
                    delivery.status = 0;
                    delivery.statusText = "已作废";
                    deliveryList.push(delivery);
                }
                break;
            default:
                for(i = 0;i<10;i++){
                    delivery = {};
                    delivery.id = "DD2017xxxxxxx"+time+page+i+Math.floor(Math.random()*3);
                    delivery.name = "订单名称";
                    delivery.status = 0;
                    delivery.statusText = "已确认";
                    deliveryList.push(delivery);
                }
                break;
        }


        return deliveryList;
    };

    this.getDeliveryDetail = function(){

    }
});