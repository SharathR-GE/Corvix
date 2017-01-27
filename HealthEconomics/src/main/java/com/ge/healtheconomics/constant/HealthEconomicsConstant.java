package com.ge.healtheconomics.constant;

public class HealthEconomicsConstant {
	public static final String Google_ZipCode_URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
	// public static final String GoogleCont_ZipCode_URL="&sensor=false";
	public static final String Openstreetmap_ZipCode_URL = "http://nominatim.openstreetmap.org/reverse?format=json&lat=";
	// public static final String
	// OpenstreetmapCont_ZipCode_URL="&zoom=18&addressdetails=1";
	// USalayer
	public static final String getUSAData = "select distinct state ,sum(count_2021) as pop_count, sum(cnt_2019) as disease_count  from  healthschema.pop_ins_all_disease where ( gender_id=1 or gender_id=2) and ( age_range_id=1 or age_range_id=2 or age_range_id=3 or age_range_id=4) and ( insurance_type=1 or insurance_type=2 or insurance_type=3 or insurance_type=4)   group by state";

	// --login--
	public static final String getUserCredentails = "select * from healthschema.login where username=?";
	// public static final String getUserDetailsbyName"select * from
	// healthschema.login where username=?";
	public static final String getUserDetailsbyName = "SELECT * FROM healthschema.login where username=?";
	public static final String getUpdateCounterforUserName = "update healthschema.login SET count =? WHERE  username =?";
	public static final String getUpdatefeedbackbyUser = "update healthschema.login SET feedback =true WHERE username =?";
	public static final String getUpdateTermsAndConditionbyUser = "update healthschema.login SET termsandcondition =true WHERE username =?";
	public static final String insertUserDetails = "INSERT INTO healthschema.contactus( firstname, lastname, email, phonenumber, job, company, question) VALUES (?, ?, ?, ?, ?, ?, ?)";
	public static final String getAllContactDetails = "select * from healthschema.contactus";

	// feedback
	public static final String insertUserFeedback = "insert into healthschema.userfeedback values ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

	public static final String getLocationFromZipcode = "select * from healthschema.mainlocation where zipcode=? ";

	/*public static final String getPopDiseaseyear0Data1 = "select zip_code ,sum(count_2016) as pop_count, sum(cnt_2014) as disease_count ,landsqmi from ";

	public static final String getPopDiseaseyear5Data1 = "select zip_code ,sum(count_2021) as pop_count, sum(cnt_2019) as disease_count,landsqmi from ";

	public static final String getPopDiseaseyear10Data1 = "select zip_code ,sum(count_2026) as pop_count, sum(cnt_2024) as disease_count,landsqmi from ";
	*/

	//Population data and disease data
	public static final String getPopDiseaseyear0Data1 = "select zip_code ,sum(count_2016) as pop_count, sum(cnt_2014)/";

	public static final String getPopDiseaseyear5Data1 = "select zip_code ,sum(count_2021) as pop_count, sum(cnt_2019)/";
	
	public static final String getPopDiseaseyear10Data1 = "select zip_code ,sum(count_2026) as pop_count, sum(cnt_2024)/";

	public static final String getPopDiseaseyearDiseasesfrom=" as disease_count ,landsqmi from "; 

	public static final String getPopDiseaseData = " where ( gender_id=? or gender_id=?) and ( age_range_id=? or age_range_id=? or age_range_id=? or age_range_id=?) and ( insurance_type=? or insurance_type=? or insurance_type=? or insurance_type=?)   group by zip_code ,landsqmi";

	public static final String getPopDiseaseDataWithState = " where ( gender_id=? or gender_id=?) and ( age_range_id=? or age_range_id=? or age_range_id=? or age_range_id=?) and ( insurance_type=? or insurance_type=? or insurance_type=? or insurance_type=?) and state=?  group by zip_code ,landsqmi";

	// hospital SQL
	public static final String getAllHospital = "select * from healthschema.hospital where hospital_type !='Health System' ";
	public static final String getAllHospitalOfState = "select * from  healthschema.hospital where  hq_state=? and hospital_type !='Health System' ";

	public static final String getAllHospitalWithoutOwnership = "select * from  healthschema.hospital where (hospital_ownership is null)and (number_beds>?)and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?)  and hospital_type !='Health System'  ";
	public static final String getAllHospitalAllOwnership = "select * from  healthschema.hospital where (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";
	public static final String getAllHospitalWithOwnership = "select * from  healthschema.hospital where (hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";

	public static final String getAllHospitalWithoutOwnershipWithState = "select * from  healthschema.hospital where (hospital_ownership is null) and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?)  and (hq_state=?) and hospital_type !='Health System'  ";
	public static final String getAllHospitalAllOwnershipWithState = "select * from  healthschema.hospital where  (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?)  and (hq_state=?) and hospital_type !='Health System'  ";
	public static final String getAllHospitalWithOwnershipWithState = "select * from  healthschema.hospital where (hospital_ownership=?) and (number_beds>?) and (number_beds<?)and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and (hq_state=?) and hospital_type !='Health System'  ";

