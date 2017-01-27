
mainapp.controller('MapViewController', ['$scope', '$rootScope','$location','dataServ','webServiceCall','$http', function ($scope, $rootScope,$location,dataServ,webServiceCall,$http) {


 $scope.closeTerms();
$rootScope.closePrivecy();
$rootScope.closeConatctUs();
$scope.closeFeedBack(); 

$scope.thankspopup=false;
    $("#bottomlinks").removeClass("fixfooter");
    $scope.showPopupValue=false;
    $scope.showUs=true;
    $scope.checkUS = false;
    $scope.hospitalAttributeData={};
    $rootScope.User = sessionStorage.userVal;
    $scope.stateHosDiv=false;
    $rootScope.displayMessage="Connecting to Server";

     $scope.showHosCheckbox=true;
     
    $scope.setMapTierWithHospital=function()
    {
       

       if($rootScope.tierStat==="2")
       {

           $scope.displayTier2();
           $scope.tier2=true;
       }

        else if($rootScope.tierStat==="1")
       {

           $scope.displayTier1();
           
       }

      else
       {

           $scope.displayUSGraph();
           
       }

    }


   
    $scope.hosptialAtrribute=false;
    $scope.tier="us";
    
      $scope.demo =function(hospitalName,lat,lg){
      
      $scope.Gerneral=true;
      $scope.hosptialAtrribute=true;
      $scope.Afillation=false;
      $scope.HospitalResources=false;
      $scope. medicare=false;
      $scope. FinancialMatrics=false;
      $scope.newVal=dataServ.getSliderVal();
      $scope.newCheckboxVal=dataServ.getCheckboxVal();
      
      


      var httpRequest =$http({
            method: 'GET',
             url:webserviceURL+'hospital?hname='+hospitalName+'&lat='+lat+'&long='+lg,
            headers: {
              'Authorization': 'Basic ' + btoa($rootScope.User+':'+$rootScope.password),
                 'Content-Type':'application/json'
                     }

        }).success(function(data) {
          $scope.hospitalAttributeData=data;
            $scope.$watch('hospitalAttributeData.numberBeds', function (newValue, oldValue) {
             dataServ.setSliderVal(newValue);
             $scope.newVal=dataServ.getSliderVal();
         
           });

          $scope.ACOAffiliation="NA";
          $scope.CINAffiliation="NA";
          $scope.programId="NA";
          $scope.patientDiscount="NA";
          $scope.netMedicareRev="NA";
          $scope.netMedicaidRev="NA";
          $scope.TotalRevenue="NA";
          $scope.pctPatientDis="NA"
          $scope.netPatientRev="NA";  
      
      });
   },
      $scope.demo1 =function(){
          $scope.hosptialAtrribute=false;

    },
    $scope.toggleTab1=function(){
     $scope.Gerneral=!$scope.Gerneral;
     $scope.Afillation=false;
     $scope.HospitalResources=false;
     $scope. medicare=false;
      $scope. FinancialMatrics=false;


    },  
     $scope.toggleTab2=function(){
     $scope.Afillation=! $scope.Afillation;
     $scope.Gerneral=false;
     $scope.HospitalResources=false;
     $scope. medicare=false;
     $scope. FinancialMatrics=false;
     $scope. FinancialMatrics=false;
   
    },
    $scope.toggleTab3=function(){
     $scope. HospitalResources=! $scope.HospitalResources;
     $scope.Gerneral=false;
     $scope.Afillation=false;
     $scope. medicare=false;
     $scope. FinancialMatrics=false;
   
   
    },
     $scope.toggleTab4=function(){
     $scope. medicare=! $scope.medicare;
     $scope.Gerneral=false;
     $scope.Afillation=false;
     $scope. HospitalResources=false;
     $scope. FinancialMatrics=false;
   
    },
      
     $scope.toggleTab5=function(){
     $scope. FinancialMatrics=! $scope.FinancialMatrics;
     $scope.Gerneral=false;
     $scope.Afillation=false;
     $scope. HospitalResources=false;
     $scope. medicare=false;
  },


$scope.checkUS=true;                       

$scope.usChecked = function(){
    
      $scope.tier="us";
      $scope.tier2=true;
      $scope.tier3=false;
      $scope.showHosCheckbox=true;
      sessionStorage.setItem("tier","state");
      $scope.stateHosDiv=false;
        $scope.disableShowData=true;
        $scope.showUs=true;
        $scope.checkUS = true;
        $rootScope.mapviewFilterClass="mapview-filter";
            
              var ageData,
              diseaseData,
              healthData,
              yearData,
              noOfBedsData,
              mgntDesigData,
              orgTransplantData,
              canseAccreditnData,
                    soleCommunityData,
                    academicMedicalData,
                    councilTeachingData,
                    HHIData;
              if($rootScope.filterData.selectAgemodel == ""){
                        $scope.ErrorPopUp=true;
                  $scope.errorMessage = "Please Select Age Group(s)";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                }
                else{

                  if($rootScope.filterData.selectHealthModel == ""){
                    $scope.ErrorPopUp=true;
                  $scope.errorMessage = "Please Select Health Plan(s)";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                  }
                  else{ 
                     $rootScope.displayMessage="Connected..Loading Response..";
     
                     showLoader();
                    $scope.mapAgeDetails="";
              if($rootScope.filterData.yearData=="5-year"){
                
                  $scope.year ="5";
              }
              else if($rootScope.filterData.yearData=="10-year"){
                  $scope.year ="10";
              }
              else{
                  $scope.year ="0";
              }

              for(var i=0; i<$rootScope.filterData.selectAgemodel.length;i++){
                if(!ageData){
                  if($rootScope.filterData.selectAgemodel[0].id=="All Age"){
                    ageData="1,2,3,4";
                    $scope.mapAgeDetails="All";
                  }
                  else if($rootScope.filterData.selectAgemodel[0].id=="1"){
                    ageData="1";
                    $scope.mapAgeDetails="0-17";
                  }
                  else if($rootScope.filterData.selectAgemodel[0].id=="2"){
                    ageData="2";
                    $scope.mapAgeDetails="18-34";
                  }
                  else if($rootScope.filterData.selectAgemodel[0].id=="4"){
                    ageData="3";
                    $scope.mapAgeDetails="35-64";
                  }
                  else{
                    ageData="4";
                    $scope.mapAgeDetails="65 & Over";
                  }
                  
                  
                  
                }
                else{
                  if($rootScope.filterData.selectAgemodel[i].id=="All Age"){
                    ageData=ageData + ',' + "1,2,3,4";
                    var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    
                      $scope.mapAgeDetails="All";
                     
                  
                    
                    
                  }
                  else if($rootScope.filterData.selectAgemodel[i].id=="1"){
                    ageData=ageData + ',' + "1";
                    var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');

                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                         break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                       $scope.mapAgeDetails=$scope.mapAgeDetails + ',' +"0-17";
                     }
                    }
                     
                  }
                  else if($rootScope.filterData.selectAgemodel[i].id=="2"){
                    ageData=ageData + ',' + "2";
                   var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    
                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                         break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                     $scope.mapAgeDetails=$scope.mapAgeDetails + ',' +"18-34";
                     
                     }
                    }
                     
                  }
                  else if($rootScope.filterData.selectAgemodel[i].id=="4"){
                    ageData=ageData + ',' + "3";
                    var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                        break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                       $scope.mapAgeDetails=$scope.mapAgeDetails + ',' + "35-64";
                       
                     }
                    }
                  
                  }
                  else{
                    ageData=ageData + ',' + "4";
                   var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                        break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                      $scope.mapAgeDetails=$scope.mapAgeDetails + ',' +"65 & Over";
                     }
                    }
                    
                  }
                  
                }
              }

              


              diseaseData=$rootScope.filterData.selectDiseasemodel;
              sessionStorage.setItem("diseaseModel",$rootScope.filterData.selectDiseasemodel);

              for(var i=0; i<$rootScope.filterData.selectHealthModel.length;i++){
                if(!healthData){
                  healthData=$rootScope.filterData.selectHealthModel[0].id;
                }
                else{
                  healthData=healthData + ',' + $rootScope.filterData.selectHealthModel[i].id;
                }
              }
              
              try{

             
                var url=webserviceURL+'getPopulation?gender='+$rootScope.filterData.selectGenderModel+'&age='+ageData+'&state=All&years='+$scope.year+'&disease='+$rootScope.filterData.selectDiseasemodel+'&insurancetype='+healthData;


                webServiceCall.getfilteredData(url,btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
                        if(data.hasOwnProperty("message")){
                         
                        }
                        else{
                        if(data !=null && typeof data !=="undefined"){
                           if(data.status !="ZERO_RESULTS"){
                            $scope.filteredPopNDiseaseCount=data;
                            $rootScope.thirdmaxDiseaseDensity=data[0].thirdmaxDiseaseDensity;  
                            $rootScope.secondmaxDiseaseDensity=data[0].secondmaxDiseaseDensity;
                             sessionStorage.setItem("filterPopNDiseaseData",JSON.stringify($scope.filteredPopNDiseaseCount));
                            
                          }
                      }
                    
                    var firUrl=webserviceURL+'gethospitalview';
                      var nullVar = $rootScope.filterData.hospOwnership;

                      
                    
                      var secUrl='?numberBeds='+$rootScope.filterData.sliderVal+'&numberBedsTo='+$rootScope.filterData.sliderValMax+"&academicMedicalCenter_boolean="+$rootScope.filterData.academicMedi+'&soleCommunityHospital_boolean='+$rootScope.filterData.soleComm+'&hospitalOwnership='+$rootScope.filterData.hospOwnership+'&magnetDesignation_boolean='+$rootScope.filterData.magntDesig+'&organTransplantNetwork_boolean='+$rootScope.filterData.organTrans+'&cancerAccreditation_boolean='+$rootScope.filterData.canseAccred+'&councilTeachingMembership_boolean='+$rootScope.filterData.councilMeet+'&hhi_boolean='+$rootScope.filterData.HHI;
                                                                         if(sessionStorage.hospiChar){
                                                                         var urlHosData = firUrl + secUrl;
                                                                         }
                                                                         else{
                                                                         var urlHosData = firUrl;
                                                                         }
                      webServiceCall.getfilteredData(urlHosData,btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
                          if(data.hasOwnProperty("message")){
                          
                        }
                        else{
                        if(data !=null && typeof data !=="undefined"){
                           if(data.status !="ZERO_RESULTS"){
                            $scope.filteredHosDataUS=data;
                           }
                      }
                   
                     
                      sessionStorage.setItem("tier","us");
                    
                     if($rootScope.tierStat==="2")
       {

           $scope.displayTier2("us");
           $scope.tier2=true;
       }

        else if($rootScope.tierStat==="1")
       {

           $scope.displayTier1("us");
           
       }

      else
       {

           $scope.displayUSGraph("us");
           
       }

                    }
                      },function (message) {
                        $scope.displayUSGraph("us");
                        });

                     }   
                        
                        
                    }, function (message) {
                        $scope.displayUSGraph("us");
                        });
    if($rootScope.filterData.selectGenderModel == '1,2'){
    $rootScope.genderData = 'All genders';
    }
    else if($rootScope.filterData.selectGenderModel == '1'){
      $rootScope.genderData = 'Males';
    }
    else{
      $rootScope.genderData = 'Females';
    }
    if($rootScope.filterData.yearData == "Current Year"){
      $scope.mapYearDetails = ' Current Year Estimates';
      sessionStorage.setItem("yearDetails",$scope.mapYearDetails);

    }
    else if($rootScope.filterData.yearData == "5-year"){
      $scope.mapYearDetails = ' 5 Year Projections';
       sessionStorage.setItem("yearDetails",$scope.mapYearDetails);
    }
    else{
      $scope.mapYearDetails = ' 10 Year Projections';    
       sessionStorage.setItem("yearDetails",$scope.mapYearDetails);
    }
    if($rootScope.filterData.selectDiseasemodel == "All Disease"){
        $scope.mapDiseaseDetails="Heart Disease and Stroke";
    }
    else{
         $scope.mapDiseaseDetails=$rootScope.filterData.selectDiseasemodel;
    }
            }catch(e){
              sessionStorage.setItem("tier","us");
              $scope.displayUSGraph("us");

            }
               
        }       
      }   
    }
    $scope.showmenuvalue=true;
    $scope.showPopup =function(){
            
       sessionStorage.setItem("hospiChar","true");
      $scope.showPopupValue=!$scope.showPopupValue;
    },
    $scope.hidePopup =function(){
      $scope.showPopupValue=!$scope.showPopupValue;
    },
    $scope.showorhidemenu =function(){
      
      
      if($scope.showmenuvalue){
        $scope.showmenuvalue=!$scope.showmenuvalue;
        
        $(".collpse-menu").css("left", '-25px');
        $('.collpse-menu').css("background-image","url('images/leftArrow.png')");
      }else{
        $scope.showmenuvalue=!$scope.showmenuvalue;
       
        $(".collpse-menu").css("left", '-23px');
        $('.collpse-menu').css("background-image","url('images/rightArrow.png')");
      }
      
    },
    $scope.mapAgeDetails="All";
 $rootScope.genderData = 'All Genders'; 
 $scope.mapDiseaseDetails="Heart Disease and Stroke";   
   
    $scope.mapYearDetails = ' Current Year Estimates';
 
    $scope.ErrorPopUp=false;
    
    $scope.showData=function(){
      
           $scope.checkUS = false;
         $scope.showUs=false;
         $scope.tier="state";
       
    
            
              var ageData,
              diseaseData,
              healthData,
              yearData,
              noOfBedsData,
              mgntDesigData,
              orgTransplantData,
              canseAccreditnData,
                    soleCommunityData,
                    academicMedicalData,
                    councilTeachingData,
                    HHIData;

                    $scope.mapAgeDetails="";
              
              if(!$rootScope.filterData.zipCode){
                  $scope.ErrorPopUp=true;
                  $scope.errorMessage = "Please Enter Zip Code or Select US/State View.";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
              }
              else{
                if($rootScope.filterData.selectAgemodel == ""){
                        $scope.ErrorPopUp=true;
                  $scope.errorMessage = "Please Select Age Group(s)";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                }
                else{

                  if($rootScope.filterData.selectHealthModel == ""){
                    $scope.ErrorPopUp=true;
                  $scope.errorMessage = "Please Select Health Plan(s)";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                  }
                  else{ 
                     $rootScope.displayMessage="Connecting to Server..";  
                       showLoader();
                        
              try{      if($rootScope.filterData.yearData=="5-year"){
                
                  $scope.year ="5";
              }
              else if($rootScope.filterData.yearData=="10-year"){
                  $scope.year ="10";
              }
              else{
                  $scope.year ="0";
              }

              for(var i=0; i<$rootScope.filterData.selectAgemodel.length;i++){
                if(!ageData){
                  if($rootScope.filterData.selectAgemodel[0].id=="All Age"){
                    ageData="1,2,3,4";
                    $scope.mapAgeDetails="All";
                  }
                  else if($rootScope.filterData.selectAgemodel[0].id=="1"){
                    ageData="1";
                    $scope.mapAgeDetails="0-17";
                  }
                  else if($rootScope.filterData.selectAgemodel[0].id=="2"){
                    ageData="2";
                    $scope.mapAgeDetails="18-34";
                  }
                  else if($rootScope.filterData.selectAgemodel[0].id=="4"){
                    ageData="3";
                    $scope.mapAgeDetails="35-64";
                  }
                  else{
                    ageData="4";
                    $scope.mapAgeDetails="65 & Over";
                  }
                  
                  
                  
                }
                else{
                   if($rootScope.filterData.selectAgemodel[i].id=="All Age"){
                    ageData=ageData + ',' + "1,2,3,4";
                    var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    
                      $scope.mapAgeDetails="All";
                     
                  
                    
                    
                  }
                  else if($rootScope.filterData.selectAgemodel[i].id=="1"){
                    ageData=ageData + ',' + "1";
                    var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');

                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                         break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                       $scope.mapAgeDetails=$scope.mapAgeDetails + ',' +"0-17";
                     }
                    }
                     
                  }
                  else if($rootScope.filterData.selectAgemodel[i].id=="2"){
                    ageData=ageData + ',' + "2";
                   var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    
                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                         break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                     $scope.mapAgeDetails=$scope.mapAgeDetails + ',' +"18-34";
                     
                     }
                    }
                     
                  }
                  else if($rootScope.filterData.selectAgemodel[i].id=="4"){
                    ageData=ageData + ',' + "3";
                    var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                        break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                       $scope.mapAgeDetails=$scope.mapAgeDetails + ',' + "35-64";
                       
                     }
                    }
                  
                  }
                  else{
                    ageData=ageData + ',' + "4";
                   var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                        break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                      $scope.mapAgeDetails=$scope.mapAgeDetails + ',' +"65 & Over";
                     }
                    }
                    
                  }
                  
                }
              }

              for(var i=0; i<$rootScope.filterData.selectDiseasemodel.length;i++){
                if(!diseaseData){
                  diseaseData=$rootScope.filterData.selectDiseasemodel[0].id;
                }
                else{
                  diseaseData=diseaseData + ',' + $rootScope.filterData.selectDiseasemodel[i].id;
                }
              }

              for(var i=0; i<$rootScope.filterData.selectHealthModel.length;i++){
                if(!healthData){
                  healthData=$rootScope.filterData.selectHealthModel[0].id;
                }
                else{
                  healthData=healthData + ',' + $rootScope.filterData.selectHealthModel[i].id;
                }
              }    

                var url=webserviceURL+'getPopulation?gender='+$rootScope.filterData.selectGenderModel+'&age='+ageData+'&zipcode='+$rootScope.filterData.zipCode+'&years='+$scope.year+'&disease='+$rootScope.filterData.selectDiseasemodel+'&insurancetype='+healthData;
                webServiceCall.getfilteredData(url,btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
                        if(data.hasOwnProperty("message")){
                        if(data.message=="Invalid Zipcode"){
                          hideLoader();
                        $scope.ErrorPopUp=true;
                        $scope.errorMessage = "Invalid Zipcode";
                        setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                        }
                        else{
                        $scope.ErrorPopUp=true;
                        hideLoader();
                        $scope.errorMessage = "Server Error";
                        setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                        }
                        }
                        else{
                        $rootScope.displayMessage="Connected..Loading Response..";  
                       showLoader();
                             sessionStorage.setItem("showDataCalled",true);
        
                        if(data !=null && typeof data !=="undefined"){
                           if(data.status !="ZERO_RESULTS"){
                            $scope.filteredPopNDiseaseCount=data;

                            sessionStorage.setItem("filterPopNDiseaseData",JSON.stringify(data));
                            $rootScope.selectedState = data[0].state;
                            $rootScope.thirdmaxDiseaseDensity=data[0].thirdmaxDiseaseDensity;  
                            $rootScope.secondmaxDiseaseDensity=data[0].secondmaxDiseaseDensity;
                            $rootScope.filterData.stateSelect=$rootScope.selectedState;
                            sessionStorage.setItem("selectedstate",$rootScope.filterData.stateSelect);
                          }
                      }
                      var a =$rootScope.selectedState;
                      var b=$rootScope.filterData.sliderVal;
                      var stateUrl=webserviceURL+'statecentral?abbr='+a;
                      var zipcodeurl="https://maps.googleapis.com/maps/api/geocode/json?address="+$rootScope.filterData.zipCode;
                     
                      webServiceCall.getfilteredData(stateUrl,btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
                        if(data.hasOwnProperty("message")){
                        // toaster.pop('error',"Invalid Zip Code");
                      }
                      else{
                        if(data !=null && typeof data !=="undefined"){
                           if(data.status !="ZERO_RESULTS"){
                              sessionStorage.setItem('stateCord',JSON.stringify(data));
                              
                           }
                      }
                       var firUrl=webserviceURL+'gethospitalview?state='+a;
                      var nullVar = $rootScope.filterData.hospOwnership;

                      
                  
                      var secUrl="&numberBeds="+$rootScope.filterData.sliderVal+"&numberBedsTo="+$rootScope.filterData.sliderValMax+"&academicMedicalCenter_boolean="+$rootScope.filterData.academicMedi+'&soleCommunityHospital_boolean='+$rootScope.filterData.soleComm+'&hospitalOwnership='+$rootScope.filterData.hospOwnership+'&magnetDesignation_boolean='+$rootScope.filterData.magntDesig+'&organTransplantNetwork_boolean='+$rootScope.filterData.organTrans+'&cancerAccreditation_boolean='+$rootScope.filterData.canseAccred+'&councilTeachingMembership_boolean='+$rootScope.filterData.councilMeet+'&hhi_boolean='+$rootScope.filterData.HHI;
                                                                         if(sessionStorage.hospiChar){
                                                                         var urlHosData = firUrl + secUrl;
                                                                         }
                                                                         else{
                                                                         var urlHosData = firUrl;
                                                                         }
                                                                        


                      webServiceCall.getfilteredData(urlHosData,btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
                        if(data.hasOwnProperty("message")){
                        
                      }
                      else{
                        if(data !=null && typeof data !=="undefined"){
                           if(data.status !="ZERO_RESULTS"){
                            $scope.filteredHosData=data;
                           
                            sessionStorage.setItem("filterHospitalData",JSON.stringify(data));
                             webServiceCall.hitGoogleApi(zipcodeurl).then(function (data){
                                if(data.hasOwnProperty("message")){
                               
                                }
                                else{
                                  if(data !=null && typeof data !=="undefined"){
                                     if(data.status !="ZERO_RESULTS"){
                                           var lat = data.results[0].geometry.location.lat;
                                           var longi = data.results[0].geometry.location.lng;
                                           sessionStorage.setItem('lat',lat);
                                           sessionStorage.setItem('long',longi);
                                             
                                        }
                                }
                                                        if($rootScope.filterData.selectGenderModel == '1,2'){
    $rootScope.genderData = 'All Genders';
    }
    else if($rootScope.filterData.selectGenderModel == '1'){
      $rootScope.genderData = 'Males';
    }
    else{
      $rootScope.genderData = 'Females';
    }
    if($rootScope.filterData.yearData == "Current Year"){
      $scope.mapYearDetails = ' Current Year Estimates';
      sessionStorage.setItem("yearDetails",$scope.mapYearDetails);

    }
    else if($rootScope.filterData.yearData == "5-year"){
      $scope.mapYearDetails = ' 5 Year Projections';
      sessionStorage.setItem("yearDetails",$scope.mapYearDetails);
    }
    else{
      $scope.mapYearDetails = ' 10 Year Projections'; 
      sessionStorage.setItem("yearDetails",$scope.mapYearDetails); 
    }
      $rootScope.mapviewFilterClass="mapview-filter";
                      $rootScope.showMark="true";
                      sessionStorage.setItem("tier","state");
                        $scope.showHosCheckbox=true;
                    
                       if($rootScope.tierStat==="2")
       {

           $scope.displayTier2("state");
           $scope.tier2=true;
       }

        else if($rootScope.tierStat==="1")
       {

           $scope.displayTier1("state");
           
       }

      else
       {

           $scope.displayUSGraph("state");
           
       }
                              
                              }
    if($rootScope.filterData.selectDiseasemodel == "All Disease"){
        $scope.mapDiseaseDetails="Heart Disease and Stroke";
    }
    else{
         $scope.mapDiseaseDetails=$rootScope.filterData.selectDiseasemodel;
    }
                      },function (message) {
                     sessionStorage.setItem("tier","state");   
                      $scope.displayUSGraph();
                        });
   
                           }
                      }
                 
                    
                    }
        if($scope.showHospitalLayer){
         if(sessionStorage.filterHospitalData.length == 2){

                                  $scope.ErrorPopUp=true;
                                  $scope.errorMessage = "No Hospital Records Found";
                                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);

                }
        }
              
                      },function (message) {
                        sessionStorage.setItem("tier","state");
                      $scope.displayUSGraph();
                        });
                     
                    }
                      },function (message) {
                        sessionStorage.setItem("tier","state");
                      $scope.displayUSGraph();
                        });

                     
                     }   
                        
                        
                    }, function (message) {
                      sessionStorage.setItem("tier","state");
                        $scope.displayUSGraph();
                        });
    
            }catch(e){
              sessionStorage.setItem("tier","state");
              $scope.displayUSGraph("state");
            }
              }

            }
          }                
              
    }



