angular.module("myApp").service("PaymentService",function(){
    this.getPaymentList = function(){

        var paymentList = [];


        //make virtual product
        for(var i =0;i<10;i++){
            var v_product = {
                productId:"CC001002003"+i,
                productName:"一个虚拟产品名称"+i,
                price: Number(Math.random()*10).toFixed(2)
            };
            productList.push(v_product);
        }

        return paymentList;
    };


    this.getPaymentDetail = function(paymentId){

        //get payment

        var payment = {
            productId:paymentId,
            productName:"一个虚拟的产品",
            price: Number(Math.random()*10).toFixed(2),
            type:"优等品",
            length:"100m"
        };

        return payment;
    }

});