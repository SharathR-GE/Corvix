package com.ge.healtheconomics.pojo;

import java.util.List;

public class AgeRange {
	private List<Gender> ageRange;

	public AgeRange() {
		super();
	}

	public AgeRange(List<Gender> ageRange) {
		super();
		this.ageRange = ageRange;
	}

	public List<Gender> getAgeRange() {
		return ageRange;
	}

	public void setAgeRange(List<Gender> ageRange) {
		this.ageRange = ageRange;
	}


}