$scope.slider_visible_bar = {
   value: 100,
    minValue: 400,
   options: {
     floor: 0,
     ceil: 10000,

     showSelectionBar: true
   }
 };
$scope.$watch('slider_visible_bar.value', function (newValue, oldValue) {
       dataServ.setSliderVal(newValue);

   });

// Map
      $scope.displayTier1=function(us)
      
         {
          sessionStorage.setItem("tierVal","tier1");
            $scope.popLegends=true;
            if($scope.showHospitalLayer===true)
      {
        
        $scope.tier3=true;
      }

       if($scope.showHospitalLayer===false)

      {
        
        $scope.tier3=false;
      }

      $scope.tier2=false;

             $rootScope.tierStat="1";
          var myEl = angular.element( document.querySelector( '#tier_i' ) );
           myEl.css('background-color','#007f00');
           myEl.css('color','white');
           myEl.css('font-weight','bold');

            var myE2 = angular.element( document.querySelector( '#tier_ii' ) );
               myE2.css('background-color','#3C73BA ');
               myE2.css('color','white');
                myE2.css('font-weight','normal');
          
           var myE3 = angular.element( document.querySelector( '#tier_iii' ) );
           myE3.css('background-color','#3C73BA ');
           myE3.css('color','white');
            myE3.css('font-weight','normal');


          if(sessionStorage.tier==="us")
          {
             sessionStorage.setItem("tier","us");
          }
          else
          {
            sessionStorage.setItem("tier","state");
          }

            $scope.showLayer=false;
        if(sessionStorage.tier==="us")

        {
         $rootScope.displayMessage="Fetching Map Data..";
         showLoader();
        
         $scope.tier="us";
         
              var width =1000,
                    height = 500;
                    scale = 1;

                var projection = d3.geo.mercator()
                                .scale(800)
                                .center([-105, 37.5])
                                .translate([width / 2, height/2]);

                var path = d3.geo.path()
                           .projection(projection);

                var zoom = d3.behavior.zoom()
                             .scale(1)
                             .scaleExtent([1, 200])
                             .on("zoom", function(d) {
                 d3.select("#all-g")
                              .attr("transform", "translate(" + d3.event.translate
                               + ")scale(" + d3.event.scale + ")");
            scale = d3.event.scale;
            svg.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
        });
         svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 3 / d3.event.scale;
         return w;

        });
        svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 3 / d3.event.scale;
         return h;

        });

           
        });
        d3.select("svg").remove();
        d3.select("#all-g").remove();




    var div = d3.select("#mapview-leftcontroller").append("div")   
      .attr("class", "tooltip")               
      .style("opacity", 0);  

       var color = d3.scale.threshold()
        .domain([1000,5000,10000,200000])
        .range(["#d3d3d3", "#c6c6c6", "#b9b9b9","#acacac"])
         
        
        

        var ext_color_domain = [1000, 5000, 10000,200000]
    



       var  File="";
         
         
        var svg = d3.select("#mapview-leftcontroller").append("svg")
        .attr("width",width)
        .attr("height",height)
        .style("padding-top","10px")

        .call(zoom)
        .append("g").attr("id", "all-g");

      
        File="topojson/zips_us_topo.json";
        

               if($scope.showHospitalLayer===true)
      {  

        if(($scope.filteredHosDataUS===undefined) || ($scope.filteredHosDataUS === null))
        {

          
         queue()
        .defer(d3.json,File)
        .defer(d3.json,"topojson/AllHospitalsUS.json")
        .await(ready);
        }

        else

        {
             if($scope.filteredHosDataUS==""){
              if($scope.filteredHosDataUS.length<=0){
          
                $scope.ErrorPopUp=true;
                  $scope.errorMessage = "No Hospital Records Found";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);

           }
             queue()
      
        .defer(d3.json,File)
        .await(ready);
          }
          else{
                  if($rootScope.usmap===undefined)
                   {


            var httpRequest =$http({
            method: 'GET',
             url:'topojson/zips_us_topo.json',
            headers: {
                 'Content-Type':'application/json'
                     }

        }).success(function(data) {
            
              $rootScope.usmap=data;
                queue()
        .defer(d3.json,$rootScope.usmap)
        .defer(d3.json,$scope.filteredHosDataUS)
        .await(ready);
           });


      }

      else

      {
        queue()
        .defer(d3.json,$rootScope.usmap)
        .defer(d3.json,$scope.filteredHosDataUS)
        .await(ready);

        

      }
         
        }
       
        
     

        }
       
      }

      else

      {

        
        queue()
      
        .defer(d3.json,File)

        .await(ready);
      
      }
        

        function zoomed() {
   svg.attr("transform",
       "translate(" + zoom.translate() + ")" +
       "scale(" + zoom.scale() + ")"
   );

     svg.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
        });
         svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 3 / zoom.scale();
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 3 / zoom.scale();
         return h;

        });

}

