package com.ge.healtheconomics.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;

import com.ge.healtheconomics.pojo.Gender;
import com.ge.healtheconomics.pojo.YearReport;

public class DiseaseTrendMapper implements RowMapper<YearReport> {

	@Override
	public YearReport mapRow(ResultSet rs, int rowNum) throws SQLException {

		// TODO Auto-generated method stub

		YearReport yR=new YearReport();
		

		Gender gender1 = new Gender();
		gender1.setAgerange("0-17");
		gender1.setMaleCount(rs.getInt("ma1"));
		gender1.setFemaleCount(rs.getInt("fa1"));
		gender1.setAllGenderCount(gender1.getMaleCount() + gender1.getFemaleCount());

		Gender gender2 = new Gender();
		gender2.setAgerange("18-34");
		gender2.setMaleCount(rs.getInt("ma2"));
		gender2.setFemaleCount(rs.getInt("fa2"));
		gender2.setAllGenderCount(gender2.getMaleCount() + gender2.getFemaleCount());

		Gender gender3 = new Gender();
		gender3.setAgerange("35-64");
		gender3.setMaleCount(rs.getInt("ma3"));
		gender3.setFemaleCount(rs.getInt("fa3"));
		gender3.setAllGenderCount(gender3.getMaleCount() + gender3.getFemaleCount());

		Gender gender4 = new Gender();
		gender4.setAgerange("65+");
		gender4.setMaleCount(rs.getInt("ma4"));
		gender4.setFemaleCount(rs.getInt("fa4"));
		gender4.setAllGenderCount(gender4.getMaleCount() + gender4.getFemaleCount());

		List<Gender> gender = new ArrayList<Gender>();
		gender.add(gender1);
		gender.add(gender2);
		gender.add(gender3);
		gender.add(gender4);

		yR.setAgeRanges(gender);
		//diseaseTrendCount.setAgeRange(gender);
		return yR;
	}

}
