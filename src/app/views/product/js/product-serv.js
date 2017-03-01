/**
 * Created by chent on 2017/1/18.
 */

angular.module("myApp").service("ProductService",function(){

    var limit = 8;

    this.getProductStatusArray = function(){
        return [
            {id:null,name:'全部产品'},
            {id:0, name:'最近订单'},
            {id:1,name:'收藏产品'}
        ];
    };
    this.getProductList = function(companyId,page,key){

        //TESTSTART
        var productList = [];
        var i,product;
        for(i = 0;i<10;i++){
            product = {
                productId:companyId+"001"+i,
                productName:companyId +"最近订单产品名称"+i,
                price: Number(Math.random()*10).toFixed(2)
            };
            productList.push(product);
        }
        return productList;
        //TESTEND

        //page
        page = page || 1;
        var start = (page-1)*limit;

        //param
        var param = {
            start:start,
            limit:limit,
            companyId:companyId,
            categoryId:categoryId,
            productId : key,
            productName:key
        };

        //get data
        var result = $es.java("productInfoBean.getProductInfo",param,$es.appId);
        return result.dataList;
    };


    this.getProductDetail = function(productId){

        //TESTSTART
        //get product
        return {
            productId:productId,
            productName:"一个虚拟的产品",
            price: Number(Math.random()*10).toFixed(2),
            type:"优等品",
            length:"100m"
        };
        //TESTSEND


        //TODO : 后台没有这个方法
        var param = {productId:productId};
        return $es.java("productInfoBean.getProductDetail",param,$es.appId);
    }

}).service('CompanyService',['$es',function($es){

       this.getCompanyList = function(){

           //TESTSTART
           //get product
           return [
               {companyId:"1",companyName:'某某公司'},
               {
                   companyId:"2",companyName:'一个名king字特别特别特别特别长的分公司'
               }
           ];
           //TESTSEND


            var param = {};
            var branches = $es.java("companyInfoBean.getBranchCompanyInfo",param,$es.appId,6000);
           return branches.branchCompany;
       };

       this.setCurrentCompany = function(companyId){
           istore.set('currentCompany',companyId);
       };
}]);