function interpolateZoom (translate, scale) {
   var self = this;
   return d3.transition().duration(350).tween("zoom", function () {
       var iTranslate = d3.interpolate(zoom.translate(), translate),
           iScale = d3.interpolate(zoom.scale(), scale);
       return function (t) {
           zoom
               .scale(iScale(t))
               .translate(iTranslate(t));
           zoomed();
       };
   });
}

// zoom function

function zoomClick() {
   var clicked = d3.event.target,
       direction = 1,
       factor = 0.2,
       target_zoom = 1,
       center = [width / 2, height / 2],
       extent = zoom.scaleExtent(),
       translate = zoom.translate(),
       translate0 = [],
       l = [],
       view = {x: translate[0], y: translate[1], k: zoom.scale()};

   d3.event.preventDefault();
   direction = (this.id === 'zoom_in') ? 1 : -1;
   target_zoom = zoom.scale() * (1 + factor * direction);

   if (target_zoom < extent[0] || target_zoom > extent[1]) { return false; }

   translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
   view.k = target_zoom;
   l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

   view.x += center[0] - l[0];
   view.y += center[1] - l[1];

   interpolateZoom([view.x, view.y], view.k);
}

     function ready(error,usjson,ushos,usdata) {

       $rootScope.displayMessage="Generating Maps..";
       showLoader();

        var rateById = {};
        var populationById={};
        var diseaseById={};
        var diseaseDensityByID={};
     

        if(usdata===undefined)
        {
          usdata=$scope.filteredPopNDiseaseCount;
        }

        if(usjson===undefined)
        {
          usjson=$rootScope.usmap;
          
        }
        else{
          $rootScope.usmap=usjson;
        }

        if(ushos===undefined)
        {

          ushos=$scope.filteredHosDataUS;
        }
 

       var  usDataVar=JSON.parse(sessionStorage.filterPopNDiseaseData);
       var usData= usDataVar[0];
      
        usData.populationCount.forEach(function(d) {rateById[d.zipcode] = +d.popCount;
                                                    populationById[d.zipcode] = d.popCount;
                                                  
                                                   }
                                                    );
        
        
        d3.select("#all-g")
          .append("g").attr("id", "path-g").selectAll("path")
          .data(topojson.object(usjson,usjson.objects.zip_codes_for_the_usa)
          .geometries)
          .enter()
          .append("path")
          .style("fill", function(d) {


               if(populationById[d.properties.zip]===undefined)
            {
              return "#fff"
            }
            else
            {
           return color(rateById[d.properties.zip]); } 








            })
          .attr("stroke", "#999")
          .attr("stroke-width", 0.5/scale)
          .attr("d", path)
          .style("z-index","1")
          .on("mouseover", function(d) {

              if((populationById[d.properties.zip])===undefined)
                {
                   
                  populationById[d.properties.zip]="Not Available";

                }
        

        d3.select(this).transition().duration(300)
      
            div.transition().duration(300)
               .style("opacity", 1)
             div.html("<strong>ZipCode :</strong> "+d.properties.zip+"<br/><strong>City :</strong> "+d.properties.name+"<br/><strong>State : </strong>"+d.properties.state+"<br/><strong>Population Count: "+populationById[d.properties.zip])
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
       
        div.transition().duration(300)
        .style("opacity", 0);
      });


       if($scope.showHospitalLayer===true)
       {

         

        svg.selectAll("circle")
       .data(ushos)
       .enter()
       .append("circle")
        .attr("r",2)
        .attr("stroke","black")
        .attr("stroke-width","0.2px")
        .style("fill",function(d){

                                     var color;
                                    if(d.numberBeds <=100)
                                    {
                                     
                                     color="#afc4ff";
                                       
                                    }
                                    if(d.numberBeds >100)
                                    {
                                      if(d.numberBeds <=300)
                                      {
                                    
                                      color="#6583d9";
                                      
                                     }
                                    }

                                    if(d.numberBeds > 300 )
                                    {
                                     
                                      color="#082c95";
                                     
                                    }

                                     return color;

                                      })
       .style("cursor","pointer")
       .attr("transform", function(d) {return "translate(" + projection([d.hqLongitude,d.hqLatitude]) + ")";})
      
        .on("click", function(d) {
      
                $scope.demo(d.hospitalName,d.hqLatitude,d.hqLongitude);

   
      
                             })
          .on("mouseout", function() {
          d3.select(this)
            .transition().duration(300)
            .style({'stroke-opacity':1,'stroke':'#999'});   
         
                                  });



  
           }
    

          
         

        d3.selectAll('button').on('click', zoomClick);  
          
      
              hideLoader();
        
    };


  }

        else


        {
          $rootScope.displayMessage="Fetching Map Data..";
           showLoader();
           sessionStorage.setItem("tier","state");
           
          
            File="topojson/"+sessionStorage.selectedstate+".json";
            var width =1000,
            height = 500;
          scale = 1;


           var coordinates=JSON.parse(sessionStorage.stateCord);


        var projection = d3.geo.mercator()
              .scale(coordinates.scale)
              .center([coordinates.x_axis, coordinates.y_axis])
              .translate([width / 2, 500]);

        var path = d3.geo.path()
                    .projection(projection);

        var zoom = d3.behavior.zoom()
      .scale(1)
      .scaleExtent([1, 200])
      .on("zoom", function(d) {
       
          d3.select("#all-g")
              .attr("transform", "translate(" + d3.event.translate
                + ")scale(" + d3.event.scale + ")");
          scale = d3.event.scale;


                 d3.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/scale+")";
        });  
                 
                 svg.selectAll(".mark")
                 .attr("transform", function(d) {
                   var t = d3.transform(d3.select(this).attr("transform")).translate;
                   return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
                 });
         svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 8.5 / d3.event.scale;
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 8.5 / d3.event.scale;
         return h;

        });
 
      });

      d3.select("svg").remove();
        d3.select("#all-g").remove();


        var svg = d3.select("#mapview-leftcontroller").append("svg")
            .attr("width",width)
            .attr("height",height)
          
          .call(zoom)
            .append("g").attr("id", "all-g");
        
       var color = d3.scale.threshold()
        .domain([1000,5000,10000,200000])
        .range(["#d3d3d3", "#c6c6c6", "#b9b9b9","#acacac"])

        var ext_color_domain = [1000, 5000, 10000,200000]
   


        var div = d3.select("#mapview-leftcontroller").append("div")   
          .attr("class", "tooltip")               
          .style("opacity", 0);


      var c_scale = d3.scale.linear()
  .domain([0,100,800])
  .range(['#fbf545','#d18025','#a50505'])
  .interpolate(d3.interpolateRgb);


          var sf = [-122.417, 37.775],
              ny = [-74.0064, 40.7142];


               function zoomed() {
    svg.attr("transform",
     "translate(" + zoom.translate() + ")" +
     "scale(" + zoom.scale() + ")"
 );

          svg.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
        });  
          
          svg.selectAll(".mark")
          .attr("transform", function(d) {
            var t = d3.transform(d3.select(this).attr("transform")).translate;
            return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
          }); 

 svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 8.5 / zoom.scale();
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 8.5 / zoom.scale();
         return h;

        });

}

      function interpolateZoom (translate, scale) {
       var self = this;
       return d3.transition().duration(350).tween("zoom", function () {
           var iTranslate = d3.interpolate(zoom.translate(), translate),
               iScale = d3.interpolate(zoom.scale(), scale);
           return function (t) {
               zoom
                   .scale(iScale(t))
                   .translate(iTranslate(t));
               zoomed();
           };
       });
      }

      // zoom function


      function zoomClick() {
       var clicked = d3.event.target,
           direction = 1,
           factor = 0.2,
           target_zoom = 1,
           center = [width / 2, height / 2],
           extent = zoom.scaleExtent(),
           translate = zoom.translate(),
           translate0 = [],
           l = [],
           view = {x: translate[0], y: translate[1], k: zoom.scale()};

       d3.event.preventDefault();
       direction = (this.id === 'zoom_in') ? 1 : -1;
       target_zoom = zoom.scale() * (1 + factor * direction);

       if (target_zoom < extent[0] || target_zoom > extent[1]) { return false; }

       translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
       view.k = target_zoom;
       l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

       view.x += center[0] - l[0];
       view.y += center[1] - l[1];

       interpolateZoom([view.x, view.y], view.k);
      }

        var hosicon="";


                function zoomTo() {

                           var sf = [sessionStorage.long,sessionStorage.lat];  
                        
                          var point = projection(sf);
                          var scale=4;
                          return zoom
                          .translate([width / 2 - point[0] * scale, height / 2 - point[1] * scale])
                          .scale(scale);
                                                  }


      var drag = d3.behavior.drag()
        .on("drag", dragmove);

      function dragmove(d) {
      var x = d3.event.x+3;
      var y = d3.event.y+3;
      d3.select(this).attr("transform", function(d) {return "translate(" + projection([x,y]) + ")";});
      }   

if($scope.showHospitalLayer===true)
      {  
        if($scope.filteredHosData.length<=0){
           $scope.ErrorPopUp=true;
                  $scope.errorMessage = "No Hospital Records Found";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
        }
    }
      queue()
        .defer(d3.json, File)
        .await(ready2);

     function ready2(error, topology) {
          $rootScope.displayMessage="Generating Maps..";
       showLoader();
     
        var rateById = {};
        var populationById={};
        var diseaseById={};
        var diseaseDensityByID={};

         var stateDataVar=JSON.parse(sessionStorage.filterPopNDiseaseData);
            var stateData= stateDataVar[0];
          
         stateData.populationCount.forEach(function(d) {      


                            rateById[d.zipcode] = +d.popCount;
                            populationById[d.zipcode] = d.popCount;                                                       
                            diseaseById[d.zipcode] = +d.diseaseCount;
                            diseaseDensityByID[d.zipcode]=d.diseaseCount;


                                                      });
       
          
        
        d3.select("#all-g")
          .append("g").attr("id", "path-g").selectAll("path")
          .data(topojson.object(topology,(topology, topology.objects.geo))
          .geometries)
          .enter()
          .append("path")
          .style("fill", function(d) { 

              if((populationById[d.properties.ZCTA5CE10])===undefined) 
            {
              return "#fff"
            }
            else
            {
            return color(rateById[d.properties.ZCTA5CE10]); }
          })
          .attr("stroke", "#999")
          .attr("stroke-width", 0.5/scale)
          .attr("d", path)
          .style("opacity", 1)
          .on("mouseover", function(d) {
        

        d3.select(this).transition().duration(300)
     
            div.transition().duration(300)
               .style("opacity", 1)
            div.html("<strong>ZipCode :</strong> "+d.properties.ZCTA5CE10+"<br/><strong>Population Count : "+populationById[d.properties.ZCTA5CE10]+"</strong")
               .style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 30) + "px");
                                  })
               .on("mouseout", function() {
               d3.select(this)
                 .transition().duration(300)
  
               div.transition().duration(300)
                  .style("opacity", 0);
                                       });

 if($scope.showHospitalLayer===true)
      {  
        if($scope.filteredHosData.length>0){
     svg.selectAll("circle")
       .data($scope.filteredHosData)
       .enter()
       .append("circle")
        .attr("r",2)
        .attr("stroke","black")
        .attr("stroke-width","0.2px")
         .style("fill",function(d){

                                     var color;
                                    if(d.numberBeds <=100)
                                    {
                                     
                                     color="#afc4ff";
                                       
                                    }
                                    if(d.numberBeds >100)
                                    {
                                      if(d.numberBeds <=300)
                                      {
                                    
                                      color="#6583d9";
                                      
                                     }
                                    }

                                    if(d.numberBeds > 300 )
                                    {
                                     
                                      color="#082c95";
                                     
                                    }

                                     return color;

                                      })
       .style("cursor","pointer")
       .attr("transform", function(d) {return "translate(" + projection([d.hqLongitude,d.hqLatitude]) + ")";})
      
        .on("click", function(d) {
      
                $scope.demo(d.hospitalName,d.hqLatitude,d.hqLongitude);

   
      
                             })
          .on("mouseout", function() {
          d3.select(this)
            .transition().duration(300)
            .style({'stroke-opacity':1,'stroke':'#999'});   
          
                                  });
        }
        else{
           $scope.ErrorPopUp=true;
                  $scope.errorMessage = "No Hospital Records Found";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
        }

     }     
          
 
          
    
     if($rootScope.showMark=="true"){
     
         var marks = [{long:sessionStorage.long, lat:sessionStorage.lat}];


       d3.select("#all-g")
        .append("g").attr("id", "path-g").selectAll(".mark")
        .data(marks)
        .enter()
        .append("image")
        .attr('class','mark')
        .attr('width',"4%")
        .attr('height',"6%")
        .attr("xlink:href",'images/map2.png')
       
        .attr("transform", function(d) {return "translate(" + projection([d.long,d.lat]) + ")";})
        .on("mouseover", function(d) {
        

        d3.select(this).transition().duration(300).style({'stroke-opacity':1,'stroke':'#F00'});
            div.transition().duration(300)
               .style("opacity", 1)
            div.html("<strong>Searched Loaction (Zipcode) :"+$rootScope.filterData.zipCode+"</strong><br/><strong>Population Count : "+populationById[$rootScope.filterData.zipCode]+"</strong>")
               .style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 30) + "px");
                                  })
               .on("mouseout", function() {
               d3.select(this)
                 .transition().duration(300)
                 .style({'stroke-opacity':1,'stroke':'#999'});   
               div.transition().duration(300)
                  .style("opacity", 0);
                                       })
                 .on("click",zoomTo());
      }
        d3.selectAll('#zoom_in').on('click', zoomClick);
        d3.selectAll('#zoom_out').on('click', zoomClick);

          
        hideLoader();

        
    };




        }

         }

          $scope.displayTier2=function(us)
         {
          sessionStorage.setItem("tierVal","tier2");
             $scope.popLegends=false;
              if($scope.showHospitalLayer===true)
      {
        
        $scope.tier3=true;
      }

       if($scope.showHospitalLayer===false)

      {
        
        $scope.tier3=false;
      }

      $scope.tier2=true;


            $rootScope.tierStat="2";

             var myEl = angular.element( document.querySelector( '#tier_i' ) );

           myEl.css('background-color','#3C73BA ');
           myEl.css('color','white');
            myEl.css('font-weight','normal');

            var myE2 = angular.element( document.querySelector( '#tier_ii' ) );
            myE2.css('background-color','#007f00');
           myE2.css('color','white');
           myE2.css('font-weight','bold');

          
          var myE3 = angular.element( document.querySelector( '#tier_iii' ) );
           myE3.css('background-color','#3C73BA ');
           myE3.css('color','white');
            myE3.css('font-weight','normal');
var c_scale = d3.scale.linear()
  .domain([0,100,800])
  .range(['#fbf545','#d18025','#a50505'])
  .interpolate(d3.interpolateRgb);


            if(sessionStorage.tier==="us")

        {
            $rootScope.displayMessage="Fetching Map Data..";
            showLoader();
            var width =1000,
                    height = 500;
                    scale = 1;

               var projection = d3.geo.mercator()
                                .scale(800)
                                .center([-105, 37.5])
                                .translate([width / 2,height/2]);

                var path = d3.geo.path()
                           .projection(projection);

    var zoom = d3.behavior.zoom()
        .scale(1)
        .scaleExtent([1, 200])
        .on("zoom", function(d) {
            d3.select("#all-g")
                .attr("transform", "translate(" + d3.event.translate
                  + ")scale(" + d3.event.scale + ")");
            scale = d3.event.scale;
           
            svg.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.25/zoom.scale()+")";
        });
       
         svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 3 / d3.event.scale;
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 3 / d3.event.scale;
         return h;

        });
   
        });
        d3.select("svg").remove();
        d3.select("#all-g").remove();




    var div = d3.select("#mapview-leftcontroller").append("div")   
      .attr("class", "tooltip")               
      .style("opacity", 0);  

    
        var ext_color_domainDisease = [10,50,100,400]
        var legend_labelsDisease = ["<50 (Disease Density as by Zipcode wise Population)", "51-100", "101-400",">400"]



        var  File="";
         
         
          var svg = d3.select("#mapview-leftcontroller").append("svg")
        .attr("width",width)
        .attr("height",height)
         .style("padding-top","10px")

        .call(zoom)
        .append("g").attr("id", "all-g");

       
        File="topojson/zips_us_topo.json";
           if($scope.showHospitalLayer===true)
      {  

        if(($scope.filteredHosDataUS===undefined) || ($scope.filteredHosDataUS === null))
        {

          
         queue()
        .defer(d3.json,File)
        .defer(d3.json,"topojson/AllHospitalsUS.json")
        .await(ready);
        }

        else

        {
             if($scope.filteredHosDataUS==""){
              if($scope.filteredHosDataUS.length<=0){
          
                $scope.ErrorPopUp=true;
                  $scope.errorMessage = "No Hospital Records Found";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);

           }
             queue()
      
        .defer(d3.json,File)
        .await(ready);
          }
          else{
                        if($rootScope.usmap===undefined)
                   {


            var httpRequest =$http({
            method: 'GET',
             url:'topojson/zips_us_topo.json',
            headers: {
                 'Content-Type':'application/json'
                     }

        }).success(function(data) {
            
              $rootScope.usmap=data;
                queue()
        .defer(d3.json,$rootScope.usmap)
        .defer(d3.json,$scope.filteredHosDataUS)
        .await(ready);
           });

       

      }

      else

      {
               queue()
        .defer(d3.json,$rootScope.usmap)
        .defer(d3.json,$scope.filteredHosDataUS)
        .await(ready);

      }
         
        }
       
        
     

        }
       
      }

      else

      {

        
        queue()
      
        .defer(d3.json,File)

        .await(ready);
      
      }


         function zoomed() {
   svg.attr("transform",
       "translate(" + zoom.translate() + ")" +
       "scale(" + zoom.scale() + ")"
   );
   

    svg.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
        });
    svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 3 / zoom.scale();
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 3 / zoom.scale();
         return h;

        });

}

