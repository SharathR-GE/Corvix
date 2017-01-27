package com.ge.healtheconomics.service.impl;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.apache.http.HttpHost;
import org.apache.http.client.config.RequestConfig;
import org.apache.log4j.Logger;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ge.healtheconomics.api.HealthEconomicsController;
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

@Service
public class HealthEconomicsServiceImpl implements HealthEconomicsService {

	@Autowired
	HealthEconomicsDAO healthEcoDao;

	private Location location;

	private static final Logger logger = Logger.getLogger(HealthEconomicsController.class);

	//To get zipcode Details from google API
	@Override
	public Location getZipCode(String log, String lat, String zipCode) throws Exception {
		// TODO Auto-generated method stub
		try {
			// location = healthEcoDao.getzipcode();
			if (zipCode == null) {
				// location = googlemap(log, lat);
			} else {
				location = healthEcoDao.getState(zipCode);
			}
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			// org.json.JSONException:
			e.printStackTrace();
			try {
				logger.info(" calling google api ");

				// location = googlemap(log, lat);
			} catch (JSONException e1) {
				e1.printStackTrace();
				throw new JSONException("unable to fetch Zipcode");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return location;
	}
//To find zipcode details from google API ,its implemented in UI
	/*
	 * private Location googlemap(String log, String lat) throws Exception { //
	 * TODO Auto-generated method stub String googleURL =
	 * HealthEconomicsConstant.Google_ZipCode_URL + lat + "," + log; // String
	 * getURL = googleURL + lat + "," + log + "&sensor=false";
	 * logger.info(googleURL); HttpGet get = new HttpGet(googleURL);
	 * get.setConfig(getProxy()); CloseableHttpClient httpclient =
	 * HttpClients.createDefault(); int zipCode = 0; try { HttpResponse
	 * Httpresponse = httpclient.execute(get); String response = new String();
	 * HttpEntity responseEntity = Httpresponse.getEntity(); if (responseEntity
	 * != null) { response = EntityUtils.toString(responseEntity); JSONObject
	 * result = new JSONObject(response); logger.info(response); location = new
	 * Location(); int resultlength =
	 * result.getJSONArray("results").getJSONObject(0).getJSONArray(
	 * "address_components") .length(); for (int i = 0; i < resultlength; i++) {
	 * String postal_code = result.getJSONArray("results").getJSONObject(0)
	 * .getJSONArray("address_components").getJSONObject(i).getJSONArray("types"
	 * ).get(0) .toString(); String administrative_area_level_1 =
	 * result.getJSONArray("results").getJSONObject(0)
	 * .getJSONArray("address_components").getJSONObject(i).getJSONArray("types"
	 * ).get(0) .toString(); if
	 * (administrative_area_level_1.equals("administrative_area_level_1")) {
	 * String state = result.getJSONArray("results").getJSONObject(0)
	 * .getJSONArray("address_components").getJSONObject(i).getString(
	 * "long_name").toString(); String abbreviation =
	 * result.getJSONArray("results").getJSONObject(0)
	 * .getJSONArray("address_components").getJSONObject(i).getString(
	 * "short_name").toString(); System.out.println(state);
	 * location.setState(state); location.setAbbreviation(abbreviation);
	 * 
	 * } if (postal_code.equals("postal_code")) { zipCode =
	 * result.getJSONArray("results").getJSONObject(0).getJSONArray(
	 * "address_components")
	 * .getJSONObject(i).getString("long_name").toString();
	 * 
	 * location.setZipcode(zipCode); } }
	 * 
	 * } else { logger.error("Error in fetching zipcode"); throw new Exception(
	 * "unable to fetch ZipCode"); } } catch (JSONException e) { // TODO
	 * Auto-generated catch block logger.error("Error in fetching zipcode " +
	 * e); throw new JSONException("unable to fetch Zipcode"); } catch
	 * (ClientProtocolException e) { // TODO Auto-generated catch block
	 * e.printStackTrace(); } catch (IOException e) { // TODO Auto-generated
	 * catch block e.printStackTrace(); }
	 * 
	 * return location; }
	 * 
	 * // to get zipcode from openStreemap private Location openStreemap(String
	 * log, String lat) { String response; String openStreetmapURL =
	 * HealthEconomicsConstant.Openstreetmap_ZipCode_URL + lat + "&lon=" + log;
	 * //
	 * http://nominatim.openstreetmap.org/reverse?format=json&lat=18.596405&lon=
	 * 73.718245&zoom=18&addressdetails=1 HttpGet get = new
	 * HttpGet(openStreetmapURL); get.setConfig(getProxy()); CloseableHttpClient
	 * httpclient = HttpClients.createDefault();
	 * 
	 * String zipCode = null; try { HttpResponse Httpresponse =
	 * httpclient.execute(get); HttpEntity responseEntity =
	 * Httpresponse.getEntity();
	 * 
	 * if (responseEntity != null) { response =
	 * EntityUtils.toString(responseEntity); logger.info(response);
	 * 
	 * JSONObject result = new JSONObject(response); logger.info(result);
	 * zipCode = result.getJSONObject("address").getString("postcode"); String
	 * state = result.getJSONObject("address").getString("state");
	 * System.out.println(zipCode + ":" + state);
	 * 
	 * location = new Location(); location.setZipcode(zipCode);
	 * location.setState(state); }
	 * 
	 * } catch (ClientProtocolException e) { // TODO Auto-generated catch block
	 * e.printStackTrace(); } catch (IOException e) { // TODO Auto-generated
	 * catch block e.printStackTrace(); }
	 * 
	 * return location; }
	 */
	// proxy setting for ge network
	@Override
	public RequestConfig getProxy() {
		// TODO Auto-generated method stub
		HttpHost proxy = new HttpHost("http-proxy.em.health.ge.com", 88, "http");
		RequestConfig config = RequestConfig.custom().setProxy(proxy).build();
		return config;
	}



	@Override
	public List<PopulationDensity> getPopulationDiseaseDensity(String gender, String age, String insurancetype,
			String years, String zipcode, String state, String disease) throws Exception {
		// TODO Auto-generated method stub
		List<PopulationDensity> populationLayer = healthEcoDao.getPopulationDensity(gender, age, insurancetype, years,
				zipcode, state, disease);
		return populationLayer;
	}


//	@Override
//	public String getFeedback(Feedback feedback) throws Exception {
//		// TODO Auto-generated method stub
//		return healthEcoDao.getFeedback(feedback);
//	}

	@Override
	public DiseaseTrendCount getDiseaseTrendData(String disease, String gender, String age, String years,
			String zipcode, String state) throws Exception {
		// TODO Auto-generated method stub
		return healthEcoDao.getDiseaseTrendData(disease, zipcode, gender, age, years, state);
	}
	@Override
	public  List<String> getHospitalOwnership() throws Exception {
		// TODO Auto-generated method stub
		return healthEcoDao.getHospitalOwnership();
	}

	@Override
	public  List<States> stateLookup() throws Exception {
		// TODO Auto-generated method stub
		return healthEcoDao.stateLookup();
	}

	@Override
	public Hospital getHospital(String hname ,float lat,float log) throws Exception {
		// TODO Auto-generated method stub

		 return healthEcoDao.getHospital(hname,lat,log);
		
	}

	@Override
	public StateInfo getStateInfo(String state, String zip, String abbr) throws Exception {
		// TODO Auto-generated method stub
		return healthEcoDao.getStateInfo(state,zip,abbr);
	}


	@Override
	public List<DiseaseInfo>  getDiseases() throws Exception {
		// TODO Auto-generated method stub
		return healthEcoDao.getDiseases();
	}

	@Override
	public void getFeedBackDownload(String username,HttpServletResponse response) throws IOException, SQLException {
		// TODO Auto-generated method stub
		
		
		 healthEcoDao.getFeedBackDownload(username,response);
	}

	@Override
	public String getLogin(User login) throws Exception {
		// TODO Auto-generated method stub
		return healthEcoDao.getLogin(login);
	}


	@Override
	public String postUserFeedback(UserFeedback userFeedback) throws Exception {
		// TODO Auto-generated method stub
			return healthEcoDao.postUserFeedback(userFeedback);
	}

	@Override
	public String getUserDetails(String username) throws Exception {
		// TODO Auto-generated method stub
		return healthEcoDao.getUserDetails(username);
	}

	@Override
	public List<USAStateLayer> stateLevelData() {
		// TODO Auto-generated method stub
		return  healthEcoDao.stateLevelData();
	}
	@Override
	public String postTermsAndCondition(String username, boolean agree) throws Exception {
		// TODO Auto-generated method stub
		return healthEcoDao.postTermsAndCondition(username,agree);
	} 
	@Override
	public String postcontactdetails(ContactUs contactus) {
		// TODO Auto-generated method stub
		return healthEcoDao.postcontactdetails(contactus);
	}
	@Override
	public void getcontactdetails(HttpServletResponse response) throws SQLException, FileNotFoundException, IOException {
		// TODO Auto-generated method stub
		 healthEcoDao.getcontactdetails(response);

	} 

	
	@Override
	public List<HospitalView> viewHospital(String hospitalOwnership, int numberBeds, int numberBedsTo,
			boolean magnetDesignation_boolean, boolean organTransplantNetwork_boolean,
			boolean cancerAccreditation_boolean, boolean soleCommunityHospital_boolean,
			boolean academicMedicalCenter_boolean, boolean councilTeachingMembership_boolean, boolean hhi_boolean,
			String zipcode, String state) throws Exception {
		// TODO Auto-generated method stub
		List<HospitalView> hospitalview = healthEcoDao.viewHospital(hospitalOwnership, numberBeds,
				numberBedsTo, magnetDesignation_boolean, organTransplantNetwork_boolean, cancerAccreditation_boolean,
				soleCommunityHospital_boolean, academicMedicalCenter_boolean, councilTeachingMembership_boolean,
				hhi_boolean, zipcode, state);

		return hospitalview;
	}
}
