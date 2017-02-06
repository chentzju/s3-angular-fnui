/**
 * Created by chent on 2017/1/18.
 */
myApp.directive("goTop",function ($window,$rootScope,$location,$anchorScroll) {
    return {
        restrict: 'E',
        replace: true,
        template: '<a class="go-top" ng-click="goTop()" >' +
                        '<i class="fn-gotop fn-gotop-icon fn-icon-chevron-up"></i></a>',
        link: function(scope, element, attrs) {
            $(element).hide();
            $(document).on('scroll',function(){
                var top = document.body.scrollTop;
                if(top>100)
                    $(element).show();
                else
                    $(element).hide();
            });
            scope.goTop = function(){
                $location.hash('topbar');
                $anchorScroll();
            }
        }
    }
}).directive('headBar',['$rootScope','$state',function($rootScope,$state){
    return {
        restrict:'E',
        transclude:true,
        templateUrl:'templates/headbar.tpl.html',
        link:function(scope,element,attr){
            if($rootScope.previousState_name)
                scope.showBack = true;
            switch($state.current.name){
                case 'app':
                    scope.showBack = false;
                    scope.title = "首页";
                    break;
                case 'order.productList':
                    scope.showBack = true;
                    scope.title = "产品列表";
                    scope.backState = "app";
                    break;
                case 'myorder.orderList':
                    scope.showBack = true;
                    scope.title = "我的订单";
                    scope.backState = "app";
                    break;
                case 'payment.mypayment':
                    scope.showBack = true;
                    scope.title = "我的付款单";
                    scope.backState = "app";
                    break;
                case 'about':
                    scope.showBack = true;
                    scope.title = "关于我们";
                    scope.backState = "app";
                    break;
                default:
                    scope.showBack = true;
                    scope.title = "首页";
                    scope.backState = "app";
                    break;
            }
            $rootScope.$on("$stateChangeSuccess",function(){
                switch($state.current.name){
                    case 'myorder.orderDetail':
                        scope.showBack = true;
                        scope.title = "订单详情";
                        scope.backState = "myorder.orderList";
                        break;
                    case 'order.productDetail':
                        scope.showBack = true;
                        scope.title = "产品详情";
                        scope.backState = "order.productList";
                        break;
                    default:
                        scope.showBack = true;
                        scope.title = "首页";
                        scope.backState = "app";
                        break;
                }
            });

            scope.goBack = function(){
                $rootScope.slideClass = "view-slide-out";
                setTimeout(function(){
                    if(scope.backState)
                        $state.go(scope.backState);
                    else
                        $state.go($rootScope.previousState_name, $rootScope.previousState_params);
                    $rootScope.slideClass = "view-slide-in";
                },0.5)
            };

            scope.closeOffCanvas = function(){
                $("#doc-oc-demo1").offCanvas('close');
            }
        }
    }
}])
    .directive("iscrollWrapper",function(){
        return{
            restrict:'E',
            transclude:true,
            templateUrl:'templates/iscroll.tpl.html',
            link:function(){
                var myScroll;
                function createScroll(){
                    var pullDown = $('#pullDown'),
                        pullUp = $('#pullUp'),
                        pullDownLabel = $(".pullDownLabel"),
                        pullUpLabel = $(".pullUpLabel"),
                        loadingStep = 0;
                    pullDown.hide();
                    pullUp.hide();

                    //下拉刷新
                    function pullDownAction () {
                        setTimeout(function() {
                            $('#pullDown').click();
                            pullDown.removeClass('loading');
                            pullDownLabel.html('下拉刷新...');
                            pullDown['class'] = pullDown.attr('class');
                            pullDown.attr('class', '').hide();
                            myScroll.refresh();
                            loadingStep = 0;
                        },0);
                    }
                    // 上拉加载
                    function pullUpAction () {
                        setTimeout(function(){
                            $('#pullUp').click();
                            pullUp.removeClass('loading');
                            pullUpLabel.html('上拉加载更多...');
                            pullUp['class'] = pullUp.attr('class');
                            pullUp.attr('class','').hide();
                            myScroll.refresh();
                            loadingStep = 0;
                        },0);
                    }

                    //init
                    var wrapper = document.getElementById('iscroll-wrapper');
                    if(wrapper)
                        myScroll = new IScroll(wrapper,{probeType: 2});

                    //滚动时
                    myScroll.on('scroll', function(){
                        if(loadingStep == 0 && !pullDown.attr('class').match('flip|loading')
                            && !pullUp.attr('class').match('flip|loading')){
                            if(this.y < 15 && this.y>0){
                                pullDown.hide();
                            }
                            else if(this.y <40 && this.y>15){
                                //下拉刷新效果
                                pullDown.attr('class',pullUp['class']);
                                pullDown.show();
                                pullDownLabel.html('下拉刷新...');
                            }else if (this.y > 40) {
                                //下拉刷新效果
                                pullDown.attr('class',pullUp['class']);
                                pullDown.show();
                                myScroll.refresh();
                                pullDown.addClass('flip');
                                pullDownLabel.html('松开刷新...');
                                loadingStep = 1;
                            }else if(this.y > (this.maxScrollY -5) && this.y < this.maxScrollY){
                                pullUp.hide();
                            }
                            else if(this.y > (this.maxScrollY - 60) && this.y < (this.maxScrollY -5)){
                                pullUp.attr('class',pullUp['class']);
                                pullUp.show();
                                pullUpLabel.html('上拉加载更多...');
                            }else if (this.y < (this.maxScrollY - 60)) {
                                //上拉刷新效果
                                pullUp.attr('class',pullUp['class']);
                                pullUp.show();
                                myScroll.refresh();
                                pullUp.addClass('flip');
                                pullUpLabel.html('松开加载更多...');
                                loadingStep = 1;
                            }
                        }
                    });
                    //滚动完毕
                    myScroll.on('scrollEnd',function(){
                        if(loadingStep == 1){
                            if (pullUp.attr('class').match('flip|loading')) {
                                pullUp.removeClass('flip').addClass('loading');
                                pullUpLabel.html('Loading...');
                                loadingStep = 2;
                                pullUpAction();
                            }else if(pullDown.attr('class').match('flip|loading')){
                                pullDown.removeClass('flip').addClass('loading');
                                pullDownLabel.html('Loading...');
                                loadingStep = 2;
                                pullDownAction();
                            }
                        }else{
                            if(this.y < 15){
                                pullDown.slideUp();
                            }
                            if(this.y > (this.maxScrollY -5)){
                                pullUp.hide();
                            }
                        }
                    });
                    wrapper.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
                }
                $(function(){
                    if(!myScroll)
                        createScroll();
                });
            }
        }
    });

