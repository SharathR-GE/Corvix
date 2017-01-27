mainapp.factory('webServiceCall', ['$q','$http', function($q,$http) {
   return{
    getUserhospNstate : function(paramUrl,paramAuth){
      
      var deferred = $q.defer();
      
         var baseUrl = paramUrl;
         $http({
             method: 'GET',
              headers: {
             'Authorization': 'Basic ' + paramAuth 
             
              },
             url: baseUrl,
             
             })
         .success(function(data, status, headers) {
           
           
           deferred.resolve(data);
         })
         .error(function(data) {
            
           deferred.resolve(data);
         });
         return deferred.promise;
     },
     hitGoogleApi : function(paramUrl){
         
      var deferred = $q.defer();
      
         var baseUrl = paramUrl;
         $http({
             method: 'GET',
             url: baseUrl,
             
             })
         .success(function(data, status, headers) {
          
           
           deferred.resolve(data);
         })
         .error(function(data) {
             
           deferred.resolve(data);
         });
         return deferred.promise;
     },
   getUserZipCode : function(latitude,longitude){
         
      var deferred = $q.defer();
      
         var baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+","+longitude+'&sensor=false';
         $http({
             method: 'GET',
             url: baseUrl,
             
             })
         .success(function(data, status, headers) {
           
           deferred.resolve(data);
         })
         .error(function(data) {
          
           deferred.resolve(data);
         });
         return deferred.promise;
     },
     getHighChartData : function(paramAuth){
       var deferred = $q.defer();
       var state="";
       if(sessionStorage.selectedstate){
         state=sessionStorage.selectedstate;
       }else{
         state="IL";
       }
    


      var baseUrl =webserviceURL+'GetCount?state='+state+'&disease='+sessionStorage.selectedDisease;


         $http({
             method: 'GET',
             headers: {
              'Authorization': 'Basic ' + paramAuth
              
              },
             url: baseUrl,
             
             })
         .success(function(data, status, headers) {
            
           
           deferred.resolve(data);
         })
         .error(function(data) {
             
           deferred.resolve(data);
         });
         return deferred.promise;
     },
    getfilteredData : function(paramUrl,paramAuth){
         
         var deferred = $q.defer();
        
          var filteredBaseUrl =paramUrl;
          
          $http({
              method: 'GET',
               headers: {
              'Authorization': 'Basic ' + paramAuth
              
              },
              url: filteredBaseUrl,
              
              })
          .success(function(data, status, headers) {
              
            deferred.resolve(data);
          })
          .error(function(data) {
             
              deferred.resolve(data);
          });
          return deferred.promise;
      },




      saveContact : function(fname,lname,conemail,conphone,jobtitle,facility,con_question,paramAuth){


          var data = {


             firstName:fname,
             lastName:lname,
             email:conemail, 
             phonenumber:conphone,
             job:jobtitle,
             company:facility,
             question:con_question 


          };


          var deferred = $q.defer();




           $http({


               method: 'post',
               headers: {
              'Authorization': 'Basic ' + paramAuth
             
              },


               url: webserviceURL+'contactus',


               data:data,
                           


               })


           .success(function(data, status, headers) {


               hideLoader();


              


             deferred.resolve(data);


           })


           .error(deferred.reject,function() {


               hideLoader();




             

           


           });


           return deferred.promise;


       },
  


       validateUser : function(usrNameParam,pwdParam,paramAuth){


          var data = {


                  username:usrNameParam,


                  password:pwdParam


          };


          var deferred = $q.defer();




           $http({


               method: 'post',
               headers: {
             
              },
               url: webserviceURL+'login',


               data:data,
                           


               })


           .success(function(data, status, headers) {


               hideLoader();


              


             deferred.resolve(data);


           })


           .error(deferred.reject,function() {


               hideLoader();


         



           


           });


           return deferred.promise;


       },
       agreeTerms:function(usr,areed,paramAuth){

          var data = {


                  username:usr,


                  termsandcondition:areed


          };


          var deferred = $q.defer();




           $http({


               method: 'post',
               headers: {
              'Authorization': 'Basic ' + paramAuth
              
              },


               url: webserviceURL+'termsandcondition',


               data:data,
                           


               })


           .success(function(data, status, headers) {


               hideLoader();


             


             deferred.resolve(data);


           })


           .error(deferred.reject,function() {


               hideLoader();





           


           });


           return deferred.promise;


       },
        checkUser:function(usr){
        var deferred = $q.defer();
             
                 var baseUrl = webserviceURL+'getuserinfo?username='+usr;
                 $http({
                     method: 'GET',
                      headers: {
                    
                      },
                     url: baseUrl,
                     
                     })
                 .success(function(data, status, headers) {
                    
                   
                   deferred.resolve(data);
                 })
                 .error(function(data) {
                    
                   deferred.resolve(data);
                 });
                 return deferred.promise;
        },
       saveFeedback : function(custName,busisAdd,usinEmail,customerProblem2,customerProblem3,toolContent_1,toolContent_2,toolContent_3,ExpValue1,ExpValue2,ExpValue3,ExpValue4,ExpValue5,ExpValue6,ExpValue7,ExpValue8,ExpValue9,ExpValue10,ExpValue11,marketchekvalue,fianl,paramAuth){

          var data = {
                  customerName:custName,
                  businessAddress:busisAdd,
                  businessEmail:usinEmail,
                  customerProblem_1:customerProblem2,
                  customerProblem_2:customerProblem3,
                  toolContent_1:toolContent_1,
                  toolContent_2:toolContent_2,
                  toolContent_3:toolContent_3,
                  userExperience_1:ExpValue1,
                  userExperience_2:ExpValue2,
                  userExperience_3:ExpValue3,
                  userExperience_4:ExpValue4,
                  userExperience_5:ExpValue5,
                  userExperience_6:ExpValue6,
                  userExperience_7:ExpValue7,
                  userExperience_8:ExpValue8,
                  userExperience_9:ExpValue9,
                  userExperience_10:ExpValue10,
                  userExperience_11:ExpValue11,
                  market_1:marketchekvalue,
                  final_1:fianl
            };

          var deferred = $q.defer();



           $http({

               method: 'post',
                headers: {
              'Authorization': 'Basic ' + paramAuth
             
              },

              url: webserviceURL+'userfeedback',
             

               data:data,

               })

           .success(function(data, status, headers) {

               hideLoader();

             

             deferred.resolve(data);

           })

           .error(deferred.reject,function() {

               hideLoader();

         

            



           });

           return deferred.promise;

       },
       dwnld:function(paramUrl,paramAuth){
         
      var deferred = $q.defer();
      
         var baseUrl = paramUrl;
         $http({
             method: 'GET',
             headers: {
              'Authorization': 'Basic ' + paramAuth
             
              },
             url: baseUrl,
             
             })
         .success(function(data, status, headers) {
           
           deferred.resolve(data);
         })
         .error(function(data) {
            
           deferred.resolve(data);
         });
         return deferred.promise;
     },




   };
 }]);
 