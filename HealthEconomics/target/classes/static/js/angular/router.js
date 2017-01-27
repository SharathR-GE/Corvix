

 var mainapp = angular.module('HealthEconomicsApp', ['ngRoute','rzModule','rzModule','angularjs-dropdown-multiselect','toaster','ngMessages' ,"ui.bootstrap","countTo"]);
  
 

 mainapp.config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/MapView',{

templateUrl:'html/MapView.html',

resolve:{
        "check":function(dataServ,$location){   //function to be resolved, accessFac and $location Injected
            if(sessionStorage.LoginFlag=="true"){    //check if the user has permission -- This happens before the page loads
                 
            }else{
                $location.path('/Login');                //redirect user to home if it does not have permission.
               
            }
        }
    },controller:'MapViewController'
}).when('/InsightsView',{

templateUrl:'html/InsightsView.html',

resolve:{
        "check":function(dataServ,$location){  

            if(sessionStorage.LoginFlag=="true"){    //check if the user has permission -- This happens before the page loads
                
            }else{
                $location.path('/Login');      //redirect user to home if it does not have permission.
                
            }
        }
    },
    controller:'InsightsViewController'
}).when('/Login',{

templateUrl:'html/Login.html',
controller:'LoginController',
})

        .otherwise({
            redirectTo: '/Login'
        });

//$routeProvider.html5Mode(false);
    }]);
 mainapp.factory('dataServ', function () {

        var dataServ = {
            sliderVal: '',
            access:false
        };

        return {
            getSliderVal: function () {
                return dataServ.sliderVal;
            },
            setSliderVal: function (sliderValPara) {
                dataServ.sliderVal = sliderValPara;
                
            },
            getCheckboxVal: function () {
                return dataServ.checkboxVal;
            },
            setCheckboxVal: function (checkboxValPara) {
                dataServ.checkboxVal = checkboxValPara;
                
            },
            getPermission: function($location){    //set the permission to true
        dataServ.access = true;
        
    },
    setPermission: function($location){    //set the permission to true
        dataServ.access = false;
        
    },
    checkPermission: function(){
       return dataServ.access;             //returns the users permission level 
   }
        };
    });
