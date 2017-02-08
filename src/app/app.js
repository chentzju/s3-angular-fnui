/**
 * Created by chent on 2017/1/18.
 */
var myApp = angular.module("myApp",['ui.router','oc.lazyLoad','ngAnimate'])
.config(['$stateProvider','$urlRouterProvider','$compileProvider',function($stateProvider,$urlRouterProvider,$compileProvider){
            $urlRouterProvider.otherwise('/app');

            $stateProvider
                //首页
                .state('app',{
                        url:'/app',
                        title:'首页',
                        templateUrl:'views/public/app.html'
                })
                //订单模块
                .state('order',{
                    url:'/order',
                    templateUrl: 'views/order/order.html',
                    abstract:true,
                    resolve:{
                        orderService:['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'views/order/js/order-ctrl.js',
                                    'views/order/js/order-serv.js',
                                    'views/order/js/order-dire.js',
                                    'views/order/css/order.css'
                                ])
                        }]
                    }
                })
                .state('order.productList',{
                    url:'/productList',
                    title:'产品',
                    templateUrl:'views/order/productList.html',
                    controller:'ProductCtrl'
                })
                .state('order.productDetail',{
                    url:'/productDetail/:productId',
                    backState:'order.productList',
                    title:'产品详情',
                    templateUrl:'views/order/productDetail.html',
                    controller:'ProductDetailCtrl'
                })


                //我的订单
                .state('myorder',{
                    url:'/myorder',
                    templateUrl:'views/myorder/myOrder.html',
                    abstract:true,
                    resolve:{
                        myorderService:['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'views/myorder/js/myorder-ctrl.js',
                                    'views/myorder/js/myorder-serv.js',
                                    'views/myorder/js/myorder-dire.js',
                                    'views/myorder/css/myorder.css'
                                ]);
                        }]
                    }
                })
                .state('myorder.orderList',{
                    url:'/orderList',
                    title:'订单',
                    templateUrl:'views/myorder/orderList.html',
                    controller:'OrderListCtrl'
                })
                .state('myorder.orderDetail',{
                    url:'/orderDetail/:orderId',
                    backState:'myorder.orderList',
                    title:'订单详情',
                    templateUrl:'views/myorder/orderDetail.html',
                    controller:'OrderListCtrl'
                })


                //支付信息
                .state('payment',{
                    url:'/payment',
                    templateUrl:'views/payment/payment.html',
                    abstract:true,
                    resolve:{
                        paymentService:['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'views/payment/js/payment-ctrl.js',
                                'views/payment/js/payment-serv.js',
                                'views/payment/js/payment-dire.js',
                                'views/payment/css/payment.css'
                            ]);
                        }]
                    }
                })
                .state('payment.paymentList',{
                    url:'/paymentList',
                    title:'付款',
                    templateUrl:'views/payment/paymentList.html',
                    controller:'PaymentListCtrl'
                })
                .state('payment.paymentDetail',{
                    url:'/paymentList',
                    title:'付款详情',
                    backState:'payment.paymentList',
                    templateUrl:'views/payment/paymentDetail.html',
                    controller:'PaymentListCtrl'
                })


                //发货信息
                .state('delivery',{
                    url:'/delivery',
                    templateUrl:'views/delivery/delivery.html',
                    abstract:true,
                    resolve:{
                        deliveryService:['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'views/delivery/js/delivery-ctrl.js',
                                'views/delivery/js/delivery-serv.js',
                                'views/delivery/js/delivery-dire.js',
                                'views/delivery/css/delivery.css'
                            ]);
                        }]
                    }
                })
                //.state('payment.paymentList',{
                //    url:'/paymentList',
                //    title:'付款',
                //    templateUrl:'views/payment/paymentList.html'
                //})
                //.state('payment.paymentDetail',{
                //    url:'/paymentList',
                //    title:'付款详情',
                //    backState:'payment.paymentList',
                //    templateUrl:'views/payment/paymentDetail.html'
                //})

                //个人信息
                .state('profile',{
                    url:'/profile',
                    templateUrl:'views/profile/profile.html',
                    abstract:true,
                    resolve:{
                        accountService:['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'views/profile/js/profile-ctrl.js'
                            ]);
                        }]
                    }

                })
                .state('profile.info',{
                    url:'/info',
                    title:'我的',
                    templateUrl:'views/profile/info.html',
                    controller:'InfoCtrl'
                })
                //认证
                .state('account',{
                    url:'/account',
                    template:'<div class="main-view" ui-view></div>',
                    abstract:true
                })
                .state('account.login',{
                    url:'/login',
                    templateUrl:'views/account/login.html'
                })
                .state('about', {
                    url:'/about',
                    templateUrl:'views/public/about.html'
                })
                .state('error',{
                    url:'/error',
                    templateUrl:'404.html'
                })
    }])
    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {
            // to be used for back button //won't work when page is reloaded.
            $rootScope.previousState_name = fromState.name;
            $rootScope.previousState_params = fromParams;
            $rootScope.title = toState.title;
            $rootScope.showBack = toState.backState != null;
            $rootScope.backState = toState.backState;
        });

        var loginState = "account.login";
        //login part
        $rootScope.$on("$stateChangeStart",function(event,toState,toParams,fromState,fromParams){
                var valid =  false;
            if(toState.name === loginState)
                valid = true;
            else{
                //check userinfo
                /*
                 $es.userinfo = $es.java("userInfoBean.getUserData");
                 if($es.userinfo.status == "000" || $es.userinfo.retCode == "200"){
                 $es.userinfo = $es.userinfo.data.user;
                 $rootScope.userName = $es.userinfo.userName;
                 $rootScope.unionId = $es.userinfo.unionId;
                 var id = $es.userinfo.roles[0].id;
                 }
                 */
            }
            if(!valid){
                $state.go(loginState);
            }
        });

        }
    ])
    .controller("RootCtrl",['$scope','$rootScope','$state',function ($scope,$rootScope,$state) {
        //展示账户信息和不同角色下的左侧栏
        $scope.customerId = "dsfasdfasfasdf";
        $scope.customerName = "adsfasdfasdf";
    }]);