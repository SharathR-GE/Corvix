package com.ge.healtheconomics.dao;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import com.ge.healtheconomics.pojo.ContactUs;
import com.ge.healtheconomics.pojo.DiseaseInfo;
import com.ge.healtheconomics.pojo.DiseaseTrendCount;
import com.ge.healtheconomics.pojo.Hospital;
import com.ge.healtheconomics.pojo.HospitalView;
import com.ge.healtheconomics.pojo.Location;
import com.ge.healtheconomics.pojo.User;
import com.ge.healtheconomics.pojo.PopulationDensity;
import com.ge.healtheconomics.pojo.StateInfo;
import com.ge.healtheconomics.pojo.States;
import com.ge.healtheconomics.pojo.USAStateLayer;
import com.ge.healtheconomics.pojo.UserFeedback;

public interface HealthEconomicsDAO {

	Location getState(String zipcode) throws Exception;

	List<PopulationDensity> getPopulationDensity(String gender,
			String age, String insurancetype, String years, String zipcode, String state,String disease) throws Exception;

//	String getFeedback(Feedback feedback) throws Exception;

	DiseaseTrendCount getDiseaseTrendData(String disease, String zipcode, String gender, String age, String years,
			String state) throws Exception;
	
	List<String> getHospitalOwnership() throws Exception;

	 List<States> stateLookup() throws Exception;

	Hospital getHospital(String hname, float lat, float log) throws Exception;

	StateInfo getStateInfo(String state, String zip, String abbr) throws Exception;

	List<DiseaseInfo> getDiseases() throws Exception;

	void getFeedBackDownload(String saveAs,HttpServletResponse response) throws IOException, SQLException;

	String getLogin(User login)throws Exception;

	String postUserFeedback(UserFeedback userFeedback) throws Exception;

	String getUserDetails(String username) throws Exception;

	List<USAStateLayer> stateLevelData();

	String postTermsAndCondition(String username, boolean agree) throws Exception; 
	
	String postcontactdetails(ContactUs contactus);

	void getcontactdetails(HttpServletResponse response) throws SQLException, FileNotFoundException, IOException;

	String checkUserCredentials(String username, String password) throws SQLException; 

	List<HospitalView> viewHospital(String hospitalOwnership, int numberBeds, int numberBedsTo,
			boolean magnetDesignation_boolean, boolean organTransplantNetwork_boolean,
			boolean cancerAccreditation_boolean, boolean soleCommunityHospital_boolean,
			boolean academicMedicalCenter_boolean, boolean councilTeachingMembership_boolean, boolean hhi_boolean,
			String zipcode, String state)throws Exception;
}
