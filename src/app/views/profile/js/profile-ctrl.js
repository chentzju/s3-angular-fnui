angular.module("myApp")
    .controller('InfoCtrl',['$scope','$rootScope','$infoService',
        function($scope,$rootScope,$infoService){
            var getInfoText=$infoService.getInfoText();
            $scope.companyName=getInfoText.companyName;
            $scope.role=getInfoText.role;
        }])

    .controller('myAccountCtrl',['$scope','$rootScope','$myAccountService',
        function($scope,$rootScope,$myAccountService){
            var getMyAccountText=$myAccountService.getMyAccountText();
            $scope.accountNum=getMyAccountText.accountNum;
            $scope.accountName=getMyAccountText.accountName;
            $scope.name=getMyAccountText.name;
            $scope.phone=getMyAccountText.phone;
        }])

    .controller('myAddressCtrl',['$scope','$rootScope','$myAddressService',
        function($scope,$rootScope,$myAddressService){
            var getMyAddressText=$myAddressService.getmyAddressText();
            $scope.addressList=getMyAddressText.myAddressList;

            $scope.clic=function($index){
                $rootScope.index=$index;
            };

            $scope.delete=function($index){
                var alist=$scope.addressList;
                alist.splice($index,1);
            };

            $scope.check=function($index){

            }

        }])

    .controller('editAddressCtrl',['$scope','$rootScope','$myAddressService',
        function($scope,$rootScope,$myAddressService){
            var index=$rootScope.index;
            var getMyAddressText=$myAddressService.getmyAddressText();
            $scope.addressList=getMyAddressText.myAddressList[index];

        }])

    .controller('addAddressCtrl',['$scope','$rootScope','$myAddressService',
        function($scope,$rootScope,$myAddressService){
            $scope.$watch('name',function(){
                console.log($scope.name);
            });
            $scope.$watch('phone',function(){
                console.log($scope.phone);
            });
            $scope.$watch('address',function(){
                console.log($scope.address);
            });

        }])