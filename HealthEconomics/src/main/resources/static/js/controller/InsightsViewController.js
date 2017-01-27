mainapp.controller('InsightsViewController', ['$scope', '$rootScope', '$location', 'webServiceCall', 'toaster','dataServ','$http' ,function($scope, $rootScope, $location, webServiceCall, toaster,dataServ,$http) {

$scope.closeTerms();

$rootScope.closePrivecy();
$rootScope.closeConatctUs();
$scope.closeFeedBack();
    $scope.showerrorbody = true;
    $scope.mapDiseaseDetails="Heart Disease and Stroke";
   
    $rootScope.User = sessionStorage.userVal;
    $scope.showPopup = function() {
        sessionStorage.setItem("hospiChar","true");
        $scope.showPopupValue = !$scope.showPopupValue;
    },
    $scope.hidePopup = function() {
        $scope.showPopupValue = !$scope.showPopupValue;
    }
    $scope.showleftchart = true;
    $scope.showrightchart = true;
    
    $scope.showorhideleftmenu = false;
    $scope.showorhideleftmenuinside = true;

     $scope.hospitalAttributeData={};
     $rootScope.displayMessage="Connecting to Server";
     



      
  
   
      $scope.hosptialAtrribute=false;
      $scope.demo =function(hospitalName,lat,lg){
          if ($scope.showleftchart) {
                $scope.showleftchart = !$scope.showleftchart;
               
                var chart = $('#container').highcharts();
                var el = $('.mainBodyRight');
                el.css('width', '100%');
                chart.setSize(el.width(), 450, false);
              
                $scope.showorhideleftmenu = !$scope.showorhideleftmenu;
                $scope.showorhideleftmenuinside = true;
                $(".collpse-menu").css("left", '-23px');
                $('.collpse-menu').css("background-image", "url('images/rightArrow.png')");
            }
         
           $scope.Gerneral=true;
           $scope.hosptialAtrribute=true;
           $scope.Afillation=false;
           $scope.HospitalResources=false;
           $scope. medicare=false;
           $scope. FinancialMatrics=false;

     


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
           
           $scope.slider_visible = {
                     value:$scope.newVal,
                     options: {
                       floor: 0,
                       ceil: 10000,
                       readOnly: true,
                       showSelectionBar: true
                     }
                   };

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
    $scope.groupRangeArray = {
        "1": "1",
        "2": "2",
        "3": "12",
        "4": "3",
        "5": "13",
        "6": "23",
        "7": "123",
        "8": "4",
        "9": "14",
        "10": "24",
        "11": "124",
        "12": "34",
        "13": "134",
        "14": "234",
        "15": "1234",
    };
    $scope.expandGraph = function() {
            if ($scope.showrightchart) {
                $scope.showrightchart = !$scope.showrightchart;
               
                var chart = $('#container').highcharts();
                var el = $('.mainBodyLetf');
                el.css('width', '100%');
                chart.setSize(el.width(), 450, false);
                $('#container').highcharts().hasUserSize = false;
                $scope.showorhideleftmenu = true;
                $scope.showorhideleftmenuinside = true;
                $(".collpse-menu").css("left", '-23px');
                $('.collpse-menu').css("background-image", "url('images/rightArrow.png')");
            } else {
               
                var chart = $('#container').highcharts();
                var el = $('.mainBodyLetf');
                el.css('width', '49%');
                chart.setSize(el.width(), 450, false);
                $scope.showrightchart = !$scope.showrightchart;
                $('#container').highcharts().hasUserSize = false;
                $scope.showorhideleftmenu = false;
            }
        },
        $scope.expandRightGraph = function() {
            if ($scope.showleftchart) {
                $scope.showleftchart = !$scope.showleftchart;
                
                var chart = $('#container').highcharts();
                var el = $('.mainBodyRight');
                el.css('width', '100%');
                chart.setSize(el.width(), 450, false);
               
                $scope.showorhideleftmenu = !$scope.showorhideleftmenu;
                $scope.showorhideleftmenuinside = true;
                $(".collpse-menu").css("left", '-23px');
                $('.collpse-menu').css("background-image", "url('images/rightArrow.png')");
            } else {
                
                var chart = $('#container').highcharts();
                var el = $('.mainBodyRight');
                el.css('width', '49%');
                chart.setSize(el.width(), 450, false);
                $scope.showleftchart = !$scope.showleftchart;
                
                $scope.showorhideleftmenu = false;
            }
        },
        $scope.hidePopup = function() {
            $scope.showPopupValue = !$scope.showPopupValue;
        },
        $scope.showorhidemenu = function() {
           if ($scope.showorhideleftmenuinside) {
                $scope.showorhideleftmenuinside = !$scope.showorhideleftmenuinside;
                
                $(".collpse-menu").css("left", '-25px');
                $('.collpse-menu').css("background-image", "url('images/leftArrow.png')");
            } else {
                $scope.showorhideleftmenuinside = !$scope.showorhideleftmenuinside;
               
                $(".collpse-menu").css("left", '-23px');
                $('.collpse-menu').css("background-image", "url('images/rightArrow.png')");
            }
       },
        $scope.getProperty = function(propertyName) {
            return $scope.groupRangeArray[propertyName];
        },
        $scope.displayHighCharts = function(result) {
           
            
            var highChartData;
            if ($rootScope.filterData.yearData == "Current Year") {
                highChartData = result.yearReport[0].ageRanges;
            } else if ($rootScope.filterData.yearData == "10-year") {
                highChartData = result.yearReport[2].ageRanges;
            } else {
                highChartData = result.yearReport[1].ageRanges;
            }
            var selectedAgeRange = $rootScope.filterData.selectAgemodel;
            var allageflag = false;
            var maleArray = new Array();
            var femaleArray = new Array();
            var ageRangeArray = new Array();
            var currentyearArray = new Array();
            var fiveyearArray = new Array();
            var tenyearArray = new Array();
            var agesum = 0;
            for (var i = 0; i < selectedAgeRange.length; i++) {
                if (selectedAgeRange[i].id == "All Age") {
                    allageflag = true;
                    break;
                } else {
                    agesum = agesum + parseInt(selectedAgeRange[i].id);
                }
            }
         
            if (allageflag || agesum == 15) {
                for (var i = 0; i < highChartData.length; i++) {
                    ageRangeArray.push(highChartData[i].agerange);
                    maleArray.push(highChartData[i].maleCount);
                    femaleArray.push(highChartData[i].femaleCount);
                                              if($rootScope.filterData.selectGenderModel == "1,2"){
                                              currentyearArray.push(result.yearReport[0].ageRanges[i].allGenderCount);
                                              fiveyearArray.push(result.yearReport[1].ageRanges[i].allGenderCount);
                                              tenyearArray.push(result.yearReport[2].ageRanges[i].allGenderCount);
                                              }else if($rootScope.filterData.selectGenderModel == "1"){
                                              currentyearArray.push(result.yearReport[0].ageRanges[i].maleCount);
                                              fiveyearArray.push(result.yearReport[1].ageRanges[i].maleCount);
                                              tenyearArray.push(result.yearReport[2].ageRanges[i].maleCount);
                                              }else{
                                              currentyearArray.push(result.yearReport[0].ageRanges[i].femaleCount);
                                              fiveyearArray.push(result.yearReport[1].ageRanges[i].femaleCount);
                                              tenyearArray.push(result.yearReport[2].ageRanges[i].femaleCount);
                                              }
                }
            } else {
                var selectedagesum = $scope.getProperty(agesum);
               
                for (var i = 0; i < selectedagesum.length; i++) {
                    var a = selectedagesum[i];
                    
                   
                    ageRangeArray.push(highChartData[a - 1].agerange);
                    maleArray.push(highChartData[a - 1].maleCount);
                    femaleArray.push(highChartData[a - 1].femaleCount);

                                              if($rootScope.filterData.selectGenderModel == "1,2"){
                                              currentyearArray.push(result.yearReport[0].ageRanges[a - 1].allGenderCount);
                                              fiveyearArray.push(result.yearReport[1].ageRanges[a - 1].allGenderCount);
                                              tenyearArray.push(result.yearReport[2].ageRanges[a - 1].allGenderCount);
                                              }else if($rootScope.filterData.selectGenderModel == "1"){
                                              currentyearArray.push(result.yearReport[0].ageRanges[a - 1].maleCount);
                                              fiveyearArray.push(result.yearReport[1].ageRanges[a - 1].maleCount);
                                              tenyearArray.push(result.yearReport[2].ageRanges[a - 1].maleCount);
                                              }else{
                                              currentyearArray.push(result.yearReport[0].ageRanges[a - 1].femaleCount);
                                              fiveyearArray.push(result.yearReport[1].ageRanges[a - 1].femaleCount);
                                              tenyearArray.push(result.yearReport[2].ageRanges[a - 1].femaleCount);
                                              }
                }
            }
            var showmaleseries = $rootScope.filterData.selectGenderModel == "1,2" || $rootScope.filterData.selectGenderModel == "1" ? true : false;
            var showfemaleseries = $rootScope.filterData.selectGenderModel == "1,2" || $rootScope.filterData.selectGenderModel == "2" ? true : false;
          
            $(function() {

                $('#container').highcharts({
                    title: {
                        text: ''
                    },
                    chart: {
                        backgroundColor: '#232222',
                        color: '#fff',
                        polar: true,
                        fontFamily: 'GeInspiraSansRegular'

                    },
                    xAxis: {
                        categories: ageRangeArray, 
                        lineColor: 'transparent',
                        title: {
                            text: 'Age Range',
                            style: {
                                color: '#fff'
                            }
                        },
                        labels: {
                            style: {
                                color: '#fff'
                            }
                        },
                        tickLength: 0

                    },
                    yAxis: {
                        min: 0,
                        gridLineColor: 'transparent',
                        title: {
                            text: 'no of instances',
                            style: {
                                color: '#fff'
                            }
                        },
                        labels: {
                            style: {
                                color: '#fff'
                             }
                        },

                    },
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'top',
                        x: 0,
                        y: 0,
                        floating: true,
                        itemStyle: {
                            'color': '#fff'
                        },
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    },
                    exporting: {
                        buttons: {
                            contextButton: {
                                enabled: false
                            },
                            textButton: {
                                enabled: false
                            }

                        }
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0,
                            groupPadding: 0.1,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        type: 'column',
                        name: 'Male',
                        color: '#e0e0e0',
                        pointWidth:30,
                        visible: showmaleseries,
                        showInLegend: showmaleseries,
                        data: maleArray 
                    }, {
                        type: 'column',
                        name: 'Female',
                        color: '#696969',
                        pointWidth:30,
                        visible: showfemaleseries,
                        showInLegend: showfemaleseries,
                        data: femaleArray 
                    }, {
                        type: 'line',
                        name: 'Current',
                        color: '#3C73BA',
                        data: currentyearArray, 
                        marker: {
                            enabled: true
                        }
                    }, {
                        type: 'line',
                        name: '5 year',
                        color: '#31F644',
                        data: fiveyearArray, 
                        marker: {
                            enabled: true
                        }
                    }, {
                        type: 'line',
                        name: '10 year',
                        color: '#E12E2E',
                        data: tenyearArray, 
                        marker: {
                            enabled: true
                        }

                    }]
                });
            });
        },
        
        $scope.showhighCharts = function() {
           $rootScope.displayMessage="Generating Chart and Map..";
            showLoader();
            $("#mapviewbutton").removeClass("HealthEco-header-button-selected").addClass("HealthEco-header-button-unselected");
            $("#insightsviewbutton").removeClass("HealthEco-header-button-unselected").addClass("HealthEco-header-button-selected");
            
            
            webServiceCall.getHighChartData(btoa($scope.User+':'+$rootScope.password)).then(function(result) {
                $scope.displayHighCharts(result);

            }, function(message) {
                
            });
        },


         //Map

 $scope.showrightSideGraph = function() {
           $rootScope.displayMessage="Generating Chart and Map..";
            showLoader();
             
            d3.select("svg").remove();
            d3.select("#all-g").remove();
   

         
          var color = d3.scale.threshold()
        .domain([1000,5000,10000,200000])
        .range(["#d3d3d3", "#c6c6c6", "#b9b9b9","#acacac"])
            var legend_labels = ["<1000 (Population Count by Zipcode)", "1001-5000", "5001-10000", "10001-20000", ">20000"]
        
     


 var c_scale = d3.scale.linear()
  .domain([0,100,800])
  .range(['#fbf545','#d18025','#a50505'])
  .interpolate(d3.interpolateRgb);
        var ext_color_domain = [5000, 10000,20000]
    
        var ext_color_domainDisease = [0,20,40,50,100]
        var legend_labelsDisease = ["<10 (Disease Density as per Zip-Code wise Population)", ">10-<20", ">20-<40", ">40-<50", ">50"]

           
                 File="topojson/"+sessionStorage.selectedstate+".json";
                 
            var width =1000,
            height = 500;
          scale = 1;



             var coordinates=JSON.parse(sessionStorage.stateCord);

            


        var projection = d3.geo.mercator()
              .scale(coordinates.scale)
              .center([coordinates.x_axis, coordinates.y_axis])
              .translate([width / 2,500]);

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

                 svg.selectAll("circle")
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

        var svg = d3.select("#rightChart").append("svg")
            .attr("width",width)
            .attr("height",height)
            .call(zoom)
            .append("g").attr("id", "all-g");


        var div = d3.select("#rightChart").append("div")   
          .attr("class", "tooltip")               
          .style("opacity", 0);


         
      var sf = [-122.417, 37.775],
          ny = [-74.0064, 40.7142];
      var hosicon="";

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

//zoom function

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


       


          queue()
            .defer(d3.json, File)
            .await(ready2);

         function ready2(error, topology) {
            
            var rateById = {};
            var populationById={};
            var diseaseById={};
            var diseaseDensityByID={};
            var stateDataVar=JSON.parse(sessionStorage.filterPopNDiseaseData);
            var stateData= stateDataVar[0];

            var stateHosVar=JSON.parse(sessionStorage.filterHospitalData);
           var colorDisease = d3.scale.threshold()
        .domain([stateDataVar[0].thirdmaxDiseaseDensity,stateDataVar[0].secondmaxDiseaseDensity,stateDataVar[0].firstmaxDiseaseDensity])
          .range(["#fbf545","#d18025", "#a50505"]); 
          
            
           
            stateData.populationCount.forEach(function(d) { rateById[d.zipcode] = +d.popCount;
                                                                                      populationById[d.zipcode] = d.popCount;
                                                                                       
                                                                                       diseaseById[d.zipcode] = +d.diseaseCount;
                                                                                        
                                                                                       diseaseDensityByID[d.zipcode]=d.diseaseDensity;


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
              return "#ffffff"
            }
            else
            {
            return color(populationById[d.properties.ZCTA5CE10]); }
          })
              .attr("stroke", "#999")
              .attr("stroke-width", 0.5/scale)
              .attr("d", path)
              .style("opacity", 1)
              .on("mouseover", function(d) {


                  if((diseaseById[d.properties.ZCTA5CE10])===undefined)
                {
                   
                  populationById[d.properties.ZCTA5CE10]="Not Available";

                  diseaseById[d.properties.ZCTA5CE10]="Not Available";

                }
            

            d3.select(this).transition().duration(300).style({'stroke-opacity':1,'stroke':'#F00'});
                div.transition().duration(300)
                   .style("opacity", 1)
              div.html("<strong>ZipCode : </strong> "+d.properties.ZCTA5CE10+"<br/><strong>Population Count : "+populationById[d.properties.ZCTA5CE10]+"</strong>"+"<br/><strong>Disease Density : "+diseaseDensityByID[d.properties.ZCTA5CE10])
                   .style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY - 30) + "px");
                                      })
                   .on("mouseout", function() {
                   d3.select(this)
                     .transition().duration(300)
                     .style({'stroke-opacity':1,'stroke':'#999'});   
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

            svg.selectAll("circle")
       .data(stateHosVar)
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
            
          

        d3.selectAll('#zoom_in').on('click', zoomClick);
        d3.selectAll('#zoom_out').on('click', zoomClick);


        hideLoader();

    
   

            };


   
        },
     
        
        
        

    $scope.showState = function() {
       
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
        	
        	if(typeof $rootScope.filterData.stateSelect=="undefined" || $rootScope.filterData.stateSelect==""){
                $rootScope.filterData.stateSelect="IL";
              } 
        	else{
        		
                for(i=0;i<$scope.statesData.length;i++){
                
                  if($rootScope.filterData.stateSelect==$scope.statesData[i].abbreviation){
                	 break; 
                  }
                  else if(i==$scope.statesData.length-1){
                    $rootScope.filterData.stateSelect="IL";
                  }
                }
              } 
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
                            sessionStorage.setItem("stateValue",$rootScope.filterData.stateSelect);
                            $scope.showhighCharts();
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
                           
                            $scope.showrightSideGraph();
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
    $scope.mapAgeDetails = "All";
    $rootScope.genderData = 'All Genders';
   if(sessionStorage.yearDetails){
       $scope.mapYearDetails =sessionStorage.yearDetails;
    }
    else{
    $scope.mapYearDetails = ' Current Year Estimates';
  }
    $rootScope.mapviewFilterClass = "mapview-filter";
    $scope.diseaseData = "All Disease";

    $scope.showData = function(flowvalue) {
      
        $scope.checkUS = false;
        $scope.showUs = false;
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

        $scope.mapAgeDetails = "";

        if (!$rootScope.filterData.zipCode) {
            if(flowvalue=="1"){
                hideLoader();
                $rootScope.filterData.stateSelect="IL";
                $scope.showState();
            }else{
                hideLoader();
            $scope.ErrorPopUp=true;
                $scope.errorMessage = "Please Enter Zip Code or Select State";
                setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
            }
        } else {

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
            try {
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

               
                  if(sessionStorage.diseaseModel)
                  {
                    $rootScope.filterData.selectDiseasemodel=sessionStorage.diseaseModel;
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
                $scope.diseaseModel=$rootScope.filterData.selectDiseasemodel;
               
              
               var url=webserviceURL+'getPopulation?gender='+$rootScope.filterData.selectGenderModel+'&age='+ageData+'&zipcode='+$rootScope.filterData.zipCode+'&years='+$scope.year+'&disease='+$scope.diseaseModel+'&insurancetype='+healthData;
                webServiceCall.getfilteredData(url,btoa($scope.User+':'+$rootScope.password)).then(function(data) {
                    if (data.hasOwnProperty("message")) {
                        if (data.message == "Invalid Zipcode") {
                            hideLoader();
                            if(flowvalue=="1"){
                 
 if(flowvalue=="1"){
                hideLoader();
           
                $rootScope.filterData.stateSelect="IL";
                $scope.showState();
}
                            }else{
                           $scope.ErrorPopUp=true;
                           $scope.errorMessage = "Invalid Zipcode";
                           setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                             }
                        } else {
                            hideLoader();
                            if(flowvalue=="1"){
                        $scope.ErrorPopUp=true;
                            $scope.errorMessage = "Server Error";
                            setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                            }else{
                           $scope.ErrorPopUp=true;
                           $scope.errorMessage = "Server Error";
                           setTimeout(function() { 
                     $scope.$apply(function () {
                         $scope.ErrorPopUp=false;
                    });
                  },1500);
                            }
                        }
                    } else {
                        if (data != null && typeof data !== "undefined") {
                            if (data.status != "ZERO_RESULTS") {
                                $scope.filteredPopNDiseaseCount = data;
                                sessionStorage.setItem("filterPopNDiseaseData",JSON.stringify(data));
                                $rootScope.selectedState = data[0].state;
                                $rootScope.thirdmaxDiseaseDensity=data[0].thirdmaxDiseaseDensity;  
                            $rootScope.secondmaxDiseaseDensity=data[0].secondmaxDiseaseDensity;
                                $rootScope.filterData.stateSelect = $rootScope.selectedState;
                                 sessionStorage.setItem("selectedstate",$rootScope.filterData.stateSelect);
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

                               
                           }
                      }
                      var nullVar = $rootScope.filterData.hospOwnership;
                        
                        var firUrl=webserviceURL+'gethospitalview?state='+a;

                      
                     
                      var secUrl='&numberBeds='+$rootScope.filterData.sliderVal+'&numberBedsTo='+$rootScope.filterData.sliderValMax+"&academicMedicalCenter_boolean="+$rootScope.filterData.academicMedi+'&soleCommunityHospital_boolean='+$rootScope.filterData.soleComm+'&hospitalOwnership='+$rootScope.filterData.hospOwnership+'&magnetDesignation_boolean='+$rootScope.filterData.magntDesig+'&organTransplantNetwork_boolean='+$rootScope.filterData.organTrans+'&cancerAccreditation_boolean='+$rootScope.filterData.canseAccred+'&councilTeachingMembership_boolean='+$rootScope.filterData.councilMeet+'&hhi_boolean='+$rootScope.filterData.HHI;
                        var zipcodeurl="https://maps.googleapis.com/maps/api/geocode/json?address="+$rootScope.filterData.zipCode;
                                                         if(sessionStorage.hospiChar){
                                                         var urlHosData = firUrl + secUrl;
                                                         }
                                                         else{
                                                         var urlHosData = firUrl;
                                                         }
                                                         
                    
                        webServiceCall.getfilteredData(urlHosData,btoa($scope.User+':'+$rootScope.password)).then(function(data) {
                            if (data.hasOwnProperty("message")) {
                                hideLoader();
                                toaster.pop('error', "Invalid Zip Code");
                            } else {
                                if (data != null && typeof data !== "undefined") {
                                    if (data.status != "ZERO_RESULTS") {
                                        $scope.filteredHosData = data;
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
                    $scope.mapYearDetails = '  5 Year Projections';
                    sessionStorage.setItem("yearDetails",$scope.mapYearDetails);
                } else {
                    $scope.mapYearDetails = '  10 Year Projections';
                    sessionStorage.setItem("yearDetails",$scope.mapYearDetails);
                }
                if($rootScope.filterData.selectDiseasemodel == "All Disease"){
        $scope.mapDiseaseDetails="Heart Disease and Stroke";
    }
    else{
         $scope.mapDiseaseDetails=$rootScope.filterData.selectDiseasemodel;
    }
                $rootScope.mapviewFilterClass = "mapview-filter";
                                $scope.showrightSideGraph();
                                sessionStorage.setItem("selectedstate",$rootScope.filterData.stateSelect);
                                sessionStorage.setItem("zipCodeValue",$rootScope.filterData.zipCode);
                                sessionStorage.setItem("stateValue",$rootScope.filterData.stateSelect); 
                                $scope.showhighCharts();
                                            }
                                        },function (message) {
                                          $scope.displayUSGraph();
                                        });
                                       
                                    }
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
                            console.log(message);
                        });
                     
                    }

        
                      },function (message) {
                      $scope.displayUSGraph();
                        });
                        
                    }


                }, function(message) {
                    hideLoader();
                    console.log(message);
                });
                
            } catch (e) {
                console.log(e.message);
            }
        }
      }
    }
    },
    $scope.displaymapvalue = function(){
    
        sessionStorage.setItem("firstTimeMap",false);
        $rootScope.tierStat="tier1&2";
      $rootScope.displayMessage="Connected..Loading Response..";
      showLoader();
      $rootScope.flowValue = "afterInsight";
        var ownershipArray = sessionStorage.getItem("hospOwnership").split(",");
        $scope.hospOwnershipData = ownershipArray;

                 webServiceCall.getUserhospNstate(webserviceURL+'diseases',btoa($scope.User+':'+$rootScope.password)).then(function (data) {
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
        if(sessionStorage.userRole=="Admin"){
              $rootScope.dwnldLink=true;
              $rootScope.downloadcontact=true;
        }
        else{
          $rootScope.dwnldLink=false;
          $rootScope.downloadcontact=false;

        }
        if (sessionStorage.getItem("statesAll") == null) {
           
            webServiceCall.getUserhospNstate(webserviceURL+'state',btoa($scope.User+':'+$rootScope.password)).then(function(data) {
                if (data != null && typeof data !== "undefined") {
                    if (data.status != "ZERO_RESULTS") {
                        $scope.statesData = data;
                        sessionStorage.setItem("statesAll", JSON.stringify(data));
                    }
                }

if($rootScope.filterData.zipCode){
          $scope.showData("1");
        }
        else{
          $scope.showState();
        }
      
    
            }, function(message) {

            });
        } else {
           
            $scope.statesData = JSON.parse(sessionStorage.getItem("statesAll"));
            if($rootScope.filterData.zipCode){
          $scope.showData("1");
        }
        else{
          $scope.showState();
        }
      
    
        }
        
   
    
    },
    $scope.displaymapvalue();
$rootScope.dwnloadFeedback=function(){

      var dwnldUrl = webserviceURL+"download";
      webServiceCall.getUserhospNstate(dwnldUrl,btoa($scope.User+':'+$rootScope.password)).then(function (data){
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



}]);