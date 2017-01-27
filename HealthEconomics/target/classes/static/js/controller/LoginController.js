mainapp.controller('LoginController', ['$scope', '$rootScope','$location','webServiceCall','dataServ',function ($scope, $rootScope,$location,webServiceCall,dataServ) {
 $("#bottomlinks").addClass("fixfooter");
$scope.loginError=false;
$scope.feedwindow=false;
$rootScope.LoginContainer=true;
$rootScope.dwnldLink=false;
$scope.loginError=false;
$scope.helpPopup = false;
$rootScope.submitShow=false;
$rootScope.downloadcontact=false;



$scope.init=function(){
sessionStorage.clear();
        $rootScope.filterData={
        selectGenderModel:"1,2",
        selectAgemodel:[ {id: "All Age", label: "All Ages"}],
        selectDiseasemodel:"All Disease",
        selectHealthModel:[{id: "1,2,3,4", label: "All Health Plans", group: ''}],
        magntDesig:false,
        organTrans:false,
        canseAccred:false,
        soleComm:false,
        academicMedi:false,
        councilMeet:false,
        HHI:false,
        sliderVal:0,
        sliderValMax:2500,
        yearData:"Current Year",
        zipCode:'',
        stateSelect:'IL',
        hospOwnership:"All"
   };
  sessionStorage.setItem("LoginFlag",false);
  hideLoader();
$scope.showFeedDiv=false;
sessionStorage.setItem("LoginFlag",false);
$scope.termsChecked=false;
 $scope.closeTerms();
$rootScope.closePrivecy();
$rootScope.closeConatctUs();
$scope.closeFeedBack();


$("#HealthEco-header-rightcontainer").hide();
$("#bottomlinks").hide();


},
$("input").keypress(function(event) {
    if (event.which == 13 && $scope.checked) {
        event.preventDefault();
        $scope.gotoMapView();
    }
});


var n = document.getElementById("numPeople");
n.addEventListener("change", function(e) {

    webServiceCall.checkUser($scope.Username).then(function (data) {
        if(data.role=="ADMIN"){
            sessionStorage.setItem("userRole","Admin");
        }
        else{
            sessionStorage.setItem("userRole","User");
        }

        if(data.message == "Feedback has been provided"){
          
            $scope.showFeedDiv=false;
            $scope.checked=true;
            $rootScope.termsAgreed=data.terms;
        }
        else if(data.message == "Feedback NOT provided"){
           
                $scope.checked=true;
              $scope.showFeedDiv=true;
              $rootScope.termsAgreed=data.terms;
        }
        else if(data.message=="Invalid user"){
         
          $scope.errorMessage = "Incorrect Username";
          $scope.loginError=true;
          }
        else{
            
             $scope.checked=true;
             $scope.showFeedDiv=false;
             $rootScope.termsAgreed=data.terms;
        }
        



}, function (message) {

hideLoader();
});
}, false); 

$scope.gotoMapView= function(){
 $("#agreeCheckDiv").show();
 $rootScope.crossTerms = false;    
var usr = btoa($scope.Username);

var pwd = btoa($scope.UserPass);
$rootScope.password=$scope.UserPass;

if($scope.Username === "" || $scope.UserPass === ""){
if($scope.Username === "")
{ $scope.errorMessage = "Please Enter Username";

 $scope.loginError=true;
}
else{
    $scope.errorMessage = "Please Enter Password";
   
    $scope.loginError=true;
 }        
            }           
else{
showLoader();
webServiceCall.validateUser($scope.Username,pwd,btoa($scope.User+':'+$rootScope.password)).then(function (data) {
if(data.message=="Invalid user"){
hideLoader();
$scope.errorMessage = "Incorrect Username or Password";
$scope.loginError=true;
}
else{
sessionStorage.setItem("userVal",$scope.Username);
sessionStorage.setItem("passVal",$scope.UserPass);
sessionStorage.setItem("LoginFlag",true);

hideLoader();
dataServ.getPermission(); 
if(data.message=="Valid User-NeedBack"){
    if($rootScope.termsAgreed=="Required")
{
      $rootScope.showterms();
      $rootScope.LoginContainer=false;
    
    sessionStorage.setItem("firstUserLogin",0);
    sessionStorage.setItem("whichUser",2);
    
    $rootScope.crossTerms = true; 


}   
else{
   $("#FeedBackCross").hide();
  $scope.showFeedback();
     $rootScope.flowValueForFeedback=2; 
      $("#agreeCheckDiv").hide(); 
       $scope.termsPopup=false;
    
    
     $rootScope.firstTour=0;
      $rootScope.LoginContainer=false;
    
    sessionStorage.setItem("firstUserLogin",0);
    sessionStorage.setItem("whichUser",2);
    
    $rootScope.crossTerms = true; 
    
}
 sessionStorage.setItem("firstTimeMap",true);
  sessionStorage.setItem("showDataCalled",false);
   
}
else if(data.message=="Valid User-FirstLogin"){

         sessionStorage.setItem("firstUserLogin",1);
         sessionStorage.setItem("whichUser",1);
         $rootScope.LoginContainer=false;
         
         $rootScope.firstTour=1;
         
         $rootScope.crossTerms = false;  
         $rootScope.showterms();
         sessionStorage.setItem("firstTimeMap",true);
          sessionStorage.setItem("showDataCalled",false);
        
     }
else{
     if($rootScope.termsAgreed=="Required")
{
      $rootScope.showterms();

}   
else{
   $("#agreeCheckDiv").hide();
     $rootScope.crossTerms = true;  
     $scope.termsPopup=false;
        $location.path('/MapView');
        $("#agreeCheckDiv").hide();
        $rootScope.firstTour=0;
}
    $rootScope.LoginContainer=false;
    
     sessionStorage.setItem("firstUserLogin",0);
     sessionStorage.setItem("whichUser",3);
    sessionStorage.setItem("firstTimeMap",true);
     sessionStorage.setItem("showDataCalled",false);
     
     }

$rootScope.User = sessionStorage.userVal;
$scope.termsCheckedFn=function(){

   $scope.showTakeTour();
 
}
}


}, function (message) {

hideLoader();
$scope.errorMessage = "Incorrect Username or Password";

$scope.loginError=true;

});

}



}

$scope.init();

}]);