package com.ge.healtheconomics.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ge.healtheconomics.pojo.PopulationLayer;
//for disease layer
public class DiseaseMapper implements RowMapper<PopulationLayer> {

	@Override
	public PopulationLayer mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		PopulationLayer popmapper = new PopulationLayer();
		
        popmapper.setZipcode(rs.getString("zip_code"));
        popmapper.setDiseaseCount( rs.getInt("count"));
		return popmapper;
	}

}
