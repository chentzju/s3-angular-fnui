angular.module("myApp").service("PaymentService",["$es",function($es){

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
                    payment.money1="11111"+time;
                    payment.money2="22222"+time;
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
                    payment.money1="11111"+time;
                    payment.money2="22222"+time;
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
                    payment.money1="11111"+time;
                    payment.money2="22222"+time;
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
                    payment.time1 = "1234567890567";
                    payment.time2 = "2017"+time;
                    payment.money1="11111"+time;
                    payment.money2="22222"+time;
                    payment.statusText = "未审核";
                    paymentList.push(payment);
                }
                break;
        }

        return paymentList;
    };

}])
    .service("PaymentDetailService",function(){

        this.getPaymentDetail = function(paymentId){
            //get PaymentDetail
            var paymentDetail = {
                paymentId:paymentId,
                customerName:"10010分公司",
                customerCompany:"浙江工银聚有限公司",
                paymentMethod:"易付",
                paymentMoney:"222220",
                Prepaid:"40",
                discountCoupon:"120",
                outofpocket:"222140",
                customerNum:"10010",
                creationTime:"2017-01-17  15:20:25",
                orderTime:"2017-01-17  16:20:25"
            };

            return paymentDetail;
        }

    });