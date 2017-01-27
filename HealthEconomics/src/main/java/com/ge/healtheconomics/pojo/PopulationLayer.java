package com.ge.healtheconomics.pojo;

public class PopulationLayer {
	private String zipcode;
	private int popCount;
	private int diseaseCount;
	private float diseaseDensity;

	public PopulationLayer() {
		super();
	}

	public PopulationLayer(String zipcode, int popCount, int diseaseCount, float diseaseDensity) {
		super();
		this.zipcode = zipcode;
		this.popCount = popCount;
		this.diseaseCount = diseaseCount;
		this.diseaseDensity = diseaseDensity;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public int getPopCount() {
		return popCount;
	}

	public void setPopCount(int popCount) {
		this.popCount = popCount;
	}

	public int getDiseaseCount() {
		return diseaseCount;
	}

	public void setDiseaseCount(int diseaseCount) {
		this.diseaseCount = diseaseCount;
	}

	public float getDiseaseDensity() {
		return diseaseDensity;
	}

	public void setDiseaseDensity(float diseaseDensity) {
		this.diseaseDensity = diseaseDensity;
	}

}