function interpolateZoom (translate, scale) {
   var self = this;
   return d3.transition().duration(350).tween("zoom", function () {
       var iTranslate = d3.interpolate(zoom.translate(), translate),
           iScale = d3.interpolate(zoom.scale(), scale);
       return function (t) {
           zoom
               .scale(iScale(t))
               .translate(iTranslate(t));
           zoomed();
       };
   });
}

// zoom function

function zoomClick() {
   var clicked = d3.event.target,
       direction = 1,
       factor = 0.2,
       target_zoom = 1,
       center = [width / 2, height / 2],
       extent = zoom.scaleExtent(),
       translate = zoom.translate(),
       translate0 = [],
       l = [],
       view = {x: translate[0], y: translate[1], k: zoom.scale()};

   d3.event.preventDefault();
   direction = (this.id === 'zoom_in') ? 1 : -1;
   target_zoom = zoom.scale() * (1 + factor * direction);

   if (target_zoom < extent[0] || target_zoom > extent[1]) { return false; }

   translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
   view.k = target_zoom;
   l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

   view.x += center[0] - l[0];
   view.y += center[1] - l[1];

   interpolateZoom([view.x, view.y], view.k);
}

     function ready(error,usjson,hosAll) {

      $rootScope.displayMessage="Generating Maps..";
      showLoader();

       
        if(usjson===undefined)
        {
          usjson=$rootScope.usmap;
        
        }
        else{
          $rootScope.usmap=usjson;
        }

        if(hosAll===undefined)
        {

          hosAll=$scope.filteredHosDataUS;
        }
         
        var rateById = {};
        var populationById={};
        var diseaseById={};
        var diseaseDensityByID={};

         var  usDataVar=JSON.parse(sessionStorage.filterPopNDiseaseData);
         var usData= usDataVar[0];
         var colorDisease = d3.scale.threshold()
        .domain([usDataVar[0].thirdmaxDiseaseDensity,usDataVar[0].secondmaxDiseaseDensity,usDataVar[0].firstmaxDiseaseDensity])
          .range(["#fbf545","#d18025", "#a50505"]); 
     

        usData.populationCount.forEach(function(d) 

                                                      {

                                                        populationById[d.zipcode]=d.populationCount;

                                                    diseaseById[d.zipcode] = +d.diseaseDensity;
                                                  
                                                    diseaseDensityByID[d.zipcode]=d.diseaseDensity;
                                                  
                                                   }
                                                    );


         d3.select("#all-g")
              .append("g").attr("id", "path-g").selectAll("path")
          .data(topojson.object(usjson,usjson.objects.zip_codes_for_the_usa)
          .geometries)
          .enter()
          .append("path")
          .style("fill", function(d) { 

           
              return "#bdbdbd";
            })
          
          .style("opacity","1")
          .attr("d", path)
          .on("click", function(d) {

             if((diseaseById[d.properties.zip])===undefined)
                {
                   
                  populationById[d.properties.zip]="Not Available";
                  diseaseDensityByID[d.properties.zip]="Not Available";

                }
        

        d3.select(this).transition().duration(300)
       
            div.transition().duration(300)
                            .style("opacity", 1)
            div.html("<strong>ZipCode :</strong> "+d.properties.zip+"<br/><strong>City :</strong> "+d.properties.name+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.zip])
                           .style("left", (d3.event.pageX) + "px")
                           .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
        .style({'stroke-opacity':1,'stroke':'#999'});   
        div.transition().duration(300)
        .style("opacity", 0);
      })
      .on("mouseover", function(d) {

         if((diseaseById[d.properties.zip])===undefined)
                {
                   
                  populationById[d.properties.zip]="Not Available";
                  diseaseDensityByID[d.properties.zip]="Not Available";

                }
        

        d3.select(this).transition().duration(300)
       
            div.transition().duration(300)
                            .style("opacity", 1)
             div.html("<strong>ZipCode :</strong> "+d.properties.zip+"<br/><strong>City :</strong> "+d.properties.name+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.zip])
                           .style("left", (d3.event.pageX) + "px")
                           .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
      
        div.transition().duration(300)
        .style("opacity", 0);
      });


        
       

         svg.selectAll('rect')
          .data(topojson.object(usjson,usjson.objects.zip_codes_for_the_usa)
          .geometries)
          .enter()
          .append('rect')
          .attr('x', function(d) {return path.centroid(d)[0];})
          .attr('y', function(d) {return path.centroid(d)[1];})
          .attr('width',2)
          .attr('height', 2)
          .attr('fill', function(d) {
                         var rad;
 
                              if((diseaseById[d.properties.zip]) ===undefined ) 

                               {
                               
                                  return "#fff";
                               }

                               else if(diseaseDensityByID[d.properties.zip]>0){
                                      return colorDisease(diseaseDensityByID[d.properties.zip]);
                               }
                               else{
                             
                                   return "rgba(189, 189, 189, 0.1)";
                                
                               
                               }
            
                      })
          .style("opacity","0.8")
          .on("mouseover", function(d) {

            if((diseaseById[d.properties.ZCTA5CE10])===undefined) 
                              {
                 
                        populationById[d.properties.ZCTA5CE10]="Not Available";

                        diseaseDensityByID[d.properties.ZCTA5CE10]="Not Available";

                          }

                      

        d3.select(this).transition().duration(300)
            div.transition().duration(300)
                            .style("opacity", 1)
              div.html("<strong>ZipCode :</strong> "+d.properties.zip+"<br/><strong>City :</strong> "+d.properties.name+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.zip])
                           .style("left", (d3.event.pageX) + "px")
                           .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
      
        div.transition().duration(300)
        .style("opacity", 0);
      });
      

       if($scope.showHospitalLayer===true)
       {

        

        svg.selectAll("circle")
       .data(hosAll)
       .enter()
       .append("circle")
        .attr("r",2)
        .attr("stroke","black")
        .attr("stroke-width","0.2px")
         .style("fill",function(d){

                                     var color;
                                    if(d.numberBeds <=100)
                                    {
                                     
                                     color="#afc4ff";
                                       
                                    }
                                    if(d.numberBeds >100)
                                    {
                                      if(d.numberBeds <=300)
                                      {
                                    
                                      color="#6583d9";
                                      
                                     }
                                    }

                                    if(d.numberBeds > 300 )
                                    {
                                     
                                      color="#082c95";
                                     
                                    }

                                     return color;

                                      })
       .style("cursor","pointer")
       .attr("transform", function(d) {return "translate(" + projection([d.hqLongitude,d.hqLatitude]) + ")";})
      
        .on("click", function(d) {
      
                $scope.demo(d.hospitalName,d.hqLatitude,d.hqLongitude);

   
      
                             })
          .on("mouseout", function() {
          d3.select(this)
            .transition().duration(300)
            .style({'stroke-opacity':1,'stroke':'#999'});   
         
                                  });



  
           }
      
        d3.selectAll('button').on('click', zoomClick);
      
              hideLoader();

            
        
    };
    
          
        }


     else
     
     {



$rootScope.displayMessage="Fetching Map Data..";
            showLoader();
           sessionStorage.setItem("tier","state");
         
        
          File="topojson/"+sessionStorage.selectedstate+".json";
          var width =1000,
          height = 500;
        scale = 1;
        

         var coordinates=JSON.parse(sessionStorage.stateCord);


      var projection = d3.geo.mercator()
            .scale(coordinates.scale)
            .center([coordinates.x_axis, coordinates.y_axis])
            .translate([width / 2, 500]);

      var path = d3.geo.path()
                  .projection(projection);

     var zoom = d3.behavior.zoom()
      .scale(1)
      .scaleExtent([1, 200])
      .on("zoom", function(d) {
     
          d3.select("#all-g")
              .attr("transform", "translate(" + d3.event.translate
                + ")scale(" + d3.event.scale + ")");
          scale = d3.event.scale;
          d3.selectAll("#path-g path")
              .attr("stroke-width", 0.5/scale);

                 d3.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.25/scale+")";
        });  
                 
                 svg.selectAll(".mark")
                 .attr("transform", function(d) {
                   var t = d3.transform(d3.select(this).attr("transform")).translate;
                   return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
                 }); 
         svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 8.5 / d3.event.scale;
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 8.5 / d3.event.scale;
         return h;

        });

      });

        d3.select("svg").remove();
        d3.select("#all-g").remove();


      var svg = d3.select("#mapview-leftcontroller").append("svg")
          .attr("width",width)
          .attr("height",height)
           .call(zoom)
          .append("g").attr("id", "all-g");


      var div = d3.select("#mapview-leftcontroller").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);


        var sf = [-122.417, 37.775],
            ny = [-74.0064, 40.7142];
        
        

        var ext_color_domainDisease = [10,50,100,400]
        var legend_labelsDisease = ["<50 (Disease Density as by Zipcode wise Population)", "51-100", "101-400",">400"]


             function zoomed() {
                svg.attr("transform",
                    "translate(" + zoom.translate() + ")" +
                   "scale(" + zoom.scale() + ")"
                              );

                svg.selectAll("circle")
                   .attr("transform", function(d) {
                var t = d3.transform(d3.select(this).attr("transform")).translate;
                  return "translate(" + t[0] +","+ t[1] + ")scale("+1.25/zoom.scale()+")";
                            });  
                
                svg.selectAll(".mark")
                .attr("transform", function(d) {
                  var t = d3.transform(d3.select(this).attr("transform")).translate;
                  return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
                }); 

 svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 8.5 / zoom.scale();
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 8.5 / zoom.scale();
         return h;

        });

                           }


    function interpolateZoom (translate, scale) {
     var self = this;
     return d3.transition().duration(350).tween("zoom", function () {
         var iTranslate = d3.interpolate(zoom.translate(), translate),
             iScale = d3.interpolate(zoom.scale(), scale);
         return function (t) {
             zoom
                 .scale(iScale(t))
                 .translate(iTranslate(t));
             zoomed();
         };
     });
    }

    // zoom function

    function zoomClick() {
     var clicked = d3.event.target,
         direction = 1,
         factor = 0.2,
         target_zoom = 1,
         center = [width / 2, height / 2],
         extent = zoom.scaleExtent(),
         translate = zoom.translate(),
         translate0 = [],
         l = [],
         view = {x: translate[0], y: translate[1], k: zoom.scale()};

     d3.event.preventDefault();
     direction = (this.id === 'zoom_in') ? 1 : -1;
     target_zoom = zoom.scale() * (1 + factor * direction);

     if (target_zoom < extent[0] || target_zoom > extent[1]) { return false; }

     translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
     view.k = target_zoom;
     l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

     view.x += center[0] - l[0];
     view.y += center[1] - l[1];

     interpolateZoom([view.x, view.y], view.k);
    }

      var hosicon="";

      var c_scale = d3.scale.linear()
  .domain([0,100,800])
  .range(['#fbf545','#d18025','#a50505'])
  .interpolate(d3.interpolateRgb);


              function zoomTo() {

                         var sf = [sessionStorage.long,sessionStorage.lat];  
                   
                        var point = projection(sf);
                        var scale=4;
                        return zoom
                        .translate([width / 2 - point[0] * scale, height / 2 - point[1] * scale])
                        .scale(scale);
                                                }


    var drag = d3.behavior.drag()
      .on("drag", dragmove);

    function dragmove(d) {
    var x = d3.event.x+3;
    var y = d3.event.y+3;
    d3.select(this).attr("transform", function(d) {return "translate(" + projection([x,y]) + ")";});
    }
 if($scope.showHospitalLayer===true)
      {  
        if($scope.filteredHosData.length<=0){
           $scope.ErrorPopUp=true;
                  $scope.errorMessage = "No Hospital Records Found";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
        }
    }
      queue()
        .defer(d3.json, File)
        .await(ready2);

     function ready2(error, topology) {
      $rootScope.displayMessage="Generating Maps.";
            showLoader();
        var rateById = {};
        var populationById={};
        var diseaseById={};
        var diseaseDensityByID={};

         var stateDataVar=JSON.parse(sessionStorage.filterPopNDiseaseData);
            var stateData= stateDataVar[0];
               var colorDisease = d3.scale.threshold()
        .domain([stateDataVar[0].thirdmaxDiseaseDensity,stateDataVar[0].secondmaxDiseaseDensity,stateDataVar[0].firstmaxDiseaseDensity])
          .range(["#fbf545","#d18025", "#a50505"]); 
      $rootScope.thirdmaxDiseaseDensity=stateDataVar[0].thirdmaxDiseaseDensity;  
      $rootScope.secondmaxDiseaseDensity=stateDataVar[0].secondmaxDiseaseDensity;
         stateData.populationCount.forEach(function(d) { 

                             populationById[d.zipcode] = d.popCount;      
                            diseaseById[d.zipcode] = +d.diseaseDensity;
                            diseaseDensityByID[d.zipcode]=d.diseaseDensity;


                                                      });
       
          
        
        

               d3.select("#all-g")
          .append("g").attr("id", "path-g").selectAll("path")
          .data(topojson.object(topology,(topology, topology.objects.geo))
          .geometries)
          .enter()
          .append("path")
         .style("fill", function(d) { 
            
              return "#bdbdbd"
            
          } )
          .attr("stroke", "#999")
          .attr("stroke-width", 0.5/scale)
          .attr("d", path)
          .style("opacity", 0.5)
          .on("mouseover", function(d) {
        

        d3.select(this).transition().duration(300)
      
            div.transition().duration(300)
               .style("opacity", 1)
            div.html("<strong>ZipCode : </strong> "+d.properties.ZCTA5CE10+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.ZCTA5CE10])
               .style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 30) + "px");
                                  })
               .on("mouseout", function() {
               d3.select(this)
                 .transition().duration(300)
            
               div.transition().duration(300)
                  .style("opacity", 0);
                                       });



                svg.selectAll("rect")
                     .data(topojson.object(topology,(topology, topology.objects.geo))
                    .geometries)
                     .enter()
                     .append('rect')
                     .attr('x', function(d) {return path.centroid(d)[0];})
                     .attr('y', function(d) {return path.centroid(d)[1];})
                     .attr('width',5)
                     .attr('height', 5)
                      .attr('fill', function(d) {
                         var rad;
 

                              if((diseaseById[d.properties.ZCTA5CE10]) ===undefined ) 

                               {
                               
                                  return "#fff";
                               }
                                else if(diseaseDensityByID[d.properties.ZCTA5CE10]>0){
                                      return colorDisease(diseaseDensityByID[d.properties.ZCTA5CE10]);
                               }
                               else{
                               
                                   return "rgba(189, 189, 189, 0.1)";
                                
                               }
                               
          
                      })
                    .style("opacity","0.8")
                    .attr("d", path)
                      .on("mouseover", function(d) {

                           if((diseaseById[d.properties.ZCTA5CE10])===undefined) 
                              {
                  
                        populationById[d.properties.ZCTA5CE10]="Not Available";

                        diseaseDensityByID[d.properties.ZCTA5CE10]="Not Available";

                          }

        

        d3.select(this).transition().duration(300)
      
            div.transition().duration(300)
               .style("opacity", 1)
            div.html("<strong>ZipCode : </strong> "+d.properties.ZCTA5CE10+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.ZCTA5CE10])
               .style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 30) + "px");
                                  })
               .on("mouseout", function() {
               d3.select(this)
                 .transition().duration(300)
               
               div.transition().duration(300)
                  .style("opacity", 0);
                                       });



 if($scope.showHospitalLayer===true)
      {  
        if($scope.filteredHosData.length>0){
              svg.selectAll("circle")
       .data($scope.filteredHosData)
       .enter()
       .append("circle")
        .attr("r",2)
        .attr("stroke","black")
        .attr("stroke-width","0.2px")
         .style("fill",function(d){

                                     var color;
                                    if(d.numberBeds <=100)
                                    {
                                     
                                     color="#afc4ff";
                                       
                                    }
                                    if(d.numberBeds >100)
                                    {
                                      if(d.numberBeds <=300)
                                      {
                                    
                                      color="#6583d9";
                                      
                                     }
                                    }

                                    if(d.numberBeds > 300 )
                                    {
                                     
                                      color="#082c95";
                                     
                                    }

                                     return color;

                                      })
       .style("cursor","pointer")
       .attr("transform", function(d) {return "translate(" + projection([d.hqLongitude,d.hqLatitude]) + ")";})
      
        .on("click", function(d) {
      
                $scope.demo(d.hospitalName,d.hqLatitude,d.hqLongitude);

   
      
                             })
          .on("mouseout", function() {
          d3.select(this)
            .transition().duration(300)
            .style({'stroke-opacity':1,'stroke':'#999'});   
          
                                  });
        }
        else{
           $scope.ErrorPopUp=true;
                  $scope.errorMessage = "No Hospital Records Found";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
        }

    }      
    
  if($rootScope.showMark=="true"){    
     var marks = [{long:sessionStorage.long, lat:sessionStorage.lat}];




       d3.select("#all-g")
        .append("g").attr("id", "path-g").selectAll(".mark")
        .data(marks)
        .enter()
        .append("image")
        .attr('class','mark')
        .attr('width',"4%")
        .attr('height',"6%")
        .attr("xlink:href",'images/map2.png')
       
        .attr("transform", function(d) {return "translate(" + projection([d.long,d.lat]) + ")";})
        .on("mouseover", function(d) {
        

        d3.select(this).transition().duration(300).style({'stroke-opacity':1,'stroke':'#F00'});
             div.transition().duration(300)
               .style("opacity", 1)
             div.html("<strong>Searched Loaction (Zipcode) :"+$rootScope.filterData.zipCode+"<br/><strong>Disease Density: "+diseaseDensityByID[$rootScope.filterData.zipCode])
               .style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 30) + "px");
                                  })
               .on("mouseout", function() {
               d3.select(this)
                 .transition().duration(300)
                 .style({'stroke-opacity':1,'stroke':'#999'});   
               div.transition().duration(300)
                  .style("opacity", 0);
                                       })
                 .on("click",zoomTo());
    }

       d3.selectAll('#zoom_in').on('click', zoomClick);
        d3.selectAll('#zoom_out').on('click', zoomClick);

          
        hideLoader();
        
        
    };


     }   
         }
 $scope.displayUSGraph = function(state){
 
                $scope.popLegends=true;
             if($scope.showHospitalLayer===true)
      {
        
        $scope.tier3=true;
      }

       if($scope.showHospitalLayer===false)

      {
        
        $scope.tier3=false;
      }

      $scope.tier2=true;


             $rootScope.tierStat="12";

             var myEl = angular.element( document.querySelector( '#tier_i' ) );

           myEl.css('background-color','#3C73BA');
           myEl.css('color','white');
            myEl.css('font-weight','normal');

            var myE2 = angular.element( document.querySelector( '#tier_ii' ) );
            myE2.css('background-color','#3C73BA');
           myE2.css('color','white');
               myE2.css('font-weight','normal');

          
          var myE3 = angular.element( document.querySelector( '#tier_iii' ) );
           myE3.css('background-color','#007f00');
           myE3.css('color','white');
           myE3.css('font-weight','bold');
        
           $rootScope.displayMessage="Fetching Map Data..";
            showLoader();
            $scope.showLayer=true;
            var width =1000,
                    height = 500;
                    scale = 1;

               var projection = d3.geo.mercator()
                                .scale(800)
                                .center([-105, 37.5])
                                .translate([width / 2, height / 2]);

                var path = d3.geo.path()
                           .projection(projection);

    var zoom = d3.behavior.zoom()
        .scale(1)
        .scaleExtent([1, 200])
        .on("zoom", function(d) {
            d3.select("#all-g")
                .attr("transform", "translate(" + d3.event.translate
                  + ")scale(" + d3.event.scale + ")");
            scale = d3.event.scale;
            d3.selectAll("#path-g path")
                .attr("stroke-width", 0.5/scale);

                d3.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
        });  

           svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 3 / d3.event.scale;
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 3 / d3.event.scale;
         return h;

        });
     
        
           
        });
        d3.select("svg").remove();
        d3.select("#all-g").remove();




    var div = d3.select("#mapview-leftcontroller").append("div")   
      .attr("class", "tooltip")               
      .style("opacity", 0);  


           var color = d3.scale.threshold()
        .domain([1000,5000,10000,200000])
        .range(["#d3d3d3", "#c6c6c6", "#b9b9b9","#acacac"])
       

        var ext_color_domain = [1000, 5000, 10000,200000]


       var  File="";

           var zoomfactor=1;

          
 
     if(sessionStorage.tier==="state")
     {

       $scope.tier3=true;

      sessionStorage.setItem("tier","state");
      $scope.stateHosDiv=true;
      
  
      File="topojson/"+sessionStorage.selectedstate+".json";
       var width =1000,
            height = 500;
          scale = 1;


           var coordinates=JSON.parse(sessionStorage.stateCord);


        var projection = d3.geo.mercator()
              .scale(coordinates.scale)
              .center([coordinates.x_axis, coordinates.y_axis])
              .translate([width / 2, 500]);

        var path = d3.geo.path()
                    .projection(projection);

        var zoom = d3.behavior.zoom()
      .scale(1)
      .scaleExtent([1, 200])
      .on("zoom", function(d) {
     
          d3.select("#all-g")
              .attr("transform", "translate(" + d3.event.translate
                + ")scale(" + d3.event.scale + ")");
          scale = d3.event.scale;
          d3.selectAll("#path-g path")
              .attr("stroke-width", 0.2/scale);

                 d3.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/scale+")";
        }); 
                 
                 svg.selectAll(".mark")
                 .attr("transform", function(d) {
                   var t = d3.transform(d3.select(this).attr("transform")).translate;
                   return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
                 }); 
         svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 8.5 / d3.event.scale;
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 8.5/ d3.event.scale;
         return h;

        });

      });

      d3.select("svg").remove();
        d3.select("#all-g").remove();


        var svg = d3.select("#mapview-leftcontroller").append("svg")
            .attr("width",width)
            .attr("height",height)
          
          .call(zoom)
            .append("g").attr("id", "all-g");
        
       var color = d3.scale.threshold()
        .domain([1000,5000,10000,200000])
        .range(["#d3d3d3", "#c6c6c6", "#b9b9b9","#acacac"])
           
      

        var ext_color_domain = [1000, 5000, 10000,200000]
   


        var div = d3.select("#mapview-leftcontroller").append("div")   
          .attr("class", "tooltip")               
          .style("opacity", 0);


      var c_scale = d3.scale.linear()
  .domain([0,100,800])
  .range(['#fbf545','#d18025','#a50505'])
  .interpolate(d3.interpolateRgb);


          var sf = [-122.417, 37.775],
              ny = [-74.0064, 40.7142];


               function zoomed() {
    svg.attr("transform",
     "translate(" + zoom.translate() + ")" +
     "scale(" + zoom.scale() + ")"
 );

          svg.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
        });  
          
          svg.selectAll(".mark")
          .attr("transform", function(d) {
            var t = d3.transform(d3.select(this).attr("transform")).translate;
            return "translate(" + t[0] +","+ t[1] + ")scale("+1.3/zoom.scale()+")";
          }); 
          
        svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 8.5 / zoom.scale();
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 8.5 / zoom.scale();
         return h;

        });
  


}

      function interpolateZoom (translate, scale) {
       var self = this;
       return d3.transition().duration(350).tween("zoom", function () {
           var iTranslate = d3.interpolate(zoom.translate(), translate),
               iScale = d3.interpolate(zoom.scale(), scale);
           return function (t) {
               zoom
                   .scale(iScale(t))
                   .translate(iTranslate(t));
               zoomed();
           };
       });
      }

      // zoom function


      function zoomClick() {
       var clicked = d3.event.target,
           direction = 1,
           factor = 0.1,
           target_zoom = 1,
           center = [width / 2, height / 2],
           extent = zoom.scaleExtent(),
           translate = zoom.translate(),
           translate0 = [],
           l = [],
           view = {x: translate[0], y: translate[1], k: zoom.scale()};

       d3.event.preventDefault();
       direction = (this.id === 'zoom_in') ? 1 : -1;
       target_zoom = zoom.scale() * (1 + factor * direction);

       if (target_zoom < extent[0] || target_zoom > extent[1]) { return false; }

       translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
       view.k = target_zoom;
       l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

       view.x += center[0] - l[0];
       view.y += center[1] - l[1];

       interpolateZoom([view.x, view.y], view.k);
      }

        var hosicon="";


                function zoomTo() {

                           var sf = [sessionStorage.long,sessionStorage.lat];  
                       
                          var point = projection(sf);
                          var scale=2;
                          return zoom
                          .translate([width / 2 - point[0] * scale, height / 2 - point[1] * scale])
                          .scale(scale);
                                                  }


     

      var drag = d3.behavior.drag()
        .on("drag", dragmove);

      function dragmove(d) {
      var x = d3.event.x+3;
      var y = d3.event.y+3;
      d3.select(this).attr("transform", function(d) {return "translate(" + projection([x,y]) + ")";});
      }   

