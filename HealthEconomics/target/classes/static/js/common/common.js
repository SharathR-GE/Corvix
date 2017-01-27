
var localURL="http://3.209.199.107:9090/corvix/";
var awsserverURL="http://10.229.163.24:80/";
var awsserverURLhttp="http://10.229.163.24:80/";
var awsserverDevURL="https://10.229.163.24:443/";
var awsserverDevURLhttp="http://10.229.163.24:80/corvix/";

var awsserverstageURL="https://urldefense-stg.cloud.gehealthcare.com/corvix/";
var awsserverstageIP="https://10.229.162.119:443/corvix/";
var awsserverprodURL="https://urldefense.cloud.gehealthcare.com/";
var dev ="https://urldefense-dev.cloud.gehealthcare.com/corvix/";
var webserviceURL=localURL;
//var webserviceURL=awsserverURLhttp;

function showLoader(){
	$("#corvix-overlay").show();
    $("#corvix-loading").show();
}
function hideLoader(){
	$("#corvix-overlay").hide();
    $("#corvix-loading").hide();
}