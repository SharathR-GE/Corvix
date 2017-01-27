package com.ge.healtheconomics.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ge.healtheconomics.pojo.States;

public class StateMapper implements RowMapper<States> {

	@Override
	public States mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		States statemapper = new States();
		statemapper.setState(rs.getString("state_name_c"));
		statemapper.setAbbreviation(rs.getString("abbr"));

		return statemapper;
	}



}
