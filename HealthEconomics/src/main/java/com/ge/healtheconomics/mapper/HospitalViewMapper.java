package com.ge.healtheconomics.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ge.healtheconomics.pojo.HospitalView;

public class HospitalViewMapper implements RowMapper<HospitalView> {

	@Override
	public HospitalView mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		HospitalView hospitalView = new HospitalView();
		hospitalView.setHospitalName(rs.getString("hospital_name"));
		hospitalView.setHqLatitude(rs.getFloat("hq_latitude"));
		hospitalView.setHqLongitude(rs.getFloat("hq_longitude"));
		hospitalView.setNumberBeds(rs.getInt("number_beds"));
		return hospitalView;
	}



}
