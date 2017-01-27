package com.ge.healtheconomics.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ge.healtheconomics.pojo.USAStateLayer;

public class USAStateLayerMapper implements RowMapper<USAStateLayer> {

	@Override
	public USAStateLayer mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		USAStateLayer usa = new USAStateLayer();
		usa.setPop_count(rs.getInt("pop_count"));
		usa.setState(rs.getString("state"));
		usa.setDisease_count(rs.getInt("disease_count"));
		if (usa.getDisease_count() != 0 && usa.getPop_count() != 0) {
			float diseaseDensity = ((float)usa.getDisease_count()*1000 /(float) usa.getPop_count());
			usa.setDisease_density(diseaseDensity);
		}
		return usa;

	}
}
