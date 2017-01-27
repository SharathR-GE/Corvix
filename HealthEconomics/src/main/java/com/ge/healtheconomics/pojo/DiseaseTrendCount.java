package com.ge.healtheconomics.pojo;

import java.util.List;


public class DiseaseTrendCount {
	private String state;
	private List<YearReport> yearReport;
	public DiseaseTrendCount(String state, List<YearReport> yearReport) {
		super();
		this.state = state;
		this.yearReport = yearReport;
	}
	public DiseaseTrendCount() {
		super();
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public List<YearReport> getYearReport() {
		return yearReport;
	}
	public void setYearReport(List<YearReport> yearReport) {
		this.yearReport = yearReport;
	}

	

}
