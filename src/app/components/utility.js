/**
 * Created by chent on 2017/1/20.
 */
var Modal = {
        /**
         *
         * @param title  提醒标题
         * @param text  提醒内容
         * @param callback   暂时无效
         */
        alert : function(title,text,callback){
            var modal = $("#fn-alert");
            modal.find('.fn-modal-hd').html(title);
            modal.find('.fn-modal-bd').html(text);
            modal.modal('open');
         },

        /**
         *
         * @param title  确定框的标题
         * @param text  确定框的内容
         * @param confirm  点击确定的毁掉函数  不能为空
         * @param cancel   点击取消的函数  可以为空
         */
        confirm : function(title,text,confirm,cancel){
            var modal =$("#fn-confirm");
            modal.find('.fn-modal-hd').html(title);
            modal.find('.fn-modal-bd').html(text);
            modal.modal({
                onConfirm:function(){
                    confirm && confirm()
                },
                onCancel:function () {
                    cancel && cancel();
                }
             });
        },

        action : function(){
            var modal =$("#fn-actions");
            modal.modal('open');
        }
};

/**
 *  定时器，用来处理定时触发的事情
 *  @type {{invoke: Timer.invoke}}
 */
var Timer = {
    /**
     *  定时器  用来执行特定时间后的事情
     * @param func  需要执行的事情
     * @param start   多少毫秒以后开始
     * @param interval     如果需要循环，就要配置循环间隔
     * @param end       如果循环需要结束，那么需要配置结束的时间
     */
    invoke:function(func,start,interval,end){
        if(!start)
            start = 0;
        if(arguments.length<=2)
            setTimeout(func,start);
        else{
            setTimeout(repeated,start);
            function repeated(){
                var h = setInterval(func,interval);
                if(end)
                    setTimeout(function(){ clearInterval(h); },end);
            }
        }
    }
};

var istore = function(){


    /**
     *  sessionStorage
     * */

    var getItem = function(key){
        return JSON.parse(sessionStorage.getItem(key));
    };


    var setItem = function(key,value){
        sessionStorage.setItem(key,JSON.stringify(value));
    };


    var removeItem = function(key){
        sessionStorage.removeItem(key);
    };


    /**
     * localStorage
     */



    var getItemLocal = function(key){
        return JSON.parse(localStorage.getItem(key));
    };


    var setItemLocal = function(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    };


    var removeItemLocal = function(key){
        localStorage.removeItem(key);
    };

    return {
        get:getItem,
        set:setItem,
        remove:removeItem,
        getLocal:getItemLocal,
        setLocal:setItemLocal,
        removeLocal:removeItemLocal
    }
}();