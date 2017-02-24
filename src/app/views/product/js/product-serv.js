/**
 * Created by chent on 2017/1/18.
 */

angular.module("myApp").service("ProductService",function(){

    this.getProductStatusArray = function(){
        return [
            {id:null,name:'全部产品'},
            {id:0, name:'最近订单'},
            {id:1,name:'收藏产品'}
        ];
    };
    this.getProductList = function(status,page,time){
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
        console.log(status)
        switch(status.id){
            case 0:
                for(i = 0;i<10;i++){
                    product = {
                        productId:"001"+i,
                        productName:"最近订单产品名称"+i,
                        price: Number(Math.random()*10).toFixed(2)
                    };
                    productList.push(product);
                }
                break;
            case 1:
                for(i = 0;i<10;i++){
                    product = {
                        productId:"002"+i,
                        productName:"收藏产品名称"+i,
                        price: Number(Math.random()*10).toFixed(2)
                    };
                    productList.push(product);
                }
                break;
            default:
                for(i = 0;i<10;i++){
                    product = {
                        productId:"003"+i,
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

});