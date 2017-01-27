package com.ge.healtheconomics.api;

import java.sql.SQLException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mapbox")
public class HealthEconomicsGen2 {

	
	@Autowired	
	JdbcTemplate localTemplate;
	
	@RequestMapping(value = "/count", method = RequestMethod.GET)
	@Cacheable(value="pop2")
	public @ResponseBody Object poctest1( @RequestParam(value = "state", required = false) String state) throws SQLException {
		String sqls=null;
	if(state.equals("All")){
		 sqls = "SELECT mainlocation.zipcode, sum(pop_ins_all_disease.cnt_2014)/4 as count,sum(pop_ins_all_disease.count_2016) as pop_count,mainlocation.intptlat, mainlocation.intptlon FROM app_data.mainlocation, app_data.pop_ins_all_disease WHERE mainlocation.zipcode = pop_ins_all_disease.zip_code and  pop_ins_all_disease.age_range_id IN  (:agesid) group by mainlocation.intptlat, mainlocation.intptlon, mainlocation.zipcode";

	}else{
		sqls = "SELECT mainlocation.zipcode, sum(pop_ins_all_disease.cnt_2014)/4 as count,sum(pop_ins_all_disease.count_2016) as pop_count,mainlocation.intptlat, mainlocation.intptlon FROM app_data.mainlocation, app_data.pop_ins_all_disease WHERE mainlocation.zipcode = pop_ins_all_disease.zip_code and  pop_ins_all_disease.age_range_id IN  (:agesid) and pop_ins_all_disease.state='"+state+"' group by mainlocation.intptlat, mainlocation.intptlon, mainlocation.zipcode";
	}	
	System.out.println(sqls);

		List ids = Arrays.asList(new Integer[] { 1, 2, 3, 4 });
		Map<String, List> paramMap = Collections.singletonMap("agesid", ids);
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(localTemplate.getDataSource());
		List<Zip> lg = null;
		lg = template.query(sqls, paramMap, new zipmapper());
		
		return lg;
	}
	
	@RequestMapping(value="/test", method=RequestMethod.GET)
	public @ResponseBody Object hello() throws SQLException{
		
	   System.out.println("datalake jdbcteplate : "+localTemplate.getDataSource().getConnection());
	  String sql="select tablename from pg_tables where schemaname='siebel_americas'";
      List<String> str = localTemplate.queryForList(sql,String.class);
		return str;
	}
}
