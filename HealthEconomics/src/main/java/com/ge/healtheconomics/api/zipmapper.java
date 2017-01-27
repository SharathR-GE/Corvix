package com.ge.healtheconomics.api;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Random;

import org.springframework.jdbc.core.RowMapper;


public class zipmapper implements RowMapper<Zip> {

	public zipmapper() {
		// TODO Auto-generated constructor stub
	}

	public Zip mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		Zip z = new  Zip();
		z.setZipcode(rs.getString("zipcode"));
		z.setLat(rs.getFloat("intptlat"));
		z.setLng(rs.getFloat("intptlon"));
		float pc=rs.getFloat("pop_count");
		Float dd = rs.getFloat("count");
		float diseaseD = (float) dd * 1000 / (float) pc;
		z.setDcount(diseaseD);
		z.setPopcount(pc);
//		z.setDcount((float)diseaseD/(float) 1000);
	/*	Random rand = new Random();
		int random_integer = rand.nextInt(999-0) + 0; 
		Random rand2 = new Random();
		int random_integer2 = rand2.nextInt(999-0) + 0; 
		z.setPopcount(random_integer);*/
//		z.setDcount(random_integer2);
		return z;
	}


}