	// get list for dropdown
	public static final String getListOfHospitalOwnerShip = "select distinct hospital_ownership from  healthschema.hospital where hospital_type !='Health System' order by hospital_ownership";
	public static final String getListOfStateNameandAbb = "select state_name_c,abbr FROM healthschema.state_name_lookup";
	public static final String getHospitalDetails = "select * from  healthschema.hospital where hospital_name=?  and hq_latitude=? and hq_longitude=? ";

	public static final String getStateNameFromAbbr = "select state_name_c from  healthschema.state_name_lookup where UPPER(abbr) LIKE UPPER('%";
	public static final String getStateNameFromAbbr2 = "%')";

	public static final String getStateInfoFromStateName = "select * from  healthschema.StateInfo where UPPER(state) LIKE UPPER(?)";

	// public static final String getDiseasesNamesUnderHeart = "SELECT distinct
	// disease_name FROM healthschema.disease_lookup where main_disease='Heart'
	// order by disease_name";
	public static final String getDiseasesNamesUnderHeart = "SELECT distinct disease_name FROM healthschema.disease_lookup where main_disease='Heart' and disease_name !='All Heart Disease' order by disease_name";

	public static final String getDiseasesNamesUnderStroke = "SELECT distinct disease_name FROM healthschema.disease_lookup where main_disease='Stroke' order by disease_name";

	// highChart data
	public static final String getAllDiseaseTrendDataYear0 = "select  distinct state,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 ) ma1,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 ) fa1,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1 ) ma2,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2  ) fa2,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1  ) ma3,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2  ) fa3,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1  ) ma4,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2  ) fa4 from healthschema.all_disease_chart_aggr where state=? ";
	public static final String getAllDiseaseTrendDataYear5 = "select  distinct state,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 ) ma1,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 ) fa1,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1) ma2,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2  ) fa2,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1  ) ma3,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2  ) fa3,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1  ) ma4,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2  ) fa4 from healthschema.all_disease_chart_aggr where state=? ";
	public static final String getAllDiseaseTrendDataYear10 = "select  distinct state,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 ) ma1,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 ) fa1,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1) ma2,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2  ) fa2,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1  ) ma3,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2  ) fa3,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1  ) ma4,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2  ) fa4 from healthschema.all_disease_chart_aggr where state=? ";

	public static final String getDisease_id = "SELECT distinct disease_map_id FROM healthschema.disease_lookup where disease_name=?";

	public static final String getDiseaseTrendDataYear0 = "select  distinct state,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 and disease_id=?) ma1,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 and disease_id=?) fa1,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1 and disease_id=?) ma2,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2 and disease_id=?) fa2,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1 and disease_id=?) ma3,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2 and disease_id=?) fa3,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1 and disease_id=?) ma4,(select sum(cnt_2014) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2 and disease_id=?) fa4 from healthschema.all_disease_chart_aggr where state=? ";
	public static final String getDiseaseTrendDataYear5 = "select  distinct state,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 and disease_id=?) ma1,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 and disease_id=?) fa1,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1 and disease_id=?) ma2,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2 and disease_id=?) fa2,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1 and disease_id=?) ma3,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2 and disease_id=?) fa3,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1 and disease_id=?) ma4,(select sum(cnt_2019) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2 and disease_id=?) fa4 from healthschema.all_disease_chart_aggr where state=? ";
	public static final String getDiseaseTrendDataYear10 = "select  distinct state,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=1 and disease_id=?) ma1,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=1 and gender_id=2 and disease_id=?) fa1,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=1 and disease_id=?) ma2,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=2 and gender_id=2 and disease_id=?) fa2,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=1 and disease_id=?) ma3,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=3 and gender_id=2 and disease_id=?) fa3,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=1 and disease_id=?) ma4,(select sum(cnt_2024) from healthschema.all_disease_chart_aggr where state=? and age_range_id=4 and gender_id=2 and disease_id=?) fa4 from healthschema.all_disease_chart_aggr where state=? ";

	// getFeedback
	public static final String getAllFeedback = "select * from healthschema.userfeedback";

	public static final String getHospitalView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from healthschema.hospital where hospital_type !='Health System'";
	// hospital view
	public static final String getAllHospitalView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from healthschema.hospital where hospital_type !='Health System'";
	public static final String getAllHospitalOfStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where  hq_state=? and hospital_type !='Health System'";

