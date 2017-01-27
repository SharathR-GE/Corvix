package com.ge.healtheconomics.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ge.healtheconomics.pojo.Location;

public class LocationMapper implements RowMapper<Location> {

	@Override
	public Location mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		Location locationmapper = new Location();
		locationmapper.setZipcode(rs.getString("zipcode"));
		locationmapper.setState(rs.getString("state"));
		locationmapper.setCity(rs.getString("city"));
		locationmapper.setAbbreviation(rs.getString("abbreviation"));
		return locationmapper;
	}

}
