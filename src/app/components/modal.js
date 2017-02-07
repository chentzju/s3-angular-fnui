/**
 * Created by chent on 2017/1/20.
 */




var modal = {
        alert : function(title,text,callback){
            var modal = $("#fn-alert");
            modal.find('.fn-modal-hd').html(title);
            modal.find('.fn-modal-bd').html(text);
            modal.modal('open');
         },

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