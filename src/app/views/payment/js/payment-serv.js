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
                    payment.time1 = "2017-"+time;
                    payment.time2 = "2017-"+time;
                    payment.money1="￥11111"+time;
                    payment.money2="￥22222"+time;
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
                    payment.time1 = "2017-"+time;
                    payment.time2 = "2017-"+time;
                    payment.money1="￥11111"+time;
                    payment.money2="￥22222"+time;
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
                    payment.time1 = "2017-"+time;
                    payment.time2 = "2017-"+time;
                    payment.money1="￥11111"+time;
                    payment.money2="￥22222"+time;
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
                    payment.time1 = "2017-"+time;
                    payment.time2 = "2017-"+time;
                    payment.money1="￥11111"+time;
                    payment.money2="￥22222"+time;
                    payment.statusText = "未审核";
                    paymentList.push(payment);
                }
                break;
        }

        return paymentList;
    };

})
    .service("PaymentDetailService",function(){

        this.getPaymentDetail = function(paymentId,paymentNum){
            //get PaymentDetail
            var paymentDetail = {
                paymentId:paymentId,
                paymentNum:paymentNum,
                orderTo:"王小二",
                orderTel:'1590000001256',
                orderAddDefault:"杭州市下城区新市街153号",
                orderAdd:"浙江宁波",
                price: Number(Math.random()*10).toFixed(2),
                orderType:"自购零食",
                orderPayType:"265dtex/48f",
                length:"100m"
            };

            return paymentDetail;
        }

    });