if($scope.showHospitalLayer===true)
      {  
        if($scope.filteredHosData.length<=0){
           $scope.ErrorPopUp=true;
                  $scope.errorMessage = "No Hospital Records Found";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
        }
    }
      queue()
        .defer(d3.json, File)
        .await(ready2);

     function ready2(error, topology) {
        $rootScope.displayMessage="Generating Maps..";
        showLoader();
        var rateById = {};
        var populationById={};
        var diseaseById={};
        var diseaseDensityByID={};
        var colorDisease = d3.scale.threshold()
        .domain([$scope.filteredPopNDiseaseCount[0].thirdmaxDiseaseDensity,$scope.filteredPopNDiseaseCount[0].secondmaxDiseaseDensity,$scope.filteredPopNDiseaseCount[0].firstmaxDiseaseDensity])
          .range(["#fbf545","#d18025", "#a50505"]); 
     

         $scope.filteredPopNDiseaseCount[0].populationCount.forEach(function(d) { rateById[d.zipcode] = +d.popCount;
                                                                                  populationById[d.zipcode] = d.popCount;
                                                                                   
                                                                                   diseaseById[d.zipcode] = +d.diseaseDensity;
                                                                                
                                                                                   diseaseDensityByID[d.zipcode]=d.diseaseDensity;


                                                                                });
        
        d3.select("#all-g")
          .append("g").attr("id", "path-g").selectAll("path")
          .data(topojson.object(topology,(topology, topology.objects.geo))
          .geometries)
          .enter()
          .append("path")
          .style("fill", function(d) {   if((diseaseById[d.properties.ZCTA5CE10])===undefined) 
          {
            
            return "#fff";
          }
          else
          {
            return color(rateById[d.properties.ZCTA5CE10]);
          } })
          .attr("stroke", "#999")
          .attr("stroke-width", 0.5/scale)
          .attr("d", path)
          .style("opacity",1)
           .attr("stroke", "#999")
          .attr("stroke-width", 0.5/scale)

          .on("mouseover", function(d) {

             if((diseaseById[d.properties.ZCTA5CE10])===undefined) 
                {


                  populationById[d.properties.ZCTA5CE10]="Not Available";

                  diseaseDensityByID[d.properties.ZCTA5CE10]="Not Available";

                }
        

        d3.select(this).transition().duration(300)
      
            div.transition().duration(300)
               .style("opacity", 1)
           div.html("<strong>ZipCode : </strong> "+d.properties.ZCTA5CE10+"<br/><strong>Population Count : "+populationById[d.properties.ZCTA5CE10]+"</strong>"+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.ZCTA5CE10])
               .style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 30) + "px");
                                  })
               .on("mouseout", function() {
               d3.select(this)
                 .transition().duration(300)
            
               div.transition().duration(300)
                  .style("opacity", 0);
                                       });





       
                 svg.selectAll("rect")
                     .data(topojson.object(topology,(topology, topology.objects.geo))
                    .geometries)
                     .enter()
                     .append('rect')
                     .attr('x', function(d) {return path.centroid(d)[0];})
                     .attr('y', function(d) {return path.centroid(d)[1];})
                     .attr('width',5)
                     .attr('height', 5)
                     .attr('fill', function(d) {
                         var rad;
 

                               if((diseaseById[d.properties.ZCTA5CE10]) ===undefined ) 

                               {
                               
                                return "#fff";
                               }
                                 else if(diseaseDensityByID[d.properties.ZCTA5CE10]>0){
                                      return colorDisease(diseaseDensityByID[d.properties.ZCTA5CE10]);
                               }
                               else{
                                 if(color(rateById[d.properties.ZCTA5CE10])=="#acacac"){
                                  return "rgba(172, 172, 172, 0.1)";
                                }
                                else if(color(rateById[d.properties.ZCTA5CE10])=="#b9b9b9"){
                                  return "rgba(185, 185, 185, 0.1)";
                                }
                                else if(color(rateById[d.properties.ZCTA5CE10])=="#c6c6c6"){
                                   return "rgba(198, 198, 198, 0.1)";
                                }
                                else{
                                   return "rgba(211, 211, 211, 0.1)";
                                }
                               }
                               

                       
                      })
                    .style("opacity","0.8")
                   .attr("d", path)
                   .on("mouseover", function(d) {
                           if((diseaseById[d.properties.ZCTA5CE10])===undefined) 
                              {
               
                        populationById[d.properties.ZCTA5CE10]="Not Available";

                        diseaseDensityByID[d.properties.ZCTA5CE10]="Not Available";

                          }

          
        d3.select(this).transition().duration(300)
       
            div.transition().duration(300)
               .style("opacity", 1)
             div.html("<strong>ZipCode : </strong> "+d.properties.ZCTA5CE10+"<br/><strong>Population Count : "+populationById[d.properties.ZCTA5CE10]+"</strong>"+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.ZCTA5CE10])
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
      
        div.transition().duration(300)
        .style("opacity", 0);
      });

         if($scope.showHospitalLayer===true)
      { 

        if($scope.filteredHosData.length>0){
            svg.selectAll("circle")
       .data($scope.filteredHosData)
       .enter()
       .append("circle")
        .attr("r",2)
        .attr("stroke","black")
        .attr("stroke-width","0.2px")
         .style("fill",function(d){

                                     var color;
                                    if(d.numberBeds <=100)
                                    {
                                     
                                     color="#afc4ff";
                                       
                                    }
                                    if(d.numberBeds >100)
                                    {
                                      if(d.numberBeds <=300)
                                      {
                                    
                                      color="#6583d9";
                                      
                                     }
                                    }

                                    if(d.numberBeds > 300 )
                                    {
                                     
                                      color="#082c95";
                                     
                                    }

                                     return color;

                                      })
       .style("cursor","pointer")
       .attr("transform", function(d) {return "translate(" + projection([d.hqLongitude,d.hqLatitude]) + ")";})
      
        .on("click", function(d) {
      
                $scope.demo(d.hospitalName,d.hqLatitude,d.hqLongitude);

   
      
                             })
          .on("mouseout", function() {
          d3.select(this)
            .transition().duration(300)
            .style({'stroke-opacity':1,'stroke':'#999'});   
         
                                  });
        }
       
      }
