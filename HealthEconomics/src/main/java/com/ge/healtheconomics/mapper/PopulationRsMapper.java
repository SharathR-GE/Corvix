package com.ge.healtheconomics.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;

import org.springframework.jdbc.core.RowMapper;

import com.ge.healtheconomics.pojo.PopulationLayer;
// for population layer
public class PopulationRsMapper implements RowMapper<HashMap<String, PopulationLayer>> {

	@Override
	public HashMap<String, PopulationLayer> mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		
		HashMap<String, PopulationLayer> hm =new HashMap<String, PopulationLayer> ();
		PopulationLayer popmapper = new PopulationLayer();

		popmapper.setZipcode(rs.getString("pop_zip_code"));
	//	popmapper.setDiseaseCount(rs.getInt("disease_count"));
		popmapper.setPopCount(rs.getInt("pop_count"));

		hm.put(String.valueOf(popmapper.getZipcode()), popmapper);
		return hm;
	}

}
