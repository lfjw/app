function con($scope,apiserve){
	apiserve.getInfo('data/data.json',{},'get')
  	.success(function(data){
      	$scope.data = data;
    })
  $scope.animate = "bounceInRight";//动画效果       
}
//首页部分
function homepage($rootScope,$scope){
  $scope.caipu = [
    { "title":"菜谱",'flag':false,"img1":"1","id":"homepage.home" },
    { "title":"话题",'flag':false,"img1":"2","id":"homepage.list" },
    { "title":"珍选",'flag':false,"img1":"3","id":"homepage.proctuer" },
    { "title":"我的",'flag':false,"img1":"4","id":"homepage.myapp"  }];
  $scope.caipu[0].flag = true; 
  $scope.caipu[0].img1 = "1_h";
  $scope.tabBtn = function(n){   //this.$index  与  n 一样
    $scope.caipu.forEach(function(v,i){
      $scope.caipu[i].flag = false; 
      $scope.caipu[i].img1 = i+1;
    })
    $scope.caipu[n].flag = true;
    $scope.caipu[n].img1 = $scope.caipu[n].img1+"_h";
  }
}
function login($scope,$state,$window){
  $scope.loginBtn = function(){
    $state.go("phone")
  }
  $scope.registerBtn = function(){
    $state.go("registerpage")
  }
  $scope.return = function() {
    $window.history.back();
  };
} 
//登录
function phone($rootScope,$scope,$state,$http,apiserve,$location,$window){
  $scope.submit = function(u,p){
      apiserve
      .getInfo("http://localhost:3001/res?callback=JSON_CALLBACK",{},"jsonp")
      .success(function(e){
        e.forEach(function(v){
          if(u == v.username && p == v.password){
              $state.go('homepage.myapp', {username:u});
              $rootScope.username = v.name;
              alert("登录成功")
          }
        })
      })
    }
    $scope.return = function() {
      $window.history.back();
    };
}
//注册
function submitMysql($rootScope,$scope,apiserve,$http,$window,$state){
  $scope.sex = "男"
  $scope.submitMysql = function(u,p,n,a){
      if(!u && !p && !n && !a || !$scope.sex){
          alert("输入不完整")
      }else{
          apiserve
            .getInfo("http://localhost:3001/res?callback=JSON_CALLBACK",{"username":u,"password":p,"name":encodeURI(n),"age":a,"sex":encodeURI($scope.sex)},"jsonp")
            .success(function(e){
                if(e == "error"){
                  alert("用户名已注册，请重新输入")
                  $scope.username = "";
                  $scope.password = "";
                  $scope.name = "";
                  $scope.age = "";
                }else{
                  alert("注册成功")
                  $state.go('phone', {username:u});
                }
            })
      }
  }
  $scope.return = function() {
    $window.history.back();
  };
}
//渲染内容页
function hometwo ( $state,$scope,$location,$window ) {
  $scope.returnBtn = function(){
    $window.history.back()
  }
  var id = $location.search().id;
  if(id == 1){
    $scope.pageShow1 = true;
    $scope.title = '新菜谱'
  }else if(id == 2){
    $scope.pageShow2 = true;
    $scope.title = '菜谱分类'
  }else if(id == 3){
    $scope.pageShow3 = true;
    $scope.title = '食材'
  }else if(id == 4){
    $scope.pageShow4 = true;
    $scope.title = '菜单'
  }else if(id == 5){
    $scope.pageShow5 = true;
    $scope.title = '签到有礼'
  }


  var json = $scope.data.caiputext;
  for ( i in json ) {
    if(id == i){
      $scope.text = json[i].txt
    }
  }

  $scope.nav = [
    {"nav" : "推荐","fal" : false},
    {"nav" : "最热","fal" : false},
    {"nav" : "最新","fal" : false}
  ]
  $scope.nav[0].fal = true;
  $scope.hometwoBtn = function(n){
    $scope.nav.forEach(function(v,i){
      v.fal = false;
    })
    $scope.nav[n].fal = true;
    $scope.home = "tab"+(n+1)
  }
}
function homethree ($rootScope,$scope,$location,$window,apiserve) {
  $scope.returnBtn = function(){
    $window.history.back()
  } 
  $scope.id = $location.search().id;

}


function home ($rootScope) {
  $rootScope.headernav = '菜谱';
}
function list ($rootScope) {
  $rootScope.headernav = '话题';
}
function proctuer ($rootScope) {
  $rootScope.headernav = '珍选';
}
function myapp($rootScope,$scope,$state,$location){
  $rootScope.headernav = '我的';
  !$rootScope.username ? ($scope.txt = '查看我的主页') : ($scope.txt = $rootScope.username);
  $scope.seeBtn = function () {
    $state.go("login");//跳的页
  } 
}

angular.module("wrap")
  	   .controller("con",con)
       .controller("homepage",homepage)
       .controller("myapp",myapp)
       .controller("login",login)
       .controller("phone",phone)
       .controller('submitMysql',submitMysql)
       .controller("hometwo",hometwo)
       .controller("list",list)
       .controller("home",home)
       .controller('proctuer',proctuer)
       .controller('homethree',homethree)


