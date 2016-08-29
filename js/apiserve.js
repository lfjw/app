function apiserve($rootScope,$http,$location){
    function jsonData(json){
        var str = '';
        var arr = [];
        for(i in json){
            str = i+'='+json[i];
            arr.push(str);
        }
        return arr.join('&')
    }
	function getData(url,data,method){
        method = method.toUpperCase();
        if(method == 'GET'){
            var data = jsonData(data);
            return $http.get(url+'?'+data)
        }else if(method == 'JSONP'){
            var data = jsonData(data);
            return $http.jsonp(url+"?"+data)
        }else{
            return $http.post(url,data)
        }
    }
    this.getInfo = function(url,data,method){
        return getData(url,data,method)
    }
}
angular.module("wrap")
	   .service("apiserve",apiserve)