	public static final String getAllHospitalWithoutOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where (hospital_ownership is null)and (number_beds>?) and (number_beds<?)and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";
	public static final String getAllHospitalAllOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where (number_beds>?) and (number_beds<?)and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";
	public static final String getAllHospitalWithOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where (hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and hospital_type !='Health System'  ";

	public static final String getAllHospitalWithoutOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where (hospital_ownership is null)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?)  and (hq_state=?) and hospital_type !='Health System'  ";
	public static final String getAllHospitalAllOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where  (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?)  and (hq_state=?) and hospital_type !='Health System'  ";
	public static final String getAllHospitalWithOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where (hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( magnetDesignation_boolean=?)  and (organTransplantNetwork_boolean=?)and (cancerAccreditation_boolean=?)and (soleCommunityHospital_boolean=?) and (academicMedicalCenter_boolean=?) and (councilTeachingMembership_boolean=?)and(hhi_boolean=?) and (hq_state=?) and hospital_type !='Health System'  ";

//	public static final String getAllHospitalWithoutOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where ( (hospital_ownership is null) and (number_beds>?) and (number_beds<?) and ( hospital_type !='Health System' ))and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?) ) ";
//	public static final String getAllHospitalAllOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where ((number_beds>?) and (number_beds<?) and ( hospital_type !='Health System' ))and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?) ) ";
//	public static final String getAllHospitalWithOwnershipView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where ((hospital_ownership=?)and (number_beds>?) and (number_beds<?) and ( hospital_type !='Health System' ) )and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?) ) ";
//
//	public static final String getAllHospitalWithoutOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where ((hospital_ownership is null) and (number_beds>?) and (number_beds<?) and (hospital_type !='Health System') and (hq_state=?)) and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or (hhi_boolean=?)  ) ";
//	public static final String getAllHospitalAllOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where ((number_beds>?) and (number_beds<?) and (hospital_type !='Health System') and (hq_state=?)) and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?))   ";
//	public static final String getAllHospitalWithOwnershipWithStateView = "select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where ((hospital_ownership=?)and (number_beds>?) and (number_beds<?) and (hospital_type !='Health System') and (hq_state=?)) and (( magnetDesignation_boolean=?)  or (organTransplantNetwork_boolean=?)or (cancerAccreditation_boolean=?)or (soleCommunityHospital_boolean=?) or (academicMedicalCenter_boolean=?) or (councilTeachingMembership_boolean=?)or(hhi_boolean=?)) ";


	// disease name and table
	public static final String AllDiseaseTable = "healthschema.pop_ins_all_disease";
	public static final String AllHeartDiseaseTable = "healthschema.pop_ins_all_heart_disease";
	public static final String AllStrokeTable = "healthschema.pop_ins_all_stroke";
	public static final String CardiacDysrhythmiaTable = "healthschema.pop_ins_cardiac_dysrhythmia";
	public static final String AcuteMyocardialInfarctionTable = "healthschema.pop_ins_acute_myocardial_infarction";
	public static final String IschemicStrokeTable = "healthschema.pop_ins_ischemic_stroke";
	public static final String HypertensionTable = "healthschema.pop_ins_hypertension";
	public static final String CoronaryHeartDiseaseTable = "healthschema.pop_ins_coronary_heart_disease";
	public static final String HemorrhagicStrokeTable = "healthschema.pop_ins_hemorrhagic_stroke";
	public static final String HeartFailureTable = "healthschema.pop_ins_heart_failure";
	
	
	
	//disease density
	public static final float AllDiseaseTableFirstmax = (float) 1928.5714;
	public static final float AllDiseaseTableSecondmax = (float) 26.0440;
	public static final float AllDiseaseTableThirdmax  = (float) 18.8269;

	public static final float AllHeartDiseaseTableFirstmax = (float) 714.2857;
	public static final float AllHeartDiseaseTableSecondmax = (float) 9.7297;
	public static final float AllHeartDiseaseTableThirdmax  = (float) 7.0422;

	public static final float AllStrokeTableFirstmax = (float) 142.8571;
	public static final float AllStrokeTableSecondmax = (float) 2.6560;
	public static final float AllStrokeTableThirdmax  = (float) 1.8248;

	public static final float CardiacDysrhythmiaTableFirstmax = (float) 416.666;
	public static final float CardiacDysrhythmiaTableSecondmax = (float) 3.3222;
	public static final float CardiacDysrhythmiaTableThirdmax  = (float) 2.2945;

	public static final float AcuteMyocardialInfarctionTableFirstmax = (float) 250;
	public static final float AcuteMyocardialInfarctionTableSecondmax = (float) 2.9769;
	public static final float AcuteMyocardialInfarctionTableThirdmax  = (float) 2.0875;

	public static final float IschemicStrokeTableFirstmax = (float) 142.8571;
	public static final float IschemicStrokeTableSecondmax = (float) 2.4286;
	public static final float IschemicStrokeTableThirdmax  = (float) 1.73160;

	public static final float HypertensionTableFirstmax = (float) 4.2857;
	public static final float HypertensionTableSecondmax = (float)0.8347;
	public static final float HypertensionTableThirdmax  = (float) 0.4873;
//.18 -.5 
	public static final float CoronaryHeartDiseaseTableFirstmax = (float) 250;
	public static final float CoronaryHeartDiseaseTableSecondmax = (float) 2.8382;
	public static final float CoronaryHeartDiseaseTableThirdmax  = (float) 2.0500;

	public static final float HemorrhagicStrokeTableFirstmax = (float) 4.0404;
	public static final float HemorrhagicStrokeTableSecondmax = (float) 0.4008;
	public static final float HemorrhagicStrokeTableThirdmax  = (float) 0.2835;
//0.18028413  0.28
	public static final float HeartFailureTableFirstmax = (float) 333.3333;
	public static final float HeartFailureTableSecondmax = (float) 3.2930;
	public static final float HeartFailureTableThirdmax = (float) 2.2187;
}