if($rootScope.showMark=="true"){
     var marks = [{long:sessionStorage.long, lat:sessionStorage.lat}];

   

       d3.select("#all-g")
        .append("g").attr("id", "path-g").selectAll(".mark")
        .data(marks)
        .enter()
        .append("image")
        .attr('class','mark')
        .attr('width',"4%")
        .attr('height',"6%")
        .attr("xlink:href",'images/map2.png')
       
        .attr("transform", function(d) {return "translate(" + projection([d.long,d.lat]) + ")";})
       
        .on("mouseover", function(d) {
        

        d3.select(this).transition().duration(300).style({'stroke-opacity':1,'stroke':'#F00'});
            div.transition().duration(300)
               .style("opacity", 1)
            div.html("<strong>Searched Loaction (Zipcode) :"+$rootScope.filterData.zipCode+"</strong><br/><strong>Population Count : "+populationById[$rootScope.filterData.zipCode]+"</strong>"+"<br/><strong>Disease Density : "+diseaseDensityByID[$rootScope.filterData.zipCode])
               .style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 30) + "px");
                                  })
               .on("mouseout", function() {
               d3.select(this)
                 .transition().duration(300)
                 .style({'stroke-opacity':1,'stroke':'#999'});   
               div.transition().duration(300)
                  .style("opacity", 0);
                                       })
                 .on("click",zoomTo());
}
        d3.selectAll('#zoom_in').on('click', zoomClick);
        d3.selectAll('#zoom_out').on('click', zoomClick);

       
          
        hideLoader();


        
    };

     }



     if(sessionStorage.tier==="us")
     {

       sessionStorage.setItem("tier","us");
       $scope.tier="us";
       $scope.stateHosDiv=false;

     
       var diseasedata;

         var hospitalData={};

            var c_scale = d3.scale.linear()
                         .domain([0,100,800])
                         .range(['#fbf545','#d18025','#a50505'])
                         .interpolate(d3.interpolateRgb); 


         var width =1000,
                    height = 500;
                    scale = 1;

                var projection = d3.geo.mercator()
                                .scale(800)
                                .center([-105, 37.5])
                                .translate([width / 2, height/2]);

                var path = d3.geo.path()
                           .projection(projection);

                var zoom = d3.behavior.zoom()
                             .scale(1)
                             .scaleExtent([1, 200])
                             .on("zoom", function(d) {
                 d3.select("#all-g")
                              .attr("transform", "translate(" + d3.event.translate
                               + ")scale(" + d3.event.scale + ")");
            scale = d3.event.scale;
             svg.selectAll("circle")
        .attr("transform", function(d) {
          var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.25/zoom.scale()+")";


        });
         svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 3 / d3.event.scale;
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 3 / d3.event.scale;
         return h;

        });

        
             
  
           
        });
        d3.select("svg").remove();
        d3.select("#all-g").remove();




    var div = d3.select("#mapview-leftcontroller").append("div")   
      .attr("class", "tooltip")               
      .style("opacity", 0);  

       var color = d3.scale.threshold()
        .domain([1000,5000,10000,200000])
        .range(["#d3d3d3", "#c6c6c6", "#b9b9b9","#acacac"])
         
          

        var ext_color_domain = [1000, 5000, 10000,200000]
    



         
         
        var svg = d3.select("#mapview-leftcontroller").append("svg")
        .attr("width",width)
        .attr("height",height)
        .style("padding-top","10px")

        .call(zoom)
        .append("g").attr("id", "all-g");

         function zoomed() {
                svg.attr("transform",
                  "translate(" + zoom.translate() + ")" +
                 "scale(" + zoom.scale() + ")"
                        );
          svg.selectAll("circle")
             .attr("transform", function(d) {
                var t = d3.transform(d3.select(this).attr("transform")).translate;
          return "translate(" + t[0] +","+ t[1] + ")scale("+1.25/zoom.scale()+")";


             
        });
         svg.selectAll("rect")
        .attr("width", function(d) {
         var w = 3 / zoom.scale();
         return w;

        });
 svg.selectAll("rect")
        .attr("height", function(d) {
         var h = 3 / zoom.scale();
         return h;

        });

               


             
        
}

function interpolateZoom (translate, scale) {
   var self = this;
   return d3.transition().duration(350).tween("zoom", function () {
       var iTranslate = d3.interpolate(zoom.translate(), translate),
           iScale = d3.interpolate(zoom.scale(), scale);
       return function (t) {
           zoom
               .scale(iScale(t))
               .translate(iTranslate(t));
           zoomed();
       };
   });
}

// zoom function

