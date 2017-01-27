package com.ge.healtheconomics.constant;
//package com.ge.healtheconomics.constant;
//
//public class HealthEconomicsConstant {
//	public static final String Google_ZipCode_URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
//	// public static final String GoogleCont_ZipCode_URL="&sensor=false";
//	public static final String Openstreetmap_ZipCode_URL = "http://nominatim.openstreetmap.org/reverse?format=json&lat=";
//	// public static final String
//	// OpenstreetmapCont_ZipCode_URL="&zoom=18&addressdetails=1";
//	
//	// USalayer
//	public static final String getUSAData = "select distinct state ,sum(count_2021) as pop_count, sum(cnt_2019) as disease_count  from  app_data.pop_ins_all_disease where ( gender_id=1 or gender_id=2) and ( age_range_id=1 or age_range_id=2 or age_range_id=3 or age_range_id=4) and ( insurance_type=1 or insurance_type=2 or insurance_type=3 or insurance_type=4)   group by state";
//
//	// --login--
//	public static final String getUserCredentails = "select * from app_data.login where username=?";
//
//	// public static final String getUserDetailsbyName"select * from
//	// app_data.login where username=?";
//	public static final String getUserDetailsbyName = "SELECT * FROM app_data.login where username=?";
//	public static final String getUpdateCounterforUserName = "update app_data.login SET count =? WHERE  username =?";
//	public static final String getUpdatefeedbackbyUser = "update app_data.login SET feedback =true WHERE username =?";
//	public static final String getUpdateTermsAndConditionbyUser = "update app_data.login SET termsandcondition =true WHERE username =?";
//	public static final String insertUserDetails = "INSERT INTO app_data.contactus( firstname, lastname, email, phonenumber, job, company, question) VALUES (?, ?, ?, ?, ?, ?, ?)";
//	public static final String getAllContactDetails = "select * from app_data.contactus ";
//
//	// feedback
//	public static final String insertUserFeedback = "insert into app_data.userfeedback values ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//
//	public static final String getLocationFromZipcode = "select * from app_data.mainlocation where zipcode=? ";
//
//	public static final String getPopDiseaseyear0Data1 = "select zip_code ,sum(count_2016) as pop_count, sum(cnt_2014)/";
//
//	public static final String getPopDiseaseyear5Data1 = "select zip_code ,sum(count_2021) as pop_count, sum(cnt_2019)/";
//	
//	public static final String getPopDiseaseyear10Data1 = "select zip_code ,sum(count_2026) as pop_count, sum(cnt_2024)/";
//
//	public static final String getPopDiseaseyearDiseasesfrom=" as disease_count ,landsqmi from "; 
//	// public static final String getPopDiseaseyear5Data2 = " where (
//	// gender_id=? or gender_id=?) and ( age_range_id=? or age_range_id=? or
//	// age_range_id=? or age_range_id=?) and ( insurance_type=? or
//	// insurance_type=? or insurance_type=? or insurance_type=?) group by
//	// zip_code ,landsqmi";
//
//	// public static final String getPopDiseaseyear10Data2 = " where (
//	// gender_id=? or gender_id=?) and ( age_range_id=? or age_range_id=? or
//	// age_range_id=? or age_range_id=?) and ( insurance_type=? or
//	// insurance_type=? or insurance_type=? or insurance_type=?) group by
//	// zip_code ,landsqmi";
//
//	public static final String getPopDiseaseData = " where ( gender_id=? or gender_id=?) and ( age_range_id=? or age_range_id=? or age_range_id=? or age_range_id=?) and ( insurance_type=? or insurance_type=? or insurance_type=? or insurance_type=?)   group by zip_code ,landsqmi";
//
//	public static final String getPopDiseaseDataWithState = " where ( gender_id=? or gender_id=?) and ( age_range_id=? or age_range_id=? or age_range_id=? or age_range_id=?) and ( insurance_type=? or insurance_type=? or insurance_type=? or insurance_type=?) and state=?  group by zip_code ,landsqmi";
//
//	// hospital SQL
//	public static final String getAllHospital = "select * from app_data.hospital where hospital_type !='Health System'";
//	public static final String getAllHospitalOfState = "select * from  app_data.hospital where  hq_state=? and hospital_type !='Health System'";
//
//	/*public static final String getAllHospitalWithoutOwnership = "select * from  app_data.hospital where (hospital_ownership is null)and (number_beds>?) and (number_beds<?)and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";
//	public static final String getAllHospitalAllOwnership = "select * from  app_data.hospital where (number_beds>?) and (number_beds<?)and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";
//	public static final String getAllHospitalWithOwnership = "select * from  app_data.hospital where (hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";
//
//	public static final String getAllHospitalWithoutOwnershipWithState = "select * from  app_data.hospital where (hospital_ownership is null)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?)  and (hq_state=?) and hospital_type !='Health System'  ";
//	public static final String getAllHospitalAllOwnershipWithState = "select * from  app_data.hospital where  (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?)  and (hq_state=?) and hospital_type !='Health System'  ";
//	public static final String getAllHospitalWithOwnershipWithState = "select * from  app_data.hospital where (hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and (hq_state=?) and hospital_type !='Health System'  ";
//*/
//	/*
//	public static final String getAllHospitalWithoutOwnership = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where ( (hospital_ownership is null) and (number_beds>?) and (number_beds<?) and ( hospital_type !='Health System' ))and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?) ) ";
//	public static final String getAllHospitalAllOwnership = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where ((number_beds>?) and (number_beds<?) and ( hospital_type !='Health System' ))and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?) ) ";
//	public static final String getAllHospitalWithOwnership = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where ((hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( hospital_type !='Health System' ) )and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?) ) ";
//
//	public static final String getAllHospitalWithoutOwnershipWithState = "select * from  app_data.hospital where ((hospital_ownership is null) and (number_beds>?) and (number_beds<?) and (hospital_type !='Health System') and (hq_state=?)) and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or (hhi_boolean=?)  ) ";
//	public static final String getAllHospitalAllOwnershipWithState = "select * from  app_data.hospital where ((number_beds>?) and (number_beds<?) and (hospital_type !='Health System') and (hq_state=?)) and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?))   ";
//	public static final String getAllHospitalWithOwnershipWithState = "select * from  app_data.hospital where ((hospital_ownership=?)and (number_beds>?) and (number_beds<?) and (hospital_type !='Health System') and (hq_state=?)) and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?)) ";
//
//   */	
//	// get list for dropdown
//	public static final String getListOfHospitalOwnerShip = "select distinct hospital_ownership from  app_data.hospital where hospital_type !='Health System' order by hospital_ownership";
//	public static final String getListOfStateNameandAbb = "select state_name_c,abbr FROM app_data.state_name_lookup";
//	public static final String getHospitalDetails = "select * from  app_data.hospital where hospital_name=?  and hq_latitude=? and hq_longitude=?";
//
//	public static final String getStateNameFromAbbr = "select state_name_c from  app_data.state_name_lookup where UPPER(abbr) LIKE UPPER('%";
//	public static final String getStateNameFromAbbr2 = "%')";
//
//	public static final String getStateInfoFromStateName = "select * from  app_data.StateInfo where UPPER(state) LIKE UPPER(?)";
//
//	public static final String getDiseasesNamesUnderHeart = "SELECT distinct disease_name FROM app_data.disease_lookup where main_disease='Heart' and disease_name !='All Heart Disease' order by disease_name";
//	
//	
//	// public static final String getDiseasesNamesUnderHeart = "SELECT distinct
//	// disease_name FROM app_data.disease_lookup where main_disease='Heart'
//	// order by disease_name";
//
//	public static final String getDiseasesNamesUnderStroke = "SELECT distinct disease_name FROM app_data.disease_lookup where main_disease='Stroke' order by disease_name";
//
//	// highChart data
//	public static final String getAllDiseaseTrendDataYear0 = "select  distinct state,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 ) ma1,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 ) fa1,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1 ) ma2,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2  ) fa2,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1  ) ma3,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2  ) fa3,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1  ) ma4,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2  ) fa4 from app_data.all_disease_chart_aggr where state=? ";
//	public static final String getAllDiseaseTrendDataYear5 = "select  distinct state,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 ) ma1,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 ) fa1,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1) ma2,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2  ) fa2,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1  ) ma3,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2  ) fa3,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1  ) ma4,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2  ) fa4 from app_data.all_disease_chart_aggr where state=? ";
//	public static final String getAllDiseaseTrendDataYear10 = "select  distinct state,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 ) ma1,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 ) fa1,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1) ma2,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2  ) fa2,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1  ) ma3,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2  ) fa3,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1  ) ma4,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2  ) fa4 from app_data.all_disease_chart_aggr where state=? ";
//
//	public static final String getDisease_id = "SELECT distinct disease_map_id FROM app_data.disease_lookup where disease_name=?";
//
//	public static final String getDiseaseTrendDataYear0 = "select  distinct state,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 and disease_id=?) ma1,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 and disease_id=?) fa1,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1 and disease_id=?) ma2,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2 and disease_id=?) fa2,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1 and disease_id=?) ma3,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2 and disease_id=?) fa3,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1 and disease_id=?) ma4,(select sum(cnt_2014) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2 and disease_id=?) fa4 from app_data.all_disease_chart_aggr where state=? ";
//	public static final String getDiseaseTrendDataYear5 = "select  distinct state,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 and disease_id=?) ma1,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 and disease_id=?) fa1,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1 and disease_id=?) ma2,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2 and disease_id=?) fa2,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1 and disease_id=?) ma3,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2 and disease_id=?) fa3,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1 and disease_id=?) ma4,(select sum(cnt_2019) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2 and disease_id=?) fa4 from app_data.all_disease_chart_aggr where state=? ";
//	public static final String getDiseaseTrendDataYear10 = "select  distinct state,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 and disease_id=?) ma1,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 and disease_id=?) fa1,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1 and disease_id=?) ma2,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2 and disease_id=?) fa2,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1 and disease_id=?) ma3,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2 and disease_id=?) fa3,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1 and disease_id=?) ma4,(select sum(cnt_2024) from app_data.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2 and disease_id=?) fa4 from app_data.all_disease_chart_aggr where state=? ";
//
//	// getFeedback
//	public static final String getAllFeedback = "select * from app_data.userfeedback";
//
//	public static final String getHospitalView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from app_data.hospital where hospital_type !='Health System'";
//
//	// hospital view
//	
//	public static final String getAllHospitalView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from app_data.hospital where hospital_type !='Health System'";
//	public static final String getAllHospitalOfStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where  hq_state=? and hospital_type !='Health System' ";
//	/*
//	public static final String getAllHospitalWithoutOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where (hospital_ownership is null)and (number_beds>?) and (number_beds<?)and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";
//	public static final String getAllHospitalAllOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where (number_beds>?) and (number_beds<?)and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";
//	public static final String getAllHospitalWithOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where (hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";
//
//	public static final String getAllHospitalWithoutOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where (hospital_ownership is null)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?)  and (hq_state=?) and hospital_type !='Health System'  ";
//	public static final String getAllHospitalAllOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where  (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?)  and (hq_state=?) and hospital_type !='Health System'  ";
//	public static final String getAllHospitalWithOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where (hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and (hq_state=?) and hospital_type !='Health System'  ";
//    */
//	
////	public static final String getAllHospitalWithoutOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where ( (hospital_ownership is null) and (number_beds>?) and (number_beds<?) and ( hospital_type !='Health System' ))and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?) ) ";
////	public static final String getAllHospitalAllOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where ((number_beds>?) and (number_beds<?) and ( hospital_type !='Health System' ))and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?) ) ";
////	public static final String getAllHospitalWithOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where ((hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( hospital_type !='Health System' ) )and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?) ) ";
////
////	public static final String getAllHospitalWithoutOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where ((hospital_ownership is null) and (number_beds>?) and (number_beds<?) and (hospital_type !='Health System') and (hq_state=?)) and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or (hhi_boolean=?)  ) ";
////	public static final String getAllHospitalAllOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where ((number_beds>?) and (number_beds<?) and (hospital_type !='Health System') and (hq_state=?)) and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?))   ";
////	public static final String getAllHospitalWithOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  app_data.hospital where ((hospital_ownership=?)and (number_beds>?) and (number_beds<?) and (hospital_type !='Health System') and (hq_state=?)) and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?)) ";
//
//
//	
//	// disease name and table
//	public static final String AllDiseaseTable = "app_data.pop_ins_all_disease";
//	public static final String AllHeartDiseaseTable = "app_data.pop_ins_all_heart_disease";
//	public static final String AllStrokeTable = "app_data.pop_ins_all_stroke";
//	public static final String CardiacDysrhythmiaTable = "app_data.pop_ins_cardiac_dysrhythmia";
//	public static final String AcuteMyocardialInfarctionTable = "app_data.pop_ins_acute_myocardial_infarction";
//	public static final String IschemicStrokeTable = "app_data.pop_ins_ischemic_stroke";
//	public static final String HypertensionTable = "app_data.pop_ins_hypertension";
//	public static final String CoronaryHeartDiseaseTable = "app_data.pop_ins_coronary_heart_disease";
//	public static final String HemorrhagicStrokeTable = "app_data.pop_ins_hemorrhagic_stroke";
//	public static final String HeartFailureTable = "app_data.pop_ins_heart_failure";
//
//	
//	public static final float AllDiseaseTableFirstmax = (float) 1928.57;
//	public static final float AllDiseaseTableSecondmax = (float) 26.21;
//	public static final float AllDiseaseTableThirdmax  = (float) 17.33;
//
//	public static final float AllHeartDiseaseTableFirstmax = (float) 714.28;
//	public static final float AllHeartDiseaseTableSecondmax = (float) 10.03;
//	public static final float AllHeartDiseaseTableThirdmax  = (float) 6.61;
//
//	public static final float AllStrokeTableFirstmax = (float) 142.85;
//	public static final float AllStrokeTableSecondmax = (float) 2.33;
//	public static final float AllStrokeTableThirdmax  = (float) 1.39;
//
//	public static final float CardiacDysrhythmiaTableFirstmax = (float) 454.54;
//	public static final float CardiacDysrhythmiaTableSecondmax = (float) 2.95;
//	public static final float CardiacDysrhythmiaTableThirdmax  = (float) 1.83;
//
//	public static final float AcuteMyocardialInfarctionTableFirstmax = (float) 300.0;
//	public static final float AcuteMyocardialInfarctionTableSecondmax = (float) 2.75;
//	public static final float AcuteMyocardialInfarctionTableThirdmax  = (float) 1.69;
//
//	public static final float IschemicStrokeTableFirstmax = (float) 153.84;
//	public static final float IschemicStrokeTableSecondmax = (float) 2.12;
//	public static final float IschemicStrokeTableThirdmax  = (float) 1.26;
//
//	public static final float HypertensionTableFirstmax = (float) 3.45;
//	public static final float HypertensionTableSecondmax = (float) 0.50;
//	public static final float HypertensionTableThirdmax  = (float) 0.01;
////.18 -.5 
//	public static final float CoronaryHeartDiseaseTableFirstmax = (float) 300.0;
//	public static final float CoronaryHeartDiseaseTableSecondmax = (float) 3.62;
//	public static final float CoronaryHeartDiseaseTableThirdmax  = (float) 2.28;
//
//	public static final float HemorrhagicStrokeTableFirstmax = (float) 3.24;
//	public static final float HemorrhagicStrokeTableSecondmax = (float) 0.28;
//	public static final float HemorrhagicStrokeTableThirdmax  = (float) 0.01;
////0.18028413  0.28
//	public static final float HeartFailureTableFirstmax = (float) 285.71;
//	public static final float HeartFailureTableSecondmax = (float) 3.39;
//	public static final float HeartFailureTableThirdmax = (float) 2.08;
//	
//	
//	
//	
//	
//	
//	
//	
//}
