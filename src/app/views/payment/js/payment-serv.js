angular.module("myApp").service("PaymentService",function(){

    this.getPaymentStatusArray = function(){
        return [
            {id:null,name:'全  部'},
            {id:0, name:'待审核'},
            {id:1,name:'已审核'},
            {id:2,name:'已作废'}
        ];
    };
    this.getPaymentList = function(status,page,time){
        var paymentList = [];
        var i,payment;
        switch(status.id){
            case 0:
                for(i = 0;i<3;i++){
                    payment = {};
                    payment.id = "DD2017000000"+time+page+i;
                    payment.name = "订单名称";
                    payment.status = 0;
                    payment.statusText = "待审核";
                    paymentList.push(payment);
                }
                break;
            case 1:
                for(i = 0;i<10;i++){
                    payment = {};
                    payment.id = "DD2017111111"+time+page+i;
                    payment.name = "订单名称";
                    payment.status = 0;
                    payment.statusText = "已审核";
                    paymentList.push(payment);
                }
                break;
            case 2:
                for(i = 0;i<10;i++){
                    payment = {};
                    payment.id = "DD201722222"+time+page+i;
                    payment.name = "订单名称";
                    payment.status = 0;
                    payment.statusText = "已作废";
                    paymentList.push(payment);
                }
                break;
            default:
                for(i = 0;i<10;i++){
                    payment = {};
                    payment.id = "DD2017xxxxxxx"+time+page+i+Math.floor(Math.random()*3);
                    payment.name = "订单名称";
                    payment.status = 0;
                    payment.statusText = "未审核";
                    paymentList.push(payment);
                }
                break;
        }


        return paymentList;
    };

    this.getOrderDetail = function(){

    }
});