package com.ge.healtheconomics.pojo;

public class Gender {
	private String agerange;
	private int maleCount;
	private int femaleCount;
	private int allGenderCount;

	public Gender() {
		super();
	}

	public Gender(String agerange, int maleCount, int femaleCount, int allGenderCount) {
		super();
		this.agerange = agerange;
		this.maleCount = maleCount;
		this.femaleCount = femaleCount;
		this.allGenderCount = allGenderCount;
	}

	public String getAgerange() {
		return agerange;
	}

	public void setAgerange(String agerange) {
		this.agerange = agerange;
	}

	public int getMaleCount() {
		return maleCount;
	}

	public void setMaleCount(int maleCount) {
		this.maleCount = maleCount;
	}

	public int getFemaleCount() {
		return femaleCount;
	}

	public void setFemaleCount(int femaleCount) {
		this.femaleCount = femaleCount;
	}

	public int getAllGenderCount() {
		return allGenderCount;
	}

	public void setAllGenderCount(int allGenderCount) {
		this.allGenderCount = allGenderCount;
	}

}