function zoomClick() {
   var clicked = d3.event.target,
       direction = 1,
       factor = 0.2,
       target_zoom = 1,
       center = [width / 2, height / 2],
       extent = zoom.scaleExtent(),
       translate = zoom.translate(),
       translate0 = [],
       l = [],
       view = {x: translate[0], y: translate[1], k: zoom.scale()};

   d3.event.preventDefault();
   direction = (this.id === 'zoom_in') ? 1 : -1;
   target_zoom = zoom.scale() * (1 + factor * direction);

   if (target_zoom < extent[0] || target_zoom > extent[1]) { return false; }

   translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
   view.k = target_zoom;
   l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

   view.x += center[0] - l[0];
   view.y += center[1] - l[1];

   interpolateZoom([view.x, view.y], view.k);
}

 



        
        File="topojson/zips_us_topo.json";

     
         if($scope.showHospitalLayer===true)
      {  

        $scope.stateHosDiv=true;

        if(($scope.filteredHosDataUS===undefined) || ($scope.filteredHosDataUS === null))
        {

         
         queue()  
        .defer(d3.json,File)
        .defer(d3.json,"topojson/AllHospitalsUS.json")
        .defer(d3.json,"topojson/getUSALLdata.json")
        .await(ready);
        }

        else

        {

          if($scope.filteredHosDataUS==""){
           if($scope.filteredHosDataUS.length<=0){
          
                $scope.ErrorPopUp=true;
                  $scope.errorMessage = "No Hospital Records Found";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);

           }
             if($rootScope.usmap===undefined)
                   {


            var httpRequest =$http({
            method: 'GET',
             url:'topojson/zips_us_topo.json',
            headers: {
                 'Content-Type':'application/json'
                     }

        }).success(function(data) {
            
              $rootScope.usmap=data;
             queue()
            .defer(d3.json,File)
            .defer(d3.json,$scope.filteredPopNDiseaseCount)

            .await(ready3);
          });
      }
      else{
     
         queue()
            .defer(d3.json,File)
            .defer(d3.json,$scope.filteredPopNDiseaseCount)

            .await(ready3);
      }
    }
          else{

               if($rootScope.usmap===undefined)
                   {


            var httpRequest =$http({
            method: 'GET',
             url:'topojson/zips_us_topo.json',
            headers: {
                 'Content-Type':'application/json'
                     }

        }).success(function(data) {
            
              $rootScope.usmap=data;
              queue()
            .defer(d3.json,$rootScope.usmap)
            .defer(d3.json,$scope.filteredHosDataUS)
            .defer(d3.json,$scope.filteredPopNDiseaseCount)
            .await(ready);
           });

       

      }

      else

      {
             queue()
            .defer(d3.json,$rootScope.usmap)
            .defer(d3.json,$scope.filteredHosDataUS)
            .defer(d3.json,$scope.filteredPopNDiseaseCount)
            .await(ready);

      }
           
        }
       
        

        }
       
      }

      else

      {
        if($scope.filteredPopNDiseaseCount==undefined ||$scope.filteredPopNDiseaseCount==null||$scope.filteredPopNDiseaseCount=="" ){
     
        queue()
        .defer(d3.json,File)
        .defer(d3.json,"topojson/getUSALLdata.json")
        .await(ready3);
      
      }
      else{
         queue()
            .defer(d3.json,File)
            .defer(d3.json,$scope.filteredPopNDiseaseCount)
            .await(ready3);
      }
    }

        
     function ready(error,usjson,population,usData) {
     
      $rootScope.displayMessage="Generating Maps..";
            showLoader();

        var rateById = {};
        var populationById={};
        var diseaseById={};
        var diseaseDensityByID={};
        var radiusById={};
        var centerById={};
        var diseaseByIdState={};

        var c_scale = d3.scale.linear()
  .domain([0,100,800])
  .range(['#fbf545','#d18025','#a50505'])
  .interpolate(d3.interpolateRgb);


   

        if(usjson===undefined)
        {
          usjson=$rootScope.usmap;
        }
       
        else{
          $rootScope.usmap=usjson;
        }
       if(usData===undefined){
        usData=$scope.filteredPopNDiseaseCount
       }


        if(population===undefined)
        {
          population=$scope.filteredHosDataUS;
        }

  var colorDisease = d3.scale.threshold()
        .domain([usData[0].thirdmaxDiseaseDensity,usData[0].secondmaxDiseaseDensity,usData[0].firstmaxDiseaseDensity])
          .range(["#fbf545","#d18025", "#a50505"]); 
      $rootScope.thirdmaxDiseaseDensity=usData[0].thirdmaxDiseaseDensity;  
      $rootScope.secondmaxDiseaseDensity=usData[0].secondmaxDiseaseDensity; 
        sessionStorage.setItem("filterPopNDiseaseData",JSON.stringify(usData));      
      
         usData[0].populationCount.forEach(function(d) {
                                                  var label="";

                                                  if(d.popCount==undefined)
                                                  {
                                                    d.popCount=0;
                                                    label="Not Avilable"

                                                  }
                                                   rateById[d.zipcode] = d.popCount;

                                                  if(d.popCount==undefined)
                                                  {
                                                   
                                                   populationById[d.zipcode] = label;
                                                 }
                                                 else
                                                 {
                                                   populationById[d.zipcode] = d.popCount;
                                                 }
                                                   diseaseById[d.zipcode] = +d.diseaseDensity;
                                                   diseaseDensityByID[d.zipcode]=d.diseaseDensity;

                                                    var ob=[];

                                                   
                                                    radiusById[d.zipcode] =d.bubbleRadius;
                                                  
                                                  
                                                   }
                                                    );

            d3.select("#all-g")
              .append("g").attr("id", "path-g").selectAll("path")
          .data(topojson.object(usjson,usjson.objects.zip_codes_for_the_usa)
          .geometries)
          .enter()
          .append("path")
          .style("fill", function(d) { 

           if(populationById[d.properties.zip]===undefined)
            {
              return "#fff"
            }
            else
            {
            return color(rateById[d.properties.zip]); }
          })
          
          .style("opacity","1")
          
          .attr("d", path)
          .on("click", function(d) {


             if((populationById[d.properties.zip])===undefined)
                {
                   
                  populationById[d.properties.zip]="Not Available";
                  diseaseDensityByID[d.properties.zip]="Not Available";

                }
        

        d3.select(this).transition().duration(300)
      
            div.transition().duration(300)
                            .style("opacity", 1)
             div.html("<strong>ZipCode :</strong> "+d.properties.zip+"<br/><strong>City :</strong> "+d.properties.name+"<br/><strong>State : </strong>"+d.properties.state+"<br/><strong>Population Count: "+populationById[d.properties.zip] +"</strong>"+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.zip])
                           .style("left", (d3.event.pageX) + "px")
                           .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
       
        div.transition().duration(300)
        .style("opacity", 0);
      })
      .on("mouseover", function(d) {


             if((populationById[d.properties.zip])===undefined)
                {
                   
                  populationById[d.properties.zip]="Not Available";
                  diseaseDensityByID[d.properties.zip]="Not Available";

                }
        

        d3.select(this).transition().duration(300)
       
            div.transition().duration(300)
                            .style("opacity", 1)
             div.html("<strong>ZipCode :</strong> "+d.properties.zip+"<br/><strong>City :</strong> "+d.properties.name+"<br/><strong>State : </strong>"+d.properties.state+"<br/><strong>Population Count: "+populationById[d.properties.zip] +"</strong>"+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.zip])
                           .style("left", (d3.event.pageX) + "px")
                           .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
      
        div.transition().duration(300)
        .style("opacity", 0);
      });


           svg.selectAll('rect')
          .data(topojson.object(usjson,usjson.objects.zip_codes_for_the_usa)
          .geometries)
          .enter()
          .append('rect')
          .attr('x', function(d) {return path.centroid(d)[0];})
          .attr('y', function(d) {return path.centroid(d)[1];})
          .attr('width',2)
          .attr('height', 2)
           .attr('fill', function(d) {
                         var rad;
 
                            if((diseaseById[d.properties.zip]) ===undefined ) 

                               {
                               
                               return "#fff";
                               }
                              else if(diseaseDensityByID[d.properties.zip]>0){
                                      return colorDisease(diseaseDensityByID[d.properties.zip]);
                               }
                               else{
                                  if(color(rateById[d.properties.zip])=="#acacac"){
                                  return "rgba(172, 172, 172, 0.1)";
                                }
                                else if(color(rateById[d.properties.zip])=="#b9b9b9"){
                                  return "rgba(185, 185, 185, 0.1)";
                                }
                                else if(color(rateById[d.properties.zip])=="#c6c6c6"){
                                   return "rgba(198, 198, 198, 0.1)";
                                }
                                else{
                                   return "rgba(211, 211, 211, 0.1)";
                                }
                               }
                               
                      })
          .style("opacity","0.8")

          .on("mouseover", function(d) {

             if((populationById[d.properties.zip])===undefined)
                {
                   
                  populationById[d.properties.zip]="Not Available";
                  diseaseById[d.properties.zip]="Not Available";

                }
        
        

        d3.select(this).transition().duration(300)
            div.transition().duration(300)
                            .style("opacity", 1)
             div.html("<strong>ZipCode :</strong> "+d.properties.zip+"<br/><strong>City :</strong> "+d.properties.name+"<br/><strong>State : </strong>"+d.properties.state+"<br/><strong>Population Count: "+populationById[d.properties.zip] +"</strong>"+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.zip])
                           .style("left", (d3.event.pageX) + "px")
                           .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
       
        div.transition().duration(300)
        .style("opacity", 0);
      });
        
    
       if($scope.showHospitalLayer===true)
       {
     
        

        svg.selectAll("circle")
       .data(population)
       .enter()
       .append("circle")
        .attr("r",2)
        .attr("stroke","black")
        .attr("stroke-width","0.2px")
        .style("fill",function(d){

                                     var color;
                                    if(d.numberBeds <=100)
                                    {
                                     
                                     color="#afc4ff";
                                       
                                    }
                                    if(d.numberBeds >100)
                                    {
                                      if(d.numberBeds <=300)
                                      {
                                    
                                      color="#6583d9";
                                      
                                     }
                                    }

                                    if(d.numberBeds > 300 )
                                    {
                                     
                                      color="#082c95";
                                     
                                    }

                                     return color;

                                      })
       .style("cursor","pointer")
       .attr("transform", function(d) {return "translate(" + projection([d.hqLongitude,d.hqLatitude]) + ")";})
      
        .on("click", function(d) {
      
                $scope.demo(d.hospitalName,d.hqLatitude,d.hqLongitude);

   
      
                             })
          .on("mouseout", function() {
          d3.select(this)
            .transition().duration(300)
            .style({'stroke-opacity':1,'stroke':'#999'});   
          
                                  });



  
           }
    

         d3.selectAll('button').on('click', zoomClick);

      
        hideLoader();
        $scope.disableShowData=false;
  
    };

     function ready3(error,usjson,usdata) {

       

       $rootScope.displayMessage="Generating Maps..";
       showLoader();


        var rateById = {};
        var populationById={};
        var diseaseById={};
        var diseaseDensityByID={};
        $scope.stateHosDiv=false;
        
         if(usjson===undefined)
        {
          usjson=$rootScope.usmap;
        }
       
        else{
          $rootScope.usmap=usjson;
        }
       if(usdata===undefined){
        usdata=$scope.filteredPopNDiseaseCount
       }

 var colorDisease = d3.scale.threshold()
        .domain([usdata[0].thirdmaxDiseaseDensity,usdata[0].secondmaxDiseaseDensity,usdata[0].firstmaxDiseaseDensity])
          .range(["#fbf545","#d18025", "#a50505"]); 
      $rootScope.thirdmaxDiseaseDensity=usdata[0].thirdmaxDiseaseDensity;  
      $rootScope.secondmaxDiseaseDensity=usdata[0].secondmaxDiseaseDensity;

        sessionStorage.setItem("filterPopNDiseaseData",JSON.stringify(usdata));
       

        usdata[0].populationCount.forEach(function(d) {rateById[d.zipcode] = +d.popCount;
                                                    populationById[d.zipcode] = d.popCount;
                                                    diseaseById[d.zipcode] = +d.diseaseDensity;
                                                   diseaseDensityByID[d.zipcode]=d.diseaseDensity;
                                                  
                                                   }
                                                    );


        
        
           d3.select("#all-g")
          .append("g").attr("id", "path-g").selectAll("path")
          .data(topojson.object(usjson,usjson.objects.zip_codes_for_the_usa)
          .geometries)
          .enter()
          .append("path")
          .style("fill", function(d) {


               if(populationById[d.properties.zip]===undefined)
            {
              return "#fff"
            }
            else
            {
           return color(rateById[d.properties.zip]); } 








            })
          .attr("stroke", "#999")
          .attr("stroke-width", 0.5/scale)
          .attr("d", path)
          .style("z-index","1")
          .on("mouseover", function(d) {

              if((populationById[d.properties.zip])===undefined)
                {
                   
                  populationById[d.properties.zip]="Not Available";

                }
        

        d3.select(this).transition().duration(300)
      
            div.transition().duration(300)
               .style("opacity", 1)
             div.html("<strong>ZipCode :</strong> "+d.properties.zip+"<br/><strong>City :</strong> "+d.properties.name+"<br/><strong>State : </strong>"+d.properties.state+"<br/><strong>Population Count: "+populationById[d.properties.zip])
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
       
        div.transition().duration(300)
        .style("opacity", 0);
      });

     
          svg.selectAll('rect')
          .data(topojson.object(usjson,usjson.objects.zip_codes_for_the_usa)
          .geometries)
          .enter()
          .append('rect')
          .attr('x', function(d) {return path.centroid(d)[0];})
          .attr('y', function(d) {return path.centroid(d)[1];})
          .attr('width',2)
          .attr('height', 2)
          .attr('fill', function(d) {
                         var rad;
 
                            if((diseaseById[d.properties.zip]) ===undefined ) 

                               {
                               
                               return "#fff";
                               }
                            else if(diseaseDensityByID[d.properties.zip]>0){
                                      return colorDisease(diseaseDensityByID[d.properties.zip]);
                               }
                            else{
                                 if(color(rateById[d.properties.zip])=="#acacac"){
                                  return "rgba(172, 172, 172, 0.1)";
                                }
                                else if(color(rateById[d.properties.zip])=="#b9b9b9"){
                                  return "rgba(185, 185, 185, 0.1)";
                                }
                                else if(color(rateById[d.properties.zip])=="#c6c6c6"){
                                   return "rgba(198, 198, 198, 0.1)";
                                }
                                else{
                                   return "rgba(211, 211, 211, 0.1)";
                                }
                               }
                      })
          .style("opacity","0.8")
          .on("mouseover", function(d) {

            if((diseaseById[d.properties.zip])===undefined)
              {
                 
                populationById[d.properties.zip]="Not Available";
                diseaseDensityByID[d.properties.zip]="Not Available";

              }
        

        d3.select(this).transition().duration(300)
            div.transition().duration(300)
                            .style("opacity", 1)
             div.html("<strong>ZipCode :</strong> "+d.properties.zip+"<br/><strong>City :</strong> "+d.properties.name+"<br/><strong>State : </strong>"+d.properties.state+"<br/><strong>Population Count: "+populationById[d.properties.zip] +"</strong>"+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.zip])
                           .style("left", (d3.event.pageX) + "px")
                           .style("top", (d3.event.pageY -30) + "px");
                                  })
      .on("mouseout", function() {
        d3.select(this)
        .transition().duration(300)
        
        div.transition().duration(300)
        .style("opacity", 0);
      });
        
    
         

        d3.selectAll('button').on('click', zoomClick);  
          
      
              hideLoader();
        
    };


     
    }
          },

$scope.showUSorState=function(){
  if($scope.checkZipOrUS=="USOn"){
    $scope.usChecked();
  }
  else if($scope.checkZipOrUS=="ZipOn"){
     $scope.showData();
  }
  else{
     $scope.showState();
  }
}
$scope.showHideZip=function(){
   if($scope.checkZipOrUS=="USOn"){
    $scope.showZip=true;
     $scope.showStateView=true;
  }
  else if($scope.checkZipOrUS=="ZipOn"){
     $scope.showZip=false;
      $scope.showStateView=true;
  }
  else{
    $scope.showZip=true;
     $scope.showStateView=false;
  }
 
}
     
     $scope.getOwnerShipValue = function(){
            $scope.checkZipOrUS="USOn";
            sessionStorage.setItem("tier","us");
            $scope.showHospitalLayer=true;
             $scope.showZip=true;
             $scope.showStateView=true;

   webServiceCall.getUserhospNstate(webserviceURL+'state',btoa($scope.User+':'+$rootScope.password)).then(function(data) {
                if (data != null && typeof data !== "undefined") {
                    if (data.status != "ZERO_RESULTS") {
                        $scope.statesData = data;
                        sessionStorage.setItem("statesAll", JSON.stringify(data));
                    }
                }   
         if(sessionStorage.getItem("hospOwnership")==null){
   
         webServiceCall.getUserhospNstate(webserviceURL+'hospitalOwnership',btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
     if(data !=null && typeof data !=="undefined"){
             if(data.status !="ZERO_RESULTS"){
                 $scope.hospOwnershipData=new Array();
                 for(var i=0;i<data.length;i++){
            if(data[i]!=null){
         
            $scope.hospOwnershipData.push(data[i]);
            }
            else{
            $scope.hospOwnershipData.push("Others");
            }

                 }
                 sessionStorage.setItem("hospOwnership",$scope.hospOwnershipData);
                 

                 sessionStorage.setItem("tier","us");
                 if(sessionStorage.firstTimeMap=="true"){
                   $scope.displayUSGraph('us');
                 }
                 else{
                
                    $scope.usChecked();
                
                 }
                 
             }
}

  
}, function (message) {
    
      sessionStorage.setItem("tier","us");

 
   $scope.displayUSGraph('us');
                 
});
     }else{
         
         var ownershipArray=sessionStorage.getItem("hospOwnership").split(",");
      
         $scope.hospOwnershipData=ownershipArray;
        
          sessionStorage.setItem("tier","us");
          if(sessionStorage.firstTimeMap=="true"){
           
               
                 $scope.displayUSGraph('us');
                 }
                 else{
                 
                     $scope.usChecked();
                 
                 }
                 
     }

  }, function(message) {

});
            
            webServiceCall.getUserhospNstate(webserviceURL+'diseases',btoa($rootScope.User+':'+$rootScope.password)).then(function (data) {
            if(data !=null && typeof data !=="undefined"){
                     if(data.status !="ZERO_RESULTS"){
                      
                       
                          var listData={HeartDisease:[],StrokeDisease:[]};
                          $scope.diseaseDropdown=data;
                         

                        
                      sessionStorage.setItem("diseaseList",$scope.diseaseDropdown);


                       
                       
                     
                      sessionStorage.setItem("diseaseList",$scope.diseaseDropdown);
                    
                      
                    }
            }

  
        }, function (message) {
           
        });
          
     };

