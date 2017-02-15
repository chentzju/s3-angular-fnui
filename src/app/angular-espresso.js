angular.module('icbc.espresso',[])
 .factory('$es',function($q,$state)
    {

	 var setting = {};
	 function setConfig(key,value){
         setting[key] = value;
     }
     function getConfig(key){
         return setting[key];
     }


	 var userinfo={};
	 /**
	  * ajax执行一个服务器端Action，该方法是同步函数版本
	  * 一个Action可描述为　类名+方法名+别名(可选) 或 portalConfig中配置的数据集ID + 别名(可选)
	  * id: 如 com.longkey.UserBean.test as test1 或 id1 as a 或 userBean.test as b
	  * params(optional): 参数，可以是一个js对象，也可以是 var1=aa&var2=bb&... 这样的字符串
	  * appid(optional): 参数，要调用的后台，不送的话就使用自己的后台
	  * timeout(optional)：参数，可不送
	 */
        function java(id, params, appId,timeout){
        	timeout=timeout||15000;
        	if(!params)
        		{
        		params={};
        		}
        	 var retdata={};
            if(!id)
                return;
            if(!appId)
            {
            	appId=setting.custid;
            }
            var paramObj = CoreSupport.treatParams(params);
            if (!params)
                var code = "";
            else
                var code = params.code;
            var paramstr = CoreSupport.DataSetIdList + '=' + encodeURIComponent(id) + '&' + CoreSupport.DataSetParams + '=' + encodeURIComponent(CoreSupport.toJSONString(paramObj)) + '&__appId=' + encodeURIComponent(appId) + '&__code=' + encodeURIComponent(code);
            var results;
            $.ajax({
                type: "POST",
                url: "/"+setting.custid+'/~main/ajax.php',
               async: false,
               contentType:"application/x-www-form-urlencoded; charset=UTF-8",
                data:paramstr,
                dataType: "html",
                cache:false,
                timeout:timeout,
                success: function (ajaxData) {
                	retdata=eval("("+ajaxData+")");
                },
                error:function (XMLHttpRequest, textStatus, errorThrown) {
            	    retdata.retCode="999";
            	    retdata.retMsg="与后台交互数据失败了";
            	    log("返回值："+XMLHttpRequest.responseText);
            	    log(textStatus);
            	    log(errorThrown);
            	    return retdata;
            	}
            });          
            return retdata;
        };

        
        /**
   	  * 与java不同的地方时这个是异步版本
   	  * 一个Action可描述为　类名+方法名+别名(可选) 或 portalConfig中配置的数据集ID + 别名(可选)
   	  * id: 如 com.longkey.UserBean.test as test1 或 id1 as a 或 userBean.test as b
   	  * params(optional): 参数，可以是一个js对象，也可以是 var1=aa&var2=bb&... 这样的字符串
   	  * appid(optional): 参数，要调用的后台，不送的话就使用自己的后台
   	  * timeout,超时时间
   	 */
           function ajax(id, params,appId,timeout){
        	   timeout=timeout||15000;
        	   if(!params)
       		{
       		params={};
       		}
        	   var deferred=$q.defer();
               if(!id)
                   return;
               if(!appId)
                  {
            	   appId=setting.custid;
                  }
               var paramObj = CoreSupport.treatParams(params);
               if (!params)    
                   var code = "";
               else
                   var code = params.code;
               var retdata={};
               var paramstr = CoreSupport.DataSetIdList + '=' + encodeURIComponent(id) + '&' + CoreSupport.DataSetParams + '=' + encodeURIComponent(CoreSupport.toJSONString(paramObj)) + '&__appId=' + encodeURIComponent(appId) + '&__code=' + encodeURIComponent(code);
               uri = "/"+setting.custid+'/~main/ajax.php';
               $.ajax({
                   type: "POST",
                   url: "/"+setting.custid+'/~main/ajax.php',
                  async: true,
                  contentType:"application/x-www-form-urlencoded; charset=UTF-8",
                   data:paramstr,
                   dataType: "html", 
                   cache:false,
                   timeout:timeout,
                   success: function (ajaxData) {
                       //var returndata = eval("({'flag':'0','status':'500', 'retmsg':'����������������!','retpage':'http://109.0.14.140','info':{}})");
                   //console.log(ajaxData)
                	   ajaxData=eval("("+ajaxData+")");
                	   deferred.resolve(ajaxData);
                   },
                  error:function (XMLHttpRequest, textStatus, errorThrown) {
                	    var retdata={};
                	    retdata.retCode="999";
                	    retdata.retMsg="与后台交互数据失败了";
                	    log("返回值："+XMLHttpRequest.responseText);
                	    log(textStatus);
                	    log(errorThrown);
                	    deferred.reject(retdata);
                	}
               });
                 return deferred.promise;
               
           };
           
        
           function log(text)
           {
        	   if(setting.debug)
        		   {
        		     console.log(text);
        		   }
           }

        return{
            java:java,
            ajax:ajax,
            userinfo:userinfo,
            setConfig:setConfig,
            getConfig:getConfig
        }
    });