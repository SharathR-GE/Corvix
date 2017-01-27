mainapp.controller('MainController', ['$scope', '$rootScope','$location','dataServ','webServiceCall','toaster','$timeout','$http', function ($scope, $rootScope,$location,dataServ,webServiceCall,toaster,$timeout,$http) {
 $rootScope.thirdmaxDiseaseDensity=17.33;  
$rootScope.secondmaxDiseaseDensity=26.21;
var amt = 5;
  $("#FeedBackCross").show();
 $rootScope.crossTerms = true;
  $("#agreeCheckDiv").hide();
var addAmt = 5;
$rootScope.submitShow=false;
  $scope.countTo = amt;
  $scope.countFrom = 0;
  $scope.contactSaved=false;
$scope.addrSession=false;
$scope.emailSession=false;
$scope.que1Session=false;
$scope.que2Session=false;
$scope.que3Session=false;
$scope.que4Session=false;
$scope.que5Session=false;
$scope.que6Session=false;
$scope.que7Session=false;
$scope.que8_ASession=false;
$scope.que8_BSession=false;
$scope.que8_CSession=false;
$scope.que8_DSession=false;
$scope.que8_ESession=false;
$scope.que9Session=false;
$scope.que10Session=false;
$scope.que11_ASession=false;
$scope.que11_BSession=false;
$scope.que11_CSession=false;
$scope.que11_DSession=false;
$scope.que11_ESession=false;
$scope.que11_FSession=false;
$scope.que2Txt=true;
$scope.que3Txt=true;
$scope.que7Txt=true;
$scope.que13Txt=true;
$scope.que12Session=false;
$scope.que13Session=false;
$scope.que14Session=false;
$scope.que15Session=false;
$scope.que16Session=false;
$scope.que17Session=false;
$rootScope.displayMessage="Connecting to Server...";

$rootScope.User = sessionStorage.userVal; 
$rootScope.password = sessionStorage.passVal;
$rootScope.webURL=webserviceURL;
$scope.dwnlodFeed = function(){
   var dwl=$http({
                    url : webserviceURL + 'download',
                    method : 'GET',
                    params : {},
                    headers : {
                        'Content-type' : 'application/xls',
                        'Authorization': 'Basic ' + btoa($rootScope.User+':'+$rootScope.password)
                    },
                    responseType : 'arraybuffer'
                }).success(function(data, status, headers, config) {
                    var file = new Blob([ data ], {
                        type : 'application/xls'
                    });
                    //trick to download store a file having its URL
                    var fileURL = URL.createObjectURL(file);
                    var a         = document.createElement('a');
                    a.href        = fileURL; 
                    a.target      = '_blank';
                    a.download    = 'Feedback.xls';
                    document.body.appendChild(a);
                    a.click();
                }).error(function(data, status, headers, config) {

                });
  
}
$scope.dwnlodCont = function(){
   var dwl=$http({
                    url : webserviceURL + 'contactdetailsdownload',
                    method : 'GET',
                    params : {},
                    headers : {
                        'Content-type' : 'application/xls',
                        'Authorization': 'Basic ' + btoa($rootScope.User+':'+$rootScope.password)
                    },
                    responseType : 'arraybuffer'
                }).success(function(data, status, headers, config) {
                    var file = new Blob([ data ], {
                        type : 'application/xls'
                    });
                    //trick to download store a file having its URL
                    var fileURL = URL.createObjectURL(file);
                    var a         = document.createElement('a');
                    a.href        = fileURL; 
                    a.target      = '_blank';
                    a.download    = 'User_Details.xls';
                    document.body.appendChild(a);
                    a.click();
                }).error(function(data, status, headers, config) {

                });
  
}
$scope.enableTxt2=function(){
  
  if($scope.whatchllenge == "Yes1" || $scope.whatchllenge == "No1" ){
    
    $scope.que2Txt=false;
  }
  else{
   $scope.que2Txt=true;
  }
  if($scope.whatchllenge && !$scope.que2Session){
    
   $rootScope.progressValue=$rootScope.progressValue + addAmt;
    $scope.que2Session=true;
   
 }
 else{
   if($scope.whatchllenge == "Yes1" || $scope.whatchllenge == "No1" ){

   }
   else{

       $rootScope.progressValue=$rootScope.progressValue - addAmt;
        $scope.que2Session=false;
      }
    
 }

   if($rootScope.progressValue >= 100){
    $rootScope.submitShow=true;
   }
   else{
    $rootScope.submitShow=false;
   }
}
$scope.enableTxt3=function(){
  
  if($scope.futureplanning == "Yes2" || $scope.futureplanning == "No2" ){
    $scope.que3Txt=false;
  }
  else{
   $scope.que3Txt=true;
  }
  if($scope.futureplanning && !$scope.que3Session){
    
   $rootScope.progressValue=$rootScope.progressValue + addAmt;
    $scope.que3Session=true;
   
 }
 else{
    if($scope.futureplanning == "Yes2" || $scope.futureplanning == "No2"){

    }
    else{

       $rootScope.progressValue=$rootScope.progressValue - addAmt;
        $scope.que3Session=false;
    }
 }
   if($rootScope.progressValue >= 100){
    $rootScope.submitShow=true;
   }
   else{
    $rootScope.submitShow=false;
   }
}
$scope.enableTxt7=function(){
  
  if($scope.imaginginstall2 == "Yes3" || $scope.imaginginstall2 == "No3" ){
    $scope.que7Txt=false;
  }
  else{
   $scope.que7Txt=true;
  }
}
 $scope.PrivecyPopup=false;
$rootScope.closePrivecy = function(){
   if($rootScope.fromTerms==true){
    
    $scope.termsPopup=true;
  }
  $rootScope.fromTerms=false;
  $scope.PrivecyPopup=false;
},
$rootScope.showPrivecy = function(){
  $scope.PrivecyPopup=true;
},
  $timeout(function(){
    $rootScope.progressValue = amt;
  }, 200); 
var addr = document.getElementById("addr");
addr.addEventListener("change", function(e) {
    if(!$scope.addrSession){
      if($scope.businessAddress == ""){

    }
    else{
   $rootScope.progressValue=$rootScope.progressValue + addAmt;
    $scope.addrSession=true;
    }
 }
 else{
    if($scope.businessAddress == ""){

       $rootScope.progressValue=$rootScope.progressValue - addAmt;
        $scope.addrSession=false;
    }
 }
   if($rootScope.progressValue >= 100){
    $rootScope.submitShow=true;
   }
   else{
    $rootScope.submitShow=false;
   }
});
var email = document.getElementById("email");
email.addEventListener("change", function(e) {
  if(!$scope.emailSession){
      if($scope.businessEmail == ""){

    }
    else{
      if(!$scope.myForm.BEmail.$error.email){
   $rootScope.progressValue=$rootScope.progressValue + addAmt;
    $scope.emailSession=true;
    }
  }
 }
 else{
    if($scope.businessEmail == ""){

       $rootScope.progressValue=$rootScope.progressValue - addAmt;
        $scope.emailSession=false;
    }
    else if($scope.myForm.BEmail.$error.email){
        $rootScope.progressValue=$rootScope.progressValue - addAmt;
        $scope.emailSession=false;
    }
 }
   if($rootScope.progressValue >= 100){
    $rootScope.submitShow=true;
   }
   else{
    $rootScope.submitShow=false;
   }
});

var que4 = document.getElementById("que4");
que4.addEventListener("change", function(e) {
  
  if(!$scope.que4Session){
    if($scope.toolContent_1 == ""){

    }
    else{
   $rootScope.progressValue=$rootScope.progressValue + addAmt;
    $scope.que4Session=true;
    }
 }
  else{
    if($scope.toolContent_1 == ""){

       $rootScope.progressValue=$rootScope.progressValue - addAmt;
        $scope.que4Session=false;
    }
 }
   if($rootScope.progressValue >= 100){
    $rootScope.submitShow=true;
   }
   else{
    $rootScope.submitShow=false;
   }
});
var que5 = document.getElementById("que5");
que5.addEventListener("change", function(e) {
  
  if(!$scope.que5Session){
    if($scope.toolContent_2 == ""){

    }
    else{
   $rootScope.progressValue=$rootScope.progressValue + addAmt;
    $scope.que5Session=true;
    }
 }
  else{
    if($scope.toolContent_2 == ""){

       $rootScope.progressValue=$rootScope.progressValue - addAmt;
        $scope.que5Session=false;
    }
 }
   if($rootScope.progressValue >= 100){
    $rootScope.submitShow=true;
   }
   else{
    $rootScope.submitShow=false;
   }
});


$scope.checkQue6=function(){
  if(!$scope.que6Session){
    if($scope.Capitalplanning || $scope.Increasingpatient || $scope.Assetoptimization || $scope.Reimbursementoptimization || $scope.other || $scope.ProtocolStandardization || $scope.notUseful ){
      $rootScope.progressValue=$rootScope.progressValue + addAmt;
      $scope.que6Session=true;
    }
    if($rootScope.progressValue >= 100){
    $rootScope.submitShow=true;
   }
   else{
    $rootScope.submitShow=false;
   }
  }
  else{
    if($scope.Capitalplanning || $scope.Increasingpatient || $scope.Assetoptimization || $scope.Reimbursementoptimization || $scope.other || $scope.ProtocolStandardization || $scope.notUseful){

    }
    else{
       $rootScope.progressValue=$rootScope.progressValue - addAmt;
        $scope.que6Session=false;
    }
 }
}

$scope.checkQue13=function(){
 
   if($scope.MarketRadio == "MarketYes" || $scope.MarketRadio == "Marketfromother" ){
    $scope.que13Txt=false;
  }
  else{
   $scope.que13Txt=true;
  }
  if($scope.MarketRadio && !$scope.que13Session){
    
   $rootScope.progressValue=$rootScope.progressValue + addAmt;
    $scope.que13Session=true;
   
 }
 else{
    if($scope.MarketRadio == "MarketYes" || $scope.MarketRadio == "MarketNo" || $scope.MarketRadio == "Marketfromother"){

    }
    else{

       $rootScope.progressValue=$rootScope.progressValue - addAmt;
        $scope.que13Session=false;
    }
 }
   if($rootScope.progressValue >= 100){
    $rootScope.submitShow=true;
   }
   else{
    $rootScope.submitShow=false;
   }
  
}


$scope.termsPopup=false;
$rootScope.LoginContainer=false;
$scope.thankspopup=false;
$rootScope.date = new Date();
$rootScope.showterms = function(){
  $scope.termsPopup=true;
  $("#agreeCheckDiv").show();
  $scope.termsChecked=false;
   $rootScope.firstTour=1;
   $rootScope.crossTerms = true;  

},
$rootScope.showtermsFromPrivacy = function(){
  //$scope.termsPopup=false;
  $scope.PrivecyPopup=true;
  $rootScope.fromTerms=true;

},

$rootScope.showContactFromPrivacy = function(){
  $scope.conatctUs=true;
  $scope.PrivecyPopup=false;
  $scope.termsPopup=false;
  $rootScope.fromPrivacy=true;

},


$scope.conatctUs=false;
$rootScope.showconatctUs = function(){
  $scope.conatctUs=true;
  
},
$rootScope.closeConatctUs = function(){
  if($rootScope.fromPrivacy==true){
    
    $scope.PrivecyPopup=true;
  }

  $scope.conatctUs=false;
  $rootScope.fromPrivacy=false;

  $scope.UsernameError1="";
    $scope.UsernameError2="";
    $scope.UsernameError3="";
    $scope.UsernameError4="";
    $scope.UsernameError5="";
    $scope.UsernameError6="";
    $scope.UsernameError7="";
},
 

$rootScope.contactOk = function(){
   if($rootScope.fromPrivacy==true){
    
    $scope.PrivecyPopup=true;
  }
  $rootScope.fromPrivacy=false;
  $scope.contactSaved=false;

},
$scope.UsernameError="";
 
$rootScope.saveConatcDetails = function(){

   var firstName = btoa($scope.firstname);
 var lastName= btoa($scope.lastname);
 var email=btoa($scope.ConEmail);
 var phonenum=btoa($scope.phonenum);


   if($scope.conatctForm.$valid)
{
                                             
  webServiceCall.saveContact(firstName,lastName,email,phonenum,$scope.jobtitle,$scope.facility,$scope.conatct_question,btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
    
  $scope.conatctUs=false;
  
    $scope.contactSaved=true
    $scope.firstname=null;
    $scope.lastname=null;
    $scope.ConEmail=null;
    $scope.phonenum=null;
    $scope.jobtitle=null;
    $scope.facility=null;
    $scope.conatct_question=null;
    $scope.conatctForm.$setPristine(); 
    $scope.UsernameError1="";
    $scope.UsernameError2="";
    $scope.UsernameError3="";
    $scope.UsernameError4="";
    $scope.UsernameError5="";
    $scope.UsernameError6="";
    $scope.UsernameError7="";


  });
}
else
 {
          
         if($scope.firstname==undefined){
           $scope.UsernameError1="This field is required";
          }
          if($scope.lastname==undefined){
           $scope.UsernameError2="This field is required";
          }
          if($scope.ConEmail==undefined){
           $scope.UsernameError3="This field is required";
          }
          if($scope.phonenum==undefined){
           $scope.UsernameError4="This field is required";
          }
          if($scope.jobtitle==undefined){
           $scope.UsernameError5="This field is required";
          }
          if($scope.facility==undefined){
           $scope.UsernameError6="This field is required";
          }
          if($scope.conatct_question==undefined){
           $scope.UsernameError7="This field is required";
          }
          
     
     

    }
}

$scope.agreeTerms=function(){
webServiceCall.agreeTerms($rootScope.User,$scope.termsChecked,btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
                     
                                      
                          
 
   
    $("#agreeCheckDiv").hide();
     $scope.showTakeTour(); 
      $scope.termsPopup=false;
       $rootScope.flowValueForFeedback=0;
       $rootScope.firstTour=0;
   
  });
}
$rootScope.dkfjksk = function(){
  $scope.thankspopup=true;

}
$scope.closeFeedBack=function(){
  $scope.FeedbackPopup = false;
}

  $("#bottomlinks").removeClass("fixfooter");
  $rootScope.logout = function(){
   
      
      

      if(sessionStorage.firstUserLogin==1){
         $scope.FeedbackPopup=true;
         $rootScope.firstUserSubmit=1;
       }
       else{
         $location.path('/Login');
         sessionStorage.setItem("LoginFlag",false);
        sessionStorage.setItem("tier","us");
        sessionStorage.setItem("hospiChar","false");
         $rootScope.progressValue=5;
                                         $rootScope.submitShow=false;
                                          $scope.countTo = amt;
                                          $scope.countFrom = 0;
                                          $scope.contactSaved=false;
                                        $scope.addrSession=false;
                                        $scope.emailSession=false;
                                        $scope.que1Session=false;
                                        $scope.que2Session=false;
                                        $scope.que3Session=false;
                                        $scope.que4Session=false;
                                        $scope.que5Session=false;
                                        $scope.que6Session=false;
                                        $scope.que7Session=false;
                                        $scope.que8_ASession=false;
                                        $scope.que8_BSession=false;
                                        $scope.que8_CSession=false;
                                        $scope.que8_DSession=false;
                                        $scope.que8_ESession=false;
                                        $scope.que9Session=false;
                                        $scope.que10Session=false;
                                        $scope.que11_ASession=false;
                                        $scope.que11_BSession=false;
                                        $scope.que11_CSession=false;
                                        $scope.que11_DSession=false;
                                        $scope.que11_ESession=false;
                                        $scope.que11_FSession=false;
                                        $scope.que2Txt=true;
                                        $scope.que3Txt=true;
                                        $scope.que7Txt=true;
                                        $scope.que13Txt=true;
                                        $scope.que12Session=false;
                                        $scope.que13Session=false;
                                        $scope.que14Session=false;
                                        $scope.que15Session=false;
                                        $scope.que16Session=false;
                                        $scope.que17Session=false;
                                         $scope.businessAddress="";
                                         $scope.businessEmail="";
                                         $scope.customerProblem_1="";
                                         $scope.customerProblem_2=""; 
                                         $scope.customerProblem_3="";
                                         $scope.toolContent_1="";
                                         $scope.toolContent_2="";
                                         $scope.toolContent_4="";
                                         $scope.toolContent_3="";
                                         $scope.ExpValue1="";
                                         $scope.ExpValue2="";
                                         $scope.ExpValue3="";
                                         $scope.ExpValue4="";
                                         $scope.ExpValue5="";
                                         $scope.ExpValue6="";
                                         $scope.ExpValue7="";
                                         $scope.ExpValue8="";
                                         $scope.ExpValue9="";
                                         $scope.ExpValue10="";
                                         $scope.ExpValue11="";
                                         $scope.userExperience_12="";
                                         $scope.userExperience_13="";
                                         $scope.userExperience_14="";
                                         $scope.marketchekvalue="";
                                         $scope.market_2="";
                                         $scope.market_3="";
                                         $scope.market_4="";
                                         $scope.fianl="";
                                         $scope.whatchllenge1=false;
                                         $scope.whatchllenge2=false;
                                          $scope.futureplanning=false;
                                         $scope.whatchllenge3=false;
                                         $scope.whatchllenge=false;
                                         $scope.checkbox1=false;
                                         $scope.checkbox2=false;
                                         $scope.checkbox3=false;
                                         $scope.checkbox4=false;
                                         $scope.checkbox5=false;
                                         $scope.checkbox6=false;
                                         $scope.MarketRadio=false;
                                         $scope.checkbox7=false;
                                         $scope.checkbox8=false;
                                         $scope.Capitalplanning=false;
                                         $scope.Increasingpatient=false;
                                         $scope.Assetoptimization=false;
                                         $scope.Reimbursementoptimization=false;
                                         $scope.ProtocolStandardization=false;
                                         $scope.notUseful=false;
                                          $scope.other=false;
                                          $scope.imaginginstall2=false;
                                          $scope.que7Txt=true;
                                          $scope.Marketfromother=false;
                                          $scope.MarketYes=false;
                                            $scope.MarketNo=false;
                                               $scope.imaginginstall2=false;
                                                   $scope.futureplanning=false;
                                                     $scope.que3Txt=true;
                                                       $scope.que2Txt=true;
                                          $scope.que13Txt=true;
                                          $scope.marketTxt="";

                                         $(".rating-form > input").prop('checked', false);
                                         $("#userexp1 > input").prop('checked', false);

                                         $scope.firstname=null;
    $scope.lastname=null;
    $scope.ConEmail=null;
    $scope.phonenum=null;
    $scope.jobtitle=null;
    $scope.facility=null;
    $scope.conatct_question=null;
    $scope.conatctForm.$setPristine(); 
    $scope.UsernameError1="";
    $scope.UsernameError2="";
    $scope.UsernameError3="";
    $scope.UsernameError4="";
    $scope.UsernameError5="";
    $scope.UsernameError6="";
    $scope.UsernameError7="";


       }
        $scope.flowValueForTour="0";
            
       
    }
  $rootScope.slider_visible = {
       
        options: {
          readOnly: true,
            showSelectionBar: true
        }
      };
       $rootScope.read_only_slider = {
        value: 20,
        options: {
       ceil: 10000,
           showSelectionBar: true,
            hideLimitLabels: true,
            readOnly: true
        }
    };

    $scope.someproperty=false;
    $scope.hosptialAtrribute=false;
    $rootScope.zipCode="";
    $rootScope.flowValue=0;
    var a="";
    $scope.showMapView =function(){     
      $location.path('/MapView');
    },
    $scope.showInsightsView =function(){
      $location.path('/InsightsView');
    },
    $scope.ErrorPopUp=false;
      $scope.showError=function(){
       $scope.ErrorPopUp=true;
      
       setTimeout('$("#ErrorPopUp").hide()',1500);
     }

   
    $scope.CurrentYear=function($event){
    $(".mapview-right-years").removeClass("Eco-Year-button-selected");
    var target=$event.target;
    $(".mapview-right-years-current").addClass("Eco-Year-button-selected");
     $rootScope.filterData.yearData="Current Year";
     },
        $scope.TenYear =function($event){
       $(".mapview-right-years").removeClass("Eco-Year-button-selected");
        var target=$event.target;
        $(".mapview-right-years-ten").addClass("Eco-Year-button-selected");
      $rootScope.filterData.yearData="10-year";
     },
     $scope.FiveYear =function($event){
       $(".mapview-right-years").removeClass("Eco-Year-button-selected");
        var target=$event.target;
        $(".mapview-right-years-five").addClass("Eco-Year-button-selected");
      $rootScope.filterData.yearData="5-year";
     },
     $rootScope.mapviewFilterClass = "mapview-filterNone"; 
   //multiDropdown
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
        stateSelect:'',
        hospOwnership:"All"
   };
   $rootScope.texts = {
                    checkAll: 'All',
                    uncheckAll: 'Uncheck All',
                    selectionCount: 'checked',
                    selectionOf: '/',
                    searchPlaceholder: 'Search...',
                    buttonDefaultText: 'Select',
                    dynamicButtonTextSuffix: 'checked'
                };
   $rootScope.genderData = 'All Genders';
   $rootScope.flowValueForFeedback="1";
   $rootScope.filteredPopNDiseaseCount=""; 
  
   $rootScope.selectAgedata = [
                                 {id: "All Age", label: "All Ages"},
                                 {id: "1", label: "0-17"},
                                 {id: "2", label: "18-34"},
                                 {id: "4", label: "35-64"},
                                 {id: "8", label: "65 & Over"}];

        
        $scope.selectAgesettings = {
            smartButtonMaxItems: 3,
            smartButtonTextConverter: function(itemText, originalItem) {
                if ($rootScope.filterData.selectAgemodel=== 'Jhon') {
                return 'Jhonny!';
                }
                
                return itemText;

            }


        };
        $scope.eventAge={
         onItemSelect:function(){
         for(var i=0;i<$rootScope.filterData.selectAgemodel.length;i++){
        
          if($rootScope.filterData.selectAgemodel[i].id=="All Age" && i<$rootScope.filterData.selectAgemodel.length-1){
           $rootScope.filterData.selectAgemodel.splice(i, 1);
          }
          else if($rootScope.filterData.selectAgemodel[i].id=="All Age"){
            $rootScope.filterData.selectAgemodel=[ {id: "All Age", label: "All Ages"}];
          }
         }
        
         }
         };
         $scope.eventHealthPlans={
         onItemSelect:function(){
         for(var i=0;i<$rootScope.filterData.selectHealthModel.length;i++){
        
          if($rootScope.filterData.selectHealthModel[i].id=="1,2,3,4" && i<$rootScope.filterData.selectHealthModel.length-1){
           $rootScope.filterData.selectHealthModel.splice(i, 1);
          }
          else if($rootScope.filterData.selectHealthModel[i].id=="1,2,3,4"){
            $rootScope.filterData.selectHealthModel=[{id: "1,2,3,4", label: "All Health Plans", group: ''}];
          }
         }
        
         }
         };
 
        $scope.selectDiseasedata = [
                                    {id: "All", label: "All Diseases"},
                                    {id: "Heart", label: "Heart Disease"},
                                    {id: "Stroke", label: "Stroke"}];

        
        $scope.selectDiseasesettings = {
            smartButtonMaxItems: 3,
            smartButtonTextConverter: function(itemText, originalItem) {
               
                return itemText;
            }

        };
      
        $scope.selectHealthdata = [ 
                                   {id: "1,2,3,4", label: "All Health Plans", group: ''},
                                    {id: "3", label: "Medicaid", group: ''},
                                   {id: "2", label: "Medicare", group: ''},
                                   {id: "1", label: "Private", group: ''},
                                   {id: "4", label: "Others", group: ''}
                                   ];
                                       $scope.selectHealthsettings ={
                                       smartButtonMaxItems: 2,
                                       smartButtonTextConverter: function(itemText, originalItem) {
                                          
                                           return itemText;
                                       }

                                   };
                                       
                                       
                                    //slider
                                     $rootScope.minRangeSlider = {
        minValue: 0,
        maxValue: 2500,
        options: {
            floor: 0,
            ceil: 2500,
           
        }
    };
                                    $rootScope.slider_visible_bar = {
                                            value: 100,
                                            options: {
                                              floor: 0,
                                              ceil: 10000,
                                              step: 5,
                                              showSelectionBar: true
                                            }
                                          };
                                    $scope.$watch('slider_visible_bar.value', function (newValue, oldValue) {
                                            dataServ.setSliderVal(newValue);

                                        });

                                 
                                    $scope.showFeedbackFromLogin=function(){

                                        $rootScope.flowValueForFeedback="2";
                                        $("#feedwindow").hide();
                                        $("#FeedBackCross").hide();
                                       
                                        $scope.showFeedback();
                                    }
                                    $scope.showFeedback1=function(){
                                      $rootScope.flowValueForFeedback="3";
                                        $scope.showFeedback();
                                        $("#FeedBackCross").show();

                                    },
                                    $scope.flowValueForTour="0";
                                     $scope.helpPopup=false;
                                    $scope.showTakeTour=function(){
                                       $rootScope.LoginContainer=false;
                                         $scope.helpPopup=true; 
                                         $scope.flowValueForTour="1";
                                         $scope.termsPopup=false;
                                         
                                        }
                                    $scope.showTakeTour1=function(){
                                      $rootScope.LoginContainer=false;
                                         $scope.helpPopup=true; 
                                         $scope.flowValueForTour="0";
                                         
                                        }
                                      $scope.closeTerms=function(){
                                      
                                       
                                        if($rootScope.firstTour==1){
                                          $rootScope.firstTour=0;
                                          $location.path('/Login');
                                          $scope.termsPopup=false;
                                           $rootScope.LoginContainer=true;

                                        }
                                        else{
                                          
                                           $scope.termsPopup=false;
                                        }
                                      }

                            // $rootScope.User;

                            $scope.showFeedback=function(){
                                    if($rootScope.progressValue >= 100){
                                      $rootScope.submitShow=true;
                                    }
                                     else{
                                      $rootScope.submitShow=false;
                                     }
                                    $scope.FeedbackPopup=!$scope.FeedbackPopup;

                                    
                                  }                                     
                                 
                                   $scope.FirstHelp=true;$scope.secondtHelp=true;$scope.thirdHelp=true;$scope.mapbuttonspan=true;
                                   $scope.Insight_help=true; $scope.insightbutton=false;$scope.ChnageState=true;$scope.footerhelp=true;
                                   $scope.firsthelp = function(){
                                     $scope.FirstHelp=false;
                                     $scope.thirdHelp=true;
                                     $scope.secondtHelp=false;
                                     $scope.mapbuttonspan=false;
                                     $scope.Insight_help=true;
                                     $scope.ChnageState=true;
                                   },
                                    $scope.gotIt = function(){
                                    $scope.FirstHelp =false;
                                    $scope.thirdHelp=false;
                                    $scope.secondtHelp=true;
                                    $scope.mapbuttonspan=false;
                                    $scope.ChnageState=true;
                                   },
                                   $scope.zoomInOut = function(){
                                      $scope.Insight_help=false;
                                      $scope.mapbuttonspan=false;
                                      $scope.FirstHelp=false;
                                      $scope.thirdHelp=true;
                                      $scope.secondtHelp=true;
                                      $scope.insightbutton=true;
                                      $scope.ChnageState=true;
                                    },
                                    $scope.InsightHelp = function(){
                                         $scope.ChnageState=false;
                                          $scope.Insight_help=true;
                                          $scope.FirstHelp=false;
                                          $scope.thirdHelp=true;
                                          $scope.secondtHelp=true;
                                      },
                                      $scope.Changestate = function(){
                                          $scope.ChnageState=true;
                                          $scope.Insight_help=true;
                                          $scope.FirstHelp=false;
                                          $scope.thirdHelp=true;
                                          $scope.secondtHelp=true;
                                          $scope.footerhelp=false;

                                      },
                                        $scope.closehelp = function(){
                                           $scope.helpPopup=false;
                                           $scope.FirstHelp=true;$scope.secondtHelp=true;$scope.thirdHelp=true;$scope.mapbuttonspan=true;
                                           $scope.Insight_help=true; $scope.insightbutton=false;$scope.ChnageState=true;$scope.footerhelp=true;
                                           $scope.flowValueForTour=="0";
                                           if( $scope.flowValueForTour == "1"){
                                              $location.path('/MapView');
                                            }
                                            
                                        }
                                   
                                       $scope.customerProblem2="";
                                        $scope.customerProblem3="";
                                        $scope.toolContent_3="";
                                        $scope.toolContent4="";
                                       $scope.marketchekvalue="";
                                       var custName = btoa($scope.User);
                                       var busisAdd = btoa($scope.businessAddress);
                                       var usinEmail = btoa($scope.businessEmail);
                                       $scope.ExpValue1="";
                                       $scope.ExpValue2="";
                                       $scope.ExpValue3="";
                                       $scope.ExpValue4="";
                                       $scope.ExpValue5="";
                                       $scope.ExpValue6="";
                                       $scope.ExpValue7="";
                                       $scope.ExpValue8="";
                                       $scope.ExpValue9="";
                                       $scope.ExpValue10="";
                                       $scope.ExpValue11="";
                                        $scope.whatchllenge1=false;
                                         $scope.whatchllenge2=false;
                                         $scope.whatchllenge=false;
                                         $scope.checkbox1=false;
                                         $scope.checkbox2=false;
                                         $scope.checkbox3=false;
                                         $scope.checkbox4=false;
                                         $scope.checkbox5=false;
                                         $scope.checkbox6=false;
                                         $scope.checkbox7=false;
                                         $scope.checkbox8=false;
                                    
                            
                                       $scope.ExcellentExp1=function(){
                                       $scope.ExpValue1="Excellent";
                                      if(!$scope.que8_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                      $scope.VerygoodExp1=function(){
                                          $scope.ExpValue1="Great";
                                           if(!$scope.que8_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                         },
                                       $scope.goodExp1=function(){
                                       $scope.ExpValue1="Good";
                                        if(!$scope.que8_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp1=function(){
                                       $scope.ExpValue1="Acceptable";
                                        if(!$scope.que8_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp1=function(){
                                       $scope.ExpValue1="Poor";
                                       if(!$scope.que8_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                        $scope.ExcellentExp2=function(){
                                       $scope.ExpValue2="Excellent";
                                       if(!$scope.que8_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                        $scope.VerygoodExp2=function(){
                                       $scope.ExpValue2="Great";
                                       if(!$scope.que8_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp2=function(){
                                       $scope.ExpValue2="Good";
                                        if(!$scope.que8_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp2=function(){
                                       $scope.ExpValue2="Acceptable";
                                        if(!$scope.que8_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp2=function(){
                                       $scope.ExpValue2="Poor";
                                        if(!$scope.que8_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      }
                                       $scope.ExcellentExp3=function(){
                                       $scope.ExpValue3="Excellent";
                                        if(!$scope.que8_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.VerygoodExp3=function(){
                                       $scope.ExpValue3="Great";
                                       if(!$scope.que8_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp3=function(){
                                       $scope.ExpValue3="Good";
                                        if(!$scope.que8_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp3=function(){
                                       $scope.ExpValue3="Acceptable";
                                        if(!$scope.que8_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp3=function(){
                                       $scope.ExpValue3="Poor";
                                        if(!$scope.que8_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.ExcellentExp4=function(){
                                       $scope.ExpValue4="Excellent";
                                        if(!$scope.que8_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_DSession=true;
                                       }
                                      },
                                       $scope.VerygoodExp4=function(){
                                       $scope.ExpValue4="Great";
                                       if(!$scope.que8_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_DSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp4=function(){
                                       $scope.ExpValue4="Good";
                                       if(!$scope.que8_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_DSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp4=function(){
                                       $scope.ExpValue4="Acceptable";
                                      if(!$scope.que8_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_DSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp4=function(){
                                       $scope.ExpValue4="Poor";
                                       if(!$scope.que8_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_DSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                      $scope.ExcellentExp5=function(){
                                       $scope.ExpValue5="Excellent";
                                       if(!$scope.que8_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.VerygoodExp5=function(){
                                       $scope.ExpValue5="Great";
                                       if(!$scope.que8_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp5=function(){
                                       $scope.ExpValue5="Good";
                                       if(!$scope.que8_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp5=function(){
                                       $scope.ExpValue5="Acceptable";
                                        if(!$scope.que8_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp5=function(){
                                       $scope.ExpValue5="Poor";
                                        if(!$scope.que8_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que8_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      }
                                      ,
                                      $scope.ExcellentExp6=function(){
                                       $scope.ExpValue6="Excellent";

                                       if(!$scope.que11_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.VerygoodExp6=function(){
                                       $scope.ExpValue6="Great";
                                       if(!$scope.que11_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp6=function(){
                                       $scope.ExpValue6="Good";
                                      if(!$scope.que11_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp6=function(){
                                       $scope.ExpValue6="Acceptable";
                                       if(!$scope.que11_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp6=function(){
                                       $scope.ExpValue6="Poor";
                                      if(!$scope.que11_ASession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ASession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                      $scope.ExcellentExp7=function(){
                                       $scope.ExpValue7="Excellent";
                                       if(!$scope.que11_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.VerygoodExp7=function(){
                                       $scope.ExpValue7="Great";
                                      if(!$scope.que11_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp7=function(){
                                       $scope.ExpValue7="Good";
                                       if(!$scope.que11_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp7=function(){
                                       $scope.ExpValue7="Acceptable";
                                       if(!$scope.que11_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp7=function(){
                                       $scope.ExpValue7="Poor";
                                       if(!$scope.que11_BSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_BSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                      $scope.ExcellentExp8=function(){
                                       $scope.ExpValue8="Excellent";
                                       if(!$scope.que11_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.VerygoodExp8=function(){
                                       $scope.ExpValue8="Great";
                                        if(!$scope.que11_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp8=function(){
                                       $scope.ExpValue8="Good";
                                        if(!$scope.que11_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp8=function(){
                                       $scope.ExpValue8="Acceptable";
                                        if(!$scope.que11_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp8=function(){
                                       $scope.ExpValue8="Poor";
                                        if(!$scope.que11_CSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_CSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                      $scope.ExcellentExp9=function(){
                                       $scope.ExpValue9="Excellent";
                                        if(!$scope.que11_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_DSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.VerygoodExp9=function(){
                                       $scope.ExpValue9="Great";
                                      if(!$scope.que11_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_DSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp9=function(){
                                       $scope.ExpValue9="Good";
                                       if(!$scope.que11_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_DSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp9=function(){
                                       $scope.ExpValue9="Acceptable";
                                       if(!$scope.que11_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_DSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },

                                       $scope.poorExp9=function(){
                                       $scope.ExpValue9="Poor";
                                      if(!$scope.que11_DSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_DSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                      $scope.ExcellentExp10=function(){
                                       $scope.ExpValue10="Excellent";
                                       if(!$scope.que11_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.VerygoodExp10=function(){
                                       $scope.ExpValue10="Great";
                                        if(!$scope.que11_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp10=function(){
                                       $scope.ExpValue10="Good";
                                        if(!$scope.que11_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp10=function(){
                                       $scope.ExpValue10="Acceptable";
                                        if(!$scope.que11_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp10=function(){
                                       $scope.ExpValue10="Poor";
                                        if(!$scope.que11_ESession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_ESession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                      $scope.ExcellentExp11=function(){
                                       $scope.ExpValue11="Excellent";
                                       if(!$scope.que11_FSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_FSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.VerygoodExp11=function(){
                                       $scope.ExpValue11="Great";
                                      if(!$scope.que11_FSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_FSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.goodExp11=function(){
                                       $scope.ExpValue11="Good";
                                       if(!$scope.que11_FSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_FSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.acceptableExp11=function(){
                                       $scope.ExpValue11="Acceptable";
                                       if(!$scope.que11_FSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_FSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      },
                                       $scope.poorExp11=function(){
                                       $scope.ExpValue11="Poor";
                                       if(!$scope.que11_FSession){
                                         $rootScope.progressValue=$rootScope.progressValue + addAmt;
                                         $scope.que11_FSession=true;
                                       }
                                       if($rootScope.progressValue >= 100){
                                           $rootScope.submitShow=true;
                                       }
                                       else{
                                        $rootScope.submitShow=false;
                                       }
                                      }
                                   
              $scope.whatchllengeTxt11=false;
              $scope.submitFeedWebCall=function(){
                  
                var custName = btoa($scope.User);
                                       var busisAdd = btoa($scope.businessAddress);
                                       var usinEmail = btoa($scope.businessEmail);
                webServiceCall.saveFeedback(custName,busisAdd,usinEmail,$scope.customerProblem2,$scope.customerProblem3,$scope.toolContent_1,$scope.toolContent_2,$scope.toolContent_3,$scope.ExpValue1,$scope.ExpValue2,$scope.ExpValue3,$scope.ExpValue4,$scope.ExpValue5,$scope.ExpValue6,$scope.ExpValue7,$scope.ExpValue8,$scope.ExpValue9,$scope.ExpValue10,$scope.ExpValue11,$scope.marketchekvalue,$scope.fianl,btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
                                        sessionStorage.setItem("firstUserLogin",0);
                                       
                                         $rootScope.progressValue=5;
                                         $rootScope.submitShow=false;
                                          $scope.countTo = amt;
                                          $scope.countFrom = 0;
                                          $scope.contactSaved=false;
                                        $scope.addrSession=false;
                                        $scope.emailSession=false;
                                        $scope.que1Session=false;
                                        $scope.que2Session=false;
                                        $scope.que3Session=false;
                                        $scope.que4Session=false;
                                        $scope.que5Session=false;
                                        $scope.que6Session=false;
                                        $scope.que7Session=false;
                                        $scope.que8_ASession=false;
                                        $scope.que8_BSession=false;
                                        $scope.que8_CSession=false;
                                        $scope.que8_DSession=false;
                                        $scope.que8_ESession=false;
                                        $scope.que9Session=false;
                                        $scope.que10Session=false;
                                        $scope.que11_ASession=false;
                                        $scope.que11_BSession=false;
                                        $scope.que11_CSession=false;
                                        $scope.que11_DSession=false;
                                        $scope.que11_ESession=false;
                                        $scope.que11_FSession=false;
                                        $scope.que2Txt=true;
                                        $scope.que3Txt=true;
                                        $scope.que7Txt=true;
                                        $scope.que13Txt=true;
                                        $scope.que12Session=false;
                                        $scope.que13Session=false;
                                        $scope.que14Session=false;
                                        $scope.que15Session=false;
                                        $scope.que16Session=false;
                                        $scope.que17Session=false;
                                         $scope.businessAddress="";
                                         $scope.businessEmail="";
                                         $scope.customerProblem_1="";
                                         $scope.customerProblem_2=""; 
                                         $scope.customerProblem_3="";
                                         $scope.toolContent_1="";
                                         $scope.toolContent_2="";
                                         $scope.toolContent_4="";
                                         $scope.toolContent_3="";
                                         $scope.ExpValue1="";
                                         $scope.ExpValue2="";
                                         $scope.ExpValue3="";
                                         $scope.ExpValue4="";
                                         $scope.ExpValue5="";
                                         $scope.ExpValue6="";
                                         $scope.ExpValue7="";
                                         $scope.ExpValue8="";
                                         $scope.ExpValue9="";
                                         $scope.ExpValue10="";
                                         $scope.ExpValue11="";
                                         $scope.userExperience_12="";
                                         $scope.userExperience_13="";
                                         $scope.userExperience_14="";
                                         $scope.marketchekvalue="";
                                         $scope.market_2="";
                                         $scope.market_3="";
                                         $scope.market_4="";
                                         $scope.fianl="";
                                         $scope.whatchllenge1=false;
                                         $scope.whatchllenge2=false;
                                          $scope.futureplanning=false;
                                         $scope.whatchllenge3=false;
                                         $scope.whatchllenge=false;
                                         $scope.checkbox1=false;
                                         $scope.checkbox2=false;
                                         $scope.checkbox3=false;
                                         $scope.checkbox4=false;
                                         $scope.checkbox5=false;
                                         $scope.checkbox6=false;
                                         $scope.MarketRadio=false;
                                         $scope.checkbox7=false;
                                         $scope.checkbox8=false;
                                         $scope.Capitalplanning=false;
                                         $scope.Increasingpatient=false;
                                         $scope.Assetoptimization=false;
                                         $scope.Reimbursementoptimization=false;
                                         $scope.ProtocolStandardization=false;
                                         $scope.notUseful=false;
                                          $scope.other=false;
                                          $scope.imaginginstall2=false;
                                          $scope.que7Txt=true;
                                          $scope.Marketfromother=false;
                                          $scope.MarketYes=false;
                                            $scope.MarketNo=false;
                                               $scope.imaginginstall2=false;
                                                   $scope.futureplanning=false;
                                                     $scope.que3Txt=true;
                                                       $scope.que2Txt=true;
                                          $scope.que13Txt=true;
                                          $scope.marketTxt="";

                                         $(".rating-form > input").prop('checked', false);
                                         $("#userexp1 > input").prop('checked', false);

                                         $rootScope.LoginContainer=false;
                                         $scope.thankspopup=true;
                                  
                                 });
                          }
              $scope.feedbackOK=function(){

                                          
                                          
                                          if($rootScope.firstUserSubmit==1){ 

                                            $rootScope.firstUserSubmit=0;

                                            $location.path('/Login');
                                            sessionStorage.setItem("LoginFlag",false);
        sessionStorage.setItem("tier","us");
        sessionStorage.setItem("hospiChar","false");
        sessionStorage.clear();
                                        }
                                        else{
                                         
                                       if($rootScope.flowValueForFeedback==2){

                                       $location.path('/MapView');
                                     }
                                    }
                                    $scope.thankspopup=false;
              }
            
              
                              $scope.CustomerNameError="";
                                        $scope.saveNewFeedback =function(){
                                       
                                           if($scope.whatchllenge==="Yes1"){
                                            $scope.customerProblem2="Yes,"+$scope.customerProblem_2;
                                            }
                                            else{
                                            $scope.customerProblem2="No,"+$scope.customerProblem_2;
                                          }

                                            if($scope.futureplanning==="Yes2"){
                                            $scope.customerProblem3="Yes,"+$scope.customerProblem_3;
                                            
                                            }
                                            else{
                                          $scope.customerProblem3="No,"+$scope.customerProblem_3;
                                            
                                           }
                                            if($scope.imaginginstall2==="Yes3"){
                                            $scope.toolContent4="Yes,"+$scope.toolContent_4;
                                           
                                          
                                            }
                                            else{
                                            $scope.toolContent4="No,"+$scope.toolContent_4;
                                           

                                            }
                                       if($scope.Capitalplanning){
                                          $scope.toolContent_3= $scope.toolContent_3+"Capital planning,";
                                        }
                                      if($scope.Increasingpatient){
                                          $scope.toolContent_3=$scope.toolContent_3+"Increasing patient referral,";
                                        }
                                       if($scope.Assetoptimization){
                                          $scope.toolContent_3=$scope.toolContent_3+"Asset optimization(eg. protocal standradization),";
                                        }
                                       if($scope.Reimbursementoptimization){
                                          $scope.toolContent_3=$scope.toolContent_3+"Reimbursement optimization planning,";
                                        }
                                        if($scope.ProtocolStandardization){
                                          $scope.toolContent_3=$scope.toolContent_3+"Protocol standardization by site,";
                                        }
                                        if($scope.notUseful){
                                          $scope.toolContent_3=$scope.toolContent_3+"Not useful to me,";
                                        }
                                        if($scope.Other){
                                          $scope.toolContent_3=$scope.toolContent_3+"Other,";
                                        }
                                      if($scope.MarketRadio=="MarketNo"){
                                          $scope.marketchekvalue=$scope.marketchekvalue+"No,";
                                        }
                                         if($scope.MarketRadio=="MarketYes"){
                                          $scope.marketchekvalue=$scope.marketchekvalue+"Yes, my organization offers internal tools like this,"+$scope.marketTxt;
                                        }
                                         if($scope.MarketRadio=="Marketfromother"){
                                          $scope.marketchekvalue=$scope.marketchekvalue+"Yes, I am aware of similar tools from other sources"+$scope.marketTxt;
                                        }
                                       $scope.FeedbackPopup=false;   
                                      $scope.submitFeedWebCall();
                                         
                                         
                          
                                }
                                
$scope.sliderValChange=function(){
  
  if($rootScope.filterData.sliderVal>$rootScope.filterData.sliderValMax){
   
    $rootScope.filterData.sliderValMax=2500;

  }
  if($rootScope.filterData.sliderVal>2500 ){
    $rootScope.filterData.sliderValMax=2500;
    $rootScope.filterData.sliderVal=2500;
  }
   if($rootScope.filterData.sliderValMax>2500 ){
    $rootScope.filterData.sliderValMax=2500;
   
  }
}                              

           
      


  }]);
mainapp.directive('validNumber', function() {
    return {
      require: '?ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
        if(!ngModelCtrl) {
          return; 
        }

        ngModelCtrl.$parsers.push(function(val) {
          if (angular.isUndefined(val)) {
              var val = '';
          }
          
          var clean = val.replace(/[^-0-9\.]/g, '');
          var negativeCheck = clean.split('-');
      var decimalCheck = clean.split('.');
          if(!angular.isUndefined(negativeCheck[1])) {
              negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
              clean =negativeCheck[0] + '-' + negativeCheck[1];
              if(negativeCheck[0].length > 0) {
                clean =negativeCheck[0];
              }
              
          }
            
          if(!angular.isUndefined(decimalCheck[1])) {
              decimalCheck[1] = decimalCheck[1].slice(0,2);
              clean =decimalCheck[0] + '.' + decimalCheck[1];
          }

          if (val !== clean) {
            ngModelCtrl.$setViewValue(clean);
            ngModelCtrl.$render();
          }
          return clean;
        });

        element.bind('keypress', function(event) {
          if(event.keyCode === 32) {
            event.preventDefault();
          }
        });
      }
    };
    
  
    $rootScope.dwnloadFeedback=function(){

      var dwnldUrl = webserviceURL+'download';
      webServiceCall.getUserhospNstate(dwnldUrl).then(function (data){
                                if(data.hasOwnProperty("message")){
                               
                                }
                                else{
                                  if(data !=null && typeof data !=="undefined"){
                                     if(data.status !="ZERO_RESULTS"){
                                           
                                        }
                                }
                                                       
                              
                              }
                      },function (message) {
                      $scope.displayUSGraph();
                    });
    }

    
});
mainapp.filter('customCurrency', ["$filter", function ($filter) {       
  return function(amount, currencySymbol){
     var currency = $filter('currency');         

     if(amount<0){
        return currency(amount, currencySymbol).replace("(", "-").replace(")", ""); 
     }

     return currency(amount, currencySymbol);
  };

}]);