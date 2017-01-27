package com.ge.healtheconomics.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.apache.commons.codec.binary.Base64;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ge.healtheconomics.dao.HealthEconomicsDAO;
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
import com.ge.healtheconomics.service.HealthEconomicsService;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.Logger;
/*
 * HealthEconomicsController is the controller class which controlls all the 
 * api in corvix app with 'corvix' as prefix for all api.
 * Authentication for all accessing api is handled by authentication()
 * and called in each api within controller
 */
@RestController
@RequestMapping("/corvix")
public class HealthEconomicsController {

	@Autowired
	HealthEconomicsService healthEconomicsService;
	
	//Used to authenticate users 
	@Autowired
	HealthEconomicsDAO healthEcoDao;
	
	

	private static final Logger logger = Logger.getLogger(HealthEconomicsController.class);

	// To check user by ajax call in login page for dynamic response
	@CrossOrigin("*")
	@RequestMapping(value = "/getuserinfo", method = RequestMethod.GET)
	public String getUserDetails(@RequestParam(value = "username", required = false) String username) throws Exception {
		logger.info("getuserinfo");
		return healthEconomicsService.getUserDetails(username);

	}

	// To login
	@CrossOrigin("*")
	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = {
			"application/json;charset=UTF-8" }, produces = { "application/json;charset=UTF-8" })
	public String postLoginDetails(HttpServletResponse response, @RequestBody User login) throws Exception {
		logger.info("login");
		return healthEconomicsService.getLogin(login);
	}

	// To update terms and condition
	@CrossOrigin("*")
	@RequestMapping(value = "/termsandcondition", method = RequestMethod.POST, consumes = {
			"application/json;charset=UTF-8" }, produces = { "application/json;charset=UTF-8" })
	public String postTermsAndCondition(HttpServletResponse response, @RequestBody User login,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("termsandcondition");

		String username = login.getUsername();
		boolean agree = login.isTermsandcondition();
		return healthEconomicsService.postTermsAndCondition(username, agree);
	}

	// GetZipCode from lat & long & state details for zipcode
	@CrossOrigin("*")
	@RequestMapping(value = "/getzipcode", method = RequestMethod.GET)
	public Location getZipCode(HttpServletResponse response,
			@RequestParam(value = "longitude", required = false) String log,
			@RequestParam(value = "longitude", required = false) String lat,
			@RequestParam(value = "zipcode", required = false) String zipcode,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("Input : " + log + " : " + lat);

		return healthEconomicsService.getZipCode(lat, log, zipcode);
	}

	// USA State Level data
	@CrossOrigin("*")
	@RequestMapping(value = "/stateLevelData", method = RequestMethod.GET)
	public List<USAStateLayer> stateLevelData(@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("stateLevelData");
		return healthEconomicsService.stateLevelData();
	}

	// To get state Central
	@CrossOrigin("*")
	@RequestMapping(value = "/statecentral", method = RequestMethod.GET)
	public StateInfo getStateInfo(HttpServletResponse response,
			@RequestParam(value = "state", required = false) String state,
			@RequestParam(value = "zip", required = false) String zip,
			@RequestParam(value = "abbr", required = false) String abbr,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("statecentral");

		return healthEconomicsService.getStateInfo(state, zip, abbr);

	}

	// To getPopulation count and disease count
	@CrossOrigin("*")
	@RequestMapping(value = "/getPopulation", method = RequestMethod.GET)
	public Object getPopulationDensity(HttpServletResponse response,
			@RequestParam(value = "disease", required = true) String disease,
			@RequestParam(value = "gender", required = false) String gender,
			@RequestParam(value = "age", required = false) String age,
			@RequestParam(value = "insurancetype", required = false) String insurancetype,
			@RequestParam(value = "years", required = true) String years,
			@RequestParam(value = "zipcode", required = false) String zipcode,
			@RequestParam(value = "state", required = false) String state,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("getPopulation count  of age, gender:" + age + ":" + gender);

		List<PopulationDensity> poplayer = healthEconomicsService.getPopulationDiseaseDensity(gender, age,
				insurancetype, years, zipcode, state, disease);

		return poplayer;
	}

	// To get Data for HighCharts
	@CrossOrigin("*")
	@RequestMapping(value = "/GetCount", method = RequestMethod.GET)
	public DiseaseTrendCount getDiseaseTrendData(HttpServletResponse response,
			@RequestParam(value = "disease", required = true) String disease,
			@RequestParam(value = "gender", required = false) String gender,
			@RequestParam(value = "age", required = false) String age,
			@RequestParam(value = "years", required = false) String years,
			@RequestParam(value = "zipcode", required = false) String zipcode,
			@RequestParam(value = "state", required = false) String state,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.debug("getHighChartdata");

		return healthEconomicsService.getDiseaseTrendData(disease, gender, age, years, zipcode, state);

	}

	// To get List of hospital filters acc to filter
	@CrossOrigin("*")
	@RequestMapping(value = "/gethospitalview", method = RequestMethod.GET)
	public Object viewHospital(HttpServletResponse response,
			@RequestParam(value = "hospitalOwnership", required = false) String hospitalOwnership,
			@RequestParam(value = "numberBeds", defaultValue = "0", required = false) int numberBeds,
			@RequestParam(value = "numberBedsTo", defaultValue = "0", required = false) int numberBedsTo,
			@RequestParam(value = "magnetDesignation_boolean", required = false) boolean magnetDesignation_boolean,
			@RequestParam(value = "organTransplantNetwork_boolean", required = false) boolean organTransplantNetwork_boolean,
			@RequestParam(value = "cancerAccreditation_boolean", required = false) boolean cancerAccreditation_boolean,
			@RequestParam(value = "soleCommunityHospital_boolean", required = false) boolean soleCommunityHospital_boolean,
			@RequestParam(value = "academicMedicalCenter_boolean", required = false) boolean academicMedicalCenter_boolean,
			@RequestParam(value = "councilTeachingMembership_boolean", required = false) boolean councilTeachingMembership_boolean,
			@RequestParam(value = "hhi_boolean", required = false) boolean hhi_boolean,
			@RequestParam(value = "zipcode", required = false) String zipcode,
			@RequestParam(value = "state", required = false) String state,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("HospitalResourcesAvailable");

		List<HospitalView> hospitalview = healthEconomicsService.viewHospital(hospitalOwnership, numberBeds,
				numberBedsTo, magnetDesignation_boolean, organTransplantNetwork_boolean, cancerAccreditation_boolean,
				soleCommunityHospital_boolean, academicMedicalCenter_boolean, councilTeachingMembership_boolean,
				hhi_boolean, zipcode, state);

		return hospitalview;
	}

	// To get a detailed Hospital information 
	@CrossOrigin("*")
	@RequestMapping(value = "/hospital", method = RequestMethod.GET)
	public Hospital getHospital(HttpServletResponse response,
			@RequestParam(value = "hname", required = false) String hname,
			@RequestParam(value = "lat", defaultValue = "0", required = false) float lat,
			@RequestParam(value = "long", defaultValue = "0", required = false) float log,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("get Hospital");

		return healthEconomicsService.getHospital(hname, lat, log);

	}

	// User feedback 
	@CrossOrigin("*")
	@RequestMapping(value = "/userfeedback", method = RequestMethod.POST, consumes = {
			"application/json;charset=UTF-8" }, produces = { "application/json;charset=UTF-8" })
	public String postUserFeedback(HttpServletResponse response, @RequestBody UserFeedback userFeedback,@RequestHeader(value = "Authorization") String auth)
			throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("postuserfeedback");

		if (userFeedback.getCustomerName() == null || userFeedback.getBusinessAddress() == null
				|| userFeedback.getBusinessEmail() == null) {
			throw new Exception("Invalid Input");
		}
		// healthEconomicsService.getDiseaseLayer(disease,gender,age,insurancetype,years,zipcode);
		return healthEconomicsService.postUserFeedback(userFeedback);
	}

	// To download feedback in xls format
	@CrossOrigin("*")
	@RequestMapping(value = "/download", method = RequestMethod.GET)
	public void getFeedBackDownload(HttpServletResponse response,@RequestHeader(value = "Authorization") String auth) throws Exception {
		// @RequestHeader(value = "username", required = false) String username
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		String username = "u1";
		logger.info("downloadFeedback");
		healthEconomicsService.getFeedBackDownload(username, response);

	}

	// To update Contact us
	@CrossOrigin("*")
	@RequestMapping(value = "/contactus", method = RequestMethod.POST, consumes = {
			"application/json;charset=UTF-8" }, produces = { "application/json;charset=UTF-8" })
	public String postcontactdetails(HttpServletResponse response, @RequestBody ContactUs contactus,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("contactus");
		return healthEconomicsService.postcontactdetails(contactus);
	}

	// To download contactdetails
	@CrossOrigin("*")
	@RequestMapping(value = "/contactdetailsdownload", method = RequestMethod.GET)
	public void getcontactdetails(HttpServletResponse response,@RequestHeader(value = "Authorization") String auth) throws Exception {
		// @RequestHeader(value = "username", required = false) String username
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("contactdetailsdownload");
		healthEconomicsService.getcontactdetails(response);

	}

	// To populate hospital ownership for drop-down
	@CrossOrigin("*")
	@RequestMapping(value = "/hospitalOwnership", method = RequestMethod.GET)
	public List<String> getHospitalOwnership(HttpServletResponse response,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("getHospitalOwnership");

		return healthEconomicsService.getHospitalOwnership();

	}

	// To populate states for drop-down
	@CrossOrigin("*")
	@RequestMapping(value = "/state", method = RequestMethod.GET)
	public List<States> stateLookup(HttpServletResponse response,@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("stateList");

		return healthEconomicsService.stateLookup();

	}

	// List of Diseases for drop-down
	@CrossOrigin("*")
	@RequestMapping(value = "/diseases", method = RequestMethod.GET)
	public List<DiseaseInfo> getDiseases(@RequestHeader(value = "Authorization") String auth) throws Exception {
		if (!(boolean) authentication(auth)) {
			throw new Exception("Unauthorized attempt");
		}
		logger.info("diseasesList");
		return healthEconomicsService.getDiseases();

	}
	
	//Authentication for all accessin api
	@CrossOrigin("*")
	@RequestMapping(value = "/auth", method = RequestMethod.GET)
	public Object authentication(String auth) throws Exception {
		boolean authentication = false;
		String authorization = auth;
		String base64String = authorization.substring(6, authorization.length());
//		logger.info("Base64 part " + base64String);
		byte[] arr = Base64.decodeBase64(base64String);
		String usernamePassword = new String(arr);
		// logger.info("Uname:password : " + usernamePassword);
		String[] credentials = usernamePassword.split(":");
		String username = credentials[0];
		String password = credentials[1];
		String user;
		try {
			user = healthEcoDao.checkUserCredentials(username, password);
			logger.info(user);
			if (user.equals("Invalid password")) {
				logger.info("Invalid password");
			} else if (user.equals("No user found")) {
				logger.info("No user found");
			} else if (user.equals("Valid User")) {
				authentication = true;
			}
			logger.info("Authorized");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return authentication;
	}
}
