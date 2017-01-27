package com.ge.healtheconomics.dao.impl;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.text.WordUtils;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import com.ge.healtheconomics.api.HealthEconomicsController;
import com.ge.healtheconomics.constant.HealthEconomicsConstant;
import com.ge.healtheconomics.dao.HealthEconomicsDAO;
import com.ge.healtheconomics.exception.CorvixInvalidUserException;
import com.ge.healtheconomics.exception.CorvixNoHospitalFoundException;
import com.ge.healtheconomics.mapper.DiseaseTrendMapper;
import com.ge.healtheconomics.mapper.HositalMapper;
import com.ge.healtheconomics.mapper.HospitalViewMapper;
import com.ge.healtheconomics.mapper.LocationMapper;
import com.ge.healtheconomics.mapper.PopulationLayerMapper;
import com.ge.healtheconomics.mapper.StateMapper;
import com.ge.healtheconomics.mapper.USAStateLayerMapper;
import com.ge.healtheconomics.pojo.ContactUs;
import com.ge.healtheconomics.pojo.DiseaseInfo;
import com.ge.healtheconomics.pojo.DiseaseTrendCount;
import com.ge.healtheconomics.pojo.Diseases;
import com.ge.healtheconomics.pojo.Hospital;
import com.ge.healtheconomics.pojo.HospitalView;
import com.ge.healtheconomics.pojo.Location;
import com.ge.healtheconomics.pojo.User;
import com.ge.healtheconomics.pojo.PopulationDensity;
import com.ge.healtheconomics.pojo.PopulationLayer;
import com.ge.healtheconomics.pojo.StateInfo;
import com.ge.healtheconomics.pojo.States;
import com.ge.healtheconomics.pojo.USAStateLayer;
import com.ge.healtheconomics.pojo.UserFeedback;
import com.ge.healtheconomics.pojo.YearReport;

@Component
public class HealthEconomicsDAOImpl implements HealthEconomicsDAO {

	private static final Logger logger = Logger.getLogger(HealthEconomicsController.class);

	@Autowired
	private JdbcTemplate jdbcTemplate;

	// @Autowired
	// private DataSource dataSource;

	// user feedback file name
	@Value("${input.filename}")
	private String filename;

	// user details file name
	@Value("${input.userDetailsfilename}")
	private String userDetailsfilename;

