
angular.module("myApp")
    .service("MyappService",function(){

        this.getMyapp = function(orderMonery,orderDay,orderMonth){
            //get Myapp
            var myApp = {
                orderMonery:'1600000.00',
                orderDaynum:'128',
                orderMonnum:'843',
                orderDay:'23445.00',
                orderMonth:'234490.00'
            };

            return myApp;
        }

    });