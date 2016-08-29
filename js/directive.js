function swiperDom($rootScope){
    return {
        link : function(scope,element){
            var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        slidesPerView: 1,
		        paginationClickable: true,
		        //spaceBetween: 30,
		        loop: true,
		        autoplay:2000,
		        observer:true,//修改swiper自己或子元素时，自动初始化swiper
   		 		observeParents:true,//修改swiper的父元素时，自动初始化swiper
   		 		autoplayDisableOnInteraction : false
		    });
        }
    }
}
function homePage1 (){
	return {
		template : 
			"<div class='hometwonav' ng-model = 'home'>"+
				"<ul>"+
					"<li ng-repeat='i in nav'>"+
						"<span  ng-click='hometwoBtn($index)' ng-class='{true:\"bs\",false:\"\"}[i.fal]'>{{i.nav}}</span>"+
					"</li>"+
				"</ul>"+
			"</div>"+	 
			"<div class='hometwotxt' ng-switch='home'>"+
		        "<div ng-repeat='i in text' class='tab1' ng-switch-default = 'tab1'>"+
		        	"<a ui-sref='homethree({\"id\":{{$index}}})'>"+
		        	"<dl ng-click='tuibtn($index)'  class='animated {{animate}}'>"+
		        		"<dt><img ng-src='{{i.img}}'></dt>"+
			            "<dd>"+
			            	 "<ul>"+
					            "<li>{{i.txt1}}</li>"+
					            "<li>{{i.txt2}}</li>"+
					        "</ul>"+ 
			            "</dd>"+
		        	"</dl>"+
		        	"</a>"+
		        "</div>"+
		        "<div ng-repeat='i in text' class='tab2' ng-switch-when = 'tab2'>"+
		        	"<a ui-sref='homethree({\"id\":{{$index}}})'>"+
		        	"<dl ng-click='tuibtn($index)'  class='animated {{animate}}'>"+
		        		"<dt><img ng-src='{{i.img}}'></dt>"+
			            "<dd>"+
			            	 "<ul>"+
					            "<li>{{i.txt1}}</li>"+
					            "<li>{{i.txt2}}</li>"+
					        "</ul>"+ 
			            "</dd>"+
		        	"</dl>"+
		        	"</a>"+
		        "</div>"+
		       	 "<div ng-repeat='i in text' class='tab3' ng-switch-when = 'tab3'>"+
		        	"<a ui-sref='homethree({\"id\":{{$index}}})'>"+
		        	"<dl ng-click='tuibtn($index)'  class='animated {{animate}}'>"+
		        		"<dt><img ng-src='{{i.img}}'></dt>"+
			            "<dd>"+
			            	 "<ul>"+
					            "<li>{{i.txt1}}</li>"+
					            "<li>{{i.txt2}}</li>"+
					        "</ul>"+ 
			            "</dd>"+
		        	"</dl>"+
		        	"</a>"+
		        "</div>"+
		    "</div>"
	}
}
function homePage2 (apiserve){
	return {
		template : "<div class='homePage2'>"+
						"<div class='page2left'>"+
							"<ul>"+
								"<li ng-repeat='i in arr.fenlei' ng-class='{true:\"page2bs\",false:\"\"}[i.fal]' ng-click='upbtn($index)'>{{i.name}}</li>"+
							"</ul>"+
						"</div>"+
						"<div class='page2right'>"+
							"<div class='animated {{animate}}'>"+
								"<ul>"+
									"<li ng-repeat='o in shuju'>"+
										"<a ui-sref='homethree({\"id\":{{o.id+$index}}})'>"+
											"<dl>"+
												"<dt><img ng-src='{{o.img}}'></dt>"+
												"<dd>{{o.t}}</dd>"+
											"</dl>"+
										"</a>"+
									"</li>"+
								"</ul>"+
							"</div>"+
						"</div>"+
					"</div>",
		link : function(scope,element,attr){
			apiserve.getInfo('data/data.json',{},'get')
			  	.success(function(data){
			      	scope.data = data;
			    })  
		  		scope.arr = scope.data
				scope.upbtn = function(n){
					scope.arr.fenlei.forEach(function(v){
						v.fal = false
					})
					scope.arr.fenlei[n].fal = true;
					scope.shuju = scope.arr.fenlei[n].text
				} 
				scope.data.fenlei.forEach(function(v){
					v.fal = false
				})
				scope.data.fenlei[0].fal = true; 	
				scope.shuju = scope.data.fenlei[0].text
		}			
	}
}
function homePage3 (){
	return {
		template : "<span>食材部分</span>"
	}
}
function homePage4 (){
	return {
		template : "<span>菜单部分</span>"
	}
}
function homePage5 (){
	return {
		template : "<span>签到有礼部分</span>"
	}
}
function homethreeBox (apiserve,$rootScope) {
	return{
		template : 
				"<div class='hometwoheader'>"+
					"<a href='javascript:;' id='homereturn' ng-click='returnBtn()'></a>"+
					"<div>{{tit}}</div>"+
				"</div>"+
				"<p>{{text}}</p>",
		link : function(scope,element,attr){
			apiserve.getInfo('data/data.json',{},'get')
			  	.success(function(data){
			      	scope.data = data;
			    })  
			    scope.data.nav.forEach(function(v,i){
			     	if(scope.id == i){
			     		scope.tit = v[0]
			     		scope.text = v[1]
			     	}
			    })
			    scope.data.navtwo.forEach(function(v,i){
			    	if(scope.id == v[0]){
			    		scope.tit = v[1]
			    		scope.text = v[3]
			    	}
			    })
		}
	}
}
angular.module("wrap")
	   .directive("swiperDom",swiperDom)
	   .directive("homePage1",homePage1)
	   .directive("homePage2",homePage2)
	   .directive("homePage3",homePage3)
	   .directive("homePage4",homePage4)
	   .directive("homePage5",homePage5)
	   .directive('homethreeBox',homethreeBox)
