//配置文件
function config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
	$urlRouterProvider.otherwise("/index/home");
	$stateProvider
		.state("homepage",{
			url:"/index",
			templateUrl:"views/homePage.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
		.state("homepage.home",{
			url:"/home",
			templateUrl:"views/home.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
		.state("homepage.list",{
			url:"/list",
			templateUrl:"views/list.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
		.state("homepage.proctuer",{
			url:"/proctuer",
			templateUrl:"views/proctuer.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
		.state("homepage.myapp",{
			url:"/myapp",
			templateUrl:"views/myapp.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
		.state("login",{
			url:"/login",
			templateUrl:"views/login.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
		.state("phone",{
			url:"/phone",
			templateUrl:"views/phone.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
		.state("registerpage",{
			url:"/registerpage",
			templateUrl:"views/registerpage.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
		.state("hometwo",{
			url:"/hometwo?id",
			templateUrl:"views/hometwo.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
		.state("homethree",{
			url:"/homethree?id",
			templateUrl:"views/homethree.html",
			resolve:{
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
	                return $ocLazyLoad.load('css/style.css');
	            }]
			}
		})
}
angular.module("wrap")
	   .config(config)