	// This method will give a detailed information of given zipcode
	@Override
	public Location getState(String zipcode) throws Exception {
		// TODO Auto-generated method stub
		Location location = null;
		// int zip = Integer.parseInt(zipcode);
		try {
			String SQL = HealthEconomicsConstant.getLocationFromZipcode;
			logger.info("fetching state location Information from SQL :" + SQL);

			location = jdbcTemplate.queryForObject(SQL, new Object[] { zipcode }, new LocationMapper());

		} catch (EmptyResultDataAccessException e) {
			logger.info("Exception- EmptyResultDataAccessException");
			logger.info("No Data Found " + e);
			throw new EmptyResultDataAccessException("Invalid Zipcode", 0);
			// throw new CorvixInvalidZipCodeException();

		} catch (Exception e) {
			logger.info("Unknown Exception");
			// e.printStackTrace();
			throw new Exception("Excpetion ", e);
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		return location;
	}

	// This method will give list of population count, disease density and
	// disease count for given filter criteria
	@Override
	@Cacheable(value = "pop")
	public List<PopulationDensity> getPopulationDensity(String gender, String age, String insurancetype, String years,
			String zipcode, String state, String disease) throws Exception {
		// TODO Auto-generated method stub
		long lStartTime = new Date().getTime();

		PopulationDensity popdensity = new PopulationDensity();
		List<PopulationDensity> popdensitylist = new ArrayList<PopulationDensity>();
		if (insurancetype == null) {
			insurancetype = "1,2,3,4";
		}
		//
		// Insurance data are classified into 4 different types and mapped into
		// 4 different insurance_id as 1, 2, 3 and 4
		int insurance_type1 = 0;
		int insurance_type2 = 0;
		int insurance_type3 = 0;
		int insurance_type4 = 0;
		int num_types = 0;
		if (insurancetype.indexOf('1') >= 0) {
			insurance_type1 = 1;
			num_types++;
		}
		if (insurancetype.indexOf('2') >= 0) {
			insurance_type2 = 2;
			num_types++;
		}
		if (insurancetype.indexOf('3') >= 0) {
			insurance_type3 = 3;
			num_types++;
		}
		if (insurancetype.indexOf('4') >= 0) {
			insurance_type4 = 4;
			num_types++;
		}
		// num_types = 1;

		// Age ranges are classified into 4 different types and mapped into 4
		// different age_id as 1, 2, 3 and 4
		int age_range_id1 = 0;
		int age_range_id2 = 0;
		int age_range_id3 = 0;
		int age_range_id4 = 0;

		int gender_range_id1 = 0;
		int gender_range_id2 = 0;

		if (age.indexOf('1') >= 0) {
			age_range_id1 = 1;
		}
		if (age.indexOf('2') >= 0) {
			age_range_id2 = 2;
		}
		if (age.indexOf('3') >= 0) {
			age_range_id3 = 3;
		}
		if (age.indexOf('4') >= 0) {
			age_range_id4 = 4;
		}

		// Gender are classified into 2 different types and mapped into 2
		// different gender_id as 1 and 2

		if (gender.indexOf('1') >= 0) {
			gender_range_id1 = 1;
		}
		if (gender.indexOf('2') >= 0) {
			gender_range_id2 = 2;
		}

		// To apply filters in data state wise, If state is null then zipcode is
		// used to find state name from DB
		if (state == null) {
			if (zipcode == null) {
				logger.debug("Autodetection failed ");
			} else {
				logger.debug("fetching state details from zipcode :" + zipcode);
				Location loc = getState(zipcode);
				state = loc.getAbbreviation();
			}
		}

		logger.info(age + ":" + gender + ":" + zipcode + ":" + years);
		logger.info("State " + state);
		List<PopulationLayer> populationLayer = null;

		// if (insurancetype == null) {
		// insurancetype = "1,2,3,4";
		// }

		String SQL = null;

		// For disease density splitting into 3 different ranges , Values are
		// Pre-calculated for all disease kind of disease as mention below.
		float firstmaxDiseaseDensity = 0;
		float secondmaxDiseaseDensity = 0;
		float thirdmaxDiseaseDensity = 0;

		if (disease.equals("All Disease")) {
			disease = HealthEconomicsConstant.AllDiseaseTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.AllDiseaseTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.AllDiseaseTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.AllDiseaseTableThirdmax;

		} else if (disease.equals("All Heart Disease")) {
			disease = HealthEconomicsConstant.AllHeartDiseaseTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.AllHeartDiseaseTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.AllHeartDiseaseTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.AllHeartDiseaseTableThirdmax;

		} else if (disease.equals("All Stroke")) {
			disease = HealthEconomicsConstant.AllStrokeTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.AllStrokeTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.AllStrokeTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.AllStrokeTableThirdmax;

		} else if (disease.equals("Cardiac Dysrhythmia")) {
			disease = HealthEconomicsConstant.CardiacDysrhythmiaTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.CardiacDysrhythmiaTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.CardiacDysrhythmiaTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.CardiacDysrhythmiaTableThirdmax;

		} else if (disease.equals("Acute Myocardial Infarction")) {
			disease = HealthEconomicsConstant.AcuteMyocardialInfarctionTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.AcuteMyocardialInfarctionTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.AcuteMyocardialInfarctionTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.AcuteMyocardialInfarctionTableThirdmax;

		} else if (disease.equals("Ischemic Stroke")) {
			disease = HealthEconomicsConstant.IschemicStrokeTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.IschemicStrokeTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.IschemicStrokeTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.IschemicStrokeTableThirdmax;

		} else if (disease.equals("Hypertension")) {
			disease = HealthEconomicsConstant.HypertensionTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.HypertensionTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.HypertensionTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.HypertensionTableThirdmax;

		} else if (disease.equals("Coronary Heart Disease")) {
			disease = HealthEconomicsConstant.CoronaryHeartDiseaseTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.CoronaryHeartDiseaseTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.CoronaryHeartDiseaseTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.CoronaryHeartDiseaseTableThirdmax;

		} else if (disease.equals("Hemorrhagic Stroke")) {
			disease = HealthEconomicsConstant.HemorrhagicStrokeTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.HemorrhagicStrokeTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.HemorrhagicStrokeTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.HemorrhagicStrokeTableThirdmax;

		} else if (disease.equals("Heart Failure")) {
			disease = HealthEconomicsConstant.HeartFailureTable;
			firstmaxDiseaseDensity = HealthEconomicsConstant.HeartFailureTableFirstmax;
			secondmaxDiseaseDensity = HealthEconomicsConstant.HeartFailureTableSecondmax;
			thirdmaxDiseaseDensity = HealthEconomicsConstant.HeartFailureTableThirdmax;

		}
		try {
			if (state == null || state.equals("All")) {
				// Years are mapped as :
				// Current year = 0 ; Next 5 year =5 ;Next 10 year = 10
				if (years.equals("0")) {

					SQL = HealthEconomicsConstant.getPopDiseaseyear0Data1 + num_types
							+ HealthEconomicsConstant.getPopDiseaseyearDiseasesfrom + disease
							+ HealthEconomicsConstant.getPopDiseaseData;
					logger.info("SQL All:" + SQL);
				}
				if (years.equals("5")) {

					SQL = HealthEconomicsConstant.getPopDiseaseyear5Data1 + num_types
							+ HealthEconomicsConstant.getPopDiseaseyearDiseasesfrom + disease
							+ HealthEconomicsConstant.getPopDiseaseData;
					logger.info("SQL All:" + SQL);

				}
				if (years.equals("10")) {

					SQL = HealthEconomicsConstant.getPopDiseaseyear10Data1 + num_types
							+ HealthEconomicsConstant.getPopDiseaseyearDiseasesfrom + disease
							+ HealthEconomicsConstant.getPopDiseaseData;
					logger.info("SQL All:" + SQL);

				}
				populationLayer = jdbcTemplate.query(SQL,
						new Object[] { gender_range_id1, gender_range_id2, age_range_id1, age_range_id2, age_range_id3,
								age_range_id4, insurance_type1, insurance_type2, insurance_type3, insurance_type4 },
						new PopulationLayerMapper());

			} else {

				if (years.equals("0")) {

					SQL = HealthEconomicsConstant.getPopDiseaseyear0Data1 + num_types
							+ HealthEconomicsConstant.getPopDiseaseyearDiseasesfrom + disease
							+ HealthEconomicsConstant.getPopDiseaseDataWithState;
					logger.info("SQL :" + SQL);

				}
				if (years.equals("5")) {

					SQL = HealthEconomicsConstant.getPopDiseaseyear5Data1 + num_types
							+ HealthEconomicsConstant.getPopDiseaseyearDiseasesfrom + disease
							+ HealthEconomicsConstant.getPopDiseaseDataWithState;

					logger.info("SQL :" + SQL);

				}
				if (years.equals("10")) {

					SQL = HealthEconomicsConstant.getPopDiseaseyear10Data1 + num_types
							+ HealthEconomicsConstant.getPopDiseaseyearDiseasesfrom + disease
							+ HealthEconomicsConstant.getPopDiseaseDataWithState;

					logger.info("SQL :" + SQL);

				}
				populationLayer = jdbcTemplate.query(SQL,
						new Object[] { gender_range_id1, gender_range_id2, age_range_id1, age_range_id2, age_range_id3,
								age_range_id4, insurance_type1, insurance_type2, insurance_type3, insurance_type4,
								state },
						new PopulationLayerMapper());

			}

			/*
			 * To calculate or split disease density ranges approximately equal
			 * in 3 ranges Proccess for splitting density are: 1. sort the
			 * disease density in asc. order in an array 2. get the length of
			 * array and values in length*3/3 ,length*2/3 , length*1/3 3. pass
			 * the values as firstmaxDiseaseDensity ; secondmaxDiseaseDensity;
			 * thirdmaxDiseaseDensity;
			 * 
			 * The ranges will be : 0-thirdmaxDiseaseDensity
			 * ,thirdmaxDiseaseDensity-secondmaxDiseaseDensity ;
			 * >secondmaxDiseaseDensity
			 */

			// ArrayList<Float> arrayD = new ArrayList<Float>();
			// int count = 0;
			// int count1 = 0;
			// int count2 = 0;
			// int count3 = 0;
			//
			// for (int i = 0; i < populationLayer.size(); i++) {
			// arrayD.add(populationLayer.get(i).getDiseaseDensity());
			// if (populationLayer.get(i).getDiseaseDensity() > 1000) {
			// // populationLayer.get(i).getZipcode();
			// logger.info("zip :" + populationLayer.get(i).getZipcode());
			//
			// count++;
			// }
			// if (populationLayer.get(i).getDiseaseDensity() >= 0
			// && populationLayer.get(i).getDiseaseDensity() <=
			// thirdmaxDiseaseDensity) {
			// count1++;
			// }
			//
			// if (populationLayer.get(i).getDiseaseDensity() >
			// thirdmaxDiseaseDensity
			// && populationLayer.get(i).getDiseaseDensity() <=
			// secondmaxDiseaseDensity) {
			// count2++;
			// }
			//
			// if (populationLayer.get(i).getDiseaseDensity() >
			// secondmaxDiseaseDensity) {
			// count3++;
			// }
			// }
			// logger.info("count :" + count);
			// logger.info("count1 :" + count1);
			// logger.info("count2 :" + count2);
			// logger.info("count3 :" + count3);
			//
			// Collections.sort(arrayD);
			//
			// logger.info("Diseases :" + disease);
			// logger.info("max 1/3 :" + arrayD.get(arrayD.size() * 1 / 3));
			// logger.info("max 2/3:" + arrayD.get(arrayD.size() * 2 / 3));
			// logger.info("max 1/1:" + arrayD.get(arrayD.size() - 1));

			/*
			ArrayList<Float> arrayD = new ArrayList<Float>();
			int count0 = 0;
			int count1 = 0;

			for (int i = 0; i < populationLayer.size(); i++) {
				arrayD.add(populationLayer.get(i).getDiseaseDensity());

				if (populationLayer.get(i).getDiseaseDensity() > 0.000000001) {
					populationLayer.get(i).getZipcode();
					count1++;
				}
				if (populationLayer.get(i).getDiseaseDensity() ==0) {
					populationLayer.get(i).getZipcode();
					count0++;
				}
			}
			System.out.println("count 0 :" + count0 + ":" + "count 1 :" + count1);
			*/
			
			
			popdensity.setFirstmaxDiseaseDensity(firstmaxDiseaseDensity);
			popdensity.setSecondmaxDiseaseDensity(secondmaxDiseaseDensity);
			popdensity.setThirdmaxDiseaseDensity(thirdmaxDiseaseDensity);

			popdensity.setPopulationCount(populationLayer);
			popdensity.setState(state);
			popdensitylist.add(popdensity);
		} catch (EmptyResultDataAccessException e) {
			logger.info("No Data Found - EmptyResultDataAccessException");
			throw new EmptyResultDataAccessException("No data found against the selected filter :", 0);
			// throw new CorvixEmptyResultDataAccessException();

		} catch (Exception e) {
			logger.info("Exception");
			throw new Exception("Excpetion ", e);
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		long lEndTime = new Date().getTime();

		long difference = lEndTime - lStartTime;

		logger.info("Elapsed milliseconds: " + difference);
		return popdensitylist;
	}

	@Override
	public DiseaseTrendCount getDiseaseTrendData(String disease, String zipcode, String gender, String age,
			String years, String state) throws Exception {
		// TODO Auto-generated method stub

		// To calculate response time
		long lStartTime = new Date().getTime();

		if (state == null) {
			if (zipcode == null) {
				logger.debug("Autodetection failed and Illinois state is selected by default");
				throw new Exception("Autodetection failed and Illinois state is selected by default ");
				// state = "IL";
			} else {
				Location loc = getState(zipcode);
				state = loc.getAbbreviation();
				logger.debug("fetching state details from zipcode");
			}
		}
		DiseaseTrendCount dTC = new DiseaseTrendCount();

		logger.info("years " + years + state);
		YearReport year0 = new YearReport();
		YearReport year5 = new YearReport();
		YearReport year10 = new YearReport();

		List<YearReport> yearReportList = new ArrayList<YearReport>();
		try {
			// "All Disease " is not having any mapping in DB . So, High-chart
			// data for All Disease can be calculated
			// without any disease_id.
			if (disease.equals("All Disease")) {

				String SQL = HealthEconomicsConstant.getAllDiseaseTrendDataYear0;
				logger.info("SQL5:" + SQL);
				year0 = jdbcTemplate.queryForObject(SQL,
						new Object[] { state, state, state, state, state, state, state, state, state },
						new DiseaseTrendMapper());

				String SQL1 = HealthEconomicsConstant.getAllDiseaseTrendDataYear5;
				logger.info("SQL :" + SQL1);
				year5 = jdbcTemplate.queryForObject(SQL1,
						new Object[] { state, state, state, state, state, state, state, state, state },
						new DiseaseTrendMapper());

				String SQL2 = HealthEconomicsConstant.getAllDiseaseTrendDataYear10;
				logger.info("SQL :" + SQL2);
				year10 = jdbcTemplate.queryForObject(SQL2,
						new Object[] { state, state, state, state, state, state, state, state, state },
						new DiseaseTrendMapper());
			} else {

				String sql = HealthEconomicsConstant.getDisease_id;
				int disease_id = jdbcTemplate.queryForObject(sql, new Object[] { disease }, Integer.class);

				logger.info("d_id" + disease_id);

				String SQL = HealthEconomicsConstant.getDiseaseTrendDataYear0;
				logger.info("SQL5:" + SQL);
				year0 = jdbcTemplate.queryForObject(SQL,
						new Object[] { state, disease_id, state, disease_id, state, disease_id, state, disease_id,
								state, disease_id, state, disease_id, state, disease_id, state, disease_id, state },
						new DiseaseTrendMapper());

				String SQL1 = HealthEconomicsConstant.getDiseaseTrendDataYear5;
				logger.info("SQL :" + SQL1);
				year5 = jdbcTemplate.queryForObject(SQL1,
						new Object[] { state, disease_id, state, disease_id, state, disease_id, state, disease_id,
								state, disease_id, state, disease_id, state, disease_id, state, disease_id, state },
						new DiseaseTrendMapper());

				String SQL2 = HealthEconomicsConstant.getDiseaseTrendDataYear10;
				logger.info("SQL :" + SQL2);
				year10 = jdbcTemplate.queryForObject(SQL2,
						new Object[] { state, disease_id, state, disease_id, state, disease_id, state, disease_id,
								state, disease_id, state, disease_id, state, disease_id, state, disease_id, state },
						new DiseaseTrendMapper());
			}

			yearReportList.add(year0);
			yearReportList.add(year5);
			yearReportList.add(year10);
			dTC.setState(state);
			dTC.setYearReport(yearReportList);

		} catch (EmptyResultDataAccessException e) {
			logger.info("EmptyResultDataAccessException -No data found");
			throw new EmptyResultDataAccessException("No data found ", 0);
			// throw new CorvixEmptyResultDataAccessException();

		} catch (Exception e) {
			logger.info("Exception ");
			throw new Exception("Exception ", e);
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		long lEndTime = new Date().getTime();

		long difference = lEndTime - lStartTime;

		logger.info("Elapsed milliseconds: " + difference);

		return dTC;
	}

	// This method will give a List of Hospital Ownership
	@Override
	public List<String> getHospitalOwnership() throws Exception {
		// TODO Auto-generated method stub
		List<String> Ownership = new ArrayList<String>();
		List<String> list = new ArrayList<String>();
		Ownership.add("All");
		try {
			String SQL = HealthEconomicsConstant.getListOfHospitalOwnerShip;
			logger.info("SQL :" + SQL);
			list = jdbcTemplate.queryForList(SQL, String.class);
			Ownership.addAll(list);
		} catch (EmptyResultDataAccessException e) {
			logger.info("EmptyResultDataAccessException -No data found");
			throw new Exception("No data found " + e);
			// throw new CorvixEmptyResultDataAccessException();

			// e.printStackTrace();
		} catch (Exception e) {
			logger.info("Exception ", e);
			throw new Exception("Exception " + e);
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		// - return hospital;
		return Ownership;
	}

	// This method will give a List of State and its abbreviation
	@Override
	public List<States> stateLookup() throws Exception {
		// TODO Auto-generated method stub
		List<States> statelist = new ArrayList<States>();
		try {
			String SQL = HealthEconomicsConstant.getListOfStateNameandAbb;
			logger.info("SQL :" + SQL);
			statelist = jdbcTemplate.query(SQL, new StateMapper());

		} catch (EmptyResultDataAccessException e) {
			logger.info("EmptyResultDataAccessException :", e);

			throw new Exception("No state found ");
		} catch (Exception e) {
			logger.info("Exception ", e);
			throw new Exception("Exception :", e);
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		return statelist;
	}

	// This method will give a detailed information of a hospital
	@Override
	public Hospital getHospital(String hname, float lat, float log) throws Exception {
		// TODO Auto-generated method stub
		Hospital hospital = null;
		try {
			String SQL = HealthEconomicsConstant.getHospitalDetails;
			logger.info("SQL :" + SQL);
			hospital = jdbcTemplate.queryForObject(SQL, new Object[] { hname, lat, log }, new HositalMapper());

		} catch (EmptyResultDataAccessException e) {
			logger.info("No Hospital information found against given input :", e);
			throw new Exception("No Hospital information found against given input :", e);
			// throw new CorvixNoHospitalFoundException();

		} catch (Exception e) {
			logger.info("Exception :", e);
			throw new Exception("Exception :" + e.getMessage());
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}

		return hospital;
	}

	// This method will give a State and its central ( lat ,long)
	@Override
	public StateInfo getStateInfo(String state, String zip, String abbr) throws Exception {
		// TODO Auto-generated method stub
		StateInfo sI = null;
		if (state == null && abbr == null) {
			logger.error("No state Info");
			if (zip == null) {
				logger.error("Unable to find StateInfo");
			} else {
				Location loc = getState(zip);
				abbr = loc.getAbbreviation();
			}
		}
		try {
			if (abbr != null) {
				String SQL = HealthEconomicsConstant.getStateNameFromAbbr + abbr
						+ HealthEconomicsConstant.getStateNameFromAbbr2;
				// String SQL =HealthEconomicsConstant.getStateNameFromAbbr;
				logger.info("SQL :" + SQL + ":" + abbr);
				String state_name_c = (String) jdbcTemplate.queryForObject(SQL, String.class);
				logger.info("state_name_c :" + state_name_c);
				state = state_name_c;
			}

		} catch (EmptyResultDataAccessException e) {
			throw new Exception("No state found against given abbreviation");
		} catch (Exception e) {
			throw new Exception("Exception :", e);
			// throw new CorvixException();

		}
		try {
			logger.info("State :" + state);
			String SQL1 = HealthEconomicsConstant.getStateInfoFromStateName;
			logger.info("SQL1 :" + SQL1);
			sI = jdbcTemplate.queryForObject(SQL1, new Object[] { state },
					new BeanPropertyRowMapper<StateInfo>(StateInfo.class));
		} catch (EmptyResultDataAccessException e) {
			logger.info("No data found against given state :", e);
			throw new Exception("No data found against given state :" + state);
			// throw new CorvixEmptyResultDataAccessException();

		} catch (Exception e) {
			logger.info("Exception :", e);

			throw new Exception("Exception :", e);
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		return sI;
	}

	// This method will give a List of Disease with classification of heart and
	// stroke
	@Override
	public List<DiseaseInfo> getDiseases() throws Exception {
		// TODO Auto-generated method stub
		List<String> heartlist = new ArrayList<String>();
		List<String> templist = new ArrayList<String>();

		List<String> strokelist = new ArrayList<String>();
		List<DiseaseInfo> list = new ArrayList<DiseaseInfo>();

		DiseaseInfo dList = new DiseaseInfo();
		Diseases d = new Diseases();

		// To maintain an order in drop-down according to category
		heartlist.add("All Heart Disease");
		try {
			String SQL1 = HealthEconomicsConstant.getDiseasesNamesUnderHeart;
			String SQL2 = HealthEconomicsConstant.getDiseasesNamesUnderStroke;
			logger.info("SQL :" + SQL1);
			logger.info("SQL2 :" + SQL2);

			templist = jdbcTemplate.queryForList(SQL1, String.class);
			strokelist = jdbcTemplate.queryForList(SQL2, String.class);

			heartlist.addAll(templist);
			d.setHeartDisease(heartlist);
			d.setStrokeDisease(strokelist);
			dList.setAllDiseases(d);
			list.add(dList);

		} catch (EmptyResultDataAccessException e) {
			logger.info("No data found :", e);
			throw new Exception("No data found", e);
			// throw new CorvixEmptyResultDataAccessException();

		} catch (Exception e) {
			logger.info("Exception:", e);
			throw new Exception(" :", e);
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}

		return list;
	}

	// This method will give a feedback details in .xlsx format
	@Override
	public void getFeedBackDownload(String username, HttpServletResponse response) throws IOException, SQLException {
		// TODO Auto-generated method stub
		long lStartTime = new Date().getTime();

		List<UserFeedback> fblist = null;
		try {
			String SQL1 = HealthEconomicsConstant.getAllFeedback;
			fblist = jdbcTemplate.query(SQL1, new BeanPropertyRowMapper<UserFeedback>(UserFeedback.class));

			response.setContentType("application/vnd.ms-excel");
			response.setHeader("Content-Disposition", "attachment; filename=" + filename);

			HSSFWorkbook workbook = new HSSFWorkbook();
			HSSFSheet sheet = workbook.createSheet("Feedback");

			/* Get access to HSSFCellStyle */
			HSSFCellStyle my_style = workbook.createCellStyle();
			/* Create HSSFFont object from the workbook */
			HSSFFont my_font = workbook.createFont();
			/* set the weight of the font */
			my_font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
			/* attach the font to the style created earlier */
			my_style.setFillBackgroundColor(IndexedColors.YELLOW.getIndex());
			my_style.setFillPattern(CellStyle.ALIGN_FILL);

			my_style.setFont(my_font);

			/*
			 * At this stage, we have a bold style created which we can attach
			 * to a cell
			 */

			Row header = sheet.createRow(0);
			// header.createCell(0).setCellValue()""));

			/*
			 * Connection conn = jdbcTemplate.getDataSource().getConnection();
			 * DatabaseMetaData metadata = conn.getMetaData(); ResultSet
			 * resultSet = metadata.getColumns(null, "app_data", "userfeedback",
			 * null);
			 * 
			 * int j = 0; while (resultSet.next()) { String name =
			 * resultSet.getString("COLUMN_NAME"); String type =
			 * resultSet.getString("TYPE_NAME"); int size =
			 * resultSet.getInt("COLUMN_SIZE"); System.out.println(
			 * "Column name: [" + name + "]; type: [" + type + "]; size: [" +
			 * size + "]"); System.out.println(WordUtils.capitalizeFully(name));
			 * header.createCell(j).setCellValue(name)); //
			 * header.createCell(j).setCellStyle(boldStyle); j++; }
			 */
			header.createCell(0).setCellValue("Customer Name");
			header.createCell(1).setCellValue("Business Address");
			header.createCell(2).setCellValue("Business Email");

			header.createCell(3).setCellValue(
					"Could you see yourself or someone in your organization using a tool like this to gain insight on specific challenges your organization faces?");
			header.createCell(4).setCellValue(
					"Will a tool like this that visualizes demographic, health and resource data be valuable to you or your organization for population health management and/or for future planning?");

			header.createCell(18).setCellValue(
					"What additional questions would you like to ask (or what additional information would you like to see) to increase the usefulness of this tool?");
			header.createCell(17).setCellValue(
					"What functions or features would you like to see added to make this tool more useful?");
			header.createCell(19).setCellValue(
					"Consider a tool like this that includes imaging equipment install base data.  If imaging install base data was included, would this tool be valuable to you for: ");

			header.createCell(6)
					.setCellValue("Content :UserExperience :1. Ability to specify geographic area of focus");
			header.createCell(7)
					.setCellValue("Content :UserExperience :2.Ability to select key subcategories of interest");
			header.createCell(8)
					.setCellValue("Content :UserExperience :3.Degree of information available per hospital");
			header.createCell(9)
					.setCellValue("Content :UserExperience :4.Inerpreting data presented on the main screen");
			header.createCell(10)
					.setCellValue("Content :UserExperience :5.Level of insight provided on the Insight screens");

			header.createCell(11).setCellValue("Design features :UserExperience :1.Heat map colors on the main screen");
			header.createCell(12).setCellValue("Design features :UserExperience :2.Font size on the main screen");
			header.createCell(13).setCellValue("Design features :UserExperience :3.Colors used on filetr tab ");
			header.createCell(14).setCellValue("Design features :UserExperience :4.Font size on filter tab");
			header.createCell(15).setCellValue("Design features :UserExperience :5.Colors used on insight screens");
			header.createCell(16).setCellValue("Design features :UserExperience :6.Font used on insight screens");

			header.createCell(5).setCellValue("Are you aware of other tools presenting similar types of information?");
			header.createCell(20).setCellValue("Any additional comments or suggestions?");

			for (int j = 0; j <= 20; j++)
				header.getCell(j).setCellStyle(my_style);

			for (int i = 1; i < fblist.size() + 1; i++) {
				UserFeedback f = fblist.get(i - 1);
				Row dataRow = sheet.createRow(i);
				// System.out.println("Decoded value is " + new
				// String(Base64.decodeBase64(userFeedback.getCustomerName())));

				// new String(Base64.decodeBase64(new
				// String(Base64.decodeBase64(f.getCustomerName()))));
				dataRow.createCell(0).setCellValue(new String(Base64.decodeBase64(f.getCustomerName())));
				dataRow.createCell(1).setCellValue(new String(Base64.decodeBase64(f.getBusinessAddress())));
				dataRow.createCell(2).setCellValue(new String(Base64.decodeBase64(f.getBusinessEmail())));

				dataRow.createCell(3).setCellValue(f.getCustomerProblem_1());
				dataRow.createCell(4).setCellValue(f.getCustomerProblem_2());

				dataRow.createCell(18).setCellValue(f.getToolContent_1());
				dataRow.createCell(17).setCellValue(f.getToolContent_2());
				dataRow.createCell(19).setCellValue(f.getToolContent_3());

				dataRow.createCell(6).setCellValue(f.getUserExperience_1());
				dataRow.createCell(7).setCellValue(f.getUserExperience_2());
				dataRow.createCell(8).setCellValue(f.getUserExperience_3());
				dataRow.createCell(9).setCellValue(f.getUserExperience_4());
				dataRow.createCell(10).setCellValue(f.getUserExperience_5());

				dataRow.createCell(11).setCellValue(f.getUserExperience_6());
				dataRow.createCell(12).setCellValue(f.getUserExperience_7());
				dataRow.createCell(13).setCellValue(f.getUserExperience_8());
				dataRow.createCell(14).setCellValue(f.getUserExperience_9());
				dataRow.createCell(15).setCellValue(f.getUserExperience_10());
				dataRow.createCell(16).setCellValue(f.getUserExperience_11());

				dataRow.createCell(5).setCellValue(f.getMarket_1());
				dataRow.createCell(20).setCellValue(f.getFinal_1());
			}
			try {
				workbook.write(response.getOutputStream()); // Write workbook to
															// response
				long lEndTime = new Date().getTime();
				long difference = lEndTime - lStartTime;
				logger.info("Elapsed milliseconds: " + difference);

			} catch (FileNotFoundException e) {
				logger.info("FileNotFoundException :", e);
				throw new FileNotFoundException("FileNotFoundException");
			} catch (IOException e) {
				logger.info("IOException :", e);
				throw new IOException("IOException :", e);
			} finally {
				logger.info("connection closed");
				jdbcTemplate.getDataSource().getConnection().close();

			}
		} catch (FileNotFoundException e) {
			logger.info("FileNotFoundException :", e);
			throw new FileNotFoundException("FileNotFoundException");
		} catch (IOException e) {
			logger.info("IOException :", e);
			throw new IOException("IOException :", e);
		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		// return fblist;
	}

	// For Login action
	@Override
	public String getLogin(User login) throws Exception {

		// ResultSet rs = null;
		logger.info("login :" + login.getUsername());

		// String message = null;
		JSONObject jsonObject = new JSONObject();
		String username = login.getUsername();
		String password = new String(Base64.decodeBase64(login.getPassword().getBytes()));

		try {

			String SQL = HealthEconomicsConstant.getUserDetailsbyName;
			logger.info("login SQL:" + SQL);
			logger.info("user :" + username);
			User lg = jdbcTemplate.queryForObject(SQL, new BeanPropertyRowMapper<User>(User.class), username);

			if (lg.getPassword().equals(password)) {

				if (lg.isFeedback() == false) {

					// lg.getCount() == 1 refers that user agreed terms and
					// condition and login count =1
					if (lg.getCount() == 1) {
						jsonObject.put("message", "Valid User-NeedBack");
					}
					// lg.getCount() == 0 refers that user not agreed T&C or not
					// login before
					if (lg.getCount() == 0) {
						jsonObject.put("message", "Valid User-FirstLogin");
					}

					/*
					 * if (lg.getCount() == 1) { jsonObject.put("message",
					 * "Valid User-NeedBack"); } else if (lg.getCount() < 3) {
					 * logger.info("count update:" + lg.getCount() + 1 + " :" +
					 * login.getUsername());
					 * 
					 * String SQL2 =
					 * HealthEconomicsConstant.getUpdateCounterforUserName; int
					 * update = jdbcTemplate.update(SQL2, lg.getCount() + 1,
					 * login.getUsername()); logger.info("login SQL:" + SQL2);
					 * logger.info("login SQL:" + update); if (lg.getCount() ==
					 * 0) { jsonObject.put("message", "Valid User-FirstLogin");
					 * 
					 * } else { jsonObject.put("message", "Valid User"); } }
					 * else { String SQL3 =
					 * HealthEconomicsConstant.getUpdateCounterforUserName; int
					 * update = jdbcTemplate.update(SQL3, lg.getCount() + 1,
					 * login.getUsername()); logger.info("login SQL:" + SQL3);
					 * logger.info("login SQL:" + update);
					 * jsonObject.put("message", "Valid User"); }
					 */

				} else {

					jsonObject.put("message", "Valid User");
				}
			} else {
				jsonObject.put("message", "Invalid user");
			}
		} catch (EmptyResultDataAccessException e) {
			logger.info("Invalid user :", e);
			throw new EmptyResultDataAccessException("Invalid user", 0);
			// throw new CorvixInvalidUserException();

		} catch (Exception e) {
			logger.info("Exception :", e);
			throw new Exception("Exception :", e);
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}

		return jsonObject.toString();
	}

	// To post feedback details
	@Override
	public String postUserFeedback(UserFeedback userFeedback) throws Exception {
		// TODO Auto-generated method stub
		JSONObject msg = new JSONObject();
		// String str = userFeedback.getCustomerName();
		// byte[] bytesEncoded =
		// Base64.encodeBase64(userFeedback.getCustomerName().getBytes());
		// System.out.println(
		// "ecncoded value is " + new
		// String(Base64.encodeBase64(userFeedback.getCustomerName().getBytes())));
		// System.out.println(userFeedback.getCustomerName().substring(0,
		// userFeedback.getCustomerName().length()));
		// String encryptedName = new
		// String(Base64.encodeBase64(userFeedback.getCustomerName().getBytes()));
		// String encryptedAdd = new
		// String(Base64.encodeBase64(userFeedback.getBusinessAddress().getBytes()));
		// String encryptedEmail = new
		// String(Base64.encodeBase64(userFeedback.getBusinessEmail().getBytes()));
		//
		// userFeedback.setCustomerName(encryptedName.substring(0,
		// encryptedName.length() - 2));
		// userFeedback.setBusinessAddress(encryptedAdd.substring(0,
		// encryptedAdd.length() - 2));
		// userFeedback.setBusinessEmail(encryptedName.substring(0,
		// encryptedEmail.length() - 2));

		// System.out.println("Decoded value is " + new
		// String(Base64.decodeBase64(userFeedback.getCustomerName())));
		if (userFeedback.getFinal_1() == null) {
			userFeedback.setFinal_1("");
		}
		try {
			String SQL = HealthEconomicsConstant.insertUserFeedback;

			int feed = jdbcTemplate.update(SQL, userFeedback.getCustomerName(), userFeedback.getBusinessAddress(),
					userFeedback.getBusinessEmail(), userFeedback.getCustomerProblem_1(),
					userFeedback.getCustomerProblem_2(), userFeedback.getToolContent_1(),
					userFeedback.getToolContent_2(), userFeedback.getToolContent_3(),
					userFeedback.getUserExperience_1(), userFeedback.getUserExperience_2(),
					userFeedback.getUserExperience_3(), userFeedback.getUserExperience_4(),
					userFeedback.getUserExperience_5(), userFeedback.getUserExperience_6(),
					userFeedback.getUserExperience_7(), userFeedback.getUserExperience_8(),
					userFeedback.getUserExperience_9(), userFeedback.getUserExperience_10(),
					userFeedback.getUserExperience_11(), userFeedback.getMarket_1(), userFeedback.getFinal_1());

			logger.info("userFeedback :" + feed);
			if (feed == 1) {
				msg.put("message", "Feedback Details Successfully Added");

				String SQL2 = HealthEconomicsConstant.getUpdatefeedbackbyUser;
				// new String(Base64.decodeBase64(f.getCustomerName()));
				// logger.info("user :" +userFeedback.getCustomerName());
				logger.info("user :" + new String(Base64.decodeBase64(userFeedback.getCustomerName())));
				logger.info("SQL :" + SQL2);
				String username = new String(Base64.decodeBase64(userFeedback.getCustomerName()));

				jdbcTemplate.update(SQL2, username);

			} else {
				msg.put("message", "Failed to update Feedback Details");
			}

		} catch (EmptyResultDataAccessException e) {
			logger.info("EmptyResultDataAccessException -No data found");
			throw new EmptyResultDataAccessException("No data found " + e.getMessage(), 0);
			// throw new CorvixEmptyResultDataAccessException();

			// e.printStackTrace();
		} catch (Exception e) {
			logger.info("EmptyResultDataAccessException -No data found");
			throw new Exception("Exception " + e.getMessage());
			// throw new CorvixException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		return msg.toString();
	}

	// To get user details from ajax call
	@Override
	public String getUserDetails(String username) throws Exception {
		// TODO Auto-generated method stub
		User login = new User();
		JSONObject jsonObject = new JSONObject();

		try {
			String SQL = HealthEconomicsConstant.getUserDetailsbyName;
			login = jdbcTemplate.queryForObject(SQL, new BeanPropertyRowMapper<User>(User.class), username);
			logger.info("login SQL:" + SQL);

			if (login.isTermsandcondition()) {
				jsonObject.put("terms", "Agreed");
			} else {
				jsonObject.put("terms", "Required");
			}

			if (login.isFeedback()) {
				jsonObject.put("message", "Feedback has been provided");
			} else {
				jsonObject.put("message", "Feedback NOT provided");
			}
			if (login.getRole().equals("ADMIN")) {
				jsonObject.put("role", "ADMIN");
			} else {
				jsonObject.put("role", "User");
			}
		} catch (EmptyResultDataAccessException e) {
			logger.info("Invalid user", e);
			throw new EmptyResultDataAccessException("Invalid user", 0);
			// throw new CorvixInvalidUserException();
		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}

		return jsonObject.toString();

	}

	@Override
	public List<USAStateLayer> stateLevelData() {
		// TODO Auto-generated method stub

		List<USAStateLayer> usaData = new ArrayList<USAStateLayer>();
		String SQL = HealthEconomicsConstant.getUSAData;
		usaData = jdbcTemplate.query(SQL, new USAStateLayerMapper());
		return usaData;
	}

	// this method is to update an user with terms and conditions.
	@Override
	public String postTermsAndCondition(String username, boolean agree) throws Exception {
		// TODO Auto-generated method stub

		JSONObject jsonObject = new JSONObject();
		logger.info("terms condition" + agree);
		try {
			if (agree) {
				logger.info("updated");
				String SQL1 = HealthEconomicsConstant.getUpdateTermsAndConditionbyUser;
				jdbcTemplate.update(SQL1, username);
				jsonObject.put("message", "Terms and Condition -agreed");

				// to set count=1
				String SQL2 = HealthEconomicsConstant.getUpdateCounterforUserName;
				int update = jdbcTemplate.update(SQL2, 1, username);
				logger.info("login SQL1:" + SQL1);
				logger.info("login SQL2:" + SQL2 + ": update:" + update);
				//

			} else {
				logger.info("not updated");
			}
		} catch (EmptyResultDataAccessException e) {
			throw new EmptyResultDataAccessException("Invalid user", 0);
			// throw new CorvixInvalidUserException();

		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}

		return jsonObject.toString();
	}

	// To post contact details
	@Override
	public String postcontactdetails(ContactUs contactus) {
		// TODO Auto-generated method stub
		JSONObject jsonObject = new JSONObject();

		String SQL = HealthEconomicsConstant.insertUserDetails;
		int feed = jdbcTemplate.update(SQL, contactus.getFirstName(), contactus.getLastName(), contactus.getEmail(),
				contactus.getPhonenumber(), contactus.getJob(), contactus.getCompany(), contactus.getQuestion());
		if (feed == 1) {
			jsonObject.put("message", "contact updated");

		}
		return jsonObject.toString();
	}

	// This method will give a user details in xlsx format
	@Override
	public void getcontactdetails(HttpServletResponse response) throws SQLException, IOException {
		// TODO Auto-generated method stub
		List<ContactUs> fblist = null;
		try {
			String SQL1 = HealthEconomicsConstant.getAllContactDetails;
			fblist = jdbcTemplate.query(SQL1, new BeanPropertyRowMapper<ContactUs>(ContactUs.class));

			response.setContentType("application/vnd.ms-excel");
			response.setHeader("Content-Disposition", "attachment; filename=" + userDetailsfilename);

			HSSFWorkbook workbook = new HSSFWorkbook();
			HSSFSheet sheet = workbook.createSheet("ContactUs");

			/* Get access to HSSFCellStyle */
			HSSFCellStyle my_style = workbook.createCellStyle();
			/* Create HSSFFont object from the workbook */
			HSSFFont my_font = workbook.createFont();
			/* set the weight of the font */
			my_font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
			/* attach the font to the style created earlier */
			my_style.setFillBackgroundColor(IndexedColors.YELLOW.getIndex());
			my_style.setFillPattern(CellStyle.ALIGN_FILL);

			my_style.setFont(my_font);

			/*
			 * At this stage, we have a bold style created which we can attach
			 * to a cell
			 */

			Row header = sheet.createRow(0);

			header.createCell(0).setCellValue(WordUtils.capitalize("First Name"));
			header.createCell(1).setCellValue(WordUtils.capitalize("Last Name"));
			header.createCell(2).setCellValue(WordUtils.capitalize("Email"));
			header.createCell(3).setCellValue(WordUtils.capitalize("Phone number"));
			header.createCell(4).setCellValue(WordUtils.capitalize("Job"));
			header.createCell(5).setCellValue(WordUtils.capitalize("Company"));
			header.createCell(6).setCellValue(WordUtils.capitalize("question"));

			for (int j = 0; j <= 6; j++)
				header.getCell(j).setCellStyle(my_style);

			for (int i = 1; i < fblist.size() + 1; i++) {
				ContactUs f = fblist.get(i - 1);
				Row dataRow = sheet.createRow(i);
				// System.out.println("Decoded value is " + new
				// String(Base64.decodeBase64(userFeedback.getCustomerName())));

				// new String(Base64.decodeBase64(new
				// String(Base64.decodeBase64(f.getCustomerName()))));

				if (f.getFirstName() != null) {
					dataRow.createCell(0).setCellValue(new String(Base64.decodeBase64(f.getFirstName())));
				}

				if (f.getLastName() != null) {
					dataRow.createCell(1).setCellValue(new String(Base64.decodeBase64(f.getLastName())));
				}

				if (f.getEmail() != null) {
					dataRow.createCell(2).setCellValue(new String(Base64.decodeBase64(f.getEmail())));
				}

				if (f.getPhonenumber() != null) {
					dataRow.createCell(3).setCellValue(new String(Base64.decodeBase64(f.getPhonenumber())));
				}
				if (f.getJob() != null) {

					dataRow.createCell(4).setCellValue(f.getJob());
				}
				if (f.getCompany() != null) {

					dataRow.createCell(5).setCellValue(f.getCompany());
				}
				if (f.getQuestion() != null) {

					dataRow.createCell(6).setCellValue(f.getQuestion());
				}

			}
			try {
				workbook.write(response.getOutputStream()); // Write workbook to
															// response

			} catch (FileNotFoundException e) {
				logger.info("FileNotFoundException :", e);
				throw new FileNotFoundException("FileNotFoundException");
			} catch (IOException e) {
				logger.info("IOException :", e);
				throw new IOException("IOException :", e);
			} finally {
				logger.info("connection closed");
				jdbcTemplate.getDataSource().getConnection().close();

			}
		} catch (FileNotFoundException e) {
			logger.info("FileNotFoundException :", e);
			throw new FileNotFoundException("FileNotFoundException");
		} catch (IOException e) {
			logger.info("IOException :", e);
			throw new IOException("IOException :", e);
		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
	}

	@Override
	public String checkUserCredentials(String username, String password) throws SQLException {
		// TODO Auto-generated method stub
		String user = "";
		try {

			String SQL = HealthEconomicsConstant.getUserCredentails;
			// logger.info("SQL " + SQL);
			User lg = jdbcTemplate.queryForObject(SQL, new BeanPropertyRowMapper<User>(User.class), username);
			if (lg.getPassword().equals(password)) {
				user = "Valid User";
			} else {
				user = "Invalid password";
			}
			// logger.info("status :" + user);
		} catch (EmptyResultDataAccessException e) {
			// throw new Exception("Invalid user");
			user = "No user found";
		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		return user;

	}

	// multiselect hospital
	@Override
	public List<HospitalView> viewHospital(String hospitalOwnership, int numberBeds, int numberBedsTo,
			boolean magnetDesignation_boolean, boolean organTransplantNetwork_boolean,
			boolean cancerAccreditation_boolean, boolean soleCommunityHospital_boolean,
			boolean academicMedicalCenter_boolean, boolean councilTeachingMembership_boolean, boolean hhi_boolean,
			String zipcode, String state) throws Exception {
		List<HospitalView> hospitalview = null;
		if (state == null) {
			if (zipcode != null) {
				Location loc = getState(zipcode);
				state = loc.getAbbreviation();
			}
		}
		// TODO Auto-generated method stub
		// List<HospitalView> hospitalview =
		// healthEcoDao.viewHospital(hospitalOwnership, numberBeds,
		// numberBedsTo, magnetDesignation_boolean,
		// organTransplantNetwork_boolean, cancerAccreditation_boolean,
		// soleCommunityHospital_boolean, academicMedicalCenter_boolean,
		// councilTeachingMembership_boolean,
		// hhi_boolean, zipcode, state);

		// hospitalview = jdbcTemplate.query(SQL,
		// new Object[] { numberBeds ,
		// hospitalOwnership,numberBedsTo,hospitalOwnership,state,state,hospitalOwnership,magnetDesignation_boolean,
		// organTransplantNetwork_boolean, cancerAccreditation_boolean,
		// soleCommunityHospital_boolean, academicMedicalCenter_boolean,
		// councilTeachingMembership_boolean,
		// hhi_boolean,magnetDesignation_boolean,
		// organTransplantNetwork_boolean, cancerAccreditation_boolean,
		// soleCommunityHospital_boolean, academicMedicalCenter_boolean,
		// councilTeachingMembership_boolean,
		// hhi_boolean},
		// new HospitalViewMapper());

		try {
			// we are checking hospitalOwnership to check whether filter is
			// applied

			if (hospitalOwnership == null) {
				if (state == null) {
					logger.info("SQL All");

					String SQL1 = HealthEconomicsConstant.getAllHospitalView;

					logger.info("SQL 1: " + SQL1);
					hospitalview = jdbcTemplate.query(SQL1, new HospitalViewMapper());
				} else {
					String SQL1 = HealthEconomicsConstant.getAllHospitalOfStateView;

					logger.info("SQL 1: " + SQL1);
					hospitalview = jdbcTemplate.query(SQL1, new Object[] { state }, new HospitalViewMapper());
				}
			} else {

				HospitalSQLBulider SQLbuild = new HospitalSQLBulider();
				String SQL = SQLbuild.create("").number_beds(numberBeds, hospitalOwnership)
						.number_bedsTo(numberBedsTo, hospitalOwnership, state).hq_state(state)
						.hospital_ownership(hospitalOwnership)
						.concatOpen(magnetDesignation_boolean, organTransplantNetwork_boolean,
								cancerAccreditation_boolean, soleCommunityHospital_boolean,
								academicMedicalCenter_boolean, councilTeachingMembership_boolean, hhi_boolean)
						.magnet_designation(magnetDesignation_boolean)
						.organ_transplant_network(organTransplantNetwork_boolean)
						.cancer_accreditation(cancerAccreditation_boolean)
						.sole_community_hospital(soleCommunityHospital_boolean)
						.academic_medical_center(academicMedicalCenter_boolean)
						.council_teaching_membership(councilTeachingMembership_boolean).hhi(hhi_boolean).concatClose()
						.build();

				logger.info("SQL Test" + SQL);
				hospitalview = jdbcTemplate.query(SQL, new HospitalViewMapper());
			}
		} catch (EmptyResultDataAccessException e) {
			logger.info("EmptyResultDataAccessException -No data found");
			throw new EmptyResultDataAccessException("No hospital found :" + e, 0);
			// throw new CorvixEmptyResultDataAccessException();
		} catch (Exception e) {
			logger.info("EmptyResultDataAccessException -No data found");
			throw new Exception("Exception  :" + e);
			// throw new CorvixException();
		} finally {
			logger.info("connection closed");
			jdbcTemplate.getDataSource().getConnection().close();

		}
		// return hospitalDetails;
		return hospitalview;

	}
}
