package com.ge.healtheconomics.pojo;

import java.util.List;

public class YearReport {
	private List<Gender> ageRanges;

	public List<Gender> getAgeRanges() {
		return ageRanges;
	}

	public void setAgeRanges(List<Gender> ageRanges) {
		this.ageRanges = ageRanges;
	}

	public YearReport(List<Gender> ageRanges) {
		super();
		this.ageRanges = ageRanges;
	}

	public YearReport() {
		// TODO Auto-generated constructor stub
	}

}
