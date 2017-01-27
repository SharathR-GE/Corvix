package com.ge.healtheconomics.pojo;

import java.util.List;


public class DiseaseTrend {
	private List<DiseaseTrendCount> diseaseTrendCount;

	public DiseaseTrend(List<DiseaseTrendCount> diseaseTrendCount) {
		super();
		this.diseaseTrendCount = diseaseTrendCount;
	}

	public DiseaseTrend() {
		super();
	}

	public List<DiseaseTrendCount> getDiseaseTrendCount() {
		return diseaseTrendCount;
	}

	public void setDiseaseTrendCount(List<DiseaseTrendCount> diseaseTrendCount) {
		this.diseaseTrendCount = diseaseTrendCount;
	}

}
