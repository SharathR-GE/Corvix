package com.ge.healtheconomics.mapper;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ge.healtheconomics.pojo.PopulationLayer;

public class PopulationLayerMapper implements RowMapper<PopulationLayer> {

	// public Number getzipcodedata(int zipcode) throws SQLException {
	// // TODO Auto-generated method stub
	// System.out.println(zipcode);
	//
	// String SQL1 = "select sum(a2019_adj_trend_discharges) as count from
	// \"HealthSchema\".disease where (zip_code=92612 )and (gender_id in (1,2))
	// and (age_range_id in(1,2,3)) and (disease_id in (1,2)) group by
	// zip_code";
	// System.out.println("mapper test :" + SQL1);
	// int count = jdbcTemplate.queryForObject(SQL1, Integer.class);
	// System.out.println("TEST :"+count);
	//
	// System.out.println(count);
	// return count;
	// }

	public PopulationLayerMapper() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public PopulationLayer mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub

		PopulationLayer popmapper = new PopulationLayer();

		popmapper.setZipcode(rs.getString("zip_code"));
		popmapper.setDiseaseCount(rs.getInt("disease_count"));

		// System.out.println(rs.getString("pop_zip_code")+":"+rs.getString("disease_count")+":"+rs.getInt("pop_count"));
		popmapper.setPopCount(rs.getInt("pop_count"));

		
		
		if (popmapper.getPopCount() != 0 && popmapper.getDiseaseCount() != 0) {
			// System.out.println((float)popmapper.getDiseaseCount() * 1000/
			// (float)popmapper.getPopCount());
			float diseaseD = (float) popmapper.getDiseaseCount() * 1000 / (float) popmapper.getPopCount();

			float roundoffdiseaseD = round(diseaseD, 2);
			// System.out.println(result);
			popmapper.setDiseaseDensity(roundoffdiseaseD);

		}
		/*if (popmapper.getPopCount() != 0 && popmapper.getDiseaseCount() != 0) {
			// System.out.println((float)popmapper.getDiseaseCount() * 1000/
			// (float)popmapper.getPopCount());
			float diseaseD = (float) popmapper.getDiseaseCount() * 1000 / (float) popmapper.getPopCount();
			// System.out.println(diseaseD);
			popmapper.setDiseaseDensity(diseaseD);

		}*/

/*		if (popmapper.getPopCount() != 0) {
			// System.out.println((float)popmapper.getDiseaseCount() * 1000/
			// (float)popmapper.getPopCount());
			float popD = 0;
			if (rs.getInt("landsqmi") != 0) {
				popD = (float) popmapper.getPopCount() / (float) rs.getInt("landsqmi");
			}
			// float popD = (float)popmapper.getPopCount() /
			// (float)rs.getInt("landsqmi");
			// System.out.println(diseaseD);
			popmapper.setPopDensity((int) popD);
		}*/
		
		
 //       int diseasesDensity =(int) popmapper.getDiseaseDensity();
//        float radius=0;
//		if (diseasesDensity <= 0) {
//			radius = 0;
//		}else if (diseasesDensity <= 10) {
//			radius = (float) 0.8;
//		}else if (diseasesDensity <= 20 && diseasesDensity > 10) {
//			radius = (float) 1.3;
//		}
//		else if (diseasesDensity <= 40 && diseasesDensity > 20) {
//			radius = (float) 1.8;
//		}
//		else if (diseasesDensity <= 150 && diseasesDensity > 20) {
//			radius = (float) 2.2;
//		}
//		else if( diseasesDensity <= 1000 && diseasesDensity > 150) {
//			radius = 3;
//		}
//		popmapper.setBubbleRadius(radius);
		// popmapper.setPopCount(rs.getInt("landsqmi"));

//		popmapper.setX_axis(rs.getFloat("x"));
//		popmapper.setY_axis(rs.getFloat("y"));

		return popmapper;
	}
	

	public static float round(float d, int decimalPlace) {
		BigDecimal bd = new BigDecimal(Float.toString(d));
		bd = bd.setScale(decimalPlace, BigDecimal.ROUND_HALF_UP);
		return bd.floatValue();
	}

}