$scope.getCurrentLocationForUser = function(){
        if(sessionStorage.userRole=="Admin"){
              $rootScope.dwnldLink=true;
             $rootScope.downloadcontact=true;
        }
        else{
          $rootScope.dwnldLink=false;
          $rootScope.downloadcontact=false;
        }
  
$("#HealthEco-header-rightcontainer").show();
$("#bottomlinks").show();



        $("#insightsviewbutton").removeClass("HealthEco-header-button-selected").addClass("HealthEco-header-button-unselected");
        $("#mapviewbutton").removeClass("HealthEco-header-button-unselected").addClass("HealthEco-header-button-selected");
var firsttimeloadvalue=sessionStorage.getItem("firstTimeLoad");
if(firsttimeloadvalue == "yes"){
if($rootScope.flowValue !=1){
$rootScope.filterData.zipCode=sessionStorage.zipCodeValue;
$rootScope.filterData.stateSelect=sessionStorage.stateValue;
}
$scope.getOwnerShipValue();
}else{
sessionStorage.setItem("firstTimeLoad","yes");

if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition,showError);
   } else { 
      
      
   }
var latitude,longitude;
function showPosition(position) {

latitude= position.coords.latitude;
longitude=position.coords.longitude;
            sessionStorage.setItem('lat',latitude);
            sessionStorage.setItem('long',latitude);
try{

$rootScope.displayMessage="Fetching User Loaction";  
showLoader();
webServiceCall.getUserZipCode(latitude,longitude).then(function (data) {
     
           if(data !=null && typeof data !=="undefined"){
               if(data.status !="ZERO_RESULTS"){
               var addressdata=data.results[0].address_components;
               var postaltypecode =0;
               for(var i=0;i<addressdata.length;i++){
           var addressdatainside = addressdata[i].types;

           for(var j=0;j<addressdatainside.length;j++){
           if(addressdatainside[j] == "postal_code"){
           postaltypecode =1;
           $rootScope.filterData.zipCode = addressdata[i].long_name;
           sessionStorage.setItem("zipCodeValue",addressdata[i].short_name);
          
           }
           
          if(addressdatainside[j] == "administrative_area_level_1"){

            sessionStorage.setItem("stateValue",addressdata[i].short_name);
             $rootScope.filterData.stateSelect = addressdata[i].short_name;
            $rootScope.flowValue =1;
           $scope.getOwnerShipValue();
            
          }
           }
               }
               if(postaltypecode == 0){
           $scope.getOwnerShipValue();
               }
         
               }else{
           $scope.getOwnerShipValue();
           }    
           }else{
               $scope.getOwnerShipValue();
           }
   
       }, function (message) {
           $scope.getOwnerShipValue();
           });
}catch(e){
$scope.getOwnerShipValue();
}
}
function showError(error){
$scope.getOwnerShipValue();

}    
}
}
$scope.showErrorPopup=function(){
   $scope.ErrorPopUp=true;
                  $scope.errorMessage = "No Hospital Records Found";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
      }

         $scope.getCurrentLocationForUser();
 $rootScope.dwnloadFeedback=function(){

      var dwnldUrl = webserviceURL+"download";
      webServiceCall.getUserhospNstate(dwnldUrl,btoa($rootScope.User+':'+$rootScope.password)).then(function (data){
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


  $scope.showState= function(){
       
        $scope.checkUS = false;
        $scope.showUs = false;

        $rootScope.mapviewFilterClass = "mapview-filter";

        var ageData,
            diseaseData,
            healthData,
            yearData,
            noOfBedsData,
            mgntDesigData,
            orgTransplantData,
            canseAccreditnData,
            soleCommunityData,
            academicMedicalData,
            councilTeachingData,
            HHIData;
             if($rootScope.filterData.selectAgemodel == ""){
                        $scope.ErrorPopUp=true;
                  $scope.errorMessage = "Please Select Age Group(s)";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                }
                else{

                  if($rootScope.filterData.selectHealthModel == ""){
                    $scope.ErrorPopUp=true;
                  $scope.errorMessage = "Please Select Health Plan(s)";
                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                  }
                  else{ 

                    $rootScope.displayMessage="Connected..Loading Response..";
                     showLoader();
        $scope.mapAgeDetails = "";
        if ($rootScope.filterData.yearData == "5-year") {

            $scope.year = "5";
        } else if ($rootScope.filterData.yearData == "10-year") {
            $scope.year = "10";
        } else {
            $scope.year = "0";
        }

        for (var i = 0; i < $rootScope.filterData.selectAgemodel.length; i++) {
            if (!ageData) {
                if ($rootScope.filterData.selectAgemodel[0].id == "All Age") {
                    ageData = "1,2,3,4";
                    $scope.mapAgeDetails = "All";
                } else if ($rootScope.filterData.selectAgemodel[0].id == "1") {
                    ageData = "1";
                    $scope.mapAgeDetails = "0-17";
                } else if ($rootScope.filterData.selectAgemodel[0].id == "2") {
                    ageData = "2";
                    $scope.mapAgeDetails = "18-34";
                } else if ($rootScope.filterData.selectAgemodel[0].id == "4") {
                    ageData = "3";
                    $scope.mapAgeDetails = "35-64";
                } else {
                    ageData = "4";
                    $scope.mapAgeDetails = "65 & Over";
                }



            } else {
                if($rootScope.filterData.selectAgemodel[i].id=="All Age"){
                    ageData=ageData + ',' + "1,2,3,4";
                    var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    
                      $scope.mapAgeDetails="All";
                     
                  
                    
                    
                  }
                  else if($rootScope.filterData.selectAgemodel[i].id=="1"){
                    ageData=ageData + ',' + "1";
                    var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');

                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                         break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                       $scope.mapAgeDetails=$scope.mapAgeDetails + ',' +"0-17";
                     }
                    }
                     
                  }
                  else if($rootScope.filterData.selectAgemodel[i].id=="2"){
                    ageData=ageData + ',' + "2";
                   var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    
                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                         break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                     $scope.mapAgeDetails=$scope.mapAgeDetails + ',' +"18-34";
                     
                     }
                    }
                     
                  }
                  else if($rootScope.filterData.selectAgemodel[i].id=="4"){
                    ageData=ageData + ',' + "3";
                    var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                        break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                       $scope.mapAgeDetails=$scope.mapAgeDetails + ',' + "35-64";
                       
                     }
                    }
                  
                  }
                  else{
                    ageData=ageData + ',' + "4";
                   var mapAgeDetailsArr = $scope.mapAgeDetails.split(',');
                    for(k=0;k<mapAgeDetailsArr.length;k++){
                     if(mapAgeDetailsArr[k] == "All"){
                        $scope.mapAgeDetails= "All";
                        break;
                     } 
                     else{
                      if(k==mapAgeDetailsArr.length-1)
                      $scope.mapAgeDetails=$scope.mapAgeDetails + ',' +"65 & Over";
                     }
                    }
                    
                  }
            }
        }

       
                diseaseData = $rootScope.filterData.selectDiseasemodel;
                $scope.diseaseData = $rootScope.filterData.selectDiseasemodel;

        for (var i = 0; i < $rootScope.filterData.selectHealthModel.length; i++) {
            if (!healthData) {
                healthData = $rootScope.filterData.selectHealthModel[0].id;
            } else {
                healthData = healthData + ',' + $rootScope.filterData.selectHealthModel[i].id;
            }
        }


        try {
          var url = webserviceURL+'getPopulation?gender=' + $rootScope.filterData.selectGenderModel + '&age=' + ageData + '&state=' + $rootScope.filterData.stateSelect + '&years=' + $scope.year+'&disease='+$rootScope.filterData.selectDiseasemodel+'&insurancetype='+healthData;
          
            $rootScope.filterData.zipCode = "";
            webServiceCall.getfilteredData(url,btoa($scope.User+':'+$rootScope.password)).then(function(data) {
                if (data.hasOwnProperty("message")) {
                    hideLoader();
                    $scope.ErrorPopUp=true;
                        $scope.errorMessage = "Server Error";
                        setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                   
                } else {
                    if (data != null && typeof data !== "undefined") {
                        if (data.status != "ZERO_RESULTS") {
                            $scope.filteredPopNDiseaseCount = data;
                            sessionStorage.setItem("filterPopNDiseaseData",JSON.stringify(data));
                            $rootScope.selectedState = data[0].state;
                            $rootScope.thirdmaxDiseaseDensity=data[0].thirdmaxDiseaseDensity;  
                            $rootScope.secondmaxDiseaseDensity=data[0].secondmaxDiseaseDensity;
                            sessionStorage.setItem("selectedstate",$rootScope.selectedState);
                            sessionStorage.setItem("selectedDisease",$rootScope.filterData.selectDiseasemodel);
                            
                        }
                    }
                    var a = $rootScope.selectedState;
                    var b = $rootScope.filterData.sliderVal;
                    var stateUrl=webserviceURL+'statecentral?abbr='+a;
                      webServiceCall.getfilteredData(stateUrl,btoa($scope.User+':'+$rootScope.password)).then(function (data) {
                        if(data.hasOwnProperty("message")){
                        
                      }
                      else{
                        if(data !=null && typeof data !=="undefined"){
                           if(data.status !="ZERO_RESULTS"){
                              sessionStorage.setItem('stateCord',JSON.stringify(data));
                              sessionStorage.setItem('lat',data.x_axis);
                             sessionStorage.setItem('long',data.y_axis);
                           
                           }
                      }
                         var nullVar = $rootScope.filterData.hospOwnership;
                    
                     var firUrl=webserviceURL+'gethospitalview?state='+a;

                      
                     
                      var secUrl='&numberBeds='+$rootScope.filterData.sliderVal+'&numberBedsTo='+$rootScope.filterData.sliderValMax+"&academicMedicalCenter_boolean="+$rootScope.filterData.academicMedi+'&soleCommunityHospital_boolean='+$rootScope.filterData.soleComm+'&hospitalOwnership='+$rootScope.filterData.hospOwnership+'&magnetDesignation_boolean='+$rootScope.filterData.magntDesig+'&organTransplantNetwork_boolean='+$rootScope.filterData.organTrans+'&cancerAccreditation_boolean='+$rootScope.filterData.canseAccred+'&councilTeachingMembership_boolean='+$rootScope.filterData.councilMeet+'&hhi_boolean='+$rootScope.filterData.HHI;
                     if(sessionStorage.hospiChar){
                                                         var urlHosData = firUrl + secUrl;
                                                         }
                                                         else{
                                                         var urlHosData = firUrl;
                                                         }
                  
                    webServiceCall.getfilteredData(urlHosData,btoa($scope.User+':'+$rootScope.password)).then(function(data) {
                        if (data.hasOwnProperty("message")) {
                          
                        } else {
                            sessionStorage.setItem("selectedstate",$rootScope.filterData.stateSelect);
                            
                            if (data != null && typeof data !== "undefined") {
                                
                                if (data.status != "ZERO_RESULTS") {
                                    $rootScope.filterData.zipCode="";
                                    $scope.filteredHosData = data;
                                    sessionStorage.setItem("filterHospitalData",JSON.stringify(data));
                                    if ($rootScope.filterData.selectGenderModel == '1,2') {
                $rootScope.genderData = 'All Genders';
            } else if ($rootScope.filterData.selectGenderModel == '1') {
                $rootScope.genderData = 'Males';
            } else {
                $rootScope.genderData = 'Females';
            }
            if ($rootScope.filterData.yearData == "Current Year") {
                $scope.mapYearDetails = ' Current Year Estimates';
                sessionStorage.setItem("yearDetails",$scope.mapYearDetails);

            } else if ($rootScope.filterData.yearData == "5-year") {
                $scope.mapYearDetails = ' 5 Year Projections';
                sessionStorage.setItem("yearDetails",$scope.mapYearDetails);
            } else {
                $scope.mapYearDetails = ' 10 Year Projections';
                sessionStorage.setItem("yearDetails",$scope.mapYearDetails);
            }
            if($rootScope.filterData.selectDiseasemodel == "All Disease"){
        $scope.mapDiseaseDetails="Heart Disease and Stroke";
    }
    else{
         $scope.mapDiseaseDetails=$rootScope.filterData.selectDiseasemodel;
    }
                                }
                            }
       sessionStorage.setItem("tier","state");
       $rootScope.showMark="false";
       if($rootScope.tierStat==="2")
       {

           $scope.displayTier2("state");
           $scope.tier2=true;
       }

        else if($rootScope.tierStat==="1")
       {

           $scope.displayTier1("state");
           
       }

      else
       {

           $scope.displayUSGraph("state");
           
       }
            
                        }
                     if(sessionStorage.filterHospitalData.length == 2){

                                  $scope.ErrorPopUp=true;
                                  $scope.errorMessage = "No Hospital Records Found";
                                  setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);

                }    
                    }, function(message) {
                        hideLoader();
                       
                    });
                     
                    }
                      },function (message) {
                      $scope.displayUSGraph();
                        });
                 
                }


            }, function(message) {
                hideLoader();
                
            });
            
        } catch (e) {
           
        }


      }
    }
  }  
    }]);
