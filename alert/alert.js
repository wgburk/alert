;(function(root, factory){
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Alert = factory();
    }
}(this, function(){

    function Alert(options){
        //this.options = options;
        //this.init(options);
    }

    Alert.prototype = {
        init: function(options){
            this.options = {};
            // $.extend(this.options, options);
            this.render();
        },
        render: function(obj){
            this.createTpl(obj);
            this.bindEvent(obj);
        },
        setOption: function(obj){
            this.render(obj);
        },
        createTpl: function(obj){
            var btns =  '<input type="button" class="sm-wg-alert-confirmBtn" value="确定" />';
            if(obj.type == 2){
                obj.class = 'error';
            }else if(obj.type == 3){
                btns = '<input type="button" class="sm-wg-alert-confirmBtn" value="确定" />' +
                    '<input type="button" class="sm-wg-alert-cancelBtn" value="取消">'
                ;
            }
            var tpl = '<div class="sm-wg-alert '+ obj.class +'">' +
                '<div class="sm-wg-alert-div">' +
                '    <h4>'+ obj.title +'</h4>' +
                '    <p>'+ obj.msg +'</p>' +
                '    <div>'+ btns +'</div>' +
                '</div>' +
                '</div>'
            ;
            
            $('body').append(tpl);
        },
        bindEvent: function(obj){
            //执行回调
            $('.sm-wg-alert-div .sm-wg-alert-confirmBtn').click(function(){
                obj.confirmCb();
                $('.sm-wg-alert').remove();
            });
            $('.sm-wg-alert-div .sm-wg-alert-cancelBtn').click(function(){
                obj.cancelCb();
                $('.sm-wg-alert').remove();
            });
        },
        //默认告警
        show: function(title, msg, confirmCb){
            var obj = {
                type: 1,
                title: title == '' ? '提示' : title,
                msg: msg,
                confirmCb: function(){
                    if(typeof confirmCb === 'function'){
                        confirmCb();
                    }
                }
            };
            this.setOption(obj);
        },
        //错误提示
        showError: function(title, msg, confirmCb){
            var obj = {
                type: 2,
                title: title == '' ? '提示' : title,
                msg: msg,
                confirmCb: function(){
                    if(typeof confirmCb === 'function'){
                        confirmCb();
                    }
                }
            };
            this.setOption(obj);
        },
        //确认提示
        showConfirm: function(title, msg, confirmCb, cancelCb){
            var obj = {
                type: 3,
                title: title == '' ? '提示' : title,
                msg: msg,
                confirmCb: function(){
                    if(typeof confirmCb === 'function'){
                        confirmCb();
                    }
                },
                cancelCb: function(){
                    if(typeof cancelCb === 'function'){
                        cancelCb();
                    }
                }
            };
            this.setOption(obj);
        }
    };
    
    return Alert;
}));

//;(function(window){
//    function Alarm(options){
//        //this.options = options;
//        //this.init(options);
//    }
//    Alarm.prototype = {
//        init: function(options){
//            this.options = {};
//            $.extend(this.options, options);
//            this.render();
//        },
//        render: function(obj){
//            this.createTpl(obj);
//            this.bindEvent(obj);
//        },
//        setOption: function(obj){
//            this.render(obj);
//        },
//        createTpl: function(obj){
//            var tpl = ' <div class="sm-wg-alarm">' +
//                '       <div class="sm-wg-alarm-div">' +
//                '           <p>'+ obj.msg +'</p>' +
//                '           <div>' +
//                '               <input type="button" class="confirmBtn" value="确定" />' +
//                '               <input type="button" class="cancelBtn" value="取消">' +
//                '           </div>' +
//                '       </div>' +
//                '   </div>';
//            $('body').append(tpl);
//            var width = $('.sm-wg-alarm-div').width(),
//                height = $('.sm-wg-alarm-div').height()
//                ;
//            $('.sm-wg-alarm-div').css({
//                'top': 'calc(50% - '+ height +'px )',
//                'left': 'calc(50% - '+ width +'px)'
//            });
//        },
//        bindEvent: function(obj){
//            //执行回调
//            $('.sm-wg-alarm-div .confirmBtn').click(function(){
//                if($.isFunction(obj.confirmCb)) {
//                    obj.confirmCb();
//                }
//                $('.sm-wg-alarm').remove();
//            });
//            $('.sm-wg-alarm-div .cancelBtn').click(function(){
//                if($.isFunction(obj.cancelCb)) {
//                    obj.cancelCb();
//                }
//                $('.sm-wg-alarm').remove();
//            });
//        },
//        show: function(msg, confirmCb, cancelCb){
//            var obj = {
//                msg: msg,
//                confirmCb: function(){
//                    if($.isFunction(confirmCb)){
//                        confirmCb();
//                    }
//                },
//                cancelCb: function(){
//                    if($.isFunction(cancelCb)){
//                        cancelCb();
//                    }
//                }
//            };
//            this.setOption(obj);
//        }
//    };
//    window.Alarm = Alarm;
//}(window));